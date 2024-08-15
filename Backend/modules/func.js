const { connect } = require("../modules/db");
const { ObjectId } = require("mongodb");

//MONGODB FUNCTIONS
const getProjects = async () => {
   try {
      let db = await connect();
      let projects = await db.collection("project").find().toArray();
      return projects;
   } catch (error) {
      console.error("Database connection error:", error);
   }
};

module.exports = {
   getProjects,
};
