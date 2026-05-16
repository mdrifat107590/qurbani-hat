import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { UpdateForm } from "@/components/update-form";
import { AUTH_COOKIE, readCookieSession } from "@/lib/auth";

export default function UpdateProfilePage() {
  const cookieStore = cookies();
  const currentUser = readCookieSession(cookieStore.get(AUTH_COOKIE)?.value);

  if (!currentUser) {
    redirect("/login");
  }

  return <UpdateForm user={currentUser} />;
}