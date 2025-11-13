# package.json Files Guide - QuickServe IT Agency v2.0

## TWO PACKAGE.JSON FILES IN YOUR PROJECT

Your QuickServe IT project has **TWO separate package.json files**:

### 1. **ROOT package.json** (Server/Backend)
**Location:** `quickserve-it-agency/package.json`

**Purpose:** Manages server dependencies and commands for running both frontend and backend

**Key Scripts:**
```bash
npm run install-all  # Install dependencies for both server and client
npm run dev          # Start both server (5000) and client (3000)
npm run server       # Start only Node.js backend
npm run client       # Start only React frontend
npm run build        # Build React app for production
npm start            # Start production server
```

**Key Dependencies:**
- `express` - Web framework
- `cors` - Cross-origin requests
- `helmet` - Security headers
- `dotenv` - Environment variables
- `uuid` - ID generation
- `express-rate-limit` - Rate limiting

**Dev Tools:**
- `nodemon` - Auto-reload on file changes
- `concurrently` - Run multiple scripts simultaneously

---

### 2. **CLIENT package.json** (React/Frontend)
**Location:** `quickserve-it-agency/client/package.json`

**Purpose:** Manages React and frontend dependencies

**Key Scripts:**
```bash
npm start       # Start development server on port 3000
npm run build   # Build for production
npm test        # Run tests
```

**Key Dependencies:**
- `react` & `react-dom` - UI library
- `react-router-dom` - Client-side routing
- `axios` - HTTP requests
- `qrcode.react` - QR code generation
- `tailwindcss` - Styling

**Proxy Setting:**  
Routes API calls to `http://localhost:5000`

---

## COMPLETE PROJECT STRUCTURE

```
quickserve-it-agency/
├── package.json          # ROOT (Backend/Server)
├── server.js             # Main server file
├── .env.example
├── README.md
├── setup.sh
├── client/               # React Frontend Folder
│   ├── package.json      # CLIENT (React)
│   ├── tailwind.config.js
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── index.js
│   └── public/
├── routes/
│   └── api.js
├── controllers/
│   ├── contactController.js
│   └── referralController.js
└── node_modules/         # Backend dependencies
    └── client/node_modules/  # React dependencies
```

---

## HOW TO USE

### Initial Setup:
```bash
# Navigate to project root
cd quickserve-it-agency

# Install ALL dependencies (both server and client)
npm run install-all

# This runs:
# 1. npm install (installs server dependencies)
# 2. cd client && npm install (installs client dependencies)
```

### For Development:
```bash
# From root directory, start both frontend and backend
npm run dev

# This starts:
# - Backend server on http://localhost:5000
# - Frontend app on http://localhost:3000
```

### For Production:
```bash
# Build React app
npm run build

# Start production server
npm start

# Server runs on http://localhost:5000
# Serves both API and static React files
```

---

## HOW DEPENDENCIES WORK

**Backend Dependencies (Root):**
When you run `npm install` in root:
- Creates `node_modules/` in root
- Installs Express, Helmet, CORS, etc.
- Used by `server.js`

**Frontend Dependencies (Client):**
When you run `npm install` in `client/`:
- Creates `node_modules/` in client folder
- Installs React, React Router, Tailwind, etc.
- Used by React application

**Both:**
When you run `npm run install-all`:
- Installs BOTH sets of dependencies
- Creates TWO separate `node_modules/` folders
- Takes 3-5 minutes total

---

## TROUBLESHOOTING

### `npm` command not found:
```bash
# Install Node.js from https://nodejs.org
# Check installation
node --version
npm --version
```

### Dependencies not installed:
```bash
# From root directory
npm run install-all

# Or separately
npm install
cd client && npm install
```

### Port 3000 or 5000 already in use:
```bash
# Find and kill process
lsof -i :3000
lsof -i :5000
kill -9 <PID>

# Or use different ports
PORT=3001 npm run client
PORT=5001 npm run server
```

### Module not found:
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules client/node_modules
npm run install-all
```

---

## QUICK COMMANDS REFERENCE

| Command | Location | Purpose |
|---------|----------|----------|
| `npm run install-all` | Root | Install all dependencies |
| `npm run dev` | Root | Start both frontend & backend |
| `npm run server` | Root | Start only backend |
| `npm run client` | Root | Start only frontend |
| `npm run build` | Root | Build React app |
| `npm start` | Root | Start production server |
| `npm start` | client/ | Start React dev server |
| `npm run build` | client/ | Build React for production |

---

## NEXT STEPS

✅ **Setup Checklist:**
- Downloaded and extracted ZIP
- Navigated to `quickserve-it-agency` folder
- Ran `npm run install-all`
- Verified both `node_modules/` folders exist
- Ran `npm run dev`
- Frontend loads on `http://localhost:3000`
- Backend responds on `http://localhost:5000`
- Contact form API works
- Operating hours display correctly

---

**Your package.json files are ready to go!**  
*Fast. Trusted. Local.*
