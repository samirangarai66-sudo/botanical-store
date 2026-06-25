export const categories = [
  { id: 'machinery', name: 'Spray Machines', icon: '🍃' },
  { id: 'tools', name: 'Garden Tools', icon: '🛠️' },
  { id: 'spares', name: 'Spare Parts', icon: '⚙️' },
  { id: 'pots', name: 'Tubs & Pots', icon: '🪴' }
];

export const products = [
  {
    id: 'mach-1',
    category: 'machinery',
    name: 'AeroMist 4-Stroke Knapsack Sprayer',
    subtitle: 'Professional farm spray machinery',
    price: 8499,
    rating: 4.8,
    reviews: 124,
    image: 'assets/carousel_sprayer.jpg',
    description: 'High-performance agricultural knapsack sprayer powered by a reliable 4-stroke petrol engine. Features a large 20-liter chemical-resistant tank, padded shoulder straps, and an adjustable brass lance for uniform coverage.',
    specifications: [
      { label: 'Engine Type', value: '4-Stroke Single Cylinder' },
      { label: 'Tank Capacity', value: '20 Liters' },
      { label: 'Operating Pressure', value: '1.5 - 2.5 Mpa' },
      { label: 'Fuel Tank Capacity', value: '0.6 Liters' },
      { label: 'Weight', value: '9.5 kg' }
    ],
    highlight: 'Heavy Duty'
  },
  {
    id: 'mach-2',
    category: 'machinery',
    name: 'EcoCharge Battery Powered Sprayer',
    subtitle: 'Silent, zero-emission plant care',
    price: 3890,
    rating: 4.6,
    reviews: 86,
    image: 'assets/carousel_sprayer.jpg',
    description: 'Quiet and efficient battery-powered sprayer ideal for greenhouses, orchards, and medium gardens. Equipped with a 12V 8Ah rechargeable battery, offering up to 4 hours of continuous spraying on a single charge.',
    specifications: [
      { label: 'Battery', value: '12V 8Ah Sealed Lead Acid' },
      { label: 'Tank Capacity', value: '16 Liters' },
      { label: 'Working Time', value: '3 - 4 Hours' },
      { label: 'Flow Rate', value: '3.1 Liters/min' }
    ],
    highlight: 'Eco-Friendly'
  },
  {
    id: 'tool-1',
    category: 'tools',
    name: 'Hand-Forged Walnut Hand Trowel',
    subtitle: 'Classic copper-plated gardening trowel',
    price: 1299,
    rating: 4.9,
    reviews: 210,
    image: 'assets/trowel_walnut.jpg',
    description: 'Beautifully crafted hand trowel featuring a polished copper-plated carbon steel blade and a solid walnut handle. The ergonomic grip offers superior leverage, while the scale markings help with precise bulb planting depth.',
    specifications: [
      { label: 'Material', value: 'Carbon Steel (Copper Plated)' },
      { label: 'Handle', value: 'Solid Walnut Wood' },
      { label: 'Length', value: '32 cm' },
      { label: 'Weight', value: '260 g' }
    ],
    highlight: 'Bestseller'
  },
  {
    id: 'tool-2',
    category: 'tools',
    name: 'Precision Carbon Steel Bypass Shears',
    subtitle: 'Tempered steel blades for clean cuts',
    price: 1850,
    rating: 4.7,
    reviews: 95,
    image: 'assets/trowel_walnut.jpg',
    description: 'Professional grade bypass pruning shears designed for clean, precise cuts that promote plant health. Hardened SK5 carbon steel blades hold a razor-sharp edge, while the shock-absorbing cushions reduce hand fatigue.',
    specifications: [
      { label: 'Blade Material', value: 'SK5 Hardened Carbon Steel' },
      { label: 'Max Cut Diameter', value: '22 mm' },
      { label: 'Handle Material', value: 'Anodized Aluminum' },
      { label: 'Safety Lock', value: 'Yes (Thumb activated)' }
    ],
    highlight: 'Premium Quality'
  },
  {
    id: 'tool-3',
    category: 'tools',
    name: 'Classic Brass Orchid Water Mister',
    subtitle: 'Vintage design for delicate indoor plants',
    price: 1590,
    rating: 4.5,
    reviews: 64,
    image: 'assets/trowel_walnut.jpg',
    description: 'Add vintage elegance to your plant care routine. This solid brass water mister delivers a micro-fine fog, perfect for boosting humidity around orchids, ferns, air plants, and tropical houseplants without overwatering.',
    specifications: [
      { label: 'Material', value: 'Solid Polished Brass' },
      { label: 'Capacity', value: '300 ml' },
      { label: 'Height', value: '15 cm' },
      { label: 'Pump Style', value: 'Thumb Plunger' }
    ],
    highlight: 'Collector\'s item'
  },
  {
    id: 'spare-1',
    category: 'spares',
    name: 'Premium Brass Spray Nozzle Set',
    subtitle: 'Universal replacement nozzle kit',
    price: 450,
    rating: 4.4,
    reviews: 42,
    image: 'assets/trowel_walnut.jpg',
    description: 'A 4-piece universal replacement nozzle set made of heavy-duty rustproof brass. Compatible with standard spray lances, containing fan spray, conical spray, dual outlet, and adjustable direct-jet nozzles.',
    specifications: [
      { label: 'Material', value: 'Solid Brass' },
      { label: 'Connection Thread', value: 'M14 standard' },
      { label: 'Nozzles Included', value: '4 types (adjustable, flat, cone, double)' }
    ]
  },
  {
    id: 'spare-2',
    category: 'spares',
    name: 'Sprayer Replacement Hose & Trigger Kit',
    subtitle: 'Compatible with standard spray machines',
    price: 699,
    rating: 4.3,
    reviews: 31,
    image: 'assets/trowel_walnut.jpg',
    description: 'High-pressure flexible PVC replacement hose (1.2 meters) complete with a lockable trigger valve. Rejuvenates your existing sprayer and stops leaky triggers instantly.',
    specifications: [
      { label: 'Hose Length', value: '1.2 Meters' },
      { label: 'Hose Material', value: 'Reinforced PVC' },
      { label: 'Trigger Lock', value: 'Yes (Continuous spraying lock)' }
    ]
  },
  {
    id: 'pots-1',
    category: 'pots',
    name: 'Terracotta Aeration Orchid Pot (Medium)',
    subtitle: 'Ideal for drainage and root growth',
    price: 749,
    rating: 4.8,
    reviews: 118,
    image: 'assets/pot_terracotta.jpg',
    description: 'Traditional unglazed terracotta pot featuring unique side cutouts that maximize airflow to orchid and epiphyte roots. Naturally porous clay wicks excess moisture, preventing root rot.',
    specifications: [
      { label: 'Material', value: 'Unglazed Natural Terracotta' },
      { label: 'Diameter', value: '18 cm' },
      { label: 'Height', value: '15 cm' },
      { label: 'Drainage Holes', value: '1 bottom, 6 side slits' }
    ],
    highlight: 'Popular'
  },
  {
    id: 'pots-2',
    category: 'pots',
    name: 'Eco-Fibre Recycled Forest Green Tub',
    subtitle: 'Extremely durable, lightweight tub',
    price: 1850,
    rating: 4.7,
    reviews: 53,
    image: 'assets/pot_terracotta.jpg',
    description: 'Spacious and durable gardening tub made from a blend of recycled polymers and agricultural wood fibres. Heavy-duty construction, UV-resistant, and frostproof, ideal for small fruit trees or robust shrubs.',
    specifications: [
      { label: 'Material', value: 'Recycled Fiber-Plastic Composite' },
      { label: 'Diameter', value: '45 cm' },
      { label: 'Capacity', value: '35 Liters' },
      { label: 'Color', value: 'Matte Sage Green' }
    ],
    highlight: 'Eco-Friendly'
  }
];

export const carouselOffers = [
  {
    id: 'offer-1',
    title: 'Monsoon Farm Special',
    subtitle: 'Get 20% off all high-performance Agricultural Sprayers',
    code: 'SPRAY20',
    tag: 'LIMITED TIME',
    bgColor: 'linear-gradient(135deg, #2c4c38 0%, #466750 100%)',
    image: 'assets/carousel_sprayer.jpg'
  },
  {
    id: 'offer-2',
    title: 'Bougainvillea & Lotus Care',
    subtitle: '15% off artisanal terracotta pots & water tubs',
    code: 'BLOOM15',
    tag: 'POPULAR',
    bgColor: 'linear-gradient(135deg, #7c483b 0%, #b27362 100%)',
    image: 'assets/pot_terracotta.jpg'
  },
  {
    id: 'offer-3',
    title: 'Premium Hand Tools',
    subtitle: 'Flat ₹500 off on solid walnut wood garden tools',
    code: 'HANDCRAFT500',
    tag: 'NEW EXCLUSIVE',
    bgColor: 'linear-gradient(135deg, #8c7855 0%, #baa887 100%)',
    image: 'assets/trowel_walnut.jpg'
  }
];
