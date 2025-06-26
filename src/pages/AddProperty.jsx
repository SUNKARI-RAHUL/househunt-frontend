import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AddProperty() {
  const [form, setForm] = useState({
    title: '',
    location: '',
    price: '',
    bedrooms: '',
    image: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Listing:', form);
    alert('Listing added (dummy)');
    navigate('/owner');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Add New Property</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="title" onChange={handleChange} className="w-full border p-2 rounded" placeholder="Title" />
        <input name="location" onChange={handleChange} className="w-full border p-2 rounded" placeholder="Location" />
        <input name="price" type="number" onChange={handleChange} className="w-full border p-2 rounded" placeholder="Price" />
        <input name="bedrooms" type="number" onChange={handleChange} className="w-full border p-2 rounded" placeholder="Bedrooms" />
        <input name="image" onChange={handleChange} className="w-full border p-2 rounded" placeholder="Image URL" />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Add</button>
      </form>
    </div>
  );
}
