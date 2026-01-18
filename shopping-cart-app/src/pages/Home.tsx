import ProductCard from "../components/ProductCard";
import pdt1 from '../assets/images/product1.webp';
import pdt2 from '../assets/images/product2.webp';
import pdt3 from '../assets/images/product3.webp';
import pdt4 from '../assets/images/product4.webp';
import pdt5 from '../assets/images/product5.webp';
import pdt6 from '../assets/images/product6.webp';

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    image: pdt1,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    image: pdt2,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1999,
    image: pdt3,
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 1499,
    image: pdt4,
  },
  {
    id: 5,
    name: "Keyboard",
    price: 1699,
    image: pdt5,
  },
  {
    id: 6,
    name: "Camera",
    price: 7499,
    image: pdt6,
  },
];

const Home = () => {

  return (
    <div className="pt-20 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
