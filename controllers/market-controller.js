const Market = require('../models/market-model');

module.exports = {
    markets: async function (request, response) {
        await Market.find({}).then(function (market) {
            response.render('pages/markets', {
                data: market
            })
        }).catch(function (error) {
            console.log(error);
        }); 
    },
    // create market - renders the listings form
    create_market: (request, response) => {
        response.render('pages/listings', {
        });
    },
    // create market post - capture data for form and submit to the backend so can call upon this data on markets page so it can be seen 
    // update this based on listings form
    create_market_post: (request, response) => {
        const { marketName, address, city, state, zipCode, website, springSummerFrom, springSummerTo, daysAndTimes, fallWinterFrom, fallWinterTo, daysAndTimes2, location, description, email, image } = request.body;
        const newMarket = new Market ({
            marketName: marketName,
            address: address,
            city: city,
            state: state,
            zipCode: zipCode,
            website: website,
            springSummerFrom: springSummerFrom,
            springSummerTo: springSummerTo,
            daysAndTimes: daysAndTimes,
            fallWinterFrom: fallWinterFrom,
            fallWinterTo: fallWinterTo,
            daysAndTimes2: daysAndTimes2,
            location: location,
            description: description,
            email: email,
            image: image
        });

        newMarket.save();

        response.redirect("/markets");
    },
    // update for markets
    // PUT method - this actually sends the updated data 
    update_market: async function (request, response) {

        const { _id } = request.params;

        const { marketName, address, city, state, zipCode, website, springSummerFrom, springSummerTo, daysAndTimes, fallWinterFrom, fallWinterTo, daysAndTimes2, location, description, email, image } = request.body;

        await Market.findByIdAndUpdate({ _id: _id }, {
            $set: {
                marketName: marketName,
                address: address,
                city: city,
                state: state,
                zipCode: zipCode,
                website: website,
                springSummerFrom: springSummerFrom,
                springSummerTo: springSummerTo,
                daysAndTimes: daysAndTimes,
                fallWinterFrom: fallWinterFrom,
                fallWinterTo: fallWinterTo,
                daysAndTimes2: daysAndTimes2,
                location: location,
                description: description,
                email: email,
                image: image
            }
        }, { new: true }).then(function () {
            response.redirect("/admin")
        }).catch(function (error) {
            console.log(error)
        });
    },
    // update for markets
    // DELETE method - this deletes a market from the admin table
    delete_market: async function (request, response) {
    const { _id } = request.params;
        await Market.deleteOne({ _id: _id }).then(function () {
            response.redirect("/admin")
        }).catch(function (error) {
            console.log(error)
        });
    }
}



