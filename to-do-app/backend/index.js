const express = use ("express");
//creatng the express app
const app = express();
//middle ware
app.use(express.json());

//routes

app.post("/todo" ,(req,res)=> {
    
})

//PORT 

app.listen(3000,()=> {
    console.log("server is running on port 3000");
})