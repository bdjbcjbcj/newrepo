const enquiryModel = require("../../Model/Enquiry.Model");

let enquiryInsert=(req,res)=>{
    let {name,email,phone,message}=req.body;
    let enquiry=new enquiryModel({
        name,
        email,
        phone,
        message
    });
    enquiry.save().then(()=>{
        res.send({status:1,message:"Enquiry saved Successfully"})
    }).catch((err)=>{
        res.send({status:0,message:"error while saving enquiry",error:err})
    })
}

let EnquiryList=async(req,res)=>{
let Enquiry=await enquiryModel.find();
res.send({status:1, message:"Successfuly view Enquiry",EnquiryList:Enquiry})
};

let EnquiryDelete=async(req,res)=>{
let emId=req.params.id;
let enquiry=await enquiryModel.deleteOne({_id:emId});
res.send({status:1,Message:"Deleted Successfully"},enquiry)
}
let EnquirySingleRow=async(req,res)=>{
    let emId=req.params.id;
    let enquiry=await enquiryModel.findOne({_id:emId})
    res.send({status:1,enquiry})
}
let EnquiryUpdate=async(req,res)=>{
    let enquiryId=req.params.id
    let {name,email,phone,message}=req.body
    let updObj={
        name,
        email,
        phone,
        message,
    }
    let updateRes = await enquiryModel.updateOne({_id:enquiryId},updObj)
    res.send({status:1,message:"inserted sucessfully",updateRes})
}
module.exports={enquiryInsert,EnquiryList,EnquiryDelete,EnquirySingleRow,EnquiryUpdate}
