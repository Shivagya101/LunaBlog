# 🌙 LunaBlog — Tranquility Base Hotel & Casino  
Modern, AI-powered lunar blogging platform

![React](https://img.shields.io/badge/React-18+-61dafb?logo=react&style=flat)
![Node](https://img.shields.io/badge/Node.js-18+-339933?logo=nodedotjs&style=flat)
![Express](https://img.shields.io/badge/Express-4+-000000?logo=express&style=flat)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3+-38bdf8?logo=tailwindcss&style=flat)
![MongoDB](https://img.shields.io/badge/MongoDB-6+-47a248?logo=mongodb&style=flat)

A retro-futuristic blogging suite inspired by **Arctic Monkeys’**  
_**Tranquility Base Hotel & Casino**_. Craft lunar dispatches, generate content with AI, and manage it all from a sleek moonbase console.

---

## ✨ Features

### 🚀 Core
| Feature | Description |
|---------|-------------|
| **Rich-Text Blogging** | Quill.js editor with Orbitron styling |
| **AI Content Generation** | Google Gemini endpoint for instant copy |
| **Modern UI/UX** | Tailwind + Framer Motion glass-panel design |
| **Mobile-First** | 100% responsive |
| **Smart Search** | Real-time filtering |
| **Categories** | Organize posts by lunar sector |
| **Comment System** | With approval workflow |

### 🔐 Admin Panel
| Feature | Description |
|---------|-------------|
| **JWT Login** | Secure auth for admins |
| **Dashboard** | Blog / comment / draft stats |
| **CRUD Blogs** | Create · edit · delete · publish toggle |
| **Comment Moderation** | Approve / remove |
| **Image Upload** | ImageKit optimization |

---

## 🛠️ Tech Stack

| Layer      | Tech |
|------------|------|
| **Frontend** | React · Vite · Tailwind CSS · React Router · Quill.js · Framer Motion |
| **Backend**  | Node.js · Express · MongoDB + Mongoose · JWT · Multer · CORS |
| **AI / Services** | Google Gemini · ImageKit · Vercel (frontend) · Render (API) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- A MongoDB Atlas cluster
- ImageKit & Google Gemini API keys

### Installation
```bash
git clone https://github.com/Shivagya101/LunaBlog.git
cd LunaBlog
Backend
bash
Copy
Edit
cd server
npm install
Frontend
bash
Copy
Edit
cd ../client
npm install
Environment Variables
<details> <summary><code>server/.env</code></summary>
env
Copy
Edit
PORT=3000
MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<super_secret>
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=<your_admin_password>
GEMINI_API_KEY=<your_gemini_api_key>
IMAGEKIT_PUBLIC_KEY=<your_imagekit_public_key>
IMAGEKIT_PRIVATE_KEY=<your_imagekit_private_key>
IMAGEKIT_URL_ENDPOINT=<your_imagekit_url_endpoint>
</details> <details> <summary><code>client/.env</code></summary>
env
Copy
Edit
VITE_BASE_URL=http://localhost:3000
</details>
Run Locally
bash
Copy
Edit
# backend
cd server
npm start

# frontend (in new terminal)
cd client
npm run dev
# open http://localhost:5173
📁 Project Structure
pgsql
Copy
Edit
LunaBlog/
├─ client/          # React app
│  ├─ public/
│  ├─ src/
│  │  ├─ assets/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ context/
│  │  └─ main.jsx
│  └─ package.json
├─ server/          # Node API
│  ├─ configs/
│  ├─ controllers/
│  ├─ middleware/
│  ├─ models/
│  ├─ routes/
│  └─ server.js
└─ README.md
🎯 API Endpoints
📝 Blog Routes
GET /api/blog/all — List all published blogs

GET /api/blog/:blogId — Get single blog

POST /api/blog/add — Add new blog (Admin)

POST /api/blog/delete — Delete blog (Admin)

POST /api/blog/toggle-publish — Toggle publish status (Admin)

POST /api/blog/add-comment — Add comment to blog

POST /api/blog/comments — Get blog comments

POST /api/blog/generate — Generate AI content (Admin)

🔐 Admin Routes
POST /api/admin/login — Admin login

GET /api/admin/blogs — Get all blogs (Admin)

GET /api/admin/comments — Get all comments (Admin)

GET /api/admin/dashboard — Dashboard data

POST /api/admin/approve-comment — Approve comment

POST /api/admin/delete-comment — Delete comment

🚀 Deployment
Frontend (Vercel)
Import your GitHub repo into Vercel

Set project root to /client

Build command: npm run build

Output directory: dist

Add VITE_BASE_URL as an environment variable

Deploy 🎉

Backend (Render or Railway)
Create a new Web Service

Point to /server folder

Set build command: npm install

Start command: npm start

Add all server/.env variables

Deploy 🚀

🤝 Contributing
Contributions are welcome!

Fork the repo

Create a branch: git checkout -b feat/yourFeature

Commit: git commit -m "feat: add cool thing"

Push: git push origin feat/yourFeature

Open a Pull Request

📄 License
This project is licensed under the MIT License.

🙏 Acknowledgements
🎵 Tranquility Base Hotel & Casino — for the celestial vibe

🤖 Google Gemini — for AI content magic

🖼️ ImageKit — for image optimization

💻 Open source — for every library and inspiration

“Live from the Information-Action Ratio Terminal…”
Welcome to LunaBlog 🌌