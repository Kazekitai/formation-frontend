var module = require('./module');

console.log("*** Application Conférence ***");
console.log("1. Liste de tous les présentateurs");
console.log("2. Top présentateurs");
console.log("3. Liste des sessions");
console.log("4. Détail d'une session");

var optionMenu = {
	"1": module.MenuModule.menu1,
	"2": module.MenuModule.menu2,
	"3": module.MenuModule.menu3,
	"4": module.MenuModule.menu4
};

module.ReadlineModule.ask('Choisissez une option (valeur entre 1 et 4): ', function(answer,r) {
	for(prop in optionMenu) {
		if(prop == answer) {
			optionMenu[prop]();
		}
		r.close();
	}
 	
});