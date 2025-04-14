# 🗓️ Google Meet Scheduler MVP

Live Demo 👉 [https://google-meet-scheduler.vercel.app/](https://google-meet-scheduler.vercel.app/)

A minimal MVP web app that allows users to log in with Google SSO, generate instant Google Meet links, and schedule meetings for future times — using simulated Meet URLs.

---

## ✅ Features

- 🔐 **Google Sign-In** via NextAuth.js
- ⚡ **Instant Meet**: One-click simulated Google Meet link generation
- 📅 **Schedule a Meeting**: Choose date/time, and generate a link for that slot
- 🎨 **Minimal UI** using TailwindCSS
- 🚀 **Deployed** on Vercel with environment config

---

## ⚙️ Setup & Deployment Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/satyabhagavan/google-meet-scheduler
cd google-meet-scheduler
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env.local`

```bash
touch .env.local
```

Add:

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000
```

> You can get the credentials by creating an OAuth2.0 Client ID in [Google Cloud Console](https://console.cloud.google.com).

### 4. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Vercel deployment

This project has already been deployed and is publicly accessible:

🔗 **Live Demo**: [https://google-meet-scheduler.vercel.app/](https://google-meet-scheduler.vercel.app/)

> ⚠️ However, for the purpose of verification, please **run the app locally** by following the steps in (Setup & Deployment Instructions untill mentioned above).

## 🧠 Architectural Decisions & Assumptions

- **Auth via Google SSO** using `next-auth` for simple and secure user handling
- **Meeting links are simulated**:
  - Actual Google Meet link generation via API requires a **Google Workspace account**.
  - As this was not available, we generated random links in the format `https://meet.google.com/xxx-xxxx-xxx` to simulate instant and scheduled meeting creation.
- Used **client-side state only** — no database or persistent storage, as specified.
- Minimal form validation and a single-page UI to focus on functionality over styling complexity.

---

## 🚧 Limitations of MVP

- ❌ **No actual Google Meet or Calendar API integration** (due to lack of Workspace account)
- ❌ **No persistent meeting storage** — links are not saved once the session ends
- ❌ **No event invite or email feature** — it's purely link generation and display

---

## 🛠 Tech Stack

- **Next.js** (Backend & Frontend)
- **NextAuth.js** (Authentication)
- **TailwindCSS** (Styling)
- **Vercel** (Hosting)

---

## 📂 Project Structure

```bash
/pages
  index.js                # Main UI
  /api
    auth/[...nextauth].js # Auth handler
.env.local               # Local env config
```

## 👨‍💻 Author

Satya Bhagavan
