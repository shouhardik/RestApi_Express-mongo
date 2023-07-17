const routes=(app)=>{
    app.route("/contact")
    .get((req,res,next)=>{
        console.log(`Req from : ${req.originalUrl}`)
        console.log(`Req type : ${req.method}`)
        next()
        },(req,res,next)=>{
            res.send("Get req succes!")
        })
    .post((req,res,next)=>{
        console.log(`Req:${req.routes}`)
        next()
        
    },(req,res,next)=>res.send("Post req success!"))
    app.route("/contact/:contactId")
    .put((req,res)=>{
        res.send("Put req")
    })
    .delete((req,res)=>{
        res.send("Del req")
    })
}
module.exports=routes