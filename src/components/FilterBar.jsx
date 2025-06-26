export default function FilterBar({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap gap-4 mb-6 bg-white p-6 rounded-xl shadow-md">
      <input
        placeholder="Location"
        className="border border-gray-300 p-3 rounded-md w-40 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
      />
      <input
        placeholder="Min Price"
        type="number"
        className="border border-gray-300 p-3 rounded-md w-40 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={filters.minPrice}
        onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
      />
      <input
        placeholder="Bedrooms"
        type="number"
        className="border border-gray-300 p-3 rounded-md w-40 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={filters.bedrooms}
        onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
      />
    </div>
  );
}
