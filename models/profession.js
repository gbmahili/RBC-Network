module.exports = function(sequelize, DataTypes) {
    var Profession = sequelize.define("Profession", {
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      about_me: {
        type: DataTypes.TEXT,
      },
      links: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }
      },
      work_image: {
          type: DataTypes.STRING,
          validate: {
            isUrl: true
        }
      },
      header: {
          type: DataTypes.STRING,
      },
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