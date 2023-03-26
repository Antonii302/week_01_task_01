"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacecraft = void 0;
class Spacecraft {
    constructor() {
        this.destinationCoordinates = 0;
    }
    travelThroughtTheUniverse() {
        let currentPlanet = this.destinationCoordinates;
        let totalTrips = 0;
        console.log('New trip...');
        if (this.destinationCoordinates > 10000) {
            while (1 < currentPlanet) {
                // Avoid a infinity loop when 'currentPlanet' is equal to '1'.
                currentPlanet = (currentPlanet % 2) == 0 ? currentPlanet / 2 : (currentPlanet * 3) + 1;
                totalTrips = totalTrips + 1;
            }
        }
        console.log('Finished trip.');
        return totalTrips;
    }
    setDestinationCoordinates(destinationCoordinates) {
        this.destinationCoordinates = destinationCoordinates;
    }
}
exports.Spacecraft = Spacecraft;
