// Fonction constructeur

var Personne = function() {
	this.nom;
	this.prenom;
	this.pseudo;
	this.getNomComplet = function() {
		return "nom : " + this.nom + " - prenom : " + this.prenom + " - pseudo : " + this.pseudo;
	};

};

var jules = new Personne();
jules.nom = "LEMAIRE";
jules.prenom = "Jules";
jules.pseudo = "jules77";

var paul = new Personne();
paul.nom = "LEMAIRE";
paul.prenom = "Paul";
paul.pseudo = "paul44";

function afficherPersonne(personne) {
	console.log(personne.getNomComplet());
}

afficherPersonne(jules);
afficherPersonne(paul);

// Modifier un objet
jules.pseudo = "jules44";
console.log(jules.getNomComplet());

//Ajouter une propriété à Personne
Personne.prototype.getInitiales = function(nom,prenom) {
	return nom.charAt(0) + prenom.charAt(0);
}

console.log(jules.getInitiales(jules.nom,jules.prenom));

//Objet sans fonction constructeur
var robert = new Object;
robert.prenom = "Robert";
robert.nom = "LEPREFET";
robert.pseudo = "robert77";
robert.getNomComplet = function(personne) {
		return "nom : " + personne.nom + " - prenom : " + personne.prenom + " - pseudo : " + personne.pseudo;
};

console.log(robert.getNomComplet(robert));

// Héritage via une fonction constructeur
var Client = function() {
	Personne.call(this);
	this.numeroClient;
	this.getInfos = function() { 
		return "numéro: " + this.numeroClient + " nom : " + this.nom + " prénom : " + this.prenom;
	};
};

var steve = new Client();
steve.nom = "LUCAS";
steve.prenom = "Steve";
steve.pseudo = "steve44";
steve.numeroClient = "A01";
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());