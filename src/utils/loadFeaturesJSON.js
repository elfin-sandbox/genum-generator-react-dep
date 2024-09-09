export async function loadFeaturesJSON(pageType) {
    try {
        const response = await fetch(`src/json/${pageType}-features.json`);
        const data = await response.json();
        let contents = data.contents;

        contents.forEach((card, index) => {
            const icon = document.querySelectorAll(".card__icon")[index];
            const title = document.querySelectorAll(".card__title")[index];
            const description = document.querySelectorAll(".card__description")[index];

            if (icon) {
                icon.src = card.header.icon;
            }
            if (title) {
                title.textContent = card.header.title;
            }
            if (description) {
                description.textContent = card.description;
            }
        });
    } catch (error) {
        console.error("Error loading features JSON:", error);
    }
}
