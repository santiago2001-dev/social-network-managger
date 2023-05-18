const router = require('express').Router();
const {subirHistoria,subirPost} = require('../controllers/instagramControllers');
router.get('/story',subirHistoria);
router.get('/post',subirPost);
module.exports = router;