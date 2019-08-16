import React, { Component } from 'react';
import './App.css';  //since loaded in the parent, all the styles load down
import Header from '../Header/Header';
import HeroList from '../HeroList/HeroList'
import SuperHeroItem from '../SuperHeroItem/SuperHeroItem'

class App extends Component {

  //creating an array within state component - //heroList
  //superhero name, alias, power
  //hard coding now, normally this data comes from server
  //state is a object - properties inside of it can be anything really
  state = {
    heroList : [
      {
        superheroName: 'The Flash',
        alias: 'Barry Allen',
        power: 'Super Speed',
        onDuty: true,
        
      },
      {
        superheroName: 'Batman',
        alias: 'Bryce Wayne',
        power: 'Rich',
        onDuty: false,
        
      }
    ],
  }

  // //just like $(document).ready()
  // //when ready, get data from server, and put on DOM
  // componentDidMount() {
  //   console.log('App is Loaded');
  //   this.getData();
  // }
  // //creating new function because we are getting data quite often, not just on pageload
  // getData() {
  //   //make get request here
  //   this.setState({
  //     //taking array
  //     heroList: [] //get response of data
  //   });
  // }


  render () {
    // can map up here to a variable
    // javascript land up here(if/else), in return its jsx flavor javascript
    // this.state.array within state.map( () => )
    //.map loops over everything in array
    // every time through the loop we need to name the specific item --here its hero
    // COPY/PASTED INTO HEROLIST.JSX AS A COMPONENT
    //JSX
    return (
      <div className="App">
        {/* {this.state} */}
        {/* stringify takes anything that is passed to it and makes its a string. */}
        {/* {JSON.stringify(this.state)} - passes it to the DOM in a string*/}
        <Header />
        {/* getting state on the DOM; .map here as well if you want*/}
        {/* need to call the variable, made above, in our return, listOfHeros */}
        {/* heroList on left is taco —> heroList on right is array within our state */}
        {/* props started */}
        <main>
        {/* created for styling */}
        <HeroList taco = {this.state.heroList} />
        
        </main>
      </div>
    )
  }
}

export default App;
