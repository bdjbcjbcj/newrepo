let express=require('express');
const { enquiryInsert, EnquiryList, EnquiryDelete, EnquirySingleRow, EnquiryUpdate } = require('../../controllers/web/enquiryController');
let enquiryRouter=express.Router();


enquiryRouter.post("/insert",enquiryInsert);
enquiryRouter.get("/view",EnquiryList);
enquiryRouter.delete("/delete/:id",EnquiryDelete);
enquiryRouter.get("/single/:id",EnquirySingleRow);
enquiryRouter.put("/update/:id",EnquiryUpdate);







module.exports=enquiryRouter;