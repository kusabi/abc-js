/**
 * Convert the string using a mono-alphabetic cipher
 *
 * @returns {String}
 */
String.prototype.cipher = function (alpha, beta) {
    let result = '';
    for (let character of this.chunk()) {
        let position = alpha.indexOf(character);
        result += position === -1 ? character : beta.at(position);
    }
    return result;
}

/**
 * Convert the string to an array of sub strings, where each entry is the next N characters of the string
 *
 * @returns {Array}
 */
String.prototype.chunk = function (size = 1) {
    return this.match(new RegExp(".{1," + size + "}", "g"));
}

/**
 * Convert from albhed to english
 *
 * @returns {String}
 */
String.prototype.fromAlBhed = function () {
    return this.cipher('ypltavkrezgmshubxncdijfqowYPLTAVKREZGMSHUBXNCDIJFQOW', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
}

/**
 * Reverse the characters of the string
 *
 * @returns {String}
 */
String.prototype.reverse = function () {
    return this.chunk().reverse().join('');
}

/**
 * Shuffle the elements of the string
 *
 * @returns {String}
 */
String.prototype.shuffle = function () {
    return this.chunk().shuffle().join('');
}

/**
 * Sort the characters of the string
 *
 * @returns {String}
 */
String.prototype.sort = function (compareFn) {
    return this.chunk().sort(compareFn).join('');
}

/**
 * Convert from english to albhed
 *
 * @returns {String}
 */
String.prototype.toAlBhed = function () {
    return this.cipher('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 'ypltavkrezgmshubxncdijfqowYPLTAVKREZGMSHUBXNCDIJFQOW');
}

/**
 * Convert string to camelCase
 *
 * @returns {String}
 */
String.prototype.toCamelCase = function () {
    return this.replace(/[ _-]|(?<=[^\WA-Z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/g, '_')
        .toLowerCase()
        .toUpperCaseWords('_')
        .replaceAll('_', '')
        .toLowerCaseFirst();
}

/**
 * Convert string to kebab-case
 *
 * @returns {String}
 */
String.prototype.toKebabCase = function () {
    return this.replace(/[ _-]|(?<=[^\WA-Z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/g, '-').toLowerCase();
}

/**
 * Convert the first character to lower case
 *
 * @returns {String}
 */
String.prototype.toLowerCaseFirst = function () {
    return this.charAt(0).toLowerCase() + this.slice(1);
}

/**
 * Convert string to PascalCase
 *
 * @returns {String}
 */
String.prototype.toPascalCase = function () {
    return this.replace(/[ _-]|(?<=[^\WA-Z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/g, '_')
        .toUpperCaseWords('_')
        .replaceAll('_', '');
}

/**
 * Convert string to Sentence Case
 *
 * @returns {String}
 */
String.prototype.toSentenceCase = function () {
    return this.replace(/[ _-]|(?<=[^\WA-Z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/g, ' ')
        .toLowerCase()
        .toUpperCaseFirst();
}

/**
 * Convert string to slug
 *
 * @returns {String}
 */
String.prototype.toSlug = function () {
    return this.toKebabCase();
}

/**
 * Convert string to snake_case
 *
 * @returns {String}
 */
String.prototype.toSnakeCase = function () {
    return this.replace(/[ _-]|(?<=[^\WA-Z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/g, '_')
        .toLowerCase();
}

/**
 * Convert string to Title Case
 *
 * @returns {String}
 */
String.prototype.toTitleCase = function () {
    return this.replace(/[ _-]|(?<=[^\WA-Z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/g, ' ')
        .toLowerCase()
        .toUpperCaseWords();
}

/**
 * Convert the first character to upper case
 *
 * @returns {String}
 */
String.prototype.toUpperCaseFirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

/**
 * Convert the string so that all words have their first letter upper cased
 *
 * @returns {String}
 */
String.prototype.toUpperCaseWords = function (separators = " \t\r\n\f\v") {
    return this.toLowerCase().replace(new RegExp("^[a-z]|[" + separators + "][a-z]", "g"), function (letter) {
        return letter.toUpperCase();
    });
}

