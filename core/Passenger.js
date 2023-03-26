"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passenger = void 0;
class Passenger {
    constructor(fullName, destinationPlanet, spacecraft) {
        this.fullName = fullName;
        this.spacecraft = spacecraft;
        this.destinationPlanet = destinationPlanet;
    }
    takeAndUseSpacecraft() {
        console.log('Taking a spacecraft...');
        console.log('Enter valid destination coordinates.');
        this.spacecraft.setDestinationCoordinates(this.destinationPlanet);
        console.log('pi pu pi pu...');
        console.log(`Passenger: ${this.fullName} - Total trips: ${this.spacecraft.travelThroughtTheUniverse()}`);
    }
}
exports.Passenger = Passenger;
