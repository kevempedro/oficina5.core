class Validators {
  validatorVehicle (req) {
    if (req.vehicle === '') {
      return 'Vehicle is necessary'
    }

    if (req.brand === '') {
      return 'Brand is necessary'
    }

    if (req.year === null) {
      return 'Year is necessary'
    }

    if (req.description === '') {
      return 'Description is necessary'
    }

    if (req.sold === null) {
      return 'Sold is necessary'
    }

    return ''
  }
}

module.exports = new Validators()
