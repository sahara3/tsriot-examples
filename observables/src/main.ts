import * as riot from 'riot';
import { Car } from './car';

import './car-headlights';
import './car-key';

export function main(): void {
    // make a new Car instance
    const car = new Car('Ford', 'Focus');

    riot.mount('car-key', { car: car });
    riot.mount('car-headlights', { car : car });
}
