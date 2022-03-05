const express = require('express');
const router = express.Router();
const homecontroller = require("../../../controllers/api/v1/homeController");

router.get("/", homecontroller.front);
router.use('/questions', require('./questions'));
router.use('/options', require('./options'));

module.exports = router;