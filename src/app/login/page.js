import { AuthForm } from "@/components/auth-form";

export default function LoginPage({ searchParams }) {
  return <AuthForm mode="login" nextPath={searchParams?.next || "/"} />;
}