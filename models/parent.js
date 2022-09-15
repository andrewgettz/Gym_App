


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
//module.exports = (sequielize, DataTypes) => sequielize.define('Parent', {
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
//    address: {
//        type: DataTypes.STRING(128),
//        allowNull: false
//    },
//    city: {
//        type: DataTypes.STRING(64),
//        allowNull: false
//    },
//    state: {
//        type: DataTypes.STRING(64),
//        allowNull: false
//    },
//    zip: {
//        type: DataTypes.STRING(64),
//        allowNull: false
//    },
//    email: {
//        type: DataTypes.STRING(64),
//        allowNull: false
//    },
//    phone: {
//        type: DataTypes.STRING(17),
//        allowNull: false
//    },
//    password: {
//        type: DataTypes.STRING(25),
//        allowNull: false,
//        //validate: {
//        //    len: [8],
            
//        //},
//    },
  
//});

