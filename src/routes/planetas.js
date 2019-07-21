const express = require('express');
const router = express.Router();
const PlanetaController = require('../app/controller/planetasController');
const PlanetaRequest = require('../app/request/planet');


const planetaController = new PlanetaController();

/* GET planetas listing. */
router.get('/', planetaController.store);
router.post('/', PlanetaRequest.create, planetaController.create);
router.get('/:id', PlanetaRequest.id, planetaController.findId);
router.get('/name/:nome', PlanetaRequest.nome, planetaController.findName);
router.delete('/:id', PlanetaRequest.id, planetaController.delete);


module.exports = router;
