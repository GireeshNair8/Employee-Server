//import json-server library in index.js
const jsonServer= require('json-server')

//create server using json-server library
const employeeServer= jsonServer.create()

//create path to db.json file
const router= jsonServer.router('db.json')

//middlewares to convert js to json
const middleware= jsonServer.defaults()

//connect/use middleware and router in server
employeeServer.use(middleware)
employeeServer.use(router)

//setup port for the server
const port= 3000 || process.env.port

//to listen server for resolving request
employeeServer.listen(port,()=>{
    console.log(`EmployeeServer running successfully at port number ${port}`);
})