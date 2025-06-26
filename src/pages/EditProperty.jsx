import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';

export default function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    api.get(`/properties/${id}`).then((res) => {
      const p = res.data;
      setForm({ ...p, amenities: p.amenities.join(', '), images: p.images || [] });
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form, amenities: form.amenities.split(',').map(a => a.trim()) };
    await api.put(`/properties/${id}`, payload);
    navigate('/owner');
  };

  if (!form) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Property</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['title', 'location', 'price', 'bedrooms', 'description'].map(field => (
          <input
            key={field}
            className="w-full border p-2 rounded"
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          />
        ))}
        <input
          className="w-full border p-2 rounded"
          value={form.amenities}
          onChange={(e) => setForm({ ...form, amenities: e.target.value })}
        />
        <input
          className="w-full border p-2 rounded"
          value={form.images[0]}
          onChange={(e) => setForm({ ...form, images: [e.target.value] })}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
}
