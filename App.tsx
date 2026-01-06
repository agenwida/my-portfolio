import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PageTransition from "./PageTransition";
import ScrollToHash from "./ScrollToHash";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import WorksApp from "./works/App";
import AboutApp from "./about/App";

/* --------------------------------
   ROUTED CONTENT (INSIDE ROUTER)
--------------------------------- */
const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToHash />

      <div className="flex h-auto min-h-screen w-full flex-col">
        <Navbar />

        <main className="flex-1 flex flex-col pt-16">
          <AnimatePresence mode="wait">
            <Routes location={location}>
              {/* HOME */}
              <Route
                path="/"
                element={
                  <PageTransition key={location.pathname}>
                    <>
                      <Hero />
                      <Stats />
                      <Skills />
                      <Testimonials />
                      <Contact />
                    </>
                  </PageTransition>
                }
              />

              {/* ABOUT */}
              <Route
                path="/about"
                element={
                  <PageTransition key={location.pathname}>
                    <AboutApp />
                  </PageTransition>
                }
              />

              {/* WORKS */}
              <Route
                path="/works"
                element={
                  <PageTransition key={location.pathname}>
                    <WorksApp />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>

        </main>

        <Footer />
      </div>
    </>
  );
};

/* --------------------------------
   ROOT APP (ROUTER PROVIDER)
--------------------------------- */
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
