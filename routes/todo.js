
const express = require('express');

const router = express.Router();

const usercontroller = require('../controllers/todo')


router.post('/add-todo', usercontroller.addTodo)

router.get('/get-todo', usercontroller.getTodo)

router.delete('/delete-todo/:id', usercontroller.deleteTodo)

router.put('/edit-todo/:id', usercontroller.editTodo)

module.exports = router;