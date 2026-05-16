import { AuthForm } from "@/components/auth-form";

export default function RegisterPage({ searchParams }) {
  return <AuthForm mode="register" nextPath={searchParams?.next || "/"} />;
}