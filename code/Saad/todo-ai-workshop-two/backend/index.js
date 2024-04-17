import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let MONGO_URl = "mongodb+srv://todo:todo@todo-ai.yruyc1l.mongodb.net/?retryWrites=true&w=majority&appName=todo-ai"
let mongoclient = new MongoClient(MONGO_URl, { useNewUrlParser: true, useUnifiedTopology: true });

mongoclient.connect().then(() => {
    console.log('Connected to the database');
})

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 3000;

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/todos', async (req, res) => {
    const todos = await mongoclient.db('todo-ai').collection('todo').find({}).toArray();
    console.log(todos);
    res.send(todos);
});

app.post('/add-todo', async (req, res) => {
    const todo = req.body;

    if (!todo.name || Object.keys(todo).length === 0) {
        res.status(400).send('Invalid todo');
        return;
    }

    await mongoclient.db('todo-ai').collection('todo').insertOne(todo);
    res.send('Todo added successfully');
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
