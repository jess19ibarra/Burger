// creating connection to mySQL DB
var mysql = require('mysql');

var connection; 

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"309330Ij",
    database:"burger_db"
});
};

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