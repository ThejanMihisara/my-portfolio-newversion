<div align="center">

# 🌐 Thejan Mihisara — Personal Portfolio

**A modern, animated full-stack developer portfolio built with React, Tailwind CSS, and Supabase.**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-thejanmihisara.vercel.app-6366f1?style=for-the-badge)](https://thejanmihisara.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-ThejanMihisara-181717?style=for-the-badge&logo=github)](https://github.com/ThejanMihisara)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Thejan_Mihisara-0A66C2?style=for-the-badge&logo=linkedin)](http://linkedin.com/in/thejan-mihisara-kahingalage-14465533b)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

</div>

---

## 👤 About Me

I'm **Thejan Mihisara**, a Computer Science undergraduate and aspiring Full-Stack Developer passionate about building scalable web applications and real-world digital solutions. Experienced in MERN stack development and continuously exploring AI/ML and DevOps.

> *"Creating Innovative, Functional, and User-Friendly Websites for Digital Solutions."*

---

## ✨ Portfolio Features

| Section | Description |
|---|---|
| 🏠 **Hero / Home** | Animated typing effect, Lottie animation, social links & CTA buttons |
| 👤 **About** | Personal bio, downloadable CV, dynamic stats from Supabase |
| 🎨 **Portfolio** | Projects, tech stack icons & certificates fetched live from Supabase |
| 🛠️ **Services** | Service cards with icons, descriptions & features from Supabase |
| 🎓 **Education** | Academic background & timeline |
| 📬 **Contact** | Contact form with email integration |
| 🔔 **Achievements** | Certificates and accomplishments showcase |

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=black)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white)
![AOS](https://img.shields.io/badge/AOS-Animations-6366f1?style=flat-square)
![Lottie](https://img.shields.io/badge/Lottie-Files-00DDB4?style=flat-square)

### Backend & Database
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)

### Build & Deployment
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- A [Supabase](https://supabase.com) account & project

### 1. Clone the Repository

```bash
git clone https://github.com/ThejanMihisara/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Supabase

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> You can find these in your Supabase dashboard under **Project Settings → API**.

### 4. Set Up Supabase Tables

Create the following tables in your Supabase project:

**`projects`** table:
| Column | Type |
|---|---|
| id | int8 (PK) |
| title | text |
| description | text |
| image | text |
| technologies | text[] |
| github | text |
| demo | text |
| features | text[] |
| category | text |

**`certificates`** table:
| Column | Type |
|---|---|
| id | int8 (PK) |
| title | text |
| issuer | text |
| date | text |
| image | text |

**`services`** table:
| Column | Type |
|---|---|
| id | int8 (PK) |
| title | text |
| description | text |
| features | text[] |

### 5. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio live. 🎉

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── photo.png               # Profile photo
│   ├── lottie.json             # Hero animation
│   └── *.svg                   # Tech stack icons
│
├── src/
│   ├── Pages/
│   │   ├── Home.jsx            # Hero section with typing animation
│   │   ├── About.jsx           # About me + dynamic stats
│   │   ├── Portofolio.jsx      # Projects, tech stack & certificates
│   │   ├── Services.jsx        # Services section
│   │   ├── Education.jsx       # Education timeline
│   │   ├── Contact.jsx         # Contact form
│   │   ├── WelcomeScreen.jsx   # Intro loading screen
│   │   ├── ThankYou.jsx        # Post-contact thank you page
│   │   └── 404.jsx             # Custom 404 page
│   │
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive navigation
│   │   ├── CardProject.jsx     # Project card component
│   │   ├── Achievements.jsx    # Certificate card component
│   │   ├── TechStackIcon.jsx   # Tech icon component
│   │   ├── Modal.jsx           # Project detail modal
│   │   ├── ProjectDetail.jsx   # Full project detail view
│   │   ├── SocialLinks.jsx     # Social media links
│   │   ├── InputField.jsx      # Reusable form input
│   │   ├── LoadingScreen.jsx   # Loading state component
│   │   └── Background.jsx      # Animated background
│   │
│   ├── supabase.js             # Supabase client config
│   ├── App.jsx                 # Root component & routing
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
│
├── .env                        # Environment variables (not committed)
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🌐 Deployment on Vercel

1. Push your code to GitHub
2. Import the repo on [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard:
   ```
   VITE_SUPABASE_URL      = your_supabase_url
   VITE_SUPABASE_ANON_KEY = your_supabase_anon_key
   ```
4. Deploy — Vercel auto-detects Vite config ✅

---

## 📬 Contact

**Thejan Mihisara**

[![Portfolio](https://img.shields.io/badge/Portfolio-thejanmihisara.vercel.app-6366f1?style=flat-square)](https://thejanmihisara.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-ThejanMihisara-181717?style=flat-square&logo=github)](https://github.com/ThejanMihisara)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Thejan_Mihisara-0A66C2?style=flat-square&logo=linkedin)](http://linkedin.com/in/thejan-mihisara-kahingalage-14465533b)

---

<div align="center">

**Built with 💜 by Thejan Mihisara**

⭐ If you like this portfolio, give it a star!

</div>
