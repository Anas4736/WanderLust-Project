   # 🏡 Wanderlust    

<p align="center">
  <img src="https://imgs.search.brave.com/mw6UHR_nAwmjtlWe-rAyhNtbkNhAbTLwNSp9A2ZiKFo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2xpZGVzaGFyZWNk/bi5jb20vc3NfdGh1/bWJuYWlscy9haXJi/bmItMTgwNDEyMTM0/ODQ0LXRodW1ibmFp/bC5qcGc_d2lkdGg9/NTYwJmZpdD1ib3Vu/ZHM" 
       alt="Wanderlust Project Preview" 
       width="800" 
       style="border-radius: 12px; box-shadow: 0px 4px 20px rgba(0,0,0,0.25);" />
</p>  
  

**Wanderlust** is a full-stack **web application** built using **Node.js, Express, MongoDB, and EJS templates**.  
It allows users to browse listings, create new stays, leave reviews, and manage bookings.  

> ⚠️ This is an **academic project** made for learning purposes. It does not handle real payments or provide actual bookings.    

---

## 🚀 Features  

- 🔐 User Authentication (Login/Signup with sessions & JWT support)  
- 🏘️ Add, Edit, and Delete Property Listings  
- 📸 Image Upload support (Cloudinary/Multer)  
- ⭐ Add and Manage Reviews for stays  
- 📅 Booking functionality (date selection)  
- 🖥️ Server-Side Rendering using **EJS**  
- 📱 Responsive design with custom CSS/Bootstrap  

---

## 🛠️ Tech Stack  

### Backend  
- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **EJS** (for templating)  
- **Passport.js / JWT** (for authentication)  
- **Multer / Cloudinary** (for image uploads)  

### Frontend  
- **EJS templates**  
- **Vanilla JS**  
- **CSS3 / Bootstrap**  

---

## ⚙️ Project Structure  

wanderlust/
│
├── controllers/ # Route controllers
│ ├── listings.js
│ ├── reviews.js
│ └── users.js
│
├── models/ # Mongoose models
│ ├── listing.js
│ ├── review.js
│ └── user.js
│
├── routes/ # Express routes
│ ├── listings.js
│ ├── reviews.js
│ └── users.js
│
├── utils/ # Utility functions
│ ├── ExpressError.js
│ └── wrapAsync.js
│
├── views/ # EJS templates
│ ├── includes/ # Partials (navbar, footer, flash)
│ ├── layouts/ # Layout boilerplate
│ ├── listings/ # Listing pages (edit, show, new, index)
│ ├── users/ # Auth pages (login, signup)
│ └── error.ejs # Error handler
│
├── public/ # Static files (CSS/JS)
│ ├── css/
│ │ ├── rating.css
│ │ └── style.css
│ └── js/
│ ├── map.js
│ └── script.js
│
├── .env # Environment variables
├── app.js # Main app entry point
├── cloudConfig.js # Cloudinary config (if used)
├── middleware.js # Custom middlewares
├── schema.js # Joi validation schemas
├── package.json
└── README.md

---

## 📦 Installation & Setup  

### 1️⃣ Clone the repository  

```bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust

2️⃣ Install dependencies
npm install

4️⃣ Run the application
node app.js
# or with nodemon
nodemon app.js

🧪 Sample User
You can use mock credentials or register a new user:

Email: demo@wanderlust.com  
Password: demo123  

🔒 Disclaimer

This project is a simulation for educational purposes only.
It does not process real bookings or ayments.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



