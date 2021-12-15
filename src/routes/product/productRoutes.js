import express from 'express';
import { uploadImages, resizeImages } from '../../middleware/imageUpload';
import {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from './productController';

const router = express.Router();

router.route('/').post(createProduct);

router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);
router
  .route('/uploadImages/:id')
  .patch(uploadImages, resizeImages, updateProduct);

export default router;
