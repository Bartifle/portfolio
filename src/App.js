import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import VerticalTracker from "./components/VerticalTracker/VerticalTracker";
import Main from "./Sections/Main/Main";
import About from "./Sections/About/About";
import Experiences from "./Sections/Experiences/Experiences";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
    return (
        <div className="App">
            <AnimatedBackground />
            <Navbar />
            <VerticalTracker />
            <main className="portfolio-content">
                <Main />
                <About />
                <Experiences />
                <Projects />
                <Skills />
            </main>
            <BackToTop />
            <Footer />
        </div>
    );
}

export default App;
