import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (!hash) {
            // Always scroll to top on page change
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        // Wait for DOM to render
        setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 50);
    }, [hash, pathname]);

    return null;
};

export default ScrollToHash;
