const numLimit = {
    MIN_RANGE: 1,
    MAX_RANGE: 999,
};

export function validateNumberRange(minValue, maxValue) {
    const { MIN_RANGE, MAX_RANGE } = numLimit;
    let finishedFirst = false;

    if (isNaN(minValue) || minValue < MIN_RANGE || minValue > MAX_RANGE) {
        alert(`Invalid input for minimum value. Please enter a number between ${MIN_RANGE} and ${MAX_RANGE}.`);
        minValue = MIN_RANGE;
        finishedFirst = true;
    }

    if (isNaN(maxValue) || maxValue < MIN_RANGE || maxValue > MAX_RANGE) {
        if (!finishedFirst)
            alert(`Invalid input for maximum value. Please enter a number between ${MIN_RANGE} and ${MAX_RANGE}.`);
        maxValue = MAX_RANGE;
    }

    if (minValue > maxValue) {
        alert("Minimum value cannot be greater than maximum value.");
        minValue = MIN_RANGE;
        maxValue = MAX_RANGE;
    }

    return { minValue, maxValue };
}
