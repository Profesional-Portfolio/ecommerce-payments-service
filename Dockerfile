FROM node:22-alpine

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /usr/src/app

COPY package.json ./

RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 3005

CMD ["pnpm", "start:dev"]
