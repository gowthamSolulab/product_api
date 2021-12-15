import catchAsync from '../../helpers/catchAsync';
import { handleError, handleResponse } from '../../helpers/responseHandler';
import {
  createService,
  getService,
  updateService,
  getAllService,
  deleteService,
} from '../../services/productServices';

module.exports = {
  createProduct: catchAsync(async (req, res) => {
    const data = await createService(req.body);
    if (!data) return handleError(500, 'internal server error', res);
    res.data = data;
    return handleResponse(201, data, res);
  }),
  getProduct: catchAsync(async (req, res) => {
    const data = await getService(req.params.id);
    res.data = data;
    return handleResponse(200, data, res);
  }),
  updateProduct: catchAsync(async (req, res) => {
    const data = await updateService(req.params.id, req.body);
    return handleResponse(201, data, res);
  }),
  deleteProduct: catchAsync(async (req, res) => {
    const data = await deleteService(req.params.id);
    res.data = data.username;
    return response(204, data, res);
  }),
  getAllProducts: catchAsync(async (req, res) => {
    const data = await getAllService();
    res.data = data;
    return response(200, data, res);
  }),
};
