import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import OwnerDashboard from './pages/OwnerDashboard';
import AddProperty from './pages/AddProperty';
import EditProperty from './pages/EditProperty';
import AdminPanel from './pages/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
// import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route
          path="/owner"
          element={
            <ProtectedRoute allowedRoles={['owner']}>
              <OwnerDashboard />
            </ProtectedRoute>
          }
          />

         <Route
          path="/owner/add"
          element={
          <ProtectedRoute allowedRoles={['owner']}>
            <AddProperty />
          </ProtectedRoute>
          }
          />

        <Route path="/owner/edit/:id" element={<EditProperty />} />
         <Route
          path="/admin"
          element={
          <ProtectedRoute allowedRoles={['admin']}>
         <AdminPanel />
          </ProtectedRoute>
          }
          />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/owner" element={<div className="p-4 text-center">Owner Dashboard (coming soon)</div>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
