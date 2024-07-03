import express from "express";

// fn express  ช่วยสร้าง app ให้เรา
const app = express();
//APT 1ST
app.get("/hello", (req, res) => {
  res.send("Hello world");
});

//ทำให้โปรแกรมอื่นๆ เข้าถึงแอพเราได้ที่port8000
app.listen(8000, () => {
  console.log("app running at port 8000");
});
