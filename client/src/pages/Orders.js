import React, { useState, useEffect } from 'react';
import API from '../services/api';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  const fetchOrders = async () => {
    try {
      const res = await API.get('/orders');
      setOrders(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await API.get('/products?limit=100');
      setProducts(res.data.data);
      if (res.data.data.length > 0) setSelectedProduct(res.data.data[0]._id);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
    fetchProducts();
  }, []);

  const handleCreateOrder = async (e) => {
    e.preventDefault();
    try {
      await API.post('/orders', {
        customerName,
        customerEmail,
        orderedProducts: [{ product: selectedProduct, quantity: Number(quantity) }],
      });
      setShowModal(false);
      fetchOrders();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to place order');
    }
  };

  return (
    <div>
      <div className="navbar">
        <h2>Customer Orders Lifecycle</h2>
        <button className="btn" onClick={() => setShowModal(true)}>+ Create Order</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Total ($)</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o._id}>
                <td>{o._id.slice(-6).toUpperCase()}</td>
                <td>{o.customerName}</td>
                <td>{o.customerEmail}</td>
                <td>${o.totalAmount}</td>
                <td><span className="badge badge-ok">{o.status}</span></td>
                <td>{new Date(o.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', padding: 25, borderRadius: 8, width: 400 }}>
            <h3>Create Customer Order</h3>
            <form onSubmit={handleCreateOrder} style={{ marginTop: 15 }}>
              <div className="form-group">
                <label>Customer Name</label>
                <input required value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Customer Email</label>
                <input type="email" required value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Select Product</label>
                <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                  {products.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.name} (Stock: {p.quantity}) - ${p.sellingPrice}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input type="number" min="1" required value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 15 }}>
                <button type="submit" className="btn">Place Order</button>
                <button type="button" className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
