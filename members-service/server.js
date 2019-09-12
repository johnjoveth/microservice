require('dotenv').config();
const express = require('express');
const app     = express();
const port    = process.env.PORT || 3001;
var cors      = require('cors');

const memRoute = require('./routes/members.js')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send('Hello to API home');
});

app.use('/api/members', memRoute);

// app.get('/api/members', (req, res) => {
//     res.send({
//         success: true,
//         message: "found",
//         data: []
//     });
// });

// app.get('/api.members/:id', (req, res) =>{
//     var result = members.find(mem => mem.id === parseInt(req.params.id));
//     if (!result){
//         res.status(404).send({
//             success: false,
//             message: 'Members not found'
//         });
//     };
// });


app.listen(port, ()=> {
    console.log(`App listening in port ${port}`);
});