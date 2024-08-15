const express = require("express");
const router = express.Router(); // Create Router object
const model = require("./func");

// Convert form data from query string format to JSON format
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Set up page routes

router.get("/projects", async (request, response) => {
   try {
      let projects = await model.getProjects();

      return response.json(projects);
   } catch (err) {
      console.error(err);
      response.status(500).send("Error fetching Projects");
   }
});

module.exports = router;
