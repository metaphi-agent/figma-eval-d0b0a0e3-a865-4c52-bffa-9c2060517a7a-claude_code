export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  isNew?: boolean;
  category?: string;
}

export const flashSaleProducts: Product[] = [
  {
    id: '1',
    name: 'HAVIT HV-G92 Gamepad',
    price: 120,
    originalPrice: 160,
    discount: 40,
    rating: 5,
    reviews: 88,
    image: './assets/images/gamepad.png'
  },
  {
    id: '2',
    name: 'AK-900 Wired Keyboard',
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
    image: './assets/images/keyboard.png'
  },
  {
    id: '3',
    name: 'IPS LCD Gaming Monitor',
    price: 370,
    originalPrice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
    image: './assets/images/monitor.png'
  },
  {
    id: '4',
    name: 'S-Series Comfort Chair',
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 99,
    image: './assets/images/chair.png'
  }
];

export const bestSellingProducts: Product[] = [
  {
    id: '5',
    name: 'The north coat',
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
    image: './assets/images/coat.png'
  },
  {
    id: '6',
    name: 'Gucci duffle bag',
    price: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviews: 65,
    image: './assets/images/bag.png'
  },
  {
    id: '7',
    name: 'RGB liquid CPU Cooler',
    price: 160,
    originalPrice: 170,
    rating: 4.5,
    reviews: 65,
    image: './assets/images/cooler.png'
  },
  {
    id: '8',
    name: 'Small BookSelf',
    price: 360,
    rating: 5,
    reviews: 65,
    image: './assets/images/bookshelf.png'
  }
];

export const exploreProducts: Product[] = [
  {
    id: '9',
    name: 'Breed Dry Dog Food',
    price: 100,
    rating: 3,
    reviews: 35,
    image: './assets/images/dogfood.png'
  },
  {
    id: '10',
    name: 'CANON EOS DSLR Camera',
    price: 360,
    rating: 4,
    reviews: 95,
    image: './assets/images/camera.png'
  },
  {
    id: '11',
    name: 'ASUS FHD Gaming Laptop',
    price: 700,
    rating: 5,
    reviews: 325,
    image: './assets/images/laptop.png'
  },
  {
    id: '12',
    name: 'Curology Product Set',
    price: 500,
    rating: 4,
    reviews: 145,
    image: './assets/images/curology.png'
  },
  {
    id: '13',
    name: 'Kids Electric Car',
    price: 960,
    rating: 5,
    reviews: 65,
    image: './assets/images/car.png',
    isNew: true
  },
  {
    id: '14',
    name: 'Jr. Zoom Soccer Cleats',
    price: 1160,
    rating: 5,
    reviews: 35,
    image: './assets/images/shoes.png'
  },
  {
    id: '15',
    name: 'GP11 Shooter USB Gamepad',
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: './assets/images/gamepad2.png',
    isNew: true
  },
  {
    id: '16',
    name: 'Quilted Satin Jacket',
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: './assets/images/jacket.png'
  }
];

export const categories = [
  { id: '1', name: 'Phones', icon: './assets/icons/phone.svg' },
  { id: '2', name: 'Computers', icon: './assets/icons/computer.svg' },
  { id: '3', name: 'SmartWatch', icon: './assets/icons/watch.svg' },
  { id: '4', name: 'Camera', icon: './assets/icons/camera.svg' },
  { id: '5', name: 'HeadPhones', icon: './assets/icons/headphone.svg' },
  { id: '6', name: 'Gaming', icon: './assets/icons/gaming.svg' }
];
