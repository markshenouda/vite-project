import Header from '../components/Header';
import Hero from '../components/Hero';
import PopularRestaurants from '../components/PopularRestaurants';
import Categories from '../components/Categories';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PopularRestaurants />
        <Categories />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
