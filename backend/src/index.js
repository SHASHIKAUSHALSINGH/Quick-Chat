import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser"
import cors from "cors";
import path from "path";
import messageRoutes from "./routes/message.route.js";
import {app,server} from "./lib/socket.js";


// import { fileURLToPath } from "url";


dotenv.config();
// const app = express();
// const __filename = fileURLToPath(import.meta.url); // Use this for ESM modules
// const __dirname = path.dirname(__filename);



const PORT =process.env.PORT
const __dirname = path.resolve();
app.use(express.json());
app.use(cookieParser());
// app.use(cors({
//     origin:"https://quick-chat-hbtu.vercel.app",
//     credentials:true
// }))
app.use(cors({
    origin:"https://quick-chat-2byme.onrender.com",
    credentials:true
}))
app.get("/", (req, res) => {
    res.send("Server is up and running!");
});

app.use("/api/auth",authRoutes);  
app.use("/api/messages",messageRoutes);  
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
// if (process.env.NODE_ENV === "production") {
//   // Serve static files from the React frontend app
//     console.log("production ke ander hu");
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   // Catch-all route to serve index.html for any other routes
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
//   });
// }
server.listen(PORT,()=>{
    console.log("server is running on port "+PORT);
    connectDB();
});

