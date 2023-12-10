const express=require('express');
const app=express();

app.use(express.json());
app.use('/',(req,res,next)=>{
    return res.status(200).json({
        "message":  "bu alan  hastane servisidir"
    });
})

app.listen(8004,()=>{
   console.log("server is running on port 8004");
});