import { restaurants } from '../data/mockData';
import { useStore } from '../store';

const RestaurantsPage = () => {
  const addToCart = useStore((state) => state.addToCart);
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-8 text-center">All Restaurants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="rounded-lg shadow-md overflow-hidden bg-orange-50">
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{restaurant.name}</h3>
              <p className="mb-2">{restaurant.description}</p>
              <button
                className="mt-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
                onClick={() => addToCart({ id: restaurant.id, name: restaurant.name })}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantsPage;
