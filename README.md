# Enterprise Inventory & Order Management System

Enterprise-grade **MERN stack** application for managing products, suppliers, and customer orders — built as part of the Allied Software Engineers Web Development & DevOps Internship (Task 5).

**Repository:** https://github.com/sadaf-saleem/inventory-management-system.git
**Release:** `v1.0.0`

---

## 🚀 Features

- **Authentication & Security**
  - JWT-based stateless authentication
  - Password hashing with bcrypt
  - Role-Based Access Control (Admin, Manager, Employee)
- **Product & Stock Management**
  - Auto-generated product codes (e.g. `ASE-PRD-0001`)
  - Selling price validation (Selling Price ≥ Purchase Price)
  - Category filtering, search, and pagination
- **Order Management**
  - Order lifecycle: Pending → Processing → Delivered / Cancelled
  - Automatic inventory deduction on order placement
  - Stock-availability check before order confirmation
- **Executive Dashboard**
  - Live KPIs: total products, low stock, out of stock, suppliers, orders, inventory value
  - Category breakdown charts
- **Supplier Directory**
  - Supplier contact management

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | React.js                             |
| Backend    | Node.js, Express.js                  |
| Database   | MongoDB                              |
| Auth       | JWT, bcrypt                          |
| API Docs   | Swagger / OpenAPI 3.0                |
| CI/CD      | GitHub Actions                       |
| Containers | Docker, Docker Compose               |

---

## 📁 Repository Structure

```
inventory-management-system/
├── client/               # React frontend
├── server/               # Node/Express backend
├── docs/                 # Architecture & setup guides
├── api/                  # API documentation (Swagger)
├── tests/                # API, UI, and security test cases
├── .github/workflows/    # CI/CD pipeline (ci-cd.yml)
├── docker/               # Dockerfiles
├── docker-compose.yml
├── README.md
├── CHANGELOG.md
└── LICENSE
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)
- Docker & Docker Compose (optional, for containerized run)

### 1. Clone the repository
```bash
git clone https://github.com/sadaf-saleem/inventory-management-system.git
cd inventory-management-system
```

### 2. Backend setup
```bash
cd server
npm install
npm run dev
```
Backend runs on `http://localhost:5000`

### 3. Frontend setup
```bash
cd client
npm install
npm start
```
Frontend runs on `http://localhost:3000`

### 4. Environment variables
Create a `.env` file inside `server/` with:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/inventory-management
JWT_SECRET=your_jwt_secret
```

---

## 🐳 Run with Docker

```bash
docker compose up
```

This builds and starts both the frontend and backend containers along with MongoDB, using the provided `Dockerfile`s and `docker-compose.yml`.

---

## 📖 API Documentation

Interactive REST API documentation (OpenAPI 3.0) is available via Swagger UI once the backend is running:

```
http://localhost:5000/api-docs
```

Covers all endpoints under `/auth`, `/products`, `/orders`, and `/dashboard`.

---

## 🌳 Git Workflow

This project follows the **Git Flow** branching model:

- `main` — production-ready code
- `development` — active development
- `release-v1.0` — release staging
- `feature-authentication`, `feature-products`, `feature-orders` — feature branches
- `hotfix` — urgent production fixes

Conventional commit messages are used throughout (`feat:`, `fix:`, `ci:`, etc.), with the official release tagged as `v1.0.0`.

---

## 🔄 CI/CD Pipeline

A GitHub Actions workflow (`.github/workflows/ci-cd.yml`) automatically:
- Installs dependencies
- Runs ESLint
- Runs unit tests
- Builds the React frontend
- Builds the backend
- Produces production artifacts

Runs on every push/PR to `main`, `development`, and `release-v1.0`.

---

## 🧪 Testing

- 15+ API test cases
- 10 UI test cases
- 5 security test cases

---

## 📜 License

See [LICENSE](./LICENSE) for details.

---

## 👤 Author

**Sadaf Saleem**
Web Development & DevOps Intern — Allied Software Engineers