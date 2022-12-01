const path= require('path');
const express = require('express')
const hbs = require('hbs')

console.log(__dirname);
console.log(path.join(__dirname,'../public'));

const app = express()
// After express is created we serve up the dir


//Define paths for Express config
const public = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')



//setUp handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


//Setup static directory to serve
app.use(express.static(public))

app.get('', (req,res)=>{
    res.render('index',{
        title: 'Weather App',
        name:'AungLynn'
    });
});

app.get('/about', (req,res)=>{
    res.render('about',{
        title: 'About',
        name:'AungLynn'
    });
});



app.get('', (req,res) => {
    res.send('<h1>Hello</h1>')
});

app.get('/help', (req,res) => {
    res.send([
        {
            name:'Ko AUng',
            age:23
        },{
            name:'Sarah',
            age:23
        }
    ])
});


// app.get('/about', (req,res) => {
//     res.send('<h1>About</h1>')
// });
app.get('/weather', (req,res) => {
    res.send([
        {
            forecast:'30deg',
            location: 'New York'
        },
        {
            forecast:'20deg',
            location: 'UK'
        }
    ])
});

app.listen(3000, () => {
    console.log('Server is up on port 3000!')
})