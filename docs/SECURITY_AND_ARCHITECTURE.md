# Security Measures & Architectural Decisions

## 1. Security Architecture
- **Password Security**: Passwords are standard-hashed using `bcryptjs` with a salt factor of 10 prior to DB persistence.
- **Stateless Authentication**: Session state managed via JSON Web Tokens (JWT) signed with HMAC-SHA256.
- **Privilege Separation (RBAC)**:
  - Deletion of records restricted exclusively to `Admin`.
  - Creation/Modification allowed for `Admin` and `Manager`.
  - Order processing available across all roles.
- **Database Injection Defense**: Parameterized queries through Mongoose ORM defend against NoSQL injection vectors.

## 2. Business Logic Integrity
- **Price Safeguards**: Schema-level hook verifies that `sellingPrice >= purchasePrice`.
- **Stock Guardrails**: Server-side stock check enforces that order items cannot exceed existing product quantities, accompanied by atomic subtraction.
