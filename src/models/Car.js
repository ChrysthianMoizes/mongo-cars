const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,  
    },
    model: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
        default: 'white',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

mongoose.model('Car', CarSchema);