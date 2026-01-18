import { addToCart } from "../features/cart/cartSlice";
import { useAppDispatch } from "../hooks/reduxHooks";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition">

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600 mt-1">₹ {product.price}</p>

        <button
        onClick={handleAddToCart}
          className="mt-4 w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-300 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
