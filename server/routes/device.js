const { Router } = require('express');
const deviceController = require('../controllers/deviceController');
const checkRole = require('../middleware/chekRole');

const router = Router();

router.post('/add', checkRole("ADMIN") ,deviceController.createDevice)
router.get('/', deviceController.getDevices)
router.delete('/:id', checkRole("ADMIN"), deviceController.deleteDevice)

module.exports = router;