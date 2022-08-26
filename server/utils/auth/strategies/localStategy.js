const { Strategy, Strategy } = require('passport-local');

const UAuthService = require('./../../../services/authService');
const service = new AuthService();

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
},
async (email, password, done) =>{
    try {
        const user = await service.getUser(email, password);  
        done(null, user);
    } catch (error) {
        done(error, false);
    }
});

module.exports = LocalStrategy;