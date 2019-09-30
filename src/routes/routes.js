const {
  createVehicle,
  getAllVehicle,
  getOneVehicleById,
  getOneVehicleByYear,
  updateVehicle,
  updateVehicleYear,
  deleteVehicle
} = require('../controller/VehicleController')
const express = require('express')
const router = express.Router()

router.get('/vehicles', function (req, res) { getAllVehicle(req, res) })

router.get('/vehicle/id/:id', function (req, res) { getOneVehicleById(req, res, req.params.id) })

router.get('/vehicle/year/:year', function (req, res) { getOneVehicleByYear(req, res, req.params.year) })

router.post('/vehicles', function (req, res) { createVehicle(req, res) })

router.put('/vehicle/:id', function (req, res) { updateVehicle(req, res, req.params.id) })

router.patch('/vehicle/:id', function (req, res) { updateVehicleYear(req, res, req.params.id) })

router.delete('/vehicle/:id', function (req, res) { deleteVehicle(req, res, req.params.id) })

module.exports = router
