# Enterprise Inventory & Order Management System

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Docker](https://img.shields.io/badge/docker-ready-blue.svg)

An enterprise-grade, scalable MERN stack web application built for multi-branch retail organizations to manage products, suppliers, inventory levels, and customer orders. Designed with robust DevOps practices including Docker containerization, GitHub Actions CI/CD pipelines, automated testing, and OpenAPI Swagger documentation.

---

## 🌟 Key Features

### 🔐 Authentication & Role-Based Access Control (RBAC)
- **JWT Authentication**: Secure user login, signup, and token-based state management.
- **Password Security**: Bcrypt salted hashing with 10 rounds.
- **Granular Roles**:
  - `Admin`: Full system access (User management, Products, Orders, Suppliers, Analytics).
  - `Manager`: Product & Inventory CRUD, Order management, Supplier management.
  - `Employee`: View products, create/process orders, view low stock alerts.

### 📦 Product & Inventory Management
- **Automated Product Codes**: Auto-generated sequential codes with pattern `ASE-PRD-XXXX`.
- **Validation Rules**:
  - Selling price cannot be lower than purchase price.
  - Quantity cannot be negative.
  - Unique product code constraint.
- **Low Stock Guardrails**: Automatic threshold tracking and low-stock warnings.

### 🛒 Order Processing & Logic
- **Automated Stock Deduction**: Real-time deduction of inventory items upon order creation.
- **Stock Availability Verification**: Order placement is rejected if requested quantities exceed stock.
- **Order Status Lifecycle**: Track orders across `Pending`, `Processing`, `Delivered`, and `Cancelled`.
- **Automatic Bill Calculation**: Server-side aggregate billing validation to ensure transaction integrity.

### 📊 Interactive Dashboard
- Summary widgets for **Total Products**, **Low Stock Alerts**, **Out of Stock**, **Suppliers**, **Active Orders**, and **Total Inventory Value ($)**.
- Category distribution and stock visualization components.
- Integrated multi-field search, status filtering, and dynamic pagination.

---

## 🏗️ System Architecture

```
inventory-management-system/
├── client/                 # React.js SPA Frontend (Nginx in Docker)
├── server/                 # Node.js + Express REST API Backend
├── docs/                   # Architectural & Deployment Documentation
├── api/                    # OpenAPI / Swagger Specification
├── tests/                  # Test Suites (API, UI, Security)
├── .github/workflows/      # CI/CD GitHub Actions Workflow
├── docker/                 # Database initialization & Docker config
└── docker-compose.yml      # Multi-container Orchestration
```

---

## 🚀 Quick Start (Docker Compose)

The easiest way to run the entire stack (Frontend, Backend, MongoDB) is using Docker Compose:

```bash
# 1. Clone the repository
git clone https://github.com/allied-software-engineers/inventory-management-system.git
cd inventory-management-system

# 2. Start all services via Docker Compose
docker compose up --build -d

# 3. Access the services:
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
# Swagger API Docs: http://localhost:5000/api-docs
```

---

## 🛠️ Local Development Setup

### Backend (Server)
```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### Frontend (Client)
```bash
cd client
npm install
npm start
```

---

## 🧪 Testing

Run automated API, UI, and Security test suites:

```bash
# Run backend unit & integration tests
cd server
npm test

# Run test suites in project test folder
cd ../tests
npm test
```

---

## 📑 Documentation Links
- [API Documentation (Markdown)](docs/API_DOCUMENTATION.md)
- [Deployment Guide](docs/DEPLOYMENT_GUIDE.md)
- [Installation Guide](docs/INSTALLATION_GUIDE.md)
- [Git Workflow & Branching Strategy](docs/GIT_WORKFLOW.md)
- [Security & Architecture Overview](docs/SECURITY_AND_ARCHITECTURE.md)
- [Test Cases Report](tests/TEST_CASES_REPORT.md)

---

## 📄 License
This project is developed under the **MIT License**. Created for Allied Software Engineers Internship Program Task 5.
