FROM node:lts-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

FROM base AS install-deps

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --config.injectWorkspacePackages=true

COPY . .

FROM base AS backend-build

WORKDIR /backend

COPY package.json pnpm-lock.yaml ./
COPY --from=install-deps /app/node_modules ./node_modules

COPY --from=install-deps /app/apps/backend .

RUN pnpx prisma generate
RUN pnpm run --filter backend build

FROM base AS frontend-build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY --from=install-deps /app/node_modules ./node_modules

COPY --from=install-deps /app/apps/frontend .

RUN pnpm install -r --filter frontend

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN pnpm run --filter frontend build

FROM base AS backend

WORKDIR /backend

COPY --from=backend-build /backend/dist ./dist

COPY --from=backend-build /backend/package.json ./package.json
COPY --from=backend-build /backend/node_modules ./node_modules

RUN pnpm prune --prod

COPY --from=backend-build /backend/prisma ./prisma

EXPOSE 8393

CMD ["sh", "-c", "pnpm run db:deploy && pnpm run start:prod"]

FROM base AS frontend

WORKDIR /frontend

COPY --from=frontend-build /app/dist ./dist

COPY --from=frontend-build /app/package.json ./package.json
COPY --from=frontend-build /app/node_modules ./node_modules

RUN pnpm prune --prod

EXPOSE 5173

CMD [ "pnpm", "run", "serve" ]