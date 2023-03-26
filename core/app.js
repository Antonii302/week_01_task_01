"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Spacecraft_1 = require("./Spacecraft");
const Passenger_1 = require("./Passenger");
const spacecraft = new Spacecraft_1.Spacecraft();
const passengerUno = new Passenger_1.Passenger('Pasajero uno', 10001, spacecraft);
passengerUno.takeAndUseSpacecraft();
const passengerDos = new Passenger_1.Passenger('Pasajero dos', 10001, spacecraft);
passengerUno.takeAndUseSpacecraft();
