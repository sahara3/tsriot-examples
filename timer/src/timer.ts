import * as tsriot from 'tsriot';

class TimerTagOpts {
    start?: number;
}

class TimerTag extends tsriot.Tag<TimerTagOpts> {
    time: number;

    init() {
        this.time = this.opts.start || 0;

        var timer = setInterval(this.tick.bind(this), 1000);
        this.on('unmount', function() {
            clearInterval(timer)
        });
    }

    tick() {
        // 'this' should be bound with TimerTag instance.
        this.update({ time: ++this.time })
    }
}
