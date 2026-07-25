const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productCode: { type: String, required: true, unique: true, uppercase: true },
    name: { type: String, required: [true, 'Product name is required'], trim: true },
    category: { type: String, required: [true, 'Category is required'], trim: true },
    supplier: { type: String, default: 'General Supplier' },
    purchasePrice: { type: Number, required: [true, 'Purchase price is required'], min: 0 },
    sellingPrice: { type: Number, required: [true, 'Selling price is required'], min: 0 },
    quantity: { type: Number, required: [true, 'Quantity is required'], min: 0, default: 0 },
    minStockLevel: { type: Number, required: [true, 'Min stock level is required'], min: 0, default: 5 },
    imageUrl: { type: String, default: 'https://via.placeholder.com/150' },
  },
  { timestamps: true }
);

productSchema.pre('validate', function (next) {
  if (this.sellingPrice < this.purchasePrice) {
    this.invalidate('sellingPrice', 'Selling price cannot be lower than purchase price');
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);
