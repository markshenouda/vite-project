const Footer = () => (
  <footer className="px-6 py-6 bg-gray-800 text-white flex flex-col md:flex-row justify-between items-center">
    <span className="mb-2 md:mb-0 text-lg font-bold">FoodDelivery © {new Date().getFullYear()}</span>
    <div className="flex gap-6">
      <a href="#" className="hover:text-orange-300 transition">Privacy Policy</a>
      <a href="#" className="hover:text-orange-300 transition">Terms of Service</a>
      <a href="#" className="hover:text-orange-300 transition">Contact</a>
    </div>
  </footer>
);

export default Footer;
