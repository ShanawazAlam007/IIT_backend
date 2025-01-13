const express = require("express");
const cors = require("cors"); 
const user_Route = require("./routes/user");

const app = express();
const port = 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", user_Route);

// Error middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is hosted on port ${port}`);
});
