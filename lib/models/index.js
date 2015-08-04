'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};
var sequelize = null;

if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    var connections = {
      dialect:  'postgres',
      protocol: 'postgres',
      logging:  true //false
    };
    console.log(connections)
    sequelize = new Sequelize(process.env.DATABASE_URL, connections)
  } else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
  }

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    if (file.slice(-3) !== '.js') return;
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

var Post = sequelize.import(__dirname + "/post")
  , User = sequelize.import(__dirname + "/user");

//User.hasMany(Post)
//Post.belongsTo(User)

db.sequelize = sequelize;


module.exports = db;
