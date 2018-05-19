import * as tsriot from 'tsriot';

class TodoItem {
    title: string;

    done: boolean;

    hidden: boolean;

    constructor(title: string) {
        this.title = title;
        this.done = false;
        this.hidden = false;
    }
}

interface TodoTagOpts {
    title: string;
    items: TodoItem[];
}

class TodoTag extends tsriot.Tag<TodoTagOpts> {
    items: TodoItem[];

    text: string;

    init(): void {
        this.items = this.opts.items || [];
    }

    edit(event: tsriot.DomEvent): void {
        this.text = (event.target as HTMLInputElement).value;
    }

    add(event: tsriot.DomEvent): void {
        if (this.text) {
            this.items.push(new TodoItem(this.text));
            this.text = '';
            (this.refs.input as HTMLInputElement).value = '';
        }
        event.preventDefault();
    }

    removeAllDone(event: tsriot.DomEvent): void {
        this.items = this.items.filter((item): boolean => !item.done);
    }

    // an two example how to filter items on the list
    whatShow(item: TodoItem): boolean {
        return !item.hidden;
    }

    onlyDone(item: TodoItem): boolean {
        return item.done;
    }

    toggle(event: tsriot.DomEvent): boolean {
        const item = event.item as TodoItem;
        item.done = !item.done;
        return true;
    }
}
