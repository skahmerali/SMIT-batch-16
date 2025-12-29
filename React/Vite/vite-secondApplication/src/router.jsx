import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./Containers/Home";
import About from "./Containers/About";
import SignupForm from "./Containers/Signup/Signup";
// import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <>404 not found</>,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "signup", element: <SignupForm /> },
            // { path: "setting", element: <Setting /> },
        ],
    },
]);


export default router;