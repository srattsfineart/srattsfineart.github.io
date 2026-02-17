export class ArtPiece {
  id: number;
  title: string;
  showInGallery: boolean;
  description?: string;
  medium: ArtMedium;
  dimensions: ArtDimension;
  imageUrl: string;
  categories: ArtCategory[];
  sold: boolean;
  artPrice: number;
  availableAsPrint?: boolean;
  printPrices?: number[];
  printSizes?: ArtPrintSize[];
  availableAsCard?: boolean;
  cardPrices?: number[];
  cardInnerContent?: string;
  cardBundleOfFourPrice?: number;
  cardSizes?: ArtCardSize[];
  
  constructor(fields: Partial<ArtPiece> = {}) {
    this.id = fields.id || 0;
    this.title = fields.title || "";
    this.showInGallery = fields.showInGallery ?? true;
    this.description = fields.description || "";
    this.medium = fields.medium || "Oil on canvas";
    this.dimensions = fields.dimensions || "8 x 10 inches";
    this.imageUrl = fields.imageUrl || "";
    this.categories = fields.categories || ["Landscape"];
    this.sold = fields.sold ?? false;
    this.artPrice = fields.artPrice || 500;
    this.availableAsPrint = fields.availableAsPrint ?? false;
    this.printPrices = fields.printPrices || [45, 55, 70, 95];
    this.printSizes = fields.printSizes || ["8 x 10 inches", "9 x 12 inches", "12 x 16 inches", "16 x 20 inches"];
    this.availableAsCard = fields.availableAsCard ?? false;
    this.cardPrices = fields.cardPrices || [5];
    this.cardInnerContent = fields.cardInnerContent || "";
    this.cardBundleOfFourPrice = fields.cardBundleOfFourPrice || 22;
    this.cardSizes = fields.cardSizes || ["5 x 7 inches"];
  }
}

export type ArtCategory = 
  "Animals" 
  | "Landscape" 
  | "Western" 
  | "Commission" 
  | "Figurative";

export type ArtMedium = 
  "Oil on canvas" 
  | "Oil on panel" 
  | "Oil on linen" 
  | "Oil on board"
  | "Giclée print";

export type ArtDimension = 
  "6 x 8 inches"  
  | "8 x 10 inches" 
  | "9 x 12 inches"
  | "10 x 10 inches"
  | "11 x 14 inches"
  | "12 x 16 inches"
  | "10 x 20 inches"
  | "16 x 20 inches"
  | "20 x 20 inches"
  | "18 x 24 inches"
  | "24 x 36 inches";

export type ArtPrintSize = 
  "8 x 10 inches" 
  | "9 x 12 inches" 
  | "11 x 14 inches"
  | "12 x 16 inches" 
  | "16 x 20 inches";

export type ArtCardSize = 
  "5 x 7 inches";

export const artCollection: ArtPiece[] = [ 
  new ArtPiece({
    id: 43,
    title: "Head Honcho",
    medium: "Oil on linen",
    imageUrl: "/assets/images/Head Honcho.jpeg",
    categories: ["Animals"],
    artPrice: 150,
  }),
  new ArtPiece({
    id: 42,
    title: "Free and Easy",
    medium: "Oil on panel",
    dimensions: "6 x 8 inches",
    imageUrl: "/assets/images/Free and Easy.jpg",
    categories: ["Animals", "Landscape"],
    artPrice: 95,
  }),
  new ArtPiece({
   id: 41,
   title: "Zen on the Rio Grande",
   dimensions: "18 x 24 inches",
   imageUrl: "/assets/images/Zen on the Rio Grande.jpg",
   artPrice: 950,
   availableAsPrint: true,
   availableAsCard: true,
  }),
  new ArtPiece({
    id: 40,
    title: "Magnificent Watusi",
    dimensions: "16 x 20 inches",
    imageUrl: "/assets/images/Magnificent Watusi.jpg",
    categories: ["Animals", "Landscape"],
    artPrice: 500,
    availableAsPrint: true,
    availableAsCard: true,
  }),
  new ArtPiece({
    id: 39,
    title: "Woodland Watcher",
    medium: "Oil on linen",
    dimensions: "9 x 12 inches",
    imageUrl: "/assets/images/Woodland Watcher.jpg",
    categories: ["Animals", "Landscape"],
    sold: true,
    artPrice: 450,
    availableAsPrint: true,
    printPrices: [100],
    printSizes: ["9 x 12 inches"],
    availableAsCard: true,
  }),
  new ArtPiece({
    id: 38,
    title: "Riverwalker",
    medium: "Oil on board",
    dimensions: "11 x 14 inches",
    imageUrl: "/assets/images/Riverwalker.jpg",
    categories: ["Animals", "Landscape"],
    artPrice: 300,
    availableAsPrint: true,
    availableAsCard: true,
  }),
  new ArtPiece({
    id: 37,
    title: "Wonderfoaly Content",
    medium: "Oil on panel",
    dimensions: "6 x 8 inches",
    imageUrl: "/assets/images/Wonderfoaly Content.jpg",
    categories: ["Animals"],
    artPrice: 95,
    availableAsCard: true,
  }),
  new ArtPiece({
    id: 36,
    title: "Summer in the High Meadow",
    dimensions: "11 x 14 inches",
    imageUrl: "/assets/images/Summer in the High Meadow.jpeg",
    categories: ["Landscape", "Animals"],
    artPrice: 300,
    availableAsPrint: true,
    availableAsCard: true,
  }),
  new ArtPiece({
    id: 35,
    title: "Daybreak at Bar M",
    medium: "Oil on linen",
    imageUrl: "/assets/images/Daybreak at Bar M.jpeg",
    categories: ["Western", "Landscape"],
    sold: true,
    artPrice: 250,
  }),
  new ArtPiece({
    id: 33,
    title: "Desert Life",
    medium: "Oil on panel",
    dimensions: "6 x 8 inches",
    imageUrl: "/assets/images/Desert Life.jpg",
    sold: true,
    artPrice: 95,
  }),
  new ArtPiece({
    id: 34,
    title: "Arid Beauty",
    medium: "Oil on linen",
    imageUrl: "/assets/images/Arid Beauty.jpg",
    artPrice: 150,
  }),
  new ArtPiece({
    id: 1,
    title: "A Day in Saguache",
    dimensions: "12 x 16 inches",
    imageUrl: "/assets/images/A Day in Saguache.jpg",
    categories: ["Figurative", "Animals"],
    sold: true,
    artPrice: 650,
    availableAsPrint: true,
  }),
  new ArtPiece({
    id: 2,
    title: "A Dollop of Daisies",
    description: "Framed in a brown wood floating frame.",
    medium: "Oil on panel",
    dimensions: "6 x 8 inches",
    imageUrl: "/assets/images/A Dollop of Daisies.jpg",
    categories: ["Animals", "Western"],
    artPrice: 95,
    availableAsPrint: true,
    availableAsCard: true,
  }),
  new ArtPiece({
    id: 3,
    title: "Ankole Watusi in Pennsylvania",
    dimensions: "16 x 20 inches",
    imageUrl: "/assets/images/Ankole Watusi in Pennsylvania.jpg",
    categories: ["Animals"],
    sold: true,
    artPrice: 675,
  }),
  new ArtPiece({
    id: 12,
    title: "Her American Dream",
    dimensions: "12 x 16 inches",
    medium: "Giclée print",
    imageUrl: "/assets/images/Her American Dream.jpg",
    categories: ["Western", "Animals", "Figurative"],
    artPrice: 100,
    availableAsPrint: true,
    availableAsCard: true,
  }),
  new ArtPiece({
    id: 5,
    title: "Butterfly Pavilion Tuscon",
    dimensions: "11 x 14 inches",
    imageUrl: "/assets/images/Butterfly Pavilion Tuscon.jpg",
    sold: true,
    artPrice: 325,
    availableAsCard: true,
  }),
  new ArtPiece({
    id: 6,
    title: "Casper & Doug",
    dimensions: "16 x 20 inches",
    imageUrl: "/assets/images/Casper and Doug.jpg",
    categories: ["Commission", "Animals"],
    sold: true,
    artPrice: 500,
  }),
  new ArtPiece({
    id: 7,
    title: "Cow in Globemallow",
    dimensions: "16 x 20 inches",
    imageUrl: "/assets/images/Cow in Globemallow.jpg",
    categories: ["Animals"],
    sold: true,
    artPrice: 500,
  }),
  new ArtPiece({
    id: 8,
    title: "Evening Blooms",
    description: "Palette knife on unframed panel.",
    medium: "Oil on panel",
    dimensions: "11 x 14 inches",
    imageUrl: "/assets/images/Evening Blooms.jpg",
    artPrice: 250,
  }),
  new ArtPiece({
    id: 9,
    title: "Evening Color",
    description: "Palette knife on unframed panel.",
    medium: "Oil on panel",
    imageUrl: "/assets/images/Evening Color.jpg",
    artPrice: 125,
    availableAsCard: true,
  }),
  new ArtPiece({
    id: 13,
    title: "Maricopa Wild Horses",
    description: "On unframed canvas.",
    imageUrl: "/assets/images/Maricopa Wild Horses.jpg",
    categories: ["Animals"],
    artPrice: 160,
    availableAsPrint: true,
    availableAsCard: true,
  }),
  new ArtPiece({
    id: 10,
    title: "In Pursuit of Two Feet",
    imageUrl: "/assets/images/In Pursuit of Two Feet.jpg",
    categories: ["Western", "Animals", "Figurative"],
    sold: true,
    artPrice: 175,
  }),
  new ArtPiece({
    id: 14,
    title: "Meandering Gila River",
    description: "On unframed canvas.",
    dimensions: "9 x 12 inches",
    imageUrl: "/assets/images/Meandering Gila River.jpg",
    sold: true,
    artPrice: 400,
    availableAsPrint: true,
  }),
  new ArtPiece({
    id: 15,
    title: "Mo",
    medium: "Oil on panel",
    dimensions: "9 x 12 inches",
    imageUrl: "/assets/images/Mo.jpg",
    categories: ["Commission", "Animals"],
    sold: true,
    artPrice: 350,
  }),
  new ArtPiece({
    id: 16,
    title: "Natalie & Kos",
    imageUrl: "/assets/images/Natalie and Kos.jpg",
    categories: ["Figurative", "Animals"],
    sold: true,
    artPrice: 325,
  }),
  new ArtPiece({
    id: 11,
    title: "Living an American Dream",
    description: "On unframed canvas.",
    dimensions: "9 x 12 inches",
    imageUrl: "/assets/images/Living an American Dream.jpg",
    categories: ["Western", "Animals", "Figurative"],
    artPrice: 200,
  }),
  new ArtPiece({
    id: 17,
    title: "Praise for a Job Well Done",
    dimensions: "16 x 20 inches",
    imageUrl: "/assets/images/Praise for a Job Well Done.jpg",
    categories: ["Western", "Animals", "Figurative"],
    sold: true,
    artPrice: 750,
    availableAsPrint: true,
  }),
  new ArtPiece({
    id: 18,
    title: "Swoop",
    medium: "Oil on panel",
    imageUrl: "/assets/images/Swoop.jpg",
    categories: ["Animals"],
    sold: true,
    artPrice: 250,
  }),
  new ArtPiece({
    id: 19,
    title: "Time Well Spent",
    description: "On unframed canvas.",
    dimensions: "16 x 20 inches",
    imageUrl: "/assets/images/Time Well Spent.jpg",
    categories: ["Landscape", "Figurative", "Western"],
    artPrice: 600,
    availableAsPrint: true,
  }),
  new ArtPiece({
    id: 20,
    title: "Tiny Tyrant",
    medium: "Oil on panel",
    dimensions: "6 x 8 inches",
    imageUrl: "/assets/images/Tiny Tyrant.jpg",
    categories: ["Animals"],
    sold: true,
    artPrice: 325,
    availableAsPrint: true,
  }),
  new ArtPiece({
    id: 21,
    title: "Toby's Contentment",
    dimensions: "10 x 10 inches",
    imageUrl: "/assets/images/Toby's Contentment.jpg",
    categories: ["Figurative", "Animals"],
    sold: true,
    artPrice: 375,
  }),
  new ArtPiece({
    id: 22,
    title: "Under a Watchful Eye",
    description: "On unframed canvas.",
    dimensions: "10 x 20 inches",
    imageUrl: "/assets/images/Under a Watchful Eye.jpg",
    artPrice: 200,
  }),
  new ArtPiece({
    id: 23,
    title: "Water in the Gila",
    dimensions: "11 x 14 inches",
    imageUrl: "/assets/images/Water in the Gila.jpg",
    artPrice: 500,
    availableAsPrint: true,
    printPrices: [75],
    printSizes: ["11 x 14 inches"],
  }),
  new ArtPiece({
    id: 24,
    title: "It's Not Polite to Steer",
    dimensions: "9 x 12 inches",
    imageUrl: "/assets/images/It's Not Polite to Steer.jpg",
    categories: ["Animals", "Western"],
    artPrice: 225,
    availableAsPrint: true,
    availableAsCard: true,
    cardInnerContent: "It's Not Polite to Steer",
  }),
  new ArtPiece({
    id: 25,
    title: "Those Lovely Cacti",
    dimensions: "12 x 16 inches",
    imageUrl: "/assets/images/Those Lovely Cacti.jpg",
    artPrice: 375,
    availableAsCard: true,
  }),
  new ArtPiece({
    id: 26,
    title: "Winding Aspen Trail",
    medium: "Oil on panel",
    dimensions: "9 x 12 inches",
    imageUrl: "/assets/images/Winding Aspen Trail.jpg",
    artPrice: 200,
  }),
  new ArtPiece({
    id: 4,
    title: "Beauty in Desolation",
    medium: "Oil on panel",
    imageUrl: "/assets/images/Beauty in Desolation.jpg",
    sold: true,
    artPrice: 150,
    availableAsCard: true,
  }),
  new ArtPiece({
    id: 27,
    showInGallery: false,
    title: "Beauty in Desolation - B&W",
    medium: "Oil on panel",
    imageUrl: "/assets/images/Beauty in Desolation - B&W.jpg",
    sold: true,
    artPrice: 150,
    availableAsCard: true,
  }),
  new ArtPiece({
    id: 28,
    title: "My American Dream",
    dimensions: "24 x 36 inches",
    imageUrl: "/assets/images/My American Dream.jpg",
    categories: ["Western", "Animals", "Figurative"],
    artPrice: 1200,
    availableAsPrint: true,
    availableAsCard: true,
  }),
  new ArtPiece({
    id: 29,
    title: "Jan's Poodle",
    medium: "Oil on panel",
    imageUrl: "/assets/images/Jan's Poodle.jpg",
    categories: ["Animals", "Commission"],
    sold: true,
    artPrice: 375,
  }),
  new ArtPiece({
    id: 30,
    title: "Salt River Watering Hole",
    medium: "Oil on linen",
    imageUrl: "/assets/images/Salt River Watering Hole.jpg",
    categories: ["Animals", "Landscape"],
    artPrice: 150,
    availableAsPrint: true,
    availableAsCard: true,
  }),
  new ArtPiece({
    id: 31,
    title: "Blaine on that Ol' Pony",
    medium: "Oil on linen",
    imageUrl: "/assets/images/Blaine on that Ol' Pony.jpg",
    categories: ["Animals", "Commission", "Western", "Figurative"],
    sold: true,
    artPrice: 400,
  }),
  new ArtPiece({
    id: 32,
    title: "Untamed American Dream",
    dimensions: "20 x 20 inches",
    imageUrl: "/assets/images/Untamed American Dream.jpg",
    categories: ["Western", "Animals", "Figurative"],
    artPrice: 800,
    availableAsPrint: true,
    availableAsCard: true,
  })
];

export const categories = [...new Set(artCollection.flatMap(piece => piece.categories))];
