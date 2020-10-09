import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// router.get('/', getProducts); OR
router.route('/').get(getProducts);

// router.get('/:id', getProductById); OR
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct);

export default router;
