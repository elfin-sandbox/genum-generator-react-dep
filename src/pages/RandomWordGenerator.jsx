import { useEffect } from "react";

import WordGenerator from "../components/wordgenerator/WordGenerator";
import Features from "../components/Features";
import Action from "../components/Action";

import "../styles/word-generator.css";
import "../styles/responsive/resp-word-generator.css";

import { setClipboard } from "../utils/setClipboard";
import { loadFeaturesJSON } from "../utils/loadFeaturesJSON";

const RandomWordGenerator = () => {
    useEffect(() => {
        setClipboard(); // Call setClipboard when the component mounts
        loadFeaturesJSON("word");
    }, []);

    return (
        <main>
            <WordGenerator />
            <Features />
            <Action />
        </main>
    );
};
export default RandomWordGenerator;
