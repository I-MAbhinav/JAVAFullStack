const TODO = require('../model/todo');

// create a new todo
exports.createTodo = async (req, res) => {
try
{
    const { title, description } = req.body;

const todo =Todo.create({
    title,
    description});
    res.status(201).json({
        success:true,
        message:"Todo created successfully",
        data:todo,
    })

}
catch(error)
{
    res.status(500).json({ 
        success:false,
        message:"Internal server error",
    })
}
}