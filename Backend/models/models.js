const { mongoose } = require("mongoose");

//set up Schema and model
const projectSchema = new mongoose.Schema({
   title: String,
   description: String,
   imgPath: String,
   ghLink: String,
   demoLink: String,
});

// Create Mongoose models for both collections
const Projects = mongoose.model("Project", projectSchema);

module.exports = {
   Projects,
};
