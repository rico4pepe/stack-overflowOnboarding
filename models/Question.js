import mongoose from "mongoose";

import * as AutoIncrement from 'mongoose-sequence'

AutoIncrement.mongoose

const questionSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, 
        required:true, ref:'User'},
    title:{type:String, required:false},
    text:{type:String, required:true},  
    votes: {type: Number, default: 0,} 
},
    {
        timestamps: true,
    }
   

)

// questionSchema.plugin(AutoIncrement, {
//     inc_field: 'question',
//     id : 'questionNums',
//     start_seq: 200
// })
export default mongoose.model("Question", questionSchema);