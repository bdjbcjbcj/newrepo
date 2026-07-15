let mongoose=require("mongoose");
let Schema=mongoose.Schema;
let enquirySchema=new Schema({
     name:{
        type:String,
        rquired:true
    },
    email:{
        type:String,
        rquired:true,
        unique:true
    },
    phone:{
        type:String,
        rquired:true
    },
    message:{
        type:String,
        rquired:true
    },
});
let enquiryModel=mongoose.model('enquiry',enquirySchema);
module.exports=enquiryModel;