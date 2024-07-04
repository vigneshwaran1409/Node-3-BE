import mongoose from "./index.js";
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        validate:{
            validator:validateEmail,
            message:props =>`${props.value} is not a valid email`
        }
     },
    mentor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"mentor"
    },
    batch:{
        type:String,
        required:[true,"batch is required"]
    },
   previous_mentor:[{ type:mongoose.Schema.Types.ObjectId,
     ref:"mentor" }],

  },
  {
    collection:"student",
    versionKey:false
  })
  const studentModel=mongoose.model('student',studentSchema);
  export default studentModel