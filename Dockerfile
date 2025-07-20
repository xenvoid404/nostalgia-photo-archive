FROM node:22
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY package.json pnpm*.yaml ./
RUN pnpm install
COPY . .
EXPOSE 3000
CMD ["pnpm", "next", "dev", "--turbopack", "-H", "0.0.0.0", "-p", "3000"]