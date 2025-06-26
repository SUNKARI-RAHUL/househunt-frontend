export default function Register() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
        <select className="w-full border p-2 rounded">
          <option value="renter">Renter</option>
          <option value="owner">Owner</option>
        </select>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Create Account</button>
      </form>
    </div>
  );
}
