let express = require("express");
let connection = require("./db");
let cors = require("cors");
let app = express();

app.use(express.json());
app.use(cors());

app.get("/user", (req, res) => {
  let user = connection.query("select * from user", (err, info) => {
    if (err) {
      console.log(err);
    }
    res.send(info);
  });
});

app.post("/user", (req, res) => {
  let { id, name, address } = req.body;
  connection.query(
    `insert into user(id,name,address)values('${id}','${name}','${address}')`,
    (err, info) => {
      if (err) {
        console.log(err);
      }
      res.send(info);
    }
  );
});

app.delete("/user/:id", (req, res) => {
  let id = req.params.id;
  connection.query(`delete from user where id='${id}'`, (err, info) => {
    if (err) {
      console.log(err);
    }
    res.send(info);
  });
});

app.put("/user/:id", (req, res) => {
  let id1 = req.params.id;
  let { id, name, address } = req.body;
  connection.query(
    `update user set id='${id}',name='${name}',address='${address}' where id='${id1}'`,
    (err, info) => {
      if (err) {
        console.log(err);
      }
      res.send(info);
    }
  );
});

app.listen(4000);
