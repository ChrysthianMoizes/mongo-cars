const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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

CarSchema.plugin(mongoosePaginate);

mongoose.model('Car', CarSchema);