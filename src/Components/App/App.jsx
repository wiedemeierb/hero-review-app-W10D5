import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {

  //creating an array within state component - //heroList
  //superhero name, alias, power
  //hard coding now, normally this data comes from server
  state = {
    heroList : [
      {
        superheroName: 'The Flash',
        alias: 'Barry Allen',
        power: 'Super Speed',
        onDuty: true,
      }
    ],
  }

  render () {
    // can map up here to a variable
    // javascript land up here(if/else), in return its jsx flavor javascript
    // this.state.array within state.map( () => )
    //.map loops over everything in array
    //everytime through the loop we need to name the specific item --here its hero
    let listOfHeros = this.state.heroList.map( (hero) => {
        //need to return here some jsx thats going on DOM
        return(
          <div>
            {/* //looking for item, which is hero as defined above */}
            <h2>{hero.superheroName}</h2>
            <p>Alias : {hero.alias}</p>
            <p>Power : {hero.power}</p>
          </div>
        )
    });

    return (
      <div className="App">
        <Header />
        {/* getting state on the DOM; .map here as well if you want*/}
        {/* need to call the variable, made above, in our return, listOfHeros */}
        {listOfHeros}
      </div>
    )
  }
}

export default App;
