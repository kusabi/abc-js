import '../src';

describe('copy', () => {
    test('returns an exact copy but not the original', () => {
        let array = [1, 2, 3];
        let copy = array.copy();
        expect(array.copy()).toEqual(array);
        expect(array.copy()).not.toBe(array);
        copy[0] = 9;
        expect(array).toEqual([1, 2, 3]);
        expect(copy).toEqual([9, 2, 3]);
    })

    test('method is chainable', () => {
        let array = [1, 2, 3];
        expect(array.copy().first()).toEqual(1);
    })
});

describe('each', () => {
    test('each', () => {
        let i = 0;
        [1, 2, 3].each(v => {
            i += v;
        })
        expect(i).toEqual(6);
    })
})

describe('first', () => {
    test('fetches the first item when no callback is passed', () => {
        expect([1, 2, 3].first()).toEqual(1);
        expect([3, 2, 1].first()).toEqual(3);
        expect([1].first()).toEqual(1);
        expect([].first()).toBeUndefined();
    });

    test('fetches the first item to match callback if callback is passed', () => {
        expect([5, 6, 7].first(i => i > 5)).toEqual(6);
        expect([5, 6, 7].first((i, k) => k > 1)).toEqual(7);
        expect([5, 6, 7].first((i, k) => k > 999)).toBeUndefined()
        expect([].first((i, k) => k > 1)).toBeUndefined()
    });
});

describe('last', () => {
    test('fetches the last item when no argument is passe', () => {
        expect([1, 2, 3].last()).toEqual(3);
        expect([3, 2, 1].last()).toEqual(1);
        expect([1].last()).toEqual(1);
        expect([].last()).toBeUndefined();
    })

    test('fetches the last item to match callback if callback is passed', () => {
        expect([5, 6, 7].last(i => i < 7)).toEqual(6);
        expect([5, 6, 7].last((i, k) => k < 2)).toEqual(6);
        expect([].last((i, k) => k < 2)).toBeUndefined()
        expect([5, 6, 7].last((i, k) => k > 500)).toBeUndefined()
    });
})

describe('range', () => {
    test('create a range from 1 to 100', () => {
        let range = Array.range(1, 100);
        expect(range.length).toEqual(100);
        for (let i = 1; i <= 100; i++) {
            expect(range[i - 1]).toEqual(i);
        }
    })

    test('create a range from 100 to 1', () => {
        let range = Array.range(100, 1);
        expect(range.length).toEqual(100);
        for (let i = 1; i <= 100; i++) {
            expect(range[i - 1]).toEqual(101 - i);
        }
    })

    test('create a range from 1 to 100 with steps', () => {
        let range = Array.range(1, 100, 5);
        expect(range.length).toEqual(20);
        for (let i = 1; i <= 20; i++) {
            expect(range[i - 1]).toEqual(((i - 1) * 5) + 1);
        }
    })

    test('create a range from a to z', () => {
        let range = Array.range('a', 'z');
        expect(range.length).toEqual(26);
        for (let i = 1; i <= 26; i++) {
            expect(range[i - 1]).toEqual(String.fromCharCode(i + 96));
        }
    })

    test('create a range from A to Z', () => {
        let range = Array.range('A', 'Z');
        expect(range.length).toEqual(26);
        for (let i = 1; i <= 26; i++) {
            expect(range[i - 1]).toEqual(String.fromCharCode(i + 64));
        }
    })

    test('create a range from A to z', () => {
        let range = Array.range('A', 'z');
        expect(range.length).toEqual(58);
        for (let i = 1; i <= 58; i++) {
            expect(range[i - 1]).toEqual(String.fromCharCode(i + 64));
        }
    })

    test('create a range from c to 9', () => {
        let range = Array.range('c', 9);
        expect(range.length).toEqual(10);
        for (let i = 0; i <= 9; i++) {
            expect(range[i]).toEqual(i);
        }
    })

    test('create a range from 9 to c', () => {
        let range = Array.range(9, 'c');
        expect(range.length).toEqual(10);
        for (let i = 0; i <= 9; i++) {
            expect(range[i]).toEqual(9 - i);
        }
    })

    test('create a range from a to Z', () => {
        let range = Array.range('a', 'Z');
        expect(range.length).toEqual(8);
        expect(range[0]).toEqual('a');
        expect(range[1]).toEqual('`');
        expect(range[2]).toEqual('_');
        expect(range[3]).toEqual('^');
        expect(range[4]).toEqual(']');
        expect(range[5]).toEqual('\\');
        expect(range[6]).toEqual('[');
        expect(range[7]).toEqual('Z');
    })

    test('usage with map', () => {
        let array = Array.range('a', 'c').map(letter => 'letter ' + letter);
        expect(array.length).toEqual(3);
        expect(array[0]).toEqual('letter a');
        expect(array[1]).toEqual('letter b');
        expect(array[2]).toEqual('letter c');
    })
});

describe('shuffle', () => {
    test('elements are shuffled', () => {
        for (let i = 0; i < 20; i++) {
            let array = [1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle();
            expect(array).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            expect(array.length).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9].length);
            expect(array.sort()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        }
    })

    test('method is chainable', () => {
        expect([1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle().sort()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
});


