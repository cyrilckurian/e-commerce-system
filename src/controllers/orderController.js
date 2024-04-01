const Order = require('../models/Order');

const orderController = {
  createOrder: async (req, res) => {
    const { userId, products, totalAmount, status } = req.body;

    try {
      const newOrder = new Order({
        userId,
        products,
        totalAmount,
        status,
      });

      await newOrder.save();

      res.status(201).json({ message: 'Order created successfully', order: newOrder });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find();

      res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getOrderById: async (req, res) => {
    const orderId = req.params.id;

    try {
      const order = await Order.findById(orderId);
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }

      res.status(200).json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateOrder: async (req, res) => {
    const orderId = req.params.id;
    const { userId, products, totalAmount, status } = req.body;

    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        orderId,
        { userId, products, totalAmount, status },
        { new: true }
      );

      if (!updatedOrder) {
        return res.status(404).json({ error: 'Order not found' });
      }

      res.status(200).json({ message: 'Order updated successfully', order: updatedOrder });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteOrder: async (req, res) => {
    const orderId = req.params.id;

    try {
      const deletedOrder = await Order.findByIdAndDelete(orderId);
      if (!deletedOrder) {
        return res.status(404).json({ error: 'Order not found' });
      }

      res.status(200).json({ message: 'Order deleted successfully', order: deletedOrder });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = orderController;
