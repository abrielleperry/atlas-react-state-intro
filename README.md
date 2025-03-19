<div align="center" id="top">
  <img src="./.github/app.gif" alt="Atlas React State Intro" />

&#xa0;

  <!-- <a href="https://atlasreactandjsx.netlify.app">Demo</a> -->
</div>

<h1 align="center">Atlas React State Intro</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/abrielleperry/atlas-react-state-intro?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/abrielleperry/atlas-react-state-intro?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/abrielleperry/atlas-react-state-intro?color=56BEB8">


  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/abrielleperry/atlas-react-state-intro?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/abrielleperry/atlas-react-state-intro?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/abrielleperry/atlas-react-state-intro?color=56BEB8" /> -->
</p>

<!-- Status -->

# atlas-react-state-intro

A React application demonstrating state management concepts including `useState`, `useEffect`, and `useContext`. This project is a simple, interactive course directory with search, sort, pagination, and enrollment features.

[Live Demo](https://atlas-react-state-intro-aperry.netlify.app)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Overview


**atlas-react-state-intro** is a React-based course catalog app showcasing core React features such as:

- State management with `useState`
- Data fetching with `useEffect`
- Shared state across components using `useContext`

The app allows users to view available courses, search, sort, and paginate through course listings, and enroll/drop courses. Enrolled courses are dynamically displayed in a schedule.

---

## Features

- Fetch courses from an API and render them in a table
- Real-time search/filter by course name and number
- Sort courses by various columns in ascending/descending order
- Pagination to navigate through results (5 rows per page)
- Enroll/drop courses with shared state via Context API
- Displays enrolled courses with dynamic count in the header
- Responsive and optimized performance using Vite
- Deployed and accessible via Netlify
---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abrielleperry/atlas-react-state-intro.git ```
3. Navigate to the project directory:
   ```bash
   cd atlas-react-state-intro
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Usage

- Navigate to the School Catalog section to view all available courses.

- Use the search input to filter courses by Course Name or Course Number.
- Click on column headers to sort data (ascending/descending).
- Use the pagination controls to move between course listings.
- Click Enroll to add a course to your schedule.
- Enrolled courses will appear in the Class Schedule section.
- Click Drop to remove courses from your schedule.
- The course count updates dynamically in the header.

---

## Project Structure

```
atlas-react-state-intro/
├── public/
│   └── api/
│       └── courses.json
├── src/
│   ├── components/
│   │   └── (Optional reusable components)
│   ├── SchoolCatalog.jsx
│   ├── ClassSchedule.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

---

## Components

| Component             | Description                                                                       |
| --------------------- | --------------------------------------------------------------------------------- |
| `SchoolCatalog.jsx`        | Displays course table with search, sort, pagination, and enroll buttons. Fetches data via API. |
| `ClassSchedule.jsx`     | Displays enrolled courses and provides drop functionality.            |
| `App.jsx`          | Context provider for enrolled courses and manages global state.             |
| `main.jsx`         | Entry point that renders the App component into the DOM.   |

---

## Deployment

This project is deployed and accessible on Netlify:
🔗 [https://atlas-react-and-jsx-aperry.netlify.app](https://atlas-react-state-intro-aperry.netlify.app)

To deploy your own version:

1. Push your repository to GitHub.
2. Connect your GitHub repo to Netlify.
3. Set the build command to:
   ```
   npm run build
   ```
4. Set the publish directory to:
   ```
   dist
   ```

---

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/)
- [Netlify](https://www.netlify.com/)
- [React Developer Tools](https://react-devtools-tutorial.netlify.app/)

---

## Author

**Abrielle Perry**

- GitHub: [abrielleperry](https://github.com/abrielleperry)
- LinkedIn: [abriellerperry](https://linkedin.com/in/abriellerperry)

