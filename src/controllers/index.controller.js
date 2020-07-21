const { Pool } = require('pg');
const fs = require('fs');
process.env.NODE_TLS_REJECT_UNAUTHORIZED="0"

const pool = new Pool({
  host:'ec2-54-161-208-31.compute-1.amazonaws.com',
  user:'vezeskdwpbmykz',
  password:'526320776431136653cee004f0859b8bfc06c71438f2cc751d67900c07df213a',
  database:'d8pcvtos8ek9n',
  port:'5432'
})

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM mostrar_ubicacion()');
    
  };
  
  module.exports = {
    getUsers,
  };
  