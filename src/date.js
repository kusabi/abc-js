/**
 * Add a day to the date object
 *
 * @returns {Date}
 */
Date.prototype.addDay = function () {
    return this.addDays(1);
}

/**
 * Add a number of days to the date object
 *
 * @param {number} days
 *
 * @returns {Date}
 */
Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + days)
    return this;
}

/**
 * Add a second to the date object
 *
 * @returns {Date}
 */
Date.prototype.addSecond = function () {
    return this.addSeconds(1);
}

/**
 * Add a number of seconds to the date object
 *
 * @param {number} seconds
 *
 * @returns {Date}
 */
Date.prototype.addSeconds = function (seconds) {
    this.setSeconds(this.getSeconds() + seconds)
    return this;
}

/**
 * Is the year a leap year?
 *
 * @param {number} year
 *
 * @returns {boolean}
 */
Date.isLeapYear = function (year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

/**
 * Is the date in a leap year?
 *
 * @returns {boolean}
 */
Date.prototype.isLeapYear = function () {
    return Date.isLeapYear(this.getFullYear());
}