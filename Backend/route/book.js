const express=require("express");

const {getBook} = require("../controller/book");
const router=express.Router();

router.get("/",getBook);

module.exports=router;