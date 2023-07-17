//import routes from "./src/routes/r"
const express=require("express")
const routes=require("./src/routes/r")

const app=express()
const PORT=3000
routes(app);
app.get("/",(req,res)=>{
    res.send(`App connected to port ${PORT} :)`)
})
// npm start -nodemon cmd
app.listen(PORT,(req,res)=>{
    console.log("Server is connected !") 
})
