const { Pool } = require('pg');
const fs = require('fs');
process.env.NODE_TLS_REJECT_UNAUTHORIZED="0"

const pool = new Pool({
  host:'ec2-54-161-208-31.compute-1.amazonaws.com',
  user:'vezeskdwpbmykz',
  password:'526320776431136653cee004f0859b8bfc06c71438f2cc751d67900c07df213a',
  database:'d8pcvtos8ek9n',
  port:'5432',
  ssl:true,
  
})

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM mostrar_denunciado()');
    res.status(200).json(response.rows);
    
  };

const getdenunciante = async (req, res) => {
  const response = await pool.query('SELECT * FROM mostrar_denunciante()');
  res.status(200).json(response.rows);
 };

 const getestado = async (req, res) => {
  const response = await pool.query('SELECT * FROM mostrar_estado()');
  res.status(200).json(response.rows);
 };

 const getfuncion = async (req, res) => {
  const response = await pool.query('SELECT * FROM mostrar_funcion()');
  res.status(200).json(response.rows);
 };

 const getfuncionarios = async (req, res) => {
  const response = await pool.query('SELECT * FROM mostrar_funcionarios()');
  res.status(200).json(response.rows);
 };

 const getjunta = async (req, res) => {
  const response = await pool.query('SELECT * FROM mostrar_juntaparroquial()');
  res.status(200).json(response.rows);
 };

 const getrol = async (req, res) => {
  const response = await pool.query('SELECT * FROM mostrar_rol()');
  res.status(200).json(response.rows);
 };

 const getsexo = async (req, res) => {
  const response = await pool.query('SELECT * FROM mostrar_sexo_p()');
  res.status(200).json(response.rows);
 };

 const getmedida = async (req, res) => {
  const response = await pool.query('SELECT * FROM mostrar_tipomedida()');
  res.status(200).json(response.rows);
 };

 const getubicacion = async (req, res) => {
  const response = await pool.query('SELECT * FROM mostrar_ubicacion()');
  res.status(200).json(response.rows);
 };

 const getvictima = async (req, res) => {
  const response = await pool.query('SELECT * FROM mostrar_victima()');
  res.status(200).json(response.rows);
 };



  
  module.exports = {
    getUsers,
    getdenunciante,
    getestado,
    getfuncion,
    getfuncionarios,
    getjunta,
    getrol,
    getsexo,
    getmedida,
    getubicacion,
    getvictima

  };
  