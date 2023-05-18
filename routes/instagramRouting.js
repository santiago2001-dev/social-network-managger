const router = require('express').Router();
const {subirHistoria,subirPost,generateImage} = require('../controllers/instagramControllers');
router.get('/story',subirHistoria);
router.get('/post',subirPost);
router.get('/story',subirHistoria);
router.get('/generateimage', generateImage);
module.exports = router;