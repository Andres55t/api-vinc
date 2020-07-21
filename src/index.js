const express = require('express');
const cors  = require('cors')
const app = express();
app.use(cors())

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require('./routes/index'));

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);

console.log("Server on port 3000");