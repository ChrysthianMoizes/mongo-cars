const mongoose = require('mongoose');

module.exports = {
    connect(){
        mongoose.connect('mongodb://192.168.99.100:27017/mongocars', {useNewUrlParser: true});
    }
};