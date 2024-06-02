import mongoose from "mongoose"
const hospitalsSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  adressLine1:{
    type:String,
    required:true,
  },
  adressLine2:{
    type:String,
  },
  city:{
    type:String,
    required:true
  },
  pincode:{
    type:String,
    required:true,
  },
  specialization:[
    {
    type:String,

  }
],
},{timestamps: true})
export const Hospital= mongoose.model("Hospital", hospitalSchema )