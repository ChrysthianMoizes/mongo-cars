const mongoose = require('mongoose');

const Car = mongoose.model('Car');

module.exports = {

    async index(req, res) {
        const cars = await Car.find();
        return res.json(cars);
    },

    async create(req, res) {
        const car = await Car.create(req.body);
        return res.json(car);
    },
};