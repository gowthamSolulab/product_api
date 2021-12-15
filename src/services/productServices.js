import Product from '../modals/productModal';

module.exports = {
  createService: async (body) => {
    const { productName, category, price, quantity } = body;
    const newProduct = await Product.create({
      productName,
      category,
      price,
      quantity,
    });
    if (!newProduct) return null;
    return newProduct;
  },
  getService: async (id) => {
    const product = await Product.findById(id);
    if (!product) return;
    return product;
  },
  getAllService: async () => {
    const product = await Product.find();
    if (!product) return null;
    return product;
  },
  updateService: async (id, body) => {
    const product = await Product.findByIdAndUpdate(id, body);
    if (!product) return null;
    return product;
  },
  deleteService: async (id) => {
    const product = await Product.findById(id);
    if (!product) return null;
    const deletedproduct = await Product.deleteOne(product);
    return deletedproduct;
  },
};
