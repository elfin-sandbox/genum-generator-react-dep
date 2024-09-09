export const formatWord = (word) => {
    if (typeof word !== "string") {
        word = "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
};
