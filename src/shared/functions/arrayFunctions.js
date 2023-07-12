export function isArrayContains(key, value, array) {
    return $.grep(array, function (e) {
        return e[key] == value;
    }).length;
}

export function findMinimumInObjectArray(array, keyToCompare) {
    const minValue = Math.min(...array.map((item) => item[keyToCompare]));
    return array.find((item) => item[keyToCompare] === minValue);
}

export function HTMLCollectionToArray(collection) {
    return Array.prototype.slice.call(collection);
}

export function cloneArray(arrayToClone) {
    if (typeof arrayToClone[0] === 'object') {
        const clonedArray = [];
        arrayToClone.forEach((val) => clonedArray.push(Object.assign({}, val)));
        return clonedArray;
    }
    return [...arrayToClone];
}
