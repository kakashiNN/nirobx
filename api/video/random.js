import axios from "axios";

export default async function handler(req, res) {
  try {
    // GitHub raw JSON থেকে ডাটা আনা
    const response = await axios.get(
      "https://raw.githubusercontent.com/kakashi-N/autosend/main/data.json"
    );

    const dataArray = response.data;

    // চেক করো data valid কিনা
    if (!Array.isArray(dataArray) || dataArray.length === 0) {
      return res.status(404).json({ error: "❌ JSON is empty or invalid!" });
    }

    // Random item select করা
    const randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];

    // Response পাঠানো
    res.status(200).json(randomItem);

  } catch (error) {
    console.error("🚨 API ERROR:", error.message);
    res.status(500).json({ error: "Failed to fetch JSON from GitHub" });
  }
}
