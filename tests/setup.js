// mongoose knows what the user model is now
require('../models/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');

// * telling mongoose to use node js global promise implementation
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });
