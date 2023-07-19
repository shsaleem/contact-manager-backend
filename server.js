const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");
const connectDatabase = require("./config/dbConnection");

const app = express();
dotenv.config();
connectDatabase();

const PORT = process.env.PORT | 5000;

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is runnig on port: ${PORT}`);
});
