import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/landing-page";

const myRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<LandingPage/>} path={"/"}/>
            </Routes>
        </BrowserRouter>
    )
}

export default myRoutes;