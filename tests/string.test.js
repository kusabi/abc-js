import '../src';

describe('cipher', () => {
    test('convert some characters', () => {
        expect('Hello'.cipher('elo', 'ary')).toEqual('Harry');
    })

    test('method is chainable', () => {
        expect('Hello'.cipher('elo', 'ary').reverse()).toEqual('yrraH')
    })
});

describe('chunk', () => {
    test('defaults to chunks of 1 character', () => {
        expect('Hello'.chunk()).toEqual(['H', 'e', 'l', 'l', 'o']);
    })

    test('larger chunks can be used', () => {
        expect('Hello'.chunk(3)).toEqual(['Hel', 'lo']);
    })

    test('method is chainable', () => {
        expect('Hello'.chunk().join('')).toEqual('Hello')
    })
});


describe('fromAlBhed', () => {
    test('converts from albhed', () => {
        expect('Rammu ruf yna oui?'.fromAlBhed()).toEqual('Hello how are you?')
    })

    test('method is chainable', () => {
        expect('Rammu ruf yna oui?'.fromAlBhed().toUpperCase()).toEqual('HELLO HOW ARE YOU?')
    })
});

describe('reverse', () => {
    test('reverses the characters in the string', () => {
        expect('Hello'.reverse()).toEqual('olleH');
    })

    test('method is chainable', () => {
        expect('Hello'.reverse().toUpperCase()).toEqual('OLLEH')
    })
});

describe('shuffle', () => {
    test('elements are shuffled', () => {
        for (let i = 0; i < 20; i++) {
            let string = 'abcdefghijklm'.shuffle();
            expect(string).not.toEqual('abcdefghijklm');
            expect(string.length).toEqual('abcdefghijklm'.length);
            expect(string.sort()).toEqual('abcdefghijklm');
        }
    })

    test('method is chainable', () => {
        expect('abcdefghijklm'.shuffle().sort()).toEqual('abcdefghijklm')
    })
});


describe('sort', () => {
    test('sort without a callback is ascii ordering', () => {
        expect('Hello how are you?'.sort()).toEqual('   ?Haeehlloooruwy')
    })

    test('sort with callback respects callback', () => {
        expect('Hello how are you? You\'ll soon see yellow lights.'.sort((a, b) => {
            if (a === 'l')
                return -1;
            if (b === 'l')
                return 1;
            return (a).localeCompare(b);
        })).toEqual('lllllll        ?.\'aeeeeeghhHinooooooorssstuuwwyyY')
    })

    test('method is chainable', () => {
        expect('abcdefghijklm'.sort().toUpperCase()).toEqual('ABCDEFGHIJKLM')
    })
});


describe('toAlBhed', () => {
    test('converts to albhed', () => {
        expect('Hello how are you?'.toAlBhed()).toEqual('Rammu ruf yna oui?')
    })

    test('method is chainable', () => {
        expect('Hello how are you?'.toAlBhed().toUpperCase()).toEqual('RAMMU RUF YNA OUI?')
    })
});

describe('toCamelCase', () => {

    const cases = [
        ['simple', 'simple'],
        ['Simple', 'simple'],
        ['SIMPLE', 'simple'],

        ['simple123', 'simple123'],
        ['Simple123', 'simple123'],
        ['SIMPLE123', 'simple123'],

        ['simpleTest', 'simpleTest'],
        ['SimpleTest', 'simpleTest'],
        ['simpleTEST', 'simpleTest'],
        ['SIMPLETest', 'simpleTest'],

        ['simple123Test', 'simple123Test'],
        ['Simple123Test', 'simple123Test'],
        ['simple123TEST', 'simple123Test'],
        ['SIMPLE123Test', 'simple123Test'],

        ['simpleXML', 'simpleXml'],
        ['SimpleXML', 'simpleXml'],
        ['SimpleXml', 'simpleXml'],

        ['aTest', 'aTest'],
        ['ATest', 'aTest'],
        ['ATeSt', 'aTeSt'],

        ['beginningMiddleEnd', 'beginningMiddleEnd'],
        ['BeginningMiddleEnd', 'beginningMiddleEnd'],
        ['BeginningMIDDLEEnd', 'beginningMiddleEnd'],
        ['BEGINNINGMiddleEnd', 'beginningMiddleEnd'],
        ['BEGINNINGMiddleEND', 'beginningMiddleEnd'],

        ['fromCamelCaseFormat', 'fromCamelCaseFormat'],
        ['FromPascalCaseFormat', 'fromPascalCaseFormat'],
        ['from_snake_case_format', 'fromSnakeCaseFormat'],
        ['from-kebab-case-format', 'fromKebabCaseFormat'],
    ];

    test.each(cases)('%s to camel case is %s', (before, after) => {
        expect(before.toCamelCase()).toEqual(after);
    });

    test('method is chainable', () => {
        expect('Hello how are you?'.toCamelCase().toUpperCase()).toEqual('HELLOHOWAREYOU?')
    })
});

describe('toKebabCase', () => {

    const cases = [
        ['simple', 'simple'],
        ['Simple', 'simple'],
        ['SIMPLE', 'simple'],

        ['simple123', 'simple123'],
        ['Simple123', 'simple123'],
        ['SIMPLE123', 'simple123'],

        ['simpleTest', 'simple-test'],
        ['SimpleTest', 'simple-test'],
        ['simpleTEST', 'simple-test'],
        ['SIMPLETest', 'simple-test'],

        ['simple123Test', 'simple123-test'],
        ['Simple123Test', 'simple123-test'],
        ['simple123TEST', 'simple123-test'],
        ['SIMPLE123Test', 'simple123-test'],

        ['simpleXML', 'simple-xml'],
        ['SimpleXML', 'simple-xml'],
        ['SimpleXml', 'simple-xml'],

        ['aTest', 'a-test'],
        ['ATest', 'a-test'],
        ['ATeSt', 'a-te-st'],

        ['beginningMiddleEnd', 'beginning-middle-end'],
        ['BeginningMiddleEnd', 'beginning-middle-end'],
        ['BeginningMIDDLEEnd', 'beginning-middle-end'],
        ['BEGINNINGMiddleEnd', 'beginning-middle-end'],
        ['BEGINNINGMiddleEND', 'beginning-middle-end'],

        ['fromCamelCaseFormat', 'from-camel-case-format'],
        ['FromPascalCaseFormat', 'from-pascal-case-format'],
        ['from_snake_case_format', 'from-snake-case-format'],
        ['from-kebab-case-format', 'from-kebab-case-format'],
    ];

    test.each(cases)('%s to kebab case is %s', (before, after) => {
        expect(before.toKebabCase()).toEqual(after);
    });

    test('method is chainable', () => {
        expect('Hello how are you?'.toKebabCase().toUpperCase()).toEqual('HELLO-HOW-ARE-YOU?')
    })
});

describe('toLowerCaseFirst', () => {

    const cases = [
        ['hello', 'hello'],
        ['hello how are you?', 'hello how are you?'],
        ['HELLO', 'hELLO'],
        ['HELLO HOW ARE YOU?', 'hELLO HOW ARE YOU?'],
    ];

    test.each(cases)('%s to lower case first is %s', (before, after) => {
        expect(before.toLowerCaseFirst()).toEqual(after);
    });

    test('method is chainable', () => {
        expect('Hello how are you?'.toLowerCaseFirst().toUpperCase()).toEqual('HELLO HOW ARE YOU?')
    })
});

describe('toPascalCase', () => {

    const cases = [
        ['simple', 'Simple'],
        ['Simple', 'Simple'],
        ['SIMPLE', 'Simple'],

        ['simple123', 'Simple123'],
        ['Simple123', 'Simple123'],
        ['SIMPLE123', 'Simple123'],

        ['simpleTest', 'SimpleTest'],
        ['SimpleTest', 'SimpleTest'],
        ['simpleTEST', 'SimpleTest'],
        ['SIMPLETest', 'SimpleTest'],

        ['simple123Test', 'Simple123Test'],
        ['Simple123Test', 'Simple123Test'],
        ['simple123TEST', 'Simple123Test'],
        ['SIMPLE123Test', 'Simple123Test'],

        ['simpleXML', 'SimpleXml'],
        ['SimpleXML', 'SimpleXml'],
        ['SimpleXml', 'SimpleXml'],

        ['aTest', 'ATest'],
        ['ATest', 'ATest'],
        ['ATeSt', 'ATeSt'],

        ['beginningMiddleEnd', 'BeginningMiddleEnd'],
        ['BeginningMiddleEnd', 'BeginningMiddleEnd'],
        ['BeginningMIDDLEEnd', 'BeginningMiddleEnd'],
        ['BEGINNINGMiddleEnd', 'BeginningMiddleEnd'],
        ['BEGINNINGMiddleEND', 'BeginningMiddleEnd'],

        ['fromCamelCaseFormat', 'FromCamelCaseFormat'],
        ['FromPascalCaseFormat', 'FromPascalCaseFormat'],
        ['from_snake_case_format', 'FromSnakeCaseFormat'],
        ['from-kebab-case-format', 'FromKebabCaseFormat'],
    ];

    test.each(cases)('%s to pascal case is %s', (before, after) => {
        expect(before.toPascalCase()).toEqual(after);
    });

    test('method is chainable', () => {
        expect('Hello how are you?'.toPascalCase().toUpperCase()).toEqual('HELLOHOWAREYOU?')
    })
});

describe('toSentenceCase', () => {

    const cases = [
        ['simple', 'Simple'],
        ['Simple', 'Simple'],
        ['SIMPLE', 'Simple'],

        ['simple123', 'Simple123'],
        ['Simple123', 'Simple123'],
        ['SIMPLE123', 'Simple123'],

        ['simpleTest', 'Simple test'],
        ['SimpleTest', 'Simple test'],
        ['simpleTEST', 'Simple test'],
        ['SIMPLETest', 'Simple test'],

        ['simple123Test', 'Simple123 test'],
        ['Simple123Test', 'Simple123 test'],
        ['simple123TEST', 'Simple123 test'],
        ['SIMPLE123Test', 'Simple123 test'],

        ['simpleXML', 'Simple xml'],
        ['SimpleXML', 'Simple xml'],
        ['SimpleXml', 'Simple xml'],

        ['aTest', 'A test'],
        ['ATest', 'A test'],
        ['ATeSt', 'A te st'],

        ['beginningMiddleEnd', 'Beginning middle end'],
        ['BeginningMiddleEnd', 'Beginning middle end'],
        ['BeginningMIDDLEEnd', 'Beginning middle end'],
        ['BEGINNINGMiddleEnd', 'Beginning middle end'],
        ['BEGINNINGMiddleEND', 'Beginning middle end'],

        ['fromCamelCaseFormat', 'From camel case format'],
        ['FromPascalCaseFormat', 'From pascal case format'],
        ['from_snake_case_format', 'From snake case format'],
        ['from-kebab-case-format', 'From kebab case format'],
    ];

    test.each(cases)('%s to sentence case is %s', (before, after) => {
        expect(before.toSentenceCase()).toEqual(after);
    });

    test('method is chainable', () => {
        expect('Hello how are you?'.toSentenceCase().toUpperCase()).toEqual('HELLO HOW ARE YOU?')
    })
});

describe('toSlug', () => {

    const cases = [
        ['simple', 'simple'],
        ['Simple', 'simple'],
        ['SIMPLE', 'simple'],

        ['simple123', 'simple123'],
        ['Simple123', 'simple123'],
        ['SIMPLE123', 'simple123'],

        ['simpleTest', 'simple-test'],
        ['SimpleTest', 'simple-test'],
        ['simpleTEST', 'simple-test'],
        ['SIMPLETest', 'simple-test'],

        ['simple123Test', 'simple123-test'],
        ['Simple123Test', 'simple123-test'],
        ['simple123TEST', 'simple123-test'],
        ['SIMPLE123Test', 'simple123-test'],

        ['simpleXML', 'simple-xml'],
        ['SimpleXML', 'simple-xml'],
        ['SimpleXml', 'simple-xml'],

        ['aTest', 'a-test'],
        ['ATest', 'a-test'],
        ['ATeSt', 'a-te-st'],

        ['beginningMiddleEnd', 'beginning-middle-end'],
        ['BeginningMiddleEnd', 'beginning-middle-end'],
        ['BeginningMIDDLEEnd', 'beginning-middle-end'],
        ['BEGINNINGMiddleEnd', 'beginning-middle-end'],
        ['BEGINNINGMiddleEND', 'beginning-middle-end'],

        ['fromCamelCaseFormat', 'from-camel-case-format'],
        ['FromPascalCaseFormat', 'from-pascal-case-format'],
        ['from_snake_case_format', 'from-snake-case-format'],
        ['from-kebab-case-format', 'from-kebab-case-format'],
    ];

    test.each(cases)('%s to slug is %s', (before, after) => {
        expect(before.toSlug()).toEqual(after);
    });

    test('method is chainable', () => {
        expect('Hello how are you?'.toSlug().toUpperCase()).toEqual('HELLO-HOW-ARE-YOU?')
    })
});

describe('toSnakeCase', () => {

    const cases = [
        ['simple', 'simple'],
        ['Simple', 'simple'],
        ['SIMPLE', 'simple'],

        ['simple123', 'simple123'],
        ['Simple123', 'simple123'],
        ['SIMPLE123', 'simple123'],

        ['simpleTest', 'simple_test'],
        ['SimpleTest', 'simple_test'],
        ['simpleTEST', 'simple_test'],
        ['SIMPLETest', 'simple_test'],

        ['simple123Test', 'simple123_test'],
        ['Simple123Test', 'simple123_test'],
        ['simple123TEST', 'simple123_test'],
        ['SIMPLE123Test', 'simple123_test'],

        ['simpleXML', 'simple_xml'],
        ['SimpleXML', 'simple_xml'],
        ['SimpleXml', 'simple_xml'],

        ['aTest', 'a_test'],
        ['ATest', 'a_test'],
        ['ATeSt', 'a_te_st'],

        ['beginningMiddleEnd', 'beginning_middle_end'],
        ['BeginningMiddleEnd', 'beginning_middle_end'],
        ['BeginningMIDDLEEnd', 'beginning_middle_end'],
        ['BEGINNINGMiddleEnd', 'beginning_middle_end'],
        ['BEGINNINGMiddleEND', 'beginning_middle_end'],

        ['fromCamelCaseFormat', 'from_camel_case_format'],
        ['FromPascalCaseFormat', 'from_pascal_case_format'],
        ['from_snake_case_format', 'from_snake_case_format'],
        ['from-kebab-case-format', 'from_kebab_case_format'],
    ];

    test.each(cases)('%s to snake case is %s', (before, after) => {
        expect(before.toSnakeCase()).toEqual(after);
    });

    test('method is chainable', () => {
        expect('Hello how are you?'.toSnakeCase().toUpperCase()).toEqual('HELLO_HOW_ARE_YOU?')
    })
});

describe('toTitleCase', () => {

    const cases = [
        ['simple', 'Simple'],
        ['Simple', 'Simple'],
        ['SIMPLE', 'Simple'],

        ['simple123', 'Simple123'],
        ['Simple123', 'Simple123'],
        ['SIMPLE123', 'Simple123'],

        ['simpleTest', 'Simple Test'],
        ['SimpleTest', 'Simple Test'],
        ['simpleTEST', 'Simple Test'],
        ['SIMPLETest', 'Simple Test'],

        ['simple123Test', 'Simple123 Test'],
        ['Simple123Test', 'Simple123 Test'],
        ['simple123TEST', 'Simple123 Test'],
        ['SIMPLE123Test', 'Simple123 Test'],

        ['simpleXML', 'Simple Xml'],
        ['SimpleXML', 'Simple Xml'],
        ['SimpleXml', 'Simple Xml'],

        ['aTest', 'A Test'],
        ['ATest', 'A Test'],
        ['ATeSt', 'A Te St'],

        ['beginningMiddleEnd', 'Beginning Middle End'],
        ['BeginningMiddleEnd', 'Beginning Middle End'],
        ['BeginningMIDDLEEnd', 'Beginning Middle End'],
        ['BEGINNINGMiddleEnd', 'Beginning Middle End'],
        ['BEGINNINGMiddleEND', 'Beginning Middle End'],

        ['fromCamelCaseFormat', 'From Camel Case Format'],
        ['FromPascalCaseFormat', 'From Pascal Case Format'],
        ['from_snake_case_format', 'From Snake Case Format'],
        ['from-kebab-case-format', 'From Kebab Case Format'],
    ];

    test.each(cases)('%s to title case is %s', (before, after) => {
        expect(before.toTitleCase()).toEqual(after);
    });

    test('method is chainable', () => {
        expect('Hello how are you?'.toTitleCase().toUpperCase()).toEqual('HELLO HOW ARE YOU?')
    })
});

describe('toUpperCaseFirst', () => {

    const cases = [
        ['hello', 'Hello'],
        ['hello how are you?', 'Hello how are you?'],
    ];

    test.each(cases)('%s to upper case first is %s', (before, after) => {
        expect(before.toUpperCaseFirst()).toEqual(after);
    });

    test('method is chainable', () => {
        expect('Hello how are you?'.toUpperCaseFirst().toUpperCase()).toEqual('HELLO HOW ARE YOU?')
    })
});

describe('toUpperCaseWords', () => {

    const cases = [
        ['hello', 'Hello'],
        ['hello how are you?', 'Hello How Are You?'],
    ];

    test.each(cases)('%s to upper case words is %s', (before, after) => {
        expect(before.toUpperCaseWords()).toEqual(after);
    });

    test('method is chainable', () => {
        expect('Hello how are you?'.toUpperCaseWords().toUpperCase()).toEqual('HELLO HOW ARE YOU?')
    })
});
