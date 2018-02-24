module.exports = function(sequelize, DataTypes) {
  // Creates a table "address" in our network database
    var Address = sequelize.define("Address", {
      //First column: house number, cannot be null, integer type, validates for a min of 1 character and only numbers allowed
      house_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
          isAlphanumeric: true,
        }
      },
      //Second column: street name, cannot be null, string type and validates for length
      street_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      //Third column: city, string type, cannot be null, validates for length and email format
      city: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,100],
          isEmail: true
        }
      },
      //Fourth column: state is a string type, and cannot be null
      state: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      //Fifth column: country is a string type, cannot be null and validates for length 
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      //Sixth column: zipcode is an integer type, validates for length and it must be only numbers
      zipcode: {
        type: DataTypes.INTEGER,
        validate: {
            len: [1,10],
            isAlphanumeric: true,
          }
      },
    });

    // Adds a foreign key to the user id from the "user" table to be associated with corresponding address
    Address.associate = function (models) {
        Address.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Address;
  };