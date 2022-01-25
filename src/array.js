/**
 * Copy the array into a new variables
 *
 * @returns {Array}
 */
Array.prototype.copy = function () {
    return this.slice();
}

/**
 * Cycle through each element of the array.
 *
 * @param callback
 *
 * @alias forEach
 */
Array.prototype.each = function (callback) {
    this.forEach(callback);
}

/**
 * Get the first item of the array
 *
 * If a callback is provided, then get the first item that meets the qualifier
 *
 * @param {function(element, index, array)|null} callback
 *
 * @returns {*}
 */
Array.prototype.first = function (callback = null) {
    return callback ? this.find(callback) : this.at(0);
}

/**
 * Get the last item of the array.
 *
 * If a callback is provided, then get the last item that meets the qualifier
 *
 * @param {function(element, index: number, array: Array)|null} callback
 *
 * @returns {*}
 */
Array.prototype.last = function (callback = null) {
    if (callback === null) {
        return this.at(-1);
    }
    let index = this.map((element, index) => callback(element, index, this)).lastIndexOf(true);
    return this[index];
}

/**
 * Create an array containing a range of elements.
 *
 * Intended to work same as php's range() function
 *
 * @returns {Array}
 */
Array.range = function (start, end, step = 1) {

    const startIsString = typeof start == 'string' || start instanceof String;
    const endIsString = typeof end == 'string' || end instanceof String;
    const strings = startIsString && endIsString;

    start = startIsString ? (strings ? start.charCodeAt(0) : 0) : start;
    end = endIsString ? (strings ? end.charCodeAt(0) : 0) : end;

    let array = [];
    if (start <= end) {
        for (let i = start; i <= end; i += step) {
            array.push(strings ? String.fromCharCode(i) : i);
        }
    } else {
        for (let i = start; i >= end; i -= step) {
            array.push(strings ? String.fromCharCode(i) : i);
        }
    }
    return array;
}

/**
 * Shuffle the elements of the array
 *
 * @returns {Array}
 */
Array.prototype.shuffle = function () {
    let currentIndex = this.length;
    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [this[currentIndex], this[randomIndex]] = [this[randomIndex], this[currentIndex]];
    }
    return this;
}