const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000; // Railway will use its own port

app.use(cors());
app.use(express.json()); // Allows JSON requests

// Example API endpoint
app.post("/data", (req, res) => {
    console.log("Received data:", req.body);
    res.json({ message: "Data received successfully!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
