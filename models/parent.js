
module.exports = (sequielize, DataTypes) => sequielize.define('Parent', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name_first: {
        type: DataTypes.STRING(24),
        allowNull: false
    },
    name_last: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    state: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    zip: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(17),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(25),
        allowNull: false,
        //validate: {
        //    len: [8],
            
        //},
    },
});

