const passport = require('passport');

const LocalStrategy = require('./strategies/localStategy')
const JwtStrategy = require('./strategies/jwtStategy')

passport.use(LocalStrategy);
passport.use(JwtStrategy);