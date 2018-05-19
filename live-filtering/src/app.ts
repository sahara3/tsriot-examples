import * as tsriot from 'tsriot';

interface CurrencyRate {
    title: string;
    price: string;
}

class AppTag extends tsriot.Tag {
    private max = 15;
    private keyword = '';
    private rates: CurrencyRate[] = [];
    private filtered: CurrencyRate[] = [];

    init(): void {
        this.on('update', () => {
            this.filtered = this.rates.filter(c => {
                return !this.keyword || c.title.indexOf(this.keyword.toUpperCase()) === 0;
            });
        });

        this.on('mount', () => {
            window.fetch('http://api.fixer.io/latest?base=USD')
                .then(response => response.json())
                .then(data => {
                    const rates = Object.keys(data.rates)
                        .map(key => ({ title: key, price: data.rates[key] }))
                        .sort((a, b) => (a.price - b.price))
                    this.update({ rates: rates });
                });
        });
    }

    private keyup(e: tsriot.DomEvent): void {
        this.keyword = (e.target as HTMLInputElement).value;
    }
}
