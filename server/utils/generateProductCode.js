const Product = require('../models/Product');

const generateProductCode = async () => {
  try {
    const count = await Product.countDocuments();
    let nextNum = count + 1;
    let code = `ASE-PRD-${String(nextNum).padStart(4, '0')}`;
    
    // Ensure absolute uniqueness
    let exists = await Product.findOne({ productCode: code });
    while (exists) {
      nextNum++;
      code = `ASE-PRD-${String(nextNum).padStart(4, '0')}`;
      exists = await Product.findOne({ productCode: code });
    }
    return code;
  } catch (err) {
    return `ASE-PRD-${Date.now().toString().slice(-4)}`;
  }
};

module.exports = generateProductCode;
