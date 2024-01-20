
const express = require('express');
const cors = require("cors")
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/todo', async function(req, res){
    // const title = req.body.title;
    // const description = req.body.description;
    // const validation = createTodo.safeParse({title,description});
    // if(validation.success){
    //     res.json({
    //         msg: "todo created successfully"
    //     })
    // }

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong input"
        })
        return;
    }else{
        // put it in mongoDB
        await todo.create({
            title : createPayload.title,
            description : createPayload.description,
            completed : false
        })
        res.json({
            msg: 'Todo created'
        })
    }
})

app.get('/todos', async function(req, res){
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put('/completed', async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong input"
        })
        return;
    }
        // put it in mongoDB
    await todo.updateOne({
        _id : req.body.id
    },{
            completed : true
    })
    res.json({
        mgd : "Todo marked as completed"
    })
})

app.listen(3000, ()=>{
    console.log("Server is running")
})