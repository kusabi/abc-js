import '../src';

describe('addDay', () => {
    test('it adds a day', () => {
        let date = new Date('2020-01-01T05:00:00+00:00');
        date.addDay();
        expect(date.toString()).toContain('Thu Jan 02 2020 05:00:00');
    })

    test('it moves into the new month', () => {
        let date = new Date('2020-01-31T05:00:00+00:00');
        date.addDay();
        expect(date.toString()).toContain('Sat Feb 01 2020 05:00:00');
    })
});

describe('addDays', () => {
    test('it adds a day', () => {
        let date = new Date('2020-01-01T05:00:00+00:00');
        date.addDays(1);
        expect(date.toString()).toContain('Thu Jan 02 2020 05:00:00');
    })

    test('it adds 5 days', () => {
        let date = new Date('2020-01-01T05:00:00+00:00');
        date.addDays(5);
        expect(date.toString()).toContain('Mon Jan 06 2020 05:00:00');
    })

    test('it moves into the new month', () => {
        let date = new Date('2020-01-29T05:00:00+00:00');
        date.addDays(11);
        expect(date.toString()).toContain('Sun Feb 09 2020 05:00:00');
    })

    test('it respects leap years', () => {
        let date = new Date('2020-02-27T05:00:00+00:00');
        date.addDays(2);
        expect(date.toString()).toContain('Sat Feb 29 2020 05:00:00');

        date = new Date('2021-02-27T05:00:00+00:00');
        date.addDays(2);
        expect(date.toString()).toContain('Mon Mar 01 2021 05:00:00');
    })
});


describe('addSecond', () => {
    test('it adds a second', () => {
        let date = new Date('2020-01-01T05:00:00+00:00');
        date.addSecond();
        expect(date.toString()).toContain('Wed Jan 01 2020 05:00:01');
    })
});

describe('addSeconds', () => {
    test('it adds a second', () => {
        let date = new Date('2020-01-01T05:00:00+00:00');
        date.addSeconds(1);
        expect(date.toString()).toContain('Wed Jan 01 2020 05:00:01');
    })

    test('it adds 5 seconds', () => {
        let date = new Date('2020-01-01T05:00:00+00:00');
        date.addSeconds(5);
        expect(date.toString()).toContain('Wed Jan 01 2020 05:00:05');
    })

    test('it moves into the new minute', () => {
        let date = new Date('2020-01-01T05:00:50+00:00');
        date.addSeconds(11);
        expect(date.toString()).toContain('Wed Jan 01 2020 05:01:01');
    })
});

describe('isLeapYear', () => {
    test('all valid leap years match', () => {
        const leapYears = [1804, 1808, 1812, 1816, 1820, 1824, 1828, 1832, 1836, 1840, 1844, 1848, 1852, 1856, 1860, 1864, 1868, 1872, 1876, 1880, 1884, 1888, 1892, 1896, 1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096, 2104, 2108, 2112, 2116, 2120, 2124, 2128, 2132, 2136, 2140, 2144, 2148, 2152, 2156, 2160, 2164, 2168, 2172, 2176, 2180, 2184, 2188, 2192, 2196, 2204, 2208, 2212, 2216, 2220, 2224, 2228, 2232, 2236, 2240, 2244, 2248, 2252, 2256, 2260, 2264, 2268, 2272, 2276, 2280, 2284, 2288, 2292, 2296, 2304, 2308, 2312, 2316, 2320, 2324, 2328, 2332, 2336, 2340, 2344, 2348, 2352, 2356, 2360, 2364, 2368, 2372, 2376, 2380, 2384, 2388, 2392, 2396, 2400];
        for (let y = 1804; y <= 2400; y++) {
            let date = new Date(`${y}-01-01T05:00:00+00:00`);
            expect(date.isLeapYear()).toEqual(leapYears.includes(y));
            expect(Date.isLeapYear(y)).toEqual(leapYears.includes(y));
        }
    })
});
