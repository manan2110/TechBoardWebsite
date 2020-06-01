var express = require('express');
var app = express();

var router = express.Router();

const mongoose = require('mongoose');

router.use(require('./API/GET/demoAPI.js'));

router.use(require('./API/GET/initiatives.js'));
router.use(require('./API/POST/initiatives.js'));
router.use(require('./API/DELETE/initiatives.js'));

router.use(require('./API/POST/landingPageIndex.js'));
router.use(require('./API/GET/landingPageIndex.js'));
router.use(require('./API/DELETE/landingPageIndex.js'));

router.use(require('./API/POST/xclubIndex.js'));
router.use(require('./API/GET/xclubIndex.js'));
router.use(require('./API/DELETE/xclubIndex.js'));

router.use(require('./API/POST/xclubGalleryPage.js'));
router.use(require('./API/GET/xclubGalleryPage.js'));
router.use(require('./API/DELETE/xclubGalleryPage.js'));

module.exports = router;
