var SwaggerRunner = require('swagger-node-runner');
var path = require('path');

module.exports = function swaggerHook(sails) {

  var chain;
  
  return {
  
    //defaults: {
    //  __configKey__: {}
    //},

    //configure: function() {},

    initialize: function initialize(cb) {

      var config = {
        appRoot: sails.config.appPath,
        configDir: sails.config.paths.config,
        controllersDirs: [sails.config.paths.controllers],
        mockControllersDirs: [path.resolve(sails.config.paths.controllers, '..', 'mocks')],
        swaggerFile: path.resolve(sails.config.paths.controllers, '..', 'swagger', "swagger.yaml")
      };

      SwaggerRunner.create(config, function(err, runner) {
        if (err) { return cb(err); }

        var sailsMiddleware = runner.sailsMiddleware();
        chain = sailsMiddleware.chain();
        
        return cb();
      });
    },
    
    routes: {
      after: {
        '/*': function(req, res, next) { chain(req, res, next); }
      }
    }
  };

};

/*
TODO:
  add ability through config to move the routing to before instead of after?
  configure swagger paths (config, controllers, etc.) separately from Sails paths?
  integrate swagger-node configuration into Sails' configuration system?
*/
