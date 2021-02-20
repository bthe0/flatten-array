const flatten = require('./flatten');

test('Handle cases when invalid input is given', () => {
    expect(flatten('invalid')).toStrictEqual(['invalid']);
    expect(flatten(0)).toStrictEqual([0]);
    expect(flatten(undefined)).toStrictEqual([]);
});

test('Deep flatten arrays correctly', () => {
    expect(flatten([1, [2, [3, [4, [5]]]]])).toStrictEqual([1, 2, 3, 4, 5]);
    expect(flatten([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
    expect(flatten([])).toStrictEqual([]);
    expect(flatten([[[[], [], [], [[[]], [[]]]], 3]])).toStrictEqual([3]);
});