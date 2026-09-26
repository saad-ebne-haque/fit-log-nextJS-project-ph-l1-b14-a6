# FitLog — Workout Library & Plan Tracker

FitLog is a responsive workout library and fitness plan tracker built with **Next.js, TypeScript, Tailwind CSS, and DaisyUI**. Users can explore workouts, view detailed exercise information, add workouts to their daily plan, save workouts for later, sort plans, and track their workout progress.

## 🚀 Live Project

**Live Demo:** https://fit-log-eta-coral.vercel.app

**GitHub Repository:** https://github.com/saad-ebne-haque/fit-log-nextJS-project-ph-l1-b14-a6

---

## 🛠️ Technologies Used

* **Next.js** — App Router
* **TypeScript**
* **React**
* **Tailwind CSS**
* **DaisyUI**
* **Lucide React** — Icons
* **React Toastify** — Toast notifications
* **Context API** — Global state management
* **REST API** — Workout data
* **Vercel** — Deployment

---

## ✨ Features

* 🏋️ **Workout Library** — Browse workouts fetched from an external API.
* 📋 **Workout Details** — View equipment, difficulty, sets, reps, duration, calories, rating, and instructions.
* ➕ **Today's Plan** — Add workouts to your daily workout plan.
* 💾 **Save for Later** — Save workouts that you want to revisit.
* 📊 **Live Plan Statistics** — Track exercises, total minutes, and calories.
* 🔢 **Live Counters** — Navbar displays the current Plan and Saved workout counts.
* 🔀 **Workout Sorting** — Sort workouts by duration, calories, or rating.
* ✅ **Mark as Done** — Mark a workout as completed with a confirmation toast.
* ❌ **Remove Workouts** — Remove workouts from Today's Plan or Saved workouts.
* 🔔 **Toast Notifications** — Get feedback for add, save, complete, and remove actions.
* 📱 **Responsive Design** — Optimized for mobile, tablet, and desktop screens.
* 🚫 **Custom 404 Page** — Custom page for unavailable routes.
* ⏳ **Loading UI** — Loading animation while workout data is being fetched.
* 🧭 **Dynamic Routes** — Individual workout pages are available through dynamic routes.

---

## 📂 Main Pages

### Home `/`

Contains:

* Responsive navbar
* Hero section
* Workout library
* Workout cards
* Workout sorting/navigation actions

### Workout Details `/plans/[id]`

Shows:

* Workout image
* Workout name and description
* Muscle groups
* Equipment
* Difficulty
* Sets
* Reps
* Duration
* Calories
* Rating
* Instructions
* Add to Today's Plan
* Save for Later

### My Plan `/my-plan`

Contains:

* Today's Plan
* Saved workouts
* Exercise count
* Total workout minutes
* Total calories
* Sorting options
* Mark as Done
* Remove workout
* Empty state

---

## 🧠 State Management

FitLog uses **React Context API** for managing workout-related state globally.

The context manages:

* Today's workout plans
* Saved workouts
* Active tab
* Sorting option
* Add/remove actions
* Toast notifications
* Workout completion state

---

## 📡 API

Workout data is fetched from:

`https://api.api-store.workers.dev/api/fitlog`

The application uses the API to load the workout library and individual workout details.

---

## 📱 Responsive Design

The application is designed to work across:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

The workout library uses a responsive grid layout:

* 1 column on mobile
* 2 columns on medium screens
* 3 columns on large screens

---

## ⚙️ Getting Started

Clone the repository:

```bash
git clone https://github.com/saad-ebne-haque/fit-log-nextJS-project-ph-l1-b14-a6.git
```

Go to the project directory:

```bash
cd fit-log-nextJS-project-ph-l1-b14-a6
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📦 Build for Production

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

---

## 📸 Project Highlights

**FitLog** focuses on a clean fitness dashboard experience where users can discover workouts, organize their daily plan, save exercises, and track workout progress.

---

## 👨‍💻 Author

**Saad Ebne Haque**

GitHub:
https://github.com/saad-ebne-haque

---

## 📄 Assignment

This project was developed as part of the **Programming Hero — Level 1, Batch 14, Assignment 6**.

### Project: FitLog — Workout Library & Plan Tracker
