export interface ArtPiece {
  id: number;
  title: string;
  showInGallery: boolean;
  description?: string;
  medium: string;
  dimensions: string;
  imageUrl: string;
  categories: string[];
  
  sold: boolean;
  artPrice: number;
  
  availableAsPrint?: boolean;
  printPrices?: number[];
  printSizes?: string[];
  
  availableAsCard?: boolean;
  cardPrices?: number[];
  cardInnerContent?: string;
  cardBundleOfFourPrice?: number;
  cardSizes?: string[];
}

export const artCollection: ArtPiece[] = [
  {
    id: 1,
    showInGallery: true,
    title: "A Day in Saguache",
    medium: "Oil on canvas",
    dimensions: "12 x 16 inches",
    imageUrl: "/assets/images/A Day in Saguache.jpg",
    categories: ["Figurative", "Animals"],
    sold: true,
    artPrice: 650,
    availableAsPrint: true,
    printPrices: [45, 55, 70, 95],
    printSizes: ['8×10', '9×12', '12×16', '16x20'],
  },
  {
    id: 2,
    showInGallery: true,
    title: "A Dollop of Daisies",
    description: "Framed in a brown wood floating frame.",
    medium: "Oil on panel",
    dimensions: "6 × 8 inches",
    imageUrl: "/assets/images/A Dollop of Daisies.jpg",
    categories: ["Animals", "Western"],
    sold: false,
    artPrice: 100,
    availableAsPrint: true,
    printPrices: [45, 55, 70, 95],
    printSizes: ['8×10', '9×12', '12×16', '16x20'],
    availableAsCard: true,
    cardPrices: [5],
    cardBundleOfFourPrice: 22,
    cardSizes: ['5x7']
  },
  {
    id: 3,
    showInGallery: true,
    title: "Ankole Watusi in Pennsylvania",
    medium: "Oil on canvas",
    dimensions: "16 × 20 inches",
    imageUrl: "/assets/images/Ankole Watusi in Pennsylvania.jpg",
    categories: ["Animals"],
    sold: true,
    artPrice: 675,
    availableAsPrint: false,
  },
  {
    id: 12,
    showInGallery: true,
    title: "Her American Dream",
    medium: "Oil on canvas",
    dimensions: "12 × 16 inches",
    imageUrl: "/assets/images/Her American Dream.jpg",
    categories: ["Western", "Animals", "Figurative"],
    sold: true,
    artPrice: 250,
    availableAsPrint: true,
    printPrices: [45, 55, 70, 95],
    printSizes: ['8×10', '9×12', '12×16', '16x20'],
    availableAsCard: true,
    cardPrices: [5],
    cardBundleOfFourPrice: 22,
    cardSizes: ['5x7']
  },
  {
    id: 5,
    showInGallery: true,
    title: "Butterfly Pavillion Tuscon",
    medium: "Oil on canvas",
    dimensions: "11 × 14 inches",
    imageUrl: "/assets/images/Butterfly Pavillion Tuscon.jpg",
    categories: ["Landscape"],
    sold: true,
    artPrice: 325,
    availableAsPrint: false,
    availableAsCard: true,
    cardPrices: [5],
    cardBundleOfFourPrice: 22,
    cardSizes: ['5x7']
  },
  {
    id: 6,
    showInGallery: true,
    title: "Casper & Doug",
    medium: "Oil on canvas",
    dimensions: "16 × 20 inches",
    imageUrl: "/assets/images/Casper and Doug.jpg",
    categories: ["Commission", "Animals"],
    sold: true,
    artPrice: 500,
    availableAsPrint: false,
  },
  {
    id: 7,
    showInGallery: true,
    title: "Cow in Globemallow",
    medium: "Oil on canvas",
    dimensions: "16 × 20 inches",
    imageUrl: "/assets/images/Cow in Globemallow.jpg",
    categories: ["Animals"],
    sold: true,
    artPrice: 500,
    availableAsPrint: false,
  },
  {
    id: 8,
    showInGallery: true,
    title: "Evening Blooms",
    description: "Palette knife on unframed panel.",
    medium: "Oil on panel",
    dimensions: "11 × 14 inches",
    imageUrl: "/assets/images/Evening Blooms.jpg",
    categories: ["Landscape"],
    sold: false,
    artPrice: 225,
    availableAsPrint: false,
  },
  {
    id: 9,
    showInGallery: true,
    title: "Evening Color",
    description: "Palette knife on unframed panel.",
    medium: "Oil on panel",
    dimensions: "8 × 10 inches",
    imageUrl: "/assets/images/Evening Color.jpg",
    categories: ["Landscape"],
    sold: false,
    artPrice: 175,
    availableAsPrint: false,
    availableAsCard: true,
    cardPrices: [5],
    cardBundleOfFourPrice: 22,
    cardSizes: ['5x7']
  },
  {
    id: 13,
    showInGallery: true,
    title: "Maricopa Wild Horses",
    description: "On unframed canvas.",
    medium: "Oil on canvas",
    dimensions: "8 × 10 inches",
    imageUrl: "/assets/images/Maricopa Wild Horses.jpg",
    categories: ["Animals"],
    sold: false,
    artPrice: 250,
    availableAsPrint: true,
    printPrices: [45, 55, 70, 95],
    printSizes: ['8×10', '9×12', '12×16', '16x20'],
    availableAsCard: true,
    cardPrices: [5],
    cardBundleOfFourPrice: 22,
    cardSizes: ['5x7']
  },
  {
    id: 10,
    showInGallery: true,
    title: "In Pursuit of Two Feet",
    medium: "Oil on canvas",
    dimensions: "8 × 10 inches",
    imageUrl: "/assets/images/In Pursuit of Two Feet.jpg",
    categories: ["Western", "Animals", "Figurative"],
    sold: true,
    artPrice: 175,
    availableAsPrint: false,
  },
  {
    id: 14,
    showInGallery: true,
    title: "Meandering Gila River",
    description: "On unframed canvas.",
    medium: "Oil on canvas",
    dimensions: "9 × 12 inches",
    imageUrl: "/assets/images/Meandering Gila River.jpg",
    categories: ["Landscape"],
    sold: false,
    artPrice: 250,
    availableAsPrint: true,
    printPrices: [45, 55, 70, 95],
    printSizes: ['8×10', '9×12', '12×16', '16x20'],
  },
  {
    id: 15,
    showInGallery: true,
    title: "Mo",
    medium: "Oil on panel",
    dimensions: "9 × 12 inches",
    imageUrl: "/assets/images/Mo.jpg",
    categories: ["Commission", "Animals"],
    sold: true,
    artPrice: 350,
    availableAsPrint: false,
  },
  {
    id: 16,
    showInGallery: true,
    title: "Natalie & Kos",
    medium: "Oil on canvas",
    dimensions: "8 × 10 inches",
    imageUrl: "/assets/images/Natalie and Kos.jpg",
    categories: ["Figurative", "Animals"],
    sold: true,
    artPrice: 325,
    availableAsPrint: false,
  },
  {
    id: 11,
    showInGallery: true,
    title: "Living an American Dream",
    medium: "Oil on canvas",
    description: "On unframed canvas.",
    dimensions: "9 × 12 inches",
    imageUrl: "/assets/images/Living an American Dream.jpg",
    categories: ["Western", "Animals", "Figurative"],
    sold: false,
    artPrice: 225,
    availableAsPrint: false,
    availableAsCard: false,
  },
  {
    id: 17,
    showInGallery: true,
    title: "Praise for a Job Well Done",
    medium: "Oil on canvas",
    dimensions: "16 × 20 inches",
    imageUrl: "/assets/images/Praise for a Job Well Done.jpg",
    categories: ["Western", "Animals", "Figurative"],
    sold: true,
    artPrice: 750,
    availableAsPrint: true,
    printPrices: [45, 55, 70, 95],
    printSizes: ['8×10', '9×12', '12×16', '16x20'],
  },
  {
    id: 18,
    showInGallery: true,
    title: "Swoop",
    medium: "Oil on panel",
    dimensions: "8 × 10 inches",
    imageUrl: "/assets/images/Swoop.jpg",
    categories: ["Animals"],
    sold: true,
    artPrice: 250,
    availableAsPrint: false,
  },
  {
    id: 19,
    showInGallery: true,
    title: "Time Well Spent",
    description: "On unframed canvas.",
    medium: "Oil on canvas",
    dimensions: "16 × 20 inches",
    imageUrl: "/assets/images/Time Well Spent.jpg",
    categories: ["Landscape", "Figurative", "Western"],
    sold: false,
    artPrice: 700,
    availableAsPrint: true,
    printPrices: [45, 55, 70, 95],
    printSizes: ['8×10', '9×12', '12×16', '16x20'],
  },
  {
    id: 20,
    showInGallery: true,
    title: "Tiny Tyrant",
    medium: "Oil on panel",
    dimensions: "6 × 8 inches",
    imageUrl: "/assets/images/Tiny Tyrant.jpg",
    categories: ["Animals"],
    sold: true,
    artPrice: 325,
    availableAsPrint: true,
    printPrices: [45, 55, 70, 95],
    printSizes: ['8×10', '9×12', '12×16', '16x20'],
  },
  {
    id: 21,
    showInGallery: true,
    title: "Toby's Contentment",
    medium: "Oil on canvas",
    dimensions: "10 × 10 inches",
    imageUrl: "/assets/images/Toby's Contentment.jpg",
    categories: ["Figurative", "Animals"],
    sold: true,
    artPrice: 375,
    availableAsPrint: false,
  },
  {
    id: 22,
    showInGallery: true,
    title: "Under a Watchful Eye",
    description: "On unframed canvas (with minimal damage).",
    medium: "Oil on canvas",
    dimensions: "10 × 20 inches",
    imageUrl: "/assets/images/Under a Watchful Eye.jpg",
    categories: ["Landscape"],
    sold: false,
    artPrice: 250,
    availableAsPrint: false,
  },
  {
    id: 23,
    showInGallery: true,
    title: "Water in the Gila",
    medium: "Oil on canvas",
    dimensions: "11 × 14 inches",
    imageUrl: "/assets/images/Water in the Gila.jpg",
    categories: ["Landscape"],
    sold: false,
    artPrice: 500,
    availableAsPrint: true,
    printPrices: [45, 55, 70, 95],
    printSizes: ['8×10', '9×12', '12×16', '16x20'],
  },
  {
    id: 24,
    showInGallery: true,
    title: "It's Not Polite to Steer",
    medium: "Oil on canvas",
    dimensions: "9 × 12 inches",
    imageUrl: "/assets/images/It's Not Polite to Steer.jpg",
    categories: ["Animals", "Western"],
    sold: false,
    artPrice: 375,
    availableAsPrint: true,
    printPrices: [45, 55, 70, 95],
    printSizes: ['8×10', '9×12', '12×16', '16x20'],
    availableAsCard: true,
    cardPrices: [5],
    cardInnerContent: "It's Not Polite to Steer",
    cardBundleOfFourPrice: 22,
    cardSizes: ['5x7']
  },
  {
    id: 25,
    showInGallery: true,
    title: "Those Lovely Cacti",
    medium: "Oil on canvas",
    dimensions: "12 × 15 inches",
    imageUrl: "/assets/images/Those Lovely Cacti.jpg",
    categories: ["Landscape"],
    sold: false,
    artPrice: 350,
    availableAsPrint: false,
    availableAsCard: true,
    cardPrices: [5],
    cardBundleOfFourPrice: 22,
    cardSizes: ['5x7']
  },
  {
    id: 26,
    showInGallery: true,
    title: "Winding Aspen Trail",
    medium: "Oil on panel",
    dimensions: "9 × 12 inches",
    imageUrl: "/assets/images/Winding Aspen Trail.jpg",
    categories: ["Landscape"],
    sold: false,
    artPrice: 225,
    availableAsPrint: false,
  },
  {
    id: 4,
    showInGallery: true,
    title: "Beauty in Desolation",
    medium: "Oil on panel",
    dimensions: "8 × 10 inches",
    imageUrl: "/assets/images/Beauty in Desolation.jpg",
    categories: ["Landscape"],
    sold: true,
    artPrice: 150,
    availableAsPrint: false,
    availableAsCard: true,
    cardPrices: [5],
    cardBundleOfFourPrice: 22,
    cardSizes: ['5x7']
  },
  {
    id: 27,
    showInGallery: false,
    title: "Beauty in Desolation - B&W",
    medium: "Oil on panel",
    dimensions: "8 × 10 inches",
    imageUrl: "/assets/images/Beauty in Desolation - B&W.jpg",
    categories: ["Landscape"],
    sold: true,
    artPrice: 150,
    availableAsPrint: false,
    availableAsCard: true,
    cardPrices: [5],
    cardBundleOfFourPrice: 22,
    cardSizes: ['5x7']
  },
  {
    id: 28,
    showInGallery: true,
    title: "My American Dream",
    medium: "Oil on canvas",
    dimensions: "24 × 36 inches",
    imageUrl: "/assets/images/My American Dream.jpg",
    categories: ["Western", "Animals", "Figurative"],
    sold: false,
    artPrice: 2500,
    availableAsPrint: true,
    printPrices: [45, 55, 70, 95],
    printSizes: ['8×10', '9×12', '12×16', '16x20'],
    availableAsCard: true,
    cardPrices: [5],
    cardBundleOfFourPrice: 22,
    cardSizes: ['5x7']
  },
  {
    id: 29,
    showInGallery: true,
    title: "Jan's Poodle",
    medium: "Oil on panel",
    dimensions: "8 × 10 inches",
    imageUrl: "/assets/images/Jan's Poodle.jpg",
    categories: ["Animals", "Commission"],
    sold: true,
    artPrice: 375,
    availableAsPrint: false,
    availableAsCard: false,
  },
];

export const categories = [...new Set(artCollection.flatMap(piece => piece.categories))];
