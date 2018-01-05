var module = require('./module');

module.MenuModule.afficherMenu();

var optionMenu = {
	"1": module.MenuModule.menu1,
	"2": module.MenuModule.menu2,
	"3": module.MenuModule.menu3,
	"4": module.MenuModule.menu4
};

module.ReadlineModule.ask('\nChoisissez une option (valeur entre 1 et 4): ', function(answer,r) {
	for(prop in optionMenu) {
		if(prop == answer) {
			optionMenu[prop]();
		}
		r.close();
	}
 	
});
