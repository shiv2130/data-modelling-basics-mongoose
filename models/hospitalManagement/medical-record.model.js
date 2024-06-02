import mongoose from "mongoose"
const medicalRecordsSchema = new mongoose.Schema({},{timestamps: true})
export const MedicalRec= mongoose.model("MedicalRec", medicalRecordsSchema )