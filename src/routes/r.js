import { addNewContact,getAllCOntacts,updateContact,getContactWithId,deleteContact } from "../controllers/c"

const routes=(app)=>{
    app.route("/contact")
    .get(getAllCOntacts)
    .post(addNewContact)
    app.route("/contact/:contactId")
    .get(getContactWithId)
    .put(updateContact)
    .delete(deleteContact)
}
module.exports=routes