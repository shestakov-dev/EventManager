# Nemetschek Bulgaria – IT Events Management Monorepo

This monorepo contains a system for managing IT events, created as an exercise project for a Nemetschek Bulgaria Speed IT Up School Edition application. It includes:

- **`apps/backend`** – NestJS backend for managing IT events
- **`apps/frontend`** – React frontend for displaying events

You can find this repo's GitHub repository [here](https://github.com/shestakov-dev/EventManager)

## Table of Contents

- [Project Context](#project-context)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Quick Start (Recommended)](#quick-start-recommended)
    - [Manual Setup](#manual-setup)
- [Accessing the Application](#accessing-the-application)
- [Project Structure](#project-structure)
- [Features](#features)
- [Contributers](#contributers)

## Project Context

This project was created to help manage and display information about IT conferences and events. Each event includes:

- Event name
- City
- Date
- Type (conference, training, workshop, etc.)
- Lecturer(s)

The system supports sorting and filtering events by title, date, type, city, or any combination. Special sorting rules are applied for certain cities and event names.

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

## Accessing the Application

- **Backend API:** [http://localhost:8393](http://localhost:8393)
    - Swagger UI: [http://localhost:8393/api](http://localhost:8393/api)
    - Swagger JSON: [http://localhost:8393/api-json](http://localhost:8393/api-json)
    - Swagger YAML: [http://localhost:8393/api-yaml](http://localhost:8393/api-yaml)
- **Frontend App:** [http://localhost:5173](http://localhost:5173)

---

## Project Structure

```
apps/
  backend/   # NestJS API
  frontend/  # React app
docker-compose.yaml
```

---

## Features

- Manage and display IT events
- Sort and filter events by multiple criteria
- Special filtering for specific cities and event names

## Contributers

- [Alexander Shestakov](https://github.com/shestakov-dev)
