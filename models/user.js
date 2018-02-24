module.exports = function(sequelize, DataTypes) {
  // Creates table in network database called User
    var User = sequelize.define("User", {
      //LIST OF COLUMNS //

      // First name cannot be null, length of characters needa a minimum of 1 and a max of 160
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      // Last name cannot be null, length of characters (min 1, max 160)
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      //Email , cannot be null, validates for length of characters and makes sure it is an email format
      email: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,100],
          isEmail: true
        }
      },
      //Password, cannot be null, validates for length
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1,20]
        }
      },
      //DOB is integer type, validates for length and makes sure is entered in data format
      date_of_birth: {
          type: DataTypes.INTEGER,
          validate: {
              len: [1, 8],
              isDate: true,
          }
      },
      //Gender, can be null and is a string type of input
      gender: {
          type: DataTypes.STRING,
      },
      //Telephone, integer type, validates for length and makes sure only a number is accepted
      telephone: {
          type: DataTypes.INTEGER,
          validate: {
              len: [1,10],
              isAlphanumeric: true,
          }
      },
      //Photo, string type, validates to make sure a url link is added
      photo: {
          type: DataTypes.STRING,
          validate: {
            isUrl: true 
          }
      },

      //House number, cannot be null, integer type, validates for a min of 1 character and only numbers allowed
      house_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
          isAlphanumeric: true,
        }
      },
      //Street name, cannot be null, string type and validates for length
      street_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      //City, string type, cannot be null, validates for length and email format
      city: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,100],
          isEmail: true
        }
      },
      //State is a string type, and cannot be null
      state: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      //Country is a string type, cannot be null and validates for length 
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      //Zipcode is an integer type, validates for length and it must be only numbers
      zipcode: {
        type: DataTypes.INTEGER,
        validate: {
            len: [1,10],
            isAlphanumeric: true,
          }
      },
    });

    // Association between user and professions, where one user can be linked to many professions.
    User.associate = function(models) {
      User.hasMany(models.Profession, {
        onDelete: "cascade"
      });
    };
    return User;
  };