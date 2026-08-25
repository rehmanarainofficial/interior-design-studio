// Solutions & Installation Services Data for Interior Design Studio Pakistan (interiordesignstudiopk.com)

export const FITTING_CATEGORIES = [
  {
    id: 'flooring',
    name: 'Flooring',
    tagline: 'Turnkey Supply & Installation of Premium Commercial & Residential Flooring',
    description: 'We supply and professionally install SPC, Hardwood, Vinyl, Epoxy, Gym Rubber, Wall to Wall Carpet, Center Piece Rugs, PVC Coil Mats, and Carpet Tiles across Pakistan.',
    items: [
      { id: 'spc-flooring', name: 'SPC Flooring', badge: 'Popular Choice', target: 'Houses & Offices' },
      { id: 'wooden-flooring', name: 'Wooden Flooring', badge: 'Luxury Finish', target: 'Villas & Lounges' },
      { id: 'vinyl-flooring', name: 'Vinyl Flooring', badge: 'Water Resistant', target: 'Apartments' },
      { id: 'epoxy-flooring', name: 'Epoxy Flooring', badge: 'High Gloss', target: 'Showrooms & Plazas' },
      { id: 'wall-to-wall-carpet', name: 'Wall to Wall Carpet', badge: 'Soft Acoustic', target: 'Hotels & Bedrooms' },
      { id: 'center-piece-rugs', name: 'Center Piece Rugs', badge: 'Luxury Accent', target: 'Drawing & TV Lounges' },
      { id: 'kids-eva-flooring', name: 'Kids EVA Flooring', badge: 'Soft Foam', target: 'Schools & Daycares' },
      { id: 'sports-flooring', name: 'Sports Flooring', badge: 'FIBA Standard', target: 'Indoor Arenas' },
      { id: 'gym-flooring', name: 'Gym Flooring', badge: 'Heavy Impact', target: 'Commercial Gyms' },
      { id: 'pvc-coil-mats', name: 'PVC Coil Mats', badge: 'Dust Trap', target: 'Building Entrances' },
      { id: 'carpet-tiles', name: 'Carpet Tiles', badge: 'Acoustic Spec', target: 'Corporate Offices' },
      { id: 'artificial-grass', name: 'Artificial Grass', badge: 'All-Season Green', target: 'Lawns & Terraces' }
    ]
  },
  {
    id: 'window-blinds',
    name: 'Window Blinds',
    tagline: 'Custom Window Treatment, Motorized Blinds & Drapery Installation',
    description: 'Precision window measurement, cassette mounting, and remote motor automation for Roller, Vertical, Wooden, Zebra, PVC Strip Curtains, and Custom Printed Blinds.',
    items: [
      { id: 'roller-blinds', name: 'Roller Blinds', badge: 'Thermal Blackout', target: 'Bedrooms & Offices' },
      { id: 'vertical-blinds', name: 'Vertical Blinds', badge: 'Light Control', target: 'Commercial Windows' },
      { id: 'wooden-blinds', name: 'Wooden Blinds', badge: 'Natural Wood', target: 'Executive Suites' },
      { id: 'bamboo-chick-blinds', name: 'Bamboo Chick Blinds', badge: 'Eco Friendly', target: 'Patios & Penthouses' },
      { id: 'zebra-blinds', name: 'Zebra Blinds', badge: 'Dual Shade', target: 'Living Rooms' },
      { id: 'pvc-strip-curtains', name: 'PVC Strip Curtains', badge: 'Thermal Barrier', target: 'Cold Storage & Warehouses' },
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
    id: 'furniture',
    name: 'Furniture',
    tagline: 'Custom Bespoke Commercial & Residential Furniture Manufacturing',
    description: 'Turnkey custom furniture design and craftmanship for corporate executive offices, boardrooms, luxury residential villas, and lounges.',
    items: [
      { id: 'commercial-furniture', name: 'Commercial Furniture', badge: 'Executive Office', target: 'Corporate Offices & Boardrooms' },
      { id: 'residential-furniture', name: 'Residential Furniture', badge: 'Luxury Villa', target: 'Master Bedrooms & Living Lounges' }
    ]
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    tagline: 'Luxury Modular Kitchen Cabinetry & Countertop Fitting',
    description: 'High-gloss acrylic, UV coated, and solid wood modular kitchen design and turnkey site installation.',
    isSingle: true,
    singleProductId: 'kitchen',
    items: [
      { id: 'kitchen', name: 'Modular Kitchen', badge: 'Luxury Cabinetry', target: 'Villas & Apartments' }
    ]
  },
  {
    id: 'false-ceiling',
    name: 'False Ceiling',
    tagline: 'Concealed LED Gypsum, PVC & Acoustic Ceiling Execution',
    description: 'Designer false ceiling installation with integrated warm cove lighting, gypsum board framing, and acoustic sound dampening tiles.',
    isSingle: true,
    singleProductId: 'false-ceiling',
    items: [
      { id: 'false-ceiling', name: 'False Ceiling', badge: 'Cove Lighting', target: 'Lounges & Bedrooms' }
    ]
  },
  {
    id: 'fiber-shades',
    name: 'Fiber Shades',
    tagline: 'Tensile Fiber Glass & Polycarbonate Car Parking Canopies',
    description: 'Weatherproof fiber glass car parking canopies, outdoor patio shades, and tensile fabric structures for houses and commercial plazas.',
    isSingle: true,
    singleProductId: 'fiber-shades',
    items: [
      { id: 'fiber-shades', name: 'Fiber Shades', badge: 'Weather Proof', target: 'Car Parking & Patios' }
    ]
  }
];

export const SOLUTIONS_DATA = {
  // --- FLOORING (USER SPECIFIED EXACT IMAGE URLS & GALLERIES) ---
  'spc-flooring': {
    id: 'spc-flooring',
    title: 'SPC Waterproof Wood Flooring Supply & Fitting',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: '100% Water & Termite Proof Rigid Core Wood Plank Execution',
    description: 'We supply and professionally fit SPC (Stone Plastic Composite) rigid core wood flooring for bedrooms, drawing rooms, TV lounges, and kitchens.',
    image: '/images/products/img_3.webp',
    gallery: [
      '/images/products/img_3.webp',
      '/images/products/img_1.webp',
      '/images/products/img_2.webp',
      '/images/products/img_4.webp'
    ],
    targetSpaces: ['Bedrooms & TV Lounges', 'Luxury Villas', 'Kitchens & Dining Areas'],
    features: ['Complete Supply + Expert Site Installation Included', '100% Water & Termite Proof Guarantee', '20-Year Material & Workmanship Warranty'],
    specifications: { 'Service Type': 'Supply & On-Site Installation', 'Execution Speed': 'Approx 500 sq ft per day' }
  },

  'wooden-flooring': {
    id: 'wooden-flooring',
    title: 'Engineered Hardwood & Parquet Wood Flooring Fitting',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: 'Genuine European Hardwood & Herringbone Parquet Execution',
    description: 'Introduce natural wood luxury to executive suites and drawing rooms. We install high-density engineered oak hardwood with wax-sealed joints.',
    image: '/images/products/img_5.webp',
    gallery: [
      '/images/products/img_5.webp',
      '/images/products/img_6.webp',
      '/images/products/img_7.webp',
      '/images/products/img_8.webp'
    ],
    targetSpaces: ['Luxury Master Suites', 'Villa Drawing Rooms', 'Executive Offices'],
    features: ['Authentic Real Wood Grain Texture', 'Herringbone & Straight Plank Assembly', '25-Year Manufacturer Warranty'],
    specifications: { 'Service Type': 'Turnkey Hardwood Fitting', 'Plank Grade': '12mm AC4/AC5 Heavy Rating' }
  },

  'vinyl-flooring': {
    id: 'vinyl-flooring',
    title: 'PVC Vinyl Flooring Installation for Apartments & Offices',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: 'Smooth, Water-Resistant Vinyl Planks & Sheet Laying',
    description: 'Professional PVC vinyl flooring installation for residential apartments and rental properties.',
    image: '/images/products/vinyl-flooring_new_1.webp',
    gallery: [
      '/images/products/vinyl-flooring_new_1.webp',
      '/images/products/vinyl-flooring_new_2.webp',
      '/images/products/vinyl-flooring_new_3.webp'
    ],
    targetSpaces: ['Apartments & Rentals', 'Commercial Offices', 'Shops'],
    features: ['Moisture & Water Resistant Surface', 'Quick Glue-Down Site Execution'],
    specifications: { 'Service Type': 'Supply & Site Glue-Down Fitting' }
  },

  'epoxy-flooring': {
    id: 'epoxy-flooring',
    title: 'High-Gloss 3D Metallic Epoxy Flooring Coating',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: 'Seamless Mirror-Gloss Industrial & Commercial Floor Coating',
    description: 'Liquid-applied self-leveling 3D metallic epoxy flooring pour for car showrooms and luxury boutiques.',
    image: '/images/products/img_12.webp',
    gallery: [
      '/images/products/img_12.webp',
      '/images/products/img_13.webp',
      '/images/products/img_14.webp'
    ],
    targetSpaces: ['Auto Showrooms', 'Luxury Boutiques', 'Commercial Halls'],
    features: ['100% Jointless Seamless Mirror Finish', 'Chemical & Oil Spill Resistant Coating'],
    specifications: { 'Service Type': 'Site Epoxy Pour & Curing' }
  },

  'wall-to-wall-carpet': {
    id: 'wall-to-wall-carpet',
    title: 'Wall to Wall Carpet Laying & Underlayment Fitting',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: 'Plush Sound-Dampening Carpet Fitting for Bedrooms & Hotels',
    description: 'Turnkey wall-to-wall plush carpet installation with high-density foam underlayment pad.',
    image: '/images/products/img_15.webp',
    gallery: [
      '/images/products/img_15.webp',
      '/images/products/img_16.webp',
      '/images/products/img_17.webp'
    ],
    targetSpaces: ['Master Bedrooms', 'Hotel Presidential Suites', 'Executive Lounges'],
    features: ['Ultra Soft Underfoot Cushioning', 'High Sound Dampening Noise Insulation'],
    specifications: { 'Service Type': 'Supply & Wall-to-Wall Laying' }
  },

  'center-piece-rugs': {
    id: 'center-piece-rugs',
    title: 'Luxury Center Piece & Area Rugs Collection',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: 'Hand-Crafted Designer Center Pieces for Drawing & TV Lounges',
    description: 'Exquisite hand-tufted designer center piece rugs in modern geometric and traditional textures.',
    image: '/images/products/img_19.webp',
    gallery: [
      '/images/products/img_19.webp',
      '/images/products/img_20.webp',
      '/images/products/img_21.webp'
    ],
    targetSpaces: ['Drawing Rooms', 'TV Lounges', 'Executive Boardrooms'],
    features: ['Bespoke Hand-Tufted Wool & Silk Yarns', 'Non-Slip Rubberized Backing Finish'],
    specifications: { 'Standard Sizes': '5x8 ft, 6x9 ft, 8x11 ft, 10x13 ft' }
  },

  'kids-eva-flooring': {
    id: 'kids-eva-flooring',
    title: 'Soft EVA Foam Safety Flooring Tiles for Daycares & Schools',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: 'Cushioned Educational Foam Tiles for Schools',
    description: 'Soft cushioned EVA foam puzzle tile fitting for nursery classrooms and play areas.',
    image: '/images/products/kids-eva-flooring_new_1.webp',
    gallery: [
      '/images/products/kids-eva-flooring_new_1.webp',
      '/images/products/kids-eva-flooring_new_2.webp'
    ],
    targetSpaces: ['Kindergartens', 'Daycares', 'Play Schools'],
    features: ['Non-Toxic BPA & Phthalate Free EVA Foam', 'Soft Cushion Fall Protection'],
    specifications: { 'Tile Size': '60cm x 60cm x 1.2cm / 2.0cm' }
  },

  'sports-flooring': {
    id: 'sports-flooring',
    title: 'Polyurethane Sports Arena Court Flooring Installation',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: 'FIBA Compliant Basketball & Badminton Court Surfaces',
    description: 'Elastic polyurethane sports flooring system pour for basketball courts and badminton arenas.',
    image: '/images/products/img_25.webp',
    gallery: [
      '/images/products/img_25.webp',
      '/images/products/img_26.webp'
    ],
    targetSpaces: ['Indoor Sports Courts', 'Basketball & Badminton Arenas'],
    features: ['Superior Shock Absorption (> 45%)', 'FIBA & BWF Compliance'],
    specifications: { 'Service Type': 'Seamless PU Court Installation' }
  },

  'gym-flooring': {
    id: 'gym-flooring',
    title: 'Gym Shock-Absorbing Rubber Tile Flooring Fitting',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: 'Heavy Duty Weight Drop Protection for Commercial Gyms & Crossfit',
    description: 'High-density vulcanized rubber tiles for heavy free-weight zones and personal training studios.',
    image: '/images/products/img_27.webp',
    gallery: [
      '/images/products/img_27.webp',
      '/images/products/img_28.webp',
      '/images/products/img_29.webp'
    ],
    targetSpaces: ['Commercial Gyms', 'Crossfit Studios', 'Home Fitness Rooms'],
    features: ['High Density Rubber Granules (1000 kg/m³)', 'Vibration Isolation'],
    specifications: { 'Thickness Options': '10mm, 15mm, 20mm, 25mm' }
  },

  'pvc-coil-mats': {
    id: 'pvc-coil-mats',
    title: 'Heavy-Duty PVC Spaghetti Coil Entrance Matting',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: 'Dirt & Moisture Trapping Entrance Mats for Buildings',
    description: 'Heavy duty PVC vinyl coil cushion matting for corporate plaza entrances and hotel foyers.',
    image: '/images/products/rem_1.webp',
    gallery: [
      '/images/products/rem_1.webp',
      '/images/products/img_30.webp',
      '/images/products/rem_2.webp'
    ],
    targetSpaces: ['Plaza Entrances', 'Hotel Foyers', 'Commercial Thresholds'],
    features: ['High Volume Dirt & Mud Trapping Webbing', 'Non-Slip Backing'],
    specifications: { 'Thickness': '12mm / 15mm Extra Heavy Duty' }
  },

  'carpet-tiles': {
    id: 'carpet-tiles',
    title: 'Acoustic Commercial Carpet Tiles Installation for Offices',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: 'Modular Heavy-Duty Carpet Squares for Offices & Banks',
    description: 'High sound-dampening commercial carpet tile installation for corporate offices and banks.',
    image: '/images/products/carpet-tiles_new_1.webp',
    gallery: [
      '/images/products/carpet-tiles_new_1.webp',
      '/images/products/carpet-tiles_new_2.webp',
      '/images/products/carpet-tiles_new_3.webp'
    ],
    targetSpaces: ['Corporate Offices', 'Call Centers', 'Banks'],
    features: ['Noise Reduction Coefficient (NRC > 0.25)', 'Modular Replacement'],
    specifications: { 'Tile Dimensions': '50cm x 50cm Bitumen Backed' }
  },

  'artificial-grass': {
    id: 'artificial-grass',
    title: 'Synthetic Lawn & Rooftop Artificial Grass Fitting',
    category: 'flooring',
    categoryName: 'Flooring',
    subtitle: 'All-Season UV-Stabilized Synthetic Lawn Laying',
    description: 'Turnkey synthetic grass installation for residential lawns, balcony gardens, and rooftop terraces.',
    image: '/images/products/img_34.webp',
    gallery: [
      '/images/products/img_34.webp',
      '/images/products/rem_3.webp',
      '/images/products/img_35.webp'
    ],
    targetSpaces: ['Bungalow Lawns', 'Roof Patios', 'Balconies'],
    features: ['Natural 4-Tone Spring Green Yarn Color', '10-Year UV Anti-Fading'],
    specifications: { 'Pile Height': '30mm / 40mm High Density' }
  },

  // --- WINDOW BLINDS (LOCAL WEBP OPTIMIZED FROM USER SPECIFIED IMAGES) ---
  'roller-blinds': {
    id: 'roller-blinds',
    title: 'Motorized & Manual Thermal Blackout Roller Blinds',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Custom Thermal Blackout Roller Shades & Cassette Mounting',
    description: 'Precision window measurement, headrail mounting, and motor automation for Roller blackout blinds in bedrooms, conference rooms, and offices.',
    image: '/images/products/roller-blinds_1.webp',
    gallery: [
      '/images/products/roller-blinds_1.webp',
      '/images/products/roller-blinds_2.webp',
      '/images/products/roller-blinds_3.webp',
      '/images/products/roller-blinds_4.webp'
    ],
    targetSpaces: ['Master Bedrooms', 'Conference Rooms', 'Executive Offices'],
    features: ['100% Light Blocking Thermal Blackout Fabric', 'Remote Control Motorized & Tuya Smart Sync'],
    specifications: { 'Service Type': 'Window Measurement & Cassette Installation' }
  },

  'vertical-blinds': {
    id: 'vertical-blinds',
    title: 'Commercial Vertical Louver Blinds Installation',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Rotatable Fabric Slats for Large Commercial Windows',
    description: 'Ideal light management for floor-to-ceiling glass office facades and hospital ward windows with 180-degree rotation control.',
    image: '/images/products/vertical-blinds_1.webp',
    gallery: [
      '/images/products/vertical-blinds_1.webp',
      '/images/products/vertical-blinds_2.webp',
      '/images/products/vertical-blinds_3.webp',
      '/images/products/vertical-blinds_4.webp'
    ],
    targetSpaces: ['Glass Office Windows', 'Hospital Wards', 'Commercial Facades'],
    features: ['180-Degree Rotation Slat Control', 'Dust-Repellent Treated Polyester Louvers'],
    specifications: { 'Slat Width': '89mm / 127mm Commercial Standard' }
  },

  'wooden-blinds': {
    id: 'wooden-blinds',
    title: 'Real Basswood Slat Window Venetian Blinds',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Classic Natural Wood Venetians for Executive Offices',
    description: 'Genuine kiln-dried basswood horizontal slat Venetian blinds with woven cloth tape accents.',
    image: '/images/products/wooden-blinds_1.webp',
    gallery: [
      '/images/products/wooden-blinds_1.webp',
      '/images/products/wooden-blinds_2.webp',
      '/images/products/wooden-blinds_3.webp'
    ],
    targetSpaces: ['Executive Boardrooms', 'Villa Libraries', 'Formal Studies'],
    features: ['50mm Kiln-Dried Real Basswood Slats', 'Woven Fabric Tape Cord Accents'],
    specifications: { 'Slat Width': '50mm Premium Slats' }
  },

  'bamboo-chick-blinds': {
    id: 'bamboo-chick-blinds',
    title: 'Handcrafted Bamboo Chick & Cane Outdoor Shades',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Natural Heat-Shielding Bamboo Shades for Patios & Balconies',
    description: 'Eco-friendly natural bamboo chick roll-up blinds for veranda heat protection and rustic outdoor ambiance.',
    image: '/images/products/bamboo-chick-blinds_1.webp',
    gallery: [
      '/images/products/bamboo-chick-blinds_1.webp',
      '/images/products/bamboo-chick-blinds_2.webp',
      '/images/products/bamboo-chick-blinds_3.webp',
      '/images/products/bamboo-chick-blinds_4.webp'
    ],
    targetSpaces: ['Balconies', 'Verandas', 'Outdoor Patios', 'Gazebos'],
    features: ['Weather-Resistant Varnished Bamboo Slats', 'Natural Heat & Sun Insulation'],
    specifications: { 'Operation': 'Heavy Duty Pulley & Cord Roll Up' }
  },

  'zebra-blinds': {
    id: 'zebra-blinds',
    title: 'Dual Shade Day & Night Motorized Zebra Blinds',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Alternating Sheer & Solid Stripe Light Control',
    description: 'Popular dual-layer fabric zebra blinds offering seamless transition between sheer light diffusion and complete privacy.',
    image: '/images/products/zebra-blinds_1.webp',
    gallery: [
      '/images/products/zebra-blinds_1.webp',
      '/images/products/zebra-blinds_2.webp',
      '/images/products/zebra-blinds_3.webp',
      '/images/products/zebra-blinds_4.webp'
    ],
    targetSpaces: ['TV Lounges', 'Dining Rooms', 'Bedrooms'],
    features: ['Dual Layer Alternating Sheer & Opaque Stripes', 'Enclosed Aluminum Cassette Headrail'],
    specifications: { 'Cassette': 'Enclosed White / Anodized Aluminum Headrail' }
  },

  'pvc-strip-curtains': {
    id: 'pvc-strip-curtains',
    title: 'Heavy Duty Transparent PVC Strip Curtains Fitting',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Thermal Insulation & Dust Control Strip Doors',
    description: 'Heavy duty clear transparent PVC strip curtain door installation for cold storage rooms, warehouses, restaurants, and cleanroom doorways.',
    image: '/images/products/pvc-strip-curtains_1.webp',
    gallery: [
      '/images/products/pvc-strip-curtains_1.webp',
      '/images/products/pvc-strip-curtains_2.webp',
      '/images/products/pvc-strip-curtains_3.webp',
      '/images/products/pvc-strip-curtains_4.webp'
    ],
    targetSpaces: ['Cold Storage Rooms', 'Warehouse Entrances', 'Restaurant Kitchens', 'Pharma Cleanrooms'],
    features: ['100% Transparent Food-Grade PVC Material', 'Thermal Temperature & Dust Fly Protection', 'Stainless Steel Hook Track Mounting'],
    specifications: { 'Strip Thickness': '2.0mm / 3.0mm Ribbed & Flat Formats' }
  },

  'verman-blinds': {
    id: 'verman-blinds',
    title: 'Luxury Verman Shangri-La Sheer Window Shades',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Floating Fabric Vane Elegance for Drawing Rooms',
    description: 'Triple-cell fabric vanes suspended between double sheer layers for soft diffused ambient lighting in luxury formal lounges.',
    image: '/images/products/verman-blinds_1.webp',
    gallery: [
      '/images/products/verman-blinds_1.webp',
      '/images/products/verman-blinds_2.webp'
    ],
    targetSpaces: ['Drawing Rooms', 'Formal Lounges', 'Master Bedroom Suites'],
    features: ['Floating Fabric Vane Angle Adjustment', 'Soft UV Light Diffusion'],
    specifications: { 'Fabric': 'Imported Silk-Feel Sheer Textile' }
  },

  'customise-printed-design-blind': {
    id: 'customise-printed-design-blind',
    title: 'Custom High-Definition Printed Graphic Roller Blinds',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Bespoke Brand Logos, Art & Kids Theme Printed Shades',
    description: 'Custom HD UV graphic printing on blackout roller blinds for corporate office branding and kids bedroom themes.',
    image: '/images/products/customise-printed-design-blind_1.webp',
    gallery: [
      '/images/products/customise-printed-design-blind_1.webp',
      '/images/products/customise-printed-design-blind_2.webp',
      '/images/products/customise-printed-design-blind_3.webp',
      '/images/products/customise-printed-design-blind_4.webp'
    ],
    targetSpaces: ['Kids Bedrooms', 'Corporate Offices', 'Retail Store Branding'],
    features: ['Non-Fading Eco UV HD Graphic Printing', '100% Custom Image/Logo Support'],
    specifications: { 'Resolution': '1440 DPI High-Definition Print' }
  },

  'curtains': {
    id: 'curtains',
    title: 'Custom Tailored Heavy Velvet & Linen Drapery Curtains',
    category: 'window-blinds',
    categoryName: 'Window Blinds',
    subtitle: 'Automated Motorized Curtain Tracks & Tailored Drapes',
    description: 'Tailored heavy blackout velvet and sheer linen curtains installed with concealed motorized ceiling track channels.',
    image: '/images/products/curtains_1.webp',
    gallery: [
      '/images/products/curtains_1.webp',
      '/images/products/curtains_2.webp',
      '/images/products/curtains_3.webp',
      '/images/products/curtains_4.webp'
    ],
    targetSpaces: ['Master Bedrooms', 'Luxury Living Rooms', 'Private Theaters'],
    features: ['Concealed Electric Remote Track Systems', 'Heavy Double Lining Thermal Insulation'],
    specifications: { 'Stitching': 'Pinch Pleat & Ripple Fold Formats' }
  },

// --- WALL COVERING (LOCAL WEBP OPTIMIZED FROM USER SPECIFIED IMAGES) ---
  'wallpaper-all-generation': {
    id: 'wallpaper-all-generation',
    title: 'Imported 3D Textured Wallpaper Hanging & Fitting',
    category: 'wall-covering',
    categoryName: 'Wall Covering',
    subtitle: 'Seamless High-End Wallpaper Hanging for Bedrooms & Lounges',
    description: 'Imported heavy-duty 3D textured wallpapers hung by expert master paper-hangers.',
    image: '/images/products/wallpaper-all-generation_1.webp',
    gallery: ['/images/products/wallpaper-all-generation_1.webp', '/images/products/wallpaper-all-generation_2.webp', '/images/products/wallpaper-all-generation_3.webp', '/images/products/wallpaper-all-generation_4.webp'],
    targetSpaces: ['Master Bedrooms', 'Drawing Room Features'],
    features: ['Heavy Washable Vinyl-Coated Wallpaper Rolls'],
    specifications: { 'Roll Size': '1.06m x 15.6m (Korean Standard Jumbo Roll)' }
  },

  'customise-design-canvas': {
    id: 'customise-design-canvas',
    title: 'Custom Seamless Wall Mural & Canvas Art Execution',
    category: 'wall-covering',
    categoryName: 'Wall Covering',
    subtitle: 'Single-Piece Jointless Canvas Wall Murals',
    description: 'High-definition single-piece canvas wall murals printed to exact room dimensions with zero joints.',
    image: '/images/products/customise-design-canvas_1.webp',
    gallery: ['/images/products/customise-design-canvas_1.webp', '/images/products/customise-design-canvas_2.webp', '/images/products/customise-design-canvas_3.webp'],
    targetSpaces: ['Accent Walls', 'Drawing Rooms'],
    features: ['100% Jointless Single Sheet Wall Mural'],
    specifications: { 'Print Material': 'Imported Textured Textile Canvas' }
  },

  'pvc-panel': {
    id: 'pvc-panel',
    title: 'Damp-Proof PVC Wall & Ceiling Panel Cladding',
    category: 'wall-covering',
    categoryName: 'Wall Covering',
    subtitle: '100% Water & Dampness Defense Wall Panels',
    description: 'Interlocking hollow-core PVC wall panels installed over damp, salt-affected brick walls.',
    image: '/images/products/pvc-panel_1.webp',
    gallery: ['/images/products/pvc-panel_1.webp', '/images/products/pvc-panel_2.webp', '/images/products/pvc-panel_3.webp', '/images/products/pvc-panel_4.webp'],
    targetSpaces: ['Damp Walls', 'Shops', 'Basements'],
    features: ['Complete Saltpeter & Moisture Insulation'],
    specifications: { 'Panel Width': '250mm x 10ft Length' }
  },

  'fluted-panels': {
    id: 'fluted-panels',
    title: 'WPC Fluted Slat Wall Panel & Moulding Fitting',
    category: 'wall-covering',
    categoryName: 'Wall Covering',
    subtitle: '3D Vertical Wood Slat TV Media Wall Execution',
    description: 'Modern architectural WPC fluted slat wall cladding with integrated warm LED strip channels.',
    image: '/images/products/fluted-panels_1.webp',
    gallery: ['/images/products/fluted-panels_1.webp', '/images/products/fluted-panels_2.webp', '/images/products/fluted-panels_3.webp'],
    targetSpaces: ['TV Media Walls', 'Bed Headboard Accent Walls'],
    features: ['Wood Plastic Composite (WPC) Termite-Proof Slats'],
    specifications: { 'Slat Height': '9.5ft / 10ft Vertical Lengths' }
  },

  'wall-texture': {
    id: 'wall-texture',
    title: 'Designer Architectural Wall Texture Plaster Application',
    category: 'wall-covering',
    categoryName: 'Wall Covering',
    subtitle: 'Venetian Stucco, Velvet & Metallic Texture Paints',
    description: 'Hand-troweled Italian Venetian plaster and velvet tactile wall texture finishes.',
    image: '/images/products/wall-texture_1.webp',
    gallery: ['/images/products/wall-texture_1.webp', '/images/products/wall-texture_2.webp', '/images/products/wall-texture_3.webp', '/images/products/wall-texture_4.webp'],
    targetSpaces: ['Drawing Rooms', 'Hotel Lobbies'],
    features: ['Hand-Troweled Venetian Marble Stucco'],
    specifications: { 'Application': '3-Coat Trowel & Polish System' }
  },

  'wall-moulding': {
    id: 'wall-moulding',
    title: 'Classic European Wall Panel Moulding & Dado Rail Fitting',
    category: 'wall-covering',
    categoryName: 'Wall Covering',
    subtitle: 'Polyurethane Classical Wall Frame Border Execution',
    description: 'Precision mitered polyurethane wall panel mouldings, chair rails, and dado borders.',
    image: '/images/products/wall-moulding_1.webp',
    gallery: ['/images/products/wall-moulding_1.webp', '/images/products/wall-moulding_2.webp', '/images/products/wall-moulding_3.webp', '/images/products/wall-moulding_4.webp'],
    targetSpaces: ['Dining Rooms', 'Corridors'],
    features: ['High-Density Polyurethane Crack-Proof Frames'],
    specifications: { 'Moulding Widths': '20mm, 40mm, 60mm Frame Profiles' }
  },

  // --- FURNITURE ---
  'commercial-furniture': {
    id: 'commercial-furniture',
    title: 'Bespoke Executive Commercial Office Furniture Manufacturing',
    category: 'furniture',
    categoryName: 'Furniture',
    subtitle: 'Corporate Executive Tables, Conference Desks & Workstations',
    description: 'Custom bespoke manufacturing and installation of executive director desks and boardroom tables.',
    image: '/images/products/commercial-furniture_new_1.webp',
    gallery: [
      '/images/products/commercial-furniture_new_1.webp'
    ],
    targetSpaces: ['Executive Director Suites', 'Boardrooms'],
    features: ['Custom Wood Veneer & Laminate Finishes'],
    specifications: { 'Service Type': 'Custom Manufacturing & Site Assembly' }
  },

  'residential-furniture': {
    id: 'residential-furniture',
    title: 'Custom Luxury Residential Villa & Home Furniture Manufacturing',
    category: 'furniture',
    categoryName: 'Furniture',
    subtitle: 'Bespoke Master Beds, Luxury Sofa Sets & Dining Tables',
    description: 'Bespoke handcrafted furniture for luxury bungalows and apartments.',
    image: '/images/products/residential-furniture_new_1.webp',
    gallery: [
      '/images/products/residential-furniture_new_1.webp',
      '/images/products/residential-furniture_new_2.webp'
    ],
    targetSpaces: ['Master Bedrooms', 'Living Lounges'],
    features: ['Custom Solid Wood & Italian Velvet Upholstery'],
    specifications: { 'Wood Species': 'Seasoned Teak / Sheesham Solid Wood' }
  },

  // --- KITCHEN ---
// --- KITCHEN, FALSE CEILING & FIBER SHADES (LOCAL WEBP) ---
  'kitchen': {
    id: 'kitchen',
    title: 'Custom High-Gloss & Solid Wood Kitchen Cabinetry',
    category: 'Kitchen',
    categoryName: 'Kitchen',
    subtitle: 'High-Gloss Acrylic, UV & Solid Wood Modular Kitchen Execution',
    description: 'Bespoke modular kitchen manufacturing and site fitting. High-gloss acrylic shutters and Blum soft-close hardware.',
    image: '/images/products/kitchen_new_1.webp',
    gallery: [
      '/images/products/kitchen_new_1.webp',
      '/images/products/kitchen_new_2.webp',
      '/images/products/kitchen_new_3.webp'
    ],
    targetSpaces: ['Luxury Villa Kitchens', 'Modern Apartments'],
    features: ['Soft-Close German Hardware Integration'],
    specifications: { 'Hardware Grade': 'Blum Soft-Close Dampening System' }
  },

  'false-ceiling': {
    id: 'false-ceiling',
    title: 'Modern Gypsum Board False Ceiling Installation',
    category: 'False Ceiling',
    categoryName: 'False Ceiling',
    subtitle: 'Designer Gypsum Ceiling Framing with Warm Cove Lighting',
    description: 'Complete ceiling renovation using moisture-resistant Elephant Gypsum boards and metal studs.',
    image: '/images/products/false-ceiling_1.webp',
    gallery: ['/images/products/false-ceiling_1.webp', '/images/products/false-ceiling_2.webp', '/images/products/false-ceiling_3.webp'],
    targetSpaces: ['Living Rooms', 'Executive Offices'],
    features: ['Moisture Resistant Gypsum Board Framing'],
    specifications: { 'Service Type': 'Framing, Boarding & Finishing' }
  },

  'fiber-shades': {
    id: 'fiber-shades',
    title: 'Fiber Glass Shed & Terrace Shade Structure Fitting',
    category: 'Fiber Shades',
    categoryName: 'Fiber Shades',
    subtitle: 'Heavy-Duty Weatherproof Car Parking & Patio Canopies',
    description: 'Fabrication and installation of UV-resistant fiber glass car parking canopies.',
    image: '/images/products/fiber-shades_1.webp',
    gallery: ['/images/products/fiber-shades_1.webp', '/images/products/fiber-shades_2.webp', '/images/products/fiber-shades_3.webp', '/images/products/fiber-shades_4.webp'],
    targetSpaces: ['Car Parking Porches', 'Outdoor Balconies'],
    features: ['100% Heat & Hail Storm Shield Fiber Sheet'],
    specifications: { 'Service Type': 'Steel Framing & Sheet Installation' }
  }
};

export const PROJECTS_DATA = [
  {
    id: 'dha-luxury-villa',
    title: 'Luxury Villa SPC Flooring & Mouldings',
    category: 'Residential',
    location: 'DHA Phase 8, Karachi',
    scope: '3,200 sq ft SPC Click-Lock Flooring & WPC Wall Mouldings',
    image: '/images/products/img_1.webp',
    year: '2026'
  },
  {
    id: 'medicare-hospital-ot',
    title: 'Operating Theater Vinyl Sheet fitting',
    category: 'Hospitality & Healthcare',
    location: 'Medicare Hospital, Karachi',
    scope: 'Seamless Antibacterial Vinyl Sheet with Thermal Hot-Wire Welding',
    image: '/images/products/img_9.webp',
    year: '2025'
  },
  {
    id: 'gulshan-corporate-office',
    title: 'Corporate Office Carpet Tiles',
    category: 'Commercial',
    location: 'Federal B Area, Karachi',
    scope: '4,500 sq ft Acoustic Carpet Tiles & Motorized Zebra Blinds',
    image: '/images/products/img_31.webp',
    year: '2025'
  },
  {
    id: 'clifton-fitness-arena',
    title: 'Commercial Gym Rubber Flooring',
    category: 'Commercial',
    location: 'Clifton Block 5, Karachi',
    scope: '20mm Shock-Absorbing Rubber Tiles & Synthetic Turf Track',
    image: '/images/products/img_27.webp',
    year: '2025'
  }
];
