module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      First_Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      Last_Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      Email: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,100],
          isEmail: true
        }
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1,20]
        }
      },
      Date_of_Birth: {
          type: DataTypes.INTEGER,
          validate: {
              len: [1, 8],
              isDate: true,
          }
      },
      Gender: {
          type: DataTypes.STRING,
      },
      Telephone: {
          type: DataTypes.INTEGER,
          validate: {
              len: [1,10],
              isAlphanumeric: true,
          }
      },
      Photo: {
          type: DataTypes.STRING,
          validate: {
            isUrl: true 
          }
      }
    });
    return User;
  };