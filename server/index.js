import express  from "express";
import mongoose from "mongoose";
import cors from "cors";
const mongoUrl = "mongodb://localhost/snes";


mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log("db connected");
  });
const db = mongoose.connection;
const app = express();




app.use(express.json())
app.use(cors())

const PORT=process.env.PORT || 3000;
// app.use('/posts',postRoutes)





app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });









