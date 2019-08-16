import React, { Component } from 'react';


class SuperHeroItem extends Component {
    render() {
        return (
            <div>
                {/* props.hero is defined in HeroList */}
                <h2>{this.props.hero.superheroName}</h2>
                <p>Alias : {this.props.hero.alias}</p>
                <p>Power : {this.props.hero.power}</p>
            </div>
        )
    }
    // JSX on the DOM   
}


export default SuperHeroItem;