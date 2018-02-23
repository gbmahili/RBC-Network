module.exports = function(sequelize, DataTypes) {
    var Address = sequelize.define("Address", {
      house_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
          isAlphanumeric: true,
        }
      },
      street_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      city: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,100],
          isEmail: true
        }
      },
      state: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1,20]
        }
      },
      zipcode: {
        type: DataTypes.INTEGER,
        validate: {
            len: [1,10],
            isAlphanumeric: true,
          }
      },
    });

    Address.associate = function (models) {
        Address.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Address;
  };