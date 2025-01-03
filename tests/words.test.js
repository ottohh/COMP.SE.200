import words from '../src/words.js';


//This whole file was created manually
describe('toNumber', () => {
    test('Test splitting unicode string to words without reqular expression', () => {

        var w = words('fred, barney, & pebbles')
        expect(w).toEqual(['fred', 'barney', 'pebbles']);
    });

    test('Test splitting ascii string to words without reqular expression', () => {

        var w = words('fred barney pebbles')
        expect(w).toEqual(['fred', 'barney', 'pebbles']);
    });

    test('Test splitting to words with reqular expression', () => {

        var w = words('fred, barney, & pebbles', /[^, ]+/g)
        expect(w).toEqual(['fred', 'barney', '&', 'pebbles']);
    });

    test('Testing no words match regular expression', () => {

        var w = words('fred, barney, & pebbles', /pp+/g)
        expect(w).toEqual([]);
    });

    test('Testing empty ascii word', () => {

        var w = words('')
        expect(w).toEqual([]);
    });


});

