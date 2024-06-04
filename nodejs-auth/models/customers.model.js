const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('customer', {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CustomerName: {
            type: DataTypes.STRING,
        },
        CustomerCode: {
            type: DataTypes.INTEGER,
        },
        categoryId: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'customer',
        timestamps: false,
        paranoid: false
    })
}
