# Nemetschek Bulgaria – IT Events Management Monorepo

This monorepo contains a system for managing IT events, created as an exercise project for a Nemetschek Bulgaria Speed IT Up School Edition application. It includes:

- **`apps/backend`** – NestJS backend for managing IT events
- **`apps/frontend`** – React frontend for displaying events

## Project Context

This project was created to help manage and display information about IT conferences and events. Each event includes:

- Event name
- City
- Date
- Type (conference, training, workshop, etc.)
- Speaker(s)

The system supports sorting events by title, date, type, city, or any combination. Special sorting rules are applied for certain cities and event names.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22.16.0 LTS recommended)
- [pnpm](https://pnpm.io/) (v10.11.1)
- [Docker](https://www.docker.com/) (for containerization)
- [Docker Compose](https://docs.docker.com/compose/)

### Quick Start (Recommended)

> **Note:**  
> Before starting, create a `.env` file in the project root by copying the provided `.env.example` file.
> Adjust the values as needed for your environment.

The easiest way to start the project is with Docker Compose:

```bash
docker-compose up --build
```

This will start both the backend and frontend services.

### Manual Setup

If you prefer running locally without Docker:

1. **Install dependencies:**

    ```bash
    pnpm install
    ```

2. **Set up environment variables for the backend:**

    Create a `.env` file in `apps/backend` by copying `apps/backend/.env.example` and updating it with your actual Postgres connection string.

    ```
    cp apps/backend/.env.example apps/backend/.env
    # Edit apps/backend/.env as needed
    ```

3. **Start the backend:**

    ```bash
    pnpm --filter backend start:dev
    ```

4. **Start the frontend:**

    ```bash
    pnpm --filter frontend dev
    ```

---

## Project Structure

```
apps/
  backend/   # NestJS API
  frontend/  # React app
packages/    # Shared code
docker-compose.yml
```

---

## Features

- Manage and display IT events
- Sort events by multiple criteria
- Special sorting for specific cities and event names
