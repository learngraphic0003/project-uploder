const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


dotenv.config();
connectDB();



const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/user.route"));
app.use("/api/projects", require("./routes/project.route"));
// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});