const express = require('express');
const errorHandler = require('./src/middlewares/errorHandler');

const router = express.Router();

const notification = require('./src/routes/notification');

router.use('/notification', notification);
router.use(errorHandler);

module.exports = router;
