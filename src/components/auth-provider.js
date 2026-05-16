"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { signInWithGooglePopup } from "@/lib/firebase-client";
import {
  buildAvatarUrl,
  buildLoginSession,
  clearBrowserSession,
  findStoredUser,
  normalizeEmail,
  readBrowserSession,
  registerStoredUser,
  toSessionUser,
  updateStoredUser,
  writeBrowserSession,
} from "@/lib/auth";

const AuthContext = createContext(null);

function userFromFirebase(firebaseUser) {
  return toSessionUser({
    name: firebaseUser.displayName || "Google User",
    email: firebaseUser.email,
    photoURL: firebaseUser.photoURL || buildAvatarUrl(firebaseUser.displayName || firebaseUser.email),
    provider: "google",
  });
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setUser(readBrowserSession());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }

    if (user) {
      writeBrowserSession(user);
      return;
    }

    clearBrowserSession();
  }, [ready, user]);

  const login = async ({ email, password }) => {
    const matchedUser = findStoredUser(email, password);

    if (!matchedUser) {
      throw new Error("Invalid email or password.");
    }

    const nextUser = buildLoginSession(matchedUser);
    setUser(nextUser);
    return nextUser;
  };

  const register = async ({ name, email, photoURL, password }) => {
    if (!name || !email || !password) {
      throw new Error("Please fill in every field.");
    }

    registerStoredUser({
      name,
      email: normalizeEmail(email),
      photoURL: photoURL || buildAvatarUrl(name),
      password,
      provider: "local",
    });
  };

  const googleLogin = async () => {
    const firebaseResult = await signInWithGooglePopup();

    if (firebaseResult?.user) {
      const nextUser = userFromFirebase(firebaseResult.user);
      setUser(nextUser);
      return nextUser;
    }

    const nextUser = toSessionUser({
      name: "Google Guest",
      email: "google@guest.local",
      photoURL: buildAvatarUrl("Google Guest"),
      provider: "google",
    });

    setUser(nextUser);
    return nextUser;
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = ({ name, photoURL }) => {
    if (!user) {
      return null;
    }

    const updatedUser = {
      ...user,
      name: name || user.name,
      photoURL: photoURL || user.photoURL,
    };

    setUser(updatedUser);
    updateStoredUser(user.email, {
      name: updatedUser.name,
      photoURL: updatedUser.photoURL,
    });

    return updatedUser;
  };

  const value = useMemo(
    () => ({ user, ready, login, register, googleLogin, logout, updateProfile, setUser }),
    [ready, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}