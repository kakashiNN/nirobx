const axios = require("axios");

export default async function handler(req, res) {
    try {
        // GitHub raw JSON link
        const response = await axios.get("https://raw.githubusercontent.com/kakashi-N/autosend/main/data.json");
        const dataArray = response.data;

        if (!Array.isArray(dataArray) || dataArray.length === 0) {
            return res.status(404).json({ error: "JSON is empty or invalid" });
        }

        const randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
        res.status(200).json(randomItem);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch JSON from GitHub" });
    }
}
