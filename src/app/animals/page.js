import { AnimalsClient } from "@/components/animals-client";
import { getAnimals } from "@/lib/animals";

export default async function AnimalsPage() {
  const animals = await getAnimals();
  return <AnimalsClient animals={animals} />;
}