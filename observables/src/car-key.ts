import * as tsriot from 'tsriot';

class CarKeyTag extends tsriot.Tag {
    start(): void {
        this.opts.car.trigger('start');
    }
}
