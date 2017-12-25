import * as tsriot from 'tsriot';

class HelloWorldTag extends tsriot.Tag {
    name: string;

    init() {
        this.name = 'world';
    }

    edit(e: tsriot.DomEvent) {
        this.name = (<HTMLInputElement>e.target).value;
    }
}
