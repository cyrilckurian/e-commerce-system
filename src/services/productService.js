const Product = require('../models/Product');

// Service functions for product management
module.exports = {
  createProduct: async (productData) => {
    const { name, price, description } = productData;

    try {
      const newProduct = new Product({
        name,
        price,
        description,
      });

      await newProduct.save();

      return { message: 'Product created successfully', product: newProduct };
    } catch (error) {
      throw error;
    }
  },

  getAllProducts: async () => {
    try {
      const products = await Product.find();

      return products;
    } catch (error) {
      throw error;
    }
  },

  getProductById: async (productId) => {
    try {
      const product = await Product.findById(productId);
      if (!product) {
        throw new Error('Product not found');
      }

      return product;
    } catch (error) {
      throw error;
    }
  },

  updateProduct: async (productId, productData) => {
    const { name, price, description } = productData;

    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { name, price, description },
        { new: true }
      );

      if (!updatedProduct) {
        throw new Error('Product not found');
      }

      return { message: 'Product updated successfully', product: updatedProduct };
    } catch (error) {
      throw error;
    }
  },

  deleteProduct: async (productId) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);
      if (!deletedProduct) {
        throw new Error('Product not found');
      }

      return { message: 'Product deleted successfully', product: deletedProduct };
    } catch (error) {
      throw error;
    }
  },
};
