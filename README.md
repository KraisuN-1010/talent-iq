## Talent IQ

A MERN-stack collaborative coding and interview practice platform with live sessions, code execution, and video UI.

## Features

- Live coding sessions with synchronized editors and streaming
- Run and evaluate code (JDoodle integration)
- User authentication and session management
- Session history and recent sessions list
- Simple video call UI for pair programming / interviews

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js, Express
- Database: MongoDB
- Real-time / streaming: WebRTC / custom stream utilities

## Repository Structure (high-level)

- `backend/` — Express API, models, controllers, middleware
- `frontend/` — React app (Vite)

## Prerequisites

- Node.js (16+ recommended)
- npm or yarn
- MongoDB instance (local or hosted)

## Setup

### Backend

1. Change to the backend folder and install dependencies:

```bash
cd backend
npm install
```

2. Create a `.env` file in `backend/` with required environment variables. Typical variables:

```
MONGO_URI=<your-mongodb-uri>
PORT=5000
JWT_SECRET=<your-jwt-secret>
# If using JDoodle or other exec APIs
JDOODLE_CLIENT_ID=<id>
JDOODLE_CLIENT_SECRET=<secret>
# Any streaming or third-party keys your app requires
STREAM_API_KEY=<key>
```

3. Start the backend (use the script available in `backend/package.json`):

```bash
# development (if available)
npm run dev
# or
npm start
```

### Frontend

1. Change to the frontend folder and install dependencies:

```bash
cd frontend
npm install
```

2. Configure any frontend environment variables if needed (for example `VITE_API_URL` pointing to the backend).

3. Start the frontend dev server:

```bash
npm run dev
```

## Running the full app (example)

Open two terminals and run backend and frontend separately:

```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2
cd frontend
npm run dev
```

Then open the frontend URL reported by Vite (usually `http://localhost:5173`).

## Notes

- Inspect `backend/` for API routes and environment usage (see `backend/src/` files).
- Inspect `frontend/src/` for components and utilities (`api/`, `lib/`, `hooks/`).

## Contributing

Contributions are welcome. Please open issues for bugs or feature requests and submit pull requests with descriptive commit messages.

## License

This project does not include a license by default. Add a `LICENSE` file if you wish to specify one.
