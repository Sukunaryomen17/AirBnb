
# Project Title

A brief description of what this project does and who it's for

# Wanderlust — AirBnB‑Style Listings App 🌍

An Express.js web application showcasing curated travel listings, backed by MongoDB Atlas and deployed on Render.

---

## 🚀 Live Demo  
_If deployed, add your live URL here:_  
`https://<your-service-name>.onrender.com`

---

## ✨ Features

- Browse listings with title, description, images, price, location & country  
- Stores data in MongoDB Atlas with Mongoose schema  
- One-time seeding via `seed.js` using `init/data.js`  
- Hosted on Render.com for production accessibility

---

## 🛠 Tech Stack

- **Backend:** Node.js + Express  
- **Database:** MongoDB Atlas (with Mongoose)  
- **Deployment:** Render  
- **Seed Script:** `seed.js`  
- **Image Storage:** Cloudinary (`cloudConfig.js`)  
- **Maps:** Mapbox via `MAP_TOKEN`

---

## 📁 Project Structure

```
AirBnB/
├── controllers/            # Route logic
├── init/
│   └── data.js             # Sample listing data
├── models/
│   └── listing.js          # Mongoose schema/model
├── routes/                 # Express route handlers
├── views/                  # EJS (or template) files
├── public/                 # Static assets (CSS, JS, images)
├── utils/                  # Utility modules (e.g., map/image helpers)
├── middleware.js           # Custom middleware (validation, auth)
├── cloudConfig.js          # Cloudinary setup
├── schema.js               # Input validation rules (Joi or similar)
├── seed.js                 # MongoDB Atlas seeding script
├── app.js                  # Express server entry point
├── .env                    # Environment variables (not committed)
└── README.md               # Project documentation
```

---

## 🏃‍♂️ Getting Started (Local Setup)

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Sukunaryomen17/AirBnb.git
   cd AirBnb
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Create a `.env` file** in root:
   ```ini
   PORT=8080
   MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
   MAP_TOKEN=pk.<your_mapbox_token>
   CLOUD_NAME=...
   CLOUD_API_KEY=...
   CLOUD_API_SECRET=...
   SECRET=<your_session_secret>
   ```
   _⚠️ Do not commit this file._

4. **Seed the database**  
   ```bash
   node seed.js
   ```

5. **Start the app**  
   ```bash
   npm start
   ```
   Then visit [http://localhost:8080](http://localhost:8080).

---

## 🚀 Deploying to Render

1. Push the repo to GitHub  
2. Create a Web Service on Render using this repo  
   - **Build Command:** `npm install`  
   - **Start Command:** `node app.js`  
3. Copy `.env` variables into Render’s Environment section  
4. Deploy — Render handles port assignment automatically

---

## 🐞 Troubleshooting

- **`Seed failed: uri undefined`** – Ensure `MONGODB_URI` is defined in `.env` and `dotenv.config()` is used  
- **SSL/network errors** – Add your machine’s IP or `0.0.0.0/0` in Atlas → Network Access  
- **Port binding issues** – Confirm Express uses:
  ```js
  const port = process.env.PORT || 8080;
  ```

---

## 🎯 Roadmap / Next Steps

- Add authentication (Passport.js)  
- Enable user-created listings  
- Introduce filters, searches, and pagination  
- Implement a React/Vue frontend  
- Add Docker for containerization

---

## 📄 License

Distributed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## ✨ Author

Developed by **Sukunaryomen17** – [GitHub Profile](https://github.com/Sukunaryomen17)

---


