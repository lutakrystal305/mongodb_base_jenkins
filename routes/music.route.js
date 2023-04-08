const express = require('express');
const musicController = require('@controller/music.controller');

const router = express.Router();

router.get('/', musicController.getAll);
router.get('/:id', musicController.getById);
router.delete('/:id', musicController.deleteById);

module.exports = router;
