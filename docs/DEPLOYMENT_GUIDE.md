# Production Deployment Guide

## Prerequisites
- Server running Ubuntu 22.04 LTS / Debian
- Docker Engine v24.0+ & Docker Compose v2.20+
- Domain name pointed to host IP (optional for TLS)

---

## Deployment Steps

1. **Clone Repository**:
   ```bash
   git clone https://github.com/allied-software-engineers/inventory-management-system.git
   cd inventory-management-system
   ```

2. **Configure Environment Variables**:
   Update `docker-compose.yml` or standard `.env` with production secrets:
   ```env
   JWT_SECRET=your_ultra_secure_random_string_2026
   MONGO_URI=mongodb://admin:adminpassword@mongodb:27017/inventory_db?authSource=admin
   ```

3. **Launch Docker Services**:
   ```bash
   docker compose up -d --build
   ```

4. **Verify Health Status**:
   ```bash
   docker compose ps
   curl http://localhost:5000/health
   ```
