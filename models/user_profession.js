module.exports = function (sequelize, DataTypes) {

    UserProfession = sequelize.define('user_professions', {
        resume: DataTypes.STRING
      });
  
     return UserProfession;
}
