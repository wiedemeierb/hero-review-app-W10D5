import React, { Component } from 'react';


class SuperHeroItem extends Component {
    //created a local state (click handler)
    state = {
        unMask : true,
    };
    // need a function that sets state (click handler)
    
    // determine if we should render to DOM or now
    onOrOffDuty() {
        if(this.props.hero.onDuty) {
            return <p>On Duty</p>;
        } else {
            return <p>Sleeping</p>;
        }
    }
    render() {
        return (
            <div className="hero">
                {/* props.hero is defined in HeroList */}
                <h2>{this.props.hero.superheroName}</h2>
                <p>Alias : {this.props.hero.alias}</p>
                <p>Power : {this.props.hero.power}</p>
                
                {/* conditional rendering, example is on or off*/}
                {/* if true, show the thing; the {} is javascript, && means do something */}
                {/* { this.props.hero.onDuty && <p>On Duty</p>} */}
                {/* another route of conditional rendering */}
                {/* if/else show one thing or another */}
                
               {this.onOrOffDuty()}
               <button>Toggle Alias</button>

            </div>
        )
    }
    // JSX on the DOM   
}


export default SuperHeroItem;