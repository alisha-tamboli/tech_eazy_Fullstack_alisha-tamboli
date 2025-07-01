# 📦 Zero Mile Delivery System – Fullstack App

This is a full-stack parcel management system developed using:
- Backend: Node.js + Express + SQLite (in-memory)
- Frontend: React (runs on port 80)
- Database used: SQLite (in-memory file under `backend/db/parcel.db`)

---

## ✅ Functional Features

📦 Backend API Endpoints (`/parcels`)
|----------------------------------------------------------------|
| Method | Endpoint                   | Description              |
|--------|----------------------------|--------------------------|
| GET    | `/parcels`                | Get all parcels          |
| GET    | `/parcels/:trackingId`    | Get parcel by trackingId |
| POST   | `/parcels`                | Create new parcel        |
| PUT    | `/parcels/:id`            | Edit existing parcel     |
| DELETE | `/parcels/:id`            | Delete parcel            |
|---------------------------------------------------------------|


🧾 Frontend (React App)
- Form to create parcel (`trackingId`, `name`)
- Search parcel by tracking ID
- Display parcel table in grid format
- Inline edit and delete buttons
- Responsive UI using Bootstrap

> UI uses **Bootstrap** for styling.

---

### How to Create Node.js Backend (with Express + SQLite)

Create backend folder
- mkdir backend
- cd backend

Initialize Node.js project
- npm init -y

Install required packages (no extra packages)
- npm install express sqlite3

---

### How to Create React Frontend (with Bootstrap)

Go to root directory of your project folder
- cd ..
- npx create-react-app frontend

Move into frontend folder
- cd frontend

Install only Axios (no extra packages)
- npm install axios

---

## ⚙️ How to Run the Project on server

🛠 Backend-
    cd backend
    npm install       # install express and sqlite3
    node server.js    # starts backend on http://localhost:5000

    It should say something like on console:
    Server running on http://localhost:5000

🖥 Frontend-
    cd frontend
    npm install       # install React dependencies
    npm start         # runs frontend

    After this, open your browser and go to:
    http://localhost/    #✅ This means it’s running on port 80.

---

### 🔄 Important Note:

If the frontend doesn't open on port 80, it may fall back to port 3000 automatically.

⚠️ This happens due to permission issues with port 80 on some systems (especially Windows )
In that case, visit:
-http://localhost:3000

---


## 🚀 Folder Structure

zero-mile-delivery-system/
├── backend/
│   ├── server.js 
│   ├── package.json 
│   ├── db/parcel.db 
│   |── parcel/ 
│   |   ├── parcelModel.js 
│   |   ├── parcelService.js 
│   |   └── parcelController.js  
    ├── resources/ 
│   └── postman_collection.json
|
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ParcelForm.js
│   │   │   ├── ParcelForm.css
│   │   │   ├── ParcelList.js
│   │   │   ├── ParcelList.css
│   │   │   ├── SearchParcel.js
│   │   │   └── SearchParcel.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
|
└── README.md ✅


# Assignment 1
Submitted by: Alisha Tamboli
