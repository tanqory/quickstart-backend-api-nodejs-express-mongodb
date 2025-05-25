# Quickstart Backend API - Node.js Express MongoDB

A production-ready REST API template with authentication and CRUD operations using Node.js, Express, and MongoDB.

## 🚀 Features

- **Authentication**: JWT-based user registration and login
- **CRUD Operations**: Complete item management system
- **Security**: Password hashing, protected routes, input validation
- **Architecture**: Feature-based structure with services, controllers, and routes
- **Error Handling**: Comprehensive error handling and validation
- **Database**: MongoDB with Mongoose ODM

## 📋 Prerequisites

- Node.js (v20+)
- MongoDB (local or Atlas)
- npm or yarn

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/tanqory/quickstart-backend-api-nodejs-express-mongodb.git
   cd quickstart-backend-api-nodejs-express-mongodb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## 📚 API Endpoints

### Authentication
```
POST /api/auth/register  - Register new user
POST /api/auth/login     - Login user
```

### Items (Protected)
```
GET    /api/items        - Get all items
GET    /api/items/:id    - Get single item
POST   /api/items        - Create new item
PUT    /api/items/:id    - Update item
DELETE /api/items/:id    - Delete item
```

### Health Check
```
GET /api/health          - Server health status
```

## 🔧 Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/myapp
JWT_SECRET=your_super_secret_jwt_key_here
PORT=3000
NODE_ENV=development
```

## 🏗️ Project Structure

```
├── api-users/           # User authentication module
├── api-items/           # Item management module
├── src/
│   ├── config/         # Database configuration
│   ├── middleware/     # Custom middleware
│   ├── models/         # Mongoose models
│   └── utils/          # Utility functions
├── server.js           # Application entry point
└── package.json
```

## 🧪 Testing the API

Use Postman, Thunder Client, or curl to test the endpoints:

### Register User
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Create Item (with JWT token)
```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "Sample Item",
    "description": "This is a sample item",
    "price": 99.99
  }'
```

## 📄 License

MIT License - feel free to use this template for your projects!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

If you have any questions or issues, please open an issue on GitHub.
