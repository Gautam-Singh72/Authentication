# Authentication Learning Project

This repository is a simple Node.js and Express authentication project built to practice and showcase the basics of user authentication.

## What this project demonstrates

- User registration
- JWT-based authentication
- Cookie-based token storage
- Protected route access
- MongoDB connection with Mongoose

## Project structure

- `server.js` - starts the server
- `src/app.js` - sets up Express app and routes
- `src/controllers/auth.controller.js` - handles authentication logic
- `src/routes/auth.routes.js` - authentication endpoints
- `src/routes/post.routes.js` - example protected route
- `src/models/user.model.js` - user schema
- `src/db/db.js` - MongoDB connection setup

## Tech stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- cookie-parser
- dotenv

## Getting started

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd Authentication
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root folder and add:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. Start the server
   ```bash
   node server.js
   ```

## Example endpoints

### Register user
```http
POST /api/auth/register
```

### Create post (protected)
```http
POST /api/post/createpost
```

## Learning notes

This project was created to learn how authentication works in a real backend application:

- A user registers and receives a JWT
- The token is stored in a cookie
- The protected route checks the token before allowing access
- The server verifies the token using a secret key

## Future improvements

- Add login endpoint
- Add logout endpoint
- Add password hashing
- Add refresh tokens
- Add proper error handling and validation

## License

This project is for learning purposes.

