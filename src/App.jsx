import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import RandomNumberGenerator from "./pages/RandomNumberGenerator";
import RandomWordGenerator from "./pages/RandomWordGenerator";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<LandingPage />} />
                <Route path="/random-number-generator" element={<RandomNumberGenerator />} />
                <Route path="/random-word-generator" element={<RandomWordGenerator />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
