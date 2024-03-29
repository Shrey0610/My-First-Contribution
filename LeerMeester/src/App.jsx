import { useState } from 'react'
import React from 'react';
import './App.css';
import App2 from './App2';
import Home from './Home';
import EduHub from './EduHub';
import Health from './Health';
import Skills from './Skills';
import Planner from './Planner';


import './Footer.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


const imagePath2 = '/LeerMeester.png';

function Navbar(){

  return(
  <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark" style={{ overflow: 'auto', display: 'flex', justifyContent: 'center' }}>
    <a className="navbar-brand" href="/"><img src={imagePath2} className="logo" alt="..." /></a>
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="scrollmenu" style={{ display: 'flex', justifyContent: 'center' }}>
      <Link to="/PathForge">Path Forge</Link>
        <a href="/EduHub">EduHub</a>
        <a href="/skills">Develop skills</a>
        <a href="/planner">Planner</a>
        <a href="/health">Healthy Learning</a>


      </div>
    </div>
  </nav>
  )
}

function Footer(){

  return(
    <footer className="text-gray-600 body-font fixed-footer" id="foot-5" style= {{backgroundColor: '#f9eded97'}}>
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
				<a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
				  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
					<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
				  </svg>
				  <span class="ml-3 text-xl">Tailblocks</span>
				</a>
				<p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
			  </div> */}
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4" id="foot-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Path Forge</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Eduhub</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Health</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Skills</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Community</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4" id="foot-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              OFFERS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Buy a Gift</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Redeem a Gift
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Family Plan</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Calm Health</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4" id="foot-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              HELP
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">FAQ</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Cookies</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4" id="foot-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Address
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Bharat
                </a>
              </li>
            </nav>
          </div>
          {/* <div class="lg:w-1/4 md:w-1/2 w-full px-4">
				  <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
				  <nav class="list-none mb-10">
					<li>
					  <a class="text-gray-600 hover:text-gray-800">First Link</a>
					</li>
					<li>
					  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
					</li>
					<li>
					  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
					</li>
					<li>
					  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
					</li>
				  </nav>
				</div> */}
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Copyright © 2023 LeerMeester. All rights reserved
            {/* <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a> */}
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="non+6e" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}


class App extends React.Component {
  render() {
  return (
    <Router>
       <Navbar />
        <br /><br /><br /><br />
        <Routes>
          <Route path="/" element={<App2 />} />
          <Route path="/PathForge" element={<Home />} />
          <Route path="/EduHub" element={<EduHub />} />
          <Route path="/health" element={<Health />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/planner" element={<Planner />} />


        </Routes>
       <Footer />
    </Router>
  )
}
}

export default App
