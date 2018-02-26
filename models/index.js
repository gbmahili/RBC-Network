'use strict';
// Dependencies 
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (process.env.JAWSDB_URL) {
  //var sequelize = new Sequelize(process.env.JAWSDB_URL);
  var sequelize = new Sequelize('k9ur8asmhfceaecy', 'jvkg6iq8l4p18gkp', 't34iona0qu65p6df', {
      host: 'lgg2gx1ha7yp2w0k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      dialect: 'mysql',
      operatorsAliases: false,

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  });
    //("lgg2gx1ha7yp2w0k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", "k9ur8asmhfceaecy", "jvkg6iq8l4p18gkp", "t34iona0qu65p6df");
  
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
