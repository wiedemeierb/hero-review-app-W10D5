import React, { Component } from 'react';


class HeroList extends Component {
    render() {
        // GOAL TO PUT OUR LIST ON HEROS ON THE DOM
        //COPY AND PASTED FROM APP.JS ALL THE RENDER ITEMS
        //props below
        let listOfHeros = this.props.taco.map((hero) => {
            return (
                <div>
                    <h2>{hero.superheroName}</h2>
                    <p>Alias : {hero.alias}</p>
                    <p>Power : {hero.power}</p>
                </div>
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