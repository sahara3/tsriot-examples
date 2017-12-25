import * as tsriot from 'tsriot';

class CurrencyRate {
    constructor(public title: string, public price: string) {
    }
}

class AppTag extends tsriot.Tag {
    max: number;
    keyword: string;
    rates: Array<CurrencyRate>;
    filtered: Array<CurrencyRate>;

    init() {
        var self = this

        self.max = 15;
        self.keyword = '';
        self.rates = [];
        self.filtered = [];

        self.on('update', function() {
            self.filtered = self.rates.filter(function(c) {
                return !self.keyword || c.title.indexOf(self.keyword.toUpperCase()) == 0;
            })
        });

	self.on('mount', function() {
            window.fetch('http://api.fixer.io/latest?base=USD')
                .then(function(response) { return response.json() })
                .then(function(data) {
                    var rates = Object.keys(data.rates)
                        .map(function (key) { return { title: key, price: data.rates[key] }})
                        .sort(function(a, b) { return a.price - b.price })
                    self.update({ rates: rates });
                });
        });
    }

    keyup(e: tsriot.DomEvent) {
        this.keyword = (<HTMLInputElement>e.target).value;
    }
}
