import { DoThis } from "./components/doThis";
import { Header } from "./components/header";
import { Info } from "./components/info";
import { PleaseDontJustSayHello } from "./components/pleaseDontJustSayHello";
import MoreInfo from "./components/moreinfo";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <div className="snap-y snap-mandatory scroll-smooth">
      <Header />
      <PleaseDontJustSayHello />
      <DoThis />
      <Info />
      <MoreInfo />
      <Footer />
    </div>
  );
};
