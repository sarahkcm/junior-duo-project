import express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import gameRoutes from "./routes/Games.js"
import fullsetRoutes from "./routes/Fullset.js"
const mongoUrl = "mongodb://localhost/snes";


mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log("db connected");
  });
const db = mongoose.connection;
const app = express();




app.use(express.json())
app.use(cors())

const PORT=process.env.PORT || 3000;
app.use('/games',gameRoutes)
app.use('/fullset',fullsetRoutes)






app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });









