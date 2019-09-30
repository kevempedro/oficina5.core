const { Vehicle } = require('../app/models')
const { validatorVehicle } = require('../helpers/Validators')
const statusCode = require('../helpers/statusCode')
const messageReturn = require('../helpers/messageReturn')

class VehicleController {
  createVehicle (req, res) {
    const validator = validatorVehicle(req)

    if (validator !== '') {
      return res.status(statusCode.BAD_REQUEST).json({ message: validator })
    }

    Vehicle.create({
      vehicle: req.body.vehicle,
      brand: req.body.brand,
      year: req.body.year,
      description: req.body.description,
      sold: req.body.sold
    })
      .then(function () {
        return res.status(statusCode.OK).json({ message: 'vehicle ' + messageReturn.CREATED })
      })
      .catch(function () {
        return res.status(statusCode.BAD_REQUEST).json({ message: messageReturn.NOT_CREATED + ' vehicle' })
      })
  }

  getAllVehicle (req, res) {
    Vehicle.findAll()
      .then(function (vehicles) {
        return res.status(statusCode.OK).json(vehicles)
      })
      .catch(function () {
        return res.status(statusCode.BAD_REQUEST).json({ message: messageReturn.NOT_POSSIBLE_TO_RETURN + ' vehicles' })
      })
  }

  getOneVehicleById (req, res, id) {
    Vehicle.findOne({ where: { id: id } })
      .then(function (vehicle) {
        if (vehicle === null) {
          return res.status(statusCode.BAD_REQUEST).json({ message: messageReturn.NOT_EXISTS + ' vehicle' })
        }
        return res.status(statusCode.OK).json(vehicle)
      })
      .catch(function () {
        return res.status(statusCode.BAD_REQUEST).json({ message: messageReturn.NOT_POSSIBLE_TO_RETURN + ' vehicle' })
      })
  }

  getOneVehicleByYear (req, res, year) {
    Vehicle.findAll({ where: { year: year } })
      .then(function (vehicles) {
        return res.status(statusCode.OK).json(vehicles)
      })
      .catch(function () {
        return res.status(statusCode.BAD_REQUEST).json({ message: messageReturn.NOT_POSSIBLE_TO_RETURN + ' any vehicle' })
      })
  }

  deleteVehicle (req, res, id) {
    Vehicle.findOne({ where: { id: id } })
      .then(function (vehicle) {
        if (vehicle === null) {
          return res.status(statusCode.BAD_REQUEST).json({ message: messageReturn.NOT_EXISTS + ' vehicle' })
        }

        Vehicle.destroy({ where: { id: id } })
          .then(function () {
            return res.status(statusCode.OK).json({ message: 'Vehicle ' + messageReturn.DELETED })
          })
          .catch(function () {
            return res.status(statusCode.BAD_REQUEST).json({ message: messageReturn.NOT_DELETED + ' this vehicle' })
          })
      })
      .catch(function () {
        return res.status(statusCode.BAD_REQUEST).json({ message: messageReturn.NOT_POSSIBLE_TO_RETURN + ' vehicle' })
      })
  }

  updateVehicle (req, res, id) {
    Vehicle.findOne({ where: { id: id } })
      .then(function (vehicle) {
        if (vehicle === null) {
          return res.status(statusCode.BAD_REQUEST).json({ message: messageReturn.NOT_EXISTS + ' vehicle' })
        }

        Vehicle.update({
          vehicle: req.body.vehicle,
          brand: req.body.brand,
          year: req.body.year,
          description: req.body.description,
          sold: req.body.sold
        }, { where: { id: id } })
          .then(function () {
            return res.status(statusCode.OK).json({ message: 'vehicle ' + messageReturn.UPDATED })
          })
          .catch(function () {
            return res.status(statusCode.NOT_MODIFIED).json({ message: messageReturn.NOT_UPDATED + ' vehicle' })
          })
      })
      .catch(function () {
        return res.status(statusCode.BAD_REQUEST).json({ message: messageReturn.NOT_POSSIBLE_TO_RETURN + ' vehicle' })
      })
  }

  updateVehicleYear (req, res, id) {
    Vehicle.update({
      year: req.body.year
    }, { where: { id: id } })
      .then(function () {
        return res.status(statusCode.OK).json({ message: 'vehicle year ' + messageReturn.UPDATED })
      })
      .catch(function () {
        return res.status(statusCode.NOT_MODIFIED).json({ message: messageReturn.NOT_UPDATED + ' vehicle' })
      })
  }
}

module.exports = new VehicleController()
