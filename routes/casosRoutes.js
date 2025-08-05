const express = require('express');
const router = express.Router();
const Casoscontroller = require('../controllers/casosController');

router.get('/:id', Casoscontroller.getById);
router.post('/', Casoscontroller.create);
router.put('/:id', Casoscontroller.update);
router.delete('/:id', Casoscontroller.remove);

module.exports = router;