const express=require('express');
const app=express();
app.get('/',(req,res)=>{
       setTimeout(()=>{
        res.status(200).send(`hello from ${process.pid}`);
       },2000);
});
app.listen(3000,()=>{
    console.log(`started Process ${process.pid}`);
}
);