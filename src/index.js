const express = require('express');

const path = require('path');

const hbs = require('hbs');

const app = express();

const PORT = process.env.PORT || 3000;

const filePath = path.join(__dirname, '/public');
 
const template_path = path.join(__dirname, '../templates/views');

const partials_path = path.join(__dirname, '../templates/partials');



console.log(template_path);

app.set('view engine', 'hbs');
app.use(express.static(filePath));

hbs.registerPartials(partials_path);

app.set('views', template_path);

// console.log(filePath);

app.use(express.static(filePath))

app.get('/', (req, res) => {
    
    res.render("index");
});

app.get('/about', (req, res) => {
    
    res.render('about');
})

app.get('/weather', (req, res) => {
    
    res.render("weather");
})

app.get('*', (req, res) => {
    
    res.render('error', {
        errMsg:"Opps! Page Not Found"
    });
})

app.listen(PORT, 'localhost', () => {
    
    console.log(`connected at port no ${PORT}`);
})