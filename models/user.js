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
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 8],
        isDate: true,
      }
    },
    //Gender can be null and is a string type of input
    gender: {
      type: DataTypes.STRING,
    },
    //Telephone is an integer type, validates for length and number ONLY
    telephone: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
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
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      }
    },
    //Street name, cannot be null, string type and validates for length
    street_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    //City, string type, cannot be null, validates for length
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
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
      allowNull: false,
      validate: {
        len: [1],
        isNumeric: true,
      }
    },
  });

  // Association between user and profession tables. 
  User.associate = function (models) {       
    // Associating User with Professions (1 to hasmany) with profession
    User.hasMany(models.Profession, {
      // When a User  is deleted, also delete any associated Professions
      onDelete: 'CASCADE', 
      foreignKey: { 
        //naming the foreignkey field as 'owner
        name:'owner', 
        allowNull: false }
    });
  };
  
  return User;
};