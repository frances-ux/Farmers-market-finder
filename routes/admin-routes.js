const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');


router.route('/')
    .get(adminController.admin);
    // this will show the admin page listing names of markets in a table with delete and update buttons
    // this controller will need to pass data bc it will have listing of all markets

router.route('/update-market/:_id')
    .get(adminController.update_market);
    // give me the specific market that I clicked on to update
    // inside of controller it will need to grab id of market -- look at comics project for reference 

module.exports = router;