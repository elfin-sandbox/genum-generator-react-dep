const wordLimit = {
    WORD_LENGTH_MIN: 3,
    WORD_LENGTH_MAX: 9,
    DEFAULT_LENGTH: 5,
};

export function validateInputWord(inputLength) {
    const { WORD_LENGTH_MIN, WORD_LENGTH_MAX, DEFAULT_LENGTH } = wordLimit;

    if (isNaN(inputLength) || inputLength < WORD_LENGTH_MIN || inputLength > WORD_LENGTH_MAX) {
        alert(`Invalid input. Please enter a number between ${WORD_LENGTH_MIN} and ${WORD_LENGTH_MAX}.`);
        return DEFAULT_LENGTH;
    }

    return inputLength;
}
