const Hero = () => (
  <section className="flex flex-col md:flex-row items-center justify-between px-6 pt-12 pb-8 bg-orange-50">
    <div className="mb-8 md:mb-0 md:w-1/2">
      <h1 className="text-5xl font-bold mb-4 text-orange-600">
        Delicious food, <br /> delivered to you
      </h1>
      <p className="text-lg mb-6 text-gray-600">Order from your favorite restaurants and get meals delivered fast wherever you are!</p>
      <a href="#popular" className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">Order Now</a>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <img src="/images/hero-food.png" alt="Delicious food" className="max-w-xs md:max-w-md rounded-lg shadow-lg" />
    </div>
  </section>
);

export default Hero;
