export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  featured?: boolean;
}

export const products: Product[] = [
  // Premium Headphones & Audio
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 349.99,
    image: "/images/product-headphones.jpg",
    category: "Audio",
    description: "High-quality wireless headphones with noise cancellation and premium sound.",
    rating: 4.8,
    reviews: 2456,
    featured: true
  },
  {
    id: "2",
    name: "Studio Monitor Headphones",
    price: 199.99,
    image: "/images/product-headphones.jpg",
    category: "Audio",
    description: "Professional studio monitor headphones for audiophiles and music producers.",
    rating: 4.7,
    reviews: 1823
  },
  {
    id: "3",
    name: "Gaming Headset Pro",
    price: 159.99,
    originalPrice: 189.99,
    image: "/images/product-headphones.jpg",
    category: "Gaming",
    description: "Professional gaming headset with surround sound and crystal-clear microphone.",
    rating: 4.6,
    reviews: 3421
  },

  // Laptops & Computers
  {
    id: "4",
    name: "Ultra-Thin Laptop Pro",
    price: 1299.99,
    originalPrice: 1499.99,
    image: "/images/product-laptop.jpg",
    category: "Computers",
    description: "High-performance ultra-thin laptop perfect for professionals and creators.",
    rating: 4.9,
    reviews: 892,
    featured: true
  },
  {
    id: "5",
    name: "Business Laptop Essential",
    price: 899.99,
    image: "/images/product-laptop.jpg",
    category: "Computers",
    description: "Reliable business laptop with long battery life and robust security features.",
    rating: 4.5,
    reviews: 1567
  },
  {
    id: "6",
    name: "Creator Workstation",
    price: 2199.99,
    image: "/images/product-laptop.jpg",
    category: "Computers",
    description: "Powerful workstation laptop designed for content creators and developers.",
    rating: 4.8,
    reviews: 543
  },

  // Smartwatches & Wearables
  {
    id: "7",
    name: "Smart Fitness Watch",
    price: 249.99,
    originalPrice: 299.99,
    image: "/images/product-watch.jpg",
    category: "Wearables",
    description: "Advanced fitness tracking watch with heart rate monitoring and GPS.",
    rating: 4.6,
    reviews: 4321,
    featured: true
  },
  {
    id: "8",
    name: "Luxury Smart Watch",
    price: 399.99,
    image: "/images/product-watch.jpg",
    category: "Wearables",
    description: "Premium smart watch with elegant design and comprehensive health tracking.",
    rating: 4.7,
    reviews: 2187
  },
  {
    id: "9",
    name: "Sport Activity Tracker",
    price: 129.99,
    originalPrice: 159.99,
    image: "/images/product-watch.jpg",
    category: "Wearables",
    description: "Lightweight activity tracker perfect for athletes and fitness enthusiasts.",
    rating: 4.4,
    reviews: 5672
  },

  // Smartphones & Tablets
  {
    id: "10",
    name: "Flagship Smartphone",
    price: 899.99,
    originalPrice: 999.99,
    image: "/images/product-smartphone.jpg",
    category: "Mobile",
    description: "Latest flagship smartphone with advanced camera system and 5G connectivity.",
    rating: 4.8,
    reviews: 8934
  },
  {
    id: "11",
    name: "Pro Tablet 12-inch",
    price: 649.99,
    image: "/images/product-tablet.jpg",
    category: "Mobile",
    description: "Professional tablet with stunning display and powerful performance for work and play.",
    rating: 4.6,
    reviews: 2341
  },
  {
    id: "12",
    name: "Budget Smartphone",
    price: 299.99,
    originalPrice: 349.99,
    image: "/images/product-smartphone.jpg",
    category: "Mobile",
    description: "Affordable smartphone with great features and reliable performance.",
    rating: 4.3,
    reviews: 4567
  },

  // Audio Accessories
  {
    id: "13",
    name: "Wireless Earbuds Pro",
    price: 179.99,
    originalPrice: 199.99,
    image: "/images/product-earbuds.jpg",
    category: "Audio",
    description: "Premium wireless earbuds with active noise cancellation and long battery life.",
    rating: 4.7,
    reviews: 6789
  },
  {
    id: "14",
    name: "Bluetooth Speaker",
    price: 89.99,
    image: "/images/product-speaker.jpg",
    category: "Audio",
    description: "Portable Bluetooth speaker with rich sound and waterproof design.",
    rating: 4.5,
    reviews: 3456
  },
  {
    id: "15",
    name: "Sound Bar Pro",
    price: 299.99,
    originalPrice: 359.99,
    image: "/images/product-speaker.jpg",
    category: "Audio",
    description: "Premium sound bar for immersive home theater experience.",
    rating: 4.8,
    reviews: 1234
  },

  // Gaming Accessories
  {
    id: "16",
    name: "Mechanical Gaming Keyboard",
    price: 149.99,
    image: "/images/product-keyboard.jpg",
    category: "Gaming",
    description: "RGB mechanical gaming keyboard with customizable keys and premium switches.",
    rating: 4.6,
    reviews: 2789
  },
  {
    id: "17",
    name: "Gaming Mouse Pro",
    price: 79.99,
    originalPrice: 99.99,
    image: "/images/product-mouse.jpg",
    category: "Gaming",
    description: "High-precision gaming mouse with customizable DPI and ergonomic design.",
    rating: 4.7,
    reviews: 4123
  },
  {
    id: "18",
    name: "Gaming Chair Elite",
    price: 399.99,
    image: "/images/product-headphones.jpg",
    category: "Gaming",
    description: "Ergonomic gaming chair with lumbar support and premium materials.",
    rating: 4.5,
    reviews: 1567
  },

  // Home & Lifestyle
  {
    id: "19",
    name: "Smart Home Hub",
    price: 129.99,
    originalPrice: 149.99,
    image: "/images/product-smarthub.jpg",
    category: "Smart Home",
    description: "Central hub for controlling all your smart home devices with voice commands.",
    rating: 4.4,
    reviews: 2345
  },
  {
    id: "20",
    name: "Wireless Charger Pad",
    price: 39.99,
    image: "/images/product-charger.jpg",
    category: "Accessories",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    rating: 4.3,
    reviews: 5678
  },
  {
    id: "21",
    name: "Power Bank 20000mAh",
    price: 59.99,
    originalPrice: 79.99,
    image: "/images/product-powerbank.jpg",
    category: "Accessories",
    description: "High-capacity power bank with fast charging and multiple USB ports.",
    rating: 4.6,
    reviews: 3421
  },

  // Computer Accessories
  {
    id: "22",
    name: "4K USB-C Monitor",
    price: 349.99,
    image: "/images/product-laptop.jpg",
    category: "Computers",
    description: "Ultra-sharp 4K monitor with USB-C connectivity and color accuracy.",
    rating: 4.7,
    reviews: 1890
  },
  {
    id: "23",
    name: "Webcam HD Pro",
    price: 89.99,
    originalPrice: 109.99,
    image: "/images/product-webcam.jpg",
    category: "Computers",
    description: "Professional HD webcam with auto-focus and noise-canceling microphone.",
    rating: 4.5,
    reviews: 2765
  },
  {
    id: "24",
    name: "USB-C Hub 7-in-1",
    price: 49.99,
    image: "/images/product-usbhub.jpg",
    category: "Accessories",
    description: "Versatile USB-C hub with multiple ports for enhanced connectivity.",
    rating: 4.4,
    reviews: 4321
  },

  // Health & Fitness
  {
    id: "25",
    name: "Smart Scale Pro",
    price: 79.99,
    originalPrice: 99.99,
    image: "/images/product-scale.jpg",
    category: "Health",
    description: "Smart body composition scale with app connectivity and detailed metrics.",
    rating: 4.3,
    reviews: 1654
  },
  {
    id: "26",
    name: "Air Purifier Smart",
    price: 199.99,
    image: "/images/product-smarthub.jpg",
    category: "Health",
    description: "Smart air purifier with HEPA filter and app control for clean air.",
    rating: 4.6,
    reviews: 987
  },
  {
    id: "27",
    name: "Massage Gun Pro",
    price: 129.99,
    originalPrice: 159.99,
    image: "/images/product-watch.jpg",
    category: "Health",
    description: "Professional massage gun for muscle recovery and pain relief.",
    rating: 4.5,
    reviews: 2143
  },

  // Travel & Lifestyle
  {
    id: "28",
    name: "Smart Luggage 22-inch",
    price: 299.99,
    image: "/images/product-laptop.jpg",
    category: "Travel",
    description: "Smart carry-on luggage with GPS tracking and built-in charging port.",
    rating: 4.4,
    reviews: 876
  },
  {
    id: "29",
    name: "Travel Adapter Universal",
    price: 29.99,
    originalPrice: 39.99,
    image: "/images/product-charger.jpg",
    category: "Travel",
    description: "Universal travel adapter with multiple plug types and USB charging.",
    rating: 4.2,
    reviews: 3456
  },
  {
    id: "30",
    name: "Portable Coffee Maker",
    price: 89.99,
    image: "/images/product-speaker.jpg",
    category: "Lifestyle",
    description: "Compact portable coffee maker for fresh coffee anywhere you go.",
    rating: 4.1,
    reviews: 1234
  },

  // New Gadgets Collection
  {
    id: "31",
    name: "Smart Ring Pro",
    price: 249.99,
    originalPrice: 299.99,
    image: "/images/product-headphones.jpg",
    category: "Wearables",
    description: "Advanced smart ring with health tracking, contactless payments, and sleep monitoring.",
    rating: 4.7,
    reviews: 1567,
    featured: true
  },
  {
    id: "32",
    name: "Wireless Charging Stand 3-in-1",
    price: 79.99,
    image: "/images/product-watch.jpg",
    category: "Accessories",
    description: "Charge your phone, watch, and earbuds simultaneously with this elegant stand.",
    rating: 4.5,
    reviews: 2341
  },
  {
    id: "33",
    name: "VR Headset Pro Max",
    price: 599.99,
    originalPrice: 699.99,
    image: "/images/product-laptop.jpg",
    category: "Gaming",
    description: "Immersive VR experience with 4K displays and spatial audio technology.",
    rating: 4.8,
    reviews: 892,
    featured: true
  },
  {
    id: "34",
    name: "Smart Glasses AI",
    price: 399.99,
    image: "/images/product-headphones.jpg",
    category: "Wearables",
    description: "AI-powered smart glasses with real-time translation and AR navigation.",
    rating: 4.6,
    reviews: 1234
  },
  {
    id: "35",
    name: "Drone Camera 4K Pro",
    price: 799.99,
    originalPrice: 899.99,
    image: "/images/product-laptop.jpg",
    category: "Photography",
    description: "Professional drone with 4K camera, obstacle avoidance, and 30-min flight time.",
    rating: 4.9,
    reviews: 543
  },
  {
    id: "36",
    name: "Smart Home Security Kit",
    price: 299.99,
    image: "/images/product-watch.jpg",
    category: "Smart Home",
    description: "Complete security system with cameras, sensors, and mobile app control.",
    rating: 4.7,
    reviews: 2187
  },
  {
    id: "37",
    name: "Electric Scooter Urban",
    price: 549.99,
    originalPrice: 649.99,
    image: "/images/product-laptop.jpg",
    category: "Transportation",
    description: "Foldable electric scooter with 25-mile range and smartphone connectivity.",
    rating: 4.5,
    reviews: 1890
  },
  {
    id: "38",
    name: "Holographic Projector Mini",
    price: 199.99,
    image: "/images/product-headphones.jpg",
    category: "Entertainment",
    description: "Portable holographic projector for immersive 3D content display.",
    rating: 4.4,
    reviews: 876
  },
  {
    id: "39",
    name: "Smart Mirror Touch",
    price: 899.99,
    originalPrice: 1099.99,
    image: "/images/product-watch.jpg",
    category: "Smart Home",
    description: "Interactive smart mirror with touch controls, weather, news, and fitness tracking.",
    rating: 4.8,
    reviews: 654
  },
  {
    id: "40",
    name: "Neural Interface Headband",
    price: 1299.99,
    image: "/images/product-laptop.jpg",
    category: "Technology",
    description: "Brain-computer interface for controlling devices with thought patterns.",
    rating: 4.6,
    reviews: 321,
    featured: true
  },
  {
    id: "41",
    name: "Flexible Display Phone",
    price: 1899.99,
    originalPrice: 2199.99,
    image: "/images/product-headphones.jpg",
    category: "Mobile",
    description: "Revolutionary foldable phone with flexible OLED display technology.",
    rating: 4.7,
    reviews: 234
  },
  {
    id: "42",
    name: "Smart Contact Lenses",
    price: 799.99,
    image: "/images/product-watch.jpg",
    category: "Wearables",
    description: "AR contact lenses with built-in display and eye-tracking technology.",
    rating: 4.5,
    reviews: 456
  },
  {
    id: "43",
    name: "Quantum Laptop Computing",
    price: 4999.99,
    originalPrice: 5999.99,
    image: "/images/product-laptop.jpg",
    category: "Computers",
    description: "Next-generation laptop with quantum processing capabilities.",
    rating: 4.9,
    reviews: 123
  },
  {
    id: "44",
    name: "AI Personal Robot",
    price: 2499.99,
    image: "/images/product-headphones.jpg",
    category: "Smart Home",
    description: "Intelligent personal assistant robot with advanced AI and mobility.",
    rating: 4.8,
    reviews: 189
  },
  {
    id: "45",
    name: "Solar Power Bank 50000mAh",
    price: 149.99,
    originalPrice: 199.99,
    image: "/images/product-watch.jpg",
    category: "Accessories",
    description: "Ultra-high capacity solar power bank with wireless charging capability.",
    rating: 4.6,
    reviews: 2567
  }
];

// Helper functions
export const getFeaturedProducts = () => products.filter(product => product.featured);

export const getProductsByCategory = (category: string) => 
  products.filter(product => product.category === category);

export const getProductById = (id: string) => 
  products.find(product => product.id === id);

export const getAllCategories = () => 
  Array.from(new Set(products.map(product => product.category)));