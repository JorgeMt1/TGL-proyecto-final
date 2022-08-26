const { Strategy, ExtractJwt } = require('passport-jwt');

const { config } = require('../../../config/config');

const options = {
    jwFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}

const JwStrategy = new Strategy(options, (payload, done)=>{
    return done(null, payload);
});

module.exports = JwStrategy;