const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller.js');

const app = express(); // creates express app
app.use( bodyParser.json() ); // configures app to parse json from the body

app.post  ('/api/messages'    , mc.create);
app.get   ('/api/messages'    , mc.read);
app.put   ('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);

const port = 3000;
app.listen(port, () => { console.log(`Server listening on port ${port}`) } );