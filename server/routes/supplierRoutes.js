const express = require('express');
const { getSuppliers, createSupplier } = require('../controllers/supplierController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getSuppliers)
  .post(authorize('Admin', 'Manager'), createSupplier);

module.exports = router;
