let express = require("express");
require("../dbconfig");
let cors = require("cors");
let Employee = require("../employee");
let app = express();

let employeeRouter = express.Router();

app.use(express.json());
app.use(cors());

employeeRouter.get("/", async (req, res) => {
  let user = await Employee.find();
  res.send(user);
});

employeeRouter.post("/", async (req, res) => {
  let user = new Employee(req.body);
  let result = await user.save();
  res.send(result);
});

employeeRouter.delete("/:id", async (req, res) => {
  let user = await Employee.deleteOne({ _id: req.params.id })
    .then((ress) => {
      res.send("Deleted");
    })
    .catch((err) => {
      res.send("Unable to delete");
    });
});

employeeRouter.get("/:id", async (req, res) => {
  let user = await Employee.findOne({ _id: req.params.id });
  res.send(user);
});

employeeRouter.put("/:id", async (req, res) => {
  let user = await Employee.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(user);
});

module.exports = employeeRouter;
