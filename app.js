let express = require("express");
require("./dbconfig"); // con db
let cors = require("cors");
let Student = require("./student");
let Employee = require("./employee");
let Signup = require("./signup");
const studentRouter = require("./router/student");
const employeeRouter = require("./router/employee");
let app = express();

app.use(express.json());
app.use(cors());

app.use("/student/", studentRouter);
app.use("/employee/", employeeRouter);

app.post("/signup", async (req, res) => {
  let user = new Signup(req.body);
  let result = await user.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  await Signup.findOne({ email: email })
    .then((info) => {
      if (info == null) {
        res.send(" no user found");
      } else if (info.password == password) {
        res.send("Valid");
      } else {
        res.send("Invalid user");
      }
    })
    .catch((err) => {
      console.log(" no user found");
    });
});

app.listen(4000);
