const express = require('express');

const app = express();
const webRoutes = require('./routes/web');
const appRoutes = require('./routes/web');

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(webRoutes);

app.listen(PORT,() => {
    console.log('app is running on ${PORT} ')
})