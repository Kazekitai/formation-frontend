
var data = require('./data/devfest-2015');
// retourner le tableau de tous les présentateurs
exports.listerTousLesPresentateurs = function() {
	return data.speakers;
};

// retourner le tableau de toutes les session
exports.listerToutesLesSessions = function() {
	return data.sessions;
};

// retourner le tableau des sessions dont l'identifiant est fourni
exports.trouverUneSession = function(idSession) {
	return data.sessions.filter(function(element) {
		return element.id == idSession;
	});
};

// retourner le tableau des tops présentateurs
exports.listerTopPresentateurs = function() {
	return data.speakers.filter(function(element) {
		return element.topspeaker;
	});
};

