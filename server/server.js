import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import path from "node:path"
import { connect } from "node:http2";
import connectDB from "./config/db.js"
const app =express();

dotenv.config()

app.use(cors({
  origin:process.env.CLIENT_URL||"*",
  methods:["GET","POST","PUT","DELETE"],
  allowedHeaders:["COntent-Type","Authorization"],

}));
app.use(express.json())

connectDB()
const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});