const express = require('express');
const router = express.Router();
const servicesController = require('../controller/servicesController')

router.get('/' , servicesController.addServices);

module.exports = router;