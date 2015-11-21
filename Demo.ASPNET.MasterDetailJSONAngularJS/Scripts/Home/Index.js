// Code copied from "A Master Detail example, using JSON & AngularJS"
// http://www.codeproject.com/Tips/837693/A-Master-Detail-example-using-JSON-AngularJS?msg=5162324#xx5162324xx

var app = angular.module("app", []);

//  Force AngularJS to call our JSON Web Service with a 'GET' rather than an 'OPTION'
//  Taken from: http://better-inter.net/enabling-cors-in-angular-js/
app.config(['$httpProvider', function ($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

app.controller("mainCtrl", function() {

});


