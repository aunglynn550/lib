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

app.get('/products',(req,res)=>{
    if(!req.query.search){
      return  res.send({
            error:'You must provide a search term'})
    }
    // By using return we are stopping the function execution
    // which means the code down below doesn't run
    console.log(req.query.search)
    res.send({        
        products:[]
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide an address!'
        })
    }
    
    res.send({
        forecast:'it is snowing',
        location:'Philadelphia',
        address:req.query.address
    })
})




app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help',
        name:'Aunglyn',
        helpText:'this is some helpful text'
    });
})
app.get('*',(req,res)=>{
   res.render('404',{
    title:'404',
    name:'Aunglyn',
    errorMessage:'Page No Found'
   })
})


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