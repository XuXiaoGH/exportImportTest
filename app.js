import Express from 'express';
var routes = require('./routes/index');
let app = Express();

app.use('/', routes);

app.listen(3000, () => {
    console.log('server running http://localhost:4321');
});

