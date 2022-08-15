import './App.css';
import FrontPage from './components/FrontPage';
import AboutMe from './components/AboutMe';
import './styles/styles.css';
import Navbar from './components/Navbar';
import Abilities from './components/Abilities';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <FrontPage />
            <AboutMe />
            <Abilities />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default App;
