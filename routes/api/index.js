// RUTAS API
const router = require('express').Router();

router.use('/trips', require('./trips.route'));

module.exports = router;