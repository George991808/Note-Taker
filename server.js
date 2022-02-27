const express = require('express');

const app = express();
const webRoutes = require('./routes/web');
const appRoutes = require('./routes/api');
const path = require('path');

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(webRoutes);
app.use(appRoutes);

app.get('*',(req,res)=>{
    console.log("asdas")
    const htmlPath = path.join(__dirname,  "public", 'index.html');
    res.sendFile(htmlPath);

 });

app.listen(PORT,() => {
    console.log('app is running on ${PORT} ')
})