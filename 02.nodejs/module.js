var service = require('./service');
var readline = require('readline');

var ReadlineModule = (function(){
	var self = {};

	self.ask = function (question, callback) {
		var r = readline.createInterface({
	    	input: process.stdin,
	    	output: process.stdout});
	  		r.question(question + '\n', function(answer) {
	  			callback(answer,r);
   
  			});
	}

	return self;
})();

var MenuModule = (function(){
   var self = {};

	self.menu1 = function() {
		console.log("Liste de tous les présentateurs");
		service.listerTousLesPresentateurs().forEach(function(element) {
				console.log("- " + element.firstname + " " + element.lastname);
		});
	};

	self.menu2 = function() {
		 console.log("Top présentateurs");
 		service.listerTopPresentateurs().forEach(function(element) {
 			console.log("- " + element.firstname + " " + element.lastname);
		});
	};

	self.menu3 = function() {
		console.log("Liste des sessions");
 		service.listerToutesLesSessions().forEach(function(element) {
 			console.log("- " + element.title);
		});
	};

	self.menu4 = function() {
		ReadlineModule.ask('Veuillez saisir une session par son id: ', function(answer,r) {
			service.trouverUneSession(answer).forEach(function(element) {
					for(prop in element) {
						console.log(prop + ": " + element[prop]);
					}
					r.close();
		 	});
		});
	};

	return self;
})();

exports.ReadlineModule = ReadlineModule;
exports.MenuModule = MenuModule;