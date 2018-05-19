import * as tsriot from 'tsriot';

class HelloWorldTag extends tsriot.Tag {
    private name: string;

    init(): void {
        this.name = 'world';
    }

    private edit(e: tsriot.DomEvent): void {
        this.name = (e.target as HTMLInputElement).value;
    }
}
