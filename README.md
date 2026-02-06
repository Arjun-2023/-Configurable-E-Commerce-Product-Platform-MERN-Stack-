$$ Configurable E-Commerce Product Platform (MERN Stack)

A full-stack MERN application demonstrating authentication, role-based authorization, admin-controlled product management, and backend-driven UI customization.
This project simulates a no-code e-commerce platform, where non-technical admins can control product appearance and behavior directly from the backend 
without modifying frontend code.

->Key Features
-Authentication & Authorization
-User signup and login with JWT authentication
-Secure password hashing using bcrypt
-Protected routes using middleware
-Role-Based Access Control (Admin / User)

->Product Management
-Admin-only product creation
-Public product listing API
-Products stored in MongoDB with UI configuration

->Backend-Driven UI
Each product includes UI configuration stored in the database:
-Layout (default / list)
-Background color
-Action button color
-Price visibility toggle
Frontend components dynamically render based on this configuration — enabling no-code style customization.

$ Tech Stack
->Frontend
-React (Create React App)
-Axios
-CSS

->Backend
-Node.js
-Express.js
-MongoDB Atlas
-JWT
-bcrypt

$  Architecture Overview
React Frontend
     ↓
Axios (API Integration)
     ↓
Express REST APIs
     ↓
MongoDB Atlas

$ API Endpoints
 
->Authentication
POST /api/auth/signup – Register a user
POST /api/auth/login – Login and receive JWT

->Products
GET /api/products – Fetch all products (Public)
POST /api/products – Create product (Admin only)

$ Example UI Configuration 
{
  "layout": "list",
  "backgroundColor": "#f9fafb",
  "buttonColor": "#16a34a",
  "showPrice": false
}

$ Run Locally
->Backend
Run Locally
Backend

->FrontEnd
cd frontend
npm install
npm start


Author

Arjun Yadav
Aspiring Full-Stack Developer



