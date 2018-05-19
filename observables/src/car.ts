import * as tsriot from 'tsriot';

export class Car extends tsriot.Observable {
    make: string;
    model: string;
    started: boolean;

    constructor(make: string, model: string) {
        super();
        this.started = false;

        this.on('start', () => {
            this.started = true;
        });
    }
}
