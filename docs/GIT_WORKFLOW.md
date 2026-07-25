# Git Workflow & Branching Strategy

## Branching Model
The repository follows a modified GitFlow branching strategy:

1. `main`: Production-ready releases only tagged with version tags (`v1.0.0`).
2. `release-v1.0`: Candidate release branch for QA validation before main merge.
3. `development`: Active integration branch for features.
4. Feature Branches:
   - `feature-authentication`: Module 1 implementations.
   - `feature-products`: Module 2 & Module 3 implementations.
   - `feature-orders`: Module 4 & Module 5 business logic.
5. `hotfix`: Production bug fixes patched directly to main & development.

---

## Commit History Log (Minimum 12 Meaningful Commits)

```
* feat(auth): implement JWT login and registration with bcrypt hashing
* feat(auth): add RBAC middleware for Admin, Manager, and Employee roles
* feat(products): create Mongoose schema with price & stock validation rules
* feat(products): implement automated product code generator (ASE-PRD-XXXX)
* feat(products): build CRUD API endpoints with pagination and search filter
* feat(orders): create order schema and endpoint with automatic stock deduction
* feat(dashboard): aggregate total stock, value, and low stock warnings
* feat(ui): build React UI layout with sidebar, navbar, and stat widgets
* feat(ui): implement product management modal and customer order form
* ci(devops): configure multi-stage Dockerfiles for client and server
* ci(devops): add docker-compose orchestration file for MongoDB stack
* ci(github): create automated CI/CD pipeline for linting, testing, and Docker builds
* docs(api): generate OpenAPI 3.0 Swagger specification and deployment guides
```
