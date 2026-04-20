# 🔐 MERN Auth — Register / Login / Logout

A complete full-stack authentication system built with the **MERN** stack (MongoDB, Express, React, Node.js) featuring JWT-based auth.

## ✨ Features

- **Register** — Create a new account with hashed password (bcryptjs)
- **Login** — Authenticate and receive a JWT
- **Logout** — Clear session on client (and optional server acknowledgment)
- **Protected Routes** — Dashboard only accessible when logged in
- **JWT Middleware** — Secure API endpoints with Bearer token
- **Persistent Auth** — Token stored in localStorage, verified on app load

## 🏗️ Tech Stack

| Layer     | Tech                           |
|-----------|--------------------------------|
| Database  | MongoDB + Mongoose             |
| Backend   | Node.js + Express.js           |
| Auth      | JWT + bcryptjs                 |
| Frontend  | React 18 + Vite                |
| Routing   | React Router v6                |
| HTTP      | Axios (with interceptors)      |
| Toasts    | react-hot-toast                |

## 📂 Project Structure

```
mern-auth/
├── backend/
│   ├── config/         # DB connection
│   ├── controllers/    # Auth logic
│   ├── middleware/     # JWT protect middleware
│   ├── models/         # User schema
│   ├── routes/         # API routes
│   ├── server.js       # Entry point
│   └── .env.example    # Environment variables template
│
└── frontend/
    └── src/
        ├── components/ # Navbar, PrivateRoute
        ├── context/    # AuthContext (global state)
        ├── pages/      # Home, Login, Register, Dashboard
        └── utils/      # Axios instance
```

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

---

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/mern-auth.git
cd mern-auth
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MONGO_URI and JWT_SECRET
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔌 API Endpoints

| Method | Endpoint           | Access   | Description           |
|--------|--------------------|----------|-----------------------|
| POST   | /api/auth/register | Public   | Register new user     |
| POST   | /api/auth/login    | Public   | Login & get JWT       |
| GET    | /api/auth/me       | Private  | Get current user      |
| POST   | /api/auth/logout   | Private  | Logout (acknowledge)  |

## 🔒 Environment Variables (backend/.env)

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern-auth
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRE=7d
NODE_ENV=development
```

## 📦 Deployment

- **Backend**: Deploy to [Render](https://render.com), [Railway](https://railway.app), or any Node.js host
- **Frontend**: Deploy to [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
- **Database**: Use [MongoDB Atlas](https://www.mongodb.com/atlas) for production

## 📄 License

MIT
