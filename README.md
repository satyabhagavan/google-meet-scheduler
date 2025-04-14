# 🗓️ Google Meet Scheduler MVP

Live Demo 👉 [https://google-meet-scheduler.vercel.app/](https://google-meet-scheduler.vercel.app/)

A minimal MVP application that allows users to sign in using Google and create instant or scheduled Google Meet links. Built with **Next.js**, **NextAuth.js**, and **TailwindCSS**.

---

## ✅ Features

- 🔐 **Google SSO**: Login securely with your Google account
- ⚡ **Instant Meet Generator**: One-click creation of valid Google Meet-like links
- 📅 **Schedule Meeting**: Choose a date and time to generate and view a meeting link
- 🎨 **Clean & Responsive UI**: Built with TailwindCSS and optimized for all screen sizes
- 🚀 **Deployed on Vercel**: Fast, modern, and ready to go

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Auth**: [NextAuth.js](https://next-auth.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Hosting**: [Vercel](https://vercel.com)

---

## 📂 Project Structure

```bash
/pages
  index.js                # Main UI
  /api
    auth/[...nextauth].js # Google login integration
.env.local               # Environment variables
```
