const User = require('../models/user-model');
const Contact = require('../models/contact-model');
const passport = require('passport');


module.exports = {
    index: (request, response) => {
        response.render('pages/index', {
        });
    },
    about: (request, response) => {
        response.render('pages/about', {
        });
    },
    contact: (request, response) => {
        response.render('pages/contact', {
        });
    },
    contact_post: (request, response) => {
        const { name, email, inquiry } = request.body; 
        const contact = new Contact({
            name: name,
            email: email,
            inquiry: inquiry
        });

        contact.save();
        response.redirect('/');


    },
    login_post: (request, response) => {
        const { username, password } = request.body;
        const user = new User({
            username: username,
            password: password
        });
        
        request.login(user, (error) => {
            if (error) {
                console.log(error);
                // response.redirect('/login'); 
            } else {
                passport.authenticate('local')(request, response, () => {
                    response.redirect('/admin');
                });
            }
        });
    },
    // test if login, register, and logout work. not working in course project. 
    logout: (request, response) => {
        request.logout();
        response.redirect('/')
    },
    // showing page that has both login and register forms 
    register_get: (request, response) => {
        response.render('pages/login', {
        });
    },
    register_post: (request, response) => {
        // const { username, password } = request.body;
        User.register({ username: request.body.username }, request.body.password, (error, user) => {
            if (error) {
                console.log(error);
                // response.redirect('/register');
            } else {
                passport.authenticate('local')(request, response, () => {
                    response.redirect('/login');

                    // should this redirect to admin page or login page??

                });
            }
        });
    },
    //Adding Google OAuth
    google_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }),
    
    google_redirect_get: [
        passport.authenticate('google', { failureRedirect: '/login' }),
        function (request, response) {
        // Successful authentication, redirect home.
            response.redirect('/admin');
        }
    ]
}