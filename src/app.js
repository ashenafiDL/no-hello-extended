import { useState } from "react";
import ProgressIndicator from "./components/ProgressIndicator";
import Explanation1 from "./pages/Explanation1";
import Explanation2 from "./pages/Explanation2";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Problem from "./pages/Problem";
import Solution from "./pages/Solution";
import Warning from "./pages/Warning";

export const App = () => {
  const [scrollProgress, setScrollProgress] = useState(5);

  const calculateScrollProgress = (e) => {
    const windowHeight = window.innerHeight;
    const totalHeight = e.target.scrollHeight - windowHeight;
    const currentScroll = e.target.scrollTop;
    const progress = (currentScroll / totalHeight) * 100;
    setScrollProgress(progress);
  };

  return (
    <div
      onScroll={calculateScrollProgress}
      className="h-screen snap-y snap-mandatory overflow-auto scroll-smooth"
    >
      <ProgressIndicator progress={scrollProgress} />

      <Hero />
      <Problem />
      <Solution />
      <Explanation1 />
      <Explanation2 />
      <Warning />

      <Footer />
    </div>
  );
};
