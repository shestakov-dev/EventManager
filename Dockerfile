FROM node:lts-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

FROM base AS build

WORKDIR /app

COPY . .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

RUN pnpm run -r build

FROM base AS backend

WORKDIR /backend

COPY --from=build /app/apps/backend/package.json ./package.json
COPY --from=build /app/pnpm-lock.yaml ./pnpm-lock.yaml

COPY --from=build /app/apps/backend/prisma ./prisma

RUN pnpm install --prod

COPY --from=build /app/apps/backend/dist ./dist

EXPOSE 8393

CMD ["sh", "-c", "pnpm run db:deploy && pnpm run start:prod"]

FROM base AS frontend

WORKDIR /frontend

COPY --from=build /app/apps/frontend/package.json ./package.json
COPY --from=build /app/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --prod

COPY --from=build /app/apps/frontend/dist ./dist

EXPOSE 5173

CMD [ "pnpm", "run", "serve" ]