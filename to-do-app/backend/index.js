const { createTodo, updateTodo  } = require("./types");

const express = use ("express");


//creatng the express app
const app = express();
//middle ware
app.use(express.json());

//routes

app.post("/todo" ,(req,res)=> {

    const createPayload = req.body;

    const parsePayload = createTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(400).json({
            message:"invalid payload",
            errors:parsePayload.error
        })
        return;
    }
    //put in mongodb





})

app.get("/todo" ,(req,res)=> {


})


app.put("/completed" ,(req,res)=> {
    const completedId = req.body.id;

    const parseCompletedId = updateTodo.safeParse(completedId);

    if(!parseCompletedId.success){
        res.status(400).json({
            message:"invalid payload",
            errors:parseCompletedId.error
        })
        return;
    }

    //put in mongodb



})

//PORT 

app.listen(3000,()=> {
    console.log("server is running on port 3000");
})