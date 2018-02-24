module.exports = function(sequelize, DataTypes) {
  // Creates table in network database called User
    var User = sequelize.define("User", {
      // First column - first name cannot be null, length of characters needa a minimum of 1 and a max of 160
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      // Second column - last name cannot be null, length of characters (min 1, max 160)
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      //Third column - email , cannot be null, validates for length of characters and makes sure it is an email format
      email: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,100],
          isEmail: true
        }
      },
      // Fourth column - password, cannot be null, validates for length
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1,20]
        }
      },
      // Fifth column - DOB is integer type, validates for length and makes sure is entered in data format
      date_of_birth: {
          type: DataTypes.INTEGER,
          validate: {
              len: [1, 8],
              isDate: true,
          }
      },
      // Sixth colum - gender, can be null and is a string type of input
      gender: {
          type: DataTypes.STRING,
      },
      // Seventh column - telephone, integer type, validates for length and makes sure only a number is accepted
      telephone: {
          type: DataTypes.INTEGER,
          validate: {
              len: [1,10],
              isAlphanumeric: true,
          }
      },
      // Eigth column - photo, string type, validates to make sure a url link is added
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