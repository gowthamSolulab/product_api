import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    images: [String],
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields in database
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
