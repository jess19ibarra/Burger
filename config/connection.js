// creating connection to mySQL DB
var mysql = require('mysql');

var connection; 

connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"309330Ij",
    database:"burger_db"
});

// connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// export
module.exports = connection;