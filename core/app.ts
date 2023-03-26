import { Spacecraft } from './Spacecraft';
import { Passenger } from './Passenger';

const spacecraft = new Spacecraft();

const passengerUno = new Passenger('Pasajero uno', 10001, spacecraft);
passengerUno.takeAndUseSpacecraft();

const passengerDos = new Passenger('Pasajero dos', 10001, spacecraft);
passengerUno.takeAndUseSpacecraft();