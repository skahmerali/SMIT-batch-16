import { NavLink, Outlet } from "react-router";


const MainLayout = () => {
    return (
        <div>
            <nav style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/setting">setting</NavLink>
                <NavLink to="/signup">Singup</NavLink>
            </nav>


            <Outlet />
        </div>
    );
};


export default MainLayout;