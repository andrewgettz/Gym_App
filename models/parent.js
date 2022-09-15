


module.exports = function (sequelize, DataTypes) {
    var Parent = sequelize.define('Parent', {
        name_first: DataTypes.STRING,
        name_last: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.TEXT,
        email: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        password: DataTypes.STRING,
         zip: DataTypes.STRING
    });
    Parent.associate = function (models) {
        Parent.hasMany(models.Child, {
            onDelete: 'cascade',
        });
    };

    return Parent;
};