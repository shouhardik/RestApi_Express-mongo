import { addNewContact,getAllCOntacts,updateContact } from "../controllers/c"

const routes=(app)=>{
    app.route("/contact")
    .get(getAllCOntacts)
    .post(addNewContact)
    app.route("/contact/:contactId")
    .put(updateContact)
    .delete((req,res)=>{
        res.send("Del req")
    })
}
module.exports=routes