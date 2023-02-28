import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, BottomNav } from "./";

const Main = () => {
    return(
        <div id="main">
            <Navbar />
            <Outlet/>
            <BottomNav/>
        </div>
    )
}

export default Main