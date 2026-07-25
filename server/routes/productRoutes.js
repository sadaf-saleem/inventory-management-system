const express = require('express');
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

const router = express.Router();

router.use(protect);

router
  .route('/')
  .get(getProducts)
  .post(authorize('Admin', 'Manager'), createProduct);

router
  .route('/:id')
  .get(getProductById)
  .put(authorize('Admin', 'Manager'), updateProduct)
  .delete(authorize('Admin'), deleteProduct);

module.exports = router;
