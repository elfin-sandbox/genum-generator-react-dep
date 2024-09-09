export async function fetchWord(wordLength) {
    try {
        const response = await fetch(`https://random-word-api.vercel.app/api?words=1&length=${wordLength}`);
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error("Error fetching word:", error);
        return "Sorry, we couldn't fetch the word.";
    }
}

export async function fetchDefinition(targetWord) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${targetWord}`);
        const data = await response.json();

        const definition = data[0].meanings[0].definitions[0].definition;
        const partSpeech = data[0].meanings[0].partOfSpeech;
        return `(${partSpeech}) ${definition}`;
    } catch (error) {
        console.error("Error fetching definition:", error);
        return "Sorry, we couldn't fetch the definition.";
    }
}
