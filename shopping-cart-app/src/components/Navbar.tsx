import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";

const Navbar = () => {
  // Get total cart items count from Redux store
  const cartItems = useAppSelector(state => state.cart.items);
  const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left - Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-600 hover:text-orange-300 transition">
          ShopEasy
        </Link>

        {/* Middle - Nav Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-orange-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-orange-600 transition">
              Products
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-orange-600 transition">
              About
            </Link>
          </li>
        </ul>

        {/* Right - Cart Icon */}
        <Link to="/cart" className="relative">
          {/* SVG Cart Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-7 h-7 text-gray-700 hover:text-orange-600 transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386a.75.75 0 01.728.574l.347 1.52m0 0h14.49a.75.75 0 01.728.916l-1.5 6.75a.75.75 0 01-.728.584H6.118a.75.75 0 01-.728-.584L4.031 5.094m0 0L3.75 3M6.75 21a.75.75 0 100-1.5.75.75 0 000 1.5zm10.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
            />
          </svg>

          {/* Cart Count Badge - Now dynamic */}
          {totalItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItemsCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;