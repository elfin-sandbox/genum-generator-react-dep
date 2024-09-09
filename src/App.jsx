import { HashRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import RandomNumberGenerator from "./pages/RandomNumberGenerator";
import RandomWordGenerator from "./pages/RandomWordGenerator";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="random-number-generator" element={<RandomNumberGenerator />} />
                    <Route path="random-word-generator" element={<RandomWordGenerator />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
