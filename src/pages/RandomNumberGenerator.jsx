import { useEffect } from "react";

import NumberGenerator from "../components/number-generator/NumberGenerator";
import Features from "../components/Features";
import Action from "../components/Action";

import "../styles/number-generator.css";
import "../styles/responsive/resp-number-generator.css";

import { setClipboard } from "../utils/setClipboard";
import { loadFeaturesJSON } from "../utils/loadFeaturesJSON";

const RandomNumberGenerator = () => {
    useEffect(() => {
        setClipboard(); // Call setClipboard when the component mounts
        loadFeaturesJSON("number");
    }, []);

    return (
        <main>
            <NumberGenerator />
            <Features />
            <Action />
        </main>
    );
};

export default RandomNumberGenerator;
