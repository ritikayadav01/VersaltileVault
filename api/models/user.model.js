import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default:"login.png",
        }
},{timestamps:true})

const User1=mongoose.model('User1',userSchema);
export default User1;