const express = require('express');
const mongoose = require('mongoose');
const route = require('./route/route');

const db = 'mongodb+srv://yash:0412@cluster0.wbchc6l.mongodb.net/questions?retryWrites=true&w=majority';
mongoose.connect(db).then(() => {
    console.log('connected !!!!')
}).catch((e) => {
    console.log('not connected...');
})

const app = express();

app.use(express.json());
app.use('/api', route);

app.listen(3000, () => {
    console.log('Server started ......')
})