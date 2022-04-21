const exp = require("constants");
const colors = require("colors");
const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("../backend/middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const goalRouter = require("./routes/goalRoutes");
const userRouter = require("./routes/userRoutes");

connectDB();
const app = express();

// middleware for request parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRouter);
app.use("/api/users", userRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
