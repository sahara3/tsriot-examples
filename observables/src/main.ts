import * as riot from 'riot';
import { Car } from './car';

export function main() {
    // make a new Car instance
    let car = new Car('Ford', 'Focus');

    riot.mount('car-key', { car: car });
    riot.mount('car-headlights', { car: car });
}
