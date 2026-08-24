# Fresh Bounty

Fresh Bounty is a Web3 bounty platform where creators fund tasks, contributors submit work, and winners claim their rewards on-chain. The application combines a React wallet experience with an Express/MongoDB API that stores bounty metadata, enrolments, submissions, and reward history.

## Features

- Browse bounties by status, category, and tag.
- Connect an EVM wallet with RainbowKit and Wagmi.
- Create funded bounties with single-winner, equal-split, or percentage-split payouts.
- Enrol in a bounty and submit a project link and supporting details.
- Let bounty creators select winners and distribute on-chain rewards.
- Let winners claim their assigned rewards.
- Track user profiles, dashboards, bounty status, submissions, and claims.

## Architecture

```text
frontend/  React + Vite UI, wallet connection, and contract transactions
backend/   Express API + MongoDB persistence and hourly status updates
contract/  Shared smart-contract ABI and deployed-address configuration
```

The frontend writes on-chain transactions through the bounty contract, then syncs the related application data with the API. The checked-in contract configuration has a deployment on **Injective Testnet** (chain ID `1439`); the other listed testnet addresses are placeholders.

## Tech stack

- React 18, Vite, Tailwind CSS, React Router
- RainbowKit, Wagmi, Viem, WalletConnect
- Node.js, Express, MongoDB/Mongoose, node-cron
- Solidity contract ABI shared through the local `contract` package

## Prerequisites

- Node.js 18 or newer
- npm
- A MongoDB database (local or Atlas)
- A WalletConnect project ID for the frontend
- An EVM wallet funded with testnet INJ to use the deployed Injective testnet contract

## Getting started

Install dependencies for the frontend and backend in separate terminals:

```bash
cd frontend
npm install

cd ../backend
npm install
```

Create `frontend/.env`:

```env
VITE_WALLET_CONNECT_PROJECT_ID=your_walletconnect_project_id
```

Create `backend/.env`:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/fresh-bounty
PORT=5000

# Required when querying these networks from the backend.
SEPOLIA_RPC=https://your-sepolia-rpc-url
BASE_RPC=https://your-base-sepolia-rpc-url
OPBNB_RPC=https://your-opbnb-testnet-rpc-url
```

Start the services:

```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2
cd frontend
npm run dev
```

Vite prints the local frontend URL (normally `http://localhost:5173`). The API uses port `5000` unless `PORT` is set.

> **Note:** several frontend API calls currently target the deployed endpoint `https://fresh-bounty.onrender.com`. To run completely locally, move that base URL into a Vite environment variable and update those calls to use it.

## Available scripts

| Directory | Command | Purpose |
| --- | --- | --- |
| `frontend` | `npm run dev` | Run the Vite development server. |
| `frontend` | `npm run build` | Create a production build. |
| `frontend` | `npm run lint` | Lint frontend source files. |
| `frontend` | `npm run preview` | Preview the production build. |
| `backend` | `npm start` | Run the Express API. |
| `backend` | `npm run dev` | Run the API with Nodemon. |

## Main API routes

The API is mounted under `/api` unless noted otherwise.

| Route | Description |
| --- | --- |
| `GET /task` | List bounties with filtering and pagination. |
| `POST /task` | Save a new bounty record. |
| `GET/PATCH/DELETE /task/:id` | Read, update, or remove a bounty. |
| `GET /user/:wallet` | Create or retrieve a wallet user and its activity. |
| `GET /dashboard/:wallet` | Get wallet-specific bounty and submission metrics. |
| `POST /enroll` | Enrol a wallet in a bounty. |
| `POST /submission` | Submit work to a bounty. |
| `POST /task/:id/distribute` | Sync an on-chain winner distribution. |
| `POST /task/:id/claim` | Record a reward claim. |
| `/api/v1/bounty/*` | Alternate controller-based bounty endpoints. |

## Project structure

```text
fresh-bounty/
├── contract/              # ABI, contract address map, and event listener
├── backend/
│   ├── config/            # Database and chain clients
│   ├── routes/            # Bounty, user, enrolment, submission, reward APIs
│   ├── jobs/              # Hourly bounty-status updater
│   └── server.js          # Express entry point
└── frontend/
    └── src/
        ├── pages/         # Landing, dashboard, create, detail, profile pages
        ├── components/    # Layout, wallet, and bounty UI components
        ├── hooks/         # On-chain bounty actions
        └── services/      # Transaction configuration helpers
```

## Contract configuration

The shared package exports `BOUNTY_ABI` and `CONTRACT_ADDRESSES`. Its configured Injective Testnet bounty contract is:

```text
0xc49c0457c656B901324cB7f9b6736D80f1DBD28B
```

Update [`contract/address.js`](contract/address.js) after deploying to another network. The frontend uses this address map to decide which networks can create and interact with bounties.

## Notes for contributors

- Do not commit `.env` files or private RPC URLs.
- Bounty status is derived from `startDate` and `deadline`, and the backend also refreshes statuses hourly.
- The repository currently has no automated test suite. Run `npm run lint` and `npm run build` in `frontend` before opening a change.
