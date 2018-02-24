module.exports = function(sequelize, DataTypes) {
  // Creates a table "profession" in our network database
    var Profession = sequelize.define("Profession", {
      //First column: category is a string type, cannot be null, and validates for length
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      //Second column: about me is a text type
      about_me: {
        type: DataTypes.TEXT,
      },
      //Third column: links, string type and validates for url format
      links: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }
      },
      //Fourth column: images of their work ("portfolio"), validates for url format
      work_image: {
          type: DataTypes.STRING,
          validate: {
            isUrl: true
        }
      },
      //Fifth column: header for user to edit in their profile
      header: {
          type: DataTypes.STRING,
      },
      //Sixth column: values for the header
      values: {
          type: DataTypes.STRING,
      }
    });

    // Adds a foreign key to the user id from the "user" table to be associated with corresponding profession
    Profession.associate = function (models) {
        Profession.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Profession;
  };