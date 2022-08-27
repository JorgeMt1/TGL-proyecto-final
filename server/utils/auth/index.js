const passport = require('passport');

const LocalStrategy = require('./strategies/localStategy')
const JwtStrategy = require('./strategies/jwtStrategy')

passport.use(LocalStrategy);
passport.use(JwtStrategy);