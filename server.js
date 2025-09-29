const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(cors());

// Random video API
app.get("/api/video/random", (req, res) => {
    try {
        const data = fs.readFileSync("./data.json", "utf-8");
        const jsonData = JSON.parse(data);
        const randomItem = jsonData[Math.floor(Math.random() * jsonData.length)];
        res.json(randomItem);
    } catch (error) {
        res.status(500).json({ error: "Failed to read JSON file" });
    }
});

module.exports = app;
