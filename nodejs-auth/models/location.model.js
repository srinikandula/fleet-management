const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('locations', {
        location_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        location: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'locations',
        timestamps: false,
        paranoid: false
    })
}
