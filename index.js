const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Import routes
const dokumentasiRoutes = require("./routes/dokumentasiRoutes");
const historiRoutes = require("./routes/historiRoutes");

// Use routes
app.use("/api/dokumentasi", dokumentasiRoutes);
app.use("/api/histori", historiRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
