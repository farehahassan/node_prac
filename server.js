const express = require("express");
const dotenv = require("dotenv").config();
const app = express();


const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(require("./middleware/errorHandler"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});