module.exports = function(sequelize, DataTypes) {
    var Child = sequelize.define('Child', {
        name_first: DataTypes.STRING,
        name_last: DataTypes.STRING,
        age: DataTypes.INTEGER,
        gender: DataTypes.STRING,
        allergies: DataTypes.TEXT,
        dietRestrictions: DataTypes.TEXT,
        notes: DataTypes.TEXT,
		photoLink:DataTypes.STRING
    }); 
    Child.associate = function(models) {
        Child.belongsTo(models.Parent, {
            foreignKey: {allowNull: true,defaultValue:0}
        }); 
        Child.hasOne(models.Schedule, {
            onDelete: 'cascade'
        });
    };
    return Child;
}; 

//const { Model, DataTypes } = require("sequelize");

//module.exports = (sequielize, DataTypes) => sequielize.define('Child', {
//    ID: {
//        type: DataTypes.INTEGER,
//        autoIncrement: true,
//        primaryKey: true,
//        allowNull: false
//    },
//    name_first: {
//        type: DataTypes.STRING(24),
//        allowNull: false
//    },
//    name_last: {
//        type: DataTypes.STRING(128),
//        allowNull: false
//    },
//    age: {
//        type: DataTypes.STRING(128),
//        allowNull: false
//    },
//    gender: {
//        type: DataTypes.STRING(64),
//        allowNull: false
//    },
//    allergies: {
//        type: DataTypes.STRING(64),
//        allowNull: true
//    },
//    dietRestrictions: {
//        type: DataTypes.STRING(64),
//        allowNull: true
//    },
//    notes: {
//        type: DataTypes.STRING(64),
//        allowNull: true
//    },
//    photoLink: {
//        type: DataTypes.STRING(17),
//        allowNull: true
//    },

//    ParentId: {
//        type: DataTypes.INTEGER,
//        allowNull: true
//    },
//    user_id: {
//        type: DataTypes.INTEGER,
//        allowNull: false,
//        references: {
//            model: "Parent",
//            key: "id",
//        },
//    },
    
//});



