// src/App.js
import './App.css';
import logo from './images/ironhack-logo-xs.png'
import menu from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

function App() {
  return (
    <div className="App">
      <div className='LogoNav'>
      <img src={logo} id='logo' alt='ironhack logo' />
      <img src={menu} id='menu' alt='menu' />
      </div>
      <div className="Content">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button id="button">Awesome!</button>
      </div>
      <div className='Icons'>
      <div className='IconContainer'>
      <img src ={icon1} alt='icon1' />
      <h2>Declarative</h2>
      <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className='IconContainer'>
      <img src ={icon2} alt='icon2' />
      <h2>Components</h2>
      <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className='IconContainer'>
      <img src ={icon3} alt='icon3' />
      <h2>Single-Way</h2>
      <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div className='IconContainer'>
      <img src ={icon4} alt='icon4' />
      <h2>JSX</h2>
      <p>Statically-typed. designed to run on modern browsers.</p>
      </div>

      </div>

    </div>
  );
}
export default App;
