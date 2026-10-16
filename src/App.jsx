import { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Metrics from "@/sections/Metrics";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Credentials from "@/sections/Credentials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

// The old site had one page per section; keep those URLs working.
const legacyPaths = {
  "/experience": "experience",
  "/education": "credentials",
  "/project": "projects",
  "/projects": "projects",
};

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const id = legacyPaths[pathname];
    if (id) document.getElementById(id)?.scrollIntoView();
  }, [pathname]);

  return (
    <main>
      <Hero />
      <Metrics />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Credentials />
      <Contact />
    </main>
  );
};

const NotFound = () => (
  <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-4 sm:px-6">
    <p className="font-mono text-sm text-accent">404 · no rows returned</p>
    <h1 className="mt-3 text-3xl font-bold">This page doesn't exist.</h1>
    <Link to="/" className="mt-6 text-sm font-medium text-accent underline underline-offset-4">
      Back to the portfolio
    </Link>
  </main>
);

const App = () => (
  <MotionConfig reducedMotion="user">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {Object.keys(legacyPaths).map((p) => (
          <Route key={p} path={p} element={<Home />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </MotionConfig>
);

export default App;
