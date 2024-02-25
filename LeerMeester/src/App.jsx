import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {

  return (
    <>
       <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
     
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
            <img className="logo" 
              src="/LeerMeester.png"
              alt="Bootstrap"
              width={60}
              height={60}
            />
          </a>
  </div>
    <div className="navbar navbar-collapse-lg" id="navbarNav">
      <center />
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>

    </div>

</nav>

    </>
  )
}

export default App
