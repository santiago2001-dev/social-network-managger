const router = require('express').Router();
const multer = require('multer');

// Configuración de Multer para gestionar el formulario multipart/form-data
const storage = multer.memoryStorage(); // Almacenamos los archivos en memoria
const upload = multer({ storage: storage });

const {subirHistoria,subirPost,captureIp} = require('../controllers/instagramControllers');
router.post('/story', upload.single('archivo'),subirHistoria);
router.get('/ip',captureIp);
router.post('/post',upload.single('archivo'),subirPost);
module.exports = router;