const mongoose = require('mongoose');
const { Schema } = mongoose;

// change to the data fields in the market form 
const marketSchema = new Schema({
    marketName: {
        type: String,
        required: [true, 'A farmer\'s market name is required.'],
        minlength: [1,'Minimum length for the farmer\'s market name is 1 character.']
    },
    address: {
        type: String,
        required: [true, 'An address is required.'],
        minlength: [4,'Minimum length for the address is 4 characters.']
    },
    city: {
        type: String,
        required: [true, 'A city is required.'],
        minlength: [1,'Minimum length for city is 1 character.']
    },
    state: {
        type: String,
        required: [true, 'A state is required.'],
        minlength: [1,'Minimum length for state is 1 character.']
    },
    zipCode: {
        type: Number,
        required: [true, 'A zip code is required.'],
        minlength: [4,'Minimum length for zip code is 4 characters.']
    },
    website: {
        type: String
    },
    springSummerFrom: {
        type: String
    },
    springSummerTo: {
        type: String
    },
    daysAndTimes: {
        type: String,
        required: [true, 'Days and times are required.'],
        minlength: [1,'Minimum length for days and times is 1 character.']
    },
    fallWinterFrom: {
        type: String
    },
    fallWinterTo: {
        type: String
    },
    daysAndTimes2: {
        type: String
    },
    location: {
        type: String,
        required: [true, 'A location is required.'],
        minlength: [1,'Minimum length for the farmer\'s market location is 1 character.']
    },
    description: {
        type: String,
        required: [true, 'A description is required.'],
        minlength: [4,'Minimum length for the farmer\'s market description is 4 characters.']
    },
    email: {
        type: String,
        required: [true, 'Your email is required.'],
        minlength: [1,'Minimum length for your email is 1 character.']
    },
    image: {
        type: String
    }
});

const Market = mongoose.model('Market', marketSchema);

module.exports = Market;