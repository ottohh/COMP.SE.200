import capitalize from '../src/capitalize.js';

test('Test using single word', () => {
    var all_caps = capitalize('FRED')
    expect(all_caps).toEqual('Fred')

    var all_lower_case = capitalize('fred')
    expect(all_lower_case).toEqual('Fred')

    var mixed = capitalize('fReD')
    expect(mixed).toEqual('Fred')

    var starting_with_number = capitalize('1fReD')
    expect(starting_with_number).toEqual('1fred')
});

test('Test using multiple words', () => {
    var mixed = capitalize('fRed Is tesTIng')
    expect(mixed).toEqual('Fred is testing')

    var with_chars = capitalize('@fRed 1s 7es+Ing')
    expect(with_chars).toEqual('@fred 1s 7es+ing')
});

test('Test using edge cases', () => {
    var number = capitalize(1)
    expect(number).toEqual("1")

    var empty = capitalize()
    expect(empty).toEqual("Undefined")

    var empty_string = capitalize('')
    expect(empty_string).toEqual('')
});