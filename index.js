//import routes from "./src/routes/r"

const express=require("express")
const routes=require("./src/routes/r")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const app=express()
const PORT=3000

mongoose.Promise=global.Promise
mongoose.connect("mongodb://0.0.0.0:27017/details",{
    useNewUrlParser:true
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

routes(app);


app.get("/",(req,res)=>{
    res.send(`App connected to port ${PORT} :)`)
})
// npm start -nodemon cmd
app.listen(PORT,(req,res)=>{
    console.log("Server is connected !") 
})
