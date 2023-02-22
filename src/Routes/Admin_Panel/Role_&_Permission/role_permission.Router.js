const express= require('express');
const app= express.Router();

// http://localhost:Port/admin/R&P/---->

app.get('/',async(req,res)=>{
    try {
       return res.send('Hello World inside admin/R&P');
    } catch (error) {
      return res.send(error.message);  
    }
});


module.exports=app;