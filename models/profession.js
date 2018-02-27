module.exports = function(sequelize, DataTypes) {

  // Creates a table "profession" in our network database
    var Profession = sequelize.define("Profession", {

      // LIST OF COLUMNS //
      //Category is a string type, cannot be null, and validates for length
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      //About me is a text type input field
      about_me: {
        type: DataTypes.TEXT,
      },
      //Links, string type and validates for url format
      links: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }
      },
      //Images of their work ("portfolio"), validates for url format
      work_image: {
          type: DataTypes.STRING,
          validate: {
            isUrl: true
        }
      },
      //Header for user to edit in their profile
      header: {
          type: DataTypes.STRING,
      },
      //Values for the header
      values: {
          type: DataTypes.STRING,
      }
    });

      Profession.associate = function (models) {
        Profession.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
      };
    
    return Profession;
  };