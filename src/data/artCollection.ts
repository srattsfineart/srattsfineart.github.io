export interface ArtPiece {
  id: number;
  title: string;
  description: string;
  year: number;
  medium: string;
  dimensions: string;
  imageUrl: string;
  category: string;
}

export const artCollection: ArtPiece[] = [
  {
    id: 1,
    title: "Ethereal Landscape",
    description: "An abstract interpretation of a mountain landscape at dawn, with layers of mist creating a dreamlike atmosphere.",
    year: 2023,
    medium: "Oil on canvas",
    dimensions: "36 × 48 inches",
    imageUrl: "/src/assets/images/landscape1.svg",
    category: "Landscape"
  },
  {
    id: 2,
    title: "Contemplation",
    description: "A figure in silhouette stands before a vast horizon, representing the human condition and our place in the universe.",
    year: 2022,
    medium: "Acrylic on canvas",
    dimensions: "30 × 40 inches",
    imageUrl: "/src/assets/images/figure1.svg",
    category: "Figurative"
  },
  {
    id: 3,
    title: "Urban Rhythm",
    description: "A dynamic composition capturing the energy and movement of city life through bold geometric forms and vibrant colors.",
    year: 2023,
    medium: "Mixed media",
    dimensions: "24 × 36 inches",
    imageUrl: "/src/assets/images/abstract1.svg",
    category: "Abstract"
  },
  {
    id: 4,
    title: "Serenity in Blue",
    description: "An exploration of color and emotion through various shades of blue, creating a meditative and calming visual experience.",
    year: 2021,
    medium: "Oil on canvas",
    dimensions: "40 × 40 inches",
    imageUrl: "/src/assets/images/abstract2.svg",
    category: "Abstract"
  },
  {
    id: 5,
    title: "Autumn Reflections",
    description: "A serene lake scene with vibrant fall foliage reflected in still waters, capturing a moment of perfect natural harmony.",
    year: 2022,
    medium: "Oil on canvas",
    dimensions: "24 × 36 inches",
    imageUrl: "/src/assets/images/landscape2.svg",
    category: "Landscape"
  },
  {
    id: 6,
    title: "Fragmented Identity",
    description: "A portrait composed of fragmented elements, exploring themes of identity and the multifaceted nature of self.",
    year: 2023,
    medium: "Mixed media",
    dimensions: "30 × 30 inches",
    imageUrl: "/src/assets/images/portrait1.svg",
    category: "Portrait"
  },
  {
    id: 7,
    title: "Coastal Dreams",
    description: "A semi-abstract seascape capturing the ever-changing relationship between sky, sea, and shore.",
    year: 2021,
    medium: "Acrylic on canvas",
    dimensions: "36 × 48 inches",
    imageUrl: "/src/assets/images/landscape3.svg",
    category: "Landscape"
  },
  {
    id: 8,
    title: "Geometric Harmony",
    description: "A composition of balanced geometric forms creating a sense of order and harmony through careful color relationships.",
    year: 2022,
    medium: "Acrylic on canvas",
    dimensions: "36 × 36 inches",
    imageUrl: "/src/assets/images/abstract3.svg",
    category: "Abstract"
  },
  {
    id: 9,
    title: "The Gaze",
    description: "An intimate portrait exploring the power of direct eye contact and the emotional connection between subject and viewer.",
    year: 2023,
    medium: "Oil on canvas",
    dimensions: "24 × 30 inches",
    imageUrl: "/src/assets/images/portrait2.svg",
    category: "Portrait"
  }
];

export const categories = [...new Set(artCollection.map(piece => piece.category))];
