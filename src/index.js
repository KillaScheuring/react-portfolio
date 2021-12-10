import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';
import 'bulma/css/bulma.min.css';
import reportWebVitals from './reportWebVitals';
import NavBar from "./Components/Nav/NavBar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import MainNav from "./Components/Nav/MainNav";
import MainContent from "./Components/MainContent";
import Contact, {Footer} from "./Components/Contact";

ReactDOM.render(
    <>
        <Router>
            <NavBar>
                <Routes>
                    <Route path="*" element={<MainNav/>}/>
                </Routes>
            </NavBar>

            <MainContent>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="*" element={<div>Not Found</div>}/>
                </Routes>
            </MainContent>

            <Footer>
                <Routes>
                    <Route path="*" element={<Contact/>}/>
                </Routes>
            </Footer>
        </Router>
    </>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
