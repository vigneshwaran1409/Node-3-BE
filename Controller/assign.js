import studentModel from "../modules/student.js";
import mentorModel from "../modules/mentor.js";
const assignMultiStudent= async(res,req)=>{
    try {
       const mentor =await mentorModel.findOne({_id :req.params.id}); 
       const student =await studentModel.findOne({batch :req.params.batch}); 
       if(mentor){
        let student_id =student.map((e)=>e._id.valueof());
        await studentModel.updateMany(
            {batch:req.params.batch},
            {mentor:req.params.mentor_id}
        );
        let filter ={_id:req.params.mentor_id};
        let update ={student:student_id};
       await mentorModel.updateOne(filter,update);
       res.status(200).send({Message:"student assigned successfully"});
}    else{
    res.status(400).send({Message:"mentor id is not vaild"});
}
    } catch (error) {}
}


export default assignMultiStudent