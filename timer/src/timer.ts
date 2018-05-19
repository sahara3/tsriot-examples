import * as tsriot from 'tsriot';

interface TimerTagOpts {
    start?: number;
}

class TimerTag extends tsriot.Tag<TimerTagOpts> {
    private time: number;

    init(): void {
        this.time = this.opts.start || 0;

        const timer = setInterval(this.tick.bind(this), 1000);
        this.on('unmount', () => {
            clearInterval(timer);
        });
    }

    private tick(): void {
        this.update({ time: ++this.time });
    }
}
