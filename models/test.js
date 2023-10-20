const mongoose  = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    email: String
})

const Test = mongoose.model('test', contactSchema);

module.exports = {Test}
