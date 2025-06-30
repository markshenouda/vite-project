const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
    <div className="text-2xl font-bold text-orange-500">FoodDelivery</div>
    <nav className="space-x-6">
      <a href="#popular" className="hover:text-orange-500">Popular</a>
      <a href="#categories" className="hover:text-orange-500">Categories</a>
      <a href="#contact" className="hover:text-orange-500">Contact</a>
    </nav>
    <button className="bg-orange-500 text-white px-4 py-2 rounded-full">Sign In</button>
  </header>
);

export default Header;
