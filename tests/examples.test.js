import '../src';

test('sum of all numbers between 1 and 100', () => {
    let answer = Array.range(1, 100).reduce((p,v) => p + v);
    expect(answer).toEqual(5050);
})

test('hex to array to separated string', () => {
    let answer = (99999999999999).toString(16).chunk(2).join('-').toUpperCase();
    expect(answer).toEqual('5A-F3-10-7A-3F-FF');
})

test('array to reverse string', () => {
    let question = 'Hello how are you?';
    let answer = '?uoy era woh olleH';
    expect(question.chunk().reverse().join('')).toEqual(answer);
    expect(question.reverse()).toEqual(answer);
})

test('reverse string', () => {
    let answer = 'Hello how are you?'.reverse();
    expect(answer).toEqual('?uoy era woh olleH');
})