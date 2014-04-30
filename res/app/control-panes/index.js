require('fa-borderlayout')
require('fa-borderlayout/build-0.3.1/borderLayout.css')
require('fa-borderlayout/build-0.3.1/stf-style.css')

module.exports = angular.module('control-panes', [
  require('stf/common-ui/nice-tabs').name,
  require('stf/device').name,
  require('stf/control').name,
  require('./device-control').name,
  require('./advanced').name,
  require('./cpu').name,
  require('./dashboard').name,
  require('./inspect').name,
  require('./activity').name,
  require('./logs').name,
  require('./resources').name,
  require('./screenshots').name
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/control/:serial', {
      template: require('./control-panes.jade'),
      controller: 'ControlPanesCtrl'
    })
  }])
  .factory('ControlPanesService', require('./control-panes-service'))
  .controller('ControlPanesCtrl', require('./control-panes-controller'))
