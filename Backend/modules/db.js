const { MongoClient } = require("mongodb"); //import MongoClient class from mongodb driver

//DATABASE SETUP
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;
const client = new MongoClient(dbUrl); //create a MongoDB client

//MONGODB FUNCTIONS
const connect = async () => {
   try {
      db = client.db("portfolio");
      return db;
   } catch (error) {
      console.error("Database connection error:", error);
   }
};

module.exports = {
   connect,
};
