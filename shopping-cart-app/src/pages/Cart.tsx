import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { removeFromCart } from "../features/cart/cartSlice";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItems = useAppSelector(state => state.cart.items);
  const dispatch = useAppDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="pt-20 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 && (
        <p className="text-gray-600">Your cart is empty.</p>
      )}

      {cartItems.map(item => (
        <CartItem 
          key={item.id}
          item={item}
          onRemove={(id) => dispatch(removeFromCart(id))}
        />
      ))}

      {cartItems.length > 0 && (
        <div className="mt-6 text-right">
          <h2 className="text-xl font-bold">Total: ₹ {totalPrice}</h2>

          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
