import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import Header from './components/Header'
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';


function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App text-white font-serif">
            <Particles options={particlesOptions} init={particlesInit}/>
            <Header />
            <Intro />
            <Skills />
            <Projects />
            <ContactForm />
        </div>
    );
}

export default App;
