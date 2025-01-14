const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chats.js");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/WhatsApp");
}

app.get("/", async (req, res) => {
  const chats = await Chat.find();
  res.render("chats.ejs", { chats });
});

app.post("/", (req, res) => {
  let { from, to, msg } = req.body;
  const newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    date: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      //if you use .then , then you don't need to use await.
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
