import React, { useEffect, useState, useContext } from 'react';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await API.get('/dashboard/stats');
        setStats(res.data.stats);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  if (!stats) return <div>Loading Analytics Dashboard...</div>;

  return (
    <div>
      <div className="navbar">
        <h2>Enterprise Dashboard Summary</h2>
        <div>
          <span>{user?.name}</span>
          <span className="user-badge">{user?.role}</span>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Products</h3>
          <div className="value">{stats.totalProducts}</div>
        </div>
        <div className="stat-card warning">
          <h3>Low Stock Warning</h3>
          <div className="value">{stats.lowStockProducts}</div>
        </div>
        <div className="stat-card danger">
          <h3>Out of Stock</h3>
          <div className="value">{stats.outOfStockProducts}</div>
        </div>
        <div className="stat-card">
          <h3>Total Suppliers</h3>
          <div className="value">{stats.totalSuppliers}</div>
        </div>
        <div className="stat-card">
          <h3>Total Orders</h3>
          <div className="value">{stats.totalOrders}</div>
        </div>
        <div className="stat-card success">
          <h3>Inventory Value</h3>
          <div className="value">${stats.totalInventoryValue.toLocaleString()}</div>
        </div>
      </div>

      <div className="table-container">
        <h3>Category Breakdown</h3>
        <table style={{ marginTop: 15 }}>
          <thead>
            <tr>
              <th>Category</th>
              <th>Product Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(stats.categoryCounts).map(([cat, count]) => (
              <tr key={cat}>
                <td>{cat}</td>
                <td>{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
