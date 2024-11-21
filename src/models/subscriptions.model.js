import mongoose, {Schema} from "mongoose"


const subscripitionSchema = new Schema({
    subscriber:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    channel:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})




export const Subscripitions = mongoose.model("Subscripitions", subscripitionSchema)