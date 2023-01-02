
import { Outlet } from 'react-router-dom';
import './App.css';
import {Link } from "react-router-dom"

function App() {
  return (
    <div >
      <h1>the zoo</h1>
      <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to='/fish'> fish</Link >
        <br></br><hr></hr>
        <Link to='/predator'> predator</Link >
        <br></br><hr></hr>
        <Link to='/bird'> bird</Link >
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
