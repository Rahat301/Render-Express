

const exprees = require('express')
const cors = require("cors")
const app = exprees();

// const port = process.env.PORT || 3000;
const port = 8000;
app.use(cors());
const users =[
    {
        id:0,
        name:"Rahat",
        phone:"01402",
        email:"rhrahat306@gmail.com"

    },
    {
        id:1,
        name:"Hossain",
        phone:"03216",
        email:"hossain500@gmail.com"

    },
    {
        id:2,
        name:"Masum",
        phone:"017543",
        email:"masum600@gmail.com"

    },
]


app.get ('/', (req,res)=>{
    res.send('Hello Express')
})
// qurery search
app.get('/users',(req,res)=>{
    const search =  req.query.name;
    const filteredSearch = users.filter(user=> (user.name.toLocaleLowerCase().includes(search)))
    
    {
        search? res.send(filteredSearch) : res.send(users);
    }

})

// app.get('/users',(req,res)=>{
//     res.send(users)
// })


//dynamic api
app.get('/users/:id' ,(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})




app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})