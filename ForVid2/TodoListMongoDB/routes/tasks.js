var express = require ("express");
var router = express.Router();
var mongojs = require("mongojs")
var db = mongojs(
    "tasklist",
    [tasks]
);

//Get All Tasks
router.get("/task",(req, res, next) => {
    db.task.find({}, {_id: 1, title: 1}, (err,tasks) => {
        if (err){
            res.send(err);
        }
    var data = [];
    Object.keys(tasks).forEach(key) => {
        var val = tasks[key];
        data.push([val.title, val._id]);
    });
    res.send(data);
    });
});

//Add task
route.post("'task",(req,res,next) = {
    var task = req.body;
    if(!task.title){
        res.status(400);
        res.json({
            erros: "Bad Data"
        });
    }else{
        db.task.save(task,(err,task)={
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

//Delete Task 
router.delete("/task/:id",(req,res,next)=> {
    db.task.remove({_id:mongojs.ObjectId(req.params.id)},(err, task) => {
        if (err){
            res.send(err);
        }
        res.json(task);
    });
});

//Update task
