const express = require('express');
const cors  = require('cors')
const app = express();
app.use(cors())

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require('./routes/index'));

app.set('port', process.env.PORT||3000)

app.listen(app.get('port'));
console.log("Server on port ${app.get('port')}");
