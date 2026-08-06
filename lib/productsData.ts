export interface Product {
  slug: string;
  name: string;
  description: string;
  images: string[];
  details: {
    Material?: string;
    Dimensions?: string;
    Finish?: string;
    Assembly?: string;
    Warranty?: string;
    Craftsmanship?: string;
    [key: string]: string | undefined;
  };
  categorySlug: string;
  subcategorySlug: string;
}

export interface Subcategory {
  name: string;
  slug: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
}

export const categoriesData: Category[] = [
  {
    name: "Living",
    slug: "living",
    description: "Immerse yourself in handcrafted luxury. From premium hardwood coffee tables to custom TV consoles, elevate your central living space with heirloom-grade wooden artistry.",
    image: "/sub-cat/living1.jpg",
    subcategories: [
      { name: "Coffee Tables", slug: "coffee-tables" },
      { name: "Side & End Tables", slug: "side-and-end-tables" },
      { name: "Console Tables", slug: "console-tables" },
      { name: "Nest of Tables", slug: "nest-of-tables" },
      { name: "TV Consoles", slug: "tv-consoles" },
      { name: "Bookshelves", slug: "bookshelves" },
      { name: "Display Units", slug: "display-units" },
      { name: "Shoe Racks", slug: "shoe-racks" }
    ],
  },
  {
    name: "Bedroom",
    slug: "bedroom",
    description: "Sanctuaries of absolute rest. Discover our signature solid hardwood beds, meticulously carved bedside tables, and bespoke master wardrobes designed for life.",
    image: "/sub-cat/bed-room1.jpg",
    subcategories: [
      { name: "King Size Beds", slug: "king-size-beds" },
      { name: "Queen Size Beds", slug: "queen-size-beds" },
      { name: "Single & Poster Beds", slug: "single-and-poster-beds" },
      { name: "Beds with Storage", slug: "beds-with-storage" },
      { name: "Wardrobes", slug: "wardrobes" },
      { name: "Bedside Tables", slug: "bedside-tables" },
      { name: "Dressers & Mirrors", slug: "dressers-and-mirrors" },
      { name: "Kerala Box", slug: "chest-of-drawers" },
      { name: "Dressing Stand", slug: "dressing-stand" }
    ],
  },
  {
    name: "Dining",
    slug: "dining",
    description: "Feast in grandeur. Crafted from single-slab hardwoods, our dining tables and chairs create a dramatic, unforgettable setting for gatherings that endure across generations.",
    image: "/sub-cat/dining1.jpg",
    subcategories: [
      { name: "4 Seater Dining Sets", slug: "4-seater-dining-sets" },
      { name: "6 Seater Dining Sets", slug: "6-seater-dining-sets" },
      { name: "Dining Tables", slug: "dining-tables" },
      { name: "Dining Chairs & Benches", slug: "dining-chairs-and-benches" }
    ],
  },
  {
    name: "Study",
    slug: "study",
    description: "Focus met with refined heritage. Elevate your creative or professional sanctuary with organic executive desks, ergonomic hardwood chairs, and bespoke filing libraries.",
    image: "/sub-cat/study1.jpg",
    subcategories: [
      { name: "Study Tables", slug: "study-tables" },
      { name: "Computer Desks", slug: "computer-desks" },
      { name: "Executive Desks", slug: "executive-desks" },
      { name: "Standing Desks", slug: "standing-desks" },
      { name: "Revolving Chair", slug: "ergonomic-chairs" },
      { name: "Study Chairs", slug: "study-chairs" },
      { name: "Bookshelves", slug: "bookshelves-study" },
      { name: "Filing Cabinets", slug: "filing-cabinets" }
    ],
  },
  {
    name: "Storage Furniture",
    slug: "storage-furniture",
    description: "Elegant storage solutions that double as visual statements. Premium wardrobes, handcrafted shoe racks, and robust vintage trunks.",
    image: "/sub-cat/storage-furniture1.jpg",
    subcategories: [
      { name: "2 Door Wardrobes", slug: "2-door-wardrobes" },
      { name: "3+ Door Wardrobes", slug: "3-plus-door-wardrobes" },
      { name: "Kerala Box", slug: "chest-of-drawers-storage" },
      { name: "Shoe Racks", slug: "shoe-racks-storage" }
    ],
  },
  {
    name: "Pillars",
    slug: "pillars",
    description: "Architectural monuments for your home. Carved in premium hardwoods, our pillars serve as majestic structural and decorative details.",
    image: "/sub-cat/pillars1.jpg",
    subcategories: [
      { name: "Teak Wood Pillars", slug: "teak-wood-pillars" },
      { name: "Anjili Wood Pillars", slug: "anjili-wood-pillars" },
      { name: "Plavu Wood Pillars", slug: "plavu-wood-pillars" },
      { name: "Irumullu Wood Pillars", slug: "irumullu-wood-pillars" }
    ]
  },
  {
    name: "Office Room",
    slug: "office-room",
    description: "Inspire vision and clarity. Ergonomic design merges with robust construction to offer outstanding conference systems, executive suites, and work desks.",
    image: "/sub-cat/office-room04.jpg",
    subcategories: [
      { name: "Executive Desks", slug: "executive-desks-office" },
      { name: "Computer Tables", slug: "computer-tables" },
      { name: "Standing Desks", slug: "standing-desks-office" },
      { name: "Revolving Chair", slug: "ergonomic-chairs-office" }
    ]
  },
  {
    name: "Others",
    slug: "others",
    description: "Traditional Kerala home additions, artifacts, and structural elements that carry distinct historical craftsmanship.",
    image: "/sub-cat/others1.jpg",
    subcategories: [
      { name: "Ari Pathayam", slug: "ari-pathayam" },
      { name: "Charu Kasera", slug: "charu-kasera" },
      { name: "Pooja Box", slug: "pooja-box" },
      { name: "Hand Rail", slug: "hand-rail" },
      { name: "Wooden Pannel", slug: "wooden-pannel" },
      { name: "Wooden Stairs", slug: "wooden-stairs" },
      { name: "Amadapetti", slug: "amadapetti" }
    ]
  }
];

export const productsData: Product[] = [
  // Bedroom
  {
    slug: "royal-teak-king-bed",
    name: "Royal King Size Bed",
    description: "Premium handcrafted solid Teak Wood king size bed. Crafted with traditional joinery, this bed features elegant headboard carving and robust structure built to last generations.",
    images: ["/products/bed-room/bed.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "78\"W x 82\"L x 48\"H",
      Finish: "Hand-burnished Natural Oil & Wax",
      Assembly: "Professional assembly included",
      Warranty: "10-Year Structural Guarantee",
      Craftsmanship: "Mortise and tenon joinery with hand-carving detailing"
    },
    categorySlug: "bedroom",
    subcategorySlug: "king-size-beds"
  },
  {
    slug: "heritage-jackwood-queen-bed",
    name: "Heritage Queen Size Bed",
    description: "Elegant solid Plavu queen size bed. Offers a warm golden-brown hue that deepens beautifully over time. Built with maximum comfort and stability in mind.",
    images: ["/products/bed-room/bed.png"],
    details: {
      Material: "Plavu",
      Dimensions: "64\"W x 82\"L x 44\"H",
      Finish: "Silk Polyurethane Matte",
      Assembly: "Professional assembly included",
      Warranty: "10-Year Structural Guarantee",
      Craftsmanship: "Hand-assembled by master carpenters"
    },
    categorySlug: "bedroom",
    subcategorySlug: "queen-size-beds"
  },
  {
    slug: "classic-bedside-dresser-console",
    name: "Classic Bedside Dresser Console",
    description: "A versatile dresser console and bedside companion crafted from high-quality Teak Wood and Plavu. Features ample drawer storage and a polished top surface.",
    images: ["/products/bed-room/console2.jpg","/sub-cat/bed-room cubbord.jpg"],
    details: {
      Material: "Teak Wood & Plavu",
      Dimensions: "42\"W x 18\"D x 32\"H",
      Finish: "Warm Teak Stain Matte",
      Assembly: "Pre-assembled",
      Warranty: "5-Year Warranty",
      Craftsmanship: "Hand-fitted drawers with traditional wooden runners"
    },
    categorySlug: "bedroom",
    subcategorySlug: "bedside-tables"
  },
  {
    slug: "classic-bedroom-wardrobe",
    name: "Classic Bedroom Wardrobe",
    description: "Handcrafted Teak Wood wardrobe showcasing traditional frame-and-panel doors with spacious internal configurations.",
    images: ["/sub-cat/bed-room cubbord.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "48\"W x 22\"D x 78\"H",
      Finish: "Natural Satin Polyurethane",
      Assembly: "Professional installation recommended",
      Warranty: "10-Year Warranty",
      Craftsmanship: "Mortise and tenon joinery with premium soft-close hinges"
    },
    categorySlug: "bedroom",
    subcategorySlug: "wardrobes"
  },
  {
    slug: "premium-bedroom-wardrobe-2",
    name: "Premium Wardrobe",
    description: "Superior quality wardrobe handcrafted from solid Plavu with customized drawers and safe storage compartments.",
    images: ["/sub-cat/bed-room cubbord-2.jpg"],
    details: {
      Material: "Plavu",
      Dimensions: "60\"W x 24\"D x 84\"H",
      Finish: "Wax Polish",
      Assembly: "Professional installation recommended",
      Warranty: "10-Year Warranty",
      Craftsmanship: "Precision tongue-and-groove backing and hand-fitted drawers"
    },
    categorySlug: "bedroom",
    subcategorySlug: "wardrobes"
  },
  {
    slug: "modern-teak-king-bed",
    name: "Modern King Bed",
    description: "A gorgeous modern interpretation of the classic poster bed, carved using premium Teak Wood.",
    images: ["/sub-cat/bed-room1.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "78\"W x 82\"L x 50\"H",
      Finish: "Matte Lacquer",
      Assembly: "Professional assembly included",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Hand-turned posts and solid plank platform"
    },
    categorySlug: "bedroom",
    subcategorySlug: "king-size-beds"
  },
  {
    slug: "elegant-plavu-queen-bed",
    name: "Elegant Queen Bed",
    description: "Beautifully styled Plavu wood queen bed highlighting the golden-yellow natural grain flow.",
    images: ["/sub-cat/bed-room2.jpg"],
    details: {
      Material: "Plavu",
      Dimensions: "64\"W x 82\"L x 45\"H",
      Finish: "Warm Oil Glaze",
      Assembly: "Professional assembly included",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Dovetail joints and hand-selected planks"
    },
    categorySlug: "bedroom",
    subcategorySlug: "queen-size-beds"
  },
  {
    slug: "heritage-single-poster-bed",
    name: "Heritage Single Poster Bed",
    description: "Classic single bed crafted in Teak Wood with beautifully detailed spindles and posts.",
    images: ["/sub-cat/bed-room3.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "38\"W x 78\"L x 72\"H",
      Finish: "Antique Wax Polish",
      Assembly: "Easy manual setup",
      Warranty: "5-Year Guarantee",
      Craftsmanship: "Hand-lathed posts with traditional motifs"
    },
    categorySlug: "bedroom",
    subcategorySlug: "single-and-poster-beds"
  },
  {
    slug: "storage-bed-comfort",
    name: "Storage Bed",
    description: "Extremely robust queen size bed crafted in Anjili Wood featuring heavy-duty underbed storage drawer modules.",
    images: ["/sub-cat/bed-room4.jpg"],
    details: {
      Material: "Anjili Wood",
      Dimensions: "64\"W x 82\"L x 40\"H",
      Finish: "Satin Polyurethane",
      Assembly: "Assembly required",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Integrated wooden drawer slide channels"
    },
    categorySlug: "bedroom",
    subcategorySlug: "beds-with-storage"
  },
  {
    slug: "antique-bedroom-dresser",
    name: "Antique Bedroom Dresser & Mirror",
    description: "Curated dressing console with full-length mirror stand crafted from premium Teak Wood.",
    images: ["/sub-cat/bed-room5.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "36\"W x 18\"D x 72\"H",
      Finish: "French Polish Antique",
      Assembly: "Pre-assembled",
      Warranty: "5-Year Guarantee",
      Craftsmanship: "Carved mirror frame detailing"
    },
    categorySlug: "bedroom",
    subcategorySlug: "dressers-and-mirrors"
  },

  // Living
  {
    slug: "traditional-easy-chair-charu-kasera",
    name: "Traditional Easy Chair",
    description: "The classic Kerala Charu Kasera. Designed with extended reclining armrests for supreme relaxation. Handcrafted in premium Teak Wood with high-quality cane weaving.",
    images: ["/products/living/charu-kasera1.jpeg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "30\"W x 54\"D x 38\"H",
      Finish: "Hand-rubbed French Polish",
      Assembly: "Fully assembled",
      Warranty: "5-Year Warranty",
      Craftsmanship: "Intricately hand-woven cane backing and seat"
    },
    categorySlug: "living",
    subcategorySlug: "side-and-end-tables"
  },
  {
    slug: "premium-wooden-corner-stand",
    name: "Premium Corner Stand",
    description: "Stunning multi-tier corner display unit. Designed to optimize space while displaying your prized books, heirlooms, or decorative pieces.",
    images: ["/products/living/corner-stand1.png"],
    details: {
      Material: "Teak Wood",
      Dimensions: "24\"W x 24\"D x 60\"H",
      Finish: "Polished Rosewood Finish",
      Assembly: "Fully assembled",
      Warranty: "5-Year Warranty",
      Craftsmanship: "Classic turnery legs and smooth edge profiles"
    },
    categorySlug: "living",
    subcategorySlug: "shoe-racks"
  },
  {
    slug: "teak-coffee-table-living",
    name: "Classic Coffee Table",
    description: "Beautifully structured coffee table in solid Teak Wood featuring a low profile design and smooth finish.",
    images: ["/sub-cat/living1.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "40\"W x 24\"D x 18\"H",
      Finish: "Matte Lacquer",
      Assembly: "Fully assembled",
      Warranty: "5-Year Guarantee",
      Craftsmanship: "Rounded edge design and sturdy mortise legs"
    },
    categorySlug: "living",
    subcategorySlug: "coffee-tables"
  },
  {
    slug: "living-end-table-premium",
    name: "Premium End Table",
    description: "Compact accent end table carved in Plavu wood. Ideal companion next to sofas or lounge chairs.",
    images: ["/sub-cat/living2.jpg"],
    details: {
      Material: "Plavu",
      Dimensions: "20\"W x 20\"D x 24\"H",
      Finish: "Warm Stain Waxed",
      Assembly: "Fully assembled",
      Warranty: "5-Year Guarantee",
      Craftsmanship: "Classic Kerala square frame profile"
    },
    categorySlug: "living",
    subcategorySlug: "side-and-end-tables"
  },
  {
    slug: "display-shelves-living",
    name: "Display Unit",
    description: "Stunning open display unit carved in Anjili Wood with traditional horizontal separator planks.",
    images: ["/sub-cat/Display Shelves living.jpg"],
    details: {
      Material: "Anjili Wood",
      Dimensions: "48\"W x 15\"D x 64\"H",
      Finish: "Satin Walnut Stain",
      Assembly: "Fully assembled",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Open modular shelves with joint braces"
    },
    categorySlug: "living",
    subcategorySlug: "display-units"
  },
  {
    slug: "open-bookshelf-living",
    name: "Library Bookshelf",
    description: "Exquisite multi-tiered open bookshelf handcrafted using solid Teak Wood.",
    images: ["/sub-cat/shelves.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "36\"W x 12\"D x 72\"H",
      Finish: "Polyurethane Clear Matte",
      Assembly: "Fully assembled",
      Warranty: "5-Year Guarantee",
      Craftsmanship: "Thick shelf planks with side safety panels"
    },
    categorySlug: "living",
    subcategorySlug: "bookshelves"
  },
  {
    slug: "designer-shoe-rack",
    name: "Classic Shoe Storage Cabinet",
    description: "Multi-shelved shoe storage cabinet with slatted doors to promote airflow. Handcrafted from solid Plavu.",
    images: ["/sub-cat/Shoe Racks.jpg"],
    details: {
      Material: "Plavu",
      Dimensions: "32\"W x 14\"D x 38\"H",
      Finish: "Natural Stain Matte",
      Assembly: "Pre-assembled",
      Warranty: "5-Year Guarantee",
      Craftsmanship: "Louvred / Slatted ventilation door design"
    },
    categorySlug: "living",
    subcategorySlug: "shoe-racks"
  },

  // Dining
  {
    slug: "single-slab-teak-dining-table",
    name: "Single-Slab Dining Table",
    description: "A spectacular dining table made from a curated single slab of premium aged Teak Wood. Showcases gorgeous live edges and dramatic wood grains.",
    images: ["/products/dining/dining-table.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "72\"W x 36\"D x 30\"H",
      Finish: "Water-resistant Polyurethane Matte",
      Assembly: "Legs require attachment (hardware included)",
      Warranty: "10-Year Structural Guarantee",
      Craftsmanship: "Book-matched grain flow and heavy-duty timber base"
    },
    categorySlug: "dining",
    subcategorySlug: "dining-tables"
  },
  {
    slug: "classic-dining-display-shelves",
    name: "Classic Display Shelves",
    description: "Premium Anjili Wood display rack with open shelving, ideal for displaying fine chinaware, glassware, or decorative plates in the dining area.",
    images: ["/products/dining/display-shelves.jpeg", "/products/dining/display-shelves2.jpeg"],
    details: {
      Material: "Anjili Wood",
      Dimensions: "48\"W x 16\"D x 72\"H",
      Finish: "Natural Teak Polish",
      Assembly: "Fully assembled",
      Warranty: "5-Year Guarantee",
      Craftsmanship: "Interlocking mortise shelf joints"
    },
    categorySlug: "dining",
    subcategorySlug: "dining-chairs-and-benches"
  },
  {
    slug: "royal-heritage-dining-bench",
    name: "Royal Heritage Dining Bench",
    description: "Bespoke solid Teak Wood long chair and bench designed for dining areas. Provides comfortable seating with elegant classic back spindles.",
    images: ["/products/chair/long wooden chair.jpeg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "60\"W x 20\"D x 36\"H",
      Finish: "Satin Walnut Polish",
      Assembly: "Fully assembled",
      Warranty: "5-Year Warranty",
      Craftsmanship: "Hand-shaped spindle backrests and contoured seating"
    },
    categorySlug: "dining",
    subcategorySlug: "dining-chairs-and-benches"
  },
  {
    slug: "teak-4-seater-dining-set",
    name: "Imperial 4 Seater Dining Set",
    description: "Traditional Teak Wood dining table accompanied by four solid handcrafted matching chairs.",
    images: ["/sub-cat/dining1.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "48\"W x 48\"D x 30\"H",
      Finish: "High Gloss Water Resistant",
      Assembly: "Pre-assembled set",
      Warranty: "10-Year Warranty",
      Craftsmanship: "Premium joint alignment and ergonomic dining chairs"
    },
    categorySlug: "dining",
    subcategorySlug: "4-seater-dining-sets"
  },
  {
    slug: "premium-6-seater-dining-set",
    name: "Royal 6 Seater Dining Set",
    description: "Majestic six-seater dining set handcrafted in solid Plavu. Perfect for larger family gatherings.",
    images: ["/sub-cat/dining2.jpg"],
    details: {
      Material: "Plavu",
      Dimensions: "72\"W x 40\"D x 30\"H",
      Finish: "Silk Matte Polish",
      Assembly: "Professional delivery setup",
      Warranty: "10-Year Warranty",
      Craftsmanship: "Deep tenon framing structure and double bracing"
    },
    categorySlug: "dining",
    subcategorySlug: "6-seater-dining-sets"
  },
  {
    slug: "dining-display-shelves-classic",
    name: "Classic Dining Display Shelves",
    description: "Ornamental open shelving cabinet designed specifically for showcasing culinary items in dining rooms. Crafted in Anjili Wood.",
    images: ["/sub-cat/Display Shelves- dining.jpg"],
    details: {
      Material: "Anjili Wood",
      Dimensions: "42\"W x 15\"D x 68\"H",
      Finish: "Warm Teak Finish",
      Assembly: "Fully assembled",
      Warranty: "5-Year Guarantee",
      Craftsmanship: "Recessed wood panels and safety edge framing"
    },
    categorySlug: "dining",
    subcategorySlug: "dining-chairs-and-benches"
  },

  // Study
  // {
  //   slug: "study-wooden-chair",
  //   name: "Traditional Study Chair",
  //   description: "Ergonomically contoured Teak Wood study chair built for study tables and writing desk companion setups.",
  //   images: ["/products/chair/long wooden chair.jpeg"],
  //   details: {
  //     Material: "Teak Wood",
  //     Dimensions: "18\"W x 20\"D x 36\"H",
  //     Finish: "Satin Polyurethane",
  //     Assembly: "Fully assembled",
  //     Warranty: "5-Year Warranty",
  //     Craftsmanship: "Hand-turned spindle rails"
  //   },
  //   categorySlug: "study",
  //   subcategorySlug: "study-chairs"
  // },
  {
    slug: "classic-study-table",
    name: "Classic Study Table",
    description: "Beautifully designed writing desk with custom drawers and a spacious top, crafted in Teak Wood.",
    images: ["/sub-cat/study table.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "48\"W x 24\"D x 30\"H",
      Finish: "Natural Lacquer",
      Assembly: "Pre-assembled",
      Warranty: "5-Year Guarantee",
      Craftsmanship: "Dovetailed organizer drawers"
    },
    categorySlug: "study",
    subcategorySlug: "study-tables"
  },
  {
    slug: "computer-desk-study",
    name: "Computer Desk",
    description: "Sturdy computer desk built in Plavu featuring a pull-out keyboard tray and cable management slots.",
    images: ["/sub-cat/study1.jpg"],
    details: {
      Material: "Plavu",
      Dimensions: "52\"W x 28\"D x 30\"H",
      Finish: "Polished Walnut Finish",
      Assembly: "Pre-assembled",
      Warranty: "5-Year Guarantee",
      Craftsmanship: "Reinforced frame with sliding tray mechanisms"
    },
    categorySlug: "study",
    subcategorySlug: "computer-desks"
  },
  {
    slug: "executive-desk-study",
    name: "Bespoke Executive Desk",
    description: "Premium office study desk featuring dual side drawers cabinets and a large writing table surface.",
    images: ["/sub-cat/study2.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "60\"W x 32\"D x 30\"H",
      Finish: "Matte Polyurethane",
      Assembly: "Professional assembly included",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Ancient flush panel joinery"
    },
    categorySlug: "study",
    subcategorySlug: "executive-desks"
  },
  {
    slug: "ergonomic-standing-desk",
    name: "Standing Desk",
    description: "Beautiful height-adjustable desk featuring a gorgeous thick Anjili Wood tabletop.",
    images: ["/sub-cat/Standing Desks.jpg"],
    details: {
      Material: "Anjili Wood",
      Dimensions: "54\"W x 30\"D x 28\"-48\"H",
      Finish: "Clear Oil Stain",
      Assembly: "Assembly required (tools included)",
      Warranty: "5-Year Tabletop Guarantee",
      Craftsmanship: "Contour-bevelled edges and smooth surface planing"
    },
    categorySlug: "study",
    subcategorySlug: "standing-desks"
  },
  {
    slug: "study-table-compact",
    name: "Compact Writing Desk",
    description: "Space-saving writing table designed in solid Plavu, perfect for apartments or small study rooms.",
    images: ["/sub-cat/study3.jpg"],
    details: {
      Material: "Plavu",
      Dimensions: "36\"W x 20\"D x 30\"H",
      Finish: "Natural Stain Matte",
      Assembly: "Pre-assembled",
      Warranty: "5-Year Guarantee",
      Craftsmanship: "Minimalist joinery structure"
    },
    categorySlug: "study",
    subcategorySlug: "study-tables"
  },

  // Storage Furniture
  {
    slug: "traditional-kerala-storage-pathayam",
    name: "Traditional Storage Pathayam",
    description: "Large solid Plavu storage chest inspired by traditional grain pathayams. Excellent storage potential for bedrooms or hallways.",
    images: ["/products/others/ari-pathayam1.jpeg"],
    details: {
      Material: "Plavu",
      Dimensions: "48\"W x 30\"D x 36\"H",
      Finish: "Natural Beeswax",
      Assembly: "Fully assembled",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Traditional wooden sliding channels"
    },
    categorySlug: "storage-furniture",
    subcategorySlug: "chest-of-drawers-storage"
  },
  {
    slug: "wardrobe-3plus-door",
    name: "3+ Door Master Wardrobe",
    description: "Grand master bedroom wardrobe featuring multiple clothes rails, integrated shelving, and solid Teak Wood doors.",
    images: ["/sub-cat/storage-furniture2.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "72\"W x 24\"D x 80\"H",
      Finish: "Teak Polish Satin",
      Assembly: "Professional installation required",
      Warranty: "10-Year Warranty",
      Craftsmanship: "Heavy timber build with internal storage customization"
    },
    categorySlug: "storage-furniture",
    subcategorySlug: "3-plus-door-wardrobes"
  },
  {
    slug: "shoe-rack-storage-unit",
    name: "Utility Shoe Rack",
    description: "Sturdy multi-level shoe organizer designed with closed doors in Plavu wood for hallways and entryways.",
    images: ["/sub-cat/storage-furniture4.jpg"],
    details: {
      Material: "Plavu",
      Dimensions: "36\"W x 14\"D x 42\"H",
      Finish: "Natural Satin Matte",
      Assembly: "Pre-assembled",
      Warranty: "5-Year Guarantee",
      Craftsmanship: "Mortise frame with ventilation slats"
    },
    categorySlug: "storage-furniture",
    subcategorySlug: "shoe-racks-storage"
  },

  // Pillars
  {
    slug: "hand-carved-teak-wood-pillar",
    name: "Hand-Carved Pillar",
    description: "Architectural masterpiece pillar carved from a single log of premium Teak Wood. Features South Indian temple design details.",
    images: ["/products/pillar/pillar1.jpeg", "/products/pillar/pillar2.jpeg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "12\" Diameter x 96\"H",
      Finish: "Natural Antique Polish",
      Assembly: "Structural installation required",
      Warranty: "25-Year Guarantee",
      Craftsmanship: "Meticulously hand-carving"
    },
    categorySlug: "pillars",
    subcategorySlug: "teak-wood-pillars"
  },
  {
    slug: "anjili-wood-pillar-premium",
    name: "Carved Pillar",
    description: "Majestic structural pillar handcrafted from aged Anjili Wood, featuring traditional spiral engravings.",
    images: ["/sub-cat/pillars2.jpg"],
    details: {
      Material: "Anjili Wood",
      Dimensions: "10\" Diameter x 96\"H",
      Finish: "Clear Protection Coat",
      Assembly: "Structural installation required",
      Warranty: "20-Year Guarantee",
      Craftsmanship: "Hand-chiselled flutes and capital details"
    },
    categorySlug: "pillars",
    subcategorySlug: "anjili-wood-pillars"
  },
  {
    slug: "plavu-wood-pillar-heritage",
    name: "Heritage Pillar",
    description: "Exquisite structural pillar crafted in Plavu, showcasing the beautiful golden hue typical of jackwood.",
    images: ["/sub-cat/pillars3.jpg"],
    details: {
      Material: "Plavu",
      Dimensions: "11\" Diameter x 96\"H",
      Finish: "French Polish Satin",
      Assembly: "Structural installation required",
      Warranty: "20-Year Guarantee",
      Craftsmanship: "Turned profile details with capital supports"
    },
    categorySlug: "pillars",
    subcategorySlug: "plavu-wood-pillars"
  },
  {
    slug: "irumullu-wood-pillar-classic",
    name: "Classic Pillar",
    description: "An authentic structural or decorative pillar carved from dense, heavy Irumullu wood.",
    images: ["/sub-cat/pillars8.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "10\" Diameter x 96\"H",
      Finish: "Antique Wax Polish",
      Assembly: "Structural installation required",
      Warranty: "20-Year Guarantee",
      Craftsmanship: "Heavy timber turnery and square base"
    },
    categorySlug: "pillars",
    subcategorySlug: "irumullu-wood-pillars"
  },

  // Office Room
  {
    slug: "executive-desk-office",
    name: "Professional Executive Desk",
    description: "A grand desk in solid Teak Wood featuring custom filing shelves and cabinet spaces.",
    images: ["/sub-cat/office-room04.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "60\"W x 30\"D x 30\"H",
      Finish: "Satin Polyurethane",
      Assembly: "Pre-assembled",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Mortise and tenon panels with double braces"
    },
    categorySlug: "office-room",
    subcategorySlug: "executive-desks-office"
  },
  {
    slug: "computer-table-office",
    name: "Computer Table",
    description: "Sturdy and practical computer workstation crafted in Plavu wood with specialized keyboard drawer.",
    images: ["/sub-cat/office-room01.jpg"],
    details: {
      Material: "Plavu",
      Dimensions: "48\"W x 24\"D x 30\"H",
      Finish: "Warm Stain Matte",
      Assembly: "Pre-assembled",
      Warranty: "5-Year Guarantee",
      Craftsmanship: "Sturdy slide rails and side panel support"
    },
    categorySlug: "office-room",
    subcategorySlug: "computer-tables"
  },
  {
    slug: "standing-desk-office",
    name: "Standing Desk Top",
    description: "An adjustable desk module top carved in Anjili Wood for healthy working options.",
    images: ["/sub-cat/office-room03.jpg"],
    details: {
      Material: "Anjili Wood",
      Dimensions: "50\"W x 28\"D x 30\"-48\"H",
      Finish: "Natural Lacquer Finish",
      Assembly: "Assembly required",
      Warranty: "5-Year Guarantee",
      Craftsmanship: "Fitted metal insert joints and smooth top planing"
    },
    categorySlug: "office-room",
    subcategorySlug: "standing-desks-office"
  },

  // Others
  {
    slug: "traditional-kerala-amadapetti-box",
    name: "Traditional Amadapetti Box",
    description: "A classic heritage jewelry box (Amadapetti) handcrafted with brass accents from Teak Wood. Features secret drawers.",
    images: ["/products/others/amadapetti.png"],
    details: {
      Material: "Teak Wood & Brass",
      Dimensions: "18\"W x 12\"D x 10\"H",
      Finish: "Natural Oil Polish",
      Assembly: "Pre-assembled",
      Warranty: "Lifetime Guarantee",
      Craftsmanship: "100% hand-fitted ornamental brass work"
    },
    categorySlug: "others",
    subcategorySlug: "amadapetti"
  },
  {
    slug: "antique-wooden-ari-pathayam",
    name: "Antique Rice Chest (Ari Pathayam)",
    description: "A massive, authentic Plavu chest traditionally used for storing grain. Handcrafted from heavy wood slabs.",
    images: ["/products/others/ari-pathayam1.jpeg"],
    details: {
      Material: "Plavu",
      Dimensions: "48\"W x 30\"D x 36\"H",
      Finish: "Wax Polish",
      Assembly: "Fully assembled",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Thick slab construction with heavy-duty joinery"
    },
    categorySlug: "others",
    subcategorySlug: "ari-pathayam"
  },
  {
    slug: "hand-rail-others",
    name: "Architectural Hand Rail component",
    description: "Intricately carved Teak Wood hand rail architectural component for premium homes.",
    images: ["/products/others/hand-rail1.jpeg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "72\"W x 4\"D x 18\"H",
      Finish: "Antique Wax Finish",
      Assembly: "Mounting hardware not included",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Traditional relief carving"
    },
    categorySlug: "others",
    subcategorySlug: "hand-rail"
  },
  {
    slug: "wooden-pannel-others",
    name: "Ornamental Wooden Wall Panel",
    description: "Intricately carved Teak Wood wall panel to serve as decorative architectural details.",
    images: ["/products/others/wooden-pannel1.jpeg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "72\"W x 4\"D x 18\"H",
      Finish: "Antique Wax Finish",
      Assembly: "Mounting hardware not included",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Deep Relief hand-carving techniques"
    },
    categorySlug: "others",
    subcategorySlug: "wooden-pannel"
  },
  {
    slug: "traditional-easy-chair-charu-kasera-others",
    name: "Traditional Easy Chair",
    description: "The classic Kerala Charu Kasera. Designed with extended reclining armrests for supreme relaxation. Handcrafted in premium Teak Wood with natural cane backing.",
    images: ["/products/living/charu-kasera1.jpeg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "30\"W x 54\"D x 38\"H",
      Finish: "Hand-rubbed French Polish",
      Assembly: "Fully assembled",
      Warranty: "5-Year Warranty",
      Craftsmanship: "Intricately hand-woven cane backing and seat"
    },
    categorySlug: "others",
    subcategorySlug: "charu-kasera"
  },
  {
    slug: "handcrafted-pooja-cabinet-others",
    name: "Handcrafted Pooja Cabinet",
    description: "Sacred prayer altar built with beautiful temple arch styling from Teak Wood and intricate lattice cabinet doors.",
    images: ["/products/others/pooja-cabinet1.jpeg"],
    details: {
      Material: "Teak Wood & Brass Fittings",
      Dimensions: "36\"W x 20\"D x 54\"H",
      Finish: "Traditional Temple Brown Finish",
      Assembly: "Fully assembled",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Hand-carving and temple pillars detailing"
    },
    categorySlug: "others",
    subcategorySlug: "pooja-box"
  }
];
