import defaultToAny from '../src/defaultToAny.js';

test('Test not undefined default value', () => {
    var res1 = defaultToAny(1, 10, 20)
    expect(res1).toEqual(1)

    var res2 = defaultToAny(undefined, 10, 20)
    expect(res2).toEqual(10)

    var res3 = defaultToAny(undefined, null, 'a')
    expect(res3).toEqual('a')
});

test('Test undefined default value', () => {
    var res1 = defaultToAny(undefined, null, NaN)
    expect(res1).toEqual(NaN)

    var res2 = defaultToAny(undefined, null)
    expect(res2).toEqual(null)
});

test('Test edge cases', () => {
    var empty = defaultToAny()
    expect(empty).toEqual()

    var one_arg = defaultToAny(1)
    expect(one_arg).toEqual(1)
});