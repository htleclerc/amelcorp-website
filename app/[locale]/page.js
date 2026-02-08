import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarketReality from "@/components/MarketReality";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarketReality />
        <Services />
        <Industries />
      </main>
      <Footer showCTA={true} />
    </>
  );
}
