# To-Do List App

Demo video linkedIn Post : [https://www.linkedin.com/posts/mantukumar22_reactjs-nodejs-mongodb-activity-7426276822822277120-gwxW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIMdswBwDEA1pRPXlABuyFFVX9TivGhyL0]

This is a **full-stack To-Do List application** built with **React (Vite)** for the frontend and **Node.js + Express + MongoDB** for the backend. The app allows users to **add, update, delete, and mark tasks as completed**, with data persisted in MongoDB. The app is deployed on **Netlify (frontend)** and **Render (backend)**.

## Features

- Add new tasks
- Edit task titles
- Delete tasks
- Search tasks
- Toggle completion status
- Real-time updates between frontend and backend
- Responsive UI with React and Tailwind CSS

## Tech Stack

**Frontend:**
- React + Vite
- Tailwind CSS
- Axios for API calls

**Backend:**
- Node.js + Express.js
- MongoDB (Atlas or local)
- Mongoose ORM

**Deployment:**
- Frontend: Netlify
- Backend: Render

## Live Demo

- Frontend: [https://todoapplicationamrit.netlify.app](https://todoapplicationamrit.netlify.app)  
- Backend API: [https://todo-backend-ju99.onrender.com/api/todos](https://todo-backend-ju99.onrender.com/api/todos)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (Atlas or local)

### Backend Setup

1. Navigate to backend folder:
```bash
cd todo-backend
npm install
MONGO_URI=<mongodb-connection-string>
PORT=5000
npm run dev


**Frontend Setup**:

```markdown
### Frontend Setup

1. Navigate to frontend folder:
```bash
cd todo-frontend
create react app
VITE_API_URL=http://localhost:5000/api/todos
npm run dev


**Deployment Notes**:

```markdown
### Notes on Deployment

- Frontend is deployed on **Netlify**.  
- Backend is deployed on **Render**.  
- Ensure the environment variable `VITE_API_URL` points to the backend URL:  

```env
VITE_API_URL=https://todo-backend-ju99.onrender.com/api/todos


Add _redirects file in public/:

/* /index.html 200
This prevents 404 errors on refresh (React Router fix).


---

## Challenges & Solutions

1. **Axios 404 error on Netlify**  
   - Cause: Frontend env variable was undefined  
   - Solution: Set `VITE_API_URL` correctly in Netlify and rebuilt with clear cache

2. **Frontend `.map()` crash**  
   - Cause: Backend returned array, frontend expected object  
   - Solution: Updated `fetchTodos` to handle array responses

3. **React Router 404 on refresh**  
   - Solution: Added `_redirects` file with `/* /index.html 200` in `public/`


## License

MIT License

## Author

- Name: Mantu Kumar  
- GitHub: [https://github.com/mantukumar22](https://github.com/mantukumar22)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
