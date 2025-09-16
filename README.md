# 🏡 Wanderlust - Airbnb Clone  

<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/139/139899.png" alt="Wanderlust Logo" width="150" />
</p>  

**Wanderlust** is a full-stack Airbnb-inspired web application that allows users to explore destinations, list their properties, and book stays.  

> ⚠️ This is an academic project created for learning purposes. It does not involve real payments or actual bookings.  

---

## 🚀 Features  

- 🔐 **User Authentication** (JWT-based login & signup)  
- 🏘️ **List & Manage Properties** (Add, update, delete your listings)  
- 🔎 **Search & Filter Stays** (Location, price, amenities, etc.)  
- 📸 **Image Uploads** for property listings  
- 📅 **Booking System** with date picker  
- 💳 **Mock Payment Integration** (simulated checkout)  
- 🖥️ **Responsive UI** for desktop & mobile  

---

## 🛠️ Tech Stack  

### Frontend  
- React.js  
- Tailwind CSS  
- React Router DOM  
- Axios  

### Backend  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JSON Web Tokens (JWT)  
- bcrypt.js  
- Multer (for image uploads)  

---

## ⚙️ Project Structure  

wanderlust/
│
├── frontend/ # React Frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── index.js
│
├── backend/ # Node.js Backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── utils/
│ └── index.js
│
├── .env # Environment Variables
├── README.md
└── package.json


---

## 📦 Installation  

### Clone the repository  

```bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust

Setup Backend
cd backend
npm install
# Create a `.env` file and add:
# MONGO_URI=your_mongo_connection
# JWT_SECRET=your_jwt_secret
npm start

Setup Frontend
cd frontend
npm install
npm start

🧪 Sample Login
You can register as a new user or use mock credentials:

Email: demo@wanderlust.com  
Password: demo123

🔒 Disclaimer

This application is a simulation and does not provide real Airbnb services, real bookings, or payments. It is built solely for educational purposes.
