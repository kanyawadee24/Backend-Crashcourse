import "dotenv/config";
import express from "express";

//env variable
const PORT = process.env.PORT

// fn express  ช่วยสร้าง app ให้เรา
const app = express();

//API 1ST
app.get("/hello", (req, res) => {
  res.send("Hello world");
});

app.get("/pa", (req, res) => {
  res.send("Kanyawadee Kongkaew");
});

//ทำให้โปรแกรมอื่นๆ เข้าถึงแอพเราได้ที่port8000
app.listen(PORT, () => {
  console.log(`app running at port ${PORT}`);
});
