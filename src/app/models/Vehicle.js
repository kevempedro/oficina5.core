module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    vehicle: DataTypes.STRING,
    brand: DataTypes.STRING,
    year: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    sold: DataTypes.BOOLEAN
  })
  return Vehicle
}
