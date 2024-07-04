import mongoose from "./index.js";
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const mentorSchema =new mongoose.Schema({
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
        students:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'student',
        },
    ],
        batch:[
        {type:String}
    ],
},
{
   collection: 'mentor',
   versionKey:false
}

    )
    const mentorModel=mongoose.model('mentor',mentorSchema);
    export default mentorModel