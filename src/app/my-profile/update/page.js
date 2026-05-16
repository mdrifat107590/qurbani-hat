import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { UpdateForm } from "@/components/update-form";
import { AUTH_COOKIE, readCookieSession } from "@/lib/auth";

export default async function UpdateProfilePage() {
  const cookieStore = await cookies();
  const currentUser = readCookieSession(cookieStore.get(AUTH_COOKIE)?.value);

  if (!currentUser) {
    redirect("/login");
  }

  return <UpdateForm user={currentUser} />;
}