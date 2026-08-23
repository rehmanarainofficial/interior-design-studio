// Solutions & Installation Services Data for Interior Design Studio Pakistan (interiordesignstudiopk.com)

export const FITTING_CATEGORIES = [
  {
    id: 'residential-fitting',
    name: 'Residential Fitting Solutions',
    tagline: 'Turnkey Supply & Installation for Houses, Apartments & Luxury Villas',
    description: 'We supply and professionally fit premium flooring, wall panels, and window blinds for bedrooms, drawing rooms, TV lounges, and kitchens across Pakistan.',
    items: [
      { id: 'spc-flooring-fitting', name: 'SPC Waterproof Wood Plank Fitting', badge: 'House #1 Choice', target: 'Houses & Villas' },
      { id: 'pvc-vinyl-fitting', name: 'PVC Vinyl Flooring Installation', badge: 'Popular Choice', target: 'Apartments' },
      { id: 'wooden-flooring-fitting', name: 'Engineered Hardwood & Parquet Fitting', badge: 'Luxury Finish', target: 'Villas & Lounges' },
      { id: 'wpc-fluted-wall-fitting', name: 'WPC Fluted Slat Wall Panel Fitting', badge: 'Media Wall Trend', target: 'TV Lounges' },
      { id: 'korean-wallpaper-fitting', name: 'Korean 3D Wallpaper Fitting', badge: 'Seamless Roll', target: 'Bedrooms' },
      { id: 'window-blinds-fitting', name: 'Motorized Roller & Zebra Blinds Fitting', badge: 'Custom Fit', target: 'Living Rooms' },
    ]
  },
  {
    id: 'commercial-fitting',
    name: 'Commercial & Office Execution',
    tagline: 'Complete Turnkey Fit-out for Corporate Offices, Shops & Boutiques',
    description: 'Heavy-duty commercial flooring, soundproof carpet tiles, raised access server floors, and stylish shop wall cladding installed with minimum business downtime.',
    items: [
      { id: 'carpet-tile-fitting', name: 'Commercial Acoustic Carpet Tile Fitting', badge: 'Corporate Spec', target: 'Offices & Banks' },
      { id: 'raised-access-fitting', name: 'Raised Access Server Room Floor Fitting', badge: 'IT Standard', target: 'Data Centers' },
      { id: 'shop-pvc-wall-fitting', name: 'Damp-Proof PVC Wall Cladding Fitting', badge: 'Fast Fitting', target: 'Shops & Plazas' },
      { id: 'epoxy-showroom-fitting', name: 'High-Gloss 3D Metallic Epoxy Coating', badge: 'Mirror Finish', target: 'Showrooms' },
    ]
  },
  {
    id: 'gym-sports-fitting',
    name: 'Gym & Sports Arena Installation',
    tagline: 'Heavy Duty Impact Proof Rubber Flooring & Outdoor Sports Courts',
    description: 'Engineered shock-absorbing rubber tile installation for commercial gyms, crossfit boxes, basketball courts, and outdoor playground safety surfaces.',
    items: [
      { id: 'gym-rubber-fitting', name: 'Gym Shock-Absorbing Rubber Tile Fitting', badge: 'Heavy Weight Drop', target: 'Gyms & Fitness' },
      { id: 'sports-court-fitting', name: 'Polyurethane Sports Arena Court Fitting', badge: 'FIBA Standard', target: 'Indoor Courts' },
      { id: 'epdm-playground-fitting', name: 'EPDM Outdoor Safety Rubber Fitting', badge: 'Fall Protection', target: 'Parks & Schools' },
      { id: 'artificial-grass-fitting', name: 'Artificial Lawn & Roof Turf Fitting', badge: 'All-Season Green', target: 'Terraces & Lawns' },
    ]
  },
  {
    id: 'medical-institutional-fitting',
    name: 'Medical & Institutional Execution',
    tagline: 'Hygienic Homogeneous Flooring for Hospitals, Labs & Cleanrooms',
    description: 'Hot-wire welded seamless anti-bacterial vinyl sheet flooring for hospital operating theaters, ICUs, schools, and tech manufacturing labs.',
    items: [
      { id: 'hospital-vinyl-fitting', name: 'Seamless Antibacterial Vinyl Fitting', badge: 'OT Room Grade', target: 'Hospitals & ICUs' },
      { id: 'anti-static-esd-fitting', name: 'Anti-Static ESD Floor Sheet Fitting', badge: 'ISO Certified', target: 'Tech & Pharma Labs' },
      { id: 'kids-eva-fitting', name: 'Soft EVA Foam Safety Tile Fitting', badge: 'Child Safe', target: 'Daycares & Schools' },
    ]
  }
];

export const SOLUTIONS_DATA = {
  // --- RESIDENTIAL SOLUTIONS ---
  'spc-flooring-fitting': {
    id: 'spc-flooring-fitting',
    title: 'SPC Waterproof Wood Plank Fitting for Houses & Villas',
    category: 'residential-fitting',
    categoryName: 'Residential Fitting',
    subtitle: '100% Water & Termite Proof Supply + Turnkey Installation Service',
    description: 'We supply and professionally fit SPC (Stone Plastic Composite) rigid core wood flooring for bedrooms, drawing rooms, TV lounges, and kitchens. Our team handles surface levelling, IXPE acoustic underlayment fitting, click-lock joint assembly, and matching wall skirting installation.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Bedrooms & TV Lounges', 'Luxury Villas', 'Kitchens & Dining Areas'],
    features: [
      'Complete Supply + Expert Site Installation Included',
      '100% Water & Termite Proof Guarantee',
      'Underlayment IXPE Soundproofing Pad Included',
      'Clean 1-Day Installation for Average Room',
      '20-Year Material & Workmanship Warranty'
    ],
    specifications: {
      'Service Type': 'Supply & On-Site Installation',
      'Suitable Locations': 'Houses, Apartments, Executive Offices',
      'Plank Specs': '5.0mm SPC Rigid Core + 0.5mm Wear Layer',
      'Execution Speed': 'Approx 500 sq ft per day'
    },
    swatches: [
      { name: 'Royal Golden Oak', hex: '#B8860B' },
      { name: 'Walnut Espresso', hex: '#3E2723' },
      { name: 'Scandinavian Grey', hex: '#78909C' }
    ]
  },

  'pvc-vinyl-fitting': {
    id: 'pvc-vinyl-fitting',
    title: 'PVC Vinyl Flooring Installation for Apartments & Commercials',
    category: 'residential-fitting',
    categoryName: 'Residential Fitting',
    subtitle: 'Smooth, Water-Resistant Vinyl Planks & Sheet Laying',
    description: 'Professional PVC vinyl flooring installation for residential apartments and rental properties. Smooth underfoot finish with self-adhesive or glue-down fitting options.',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Apartments & Rentals', 'Commercial Offices', 'Shops'],
    features: [
      'Moisture & Water Resistant Surface',
      'Scratch & Impact Resistant Layer',
      'Quick Glue-Down Site Execution',
      '10-Year Residential Warranty'
    ],
    specifications: {
      'Service Type': 'Supply & Site Glue-Down Fitting',
      'Thickness': '2.0mm - 3.0mm Planks'
    },
    swatches: [
      { name: 'Classic Maple Wood', hex: '#D2B48C' },
      { name: 'Italian Carrara Marble', hex: '#E0E0E0' }
    ]
  },

  'wooden-flooring-fitting': {
    id: 'wooden-flooring-fitting',
    title: 'Engineered Hardwood & Parquet Fitting for Luxury Villas',
    category: 'residential-fitting',
    categoryName: 'Residential Fitting',
    subtitle: 'Genuine European Hardwood & Herringbone Parquet Execution',
    description: 'Introduce natural wood luxury to executive suites and drawing rooms. We install high-density engineered oak hardwood with wax-sealed joints and herringbone pattern alignment.',
    image: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Luxury Master Suites', 'Villa Drawing Rooms', 'Executive Offices'],
    features: [
      'Authentic Real Wood Grain Texture',
      'Herringbone & Straight Plank Pattern Assembly',
      'Wax-Sealed V-Groove Edge Moisture Defense',
      '25-Year Manufacturer Warranty'
    ],
    specifications: {
      'Service Type': 'Turnkey Hardwood Fitting',
      'Plank Grade': '12mm AC4/AC5 Heavy Rating'
    },
    swatches: [
      { name: 'Herringbone European Oak', hex: '#C5A059' },
      { name: 'Smoked Walnut Dark', hex: '#442C1D' }
    ]
  },

  'wpc-fluted-wall-fitting': {
    id: 'wpc-fluted-wall-fitting',
    title: 'WPC Fluted Slat Wall Panel Fitting for Media Walls & Lounges',
    category: 'residential-fitting',
    categoryName: 'Residential Fitting',
    subtitle: 'Architectural 3D Slat Wall Design & LED Strip Profile Execution',
    description: 'Transform boring flat lounge walls into stunning modern architectural features. We fabricate custom TV media walls and bedroom accent walls using WPC Fluted Slat Panels with integrated warm LED strip channels.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['TV Media Walls', 'Bed Headboard Accent Walls', 'Executive Office Backdrops'],
    features: [
      'Custom 3D Vertical Slat Wood Texture',
      'Waterproof & Termite Proof Composite Slats',
      'Concealed Wiring & Warm LED Profile Integration',
      'Turnkey Carpentry & Mounting'
    ],
    specifications: {
      'Service Type': 'Media Wall Design & Installation',
      'Flute Depth': '12mm / 15mm Architectural Slats'
    },
    swatches: [
      { name: 'Warm Amber Oak', hex: '#F0BB78' },
      { name: 'Deep Espresso Walnut', hex: '#543A14' },
      { name: 'Charcoal Black', hex: '#131010' }
    ]
  },

  'korean-wallpaper-fitting': {
    id: 'korean-wallpaper-fitting',
    title: 'Korean 3D Heavy Textured Wallpaper Fitting',
    category: 'residential-fitting',
    categoryName: 'Residential Fitting',
    subtitle: 'Seamless Extra-Wide 1.06m Roll Wall Installation',
    description: 'Professional wallpaper hanging using imported South Korean jumbo rolls. Wide 1.06m rolls reduce visible seams by 50%, producing a smooth, 3D textured plaster wall finish.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Master Bedrooms', 'Drawing Room Features', 'Hotel Rooms'],
    features: [
      'Extra Wide 1.06m Rolls Reduce Seams',
      'Deep 3D Embossed Tactile Texture',
      'Scrubbable Moisture Resistant Coating',
      'Specialized Non-Stain Adhesive Application'
    ],
    specifications: {
      'Service Type': 'Wallpaper Supply & Hanger Service',
      'Origin': 'Made in South Korea'
    },
    swatches: [
      { name: 'Korean Warm Sand Linen', hex: '#F0BB78' },
      { name: 'Concrete Plaster Grey', hex: '#78909C' }
    ]
  },

  'window-blinds-fitting': {
    id: 'window-blinds-fitting',
    title: 'Motorized Roller & Zebra Window Blinds Installation',
    category: 'residential-fitting',
    categoryName: 'Residential Fitting',
    subtitle: 'Custom Window Shades with Remote Motor Automation',
    description: 'Custom window measurement, mounting cassette fabrication, and motor installation for Roller blackout, Zebra dual-layer, and real Wood Venetian window blinds.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Master Bedrooms', 'Lounge Windows', 'Executive Office Windows'],
    features: [
      '100% Thermal Blackout & Glare Sunscreen Fabrics',
      'Motorized Remote Control Integration',
      'Anodized Aluminum Headrail Cassette Enclosure',
      'Dust & Soil Repellent Coating'
    ],
    specifications: {
      'Service Type': 'Custom Window Fitting & Automation',
      'Mechanism': 'Manual Chain / Remote Controlled Motor'
    },
    swatches: [
      { name: 'Cream Linen', hex: '#FFF0DC' },
      { name: 'Slate Grey Blackout', hex: '#424242' }
    ]
  },

  // --- COMMERCIAL SOLUTIONS ---
  'carpet-tile-fitting': {
    id: 'carpet-tile-fitting',
    title: 'Commercial Carpet Tile Installation for Corporate Offices',
    category: 'commercial-fitting',
    categoryName: 'Commercial Execution',
    subtitle: 'Acoustic Sound-Dampening Carpet Squares for Workspaces & Banks',
    description: 'Fast, clean commercial carpet tile installation for corporate offices, call centers, and bank branches. Modular tiles allow quick replacement of damaged areas without disturbing entire office floor.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Corporate Office Floors', 'Call Centers & Banks', 'Conference Rooms'],
    features: [
      'Heavy PVC Bitumen Backing (No Edges Curling)',
      'High Noise Reduction & Acoustic Sound Absorption',
      'Stain-Shield Treated Solution Dyed Nylon Fiber',
      'Night-Shift / Weekend Installation Option Available'
    ],
    specifications: {
      'Service Type': 'Supply & Commercial Office Fitting',
      'Tile Size': '50cm x 50cm Modular Tiles'
    },
    swatches: [
      { name: 'Executive Charcoal Grid', hex: '#37474F' },
      { name: 'Warm Mocha Brown', hex: '#4E342E' }
    ]
  },

  'raised-access-fitting': {
    id: 'raised-access-fitting',
    title: 'Raised Access Server Room Floor Fitting',
    category: 'commercial-fitting',
    categoryName: 'Commercial Execution',
    subtitle: 'Modular Underfloor Cable & HVAC Duct Access System',
    description: 'Galvanized steel pedestal-supported raised access floor panel fitting for data centers, IT server rooms, and bank server floors across Pakistan.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Data Centers', 'IT Server Rooms', 'Control Rooms'],
    features: [
      'Heavy Concentrated Load Cementitious Steel Panels',
      'Antistatic HPL Surface Laminate Finish',
      'Adjustable Height Steel Pedestal Grid',
      'Fire Class A Non-Combustible Standard'
    ],
    specifications: {
      'Service Type': 'Raised Access Floor Fitting',
      'Panel Size': '600mm x 600mm x 35mm Steel Infill'
    },
    swatches: [
      { name: 'Antistatic Grey HPL', hex: '#B0BEC5' }
    ]
  },

  'shop-pvc-wall-fitting': {
    id: 'shop-pvc-wall-fitting',
    title: 'Damp-Proof PVC Wall Cladding Fitting for Shops',
    category: 'commercial-fitting',
    categoryName: 'Commercial Execution',
    subtitle: '100% Waterproof Wall Renovation Panels',
    description: 'Eliminate wall dampness and peeling paint permanently. Waterproof PVC wall cladding panels click together seamlessly for fast shop and showroom renovations.',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Retail Shops & Boutiques', 'Commercial Plazas', 'Basement Walls'],
    features: [
      '100% Waterproof - Covers Seepage Dampness',
      'Termite Proof & Flame Retardant B1',
      'Zero Painting Required - Instant Gloss Finish',
      'Fast 1-Day Fitout'
    ],
    specifications: {
      'Service Type': 'Wall Panel Cladding Fitting',
      'Panel Width': '10 inches / 12 inches'
    },
    swatches: [
      { name: 'White Gold Marble', hex: '#FFF0DC' }
    ]
  },

  'epoxy-showroom-fitting': {
    id: 'epoxy-showroom-fitting',
    title: 'High-Gloss 3D Metallic Epoxy Coating for Showrooms',
    category: 'commercial-fitting',
    categoryName: 'Commercial Execution',
    subtitle: 'Seamless Mirror-Gloss Industrial & Commercial Floor Coating',
    description: 'Liquid-applied self-leveling 3D metallic epoxy flooring pour for car showrooms, luxury boutiques, and high-footfall commercial venues.',
    image: 'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Auto Showrooms', 'Luxury Boutiques', 'Commercial Halls'],
    features: [
      '100% Jointless Seamless Mirror Finish',
      'Chemical & Oil Spill Resistant Coating',
      'High Impact Machinery & Vehicle Load Capacity',
      'Custom Metallic Swirl Art Designs'
    ],
    specifications: {
      'Service Type': 'Site Epoxy Pour & Curing',
      'Build Thickness': '2.0mm - 4.0mm Self-Leveling'
    },
    swatches: [
      { name: 'Metallic Gold Swirl', hex: '#D4AF37' }
    ]
  },

  // --- GYM & SPORTS SOLUTIONS ---
  'gym-rubber-fitting': {
    id: 'gym-rubber-fitting',
    title: 'Gym Shock-Absorbing Rubber Tile Fitting for Fitness Centers',
    category: 'gym-sports-fitting',
    categoryName: 'Gym & Sports Execution',
    subtitle: 'Heavy Duty Weight Drop Protection for Commercial Gyms & Crossfit',
    description: 'We supply and lay high-density 10mm to 25mm vulcanized rubber tiles for heavy free-weight zones, crossfit areas, and personal training studios across Pakistan. Prevents subfloor cracking and deadens barbell drop noise.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Commercial Gyms', 'Crossfit Studios', 'Home Fitness Rooms'],
    features: [
      'High Density Rubber Granules (1000 kg/m³)',
      'Vibration Isolation & Impact Shock Absorption',
      'Interlocking Puzzle & Square Tile Formats',
      'Heavy Weight Drop Certified'
    ],
    specifications: {
      'Thickness Options': '10mm, 15mm, 20mm, 25mm',
      'Density': '1000 kg/m³ High Compression'
    },
    swatches: [
      { name: 'Solid Black Rubber', hex: '#212121' },
      { name: 'Blue Fleck EPDM', hex: '#263238' }
    ]
  },

  'sports-court-fitting': {
    id: 'sports-court-fitting',
    title: 'Polyurethane Sports Arena Court Installation',
    category: 'gym-sports-fitting',
    categoryName: 'Gym & Sports Execution',
    subtitle: 'FIBA Compliant Basketball & Badminton Court Surfaces',
    description: 'Elastic polyurethane sports flooring system pour for basketball courts, badminton arenas, and multi-purpose sports halls.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Indoor Sports Courts', 'Basketball & Badminton Arenas'],
    features: [
      'Superior Shock Absorption (> 45%)',
      'Anti-Slip Sports Traction Topcoat',
      'FIBA & BWF Compliance',
      'Custom Game Line Marking'
    ],
    specifications: {
      'Service Type': 'Seamless PU Court Installation',
      'System Thickness': '7.0mm - 12.0mm Elastic System'
    },
    swatches: [
      { name: 'Olympic Blue', hex: '#1976D2' }
    ]
  },

  'epdm-playground-fitting': {
    id: 'epdm-playground-fitting',
    title: 'EPDM Outdoor Safety Rubber Fitting for Playgrounds',
    category: 'gym-sports-fitting',
    categoryName: 'Gym & Sports Execution',
    subtitle: 'Pour-In-Place Soft Rubber Safety Surfaces for Parks & Schools',
    description: 'Bright, colorful, shock-absorbing EPDM rubber safety flooring custom poured for children playground parks, swimming pool decks, and school courtyards.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Children Playgrounds', 'School Courtyards', 'Pool Decks'],
    features: [
      'Critical Fall Height Cushioning Protection',
      'UV-Stabilized Outdoor Granules',
      'Rapid Water Draining Design',
      'Custom Graphic Inlays'
    ],
    specifications: {
      'Service Type': 'Pour-In-Place EPDM Rubber Fitting',
      'Thickness': '15mm - 30mm Dual Layer'
    },
    swatches: [
      { name: 'Vibrant Green', hex: '#4CAF50' }
    ]
  },

  'artificial-grass-fitting': {
    id: 'artificial-grass-fitting',
    title: 'Artificial Synthetic Lawn & Terrace Turf Fitting',
    category: 'gym-sports-fitting',
    categoryName: 'Gym & Sports Execution',
    subtitle: 'Lush Green All-Season Synthetic Grass for Lawns & Balconies',
    description: 'Permanently green synthetic turf laying for residential lawns, rooftop gardens, balcony patios, and sports grounds without watering or maintenance.',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Villa Lawns', 'Roof Gardens & Balconies', 'Cafes'],
    features: [
      'UV Anti-Fading 8-Year Warranty',
      'Realistic 4-Tone Natural Spring Green Fibers',
      'Rapid Drain Latex Backing',
      'Child & Pet Friendly'
    ],
    specifications: {
      'Service Type': 'Turf Laying & Seam Gluing',
      'Pile Heights': '25mm, 35mm, 45mm Premium'
    },
    swatches: [
      { name: 'Spring Field Green', hex: '#2E7D32' }
    ]
  },

  // --- MEDICAL SOLUTIONS ---
  'hospital-vinyl-fitting': {
    id: 'hospital-vinyl-fitting',
    title: 'Seamless Antibacterial Vinyl Sheet Fitting for Hospitals',
    category: 'medical-institutional-fitting',
    categoryName: 'Medical Execution',
    subtitle: 'Hot-Rod Thermal Seam Welding for OT Rooms & ICUs',
    description: 'Sterile homogeneous vinyl sheet laying with hot-wire thermal seam welding and wall coved skirting integration. Meets international health infection control standards.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Operating Theaters (OT)', 'ICU & Recovery Rooms', 'Clinics & Pharma Labs'],
    features: [
      'Seamless Thermal Hot-Rod Joint Welding',
      'Coved Skirting Integration to Eliminate Dirt Corners',
      'Betadine & Chemical Iodine Stain Resistance',
      'PUR Surface Anti-Bacterial Coating'
    ],
    specifications: {
      'Roll Width': '2.0m x 20m Homogeneous Sheet',
      'Standards': 'ISO 22196 Anti-Bacterial Certified'
    },
    swatches: [
      { name: 'Clinical Soft Green', hex: '#A5D6A7' },
      { name: 'Sky Blue Medical', hex: '#90CAF9' }
    ]
  },

  'anti-static-esd-fitting': {
    id: 'anti-static-esd-fitting',
    title: 'Anti-Static ESD Floor Sheet Fitting for Tech Labs',
    category: 'medical-institutional-fitting',
    categoryName: 'Medical Execution',
    subtitle: 'Conductive Vinyl Sheet Laying with Copper Grid Grounding',
    description: 'Static dissipative and conductive vinyl sheet installation for cleanrooms, electronics manufacturing, and computer labs across Pakistan.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Cleanrooms', 'Electronics Mfg', 'Computer Labs'],
    features: [
      'Electrical Resistance 10^4 - 10^9 Ohms',
      'Copper Grid Mesh Grounding Underlayment',
      'ISO Class 1 Cleanroom Standard'
    ],
    specifications: {
      'Service Type': 'Conductive Vinyl Sheet Laying',
      'Thickness': '2.0mm Homogeneous Monolayer'
    },
    swatches: [
      { name: 'Cleanroom Mint Blue', hex: '#80CBC4' }
    ]
  },

  'kids-eva-fitting': {
    id: 'kids-eva-fitting',
    title: 'Soft EVA Foam Safety Tile Fitting for Daycares',
    category: 'medical-institutional-fitting',
    categoryName: 'Medical Execution',
    subtitle: 'Cushioned Educational Foam Tiles for Schools',
    description: 'Soft cushioned EVA foam puzzle tile fitting for nursery classrooms, play areas, and kindergarten schools.',
    image: 'https://images.unsplash.com/photo-1566454825481-4e48f80aa4d7?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1566454825481-4e48f80aa4d7?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Kindergartens', 'Daycares', 'Play Schools'],
    features: [
      'Non-Toxic BPA & Phthalate Free EVA Foam',
      'Soft Cushion Fall Protection',
      'Waterproof Wipe Clean'
    ],
    specifications: {
      'Tile Size': '60cm x 60cm x 1.2cm / 2.0cm'
    },
    swatches: [
      { name: 'Pastel Rainbow Mix', hex: '#FFB74D' }
    ]
  }
};

export const PRODUCT_CATEGORIES = FITTING_CATEGORIES;
export const PRODUCTS_DATA = SOLUTIONS_DATA;

export const SERVICES_DATA = [
  {
    id: 'architectural-design',
    title: '3D Architectural & Interior Planning',
    subtitle: 'Comprehensive 3D Visualizations, Floor Layouts & Blueprints',
    description: 'Our experienced architects and interior visualizers transform empty floor plans into realistic 3D walk-throughs and detailed structural layouts before execution starts.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    features: ['Photorealistic 3D Renders', 'Electrical & Plumbing Layouts', 'Material Selection Guidance', 'Cost Optimization']
  },
  {
    id: 'kitchen-design',
    title: 'Custom Modular Kitchen Design & Fitting',
    subtitle: 'Ergonomic, Waterproof Kitchen Cabinets & Quartz Countertops',
    description: 'We craft high-gloss UV acrylic, tactful tactile wood laminate, and stainless modular kitchens built with Blum soft-close hardware and anti-termite HDF boards.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200',
    features: ['High-Gloss Acrylic & Tactile Laminates', 'Blum Soft-Close German Hardware', 'Anti-Termite Waterproof Cabinet Carcass', 'Custom Quartz & Granite Countertops']
  },
  {
    id: 'custom-furniture',
    title: 'Bespoke Custom Furniture Crafting',
    subtitle: 'Handcrafted Executive Desks, Sofas & Custom Wardrobes',
    description: 'Tailored luxury furniture built specifically for your home or corporate workplace. From plush velvet headboards to solid oak conference tables.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
    features: ['High Density Molded Foam Cushions', 'Solid Oak & Teak Frame Structures', 'Stain-Resistant Performance Fabrics', 'Custom Built-in Closets & Media Cabinets']
  },
  {
    id: 'turnkey-execution',
    title: 'Turnkey Interior Construction & Site Fitting',
    subtitle: 'End-to-End Project Execution with Professional Site Supervision',
    description: 'Sit back while our master installers, carpenters, and civil teams manage your complete renovation project on time and within budget guaranteed.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1200',
    features: ['Dedicated Project Manager Supervision', 'On-Time Milestone Delivery Guarantee', 'Post-Installation Warranty & Maintenance', 'Clean Site Handover']
  }
];

export const PROJECTS_DATA = [
  {
    id: 'proj-1',
    title: 'Luxury Villa Turnkey Flooring & WPC Wall Fitting',
    category: 'House / Villa',
    location: 'DHA Phase 8, Karachi',
    scope: 'SPC Golden Oak Flooring (2,400 sq ft) + Fluted TV Media Wall',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    year: '2026'
  },
  {
    id: 'proj-2',
    title: 'Tech Office Fitting (3 Floors Fit-out)',
    category: 'Corporate Office',
    location: 'Gulberg 3, Lahore',
    scope: 'Commercial Acoustic Carpet Tiles + Raised Server Access Floor',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    year: '2025'
  },
  {
    id: 'proj-3',
    title: 'Crossfit Arena Heavy Duty Rubber Floor Laying',
    category: 'Commercial Gym',
    location: 'F-7 Markaz, Islamabad',
    scope: '20mm Vulcanized Rubber Gym Tiles + EPDM Outdoor Turf',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    year: '2025'
  },
  {
    id: 'proj-4',
    title: 'Fashion Boutique Showroom Epoxy & Wall Panel Fitting',
    category: 'Commercial Shop',
    location: 'Clifton, Karachi',
    scope: 'High Gloss Metallic 3D Epoxy Floor + WPC Slat Wall Panels',
    image: 'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&q=80&w=800',
    year: '2026'
  }
];

export const TESTIMONIALS_DATA = [
  {
    name: 'Tariq Mansoor',
    role: 'Homeowner, DHA Karachi',
    quote: 'Interior Design Studio team installed SPC flooring in our entire bungalow (3,200 sq ft) in just 3 days! The finish is flawless, waterproof, and their installation crew was extremely clean and professional.',
    rating: 5
  },
  {
    name: 'Sameer Alvi',
    role: 'Director, Medicare Hospital',
    quote: 'They executed seamless antibacterial vinyl floor fitting with hot rod thermal welding in 4 OT rooms. Excellent work quality and completed strictly on schedule.',
    rating: 5
  },
  {
    name: 'Ayesha Shah',
    role: 'Principal Architect, Lahore',
    quote: 'My preferred turnkey contractor in Pakistan for office carpet tiles, gym rubber floors, and fluted WPC wall slats. Highly recommended for site execution.',
    rating: 5
  }
];
