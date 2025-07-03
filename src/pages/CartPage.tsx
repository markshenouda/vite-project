import { useStore } from '../store';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useStore();
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-8 text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="mb-4 p-4 bg-gray-100 rounded flex justify-between items-center">
              <span>{item.name} × {item.quantity}</span>
              <button
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};
export default CartPage;
