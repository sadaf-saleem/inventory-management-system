# REST API Documentation

## Overview
The Enterprise Inventory & Order Management System provides a RESTful JSON API secured via JWT tokens.

## Base URL
`http://localhost:5000/api`

## Authentication
All requests to protected endpoints require an `Authorization` HTTP header formatted as:
`Authorization: Bearer <your_jwt_token>`

---

## Endpoint Specifications

### 1. Authentication
- `POST /auth/register` - Create account (`name`, `email`, `password`, `role`)
- `POST /auth/login` - Authenticate (`email`, `password`)
- `GET /auth/me` - Retrieve current token user profile

### 2. Product Management
- `GET /products` - Get paginated products (`search`, `category`, `page`, `limit`)
- `GET /products/:id` - Get product details
- `POST /products` - Create product (*Admin*, *Manager* required)
- `PUT /products/:id` - Update product (*Admin*, *Manager* required)
- `DELETE /products/:id` - Delete product (*Admin* required)

### 3. Order Processing
- `GET /orders` - Fetch orders history
- `POST /orders` - Place customer order (auto deducts stock)
- `PUT /orders/:id/status` - Update status (*Pending*, *Processing*, *Delivered*, *Cancelled*)

### 4. Dashboard Analytics
- `GET /dashboard/stats` - Fetch aggregate KPI metrics
