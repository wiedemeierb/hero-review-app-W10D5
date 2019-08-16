import React, { Component } from 'react';
import SuperHeroItem from '../SuperHeroItem/SuperHeroItem'

class HeroList extends Component {
    render() {
        // GOAL TO PUT OUR LIST ON HEROS ON THE DOM
        //COPY AND PASTED FROM APP.JS ALL THE RENDER ITEMS
        //props below
        //then copy/paste to SuperHeroList
        let listOfHeros = this.props.taco.map((hero) => {
            return (
                // taco={variable defined in our listOfHeros, hero}
               <SuperHeroItem hero={hero}/>
            )
        });
        // JSX on the DOM
        return (
            <div>
                {/* listOfHeros variable created above and being called to DOM --props */}
                {listOfHeros}
            </div>
        )
    }
}
export default HeroList;