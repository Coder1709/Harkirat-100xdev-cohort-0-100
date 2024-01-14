const todo = require("./db");
const { createTodo, updateTodo  } = require("./types");

const express = use ("express");


//creating the express app
const app = express();
//middle ware
app.use(express.json());

//routes

app.post("/todo" ,async(req,res)=> {

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
    await todo.create( {
        title: todo.createPayload.title,
        description: todo.createPayload.description,
        completed: false,
    })

    res.json({
        message:"todo created successfully",
    });





})

app.get("/todos" ,async(req,res)=> {
    const data = await todo.find();

    res.json({
        data,
    })


})


app.put("/completed" ,async(req,res)=> {
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

    await todo.update( {
        _id:req.body.id,
    } , {
        completed:true,
    } )

    res.json({
        message:"todo marked as completed",
    });
    



})

//PORT 

app.listen(3000,()=> {
    console.log("server is running on port 3000");
})