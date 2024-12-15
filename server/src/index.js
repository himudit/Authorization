const express = require('express');
const connectDB = require('./config/database')
const app = express();

const User = require('./models/user')

app.get('/signup', (req, res) => {
    const tryobj = {
        firstName: "c",
        lastName: "c",
        emailId: "c"
    }
    const user = new User(tryobj);

    user.save().then(() => {
        res.send("added successfully");
        console.log("user added cuccessfully")
    })
    .catch(err => console.error('Error:', err));
})

connectDB()
    .then(() => {
        console.log("Database connected Successfully");
        app.listen(3000, () => {
            console.log("Server running at 3000");
        })
    })
    .catch(err => { console.log(err) });

app.get('/', (req, res) => {
    return res.send('Hello');
})