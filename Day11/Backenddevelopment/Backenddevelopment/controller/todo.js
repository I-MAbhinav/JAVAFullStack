const Todo = require("../model/todo");

//create

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;


        const todo = await Todo.create({ title, description });

        res.status(201).json({
            message: "Todo Created sucessfully",
            data: todo,
            success: true,
        })

    } catch (err) {
        console.log("Error in create Todo", err);
        res.status(500).json({
            message: "Internal  Server Error",
            error: err,
            success: false,
        })
    }


}





//update


exports.updateTodoById = async (req, res) => {
    try {

        const { id } = req.params;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate({ _id: id },{
            title: title,
            description: description,
        },{ new: true } );
        res.status(200).json({
            message: `Todo by ${id} updated sucessfully`,
            success: true,
            data: todo
        })

    } catch (err) {
        console.log("Error in create Todo", err);
        res.status(500).json({
            message: "Error in updating  todo by id",
            error: err,
            success: false,
        })
    }
}






//delete

exports.deleteTodoById = async (req, res) => {
    try {

        const { id } = req.params;
      

        const todo = await Todo.findByIdAndDelete({ _id: id });
        res.status(200).json({
            message: `Todo by ${id} deleted sucessfully`,
            success: true,
            data: todo
        })

    } catch (err) {
        console.log("Error in create Todo", err);
        res.status(500).json({
            message: "Error in delete  todo by id",
            error: err,
            success: false,
        })
    }
}





//get by id

exports.getTodoById = async (req, res) => {
    try {

        const { id } = req.params;

        const todo = await Todo.findById({ _id: id });
        res.status(200).json({
            message: `Todo by ${id} Fetched sucessfully`,
            success: true,
            data: todo
        })

    } catch (err) {
        console.log("Error in create Todo", err);
        res.status(500).json({
            message: "Error in fetching  todo by id",
            error: err,
            success: false,
        })
    }
}





//get all

exports.getAllTodo = async (req, res) => {
    try {

        const todos = await Todo.find({});

        res.status(200).json({
            message: "All Todo Fetched sucessfully",
            success: true,
            data: todos
        })



    } catch (err) {
        console.log("Error in create Todo", err);
        res.status(500).json({
            message: "Error in fetching all todos",
            error: err,
            success: false,
        })

    }

}