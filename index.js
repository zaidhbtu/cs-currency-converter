import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_GJ6sVwx4keitaFNEAP0tGZsiSVZlz9L9MV2SWwgN');

export async function convertCurrency(fromCurrency, toCurrency, units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });

    const multipler = res.data[toCurrency];
    return multipler * units;
}
