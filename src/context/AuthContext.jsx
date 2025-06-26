import { createContext, useState, useContext } from 'react';

// Simulated users
const fakeUsers = [
  { email: 'alice@example.com', role: 'renter' },
  { email: 'bob@example.com', role: 'owner' },
  { email: 'admin@example.com', role: 'admin' },
];
export const AuthContext = createContext();
// const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email) => {
    const found = fakeUsers.find(u => u.email === email);
    if (found) setUser(found);
    else alert('Invalid user (use alice@example.com, bob@example.com, admin@example.com)');
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
