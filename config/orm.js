var connection = require("../config/connection");

function createQuestions(num) { 
  var arr = [];
  for(var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

//helper
function translateSql(obj) {
  var arr = []
  for (var key in obj) {
    var value = obj[key];
    if (Object.hasOwnProperty.call(obj, key)) {
      if(typeof value === "string" && value.indexOf (" ") >= 0) {
        value = "'" + value + "'" ;
      }
      arr.push(key + "=" + value)

    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function(table, cb) {
    var dbQuery = "SELECT * FROM " + table + ";";
    
    connection.query(dbQuery, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  insertOne: function(table, cols, vals, cb) {
   var dbQuery = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQuestions(vals.length) + ") ";
    
    console.log(dbQuery);
    connection.query(dbQuery, vals, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  updateOne: function(table, objColVals, condition, cb) {
    var dbQuery = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition;
    
     console.log(dbQuery);
    connection.query(dbQuery, function(err, res) { 
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
   
  deleteOne: function(table, condition, cb) {
    var dbQuery = "DELETE FROM " + table + " WHERE " + condition;

    console.log(dbQuery);
    connection.query(dbQuery, function(err, res) { 
      if (err) {
        throw err;
      }
      cb(res);
    });
  }
   
};

module.exports = orm;