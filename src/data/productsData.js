// Solutions & Installation Services Data for Interior Design Studio Pakistan (interiordesignstudiopk.com)

export const FITTING_CATEGORIES = [
  {
    id: 'flooring',
    name: 'Flooring',
    tagline: 'Turnkey Supply & Installation of Premium Commercial & Residential Flooring',
    description: 'We supply and professionally install SPC, Hardwood, Vinyl, Epoxy, EPDM, ESD, Gym Rubber, Hospital Vinyl, and Carpet Tiles across Pakistan.',
    items: [
      { id: 'spc-flooring', name: 'SPC Flooring', badge: 'Popular Choice', target: 'Houses & Offices' },
      { id: 'wooden-flooring', name: 'Wooden Flooring', badge: 'Luxury Finish', target: 'Villas & Lounges' },
      { id: 'vinyl-flooring', name: 'Vinyl Flooring', badge: 'Water Resistant', target: 'Apartments' },
      { id: 'epoxy-flooring', name: 'Epoxy Flooring', badge: 'High Gloss', target: 'Showrooms & Plazas' },
      { id: 'epdm-flooring', name: 'EPDM Flooring', badge: 'Safety Rubber', target: 'Playgrounds & Parks' },
      { id: 'esd-flooring', name: 'ESD Flooring', badge: 'Anti-Static', target: 'Tech & Pharma Labs' },
      { id: 'kids-eva-flooring', name: 'Kids EVA Flooring', badge: 'Soft Foam', target: 'Schools & Daycares' },
      { id: 'raised-flooring', name: 'Raised Flooring', badge: 'IT Standard', target: 'Server Rooms & Banks' },
      { id: 'sports-flooring', name: 'Sports Flooring', badge: 'FIBA Standard', target: 'Indoor Arenas' },
      { id: 'gym-flooring', name: 'Gym Flooring', badge: 'Heavy Impact', target: 'Commercial Gyms' },
      { id: 'hospital-flooring', name: 'Hospital Flooring', badge: 'Antibacterial', target: 'OT Rooms & ICUs' },
      { id: 'pvc-coil-mats', name: 'PVC Coil Mats', badge: 'Dust Trap', target: 'Building Entrances' },
      { id: 'carpet-tiles', name: 'Carpet Tiles', badge: 'Acoustic Spec', target: 'Corporate Offices' },
      { id: 'artificial-grass', name: 'Artificial Grass', badge: 'All-Season Green', target: 'Lawns & Terraces' }
    ]
  },
  {
    id: 'window-blinds',
    name: 'Window Blinds',
    tagline: 'Custom Window Treatment, Motorized Blinds & Drapery Installation',
    description: 'Precision window measurement, cassette mounting, and remote motor automation for Roller, Vertical, Wooden, Zebra, and Custom Printed Blinds.',
    items: [
      { id: 'roller-blinds', name: 'Roller Blinds', badge: 'Thermal Blackout', target: 'Bedrooms & Offices' },
      { id: 'vertical-blinds', name: 'Vertical Blinds', badge: 'Light Control', target: 'Commercial Windows' },
      { id: 'wooden-blinds', name: 'Wooden Blinds', badge: 'Natural Wood', target: 'Executive Suites' },
      { id: 'bamboo-chick-blinds', name: 'Bamboo Chick Blinds', badge: 'Eco Friendly', target: 'Patios & Penthouses' },
      { id: 'zebra-blinds', name: 'Zebra Blinds', badge: 'Dual Shade', target: 'Living Rooms' },
      { id: 'verman-blinds', name: 'Verman Blinds', badge: 'Shangri-La Sheer', target: 'Luxury Lounges' },
      { id: 'customise-printed-design-blind', name: 'Customise Printed Design Blind', badge: 'Custom Art', target: 'Kids & Branding' },
      { id: 'curtains', name: 'Curtains', badge: 'Luxury Drapes', target: 'Master Bedrooms' }
    ]
  },
  {
    id: 'wall-covering',
    name: 'Wall Covering',
    tagline: '3D Wallpapers, Fluted Wood Panels & Decorative Wall Mouldings',
    description: 'Transform interior walls with imported Korean 3D wallpapers, WPC vertical fluted slats, damp-proof PVC panels, canvas wall art, and plaster mouldings.',
    items: [
      { id: 'wallpaper-all-generation', name: 'Wallpaper All Generation', badge: '3D Texture', target: 'Bedrooms & Feature Walls' },
      { id: 'customise-design-canvas', name: 'Customise Design Canvas', badge: 'Bespoke Wall Art', target: 'Drawing Rooms' },
      { id: 'pvc-panel', name: 'PVC Panel', badge: 'Damp Proof', target: 'Shops & Basements' },
      { id: 'fluted-panels', name: 'Fluted Panels', badge: 'Media Wall Trend', target: 'TV Lounges' },
      { id: 'wall-texture', name: 'Wall Texture', badge: 'Tactile Plaster', target: 'Living Spaces' },
      { id: 'wall-moulding', name: 'Wall Moulding', badge: 'Classic European', target: 'Dining & Corridors' }
    ]
  },
  {
    id: 'false-ceiling',
    name: 'False Ceiling',
    tagline: 'Concealed LED Gypsum, PVC & Acoustic Ceiling Execution',
    description: 'Designer false ceiling installation with integrated warm cove lighting, gypsum board framing, and acoustic sound dampening tiles.',
    items: [
      { id: 'false-ceiling', name: 'False Ceiling', badge: 'Cove Lighting', target: 'Lounges & Bedrooms' }
    ]
  },
  {
    id: 'fiber-shades',
    name: 'Fiber Shades',
    tagline: 'Tensile Fiber Glass & Polycarbonate Car Parking Canopies',
    description: 'Weatherproof fiber glass car parking canopies, outdoor patio shades, and tensile fabric structures for houses and commercial plazas.',
    items: [
      { id: 'fiber-shades', name: 'Fiber Shades', badge: 'Weather Proof', target: 'Car Parking & Patios' }
    ]
  }
];

export const SOLUTIONS_DATA = {
  // --- FLOORING ---
  'spc-flooring': {
    id: 'spc-flooring',
    title: 'SPC Waterproof Wood Flooring Supply & Fitting',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: '100% Water & Termite Proof Rigid Core Wood Plank Execution',
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

  'wooden-flooring': {
    id: 'wooden-flooring',
    title: 'Engineered Hardwood & Parquet Wood Flooring Fitting',
    category: 'flooring',
    categoryName: 'Flooring',
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

  'vinyl-flooring': {
    id: 'vinyl-flooring',
    title: 'PVC Vinyl Flooring Installation for Apartments & Offices',
    category: 'flooring',
    categoryName: 'Flooring',
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

  'epoxy-flooring': {
    id: 'epoxy-flooring',
    title: 'High-Gloss 3D Metallic Epoxy Flooring Coating',
    category: 'flooring',
    categoryName: 'Flooring',
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

  'epdm-flooring': {
    id: 'epdm-flooring',
    title: 'EPDM Outdoor Safety Rubber Flooring for Playgrounds',
    category: 'flooring',
    categoryName: 'Flooring',
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

  'esd-flooring': {
    id: 'esd-flooring',
    title: 'Anti-Static ESD Conductive Vinyl Flooring Fitting',
    category: 'flooring',
    categoryName: 'Flooring',
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

  'kids-eva-flooring': {
    id: 'kids-eva-flooring',
    title: 'Soft EVA Foam Safety Flooring Tiles for Daycares & Schools',
    category: 'flooring',
    categoryName: 'Flooring',
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
  },

  'raised-flooring': {
    id: 'raised-flooring',
    title: 'Raised Access Server Room Flooring Installation',
    category: 'flooring',
    categoryName: 'Flooring',
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

  'sports-flooring': {
    id: 'sports-flooring',
    title: 'Polyurethane Sports Arena Court Flooring Installation',
    category: 'flooring',
    categoryName: 'Flooring',
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

  'gym-flooring': {
    id: 'gym-flooring',
    title: 'Gym Shock-Absorbing Rubber Tile Flooring Fitting',
    category: 'flooring',
    categoryName: 'Flooring',
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

  'hospital-flooring': {
    id: 'hospital-flooring',
    title: 'Seamless Antibacterial Vinyl Sheet Hospital Flooring',
    category: 'flooring',
    categoryName: 'Flooring',
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

  'pvc-coil-mats': {
    id: 'pvc-coil-mats',
    title: 'Heavy Duty PVC Coil Floor Mats Installation',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: 'High Footfall Dust Trap & Moisture Retaining Floor Mats',
    description: 'Spaghetti PVC coil mats installed at building entrances, commercial plazas, and lift foyers to trap dirt, dust, and rainwater.',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Building Entrances', 'Lift Foyers', 'Commercial Malls'],
    features: ['Vinyl Spaghetti Coil Weave', 'Non-Slip Rubber Backing', 'Easy Hose Wash Clean'],
    specifications: { 'Service Type': 'Custom Size Cut & Edging', 'Thickness': '12mm / 16mm Heavy' }
  },

  'carpet-tiles': {
    id: 'carpet-tiles',
    title: 'Commercial Acoustic Carpet Tile Installation',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: 'Sound-Dampening Carpet Squares for Corporate Offices & Banks',
    description: 'Fast, clean commercial carpet tile installation for corporate offices, call centers, and bank branches.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Corporate Offices', 'Call Centers', 'Banks'],
    features: ['Heavy PVC Bitumen Backing', 'High Sound Dampening', 'Stain-Shield Treated Nylon'],
    specifications: { 'Service Type': 'Modular Tile Laying', 'Tile Size': '50cm x 50cm' }
  },

  'artificial-grass': {
    id: 'artificial-grass',
    title: 'Artificial Synthetic Lawn & Roof Turf Fitting',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: 'All-Season Green Lawn Turf for Balconies & Terraces',
    description: 'Permanently green synthetic turf laying for residential lawns, rooftop gardens, balcony patios, and sports grounds.',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Villa Lawns', 'Roof Patios', 'Balconies'],
    features: ['UV Anti-Fading 8-Year Warranty', 'Realistic 4-Tone Fibers', 'Rapid Drain Latex Backing'],
    specifications: { 'Service Type': 'Turf Laying & Seam Gluing', 'Pile Heights': '25mm - 45mm' }
  },

  // --- WINDOW BLINDS ---
  'roller-blinds': {
    id: 'roller-blinds',
    title: 'Roller Window Blinds Installation (Blackout & Sunscreen)',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Sleek Thermal Blackout Window Shades with Motor Automation',
    description: 'Custom window measurement, mounting cassette fabrication, and motor installation for Roller blackout window shades.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Bedrooms', 'Executive Offices', 'Conference Rooms'],
    features: ['100% Thermal Blackout', 'Motor Remote Control Option', 'Dust Repellent Coating'],
    specifications: { 'Service Type': 'Custom Window Fitting', 'Mechanism': 'Manual / Remote Motor' }
  },

  'vertical-blinds': {
    id: 'vertical-blinds',
    title: 'Vertical Fabric Window Blinds Fitting',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Flexible Light Direction Control for Commercial Windows',
    description: 'Adjustable vertical slat window blinds ideal for wide commercial office windows and sliding glass doors.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Commercial Windows', 'Glass Partitions', 'Offices'],
    features: ['180-Degree Slat Rotation', 'Flame Retardant Fabric', 'Smooth Track System'],
    specifications: { 'Slat Width': '89mm / 127mm Slats' }
  },

  'wooden-blinds': {
    id: 'wooden-blinds',
    title: 'Real Wood Venetian Window Blinds Fitting',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Authentic Natural Basswood Venetian Slats',
    description: 'Premium real wood Venetian window blinds crafted from kiln-dried basswood slats for executive lounges.',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c517a?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1540518614846-7ede433c517a?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Executive Suites', 'Villas', 'Study Rooms'],
    features: ['Real Hardwood Slats', 'Decorative Fabric Ladder Tape', 'Warp Resistant Finish'],
    specifications: { 'Slat Size': '35mm / 50mm Wooden Slats' }
  },

  'bamboo-chick-blinds': {
    id: 'bamboo-chick-blinds',
    title: 'Natural Bamboo Chick Outdoor Blinds Fitting',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Eco-Friendly Weatherproof Outdoor Bamboo Shades',
    description: 'Handwoven natural bamboo chick blinds for verandas, patios, rooftop cafes, and outdoor balconies.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Balconies', 'Outdoor Patios', 'Rooftop Cafes'],
    features: ['100% Eco Bamboo Woven', 'Outdoor Rain & Sun Protection', 'Pulley Cord System'],
    specifications: { 'Service Type': 'Outdoor Custom Mounting' }
  },

  'zebra-blinds': {
    id: 'zebra-blinds',
    title: 'Zebra Dual-Layer Day & Night Blinds Fitting',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Dual Sheer & Opaque Striped Light Filtering Shades',
    description: 'Modern Zebra dual-layer blinds allowing seamless transition between sheer light view and private room blackout.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Living Rooms', 'Master Bedrooms', 'Modern Offices'],
    features: ['Dual Layer Striped Fabric', 'Precision Light Dimming', 'Cassette Enclosure'],
    specifications: { 'Mechanism': 'Chain / Motorized' }
  },

  'verman-blinds': {
    id: 'verman-blinds',
    title: 'Verman Shangri-La Sheer Luxury Blinds Fitting',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Soft Fabric Vane Suspended Between Two Sheer Facings',
    description: 'Ultra-luxurious Verman Shangri-La blinds combining soft curtain sheer elegance with Venetian blind light control.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Formal Lounges', 'Luxury Villas', 'Boutique Suites'],
    features: ['Floating Vane Technology', 'UV Filter Sheer Mesh', 'Smooth Continuous Cord'],
    specifications: { 'Vane Width': '55mm / 75mm Luxury Sheer' }
  },

  'customise-printed-design-blind': {
    id: 'customise-printed-design-blind',
    title: 'Customise Printed Design Window Blinds',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'High Definition Custom Photo & Brand Printed Blinds',
    description: 'Custom HD UV print window blinds with company logos, scenery artwork, or kids bedroom themes.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Branded Offices', 'Kids Rooms', 'Boutiques'],
    features: ['HD Non-Fading UV Print', '100% Custom Image Printing', 'Blackout Canvas Base'],
    specifications: { 'Print Quality': '1440 DPI Latex Print' }
  },

  'curtains': {
    id: 'curtains',
    title: 'Custom Velvet & Linen Drapery Curtains Fitting',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Bespoke Pleated Curtains with Concealed Motor Tracks',
    description: 'Luxury floor-to-ceiling curtain drapery crafting and motor track fitting in plush velvet, jacquard, and textured linen.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Master Suites', 'Drawing Rooms', 'Villas'],
    features: ['Custom Pleat Stitching', 'Motorized Track Automation', 'Thermal Blackout Lining'],
    specifications: { 'Track Type': 'Silent Motorized Curtain Track' }
  },

  // --- WALL COVERING ---
  'wallpaper-all-generation': {
    id: 'wallpaper-all-generation',
    title: 'Wallpaper All Generation (Imported 3D Rolls)',
    category: 'wall-covering',
    categoryName: 'Wall Covering',
    subtitle: 'Heavy Embossed Korean, European & Italian Wallpaper Rolls',
    description: 'Professional wallpaper hanging using imported jumbo rolls. Extra wide rolls reduce visible seams by 50%.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Master Bedrooms', 'Feature Walls', 'Hotel Rooms'],
    features: ['Extra Wide 1.06m Rolls', 'Deep 3D Embossed Texture', 'Scrubbable Moisture Layer'],
    specifications: { 'Origin': 'South Korea & Italy' }
  },

  'customise-design-canvas': {
    id: 'customise-design-canvas',
    title: 'Customise Design Canvas Wall Mural Fitting',
    category: 'wall-covering',
    categoryName: 'Wall Covering',
    subtitle: 'Bespoke Seamless Wall Murals & HD Canvas Prints',
    description: 'Custom wall-sized HD canvas mural printing and seamless installation for feature media walls.',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Drawing Rooms', 'Restaurant Accent Walls', 'Villas'],
    features: ['100% Seamless Wall Mural', 'Textured Heavy Canvas Base', 'Eco Latex Printing'],
    specifications: { 'Material': 'Seamless Heavy Duty Canvas' }
  },

  'pvc-panel': {
    id: 'pvc-panel',
    title: 'Damp-Proof PVC Wall Panels Cladding',
    category: 'wall-covering',
    categoryName: 'Wall Covering',
    subtitle: '100% Waterproof Wall Renovation Panels',
    description: 'Eliminate wall dampness and peeling paint permanently with waterproof PVC wall cladding panels.',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Shops & Boutiques', 'Basement Walls', 'Commercial Plazas'],
    features: ['100% Waterproof Seepage Protection', 'Termite Proof & Flame Retardant', 'Fast 1-Day Fitting'],
    specifications: { 'Panel Width': '10 inches / 12 inches' }
  },

  'fluted-panels': {
    id: 'fluted-panels',
    title: 'WPC Fluted Slat Media Wall Panels Fitting',
    category: 'wall-covering',
    categoryName: 'Wall Covering',
    subtitle: 'Architectural 3D Vertical Slat Wood Texture Panels',
    description: 'Transform boring flat lounge walls into stunning modern architectural features with WPC fluted slats.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['TV Media Walls', 'Bed Accent Walls', 'Office Backdrops'],
    features: ['3D Vertical Wood Slats', 'Concealed LED Profile Channels', 'Termite & Water Proof'],
    specifications: { 'Flute Depth': '12mm / 15mm Slats' }
  },

  'wall-texture': {
    id: 'wall-texture',
    title: 'Architectural Tactile Wall Texture Finishes',
    category: 'wall-covering',
    categoryName: 'Wall Covering',
    subtitle: 'Concrete Metallic Plaster & Micro-Cement Textures',
    description: 'Hand-troweled architectural micro-cement and stucco metallic wall texture application.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Feature Lounges', 'Modern Cafes', 'Villas'],
    features: ['Micro-Cement Industrial Finish', 'Metallic Wax Sealer', 'Scuff Resistant Surface'],
    specifications: { 'Application': 'Hand Trowel Stucco Layer' }
  },

  'wall-moulding': {
    id: 'wall-moulding',
    title: 'Classic European Polyurethane Wall Moulding',
    category: 'wall-covering',
    categoryName: 'Wall Covering',
    subtitle: 'Precision Frame Bead & Wainscoting Moulding Fitting',
    description: 'High-density polyurethane wall wainscoting and frame moulding assembly for luxury classic interiors.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Dining Rooms', 'Hallways', 'Drawing Rooms'],
    features: ['High Density Waterproof PU', 'Precision Mitre Corner Cutting', 'Paintable Surface'],
    specifications: { 'Material': 'High Density Polyurethane Moulding' }
  },

  // --- FALSE CEILING ---
  'false-ceiling': {
    id: 'false-ceiling',
    title: 'Concealed LED Gypsum False Ceiling Execution',
    category: 'false-ceiling',
    categoryName: 'False Ceiling',
    subtitle: 'Designer Gypsum Ceiling Framing with Warm Cove Lighting',
    description: 'Complete ceiling renovation using moisture-resistant Elephant Gypsum boards, metal studs, and LED cove lighting profiles.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Living Rooms', 'Executive Offices', 'Bedrooms'],
    features: ['GI Galvanized Metal Channel Framing', 'Moisture Resistant Gypsum Boards', 'Concealed LED Strip Warm Lighting'],
    specifications: { 'Service Type': 'Gypsum Ceiling & Painting', 'Board Brand': 'Elephant / Knauf Gypsum' }
  },

  // --- FIBER SHADES ---
  'fiber-shades': {
    id: 'fiber-shades',
    title: 'Tensile Fiber Glass & Polycarbonate Car Canopy Fitting',
    category: 'fiber-shades',
    categoryName: 'Fiber Shades',
    subtitle: 'Heavy-Duty Weatherproof Car Parking & Patio Canopies',
    description: 'Fabrication and installation of UV-resistant fiber glass car parking canopies and tensile fabric patio shades.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Car Parking Porches', 'Outdoor Balconies', 'Plazas'],
    features: ['UV Heat Insulation Fiber Sheets', 'Heavy MS Pipe Structural Framing', '10-Year Weatherproof Guarantee'],
    specifications: { 'Service Type': 'MS Pipe Framing & Fiber Sheet Fitting' }
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
    id: 'dha-phase-8-villa',
    title: 'Luxury Villa SPC Wood Flooring',
    category: 'Residential',
    location: 'DHA Phase 8, Karachi',
    scope: '3,200 sq ft SPC Click-Lock Flooring & WPC Wall Mouldings',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    year: '2026'
  },
  {
    id: 'medicare-hospital-ot',
    title: 'Operating Theater Vinyl Flooring',
    category: 'Hospitality & Healthcare',
    location: 'Medicare Hospital, Karachi',
    scope: 'Seamless Antibacterial Vinyl Sheet with Thermal Hot-Wire Welding',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    year: '2025'
  },
  {
    id: 'gulshan-corporate-office',
    title: 'Corporate Office Carpet Tiles',
    category: 'Commercial',
    location: 'Federal B Area, Karachi',
    scope: '4,500 sq ft Acoustic Carpet Tiles & Motorized Zebra Blinds',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    year: '2025'
  },
  {
    id: 'clifton-fitness-arena',
    title: 'Commercial Gym Rubber Flooring',
    category: 'Commercial',
    location: 'Clifton Block 5, Karachi',
    scope: '20mm Shock-Absorbing Rubber Tiles & Synthetic Turf Track',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
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
