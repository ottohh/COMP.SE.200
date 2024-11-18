import add from '../src/add.js';

test('Test using positive numbers', () => {
    var sum = add(6,4)
    expect(sum).toEqual(10)
});

test('Test using negative numbers', () => {
    var sum_pos_neg = add(6,-4)
    expect(sum_pos_neg).toEqual(2)

    var sum_neg_pos = add(-6,4)
    expect(sum_neg_pos).toEqual(-2)

    var sum_neg_neg = add(-6,-4)
    expect(sum_neg_neg).toEqual(-10)
});

test('Test edge cases', () => {
    var char_augend = add('a', 1)
    expect(char_augend).toEqual('a1')

    var char_addend = add(1, 'a')
    expect(char_addend).toEqual('1a')

    var sum_one_arg = add(6)
    expect(sum_one_arg).toEqual(6)

    var sum_no_args = add()
    expect(sum_no_args).toEqual(0)
});