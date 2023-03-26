export class Spacecraft {
    private destinationCoordinates: number;

    constructor() {
        this.destinationCoordinates = 0;
    }

    travelThroughtTheUniverse(): number {
        let currentPlanet: number = this.destinationCoordinates;
        let totalTrips: number = 0;

        console.log('New trip...');

        if (this.destinationCoordinates > 10000) {
            while(1 < currentPlanet) {
                // Avoid a infinity loop when 'currentPlanet' is equal to '1'.
                currentPlanet = (currentPlanet % 2) == 0 ? currentPlanet / 2 : (currentPlanet * 3) + 1;
    
                totalTrips = totalTrips + 1;
            }
        }

        console.log('Finished trip.');

        return totalTrips;
    }

    setDestinationCoordinates(destinationCoordinates: number) {
        this.destinationCoordinates = destinationCoordinates;
    }
}