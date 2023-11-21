const mongoose=require("mongoose");
const DB=process.env.DATA_BASE 

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlparser:true
}).then(()=>console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})