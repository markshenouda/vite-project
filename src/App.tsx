import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RestaurantsPage from './pages/RestaurantsPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
      <nav className="flex items-center gap-4 p-4 bg-orange-100 mb-6">
        <Link to="/" className="text-orange-700 font-bold">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}
export default App;
