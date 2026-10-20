# Node.js App

A minimal, dependency-free Node.js HTTP application.

## Requirements

- Node.js 20 or newer

## Run

```sh
npm start
```

The server listens on port `3000` by default. Set `PORT` to use a different
port:

```sh
PORT=8080 npm start
```

For development with automatic restarts:

```sh
npm run dev
```

## Endpoints

- `GET /health` — returns `{"status":"ok"}`.
- Other paths return a JSON `404`.

## Test

```sh
npm test
```
# githubActions-CI-CD
