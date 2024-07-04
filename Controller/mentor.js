import mentorModel from "../modules/mentor.js";
import studentModel from "../modules/student.js";
import dotenv from "dotenv"
dotenv.config()
const allMentor =async (res,req)=>{
    try {
        const mentor =await mentorModel.find();
        res.status(200).send({
            message:"mentor data fetch successfully",
            mentor,
        });
    } catch (error) {
        res.status(500).send({
            message:"internal server error",

        });

    }
}
const addMentor =async (res,req)=>{
    try {
        const user =await mentorModel.findOne({email:req.body.email});
        if(!user) {
            await mentorModel.create(req.body)
              res.status(200).send({
            message:"mentor added successfully",
        });
    }else{
        res.status(400).send({
            message: `Mentor with '${req.body.email}' already exists`,

        })
    }
    } catch (error) {
        res.status(500).send({
            message:"internal server error",

        });

    }
}
const deleteMentor =async (res,req)=>{
    try {
        const user =await mentorModel.findOne({_id:req.params.id});
        if(user) {
        await mentorModel.deleteOne({_id:req.params.id})
              res.status(200).send({
            message:"mentor deleted successfully",
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
const editMentor =async (res,req)=>{
    try {
        const user =await mentorModel.findOne({_id:req.params.id});
        if(user) {
            await mentorModel.updateOne({_id:req.params.id},{$set:req.body})
              res.status(200).send({
            message:"mentor edit successfully",
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
const getoneMentor =async (res,req)=>{
    try {
        const user =await mentorModel.findOne({_id:req.params.id});
        if(user) {
            await mentorModel.findOne({_id:req.params.id})
              res.status(200).send({
            message:"mentor data successfully",
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
const mentorstudentlist =async (res,req)=>{
    try {
        const mentor =await mentorModel.findOne(
            {_id:req.params.id},
            {_id:0}
            );
            let student =await studentModel.find({mentor:req.params.id})
        if(mentor) {

              res.status(200).send({
            message:"mentor student list  successfully",
            mentor,
            student
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

const addBatch = async (req, res) => {
    try {
      const id = req.params.id;
      const batch = req.params.batch;
    const findBatch = await mentorModel.findOne({batch:{$all: [batch]}})
    if(!findBatch){
        await mentorModel.updateOne({_id: req.params.id}, { $push: { batch: batch } })
      res.status(200).send({
        message: "updated",
      });
    }else{
      res.status(400).send({
        message: `Batch with ${batch} already exists`
      })
    }



    } catch (error) {
      res.status(500).send({
        message: "Internal server Error",
      });
    }
  };

  export default{
    allMentor,
    addMentor,
    deleteMentor,
    mentorstudentlist,
    addBatch,
    editMentor,
    getoneMentor
  }