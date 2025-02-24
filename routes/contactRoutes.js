const express = require("express");
const { getContact, createContact } = require("../controllers/contactControllers");
const router = express.Router();

router.get("/" , getContact);
router.post("/create-contact" , createContact);
module.exports = router;
// The code above is a basic example of a route file. It exports a router object that can be used in the main server file. The route file can contain multiple routes and each route can have multiple HTTP methods. In this example, the route file exports a router object with a single route that handles GET requests to the root URL ("/"). The route handler is a callback function that takes two arguments: req (request) and res (response). Inside the route handler, you can write code to handle the request and send a response back to the client.