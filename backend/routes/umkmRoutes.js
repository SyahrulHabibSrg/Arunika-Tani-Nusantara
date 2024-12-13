const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { createUMKM, getUMKM, deleteUMKM, updateUMKM } = require('../controllers/umkmController');

router.post('/', upload.single('image'), createUMKM);

router.get('/', getUMKM);

router.delete('/:id', deleteUMKM);

router.put('/:id', upload.single('image'), updateUMKM);

module.exports = router;
