const Order = require('../models/Order');
const Product = require('../models/Product');

exports.createOrder = async (req, res, next) => {
  try {
    const { customerName, customerEmail, orderedProducts } = req.body;

    if (!orderedProducts || orderedProducts.length === 0) {
      return res.status(400).json({ success: false, message: 'No ordered products provided' });
    }

    let calculatedTotal = 0;
    const itemsToProcess = [];

    // Verify stock and calculate total bill
    for (const item of orderedProducts) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(404).json({ success: false, message: `Product not found with ID ${item.product}` });
      }

      if (product.quantity < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for product '${product.name}'. Available: ${product.quantity}, Requested: ${item.quantity}`,
        });
      }

      const itemTotal = product.sellingPrice * item.quantity;
      calculatedTotal += itemTotal;

      itemsToProcess.push({
        productDoc: product,
        quantity: item.quantity,
        unitPrice: product.sellingPrice,
        productCode: product.productCode,
        productName: product.name,
      });
    }

    // Deduct inventory stock automatically
    for (const item of itemsToProcess) {
      item.productDoc.quantity -= item.quantity;
      await item.productDoc.save();
    }

    const order = await Order.create({
      customerName,
      customerEmail,
      orderedProducts: itemsToProcess.map((i) => ({
        product: i.productDoc._id,
        productCode: i.productCode,
        productName: i.productName,
        quantity: i.quantity,
        unitPrice: i.unitPrice,
      })),
      totalAmount: calculatedTotal,
      status: 'Pending',
    });

    res.status(201).json({ success: true, data: order });
  } catch (error) {
    next(error);
  }
};

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: orders.length, data: orders });
  } catch (error) {
    next(error);
  }
};

exports.updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    order.status = status;
    await order.save();

    res.status(200).json({ success: true, data: order });
  } catch (error) {
    next(error);
  }
};
