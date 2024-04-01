const Order = require('../models/Order');

// Service functions for order management
module.exports = {
  createOrder: async (orderData) => {
    const { userId, products, totalAmount, status } = orderData;

    try {
      const newOrder = new Order({
        userId,
        products,
        totalAmount,
        status,
      });

      await newOrder.save();

      return { message: 'Order created successfully', order: newOrder };
    } catch (error) {
      throw error;
    }
  },

  getAllOrders: async () => {
    try {
      const orders = await Order.find();

      return orders;
    } catch (error) {
      throw error;
    }
  },

  getOrderById: async (orderId) => {
    try {
      const order = await Order.findById(orderId);
      if (!order) {
        throw new Error('Order not found');
      }

      return order;
    } catch (error) {
      throw error;
    }
  },

  updateOrder: async (orderId, orderData) => {
    const { userId, products, totalAmount, status } = orderData;

    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        orderId,
        { userId, products, totalAmount, status },
        { new: true }
      );

      if (!updatedOrder) {
        throw new Error('Order not found');
      }

      return { message: 'Order updated successfully', order: updatedOrder };
    } catch (error) {
      throw error;
    }
  },

  deleteOrder: async (orderId) => {
    try {
      const deletedOrder = await Order.findByIdAndDelete(orderId);
      if (!deletedOrder) {
        throw new Error('Order not found');
      }

      return { message: 'Order deleted successfully', order: deletedOrder };
    } catch (error) {
      throw error;
    }
  },
};
