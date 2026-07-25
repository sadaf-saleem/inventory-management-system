# Local Installation Guide

## Requirements
- Node.js v18.x or higher
- MongoDB Server running locally on port 27017 or MongoDB Atlas connection URL
- npm or yarn package manager

---

## Backend Setup

1. Navigate to server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set environment variables in `.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/inventory_db
   JWT_SECRET=super_secret_enterprise_key_2026_ase
   ```
4. Start development server:
   ```bash
   npm run dev
   ```

---

## Frontend Setup

1. Open new terminal, navigate to client folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start React application:
   ```bash
   npm start
   ```
4. Open browser at `http://localhost:3000`
