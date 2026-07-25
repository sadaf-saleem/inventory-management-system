# Folder Structure & Architecture Diagram

```
inventory-management-system/
├── client/                     # React Single Page Application (SPA)
│   ├── public/                 # HTML Shell & Assets
│   └── src/
│       ├── components/         # Reusable UI Components (Sidebar, ProtectedRoute)
│       ├── context/            # AuthContext State Management
│       ├── pages/              # Login, Register, Dashboard, Products, Orders, Suppliers
│       ├── services/           # Axios Base Client Setup
│       ├── App.js              # Application Router & Page Declarations
│       ├── App.css             # Global Enterprise Stylesheet
│       └── index.js            # Entry point
├── server/                     # Node.js + Express Backend REST API
│   ├── config/                 # DB Connection & Swagger Config
│   ├── controllers/            # Business Logic & Request Handlers
│   ├── middleware/             # Auth, Role, Error Handler Middlewares
│   ├── models/                 # Mongoose Data Schemas (User, Product, Order, Supplier)
│   ├── routes/                 # Express API Endpoint Routes
│   ├── utils/                  # Code Generator Helper Functions
│   └── server.js               # Express Server Initialization
├── docs/                       # Project Documentation Files
├── api/                        # OpenAPI / Swagger JSON Specification
├── tests/                      # Automated API, UI, and Security Test Files
├── .github/workflows/          # GitHub Actions CI/CD Pipeline
├── docker/                     # MongoDB Database Initialization Scripts
└── docker-compose.yml          # Container Orchestration Specification
```
