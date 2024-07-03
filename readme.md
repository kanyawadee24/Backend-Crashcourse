# 1 - Set Up Node Project

- `npm init -y` :สร้างไฟล์package.json
- ไฟล์package.jsonใช้สำหรับ
  - บอกรายละเอียดเกี่ยวกับโปรเจคนั้นๆ เช่น name , version
  - จัดการ script ต่างๆ ผ่านคำสั่ง ` npm run`
  - จัดการ dependencies ผ่านคำสั่ง `npm install` , `npm uninstall`
- เพิ่ม `"type": "module"` ในpackage.json สำหรับใช้ `es6 syntax`
- `git init` : สำหรับทำ version control
- `touch .gitignore` : สำหรับ ignore บางไฟล์จาก git
- [gitignore template](https://github.com/github/gitignore/blob/main/Node.gitignore) link here!

# 2 - Install Library Express for HTTP Server

- รัน `npm install express` แล้วสังเกต package.json & node_modules/
  - npm จะทำการโหลด express มาไว้ใน node_modules/
  - จากนั้น `npm` จะเพิ่ม key ใน dependencies ของ psckage.json
- เนื่องจาก `express` เองก็มี [dependencies](https://www.npmjs.com/package/express) เหมือนกัน
  - `npm` จะทำการดาวน์โหลด deps ของ express มาเก็บไว้ใน node_modules/ ให้ด้วย
  - รายละเอียดของ deps ที่เหลือจะอยู่ใน `package-lock.json`
- โดยสรุป
  - `package.json` จะเก็บข้อมูล dependecies หลักของ project เราเท่านั้นเช่น express
  - `package-lock.json` จะเก็บข้อมูล deps หลักและ deps ของ deps หลักอีกที (เหมือนเก็บข้อมูลของpackage ทุกตัวที่ใช้ เช่น deps ของ express ทังหมดก็จะเก็บไว้ที่นี่)

# 3 - SetUp Express (HTTP Server)

- สร้างไฟล์ `app.js`
- สร้าง express sever ในไฟล์ app.js
- อ่าน [Docs](https://expressjs.com/)
- แล้วเขียนตาม

```js
//commonJS
const express = require("express");
const app = express();

app.listen(8000, () => {
  console.log(`Example app listening on port 8000`);
});
```

```js
// ES6
import express from "express";
const app = express();

app.listen(8000, () => {
  console.log(`Example app listening on port 8000`);
});
```

- ลองรันappด้วย `node app.js` จะสังเกตเห็น log ว่า app เรากำลังรันอยู่

# 4 - First API (GET)

- นำ`app` มาใส่ method `GET`
- `parameter ตัวแรก` คือ path
- `parameter ตัวที่สอง` คือ function ที่ใช้จัดการ `HTTP Request` , `HTTP Response`

```js
app.get("/hello", (req, res) => {});
```

- ลองเขียน response ตอบกลับไปว่า "Hello World" ด้วย Method `send`

```js
app.get("/hello", (req, res) => {
  res.send("Hello World");
});
```

# 5 - SetUp Nodemon

- `npm install dotenv`
- `npm install -D nodemon`
- สังเกตpackage.json หลังติดตั้ง
- เราจะใช้ nodemon app.js แทนคำสั่ง node app.js สำหรับการ auto restart เมื่อมีการเขียนโค้ดใหม่แล้วsave
- เพื่อความสะดวกเราจะเพิ่มคำสั่ง `script` ใน package.json โดยจะใช้ชื่อว่า `dev`

```js
{
  "script": {
    "dev": "nodemon app.js"
  }
}
```

- เรียกใช้ script ผ่านคำสั่ง `npm run dev` ซึ่งเท่ากับเรารันคำสั่ง `nodemon app.js` ที่ terminalเอง

# 6 - Set up ENV

- `npm install dotenv`
- สร้างไฟล์ .env `touch .env` เพื่อเก็บค่าตัวแปรสภาพแวดล้อมในการรันโปรแกรม (ส่วนมากเป็นsecret value ที่เราจะไม่pushขึ้นgit)
- ทดลองเก็บค่าตัวแปรPORT

```env
PORT=8000

```

- ทำการโหลดตัวแปร env เข้ามาที่ app.js ทำตาม [docs]
  (https://www.npmjs.com/package/dotenv)

- เราสามารถเข้าถึงตัวแปรในไฟล์ `.env` ได้ผ่านตัวแปรที่ชื่อว่า `process.env`

```js
import "dotenv/config";
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app running at port ${PORT}`);
});
```

# 7 - เชื่อมDatabase Mongo Atlas ด้วย Mongoose library

- เก็บ ConectionStringของ Atlas ไว้ที่ `.env`
- ใส่ค่า <> , <DB_NAME> ให้ตรง

```env
mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.c21xmrh.mongodb.net/<DB_NAME>?retryWrites=true&w=majority&appName=Cluster0
```

- ทำการติดตั้ง mongoose `npm install mongoose` [docs](https://www.npmjs.com/package/mongoose)

```js
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected!"))
  .catch((error) => {
    console.log(error);
  });
```

- สร้าง MONGO_URL โดยเอาลิ้งค์มาจาก.env ใส่Method Connect  
  ถ้าConectสำเร็จให้ขึ้น Connected ถ้าไม่ผ่านให้ขึ้น Error  

  
