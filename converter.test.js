const converter = require('./converter');

describe("Converter", () => {

    test('return $0.003 if currency is 1', () => {
        const currency = 1;
        const result = converter(currency);
        expect(result).toEqual("$0.03");
    });

    test('return Error if currency is A', () => {
        const currency = 'A';
        const result = converter(currency);
        expect(result).toEqual("Error");
    });

    test('return $0.66 if currency is 20', () => {
        const currency = 20;
        const result = converter(currency);
        expect(result).toEqual("$0.66");
    });

    test('return $0.66 if currency is 20', () => {
        const currency = 20;
        const result = converter(currency);
        expect(result).toEqual("$0.66");
    });

    test('return $2.61 if currency is 79', () => {
        const currency = 79;
        const result = converter(currency);
        expect(result).toEqual("$2.61");
    });

    test('return Error if currency is Twenty', () => {
        const currency = 'Twenty';
        const result = converter(currency);
        expect(result).toEqual("Error");
    });

    test('return Error if currency is 0', () => {
        const currency = 0;
        const result = converter(currency);
        expect(result).toEqual("Error");
    });
});