import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';

// router.get('/', getProducts); OR
router.route('/').get(getProducts);

// router.get('/:id', getProductById); OR
router.route('/:id').get(getProductById);

export default router;
