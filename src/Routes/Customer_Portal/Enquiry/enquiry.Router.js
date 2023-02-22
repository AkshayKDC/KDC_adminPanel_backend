const express= require('express');
const app= express.Router();

// http://localhost:Port/customer/enquiry/---->

app.get('/',async(req,res)=>{
    try {
       return res.send('Hello World inside customer/enquiry');
    } catch (error) {
      return res.send(error.message);  
    }
});


module.exports=app;