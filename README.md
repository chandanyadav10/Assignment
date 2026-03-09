# Node.js Machine Test – REST APIs

This project is developed as part of a machine test assignment.  
All APIs are implemented using **Node.js** and follow the specifications shared in the API sheet.

The project includes proper validations, encrypted password storage, and JWT-based authentication.  
All APIs are demonstrated using a Postman collection.

---

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- Postman

---

## 🔐 Features
- User Registration & Login
- Password encryption using bcrypt
- JWT token-based authentication
- Protected routes using middleware
- Proper request validations
- Clean and modular code structure
- Postman collection for API demo

---

## 📁 Project Structure
src/

├── controllers/

├── db/

├── middleware/

├── models/

├── routes/

└── server.js

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

---

## ▶️ How to Run the Project

Clone the repository and install dependencies:

```bash
git clone https://github.com/chandanyadav10/Assignment.git
cd Assignment
npm install
npm start

