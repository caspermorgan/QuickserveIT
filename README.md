🌟 QuickServe IT Agency — Full-Stack Web Platform
Fast · Trusted · Local — Digital Services for Rural India

A modern full-stack digital services platform built for creators, schools, and small businesses in rural India.
Includes a React frontend, Node.js/Express backend, bilingual UI, dark/light theme, mega menu, referral system, and powerful APIs.

🏅 Badges & Tech Stack
<p align="center"> <img src="https://img.shields.io/badge/Status-Production%20Ready-00C853?style=for-the-badge" /> <img src="https://img.shields.io/badge/Version-2.0.0-D4AF37?style=for-the-badge" /><br/> <img src="https://img.shields.io/badge/Frontend-React%2018-61DAFB?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/Backend-Node.js-3C873A?style=for-the-badge&logo=node.js&logoColor=white" /> <img src="https://img.shields.io/badge/Styling-TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" /> <img src="https://img.shields.io/badge/Server-Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /><br/> <img src="https://img.shields.io/badge/Deployed%20On-Vercel-000000?style=for-the-badge&logo=vercel" /> <img src="https://img.shields.io/badge/Backend%20Hosted%20On-Render-46E3B7?style=for-the-badge&logo=render" /><br/> <img src="https://img.shields.io/badge/Mobile%20Friendly-Yes-FFB300?style=for-the-badge&logo=android" /> <img src="https://img.shields.io/badge/License-MIT-D4AF37?style=for-the-badge" /> </p>

✨ Overview

QuickServe IT Agency v2.0 is a premium full-stack web application designed to provide affordable, high-quality digital services in rural India.

This platform powers:

🎓 Schools

👨‍🏫 Teachers

🎥 Content creators

🏪 Small businesses

🧑‍💼 Freelancers

Built with a focus on speed, accessibility, clean UI, and real-world usability.

🚀 Key Features
🖥️ Frontend (React + TailwindCSS)

Multi-language UI (English + Hindi)

Dark/Light theme switch

Mega menu navigation

20+ responsive pages

Time-based greeting (Good morning/afternoon/evening)

Founder story + quotes

Case studies & testimonials

QR code referral system

Contact form with API integration

Fully mobile-optimized

⚙️ Backend (Node.js + Express)

Contact form API

Referral tracking API

Server time endpoint

CORS enabled

Helmet security headers

Rate limiting

Clean controller + routes structure

📁 Project Structure
quickserve-it-agency/
│
├── package.json          
├── server.js             
├── routes/
│   └── api.js
│
├── controllers/
│   ├── contactController.js
│   └── referralController.js
│
└── client/
    ├── package.json
    ├── public/
    │     └── index.html
    └── src/
          ├── components/
          ├── pages/
          ├── context/
          ├── hooks/
          ├── utils/
          ├── App.jsx
          └── index.js

⚡ Local Development Setup
1️⃣ Install all dependencies
npm run install-all

2️⃣ Start both frontend + backend
npm run dev

🌐 URLs

Frontend → http://localhost:3000

Backend → http://localhost:5000

🚢 Deployment Guide
🟦 Frontend → Vercel

Upload repo to GitHub

Open Vercel → Import Project

Select client/ folder

Deploy
✨ Your frontend is now LIVE.

🟪 Backend → Render

Login to Render

Create "Web Service"

Connect GitHub repo

Build command:

npm install


Start command:

node server.js


✨ Your backend API is now LIVE.

🔌 API Endpoints
GET
/api/health
/api/server-time
/api/referral/status/:code

POST
/api/contact
/api/referral/track

🎨 Design System

Premium black & gold QuickServe identity

Smooth animations & transitions

Poppins + Inter typography

Modern spacing & shadow system

WCAG-compliant colors

Fully responsive from 320px → 1920px

🧩 Available Scripts
Root (backend)
npm run dev
npm start
npm run server
npm run client
npm run build

Client (frontend)
npm start
npm run build
npm test

🖼️ Screenshots (Optional Section)

Add your images here later:

/screenshots/homepage.png
/screenshots/services.png
/screenshots/referral.png
/screenshots/contact.png

👤 Author

QuickServe IT Agency
Digital Services for Rural India
Founder — VIINOD

📄 License

This project is licensed under the MIT License.
