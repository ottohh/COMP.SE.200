import ceil from '../src/ceil.js';

test('Test using positive precision', () => {
    var positive_num = ceil(6.004, 2)
    expect(positive_num).toEqual(6.01)

    var negative_num = ceil(-6.004, 2)
    expect(negative_num).toEqual(-6)
});

test('Test using negative precision', () => {
    var positive_num = ceil(6040, -2)
    expect(positive_num).toEqual(6100)

    var negative_num = ceil(-6040, -2)
    expect(negative_num).toEqual(-6000)
});

test('Test edge cases', () => {
    var nan_precision = ceil(6040, 'a')
    expect(nan_precision).toEqual(6040)

    var nan_input = ceil('a')
    expect(nan_input).toEqual(NaN)

    var no_precision = ceil(4.006)
    expect(no_precision).toEqual(5)

    var empty = ceil()
    expect(empty).toEqual(NaN)
});