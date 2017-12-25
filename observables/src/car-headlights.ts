import * as tsriot from 'tsriot';

import { Car } from './car';

class CarHeadlightsTag extends tsriot.Tag {
    car: Car;
    engineOn: boolean;

    init() {
        this.car = this.opts.car;
        this.car.on('start', function() {
            this.engineOn = true;
            this.update();
        }.bind(this));
    }
}
