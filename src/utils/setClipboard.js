export const clipboardIcon = {
    copy: "./public/images/clipboard.svg", // Note the relative path
    check: "./public/images/check.svg", // Note the relative path
};

export function setClipboard() {
    const outputContainer = document.querySelector(".output__container");
    const copyIcon = document.querySelector(".clipboard__label");

    if (outputContainer && copyIcon) {
        outputContainer.onmouseleave = () => {
            copyIcon.src = clipboardIcon.copy;
        };
    } else {
        console.error("Failed to set clipboard: one or more elements are null");
    }
}
