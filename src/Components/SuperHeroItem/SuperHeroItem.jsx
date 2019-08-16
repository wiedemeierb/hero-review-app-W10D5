import React, { Component } from 'react';
import { log } from 'util';


class SuperHeroItem extends Component {
    //created a local state (click handler)
    state = {
        unMask : true,
    };
    // need a function that sets state (click handler)
    toggleMask = () => {
        console.log('clicked a button')
        this.setState({ //method to change the state
            unMask: !this.state.unMask
        })
    }

    // determine if we should render to DOM or now -conditional rendering
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
                {/* {JSON.stringify(this.state)} --will help when testing our button */}
                {/* props.hero is defined in HeroList */}
                <h2>{this.props.hero.superheroName}</h2>
                <p>Power : {this.props.hero.power}</p>
                {/* created to show only if true with button click */}
                { this.state.unMask && 
                    <p>Alias : {this.props.hero.alias}</p>
                }

                {/* conditional rendering, example is on or off*/}
                {/* if true, show the thing; the {} is javascript, && means do something */}
                {/* { this.props.hero.onDuty && <p>On Duty</p>} */}
                {/* another route of conditional rendering */}
                {/* if/else show one thing or another */}
                
               {this.onOrOffDuty()}
               {/* start of our click handler */}
               <button onClick={this.toggleMask}>Toggle Alias</button>

            </div>
        )
    }
    // JSX on the DOM   
}


export default SuperHeroItem;