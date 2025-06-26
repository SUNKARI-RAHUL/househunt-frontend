import { useState } from 'react';
import { properties } from '../data/properties';
import FilterBar from '../components/FilterBar';
import { Link } from 'react-router-dom';

export default function Home() {
  const [filters, setFilters] = useState({ location: '', minPrice: '', bedrooms: '' });

  const filtered = properties.filter(p =>
    p.location.toLowerCase().includes(filters.location.toLowerCase()) &&
    (!filters.minPrice || p.price >= parseInt(filters.minPrice)) &&
    (!filters.bedrooms || p.bedrooms === parseInt(filters.bedrooms))
  );

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-6">Discover Your Dream Rental</h1>
      <FilterBar filters={filters} setFilters={setFilters} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(p => (
          <Link to={`/property/${p.id}`} key={p.id} className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <img src={p.image} alt="" className="h-48 w-full object-cover group-hover:brightness-90 transition" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-indigo-700">{p.title}</h3>
              <p className="text-gray-500">{p.location}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-semibold text-indigo-600">₹{p.price}</span>
                <span className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                  {p.bedrooms} BHK
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{p.amenities.join(', ')}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
