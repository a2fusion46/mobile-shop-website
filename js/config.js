/**
 * ==========================================================================
 * CENTRALIZED BUSINESS CONFIGURATION (ENHANCED EDITION)
 * ==========================================================================
 * Edit the details below to customize the website for any mobile store.
 * All prices, contact info, catalogs, and links across the website update automatically.
 */

const CONFIG = {
  // Business Details
  shop: {
    name: "NEXUS MOBILE HUB", // [MOBILE SHOP NAME]
    tagline: "Latest Technology. Best Prices. Trusted Service.",
    address: "Shop 12-14, Ground Floor, Tech Galleria Plaza, MG Road, Metro City, 560001", // [FULL SHOP ADDRESS]
    phoneDisplay: "+91 98765 43210", // [PHONE NUMBER]
    phoneTel: "+919876543210",
    whatsappDisplay: "+91 98765 43210", // [WHATSAPP NUMBER]
    whatsappNumber: "919876543210", // Digits only with country code
    email: "contact@nexusmobilehub.com", // [EMAIL ADDRESS]
    openingHours: "Monday – Sunday, 10:00 AM – 9:00 PM",
    googleMapsUrl: "https://maps.google.com/?q=Tech+Galleria+Plaza+Mobile+Store", // [GOOGLE MAPS LINK]
    instagramUrl: "https://instagram.com/nexusmobilehub", // [INSTAGRAM LINK]
    facebookUrl: "https://facebook.com/nexusmobilehub",
    youtubeUrl: "https://youtube.com/@nexusmobilehub",
    currency: "₹",
    establishedYear: "2019"
  },

  // Hero Featured Device
  heroFeatured: {
    title: "iPhone 17 Pro Max",
    subtitle: "Forged in Aerospace Titanium. Powered by A19 Pro 3nm.",
    price: 154999,
    emiText: "From ₹6,499/mo with 0% EMI",
    colors: [
      { name: "Natural Titanium", hex: "#9a9791", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" },
      { name: "Black Titanium", hex: "#2b2b2d", img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80" },
      { name: "Blue Titanium", hex: "#3b4856", img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80" },
      { name: "Desert Titanium", hex: "#c5a880", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80" }
    ],
    specs: [
      { label: "Display", value: "6.9\" OLED 120Hz ProMotion" },
      { label: "Processor", value: "Apple A19 Pro (3nm)" },
      { label: "Main Camera", value: "48MP Triple Fusion + 10x Periscope" },
      { label: "Battery", value: "4,850 mAh • 35W Fast Charging" }
    ]
  },

  // Stats Counters
  stats: [
    { value: "5+", label: "Years Experience", icon: "award" },
    { value: "10,000+", label: "Happy Customers", icon: "users" },
    { value: "500+", label: "Products in Stock", icon: "smartphone" },
    { value: "< 30 Min", label: "Express Repair Speed", icon: "zap" }
  ],

  // Key Highlights / Trust Pillars
  trustPillars: [
    {
      title: "100% Genuine Products",
      desc: "Direct brand authorization with sealed boxes, valid serial numbers & official warranty.",
      icon: "shield-check",
      badge: "Brand Certified"
    },
    {
      title: "Best Price Guarantee",
      desc: "Guaranteed unbeatable local market pricing, instant cashback offers & flexible 0% EMI plans.",
      icon: "tag",
      badge: "Price Match"
    },
    {
      title: "Expert Service & Repair",
      desc: "Certified technicians for instant screen, battery, and chip-level motherboard diagnosis.",
      icon: "wrench",
      badge: "Same-Day Fix"
    },
    {
      title: "Customer First Philosophy",
      desc: "Complimentary data transfer, initial setup assistance and lifetime free tech support.",
      icon: "heart-handshake",
      badge: "5-Star Rated"
    }
  ],

  // Smartphones Catalog
  smartphones: [
    {
      id: "iphone-17-pro-max",
      brand: "Apple",
      brandKey: "apple",
      name: "iPhone 17 Pro Max",
      startingPrice: 154999,
      ramStorage: "12GB RAM | 256GB / 512GB / 1TB",
      display: "6.9\" Super Retina XDR ProMotion 120Hz",
      processor: "Apple A19 Pro (3nm Bionic)",
      camera: "48MP Triple Fusion + 10x Periscope Zoom",
      battery: "4,850 mAh | 35W Fast Charging",
      badge: "Flagship Beast",
      badgeColor: "gold",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
      colors: [
        { name: "Natural Titanium", hex: "#9a9791" },
        { name: "Black Titanium", hex: "#282829" },
        { name: "Blue Titanium", hex: "#3b4856" },
        { name: "Desert Titanium", hex: "#c4a781" }
      ],
      emi: "₹6,499/mo",
      highlights: ["Action Button 2.0", "Wi-Fi 7", "4K 120fps ProRes Video", "Under-display FaceID"],
      inStock: true
    },
    {
      id: "iphone-17-pro",
      brand: "Apple",
      brandKey: "apple",
      name: "iPhone 17 Pro",
      startingPrice: 134999,
      ramStorage: "12GB RAM | 128GB / 256GB / 512GB",
      display: "6.3\" Super Retina XDR ProMotion 120Hz",
      processor: "Apple A19 Pro (3nm Bionic)",
      camera: "48MP Pro System with 5x Telephoto",
      battery: "3,800 mAh | Fast Qi2 Wireless",
      badge: "Top Seller",
      badgeColor: "blue",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
      colors: [
        { name: "Natural Titanium", hex: "#9a9791" },
        { name: "Black Titanium", hex: "#282829" },
        { name: "Silver", hex: "#e2e4e6" }
      ],
      emi: "₹5,699/mo",
      highlights: ["Compact Flagship", "A19 Pro Chip", "Ray Tracing Gaming", "Action Button"],
      inStock: true
    },
    {
      id: "iphone-17",
      brand: "Apple",
      brandKey: "apple",
      name: "iPhone 17",
      startingPrice: 79999,
      ramStorage: "8GB RAM | 128GB / 256GB",
      display: "6.1\" OLED Super Retina XDR 120Hz",
      processor: "Apple A19 Bionic",
      camera: "48MP Dual Pixel Fusion Camera",
      battery: "3,561 mAh | All-Day Battery",
      badge: "Popular Pick",
      badgeColor: "green",
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
      colors: [
        { name: "Ultramarine", hex: "#25488e" },
        { name: "Teal", hex: "#397d81" },
        { name: "Pink", hex: "#e6b0b8" },
        { name: "White", hex: "#fafafa" }
      ],
      emi: "₹3,399/mo",
      highlights: ["Dynamic Island", "Camera Control Button", "Spatial Video", "Ultra-wide angle"],
      inStock: true
    },
    {
      id: "galaxy-s26-ultra",
      brand: "Samsung",
      brandKey: "samsung",
      name: "Galaxy S26 Ultra",
      startingPrice: 139999,
      ramStorage: "16GB RAM | 256GB / 512GB / 1TB",
      display: "6.8\" Dynamic AMOLED 2X QHD+ 144Hz Anti-Glare",
      processor: "Snapdragon 8 Elite Gen 5 (Galaxy Edition)",
      camera: "200MP Quad Cam + 100x Space Zoom AI",
      battery: "5,200 mAh | 65W Wired + S-Pen Built-in",
      badge: "Ultimate AI Phone",
      badgeColor: "purple",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      colors: [
        { name: "Titanium Gray", hex: "#6c6d71" },
        { name: "Titanium Violet", hex: "#433857" },
        { name: "Titanium Amber", hex: "#b49265" }
      ],
      emi: "₹5,899/mo",
      highlights: ["Built-in S-Pen Stylus", "Galaxy AI 3.0 Real-time", "Titanium Armor Frame", "200MP Master Sensor"],
      inStock: true
    },
    {
      id: "galaxy-s26-plus",
      brand: "Samsung",
      brandKey: "samsung",
      name: "Galaxy S26+",
      startingPrice: 99999,
      ramStorage: "12GB RAM | 256GB / 512GB",
      display: "6.7\" Dynamic AMOLED 2X FHD+ 120Hz",
      processor: "Snapdragon 8 Elite Gen 5",
      camera: "50MP Dual Telephoto System",
      battery: "4,900 mAh | 45W Super Fast Charging",
      badge: "Powerhouse",
      badgeColor: "blue",
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      colors: [
        { name: "Cobalt Violet", hex: "#353147" },
        { name: "Onyx Black", hex: "#1f2022" },
        { name: "Marble Gray", hex: "#d5d6db" }
      ],
      emi: "₹4,199/mo",
      highlights: ["Armor Aluminum 2.0", "ProVisual Engine", "Generative Edit AI", "IP68 Rating"],
      inStock: true
    },
    {
      id: "galaxy-s26",
      brand: "Samsung",
      brandKey: "samsung",
      name: "Galaxy S26",
      startingPrice: 74999,
      ramStorage: "8GB RAM | 128GB / 256GB",
      display: "6.2\" Dynamic AMOLED 2X 120Hz Compact",
      processor: "Snapdragon 8 Elite / Exynos 2600",
      camera: "50MP Triple Camera with Super Steady",
      battery: "4,000 mAh | Fast Wireless Charging",
      badge: "Compact Master",
      badgeColor: "orange",
      image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
      colors: [
        { name: "Amber Yellow", hex: "#d9b66d" },
        { name: "Onyx Black", hex: "#1f2022" },
        { name: "Jade Green", hex: "#4b6c5e" }
      ],
      emi: "₹3,199/mo",
      highlights: ["Lightweight & Ergonomic", "Circle to Search AI", "7 Years OS Updates", "Vision Booster"],
      inStock: true
    },
    {
      id: "oneplus-13",
      brand: "OnePlus",
      brandKey: "oneplus",
      name: "OnePlus 13 5G",
      startingPrice: 69999,
      ramStorage: "16GB/24GB RAM | 512GB UFS 4.0",
      display: "6.82\" 2K Oriental OLED 120Hz LTPO",
      processor: "Snapdragon 8 Elite 3nm",
      camera: "50MP Sony LYT-808 Hasselblad Camera",
      battery: "6,000 mAh Glacier Battery | 100W SUPERVOOC",
      badge: "Speed King",
      badgeColor: "red",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
      colors: [
        { name: "Midnight Ocean", hex: "#1d2b3a" },
        { name: "Arctic Dawn", hex: "#dbe4ee" },
        { name: "Black Eclipse", hex: "#191919" }
      ],
      emi: "₹2,999/mo",
      highlights: ["6000mAh Battery", "100W Wired + 50W AIRVOOC", "Hasselblad Master Tuning", "IP69 Waterproof"],
      inStock: true
    },
    {
      id: "xiaomi-15-pro",
      brand: "Xiaomi",
      brandKey: "xiaomi",
      name: "Xiaomi 15 Pro",
      startingPrice: 64999,
      ramStorage: "16GB RAM | 512GB Storage",
      display: "6.73\" 2K AMOLED 120Hz 3200nits Peak",
      processor: "Snapdragon 8 Elite (3nm)",
      camera: "50MP Leica Summilux Triple 50MP Array",
      battery: "6,100 mAh High-Density | 90W HyperCharge",
      badge: "Leica Optics",
      badgeColor: "red",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      colors: [
        { name: "Titanium Silver", hex: "#b8bcc0" },
        { name: "Ceramic White", hex: "#f0f0f2" },
        { name: "Forest Green", hex: "#2b4c3f" }
      ],
      emi: "₹2,799/mo",
      highlights: ["Leica Authentic Photography", "Xiaomi HyperOS 2", "Ultrasonic Fingerprint", "Dragon Crystal Glass"],
      inStock: true
    },
    {
      id: "vivo-x200-pro",
      brand: "Vivo",
      brandKey: "vivo",
      name: "Vivo X200 Pro",
      startingPrice: 72999,
      ramStorage: "16GB RAM | 512GB Storage",
      display: "6.78\" 1.5K Zeiss LTPO 120Hz Curved",
      processor: "MediaTek Dimensity 9400 (3nm)",
      camera: "200MP Zeiss APO Telephoto + 50MP Sony Sensor",
      battery: "6,000 mAh BlueOcean | 90W FlashCharge",
      badge: "Camera Monster",
      badgeColor: "blue",
      image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80",
      colors: [
        { name: "Ocean Blue", hex: "#23496d" },
        { name: "Titanium Gray", hex: "#636467" }
      ],
      emi: "₹3,099/mo",
      highlights: ["200MP Zeiss Telephoto", "V3+ Imaging Chip", "Stage Mode Video", "6000mAh Battery"],
      inStock: true
    },
    {
      id: "oppo-find-x8-pro",
      brand: "OPPO",
      brandKey: "oppo",
      name: "OPPO Find X8 Pro",
      startingPrice: 79999,
      ramStorage: "16GB RAM | 512GB Storage",
      display: "6.78\" Infinite View AMOLED 120Hz",
      processor: "MediaTek Dimensity 9400 Flagship",
      camera: "Dual Periscope Telephoto 50MP Quad Camera",
      battery: "5,910 mAh Silicon-Carbon | 80W SUPERVOOC",
      badge: "Dual Periscope",
      badgeColor: "purple",
      image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80",
      colors: [
        { name: "Space Black", hex: "#1c1d1f" },
        { name: "Pearl White", hex: "#ebecef" }
      ],
      emi: "₹3,399/mo",
      highlights: ["Hasselblad Dual Periscope", "Quick Button Shutter", "ColorOS 15 AI", "Ultra Slim Body"],
      inStock: true
    },
    {
      id: "realme-gt-7-pro",
      brand: "Realme",
      brandKey: "realme",
      name: "Realme GT 7 Pro",
      startingPrice: 56999,
      ramStorage: "16GB RAM | 512GB Storage",
      display: "6.78\" Eco² OLED Plus 120Hz 6000nits",
      processor: "Snapdragon 8 Elite Processor",
      camera: "50MP Sony IMX906 + 3x Periscope Zoom",
      battery: "6,500 mAh Titan Battery | 120W Ultra Charge",
      badge: "Value Flagship",
      badgeColor: "orange",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      colors: [
        { name: "Mars Orange", hex: "#d85b2c" },
        { name: "Titanium Grey", hex: "#525458" }
      ],
      emi: "₹2,499/mo",
      highlights: ["6500mAh Massive Battery", "120W Hyper Charging", "Underwater Photography Mode", "Snapdragon 8 Elite"],
      inStock: true
    }
  ],

  // Trade-In Exchange Calculator Matrix
  exchangeCalculator: {
    brands: [
      {
        name: "Apple",
        models: [
          { name: "iPhone 15 Pro Max", baseVal: 72000 },
          { name: "iPhone 15 Pro", baseVal: 62000 },
          { name: "iPhone 15", baseVal: 42000 },
          { name: "iPhone 14 Pro Max", baseVal: 52000 },
          { name: "iPhone 14 Pro", baseVal: 45000 },
          { name: "iPhone 14", baseVal: 34000 },
          { name: "iPhone 13", baseVal: 27000 },
          { name: "iPhone 12", baseVal: 18000 }
        ]
      },
      {
        name: "Samsung",
        models: [
          { name: "Galaxy S24 Ultra", baseVal: 65000 },
          { name: "Galaxy S24+", baseVal: 48000 },
          { name: "Galaxy S24", baseVal: 38000 },
          { name: "Galaxy S23 Ultra", baseVal: 45000 },
          { name: "Galaxy S23", baseVal: 28000 },
          { name: "Galaxy S22 Ultra", baseVal: 30000 },
          { name: "Galaxy Note 20 Ultra", baseVal: 18000 }
        ]
      },
      {
        name: "OnePlus",
        models: [
          { name: "OnePlus 12 5G", baseVal: 38000 },
          { name: "OnePlus 12R", baseVal: 24000 },
          { name: "OnePlus 11 5G", baseVal: 26000 },
          { name: "OnePlus 10 Pro", baseVal: 18000 },
          { name: "OnePlus 9 Pro", baseVal: 13000 }
        ]
      },
      {
        name: "Xiaomi / Redmi",
        models: [
          { name: "Xiaomi 14 Ultra", baseVal: 45000 },
          { name: "Xiaomi 14", baseVal: 32000 },
          { name: "Xiaomi 13 Pro", baseVal: 24000 },
          { name: "Redmi Note 13 Pro+", baseVal: 14000 }
        ]
      }
    ],
    conditions: [
      { id: "flawless", label: "Flawless / Like New (No scratches, all original)", factor: 1.0 },
      { id: "good", label: "Good Condition (Minor scratches, fully functional)", factor: 0.88 },
      { id: "average", label: "Average (Visible scuffs, battery worn)", factor: 0.72 },
      { id: "damaged", label: "Damaged Screen (Cracked glass but working display)", factor: 0.45 }
    ],
    bonusValue: 5000 // In-store bonus on flagship upgrade
  },

  // Best Deals & Offers
  deals: [
    {
      id: "deal-exchange",
      title: "Smart Exchange Offer",
      tag: "Save up to ₹15,000",
      icon: "refresh-cw",
      desc: "Upgrade your old smartphone and get an attractive exchange value plus up to ₹15,000 instant bonus on any new 5G flagship.",
      cta: "Calculate Exchange Value",
      bannerText: "Instant Store Valuation"
    },
    {
      id: "deal-festival",
      title: "Special Festival Offers",
      tag: "Zero Down Payment",
      icon: "sparkles",
      desc: "Special discounts on selected smartphones and accessories with flat 10% instant bank cashback and zero cost EMI options.",
      cta: "Claim Festival Offer",
      bannerText: "Limited Period Deals"
    },
    {
      id: "deal-combo",
      title: "Super Combo Deals",
      tag: "Save 50% on Addons",
      icon: "package",
      desc: "Buy a smartphone with accessories and save more. Bundle original high-speed GaN chargers, cases and screen guards at half price.",
      cta: "Explore Combo Bundles",
      bannerText: "Smart Bundle Saver"
    },
    {
      id: "deal-student",
      title: "Student Special Offers",
      tag: "Extra ₹2,500 OFF",
      icon: "graduation-cap",
      desc: "Special pricing for students on selected products. Simply show your valid college or school ID card for an instant bonus discount.",
      cta: "Claim Student Discount",
      bannerText: "Exclusive for Students"
    }
  ],

  // Premium Mobile Accessories
  accessories: [
    {
      name: "65W & 100W GaN Fast Chargers",
      category: "Fast Chargers",
      categoryKey: "chargers",
      desc: "Ultra-compact dual-port GaN technology for Apple, Samsung & Android.",
      price: 1899,
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Braided 240W USB-C Cables",
      category: "USB-C Cables",
      categoryKey: "cables",
      desc: "Heavy-duty nylon braided fast charge & high-speed data transfer cable.",
      price: 499,
      image: "https://images.unsplash.com/photo-1608248597359-58b2d1d07c0e?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "20,000mAh MagSafe Power Banks",
      category: "Power Banks",
      categoryKey: "power",
      desc: "Fast magnetic wireless charging with digital LED power meter display.",
      price: 2499,
      image: "https://images.unsplash.com/photo-1609592424368-24cf74f76ca6?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "ANC Pro Wireless Earbuds",
      category: "Wireless Earbuds",
      categoryKey: "audio",
      desc: "Hi-Res spatial audio with 42dB active noise cancelling and deep bass.",
      price: 3499,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "IPX7 Portable Bluetooth Speakers",
      category: "Bluetooth Speakers",
      categoryKey: "audio",
      desc: "Rugged waterproof outdoor design with 360-degree immersive sound.",
      price: 2199,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Armor MagSafe Phone Covers",
      category: "Phone Covers",
      categoryKey: "protection",
      desc: "Military grade drop protection with anti-yellowing crystal clear finish.",
      price: 799,
      image: "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "9H Edge-to-Edge Tempered Glass",
      category: "Tempered Glass",
      categoryKey: "protection",
      desc: "Anti-scratch oleophobic privacy and ultra-clear screen guards with free fitting.",
      price: 399,
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "AMOLED BT-Calling Smart Watches",
      category: "Smart Watches",
      categoryKey: "wearables",
      desc: "Always-on AMOLED display with Bluetooth voice calling and health tracking.",
      price: 2999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "45W Dual Metal Fast Car Chargers",
      category: "Car Chargers",
      categoryKey: "chargers",
      desc: "All-metal heat dissipating design with PD 3.0 and Quick Charge 3.0.",
      price: 899,
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
    }
  ],

  // Mobile Services & Repair
  services: [
    {
      id: "screen-repair",
      title: "Screen Replacement",
      shortDesc: "Professional display replacement with original OEM color accuracy, 120Hz fluidity and touch precision.",
      turnaround: "30–45 Mins",
      warranty: "90 Days Warranty",
      startingPrice: 1999,
      icon: "smartphone"
    },
    {
      id: "battery-repair",
      title: "Battery Replacement",
      shortDesc: "Reliable battery replacement service with grade-A zero-cycle OEM capacity cells.",
      turnaround: "20 Mins",
      warranty: "6 Months Warranty",
      startingPrice: 999,
      icon: "battery-charging"
    },
    {
      id: "charging-repair",
      title: "Charging Port Repair",
      shortDesc: "Diagnosis and repair of charging issues, loose connectors and IC level faults.",
      turnaround: "30 Mins",
      warranty: "90 Days Warranty",
      startingPrice: 699,
      icon: "zap"
    },
    {
      id: "software-support",
      title: "Software Support",
      shortDesc: "Software installation, updates, bootloop fixes, forgotten passcode assistance and troubleshooting.",
      turnaround: "Same Day",
      warranty: "Guaranteed Support",
      startingPrice: 499,
      icon: "terminal"
    },
    {
      id: "data-transfer",
      title: "Data Transfer",
      shortDesc: "Secure phone-to-phone data transfer assistance for WhatsApp chats, photos, contacts and files.",
      turnaround: "15–30 Mins",
      warranty: "100% Privacy Secure",
      startingPrice: 0, // Free with phone purchase
      icon: "folder-sync"
    },
    {
      id: "general-repair",
      title: "General Repair",
      shortDesc: "Diagnosis and repair for common mobile issues including speaker, camera, mic and motherboard fixes.",
      turnaround: "1–24 Hours",
      warranty: "90 Days Warranty",
      startingPrice: 799,
      icon: "cpu"
    }
  ],

  // Why Customers Choose Us
  whyChooseUs: [
    { title: "Genuine Products", desc: "Every smartphone is 100% original, brand sealed with official manufacturer warranty.", icon: "shield-check" },
    { title: "Competitive Pricing", desc: "Unbeatable market rates with transparent price matching and instant discounts.", icon: "badge-percent" },
    { title: "Experienced Staff", desc: "Knowledgeable, friendly tech advisors to guide you to the perfect device.", icon: "user-check" },
    { title: "Transparent Pricing", desc: "Clear upfront quotes with zero hidden fees on phones, repairs and accessories.", icon: "eye" },
    { title: "Quick Service", desc: "Instant billing, on-the-spot screen replacement and fast express setup.", icon: "clock" },
    { title: "Customer Support", desc: "Dedicated phone and WhatsApp assistance before and after your purchase.", icon: "headphones" },
    { title: "Wide Product Range", desc: "Complete lineup of the newest phones and certified accessories all under one roof.", icon: "layout-grid" },
    { title: "Trusted Local Store", desc: "Over 5 years of serving the local community with thousands of happy repeat customers.", icon: "map-pin" }
  ],

  // Customer Testimonials
  testimonials: [
    {
      name: "Rahul Verma",
      role: "Verified Buyer • iPhone 17 Pro",
      rating: 5,
      comment: "Purchased the iPhone 17 Pro on launch day. The staff transferred all 80GB of my data from Android to iOS in under 20 minutes for free! The price was better than online stores with card discounts.",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Pooja Sharma",
      role: "Verified Buyer • Samsung Galaxy S26 Ultra",
      rating: 5,
      comment: "Best mobile shop in the area! Exchanged my old phone and received an amazing exchange bonus. They also gave me a free tempered glass and premium silicone case. Truly genuine people.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Arjun Mehta",
      role: "Service Customer • Screen Replacement",
      rating: 5,
      comment: "My phone's display shattered completely. Authorized center asked for 4 days. Nexus Mobile Hub replaced it with an original OEM panel within 40 minutes right in front of me! Super smooth 120Hz display works flawlessly.",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sneha Kulkarni",
      role: "Verified Buyer • OnePlus 13",
      rating: 5,
      comment: "Inquired about the OnePlus 13 on WhatsApp at 10 AM, reserved it, and walked out of the store with a sealed unit by 12 PM with 0% EMI setup. Outstanding customer care and fast responsiveness.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
    }
  ],

  // 10 Detailed FAQs
  faqs: [
    {
      q: "Do you sell genuine smartphones?",
      a: "Yes, 100%! All smartphones sold at our store are brand-new, factory-sealed units sourced directly from official brand distributors. Every device comes with its original IMEI number, manufacturer warranty card, and official GST tax invoice."
    },
    {
      q: "Do you provide mobile repair services?",
      a: "Yes, we run a state-of-the-art repair lab with certified technicians. We offer same-day repairs for screen replacements, battery issues, camera modules, charging ports, speaker defects, and motherboard diagnostics using original OEM grade parts."
    },
    {
      q: "Do you offer exchange on old phones?",
      a: "Yes! We have an instant phone exchange program. Bring your old smartphone (any brand, working condition) to our store for a 5-minute physical & diagnostic evaluation. You'll receive instant trade-in credit plus extra exchange bonuses on your new phone."
    },
    {
      q: "Can I check the price on WhatsApp?",
      a: "Absolutely. Click any 'WhatsApp Us' or 'Enquire on WhatsApp' button on our website to message us directly. Our team responds in under 5 minutes with live stock availability, color options, and today's best discounted price."
    },
    {
      q: "Do you provide accessories?",
      a: "Yes, we stock a comprehensive collection of premium accessories including fast chargers (GaN 65W/100W), braided type-C cables, magnetic power banks, ANC wireless earbuds, protective cases, 9H tempered glass, and smartwatches."
    },
    {
      q: "What are your store timings?",
      a: "Our store is open 7 days a week from Monday to Sunday, 10:00 AM to 9:00 PM. You can visit us anytime during these hours or book a service appointment in advance."
    },
    {
      q: "Do you provide warranty support?",
      a: "Yes. All new smartphones come with 1 Year Official Brand Warranty serviceable at any authorized service center nationwide. For repair jobs done in our store, we provide a 90-day to 6-month dedicated store warranty."
    },
    {
      q: "Can I reserve a phone before visiting?",
      a: "Yes! Just message us on WhatsApp with the model, variant, and color you want. We will hold the device for you for up to 24 hours with no advance deposit required."
    },
    {
      q: "Do you provide screen and battery replacement?",
      a: "Yes, we specialize in express screen and battery replacements. Most iPhone, Samsung, and OnePlus screen and battery swaps are completed within 30 to 45 minutes right in front of you."
    },
    {
      q: "Where is your shop located?",
      a: "We are centrally located at Shop 12-14, Ground Floor, Tech Galleria Plaza, MG Road, Metro City. We have convenient parking available and are a 2-minute walk from the central metro station. Click 'Get Directions' to open Google Maps."
    }
  ]
};
