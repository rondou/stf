require('./activity.css')

module.exports = angular.module('stf.activity', [
  require('stf/common-ui').name
])
  .run(["$templateCache", function ($templateCache) {
    $templateCache.put('control-panes/activity/activity.jade',
      require('./activity.jade')
    )
  }])
  .controller('ActivityCtrl', require('./activity-controller'))
