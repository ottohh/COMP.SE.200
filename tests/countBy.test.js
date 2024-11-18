import countBy from '../src/countBy.js';

test('Test with Object', () => {
    const products = [
        { 'product': 'egg', 'inStock': true },
        { 'product': 'bread', 'inStock': true },
        { 'product': 'milk', 'inStock': false }
    ]

    var count = countBy(products, value => value.inStock)
    expect(count).toEqual({ 'true': 2, 'false': 1 })
});

test('Test with a simple Array', () => {
    const nums = [1, 1, 1, 1]
    var count = countBy([1, 1, 1, 1], x => x)
    expect(count).toEqual({ '1': 4 })
});

test('Test edge cases', () => {
    var null_collection = countBy(null, x => x+1)
    expect(null_collection).toEqual({})

    var empty_array = countBy([], x => x)
    expect(empty_array).toEqual({})

    var empty_object = countBy({}, x => x)
    expect(empty_object).toEqual({})
});
