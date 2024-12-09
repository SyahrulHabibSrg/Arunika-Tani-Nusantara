const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { createUMKM, getUMKM, deleteUMKM } = require('../controllers/umkmController');

router.post('/', upload.single('image'), createUMKM);

router.get('/', getUMKM);

router.delete('/:id', deleteUMKM);

module.exports = router;
