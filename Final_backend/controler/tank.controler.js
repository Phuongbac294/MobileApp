const TankModel = require('../model/tank.model')

const getAll = async (req, res) => {
    const data = await TankModel.get();
    res.json(data)
}

module.exports = {
    getAll,
}