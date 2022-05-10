

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express= require('express');
const application = express();
// Start up an instance of app
let port = 2000;
const localServer = application.listen(port,()=>{
    console.log (`server work on port ${port}`)
})
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser=require('body-parser');
application.use(bodyParser.urlencoded({ extended: false }));
application.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
application.use(cors());
// Initialize the main project folder
application.use(express.static('website'));
//post route with call back function 
application.post("/add", (req, res) =>{
    projectData = req.body;
    res.send(projectData)

})

// get rout with call back function
application.get ('/get',(req,res)=>{
    res.send(projectData)
    projectData = allData
})

