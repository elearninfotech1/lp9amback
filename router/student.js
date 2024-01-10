let express = require("express");
require("../dbconfig");
let cors = require("cors");
let Student = require("../student");
let app = express();

let studentRouter = express.Router();

app.use(express.json());
app.use(cors());

studentRouter.get("/", async (req, res) => {
  let user = await Student.find();
  res.send(user);
});

studentRouter.post("/", async (req, res) => {
  let user = new Student(req.body);
  let result = await user.save();
  res.send(result);
});

studentRouter.delete("/:id", async (req, res) => {
  let user = await Student.deleteOne({ _id: req.params.id })
   res.send(user);
});

studentRouter.get("/:id", async (req, res) => {
  let user = await Student.findOne({ _id: req.params.id });
  res.send(user);
});

studentRouter.put("/:id", async (req, res) => {
  let user = await Student.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(user);
});

module.exports = studentRouter;
