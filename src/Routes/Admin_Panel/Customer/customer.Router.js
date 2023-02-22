const express= require('express');
const app= express.Router();

// http://localhost:Port/admin/customer/---->

app.get('/',async(req,res)=>{
    try {
       return res.send('Hello World inside admin/customer');
    } catch (error) {
      return res.send(error.message);  
    }
});


module.exports=app;