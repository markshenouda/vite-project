import { categories } from '../data/mockData';

const Categories = () => (
  <section id="categories" className="py-12 px-6 bg-orange-50">
    <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Browse Categories</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((cat: string) => (
        <div key={cat} className="bg-white rounded-full px-6 py-3 shadow text-orange-700 font-semibold hover:bg-orange-100 transition cursor-pointer">
          {cat}
        </div>
      ))}
    </div>
  </section>
);

export default Categories;
