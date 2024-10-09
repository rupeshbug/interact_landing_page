import Features from "./components/landing/Feature";
import Grow from "./components/landing/Grow";
import HeroSection from "./components/landing/HeroSection";
import SimpleUx from "./components/landing/SimpleUx";
import Simplicity from "./components/landing/Simplicity";
import UserFriendlySection from "./components/landing/UserFriendly";

function App() {
  return (
    <>
      <HeroSection />
      <Features />
      <Grow />
      <SimpleUx />
      <Simplicity />
      <UserFriendlySection />
    </>
  );
}

export default App;
