var ville = ["nantes","paris","saint-nazaire","angers","le mans"];

// forEach()
ville.forEach(function(element) {
	console.log(element);
});

//every()
var contientA = function(element) {
	return element.indexOf("a") >-1;
};

console.log("lettreADansToutesLesVilles == " + ville.every(contientA));

//some()
var contientAuMoinsUnTiret = function(element) {
	return element.indexOf("-") > -1;
};

console.log("AuMoinsUneVilleAvecUnTiret == " + ville.some(contientAuMoinsUnTiret));

//filter()
var villesSansTiretSansEspace = function(element) {
	return element.indexOf("-") == -1;
};

console.log("villesSansTiretSansEspace == [" + ville.filter(villesSansTiretSansEspace) + "]");

//Chainer les fonctions
var villesSeTerminantParS = function(element) {
	return element.slice(-1) == "s";
};

var villesMajusculeSeTerminantParS = function(tableau) {
	var newTableau = new Array();
	tableau.filter(villesSeTerminantParS).forEach(function(element) {
		newTableau.push(element.toUpperCase());
	});
	return newTableau;
};

console.log("villesMajusculeSeTerminantParS == [" + villesMajusculeSeTerminantParS(ville) + "]");