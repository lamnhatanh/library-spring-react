import React from "react";
import "./App.css";
import { Homepage } from "./layouts/HomePage/HomePage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { ScrollToTop } from "./layouts/ScrollToTop/ScrollToTop";

export const App = () => {
    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <Homepage />
            <Footer />
        </div>
    );
};
