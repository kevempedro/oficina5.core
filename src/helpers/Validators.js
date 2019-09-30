class Validators {
  validatorVehicle (req) {
    const validator = req.body

    if (validator.vehicle === '') {
      return 'Vehicle is necessary'
    }

    if (validator.brand === '') {
      return 'Brand is necessary'
    }

    if (validator.year === undefined) {
      return 'Year is necessary'
    }

    if (validator.description === '') {
      return 'Description is necessary'
    }

    if (validator.sold === undefined) {
      return 'Sold is necessary'
    }

    return ''
  }
}

module.exports = new Validators()
