import { useState } from 'react';
import './App.css';

function App() {

  const [shouldShowLanding, setShouldShowLanding] = useState(true)
/*   const toggle = () => {
    setShouldShowLanding(!shouldShowLanding)
  } */

/*   const content = () => {
    let result;
    if (shouldShowLanding) {
      result = <p>Landing page</p>
    } else {
      result = <p>Home page</p>
    }
    return result;
  } */

  const [pageName, setPageName] = useState("Home")
  const [inputValue, setInputValue] = useState("")
  const isValid = inputValue.length < 3;

  const checker = () => {
    if (isValid === true) {
      return "Min 3 char";
    } else {
      return "";
    }
  }

  const cars = [
    {brand: "Toyota", model: "Yaris", topSpeed: "190km/h"},
    {brand: "Mercedes", model: "C63", topSpeed: "260km/h"},
    {brand: "Mazda", model: "6", topSpeed: "210km/h"},
    {brand: "Mazda", model: "626", topSpeed: "200km/h"},
    {brand: "Audi", model: "A4", topSpeed: "220km/h"},
  ];

  return (
    <div className="App">
      <p>
        Hello world
      </p>
        
      <div> { shouldShowLanding ? <p>Landing page</p> : <p>Home page</p>} </div>
      {/* <div> { content() } </div> */}
      <button onClick={ () => setShouldShowLanding(!shouldShowLanding) }>Click me!</button>
      {/* <button onClick={ toggle }>Click me!</button> */}

      <button onClick={ () => setPageName("Home") }>Main</button>
      <button onClick={ () => setPageName("Landing") }>Landing</button>
      <button onClick={ () => setPageName("About") }>About</button>
      <div>
        <main>
          { pageName === "Home" && <div>Home page component</div> }
          { pageName === "Landing" && <div>Landing page component</div> }
          { pageName === "About" && <div>About page component</div> }
        </main>
        { pageName === "Landing" || "This is not Landing page" }
        <div>
        { pageName !== "Landing" && "This is not Landing page" }
        </div>
      </div>
    <div className="line1"></div>
    <input type="text" value={ inputValue } onChange={ (e) => setInputValue(e.target.value) } />
    <div>{ checker() }</div>
    <div>{ isValid === true ? "Min 3 chaar" : "" }</div>
    <div>{ isValid === true && "Min 3 chaaar" }</div>
    <div><button type='submit' disabled={isValid}>Submit</button></div>
    <div className="line1"></div>
    <div>
      {
        cars.map(p => (
          <ul>
            <li> { p.brand } { p.model} --- Topspeed: {p.topSpeed} </li>
          </ul>
          )
        )
      }
    </div>
    <div>
      {cars.map((car) => {
        if (car.brand.startsWith(inputValue)) {
          return <li> { car.brand } { car.model} --- Topspeed: {car.topSpeed} </li>
        }
      })}
    </div>
    {/* <div>
      {cars.filter(cars => cars.includes({inputValue})).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))}
    </div> */}
    </div>
  );
}

export default App;
