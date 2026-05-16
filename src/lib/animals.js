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
    image:
      "https://i.ibb.co.com/wZTnzgxc/download-3.jpg?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://i.ibb.co.com/ymJ1DrFF/download-2.jpg?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://i.ibb.co.com/tpJFym8L/download-4.jpg?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://i.ibb.co.com/mVRXtD6L/download-5.jpg?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://i.ibb.co.com/SXQhKf9Q/download-1.jpg?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://i.ibb.co.com/NnSRB7cJ/download-6.jpg?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://i.ibb.co.com/27WNZw4B/images.jpg?auto=format&fit=crop&w=1200&q=80",
    category: "Small Animal",
  },
  {
    id: 8,
    name: "Desi Sheep",
    type: "Sheep",
    breed: "Desi",
    price: 24000,
    weight: 28,
    age: 2,
    location: "Jashore",
    description:
      "Desi sheep with a neat silhouette and strong local adaptation for dependable Qurbani booking.",
    image:
      "https://i.ibb.co.com/WNX9vy8G/download-7.jpg?auto=format&fit=crop&w=1200&q=80",
    category: "Small Animal",
  },
];


export async function getAnimals() {
  await new Promise((resolve) => setTimeout(resolve, 350));
  return animals;
}
export function getAnimalById(id) {
  return animals.find((animal) => animal.id === Number(id));
}