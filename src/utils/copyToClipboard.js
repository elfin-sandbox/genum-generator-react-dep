import { useState } from "react";

const clipboardIcon = {
    copy: "/src/images/clipboard.svg",
    check: "/src/images/check.svg",
};

export const copyToClipboard = (generatedData) => {
    const [copyIcon, setCopyIcon] = useState(clipboardIcon.copy);

    const onCopy = () => {
        if (generatedData !== null) {
            navigator.clipboard
                .writeText(generatedData)
                .then(() => {
                    setCopyIcon(clipboardIcon.check);

                    setTimeout(() => {
                        setCopyIcon(clipboardIcon.copy);
                    }, 1500);
                })
                .catch((err) => {
                    console.error("Failed to copy text: ", err);
                });
        } else {
            console.error("No data to copy.");
        }
    };

    return { copyIcon, onCopy };
};
