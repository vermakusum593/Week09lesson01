import express from 'express';
const app  = express();

const port = 3000;
app.get('/',(req, res) => {
    res.send('Welcome to our API!');

});

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);

});

/*
app.get('/user', (req, res) => {
    const user =[
        { id: 1, name: 'john joe'},
        { id: 2, name: 'jane Smith'}
    ];
    res.json(user);
});

app.use(express.json());

app.post('/users', (req, res) => {
    const newuser = req.body;
    console.log(newuser);
    res.json({message: 'user added sucessfully', user: newuser});

});
*/


app.use(express.json());





app.get('/user', (req, res) => {
    const users = [
        { id: 1, name: 'John Joe' },
        { id: 2, name: 'Jane Smith' }
    ];
    res.json(users);
});


app.get('/welcome', (req, res) => {
    res.send('Hello, developer!');
});


app.post('/users', (req, res) => {
    const { name, age } = req.body;
    
    if (!name || !age) {
        return res.status(400).json({ error: 'Please provide both name and age.' });
    }

    res.json({ message: `Hello, ${name}! You are ${age} years old.` });
});
