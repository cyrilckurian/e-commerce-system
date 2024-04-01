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
<img width="1387" alt="Screenshot 2024-04-01 at 10 06 07 PM" src="https://github.com/cyrilckurian/e-commerce-system/assets/74858827/8123acf9-3e2f-4cde-b1ea-4dd57301b0e1">
- If user already exists
<img width="1391" alt="Screenshot 2024-04-01 at 10 06 29 PM" src="https://github.com/cyrilckurian/e-commerce-system/assets/74858827/8f1c6367-2e20-4b7d-9a96-f9cc59654a6c">


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
<img width="1391" alt="Screenshot 2024-04-01 at 10 09 35 PM" src="https://github.com/cyrilckurian/e-commerce-system/assets/74858827/29d3f281-dd46-4696-8f5d-80532824964c">

- If unauthorized
<img width="1387" alt="Screenshot 2024-04-01 at 10 08 41 PM" src="https://github.com/cyrilckurian/e-commerce-system/assets/74858827/0e3dcec0-8ae2-4715-8a0c-7267b7b3d1a4">


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
<img width="1391" alt="Screenshot 2024-04-01 at 10 11 16 PM" src="https://github.com/cyrilckurian/e-commerce-system/assets/74858827/d285c0ad-a3d8-45d5-95c6-7ae809d6f5d5">

<img width="1394" alt="Screenshot 2024-04-01 at 10 12 01 PM" src="https://github.com/cyrilckurian/e-commerce-system/assets/74858827/d4616fa6-f019-4b5d-8bc4-330cfae7036c">


### Get All Products
- **Endpoint**: `GET /api/products`
- Retrieve a list of all products available.
<img width="1390" alt="Screenshot 2024-04-01 at 10 12 26 PM" src="https://github.com/cyrilckurian/e-commerce-system/assets/74858827/fb0168f4-251a-4e66-870b-719267966164">


### Get a Product by ID
- **Endpoint**: `GET /api/products/:productId`
- Retrieve a product by its unique ID.
<img width="1391" alt="Screenshot 2024-04-01 at 10 13 19 PM" src="https://github.com/cyrilckurian/e-commerce-system/assets/74858827/6c266334-7f37-40bd-81f2-c6da1a79ed53">


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
<img width="1394" alt="Screenshot 2024-04-01 at 10 14 43 PM" src="https://github.com/cyrilckurian/e-commerce-system/assets/74858827/a65e5152-293e-4c2c-93ad-4fc2619220c5">


### Delete a Product
- **Endpoint**: `DELETE /api/products/:productId`
- Delete a product by its unique ID.
<img width="1394" alt="Screenshot 2024-04-01 at 10 15 10 PM" src="https://github.com/cyrilckurian/e-commerce-system/assets/74858827/6b762d17-9408-4e42-b0ae-ed2a935bd2af">


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
<img width="1393" alt="Screenshot 2024-04-01 at 10 20 03 PM" src="https://github.com/cyrilckurian/e-commerce-system/assets/74858827/801eb02f-624a-4aaa-8b57-4fe54ea7a6f6">


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
<img width="1390" alt="Screenshot 2024-04-01 at 10 21 23 PM" src="https://github.com/cyrilckurian/e-commerce-system/assets/74858827/4a736c9a-b689-476c-978d-fdecc484768a">


### Delete an Order
- **Endpoint**: `DELETE /api/orders/:orderId`
- Delete an order by its unique ID.
<img width="1392" alt="Screenshot 2024-04-01 at 10 21 52 PM" src="https://github.com/cyrilckurian/e-commerce-system/assets/74858827/856728b1-f65e-4a91-86cc-411a83ed97e0">


## Additional Notes

- Ensure to replace `your_jwt_secret_key` in the `.env` file with your own JWT secret key.
- Use a tool like Postman or curl to send requests to the API endpoints.
- Remember to include the JWT token in the Authorization header for protected routes.

---

Feel free to customize this user manual according to your specific endpoints, functionality, and system requirements. This manual provides a basic overview of how users can interact with the E-commerce Microservices System.

Happy shopping! 🛒✨

---

Make sure to replace placeholders such as `your.email@example.com`, `yourpassword`, `user_id_here`, `product_id_1`, `product_id_2`, `your_jwt_secret_key`,`your_mongodb_uri` and other placeholders with actual values or descriptions as needed for your system. This user manual provides an overview of the endpoints and functionalities available in the E-commerce Microservices System and guides users on how to interact with the system for user authentication, product management, and order processing.
