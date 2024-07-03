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

- ลองรันappด้วย `node app.js` จพสังเกตเห็น log ว่า app เรากำลังรันอยู๋
