const Product = require('../models/Product');
const Order = require('../models/Order');
const Supplier = require('../models/Supplier');

exports.getDashboardStats = async (req, res, next) => {
  try {
    const products = await Product.find();
    const totalProducts = products.length;

    let lowStockProducts = 0;
    let outOfStockProducts = 0;
    let totalInventoryValue = 0;

    products.forEach((p) => {
      totalInventoryValue += p.quantity * p.sellingPrice;
      if (p.quantity === 0) {
        outOfStockProducts++;
      } else if (p.quantity <= p.minStockLevel) {
        lowStockProducts++;
      }
    });

    const totalSuppliers = await Supplier.countDocuments();
    const totalOrders = await Order.countDocuments();

    // Category distribution for visual charts
    const categoryCounts = {};
    products.forEach((p) => {
      categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
    });

    res.status(200).json({
      success: true,
      stats: {
        totalProducts,
        lowStockProducts,
        outOfStockProducts,
        totalSuppliers,
        totalOrders,
        totalInventoryValue,
        categoryCounts,
      },
    });
  } catch (error) {
    next(error);
  }
};
