const express= require('express');
const app= express.Router();

// http://localhost:Port/customer/quotation/---->

app.get('/',async(req,res)=>{
    try {
       return res.send('Hello World inside customer/quotation');
    } catch (error) {
      return res.send(error.message);  
    }
});


module.exports=app;