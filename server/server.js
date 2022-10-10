const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors")

const { errorHandler } = require("./middleware/errorMiddleware");

const connectDB = require("./config/db");

//Connect to database
connectDB();


const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);


app.get("/", function (req, res) {
  res.status(200).json({ message: "Bienvenue sur le Blog" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
