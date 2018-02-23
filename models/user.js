module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      email: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,100],
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1,20]
        }
      },
      date_of_birth: {
          type: DataTypes.INTEGER,
          validate: {
              len: [1, 8],
              isDate: true,
          }
      },
      gender: {
          type: DataTypes.STRING,
      },
      telephone: {
          type: DataTypes.INTEGER,
          validate: {
              len: [1,10],
              isAlphanumeric: true,
          }
      },
      photo: {
          type: DataTypes.STRING,
          validate: {
            isUrl: true 
          }
      }
    });

    // User.associate = function(models) {
    //     User.hasMany(models.Profession, {
    //       onDelete: "cascade"
    //     });
    //   };
    return User;
  };