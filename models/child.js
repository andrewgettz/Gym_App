module.exports = function(sequelize, DataTypes) {
    var Child = sequelize.define('Child', {
        name_first: DataTypes.STRING,
        name_last: DataTypes.STRING,
        age: DataTypes.INTEGER,
        gender: DataTypes.STRING,
        allergies: DataTypes.TEXT,
        dietRestrictions: DataTypes.TEXT,
        notes: DataTypes.TEXT,
        photoLink: DataTypes.STRING,
        monday: DataTypes.INTEGER,
        tuesday: DataTypes.INTEGER,
        wednesday: DataTypes.INTEGER,
        thursday: DataTypes.INTEGER,
        friday: DataTypes.INTEGER
    }); 
    Child.associate = function(models) {
        Child.belongsTo(models.Parent, {
            foreignKey: {allowNull: true,defaultValue:0}
        }); 
       
    };
    return Child;
}; 
