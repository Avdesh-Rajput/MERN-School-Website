const express = require('express');
const router = express.Router();
const newsController = require('../controller/newsController');
const auth = require('../middlewares/auth');

router.get('/' ,  newsController.getNews);
router.post('/' , auth , newsController.addNews);

module.exports = router;