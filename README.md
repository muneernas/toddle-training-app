# Toddle MYP Teacher Training Webapp

An interactive training course for MYP teachers to learn how to use Toddle. Includes 15 lesson modules, practice screenshot uploads, a multi-style quiz, progress tracking, and a leaderboard.

## Features

- **15 lesson modules** based on the official training document
- **Practice uploads** — teachers upload screenshots from the Toddle testing class
- **Quiz** with 5 question types: single choice, true/false, multi-select, fill-in-the-blank, matching
- **Progress tracking** — lessons (60%), quiz (25%), uploads (15%)
- **Leaderboard** — ranked by best quiz score, then lessons completed
- **School branding** — blue `#00188A`, yellow `#F2B334`, gray `#766E65`

## Quick start (local demo)

Works without Firebase using browser local storage:

```bash
npm install
npm run dev
```

Open http://localhost:5173, enter your name and department, and start the course.

## Deploy to GitHub Pages

The project includes a GitHub Actions workflow that builds and deploys automatically on every push to `main`.

### 1. Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name the repo (e.g. `toddle-training-app`)
3. Do **not** initialize with a README (you already have one)

### 2. Push your code

```bash
cd toddle-training-app
git init
git add .
git commit -m "Initial commit: Toddle MYP training webapp"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/toddle-training-app.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 3. Enable GitHub Pages

1. Open your repo on GitHub
2. Go to **Settings → Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. After the first workflow run completes, your site will be live at:

   `https://YOUR_USERNAME.github.io/toddle-training-app/`

### 4. Firebase on GitHub Pages (optional)

For shared leaderboard and uploads, add these **Repository secrets** under **Settings → Secrets and variables → Actions**:

| Secret | Value |
|--------|-------|
| `VITE_FIREBASE_API_KEY` | From Firebase console |
| `VITE_FIREBASE_AUTH_DOMAIN` | From Firebase console |
| `VITE_FIREBASE_PROJECT_ID` | From Firebase console |
| `VITE_FIREBASE_STORAGE_BUCKET` | From Firebase console |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | From Firebase console |
| `VITE_FIREBASE_APP_ID` | From Firebase console |

Also deploy Firestore and Storage rules (see Firebase section below). Without secrets, the app still works in demo mode using browser storage.

### 5. Test the GitHub Pages build locally

```bash
npm run build:gh-pages
npm run preview:gh-pages
```

Open the preview URL shown (paths will include `/toddle-training-app/`).

> **Note:** If you use a different repo name, update `VITE_BASE_PATH` in `package.json` scripts to match (`/your-repo-name/`). The GitHub Actions workflow sets this automatically from the repo name.

## Firebase setup (for production)

### 1. Create a Firebase project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (Spark/free plan is enough)
3. Add a **Web app** and copy the config values

### 2. Enable services

- **Firestore Database** — start in test mode, then deploy rules from this project
- **Storage** — enable, then deploy storage rules
- **Hosting** — enable when ready to deploy

### 3. Configure environment variables

Copy `.env.example` to `.env` and fill in your Firebase config:

```bash
cp .env.example .env
```

### 4. Deploy security rules

```bash
npm install -g firebase-tools
firebase login
firebase use your-project-id
firebase deploy --only firestore:rules,storage
```

### 5. Build and deploy

```bash
npm run build
firebase deploy --only hosting
```

Your app will be live at `https://your-project-id.web.app`.

## Project structure

```
src/
├── data/          # Lesson content and quiz questions
├── pages/         # Welcome, Dashboard, Lesson, Uploads, Quiz, Leaderboard
├── components/    # Layout, progress bar, quiz question types
├── hooks/         # useTeacher — progress and Firebase sync
└── styles/        # School color theme
```

## Usage for teachers

1. Open the app and enter **name + department**
2. Work through lessons on the **Lessons** page
3. Upload practice screenshots on the **Uploads** page
4. Take the **Quiz** (70% to pass; retakes allowed)
5. Check your rank on the **Leaderboard**

## Notes

- No passwords — teachers are identified by a browser-stored ID plus name/department
- Without Firebase, data stays in the browser only (no shared leaderboard across devices)
- Report card note from training: official report cards remain on Edunation next year
