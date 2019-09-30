'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vehicles', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      vehicle: {
        type: Sequelize.STRING,
        allowNull: false
      },

      brand: {
        type: Sequelize.STRING,
        allowNull: false
      },

      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      sold: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('vehicles')
  }
}
