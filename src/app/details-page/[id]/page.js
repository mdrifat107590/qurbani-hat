import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { BookingForm } from "@/components/booking-form";
import { AUTH_COOKIE, readCookieSession } from "@/lib/auth";
import { getAnimalById } from "@/lib/animals";

export default async function AnimalDetailsPage({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const id = resolvedParams?.id;
  const cookieStore = await cookies();
  const currentUser = readCookieSession(cookieStore.get(AUTH_COOKIE)?.value);

  if (!currentUser) {
    redirect(`/login?next=/details-page/${id}`);
  }

  const animal = await getAnimalById(id);

  if (!animal) {
    notFound();
  }

  return <BookingForm animal={animal} currentUser={currentUser} />;
}