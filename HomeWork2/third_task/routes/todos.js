const {Router} = require('express')
const router = Router()
const Todo = require('../models/Todo')

router.get('/', async (req,res) => {
    const todos = await Todo.find({}).lean()
    console.log(todos)
    res.render('index', {
        title: 'Список дел',
        isIndex: true,
        todos
    })
})

router.get('/create', (req,res) => {
    res.render('create', {
        title: 'Создание нового дела',
        isCreate: true
    })
})

router.post('/create', async (req,res) => {
    const todo = new Todo({
        title: req.body.title
    })
    await todo.save()
    res.redirect('/')
})

router.get('/delete/:title', async(req, res) => {
    await Todo.findOneAndRemove({title: req.params.title})
    res.redirect('/')
})

module.exports = router