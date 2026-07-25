import React, { useState, useEffect, useContext } from 'react';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';

const Products = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    category: 'Hardware',
    supplier: 'General Supplier',
    purchasePrice: 100,
    sellingPrice: 150,
    quantity: 10,
    minStockLevel: 5,
  });

  const fetchProducts = async () => {
    try {
      const res = await API.get(`/products?search=${search}&category=${category}&page=${page}&limit=5`);
      setProducts(res.data.data);
      setTotalPages(res.data.pages);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [search, category, page]);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await API.post('/products', formData);
      setShowModal(false);
      fetchProducts();
    } catch (err) {
      alert(err.response?.data?.message || 'Error creating product');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await API.delete(`/products/${id}`);
        fetchProducts();
      } catch (err) {
        alert(err.response?.data?.message || 'Error deleting product');
      }
    }
  };

  return (
    <div>
      <div className="navbar">
        <h2>Product & Stock Management</h2>
        {['Admin', 'Manager'].includes(user?.role) && (
          <button className="btn" onClick={() => setShowModal(true)}>
            + Add Product
          </button>
        )}
      </div>

      <div className="controls-bar">
        <input
          type="text"
          className="input-field"
          placeholder="Search by code or name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="input-field" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Hardware">Hardware</option>
          <option value="Peripherals">Peripherals</option>
          <option value="Networking">Networking</option>
        </select>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Category</th>
              <th>Cost ($)</th>
              <th>Price ($)</th>
              <th>Quantity</th>
              <th>Status</th>
              {user?.role === 'Admin' && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {products.map((p) => {
              let badge = <span className="badge badge-ok">In Stock</span>;
              if (p.quantity === 0) badge = <span className="badge badge-out">Out of Stock</span>;
              else if (p.quantity <= p.minStockLevel) badge = <span className="badge badge-low">Low Stock</span>;

              return (
                <tr key={p._id}>
                  <td><strong>{p.productCode}</strong></td>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>${p.purchasePrice}</td>
                  <td>${p.sellingPrice}</td>
                  <td>{p.quantity}</td>
                  <td>{badge}</td>
                  {user?.role === 'Admin' && (
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDelete(p._id)}>
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div style={{ marginTop: 20, display: 'flex', gap: 10, alignItems: 'center' }}>
          <button className="btn" disabled={page <= 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button className="btn" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
      </div>

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', padding: 25, borderRadius: 8, width: 400 }}>
            <h3>New Product Specification</h3>
            <form onSubmit={handleCreate} style={{ marginTop: 15 }}>
              <div className="form-group">
                <label>Name</label>
                <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input required value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Purchase Price ($)</label>
                <input type="number" required value={formData.purchasePrice} onChange={(e) => setFormData({ ...formData, purchasePrice: Number(e.target.value) })} />
              </div>
              <div className="form-group">
                <label>Selling Price ($)</label>
                <input type="number" required value={formData.sellingPrice} onChange={(e) => setFormData({ ...formData, sellingPrice: Number(e.target.value) })} />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input type="number" required value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })} />
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 15 }}>
                <button type="submit" className="btn">Save Product</button>
                <button type="button" className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
