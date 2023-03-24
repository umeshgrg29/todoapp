const Todo = require('../models/todo')


const addTodo = async (req, res, next) => {
    try {
        console.log(req.body)
        const todo = req.body.todo;
        const description = req.body.description;
        const isCompleted = req.body.isCompleted;
        const data = await Todo.create({ todo: todo, description: description, isCompleted : isCompleted })
        res.status(201).json({ newTodoDetail: data })
    }
    catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

const getTodo = async (req, res, next) => {

    console.log('Inside get todo')
    try {
        const todo = await Todo.findAll();
        res.status(200).json({ allTodos: todo })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}


const deleteTodo = async (req, res, next) => {
    console.log("Inside the delete  todo")
    console.log(req.params.id)
    try {
        if(req.params.id == 'undefined'){
            console.log('Id is missing')
            return res.status(400).json({err : 'ID is missing'})
        }
        const uId = req.params.id;
        await Todo.destroy({ where: { id: uId } })
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

const editTodo = async (req,res, next) =>  {
    console.log('Inside edit todo')
    try {
        const todoId = req.params.id;
        const todo = await Todo.findOne({ where: { id: todoId } });
        if (!todo) {
          return res.status(404).json({ message: 'Todo not found' });
        }
    
        const updatedTodoflag = req.body.isCompleted;
    
        await Todo.update(
          { isCompleted: updatedTodoflag},
          { where: { id: todoId } }
        );
    
        const updatedData = await Todo.findOne({ where: { id: todoId } });
        res.status(200).json({ updatedTodoDetail: updatedData });
      } catch (err) {
        res.status(500).json({ error: err });
      }
}

module.exports = {
    addTodo,
    getTodo,
    deleteTodo,
    editTodo
}