import TopBar from "./components/01-TopBar";
import Header from "./components/02-Header";
import Navigation from "./components/03-Navigation";
import Hero from "./components/04-Hero";
import Benefits from "./components/05-Benefits";
import FeaturedProducts from "./components/06-FeaturedProducts";
import Offers from "./components/07-Offers";
import Footer from "./components/08-Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Navigation />
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <Offers />
      <Footer />
    </>
  );
}
