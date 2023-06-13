const mongoose = require('mongoose');
const { Schema } = mongoose;

// change to the 3 data fields in contact form
const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A title name is required.'],
        minlength: [1,'Minimum length for the title name is 1 character.']
    },
    email: {
        type: String,
        required: [true, 'Your email is required.'],
        minlength: [5,'Minimum length for your email is 5 characters.']
    },
    inquiry: {
        type: String,
        required: [true, 'Your request is required.'],
        minlength: [5,'Minimum length for your inquiry is 5 characters.']
    }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;