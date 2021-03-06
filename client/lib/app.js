angular.module('portailGP', [
  'angular-meteor',
  'ui.router'
]);

function onReady() {
  angular.bootstrap(document, ['portailGP'], {
    strictDi: true
  });
}

if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);
