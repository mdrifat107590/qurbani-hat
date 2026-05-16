const SESSION_KEY = "qurbani-hat-session";
const AUTH_COOKIE = SESSION_KEY;
const USERS_KEY = "qurbani-hat-users";

export function buildAvatarUrl(name) {
  return `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
    name || "Qurbani Hat",
  )}&backgroundColor=b6552e,2f6f57&textColor=ffffff`;
}

export function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

export function toSessionUser(user) {
  if (!user) {
    return null;
  }

  return {
    name: user.name || "Guest User",
    email: normalizeEmail(user.email),
    photoURL: user.photoURL || buildAvatarUrl(user.name),
    provider: user.provider || "local",
    password: user.password || "",
  };
}

export function serializeSession(user) {
  return encodeURIComponent(JSON.stringify(toSessionUser(user)));
}

export function parseSession(value) {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(decodeURIComponent(value));
  } catch {
    return null;
  }
}

export function readCookieSession(cookieValue) {
  return parseSession(cookieValue);
}

export function readBrowserSession() {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = window.localStorage.getItem(SESSION_KEY);
  if (stored) {
    return parseSession(stored);
  }

  const cookieMatch = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${SESSION_KEY}=`));

  return parseSession(cookieMatch?.split("=").slice(1).join("="));
}

export function writeBrowserSession(user) {
  if (typeof window === "undefined") {
    return;
  }

  const serialized = serializeSession(user);
  document.cookie = `${SESSION_KEY}=${serialized}; path=/; max-age=604800; samesite=lax`;
  window.localStorage.setItem(SESSION_KEY, serialized);
}

export function clearBrowserSession() {
  if (typeof window === "undefined") {
    return;
  }

  document.cookie = `${SESSION_KEY}=; path=/; max-age=0; samesite=lax`;
  window.localStorage.removeItem(SESSION_KEY);
}

export function readStoredUsers() {
  if (typeof window === "undefined") {
    return [];
  }

  const stored = window.localStorage.getItem(USERS_KEY);
  if (!stored) {
    return [];
  }

  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function writeStoredUsers(users) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerStoredUser(user) {
  const nextUser = toSessionUser(user);
  const users = readStoredUsers();
  const foundIndex = users.findIndex(
    (item) => normalizeEmail(item.email) === nextUser.email,
  );

  if (foundIndex !== -1) {
    throw new Error("An account with this email already exists.");
  }

  const nextUsers = [...users, nextUser];
  writeStoredUsers(nextUsers);
  return nextUser;
}

export function updateStoredUser(sessionEmail, updates) {
  const users = readStoredUsers();
  const nextEmail = normalizeEmail(sessionEmail);

  const nextUsers = users.map((user) => {
    if (normalizeEmail(user.email) !== nextEmail) {
      return user;
    }

    return {
      ...user,
      ...updates,
      email: normalizeEmail(user.email),
    };
  });

  writeStoredUsers(nextUsers);
  return nextUsers.find((user) => normalizeEmail(user.email) === nextEmail) || null;
}

export function findStoredUser(email, password) {
  const targetEmail = normalizeEmail(email);
  return readStoredUsers().find(
    (user) => normalizeEmail(user.email) === targetEmail && user.password === password,
  );
}

export function buildLoginSession(user, provider = "local") {
  return toSessionUser({
    ...user,
    provider,
  });
}

export { SESSION_KEY, AUTH_COOKIE };