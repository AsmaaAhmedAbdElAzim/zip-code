# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.
## i Do :
1- set global variable which hold input that user write zip code  and your feeling and variable hold button,creat acount on open weather map to take api key and take api url

2- use method (addEventListener) take two parmetar frist event(click) secand function (arrow function) in this function test if user entry zip code and feeling or not by if statment.
3-when user not entry data appear alert to write data but user write data save this data in object(userData).
4-do async function to get temptuer from api by api key and api url retun promise (data) which hold all data that get from api .
5-do async function add data to local server by post request (client side) 
6- post route with function to save data in object (projectData) then send response (projectData) (server side)
7- async function to get data from local server to Displays in user inter face (client side)
8- get route with function to send response (projectData) (server side)
