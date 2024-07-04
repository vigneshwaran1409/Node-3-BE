import studentModel from "../modules/student.js";
import dotenv from 'dotenv'
dotenv.config()
const allStudent =async (res,req)=>{
    try {
        const student =await studentModel.find();
        res.status(200).send({
            message:"student data fetch successfully",
            student,
        });
    } catch (error) {
        res.status(500).send({
            message:"internal server error",

        });

    }
}
const addStudent =async (res,req)=>{
    try {
        const user =await studentModel.findOne({email:req.body.email});
        if(!user) {
            await studentModel.create(req.body)
              res.status(200).send({
            message:"student added successfully",
        });
    }else{
        res.status(400).send({
            message: `studend with '${req.body.email}' already exists`,

        })
    }
    } catch (error) {
        res.status(500).send({
            message:"internal server error",

        });

    }
}
const deleteStudent =async (res,req)=>{
    try {
        const user =await studentModel.findOne({_id:req.params.id});
        if(user) {
        await studentModel.deleteOne({_id:req.params.id})
              res.status(200).send({
            message:"student deleted successfully",
        });
    }else{
        res.status(400).send({
            message: "invalid metor _id",

        })
    }
    } catch (error) {
        res.status(500).send({
            message:"internal server error",

        });

    }
}
const editStudent =async (res,req)=>{
    try {
        const user =await studentModel.findOne({_id:req.params.id});
        if(user) {
            await studentModel.updateOne({_id:req.params.id},{$set:req.body})
              res.status(200).send({
            message:"student edit successfully",
        });
    }else{
        res.status(400).send({
            message: "invalid metor _id",
})
    }
    } catch (error) {
        res.status(500).send({
            message:"internal server error",
             });
     }
}
const getoneStudent =async (res,req)=>{
    try {
        const user =await studentModel.findOne({_id:req.params.id});
        if(user) {
            await studentModel.findOne({_id:req.params.id})
              res.status(200).send({
            message:"student data successfully",
            user,
        });
    }else{
        res.status(400).send({
            message: "invalid metor _id",

        })
    }
    } catch (error) {
        res.status(500).send({
            message:"internal server error",

        });

    }
}
export default {
    addStudent,
    allStudent,
    deleteStudent,
    editStudent,
    getoneStudent
}