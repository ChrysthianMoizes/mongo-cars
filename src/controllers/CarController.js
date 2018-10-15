const mongoose = require('mongoose');

const Car = mongoose.model('Car');

module.exports = {

    async index(req, res) {
        const { page = 1 } = req.query;
        const cars = await Car.paginate({},{ page, limit: 10 });
        return res.json(cars);
    },

    async show(req, res) {
        const car = await Car.findById(req.params.id);
        return res.json(car);
    },

    async create(req, res) {
        const car = await Car.create(req.body);
        return res.json(car);
    },

    async update(req, res) {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(car);
    },

    async destroy(req, res) {
        await Car.findByIdAndRemove(req.params.id);
        return res.send();
    }
};