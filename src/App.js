import './App.css';
import AboutMe from './components/AboutMe';
import './styles/styles.css';
import Navbar from './components/Navbar';
import Abilities from './components/Abilities';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Presentation from './components/Presentation';

function App() {
    return (
        <div className="App">
            <Presentation/>
            <Navbar />
            <AboutMe />
            <Abilities />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default App;
