export async function fetchTrivia(randomNumber) {
    try {
        const response = await fetch(`http://numbersapi.com/${randomNumber}/`);
        const data = await response.text();
        return data.toString();
    } catch (error) {
        console.error("Error fetching trivia:", error);
        return "Sorry, we couldn't fetch the trivia.";
    }
}

export function fetchNumber(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}
