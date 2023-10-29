import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import { userRouter } from "./routes/user";


const app = express();


app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('Welcome!');

});


mongoose.connect(
    `mongodb+srv://barcaldejan:ecommerce123@ecommerce.grdsaq8.mongodb.net/ecommerce`
  ).then(()=>{
    console.log("Connected to database!")
  }).catch(
    (error) => {
    console.log(error);
    }
  );



app.listen(3001, () => console.log("Server started"));