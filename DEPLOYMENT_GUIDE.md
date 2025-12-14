# Deployment Guide: Free Hosting for SDM Project

This guide explains how to host your **Node.js + MongoDB** application for free using **Render** (for the backend/website) and **MongoDB Atlas** (for the database).

---

## Prerequisites
1.  **GitHub Account:** You need to push this project code to a GitHub repository.
2.  **MongoDB Atlas Account:** For the cloud database.
3.  **Render Account:** For hosting the server.

---

## Step 1: Push Code to GitHub
1.  Go to [github.com](https://github.com) and create a **New Repository** (e.g., `sdm-eye-care`).
2.  Open your project folder in the terminal and run:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/sdm-eye-care.git
    git push -u origin main
    ```

---

## Step 2: Set up Cloud Database (MongoDB Atlas)
Since your local MongoDB (`mongodb://127.0.0.1...`) won't work on the cloud, you need a free cloud database.

1.  Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and sign up.
2.  Create a **New Cluster** (Select the **FREE** or **M0** tier).
3.  **Create a Database User:**
    *   Go to "Database Access".
    *   Add New Database User -> Enter a username and password (write this down!).
4.  **Allow Network Access:**
    *   Go to "Network Access".
    *   Add IP Address -> Select **"Allow Access from Anywhere"** (`0.0.0.0/0`). (This allows Render to connect).
5.  **Get Connection String:**
    *   Click **"Connect"** on your cluster.
    *   Select **"Drivers"** (Node.js).
    *   Copy the connection string. It looks like:
        `mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority`
    *   **Important:** Replace `<password>` with your actual password from step 3.

---

## Step 3: Deploy to Render
Render is a cloud provider that offers a free plan for Node.js web services.

1.  Go to [render.com](https://render.com) and creating an account (Login with GitHub is easiest).
2.  Click **"New +"** and select **"Web Service"**.
3.  Select **"Build and deploy from a Git repository"**.
4.  Connect the `sdm-eye-care` repository you created in Step 1.
5.  **Configure the Service:**
    *   **Name:** `sdm-eye-care` (or unique name).
    *   **Region:** Singapore or Frankfurt (closest to you).
    *   **Branch:** `main`
    *   **Root Directory:** (Leave blank)
    *   **Runtime:** `Node`
    *   **Build Command:** `npm install`
    *   **Start Command:** `node server.js`
    *   **Instance Type:** **Free** (Scroll down to find it).

6.  **Environment Variables:**
    *   Click on **"Advanced"** or **"Environment Variables"**.
    *   You MUST add the values from your `.env` file here:
        *   `MONGO_URI`: (Paste the MongoDB Atlas string from Step 2)
        *   `TWILIO_SID`: (Your Twilio SID)
        *   `TWILIO_AUTH_TOKEN`: (Your Token)
        *   `TWILIO_PHONE_NUMBER`: `+12185274222`
        *   `EMAIL_USER`: (Your Gmail)
        *   `EMAIL_PASS`: (Your App Password)

7.  Click **"Create Web Service"**.

---

## Step 4: Verify
Render will start building your app. It might take 2-3 minutes.
*   Watch the logs. You should see: `[DB] Connected to MongoDB`.
*   Once deployed, Render will give you a URL (e.g., `https://sdm-eye-care.onrender.com`).
*   Open that URL. Your website is now live!

---

## Important Notes regarding Free Tier
1.  **Sleeps on Inactivity:** The Render Free tier spins down (sleeps) after 15 minutes of inactivity. When you open the site again, it might take **30-50 seconds** to load the first time.
2.  **Timers & Sleep:** Because the server sleeps, **your `setInterval` timers (Reminders) will PAUSE** if no one visits the site.
    *   **Fix:** For a truly reliable 24/7 reminder system, you usually need a paid plan (approx \$7/month) to keep the server "awake".
    *   **Free Workaround:** You can use a free uptime monitor (like `uptimerobot.com`) to ping your Render URL every 5 minutes. This keeps it awake prevents it from sleeping.
