import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <h2>ASE INVENTORY</h2>
      <nav>
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
          📊 Dashboard
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
          📦 Products
        </NavLink>
        <NavLink to="/orders" className={({ isActive }) => (isActive ? 'active' : '')}>
          🛒 Orders
        </NavLink>
        <NavLink to="/suppliers" className={({ isActive }) => (isActive ? 'active' : '')}>
          🏢 Suppliers
        </NavLink>
      </nav>
      <button onClick={logout} className="btn btn-danger" style={{ marginTop: 'auto' }}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
