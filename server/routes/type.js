const { Router } = require('express');
const type = require('../controllers/typeController');
const chekRole = require('../middleware/chekRole');

const router = Router();

router.post('/add',chekRole("ADMIN") ,type.createTypes)
router.get('/', type.getTypes)
router.delete('/:id',chekRole("ADMIN"), type.deleteTypes)


module.exports = router;