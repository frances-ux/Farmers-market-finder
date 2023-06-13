const express = require('express');
const marketController = require('../controllers/market-controller');
const router = express.Router();

router.route('/')
    .get(marketController.markets)
    // render markets page - after they post the market in the listings page they will be redirected here to see all of the markets + one they created

router.route('/create-market')
    .get(marketController.create_market) 
    .post(marketController.create_market_post)
    // create market - renders the listings form
    // create market post - capture data for form and submit to the backend so can call upon this data on markets page so it can be seen 


router.route('/:_id')
    .put(marketController.update_market)
    .delete(marketController.delete_market)
    // PUT method - this actually sends the updated data to the admin table
    // DELETE method - this deletes a market from the admin table

module.exports = router;