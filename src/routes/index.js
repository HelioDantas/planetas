const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('../config/swagger.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
