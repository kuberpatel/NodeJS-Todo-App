//Import necessary dependencies and models
const Todo = require('../app/Model/todomodel');
const router = require('express').Router();
const TodoList = require('../app/Model/todomodel');

//Create a new route for creating a new task
router.get('/', async (req, res) =>{
 const todo = await Todo.find({})
    return res.render("index", {
        tasks:todo
    });


});
router.post("/delete",async (req, res) =>{
    console.log(req.body.check);
    await Todo.findByIdAndDelete(req.body.check);
    return res.redirect('back');

});
router.post('/tasks', async (req, res) => {
    try{
        //Extract required data from request body
        const { description, category, date } = req.body;
        console.log(description, category, date);

        //Convert the date string to a date object
        const dueDate = new Date(date);

        //Create a new task with the extracted data
        const task = new TodoList({
            description,
            category,
            dueDate,
        });

        //Save the task to the database
        await task.save();

        //Redirect to the main page after saving the task
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

module.exports = router;
