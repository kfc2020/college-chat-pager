const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({
    username:{
    type: String,
    requires:true,
    min:3,
    max:20,
    unique:true,
},
email:{
    type:String,
    requires:true,
    unique:true,
    max:50,
},
password:{
    type:String,
    required:true,
    min:0,
},
avatarImageset:{
    type:Boolean,
    default:false,
},
avatarimage:{
    type:String,
    default:"",
}
});
module.exports = mongoose.model("Users",userSchema);