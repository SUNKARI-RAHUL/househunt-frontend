export default function InquiryModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Send Inquiry</h2>
        <form className="space-y-3" onSubmit={(e) => {
          e.preventDefault();
          onClose();
          alert('Inquiry sent (dummy)');
        }}>
          <input placeholder="Your name" className="w-full border p-2 rounded" />
          <input placeholder="Email" className="w-full border p-2 rounded" />
          <textarea placeholder="Your message" className="w-full border p-2 rounded" />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-3 py-1 border rounded">Cancel</button>
            <button className="bg-green-600 text-white px-4 py-1 rounded">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
