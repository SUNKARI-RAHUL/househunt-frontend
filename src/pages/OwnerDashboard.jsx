import { useState } from 'react';
import { myListings as dummyListings } from '../data/myListings';
import { Link } from 'react-router-dom';

export default function OwnerDashboard() {
  const [listings, setListings] = useState(dummyListings);

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this listing?');
    if (confirm) {
      setListings(listings.filter(l => l.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">My Listings</h2>
        <Link to="/owner/add" className="bg-blue-600 text-white px-4 py-2 rounded">Add New Property</Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map(l => (
          <div key={l.id} className="bg-white shadow rounded p-4 relative">
            <img src={l.image} alt="" className="h-40 w-full object-cover rounded mb-3" />
            <h3 className="text-lg font-semibold">{l.title}</h3>
            <p>{l.location}</p>
            <p className="font-bold">₹{l.price}</p>
            <p className="text-sm">{l.bedrooms} bed • {l.amenities.join(', ')}</p>
            <div className="flex gap-2 mt-3">
              <Link to={`/owner/edit/${l.id}`} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</Link>
              <button onClick={() => handleDelete(l.id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
