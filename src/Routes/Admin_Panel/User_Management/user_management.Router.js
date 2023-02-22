const express= require('express');
const app= express.Router();

// http://localhost:Port/admin/userManagement/---->

app.get('/',async(req,res)=>{
    try {
       return res.send('Hello World inside admin/userManagement/');
    } catch (error) {
      return res.send(error.message);  
    }
});


module.exports=app;