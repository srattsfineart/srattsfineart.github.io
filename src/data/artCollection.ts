export interface ArtPiece {
  id: number;
  title: string;
  description?: string;
  medium: string;
  dimensions: string;
  imageUrl: string;
  categories: string[];
  sold: boolean;
  price: number;
}

export const artCollection: ArtPiece[] = [
  {
    id: 1,
    title: "A Day in Saguache",
    medium: "Oil on canvas",
    dimensions: "12 x 16 inches",
    imageUrl: "/assets/images/A Day in Saguache.jpg",
    categories: ["Figurative", "Animals"],
    sold: true,
    price: 650
  },
  {
    id: 2,
    title: "A Dollop of Daisies",
    description: "Framed in a brown wood floating frame.",
    medium: "Oil on panel",
    dimensions: "6 × 8 inches",
    imageUrl: "/assets/images/A Dollop of Daisies.jpg",
    categories: ["Animals", "Western"],
    sold: false,
    price: 100
  },
  {
    id: 3,
    title: "Ankole Watusi in Pennsylvania",
    medium: "Oil on canvas",
    dimensions: "16 × 20 inches",
    imageUrl: "/assets/images/Ankole Watusi in Pennsylvania.jpg",
    categories: ["Animals"],
    sold: true,
    price: 675
  },
  {
    id: 4,
    title: "Beauty in Desolation",
    medium: "Oil on panel",
    dimensions: "8 × 10 inches",
    imageUrl: "/assets/images/Beauty in Desolation.jpg",
    categories: ["Landscape"],
    sold: true,
    price: 150
  },
  {
    id: 5,
    title: "Butterfly Pavillion Tuscon",
    medium: "Oil on canvas",
    dimensions: "11 × 14 inches",
    imageUrl: "/assets/images/Butterfly Pavillion Tuscon.jpg",
    categories: ["Landscape"],
    sold: true,
    price: 325
  },
  {
    id: 6,
    title: "Casper & Doug",
    medium: "Oil on canvas",
    dimensions: "16 × 20 inches",
    imageUrl: "/assets/images/Casper and Doug.jpg",
    categories: ["Commision", "Animals"],
    sold: true,
    price: 500
  },
  {
    id: 7,
    title: "Cow in Globemallow",
    medium: "Oil on canvas",
    dimensions: "16 × 20 inches",
    imageUrl: "/assets/images/Cow in Globemallow.jpg",
    categories: ["Animals"],
    sold: true,
    price: 500
  },
  {
    id: 8,
    title: "Evening Blooms",
    description: "Palette knife on unframed panel.",
    medium: "Oil on panel",
    dimensions: "11 × 14 inches",
    imageUrl: "/assets/images/Evening Blooms.jpg",
    categories: ["Landscape"],
    sold: false,
    price: 225
  },
  {
    id: 9,
    title: "Evening Color",
    description: "Palette knife on unframed panel.",
    medium: "Oil on panel",
    dimensions: "8 × 10 inches",
    imageUrl: "/assets/images/Evening Color.jpg",
    categories: ["Landscape"],
    sold: false,
    price: 175
  },
  {
    id: 10,
    title: "In Pursuit of Two Feet",
    medium: "Oil on canvas",
    dimensions: "8 × 10 inches",
    imageUrl: "/assets/images/In Pursuit of Two Feet.jpg",
    categories: ["Western", "Animals", "Figurative"],
    sold: true,
    price: 175
  },
  {
    id: 11,
    title: "Living an American Dream",
    medium: "Oil on canvas",
    description: "On unframed canvas.",
    dimensions: "9 × 12 inches",
    imageUrl: "/assets/images/Living an American Dream.jpg",
    categories: ["Western", "Animals", "Figurative"],
    sold: false,
    price: 225
  },
  {
    id: 12,
    title: "Her American Dream",
    medium: "Oil on canvas",
    dimensions: "12 × 16 inches",
    imageUrl: "/assets/images/Her American Dream.jpg",
    categories: ["Western", "Animals", "Figurative"],
    sold: true,
    price: 250
  },
  {
    id: 13,
    title: "Maricopa Wild Horses",
    description: "On unframed canvas.",
    medium: "Oil on canvas",
    dimensions: "8 × 10 inches",
    imageUrl: "/assets/images/Maricopa Wild Horses.jpg",
    categories: ["Animals"],
    sold: false,
    price: 250
  },
  {
    id: 14,
    title: "Meandering Gila River",
    description: "On unframed canvas.",
    medium: "Oil on canvas",
    dimensions: "9 × 12 inches",
    imageUrl: "/assets/images/Meandering Gila River.jpg",
    categories: ["Landscape"],
    sold: false,
    price: 250
  },
  {
    id: 15,
    title: "Mo",
    medium: "Oil on panel",
    dimensions: "9 × 12 inches",
    imageUrl: "/assets/images/Mo.jpg",
    categories: ["Commision", "Animals"],
    sold: true,
    price: 350
  },
  {
    id: 16,
    title: "Natalie & Kos",
    medium: "Oil on canvas",
    dimensions: "8 × 10 inches",
    imageUrl: "/assets/images/Natalie and Kos.jpg",
    categories: ["Figurative", "Animals"],
    sold: true,
    price: 325
  },
  {
    id: 17,
    title: "Praise for a Job Well Done",
    medium: "Oil on canvas",
    dimensions: "16 × 20 inches",
    imageUrl: "/assets/images/Praise for a Job Well Done.jpg",
    categories: ["Western", "Animals", "Figurative"],
    sold: true,
    price: 750
  },
  {
    id: 18,
    title: "Swoop",
    medium: "Oil on panel",
    dimensions: "8 × 10 inches",
    imageUrl: "/assets/images/Swoop.jpg",
    categories: ["Animals"],
    sold: true,
    price: 250
  },
  {
    id: 19,
    title: "Time Well Spent",
    description: "On unframed canvas.",
    medium: "Oil on canvas",
    dimensions: "16 × 20 inches",
    imageUrl: "/assets/images/Time Well Spent.jpg",
    categories: ["Landscape", "Figurative", "Western"],
    sold: false,
    price: 700
  },
  {
    id: 20,
    title: "Tiny Tyrant",
    medium: "Oil on panel",
    dimensions: "6 × 8 inches",
    imageUrl: "/assets/images/Tiny Tyrant.jpg",
    categories: ["Animals"],
    sold: true,
    price: 325
  },
  {
    id: 21,
    title: "Toby's Contentment",
    medium: "Oil on canvas",
    dimensions: "10 × 10 inches",
    imageUrl: "/assets/images/Toby's Contentment.jpg",
    categories: ["Figurative", "Animals"],
    sold: true,
    price: 375
  },
  {
    id: 22,
    title: "Under a Watchful Eye",
    description: "On unframed canvas (with minimal damage).",
    medium: "Oil on canvas",
    dimensions: "10 × 20 inches",
    imageUrl: "/assets/images/Under a Watchful Eye.jpg",
    categories: ["Landscape"],
    sold: false,
    price: 250
  },
  {
    id: 23,
    title: "Water in the Gila",
    medium: "Oil on canvas",
    dimensions: "11 × 14 inches",
    imageUrl: "/assets/images/Water in the Gila.jpg",
    categories: ["Landscape"],
    sold: false,
    price: 500
  }
];

export const categories = [...new Set(artCollection.flatMap(piece => piece.categories))];
