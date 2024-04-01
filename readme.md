# E-commerce Microservices System

Welcome to our E-commerce Microservices System! This system allows you to manage products, place orders, and handle user authentication. Below is a user manual to guide you through the functionalities of the system.

## Getting Started

To get started with the E-commerce system, you'll need to follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/cyrilckurian/e-commerce-system.git
   cd e-commerce-system
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the following variables in the `.env` file:
     ```
     PORT=3000
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret_key
     ```

4. Start the server:
   ```bash
   npm start
   ```

5. The server should now be running on `http://localhost:3000`.

## User Authentication

### Register a New User
- **Endpoint**: `POST /api/auth/register`
- **Request Body**:
  ```json
  {
    "name": "Your Name",
    "email": "your.email@example.com",
    "password": "yourpassword"
  }
  ```
- Register a new user with the provided name, email, and password.

### Login as a User
- **Endpoint**: `POST /api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "your.email@example.com",
    "password": "yourpassword"
  }
  ```
- Receive a JWT token upon successful login.

## Product Management

### Create a New Product
- **Endpoint**: `POST /api/products`
- **Request Body**:
  ```json
  {
    "name": "Product Name",
    "price": 19.99,
    "description": "Product Description"
  }
  ```
- Create a new product with the provided name, price, and description.

### Get All Products
- **Endpoint**: `GET /api/products`
- Retrieve a list of all products available.

### Get a Product by ID
- **Endpoint**: `GET /api/products/:productId`
- Retrieve a product by its unique ID.

### Update a Product
- **Endpoint**: `PUT /api/products/:productId`
- **Request Body**:
  ```json
  {
    "name": "New Product Name",
    "price": 24.99,
    "description": "Updated Product Description"
  }
  ```
- Update an existing product with new details.

### Delete a Product
- **Endpoint**: `DELETE /api/products/:productId`
- Delete a product by its unique ID.

## Order Management

### Create a New Order
- **Endpoint**: `POST /api/orders`
- **Request Body**:
  ```json
  {
    "userId": "user_id_here",
    "products": [
      {
        "productId": "product_id_1",
        "quantity": 2
      },
      {
        "productId": "product_id_2",
        "quantity": 1
      }
    ],
    "totalAmount": 49.97,
    "status": "pending"
  }
  ```
- Create a new order with the provided user ID, products, total amount, and status.

### Get All Orders
- **Endpoint**: `GET /api/orders`
- Retrieve a list of all orders placed.

### Get an Order by ID
- **Endpoint**: `GET /api/orders/:orderId`
- Retrieve an order by its unique ID.

### Update an Order
- **Endpoint**: `PUT /api/orders/:orderId`
- **Request Body**:
  ```json
  {
    "userId": "new_user_id_here",
    "products": [
      {
        "productId": "new_product_id_1",
        "quantity": 3
      }
    ],
    "totalAmount": 74.97,
    "status": "shipped"
  }
  ```
- Update an existing order with new details.

### Delete an Order
- **Endpoint**: `DELETE /api/orders/:orderId`
- Delete an order by its unique ID.

## Additional Notes

- Ensure to replace `your_jwt_secret_key` in the `.env` file with your own JWT secret key.
- Use a tool like Postman or curl to send requests to the API endpoints.
- Remember to include the JWT token in the Authorization header for protected routes.

---

Feel free to customize this user manual according to your specific endpoints, functionality, and system requirements. This manual provides a basic overview of how users can interact with the E-commerce Microservices System.

Happy shopping! 🛒✨

---

Make sure to replace placeholders such as `your.email@example.com`, `yourpassword`, `user_id_here`, `product_id_1`, `product_id_2`, `your_jwt_secret_key`,`your_mongodb_uri` and other placeholders with actual values or descriptions as needed for your system. This user manual provides an overview of the endpoints and functionalities available in the E-commerce Microservices System and guides users on how to interact with the system for user authentication, product management, and order processing.