import * as tsriot from 'tsriot';
import { Car } from './car';

interface CarHeadlightsTagOpts {
    car: Car;
}

class CarHeadlightsTag extends tsriot.Tag<CarHeadlightsTagOpts> {
    private car: Car;
    private engineOn = false;

    init(): void {
        this.car = this.opts.car;
        this.car.on('start', () => {
            this.engineOn = true;
            this.update();
        });
    }
}
