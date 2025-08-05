const express = require('express');
const router = express.Router();
const Casoscontroller = require('../controllers/casosController');

router.get('/', Casoscontroller.getAll);
router.get('/:id', Casoscontroller.getById);
router.post('/', Casoscontroller.create);
router.put('/:id', Casoscontroller.update);
router.patch('/:id', Casoscontroller.partialUpdate);
router.delete('/:id', Casoscontroller.remove);

module.exports = router;