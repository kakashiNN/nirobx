const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

// Random video API (GitHub JSON)
app.get("/api/video/random", async (req, res) => {
    try {
        const response = await axios.get(
            "https://raw.githubusercontent.com/kakashi-N/autosend/main/data.json"
        );
        const dataArray = response.data;

        if (!Array.isArray(dataArray) || dataArray.length === 0) {
            return res.status(404).json({ error: "JSON is empty or invalid" });
        }

        const randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
        res.json(randomItem);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch JSON from GitHub" });
    }
});

// Vercel deploy compatibility
module.exports = app;
