const { Router } = require('express');

const router = Router();
const {getUsers, getdenunciante, getestado, getfuncion, getfuncionarios, getjunta, getrol, getsexo, getmedida, getubicacion, getvictima} = require('../controllers/index.controller');
router.get('/users', getUsers);
router.get('/denun', getdenunciante);
router.get('/estado', getestado);
router.get('/funcion', getfuncion);
router.get('/funs', getfuncionarios);
router.get('/junta', getjunta);
router.get('/rol', getrol);
router.get('/sexo', getsexo);
router.get('/medida', getmedida);
router.get('/ubicacion', getubicacion);
router.get('/victima', getvictima);

module.exports = router;
