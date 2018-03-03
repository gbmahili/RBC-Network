module.exports = function (sequelize, DataTypes) {

  // Creates table in network database called User
  var User = sequelize.define("User", {

    //LIST OF COLUMNS //
    // First name cannot be null, length of characters (min 1, max 160)
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
    //Email cannot be null, validates for length of characters and email format
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
        isEmail: true
      }
    },
    //Password cannot be null, validates for length
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    //DOB is an integer type, validates for length and date format
    date_of_birth: {
      type: DataTypes.STRING,
      validate: {
        isDate: true,
      }
    },
    //Gender can be null and is a string type of input
    gender: {
      type: DataTypes.STRING,
    },
    //Telephone is an integer type, validates for length and number ONLY
    telephone: DataTypes.STRING,
    //Photo, string type, validates to make sure a url link is added
    photo: {
      type: DataTypes.STRING,
     
    },

    //House number, cannot be null, integer type, validates for a min of 1 character and only numbers allowed
    house_number: {
      type: DataTypes.STRING,
    },
    //Street name, cannot be null, string type and validates for length
    street_name: {
      type: DataTypes.STRING,
    },
    //City, string type, cannot be null, validates for length
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        isAlpha: true,
      }
    },
    //State is a string type, and cannot be null
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      }
    },
    //Country is a string type, cannot be null and validates for length
    country: {
      type: DataTypes.STRING,
    },
    //Zipcode is an integer type, validates for length and it must be only numbers
    zipcode: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
      }
    },
  });

  // Association between user and profession tables.
    User.associate = function (models) {
      User.belongsToMany(models.Profession, {           
        through: 'user_professions'
      });
    };
  return User;
};
