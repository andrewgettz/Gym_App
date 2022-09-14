//module.exports = function(sequelize, DataTypes) {
//    var Schedule = sequelize.define('Schedule', {
//      monday: DataTypes.BOOLEAN,
//          tuesday: DataTypes.BOOLEAN,
//          wednesday: DataTypes.BOOLEAN,
//      thursday: DataTypes.BOOLEAN,
//      friday: DataTypes.BOOLEAN
//    });
//    Schedule.associate = function(models) {
//      Schedule.belongsTo(models.Child, {
//              foreignKey: {allowNull: true,defaultValue:0}
//      });
//    };
  
//    return Schedule;
//};



module.exports = (sequielize, DataTypes) => sequielize.define('Schedule', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    monday: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    tuesday: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    wednesday: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    thursday: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    friday: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

});

