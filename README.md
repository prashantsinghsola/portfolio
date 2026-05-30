# Prashant Portfolio

Full-stack portfolio built with React + Vite, Tailwind CSS, Framer Motion, Node.js, Express, and MongoDB.

---

## 📁 Project Structure

```
portfolio/
├── frontend/     → React + Vite  (deploy → Vercel / Netlify)
└── backend/      → Express API   (deploy → Render / Railway)
```

---

## ⚡ Quick Start (Local Dev)

### 1. Backend
```bash
cd backend
npm install
cp .env.example .env       # fill in your MONGO_URI
npm run dev                # runs on http://localhost:5000
```

### 2. Frontend
```bash
cd frontend
npm install
cp .env.example .env.local # set VITE_API_URL=http://localhost:5000
npm run dev                # runs on http://localhost:5173
```

### 3. Seed MongoDB (optional)
```bash
cd backend
node seed.js   # inserts 6 sample projects
```

---

## 🌍 Free Hosting Guide

### Backend → Render (free tier)
1. Go to https://render.com → New → Web Service
2. Connect your GitHub repo, set **Root Directory** to `backend`
3. Build command: `npm install`
4. Start command: `node server.js`
5. Add environment variables from `.env.example`
6. Copy the deployed URL (e.g. `https://portfolio-api.onrender.com`)

### Frontend → Vercel (free tier)
1. Go to https://vercel.com → New Project
2. Import your GitHub repo, set **Root Directory** to `frontend`
3. Add env variable: `VITE_API_URL=https://portfolio-api.onrender.com`
4. Deploy!

### Frontend → Netlify (alternative)
1. Go to https://netlify.com → Add new site
2. Connect GitHub, set **Base directory** to `frontend`
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add env variable: `VITE_API_URL=https://portfolio-api.onrender.com`

### Database → MongoDB Atlas (free tier)
1. Go to https://mongodb.com/atlas → Create free cluster
2. Create a database user
3. Whitelist IP `0.0.0.0/0` (allow all for Render)
4. Copy connection string into `MONGO_URI`

---

## 🛠 Personalise

| What | Where |
|---|---|
| Your name | `frontend/src/components/Hero.jsx` |
| WhatsApp number | `frontend/src/components/HireMe.jsx` → `WA_NUMBER` |
| Resume PDF | Drop `resume.pdf` into `frontend/public/` |
| Your photo | Replace the `AM` div in `Hero.jsx` with `<img src="/avatar.jpg" ...>`, drop image in `frontend/public/` |
| Projects | Edit `FALLBACK_PROJECTS` in `Projects.jsx` OR seed MongoDB |
| Experience | Edit `EXPERIENCE` array in `Experience.jsx` |
| Skills | Edit `SKILLS` array in `Skills.jsx` |
| Socials | Edit links in `HireMe.jsx` footer section |
| Email alerts | Set `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO` in backend `.env` |

---

## 🔑 API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/projects` | All projects |
| POST | `/api/projects` | Add project (requires `x-admin-secret` header) |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | View all messages (admin) |

---

## 🎨 Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion, Axios
- **Backend**: Node.js, Express, Mongoose, Helmet, express-rate-limit
- **Database**: MongoDB Atlas
- **Email**: Nodemailer (Gmail)
- **Deploy**: Vercel (FE) + Render (BE) + MongoDB Atlas (DB) — all free
