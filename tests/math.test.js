import '../src';

describe('clamp', () => {

    test('values inside range are untouched', () => {
        expect(Math.clamp(1, 1, 10)).toBe(1);
        expect(Math.clamp(2, 1, 10)).toBe(2);
        expect(Math.clamp(3, 1, 10)).toBe(3);
        expect(Math.clamp(4, 1, 10)).toBe(4);
        expect(Math.clamp(5, 1, 10)).toBe(5);
        expect(Math.clamp(6, 1, 10)).toBe(6);
        expect(Math.clamp(7, 1, 10)).toBe(7);
        expect(Math.clamp(8, 1, 10)).toBe(8);
        expect(Math.clamp(9, 1, 10)).toBe(9);
        expect(Math.clamp(10, 1, 10)).toBe(10);
    })

    test('values below range are clamped to min', () => {
        expect(Math.clamp(5, 5, 10)).toBe(5);
        expect(Math.clamp(4, 5, 10)).toBe(5);
        expect(Math.clamp(3, 5, 10)).toBe(5);
        expect(Math.clamp(2, 5, 10)).toBe(5);
        expect(Math.clamp(1, 5, 10)).toBe(5);
        expect(Math.clamp(0, 5, 10)).toBe(5);
        expect(Math.clamp(-1, 5, 10)).toBe(5);
        expect(Math.clamp(Math.E, 5, 10)).toBe(5);
        expect(Math.clamp(-Infinity, 5, 10)).toBe(5);
    })

    test('values above range are clamped to max', () => {
        expect(Math.clamp(7, 5, 7)).toBe(7);
        expect(Math.clamp(8, 5, 7)).toBe(7);
        expect(Math.clamp(9, 5, 7)).toBe(7);
        expect(Math.clamp(10, 5, 7)).toBe(7);
        expect(Math.clamp(11, 5, 7)).toBe(7);
        expect(Math.clamp(Infinity, 5, 7)).toBe(7);
    })
});

describe('lerp', () => {
    test('lerp', () => {
        expect(Math.lerp(10, 20, .5)).toBe(15);
        expect(Math.lerp(10, 20, .2)).toBe(12);
        expect(Math.lerp(10, 20, 1)).toBe(20);
        expect(Math.lerp(10, 20, 0)).toBe(10);
        expect(Math.lerp(10, 20, 2)).toBe(30);
    });
});

describe('pingPong', () => {
    test('values inside range are untouched', () => {
        expect(Math.pingPong(1, 1, 10)).toBe(1);
        expect(Math.pingPong(2, 1, 10)).toBe(2);
        expect(Math.pingPong(3, 1, 10)).toBe(3);
        expect(Math.pingPong(4, 1, 10)).toBe(4);
        expect(Math.pingPong(5, 1, 10)).toBe(5);
        expect(Math.pingPong(6, 1, 10)).toBe(6);
        expect(Math.pingPong(7, 1, 10)).toBe(7);
        expect(Math.pingPong(8, 1, 10)).toBe(8);
        expect(Math.pingPong(9, 1, 10)).toBe(9);
        expect(Math.pingPong(10, 1, 10)).toBe(10);
    })

    test('values less than min by one order count up through the range', () => {
        expect(Math.pingPong(3, 3, 7)).toBe(3);
        expect(Math.pingPong(2, 3, 7)).toBe(4);
        expect(Math.pingPong(1, 3, 7)).toBe(5);
        expect(Math.pingPong(0, 3, 7)).toBe(6);
        expect(Math.pingPong(-1, 3, 7)).toBe(7);
    })

    test('values less than min by two orders count down through the range', () => {
        expect(Math.pingPong(-1, 3, 7)).toBe(7);
        expect(Math.pingPong(-2, 3, 7)).toBe(6);
        expect(Math.pingPong(-3, 3, 7)).toBe(5);
        expect(Math.pingPong(-4, 3, 7)).toBe(4);
        expect(Math.pingPong(-5, 3, 7)).toBe(3);
    })

    test('values less than min by three orders count up through the range', () => {
        expect(Math.pingPong(-5, 3, 7)).toBe(3);
        expect(Math.pingPong(-6, 3, 7)).toBe(4);
        expect(Math.pingPong(-7, 3, 7)).toBe(5);
        expect(Math.pingPong(-8, 3, 7)).toBe(6);
        expect(Math.pingPong(-9, 3, 7)).toBe(7);
    })

    test('values more than max by one order count down through the range', () => {
        expect(Math.pingPong(7, 3, 7)).toBe(7);
        expect(Math.pingPong(8, 3, 7)).toBe(6);
        expect(Math.pingPong(9, 3, 7)).toBe(5);
        expect(Math.pingPong(10, 3, 7)).toBe(4);
        expect(Math.pingPong(11, 3, 7)).toBe(3);
    })

    test('values more than max by two orders count up through the range', () => {
        expect(Math.pingPong(11, 3, 7)).toBe(3);
        expect(Math.pingPong(12, 3, 7)).toBe(4);
        expect(Math.pingPong(13, 3, 7)).toBe(5);
        expect(Math.pingPong(14, 3, 7)).toBe(6);
        expect(Math.pingPong(15, 3, 7)).toBe(7);
    })

    test('values more than max by three orders count down through the range', () => {
        expect(Math.pingPong(15, 3, 7)).toBe(7);
        expect(Math.pingPong(16, 3, 7)).toBe(6);
        expect(Math.pingPong(17, 3, 7)).toBe(5);
        expect(Math.pingPong(18, 3, 7)).toBe(4);
        expect(Math.pingPong(19, 3, 7)).toBe(3);
    })

    test('random tests', () => {
        expect(Math.pingPong(-8, 1, 5)).toBe(2);
        expect(Math.pingPong(-7, 1, 5)).toBe(1);
        expect(Math.pingPong(-6, 1, 5)).toBe(2);
        expect(Math.pingPong(-5, 1, 5)).toBe(3);
        expect(Math.pingPong(-4, 1, 5)).toBe(4);
        expect(Math.pingPong(-3, 1, 5)).toBe(5);
        expect(Math.pingPong(-2, 1, 5)).toBe(4);
        expect(Math.pingPong(-1, 1, 5)).toBe(3);
        expect(Math.pingPong(0, 1, 5)).toBe(2);
        expect(Math.pingPong(1, 1, 5)).toBe(1);
        expect(Math.pingPong(2, 1, 5)).toBe(2);
        expect(Math.pingPong(3, 1, 5)).toBe(3);
        expect(Math.pingPong(4, 1, 5)).toBe(4);
        expect(Math.pingPong(5, 1, 5)).toBe(5);
        expect(Math.pingPong(6, 1, 5)).toBe(4);
        expect(Math.pingPong(7, 1, 5)).toBe(3);
        expect(Math.pingPong(8, 1, 5)).toBe(2);
        expect(Math.pingPong(9, 1, 5)).toBe(1);
        expect(Math.pingPong(10, 1, 5)).toBe(2);
        expect(Math.pingPong(11, 1, 5)).toBe(3);
        expect(Math.pingPong(12, 1, 5)).toBe(4);
        expect(Math.pingPong(13, 1, 5)).toBe(5);
        expect(Math.pingPong(14, 1, 5)).toBe(4);
        expect(Math.pingPong(15, 1, 5)).toBe(3);
        expect(Math.pingPong(16, 1, 5)).toBe(2);
        expect(Math.pingPong(17, 1, 5)).toBe(1);
        expect(Math.pingPong(18, 1, 5)).toBe(2);
        expect(Math.pingPong(19, 1, 5)).toBe(3);
        expect(Math.pingPong(20, 1, 5)).toBe(4);
        expect(Math.pingPong(21, 1, 5)).toBe(5);

        expect(Math.pingPong(50000, 7, 7)).toBe(7);
        expect(Math.pingPong(9, 7, 8)).toBe(7);
        expect(Math.pingPong(10, 7, 8)).toBe(8);
        expect(Math.pingPong(15, 7, 8)).toBe(7);
    });
});

describe('randomBetween', () => {
    test('random', () => {

        for (let i = 0; i < 5; i++) {
            const value = Math.randomBetween();
            expect(value).toBeGreaterThanOrEqual(0);
            expect(value).toBeLessThanOrEqual(1);
        }

        for (let i = 0; i < 5; i++) {
            const value = Math.randomBetween(10);
            expect(value).toBeGreaterThanOrEqual(0);
            expect(value).toBeLessThanOrEqual(10);
        }

        for (let i = 0; i < Math; i++) {
            const value = Math.randomBetween(100, 150);
            expect(value).toBeGreaterThanOrEqual(100);
            expect(value).toBeLessThanOrEqual(150);
        }
    });
});

describe('wrap', () => {

    test('values inside range are untouched', () => {
        expect(Math.wrap(1, 1, 10)).toBe(1);
        expect(Math.wrap(2, 1, 10)).toBe(2);
        expect(Math.wrap(3, 1, 10)).toBe(3);
        expect(Math.wrap(4, 1, 10)).toBe(4);
        expect(Math.wrap(5, 1, 10)).toBe(5);
        expect(Math.wrap(6, 1, 10)).toBe(6);
        expect(Math.wrap(7, 1, 10)).toBe(7);
        expect(Math.wrap(8, 1, 10)).toBe(8);
        expect(Math.wrap(9, 1, 10)).toBe(9);
        expect(Math.wrap(10, 1, 10)).toBe(10);
    })

    test('one step under becomes the upper range', () => {
        expect(Math.wrap(4, 5, 10)).toBe(10);
    })

    test('one step over becomes the lower range', () => {
        expect(Math.wrap(11, 5, 10)).toBe(5);
    })

    test('range of identical numbers will always return the same number', () => {
        for (let i = -20; i <= 20; i++) {
            expect(Math.wrap(i, 7, 7)).toBe(7);
        }
    })

    test('use case - wrap circular degrees', () => {
        expect(Math.wrap(0, 1, 360)).toBe(360);
        expect(Math.wrap(361, 1, 360)).toBe(1);
        for (let i = 1; i <= 360; i++) {
            expect(Math.wrap(i, 1, 360)).toBe(i);
        }
        for (let i = 361; i <= 720; i++) {
            expect(Math.wrap(i, 1, 360)).toBe(i - 360);
        }
    })
});