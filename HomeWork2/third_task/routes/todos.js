const { Router } = require('express')
const router = Router()
const Todo = require('../models/Todo')

router.get('/', async(req, res) => {
    const todos = await Todo.find({}).lean();
    res.render('index', {
        title: 'Список дел',
        isIndex: true,
        todos
    });
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Создание нового дела',
        isCreate: true
    });
})

router.post('/create', async(req, res) => {
    const todo = new Todo({
        title: req.body.title
    });
    await todo.save();
    res.redirect('/');
})

router.get('/delete/:title', async(req, res) => {
    await Todo.findOneAndRemove({ title: req.params.title });
    res.redirect('/');
})

router.post('/update/:id', async(req, res) => {
    let todo = await Todo.findById(req.params.id);

    let completed = req.body.completed;

    if (completed === null) completed = false; // Почему-то не работает completed ?? false
    todo.completed = completed;
    todo.save();

    res.redirect('/');
})

module.exports = router