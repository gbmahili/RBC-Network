module.exports = function (sequelize, DataTypes) {

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

    //Resume links, string type and validates for url format
    links: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  });

  Profession.associate = function (models) {
    Profession.belongsToMany(models.User, {
      through:  'user_profession'
    });
  };

  return Profession;
};