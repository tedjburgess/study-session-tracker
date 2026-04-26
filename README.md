# Study Session Tracker

## Problem Statement

Students need a simple way to record study sessions, track focus levels, and monitor progress toward study goals across different courses.

---

## Project Overview

Study Session Tracker is a fullstack web application built with React, Express, MongoDB, and Mongoose.

The app allows users to create, view, update, search, and delete study sessions. Sessions are connected to courses, and study goals can also be linked to courses for progress tracking.

This project was created as a university fullstack lab assignment.

---

## Features

### Study Sessions
- Create new study sessions
- View all saved sessions
- Update sessions inline
- Delete sessions with confirmation
- Search sessions by text
- Auto-refresh displayed data

### Courses
- Sessions linked to courses

### Study Goals
- Goals linked to courses

### Backend API
- Full CRUD routes
- Relational endpoints using Mongoose population
- Custom filtering endpoint
- Error handling

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express

### Database
- MongoDB Atlas
- Mongoose

### Development Tools
- Git
- GitHub
- concurrently
- Postman
- Visual Studio Code
- npm

---

## Data Model

### Courses
- name
- code

### Study Sessions
- courseId references Courses
- durationMinutes
- focusRating
- topic
- date

### Study Goals
- courseId references Courses
- targetMinutes

---

## API Routes

### Study Sessions

```http
GET /api/study-sessions
POST /api/study-sessions
GET /api/study-sessions/:id
PATCH /api/study-sessions/:id
DELETE /api/study-sessions/:id
```

### Relational Routes

```http
GET /api/study-sessions/with-course
GET /api/study-goals/with-course
```

### Custom Route

```http
GET /api/study-sessions/filter/by-course/:courseId
```

## Project Structure

```text
project-root/
│── frontend/
│── backend/
│── README.md
```

## Run locally

### Clone Repository

```bash
git clone https://github.com/tedjburgess/study-session-tracker.git
cd study-session-tracker
```

### Install Dependencies

#### Root Dependencies
Installs root level dependencies such as concurrently from the root package.json.

```bash
npm install
```

#### Backend Dependencies

```bash
cd backend
npm install
cd ../
```

#### Frontend Dependencies

```bash
cd frontend
npm install
cd ../
```

### Create Environment File

#### Create

```text
backend/.env
```

#### Use as reference

```text
backend/.env.example
```

### Start application

Starts the frontend and backend together

```bash
npm run dev
```