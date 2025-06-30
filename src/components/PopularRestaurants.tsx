import { restaurants } from '../data/mockData';

const PopularRestaurants = () => (
  <section id="popular" className="py-12 px-6 bg-white">
    <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Popular Restaurants</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="rounded-lg shadow-md overflow-hidden bg-orange-50">
          <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{restaurant.name}</h3>
            <p className="mb-3 text-gray-700">{restaurant.description}</p>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-orange-600">⭐ {restaurant.rating}</span>
              <div className="flex flex-wrap gap-2">
                {restaurant.categories.map((cat: string) => (
                  <span key={cat} className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-full">{cat}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PopularRestaurants;
