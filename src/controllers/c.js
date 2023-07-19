import mongoose from "mongoose"
import {ContactSchema} from "../models/m"

const Contact=mongoose.model("Contact",ContactSchema)

export const  addNewContact=async(req,res)=>{
    try{
    let newContact=  new Contact(req.body);
    let savedContact=  await newContact.save() 
    res.json(savedContact)
    }catch{(err)=>{
       res.status(500).send(err)
    }
}}  

export const getAllCOntacts=async(req,res)=>{
    try{
        let all_cont=await Contact.find()
        res.json(all_cont)

    }catch(err){
        res.status(500).send(err);
    }
}

export const getContactWithId=async(req,res)=>{
    try{
        let getId=await Contact.findById(req.params.contactId)
        res.json(getId)

    }catch(err){
        res.status(500).send(err);
    }
}

export const updateContact=async(req,res)=>{
    try{
        let tobeUpdated=await Contact.findOneAndUpdate({_id:req.params.contactId},req.body,{new:true})
       // let updated=await new tobeUpdated.findById(req.body._id)
       // let savedUpdated=await tobeUpdated.save()
        res.json(tobeUpdated)

    }catch(err){
        res.status(500).send(err)
    }
}
export const deleteContact=async(req,res)=>{
    try{
        let tobeDelete=await Contact.deleteOne({_id:req.params.contactId})
        res.json(tobeDelete)
    }catch(err){
        res.status(500).send(err)
    }
}
