import ProgressIndicator from "./components/ProgressIndicator";
import Explanation1 from "./pages/Explanation1";
import Explanation2 from "./pages/Explanation2";
import Hero from "./pages/Hero";
import Problem from "./pages/Problem";
import Solution from "./pages/Solution";
import Warning from "./pages/Warning";

export const App = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-auto scroll-smooth">
      <ProgressIndicator progress={26} />

      <Hero />
      <Problem />
      <Solution />
      <Explanation1 />
      <Explanation2 />
      <Warning />
    </div>
  );
};
