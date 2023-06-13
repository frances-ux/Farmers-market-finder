const Market = require('../models/market-model');
// change this to const Market and update market model 


module.exports = {
    // update admin to loop through markets
    admin: async function (request, response) {
        if (request.isAuthenticated) {
            await Market.find({}).then(function (allMarkets) {
                response.render("pages/admin", {
                    data: allMarkets,
                })
            }).catch(function (error) {
                console.log(error)
            });
        }  else {
            response.redirect("/login")
        }
    },
    // updated this for farmers market 
    update_market: async function (request, response) {
        const { _id } = request.params;
        await Market.findOne({ _id: _id }).then(function (market) {
            response.render('pages/update', {
                market: market
            })
        }).catch(function (error) {
            console.log(error)
        });
    }
}