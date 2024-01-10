let mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  port: 3308,
  user: "root",
  password: "123456",
  database: "demo10am",
});

con.connect((err, info) => {
  if (err) {
    console.log("unable to connect");
  } else {
    //console.log("connected");
  }
});

module.exports = con;
