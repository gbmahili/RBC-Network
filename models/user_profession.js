module.exports = function (sequelize, DataTypes) {

    UserProfession = sequelize.define('user_professions', {
        resume: DataTypes.STRING
      });
      User.addProfession(profession, { resume: 'manager', transaction: t });
     return UserProfession;
}
