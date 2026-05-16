export const animals = [
  {
    id: 1,
    name: "Deshi Shahi Cow",
    type: "Cow",
    breed: "Local Deshi",
    price: 120000,
    weight: 280,
    age: 3,
    location: "Bogura",
    description:
      "Healthy deshi cow suitable for Qurbani. Well fed with natural feed and raised in open air.",
    image: "https://source.unsplash.com/featured/1200x900/?cow&sig=1",
    category: "Large Animal",
  },
  {
    id: 2,
    name: "Brahman Gold Cow",
    type: "Cow",
    breed: "Brahman",
    price: 165000,
    weight: 340,
    age: 4,
    location: "Sirajganj",
    description:
      "Strong Brahman cow with a calm temperament, perfect for a premium Qurbani booking.",
    image: "https://source.unsplash.com/featured/1200x900/?cattle&sig=2",
    category: "Large Animal",
  },
  {
    id: 3,
    name: "Murrah River Buffalo",
    type: "Buffalo",
    breed: "Murrah",
    price: 185000,
    weight: 420,
    age: 5,
    location: "Pabna",
    description:
      "Heavy Murrah buffalo with excellent body condition and reliable milk-fed growth.",
    image: "https://source.unsplash.com/featured/1200x900/?buffalo&sig=3",
    category: "Large Animal",
  },
  {
    id: 4,
    name: "Nili Ravi Royal Buffalo",
    type: "Buffalo",
    breed: "Nili Ravi",
    price: 210000,
    weight: 455,
    age: 6,
    location: "Kushtia",
    description:
      "Premium Nili Ravi buffalo with a broad frame and strong market appeal for group booking.",
    image: "https://source.unsplash.com/featured/1200x900/?water-buffalo&sig=4",
    category: "Large Animal",
  },
  {
    id: 5,
    name: "Jamunapari Grace Goat",
    type: "Goat",
    breed: "Jamunapari",
    price: 26000,
    weight: 38,
    age: 2,
    location: "Natore",
    description:
      "Tall Jamunapari goat with neat body structure and lively movement for a clean Qurbani choice.",
    image: "https://source.unsplash.com/featured/1200x900/?goat&sig=5",
    category: "Small Animal",
  },
  {
    id: 6,
    name: "Black Bengal Market Goat",
    type: "Goat",
    breed: "Black Bengal",
    price: 32000,
    weight: 34,
    age: 2,
    location: "Cumilla",
    description:
      "Popular Black Bengal goat with compact build and strong local demand for quick booking.",
    image: "https://source.unsplash.com/featured/1200x900/?goat,livestock&sig=6",
    category: "Small Animal",
  },
  {
    id: 7,
    name: "Awassi Wool Sheep",
    type: "Sheep",
    breed: "Awassi",
    price: 21000,
    weight: 30,
    age: 2,
    location: "Rangpur",
    description:
      "Awassi sheep with a healthy frame, soft coat, and a balanced size for family bookings.",
    image: "https://source.unsplash.com/featured/1200x900/?sheep&sig=7",
    category: "Small Animal",
  },
  {
    id: 8,
    name: "Garole Desert Sheep",
    type: "Sheep",
    breed: "Garole",
    price: 24000,
    weight: 28,
    age: 2,
    location: "Jashore",
    description:
      "Garole sheep with a neat silhouette and strong local adaptation for dependable Qurbani booking.",
    image: "https://source.unsplash.com/featured/1200x900/?lamb&sig=8",
    category: "Small Animal",
  },
];

export async function getAnimals() {
  await new Promise((resolve) => setTimeout(resolve, 350));
  return animals;
}

export async function getAnimalById(id) {
  const records = await getAnimals();
  return records.find((animal) => animal.id === Number(id)) || null;
}