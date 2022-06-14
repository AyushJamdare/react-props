import Card from "./components/Card";
import React from "react";
import data from "./data";
import "./styles/Style.scss"
function App() {

  const cardsData = data.map(character => {
    return(
      <Card 
      character={character}
      />
    )
  });
  return (
    <div>
         {cardsData}
    </div>
  );
}

export default App;
