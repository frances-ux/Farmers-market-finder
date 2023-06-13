const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller');


router.route('/')
    .get(siteController.index);

router.route('/about')
    .get(siteController.about);


router.route('/contact')
    .get(siteController.contact)
    .post(siteController.contact_post)

router.route('/register-login')
    .get(siteController.register_get)
    .post(siteController.register_post)

router.route('/login')
    .post(siteController.login_post)

// Google OAuth
router.route('/auth/google')
    .get(siteController.google_get)

router.route('/auth/google/admin')
    .get(siteController.google_redirect_get)

// ADD A logout route to destroy the session
router.route('/logout')
    .get(siteController.logout);

module.exports = router;