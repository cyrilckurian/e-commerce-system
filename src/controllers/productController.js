const Product = require('../models/Product');

const productController = {
  createProduct: async (req, res) => {
    const { name, price, description } = req.body;

    try {
      const newProduct = new Product({
        name,
        price,
        description,
      });

      await newProduct.save();

      res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();

      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getProductById: async (req, res) => {
    const productId = req.params.id;

    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.status(200).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateProduct: async (req, res) => {
    const productId = req.params.id;
    const { name, price, description } = req.body;

    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { name, price, description },
        { new: true }
      );

      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteProduct: async (req, res) => {
    const productId = req.params.id;

    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = productController;
