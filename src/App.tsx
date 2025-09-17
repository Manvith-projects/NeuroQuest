import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rounds } from './components/Rounds';
import { Prizes } from './components/Prizes';
import { SampleQuestions } from './components/SampleQuestions';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen dark">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="rounds">
        <Rounds />
      </div>
      <div id="prizes">
        <Prizes />
      </div>
      <div id="questions">
        <SampleQuestions />
      </div>
      <div id="registration">
        <Registration />
      </div>
      <Footer />
    </div>
  );
}