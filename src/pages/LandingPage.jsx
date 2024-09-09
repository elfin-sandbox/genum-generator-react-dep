import DevsNote from "../components/landing/DevsNote";
import GenerationType from "../components/landing/GenerationType";
import Hero from "../components/landing/Hero";

import "../styles/landing.css";
import "../styles/responsive/resp-index.css";

const LandingPage = () => {
    return (
        <main>
            <Hero />
            <GenerationType />
            <DevsNote />
        </main>
    );
};
export default LandingPage;
