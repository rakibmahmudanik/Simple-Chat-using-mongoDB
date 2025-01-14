const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/WhatsApp");
}

let allChats = [
  {
    from: "Ali",
    to: "Ahmed",
    msg: "Hello",
  },
  {
    from: "Ahmed",
    to: "Ali",
    msg: "Hi",
  },
  {
    from: "Ali",
    to: "Ahmed",
    msg: "How are you?",
  },
  {
    from: "Ahmed",
    to: "Ali",
    msg: "I am fine",
  },
  {
    from: "Ali",
    to: "Ahmed",
    msg: "Good to know",
  },
  {
    from: "Ahmed",
    to: "Ali",
    msg: "Bye",
  },
];

Chat.insertMany(allChats);
