// let
console.log("\n**** LET ***** \n");
let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "paris";
console.log(favoriteCityId);

console.log("\n**** CONST ***** \n");
//const
const citiesId = ["paris","nyc","rome","rio-de-janerio"];
console.log(citiesId);

	//citiesId = [];
	//console.log(citiesId);  Erreur à l'exécution car on ne peut pas réaffecter une constante: TypeError: Assignment to constant variable.

citiesId.push("tokyo");
console.log(citiesId);


// Création d'objet
console.log("\n**** CREATION D'OBJETS ***** \n");
function getWeather(cityId) {
	let city = cityId.toUpperCase();
	let temperature = 20;
	return {city,temperature}
}

const weather = getWeather(favoriteCityId);
console.log("Object ",weather);


// Affectation destructurée
console.log("\n**** AFFECTATION DESTRUCTUREE ***** \n");
const {city} = weather;
const {temperature} = weather;
console.log(city);
console.log(temperature);


// REST operator
console.log("\n**** REST OPERATOR ***** \n");

let[parisId,nycId,...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);


// Classe
console.log("\n**** CLASSE ***** \n");

class Trip {
	constructor(id,nom,imageUrl) {
		this.id = id;
		this.nom = nom;
		this.imageUrl = imageUrl;
	}

	toString() {
		return this.constructor.name + " [" + this.id + ", " + this.nom + ", " + this.imageUrl + ", " + this.price + "]";
	}

	get price() {
		return this._price;
	}

	set price(newAge) {
		this._price = newAge;
	}

	static getDefaultTrip() {
		return new Trip("rio-de-janerio","Rio de Janerio","img/rio-de-janerio.jpg");
	}


}

let parisTrip = new Trip("paris","Paris","img/paris.jpg");
console.log("Trip ",parisTrip);
let {nom}=parisTrip;
console.log(nom);

console.log(parisTrip.toString());

parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

// Heritage
console.log("\n**** HERITAGE ***** \n");
class FreeTrip extends Trip {
	constructor(id,nom,imageUrl) {
		super(id,nom,imageUrl);
		this.price = 0;
	}
}

const freeTrip = new FreeTrip("nantes","Nantes","img/nanges.jpg");
console.log(freeTrip.toString());

//Promise, Set, Map, Arrow function
console.log("\n**** PROMISE ***** \n");

class TripService {

	constructor() {
		// TODO Set of 3 trips
		this.tripSet = new Set();
		let trip1 = new Trip('paris', 'Paris', 'img/paris.jpg');
		let trip2 = new Trip('nantes', 'Nantes', 'img/nanges.jpg');
		let trip3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
		this.tripSet.add(trip1);
		this.tripSet.add(trip2);
		this.tripSet.add(trip3);
	}

	findByName(tripName) {
		// TODO return promise
		let trip;
		for(let item of this.tripSet) {
			if(item.nom == tripName) {
				trip = item
			}
		}
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
          		if(trip) {
					resolve(trip);
					console.log("Trip found : " + trip);
				} else {
					reject('No Trip with name '+ tripName);
				}
        	},2000);
		});

	}
}

class PriceService {
	constructor() {
		// TODO Map of 2 trips
		this.tripsMap = new Map();
		this.tripsMap.set("paris", 100);
		this.tripsMap.set("rio-de-janeiro", 800);
	}

	findPriceByTripId(tripId) {
		// TODO return promise
		let price;
		for (let [key, value] of this.tripsMap.entries()) {
		 	if(key == tripId) {
				 price = value;
			}
		}
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
          		if(price) {
					resolve(price);
					console.log("Price found : " + price);
				} else {
					reject('No price for trip id '+ tripId);
				}
        	},2000);
		});
	}
}

let tripService = new TripService();
let priceService = new PriceService();



tripService.findByName("Paris");
tripService.findByName("Toulouse")

tripService.findByName("Rio de Janeiro")
	.then(function(trip) {
		return priceService.findPriceByTripId(trip.id);
	});

tripService.findByName("Nantes")
	.then(function(trip) {
		return priceService.findPriceByTripId(trip.id);
	});