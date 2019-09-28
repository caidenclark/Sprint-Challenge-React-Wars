import React from 'react';
import './App.css';

import CharGrid from "./components/CharGrid";
import Header from "./components/header";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // const [id, setId] = useState(1)
  return (
    <div className="App">
      <Header />
      <CharGrid />
    </div>
  );
}

export default App;