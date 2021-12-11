import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';
import 'bulma/css/bulma.min.css';
import reportWebVitals from './reportWebVitals';
import NavBar from "./Components/Nav/NavBar";
import About from "./Pages/About/About";
import Home from "./Pages/Home";
import MainNav from "./Components/Nav/MainNav";
import MainContent from "./Components/MainContent";
import PokemonQuiz from "./Pages/Projects/PokemonQuiz/PokemonQuiz";
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/About/Resume";
import AboutProjects from "./Pages/About/AboutProjects";
import Platformer from "./Pages/Projects/Platformer/Platformer";
import CovidMapUs from "./Pages/Projects/CovidMapUS/CovidMapUS";
import CovidMapWorld from "./Pages/Projects/CovidMapWorld/CovidMapWorld";
import StarWarsQuiz from "./Pages/Projects/StarWarsQuiz/StarWarsQuiz";

ReactDOM.render(
    <div style={{overflow: "hidden", "-ms-overflow-style": "hidden", "-webkit-scrollbar": "hidden"}}>
        <Router>
            <NavBar>
                <Routes>
                    <Route path="*" element={<MainNav/>}/>
                </Routes>
            </NavBar>
            <MainContent>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/about/resume" element={<Resume/>}/>
                    <Route path="/about/projects" element={<AboutProjects/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/projects/pokemon" element={<PokemonQuiz/>}/>
                    <Route path="/projects/star-wars" element={<StarWarsQuiz/>}/>
                    <Route path="/projects/platformer" element={<Platformer/>}/>
                    <Route path="/projects/covid-us" element={<CovidMapUs/>}/>
                    <Route path="/projects/covid-world" element={<CovidMapWorld/>}/>
                    <Route path="*" element={<div>Not Found</div>}/>
                </Routes>
            </MainContent>
        </Router>
    </div>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
