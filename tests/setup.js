jest.setTimeout(30000)
Number.prototype._called = {};

require('../models/User')

const mongoose = require('mongoose')
const keys = require('../config/keys')

mongoose.Promise = global.Promise
mongoose.connect(keys.mongoURI, { useMongoClient: true })
