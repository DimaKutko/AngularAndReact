const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const todoRoutes = require('./routes/todos');

const PORT = 8000;
const app = express();

const dbIp = '195.138.78.6';

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(todoRoutes);

async function start() {
    try {
        await mongoose.connect('mongodb+srv://dima:qwerty123456@cluster0.cnwmb.mongodb.net/todos');

        app.listen(PORT, () => {
            console.log('Server is online');
        });
    } catch (e) {
        console.log(e);
    }
}

start();