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

class TodoTagOpts {
    title: string;
    items: Array<TodoItem>;
}

class TodoTag extends tsriot.Tag<TodoTagOpts> {
    items: Array<TodoItem>;

    text: string;

    init() {
        this.items = this.opts.items || [];
    }

    edit(event: tsriot.DomEvent) {
        this.text = (<HTMLInputElement>event.target).value;
    }

    add(event: tsriot.DomEvent) {
        if (this.text) {
            this.items.push(new TodoItem(this.text));
            this.text = '';
            (<HTMLInputElement>this.refs.input).value = '';
        }
        event.preventDefault();
    }

    removeAllDone(event: tsriot.DomEvent) {
        this.items = this.items.filter(function(item) {
            return !item.done;
        });
    }

    // an two example how to filter items on the list
    whatShow(item: TodoItem) {
        return !item.hidden;
    }

    onlyDone(item: TodoItem) {
        return item.done;
    }

    toggle(event: tsriot.DomEvent) {
        var item = <TodoItem>event.item;
        item.done = !item.done;
        return true;
    }
}
