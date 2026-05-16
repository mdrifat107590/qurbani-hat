import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { BookingForm } from "@/components/booking-form";
import { AUTH_COOKIE, readCookieSession } from "@/lib/auth";
import { getAnimalById } from "@/lib/animals";

export default async function AnimalDetailsPage({ params }) {
  const cookieStore = cookies();
  const currentUser = readCookieSession(cookieStore.get(AUTH_COOKIE)?.value);

  if (!currentUser) {
    redirect(`/login?next=/details-page/${params.id}`);
  }

  const animal = await getAnimalById(params.id);

  if (!animal) {
    notFound();
  }

  return <BookingForm animal={animal} currentUser={currentUser} />;
}