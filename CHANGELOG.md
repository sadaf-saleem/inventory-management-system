# Changelog

All notable changes to the Enterprise Inventory & Order Management System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-07-09

### Added
- **Authentication & RBAC System**: JWT-based login/registration with Admin, Manager, and Employee role enforcement.
- **Product Management Engine**: Automatic unique code generation (`ASE-PRD-xxxx`), cost/selling price validation, category assignment, supplier mapping, and low-stock detection.
- **Order Processing & Inventory Synchronization**: Dynamic order placement with real-time stock deduction, inventory availability guardrails, and total calculation.
- **Executive Inventory Dashboard**: Real-time KPI summary widgets (Total Products, Low Stock, Out of Stock, Total Suppliers, Active Orders, Total Inventory Value) and interactive visual charts.
- **DevOps Infrastructure**:
  - Multi-stage Dockerfiles for Client (Nginx) and Server (Node.js).
  - Production `docker-compose.yml` with MongoDB persistence.
  - Complete GitHub Actions CI/CD pipeline (`ci-cd.yml`) covering linting, testing, and Docker image builds.
  - Full OpenAPI 3.0 / Swagger documentation.
  - Comprehensive Test Suite comprising 15 API, 10 UI, and 5 Security test cases.
