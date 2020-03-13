const express = require("express");
const port = 8000;
const path = require("path");

const db = require("./config/mongoose");
const todoList = require("./model/todolist");

//using express
const app = express();

//setting up the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("assets"));

app.use(express.urlencoded({extended : true}));

// homepage and sort the task list in ascending order as per date
app.get("/", function(req, res){
    todoList.find({}, function(err, lists){
        if(err){
            console.log("Error in fetching contacts from DB");
            return;
        }
        return res.render("home", {
            title: "ToDo List",
            list: lists
        });
    }).sort( { date: 1 } );
});

// adding the task
app.post("/addtask", function(req, res){
    console.log(req.body);

    todoList.create({
        task : req.body.task,
        category : req.body.category,
        date: req.body.date
    },function(err, listCreate){
        if(err){
            console.log("Error in creating List");
            return;
        }
        console.log("********", listCreate);
        return res.redirect("back");
    });
});

// deleting the task
app.get("/deletetask/:deleteEle", function(req,res){
    console.log("delete");

    let idArray = new Array();

    console.log(req.params.deleteEle);

    for(let i of (req.params.deleteEle).split(',')){
        idArray.push(i);
    }

    for( let i=0; i<idArray.length; i++){
        // let index = List.findIndex(listindex => listindex.task == idArray[i]);
        // console.log(index);
        
        // if(index != -1){
        //     List.splice(index, 1);
        // }

        todoList.findByIdAndDelete(idArray[i], function(err){
            if(err){
                console.log("Error in deleting an Object from DB");
                return;
            }
            
            // return res.redirect("back");
        });

    }
    
    return res.redirect("back");
});

//checking if server running successfully
app.listen(port, function(err){
    if(err){
        console.log(`Server is not running : Error : ${err}`);
    }
    console.log("Server is running sucessfully at port : ", port);
});