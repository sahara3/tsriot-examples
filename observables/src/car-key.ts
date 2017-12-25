import * as tsriot from 'tsriot';

class CarKeyTag extends tsriot.Tag {
    start() {
        this.opts.car.trigger('start');
    }
}
