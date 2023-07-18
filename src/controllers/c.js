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

export const updateContact=async(req,res)=>{
    try{
        let tobeUpdated= Contact.findById(req.body._id)
        let updated=await new tobeUpdated.findById(req.body._id)
        let savedUpdated=await updated.save()
        res.json(savedUpdated)
    }catch(err){
        res.status(500).send(err)
    }
}
