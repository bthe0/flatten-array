/**
 * Given an array, returns the flattened representation
 *
 * @param entry
 * @returns {*}
 */
const flattenArray = entry => entry.reduce((result, current) => {
    if (!Array.isArray(current)) {
        return result.concat(current);
    }

    return result.concat(flattenArray(current));
}, []);

/**
 * Given an entry, returns the flattened representation
 * If entry is not an array, returns one entry array with given entry
 *
 * @param entry
 * @returns {*[]|*}
 */
const flatten = entry => {
    if (typeof entry === 'undefined') {
        return [];
    }

    if (!Array.isArray(entry)) {
        return [entry];
    }

    return flattenArray(entry);
};

module.exports = flatten;