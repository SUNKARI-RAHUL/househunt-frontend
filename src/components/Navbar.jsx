import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { space } from 'postcss/lib/list';

export default function Navbar() {
    const { user, logout } = useAuth();
    return (
        <nav className="bg-white shadow mb-6">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-blue-700">HouseHunt</Link>
                <div className="flex gap-4 items-center">
                    <Link to="/">Home</Link>
                    {user?.role === 'owner' && <Link to="/owner">Owner Dashboard</Link>}
                    {user?.role === 'admin' && <Link to="/admin">Admin Panel</Link>}

                    {!user ? (
                        <div className="flex items-center gap-10">
                            <Link to="/login">Login</Link>
                            <Link to="/register" className="flex items-center gap-10">Sign Up</Link>
                        </div>
                    ) : (
                        <>
                            <span className="text-sm text-gray-600">Logged in as: {user.role}</span>
                            <button onClick={logout} className="text-red-500 underline">Logout</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
