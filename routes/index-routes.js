const express = require('express');
const adminRouter = require('./admin-routes');
const marketRouter = require('./market-routes');
const siteRouter = require('./site-routes');
const router = express.Router();

router.use('/', siteRouter);
router.use('/markets', marketRouter);
router.use('/admin', adminRouter);

module.exports = router;