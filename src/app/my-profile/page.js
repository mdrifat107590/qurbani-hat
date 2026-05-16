import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ProfilePanel } from "@/components/profile-panel";
import { AUTH_COOKIE, readCookieSession } from "@/lib/auth";

export default function MyProfilePage() {
  const cookieStore = cookies();
  const currentUser = readCookieSession(cookieStore.get(AUTH_COOKIE)?.value);

  if (!currentUser) {
    redirect("/login");
  }

  return <ProfilePanel user={currentUser} />;
}