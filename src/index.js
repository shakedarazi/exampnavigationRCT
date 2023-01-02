import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Fish from './Fish';
import Predator from './Predator';
import Bird from './Bird';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='fish' element={<Fish />}>
            <Route path='salmon' element={<div>
              <h1>salmon</h1>
            </div>} />
            <Route path='amnon' element={<div>
              <h1>amnon</h1>
            </div>} />
          </Route>
          <Route path='predator' element={<Predator />} >
            <Route path='lion' element={<div>
              <h1>lion</h1>
            </div>}/>
            <Route path='tigris' element={<div>
              <h1>tigris</h1>
            </div>} />
          </Route>
          <Route path='bird' element={<Bird />} >
            <Route path='eagle' element={<div>
              <h1>eagle</h1>
            </div>} />
            <Route path='wagtail' element={<div>
              <h1>wagtail</h1>
            </div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


        // If you want to start measuring performance in your app, pass a function
        // to log results (for example: reportWebVitals(console.log))
        // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        reportWebVitals();
