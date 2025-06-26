// src/pages/PropertyDetail.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import api from '../api/axios';
import { AuthContext } from '../context/AuthContext';

export default function PropertyDetail() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [property, setProperty] = useState(null);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    api.get(`/properties/${id}`).then((res) => setProperty(res.data));
  }, [id]);

  const handleInquiry = async () => {
    try {
      await api.post('/inquiries', { propertyId: id, message });
      setStatus('Inquiry sent!');
    } catch {
      setStatus('Error sending inquiry.');
    }
  };

  if (!property) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow rounded-xl">
      <img src={property.images?.[0]} alt="" className="w-full h-64 object-cover rounded-lg mb-4" />
      <h2 className="text-2xl font-bold">{property.title}</h2>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-lg mt-2">₹{property.price}</p>
      <p>{property.bedrooms} Bedrooms • {property.amenities.join(', ')}</p>
      <p className="mt-4">{property.description}</p>

      {user?.role === 'renter' && (
        <div className="mt-6">
          <textarea
            className="w-full border p-2 rounded"
            rows="3"
            placeholder="Message to owner..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleInquiry} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
            Send Inquiry
          </button>
          {status && <p className="text-sm mt-2">{status}</p>}
        </div>
      )}
    </div>
  );
}
