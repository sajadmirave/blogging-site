const express = require("express");
const path = require("path");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");

//set path
let initial_path = path.join(__dirname, "public");

const app = express();

// middlewares
//encode url to get data from url
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.static(initial_path));
app.use(fileupload());

app.get("/", (req, res) => {
  res.sendFile(path.join(initial_path, "home.html"));
});

app.get("/editor", (req, res) => {
  res.sendFile(path.join(initial_path, "editor.html"));
});

// upload link
app.post("/upload", (req, res) => {
  // get data from url
  //   let file = req.files.image;
  //   let date = new Date();

  //get title and article
  let { title, article } = req.body;
  // image name
  //   let imagename = date.getDate() + date.getTime() + file.name;
  // image upload path
  //   let path = "public/uploads/" + imagename;

  // create upload
  //   file.mv(path, (err, result) => {
  //     if (err) {
  //       throw err;
  //     } else {
  //       // our image upload path
  //       res.json(`uploads/${imagename}`);
  //     }
  //   });

  res.send("success");
});

app.get("/:blog", (req, res) => {
  res.sendFile(path.join(initial_path, "blog.html"));
});

app.use((req, res) => {
  res.json("404");
});

app.listen("3000", () => {
  console.log("listening......");
});
