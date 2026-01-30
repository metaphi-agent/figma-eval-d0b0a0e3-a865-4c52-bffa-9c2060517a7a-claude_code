import { Product } from '../components/blocks/ProductCard';

export const flashSaleProducts: Product[] = [
  {
    id: '1',
    name: 'HAVIT HV-G92 Gamepad',
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&h=400&fit=crop',
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
  },
  {
    id: '2',
    name: 'AK-900 Wired Keyboard',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
    discount: 35,
  },
  {
    id: '3',
    name: 'IPS LCD Gaming Monitor',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop',
    price: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    discount: 30,
  },
  {
    id: '4',
    name: 'S-Series Comfort Chair',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=400&fit=crop',
    price: 375,
    originalPrice: 400,
    rating: 4.5,
    reviews: 99,
    discount: 25,
  },
];

export const bestSellingProducts: Product[] = [
  {
    id: '5',
    name: 'The north coat',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop',
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
  },
  {
    id: '6',
    name: 'Gucci duffle bag',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
    price: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '7',
    name: 'RGB liquid CPU Cooler',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=400&fit=crop',
    price: 160,
    originalPrice: 170,
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '8',
    name: 'Small BookShelf',
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400&h=400&fit=crop',
    price: 360,
    rating: 5,
    reviews: 65,
  },
];

export const exploreProducts: Product[] = [
  {
    id: '9',
    name: 'Breed Dry Dog Food',
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=400&fit=crop',
    price: 100,
    rating: 3,
    reviews: 35,
  },
  {
    id: '10',
    name: 'CANON EOS DSLR Camera',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
    price: 360,
    rating: 4,
    reviews: 95,
  },
  {
    id: '11',
    name: 'ASUS FHD Gaming Laptop',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop',
    price: 700,
    rating: 5,
    reviews: 325,
  },
  {
    id: '12',
    name: 'Curology Product Set',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    price: 500,
    rating: 4,
    reviews: 145,
  },
  {
    id: '13',
    name: 'Kids Electric Car',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    price: 960,
    rating: 5,
    reviews: 65,
    isNew: true,
    colors: ['#FB1314', '#1B5A7D'],
  },
  {
    id: '14',
    name: 'Jr. Zoom Soccer Cleats',
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=400&h=400&fit=crop',
    price: 1160,
    rating: 5,
    reviews: 35,
    colors: ['#EEFF61', '#DB4444'],
  },
  {
    id: '15',
    name: 'GP11 Shooter USB Gamepad',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
    price: 660,
    rating: 4.5,
    reviews: 55,
    isNew: true,
    colors: ['#000000', '#DB4444'],
  },
  {
    id: '16',
    name: 'Quilted Satin Jacket',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
    price: 660,
    rating: 4.5,
    reviews: 55,
    colors: ['#184A3C', '#000000'],
  },
];

export const allProducts = [
  ...flashSaleProducts,
  ...bestSellingProducts,
  ...exploreProducts,
];

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find((product) => product.id === id);
};