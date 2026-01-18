type CartItemProps = {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
  onRemove: (id: number) => void;
};

const CartItem = ({ item, onRemove }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 mb-4 rounded shadow">

      {/* Left - Image + Info */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />

        <div>
          <h2 className="font-semibold">{item.name}</h2>
          <p className="text-gray-600">
            ₹ {item.price} × {item.quantity}
          </p>
        </div>
      </div>

      {/* Right - Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:underline"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
