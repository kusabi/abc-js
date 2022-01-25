/**
 * The multiplier to transform degrees to radians
 *
 * @typ {number}
 */
Math.DEG2RAD = Math.PI / 180;

/**
 * The multiplier to transform radians to degrees
 *
 * @typ {number}
 */
Math.RAD2DEG = 180 / Math.PI;

/**
 * Clamp a value between two other values
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 *
 * @returns {number}
 */
Math.clamp = function (value, min, max) {
    return value < min ? min : value > max ? max : value;
}

/**
 * Interoperate between two values by a percentage
 *
 * @param {number} from
 * @param {number} to
 * @param {number} amount
 *
 * @returns {number}
 */
Math.lerp = function (from, to, amount) {
    return from + ((to - from) * amount);
}

/**
 * Bounces the value between the min and max value
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 *
 * @return {number}
 */
Math.pingPong = function (value, min, max) {
    if (min === max) {
        return min;
    }

    if (value >= min && value <= max) {
        return value;
    }

    const range = max - min;

    if (value > max) {
        const overBy = value - max;
        const overTimes = Math.floor(overBy / range);
        const augmentBy = overBy % range;
        return overTimes % 2 === 0 ? max - augmentBy : min + augmentBy;
    }

    if (value < min) {
        const underBy = Math.abs(value - min);
        const underTimes = Math.floor(underBy / range);
        const augmentBy = underBy % range;
        return underTimes % 2 === 0 ? min + augmentBy : max - augmentBy;
    }
}

/**
 * Random number between two numbers
 *
 * @param {number} min
 * @param {number} max
 *
 * @returns {number}
 */
Math.randomBetween = function (min = undefined, max = undefined) {
    if (min === undefined && max === undefined) {
        return Math.random();
    }

    if (max === undefined) {
        return Math.randomBetween(0, min);
    }

    return Math.random() * (max - min) + min;
}

/**
 * Wrap a value between two other values
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 *
 * @returns {number}
 */
Math.wrap = function (value, min, max) {
    let augment = (value - min) % (max + 1 - min);
    return augment < 0 ? max + 1 + augment : min + augment;
}

