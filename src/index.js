const express = require('express');
const cors  = require('cors')
const app = express();
app.use(cors())

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.listen(3000);
console.log("Escuchando el puerto 3000");