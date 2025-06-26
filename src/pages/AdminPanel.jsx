import { useState } from 'react';

const dummyRequests = [
  { id: 1, name: 'Bob Kumar', email: 'bob@example.com', status: 'pending' },
  { id: 2, name: 'Nisha Reddy', email: 'nisha@example.com', status: 'pending' },
];

export default function AdminPanel() {
  const [requests, setRequests] = useState(dummyRequests);

  const handleAction = (id, newStatus) => {
    const updated = requests.map(req =>
      req.id === id ? { ...req, status: newStatus } : req
    );
    setRequests(updated);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">🔐 Owner Account Requests</h2>
      {requests.length === 0 ? (
        <p>No pending requests.</p>
      ) : (
        <table className="w-full bg-white rounded shadow text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(req => (
              <tr key={req.id} className="border-t">
                <td className="p-2">{req.name}</td>
                <td className="p-2">{req.email}</td>
                <td className="p-2 font-semibold capitalize">{req.status}</td>
                <td className="p-2 flex gap-2">
                  {req.status === 'pending' ? (
                    <>
                      <button
                        onClick={() => handleAction(req.id, 'approved')}
                        className="bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleAction(req.id, 'rejected')}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-500">No action</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
