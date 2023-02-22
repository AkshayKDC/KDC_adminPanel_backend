const express= require('express');
const app= express.Router();

// http://localhost:Port/admin/payment/---->

app.get('/',async(req,res)=>{
    try {
       return res.send('Hello World inside admin/payment');
    } catch (error) {
      return res.send(error.message);  
    }
});


module.exports=app;