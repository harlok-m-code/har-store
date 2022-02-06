const { Router } = require('express');
const user = require('./user');
const type = require('./type');
const device = require('./device');

const router = Router();

router.use('/user', user)
router.use('/type', type)
router.use('/device', device)

module.exports = router;