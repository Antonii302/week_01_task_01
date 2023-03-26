import { Spacecraft } from './Spacecraft';

export class Passenger {
    private fullName: string;
    private destinationPlanet: number;
    private spacecraft: Spacecraft;

    constructor(fullName: string, destinationPlanet: number, spacecraft: Spacecraft) {
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