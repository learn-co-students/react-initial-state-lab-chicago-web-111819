import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }


    render(){

        let isItBoom = () => {
            let expression = this.state.secondsLeft + ' seconds left before I go boom!'
            if (this.state.secondsLeft === 0){
                expression = 'Boom!'
            }
            return expression
        }  
        
        return (
            <div>
                <h2>
                    { isItBoom() }
                </h2>
            </div>
        )
    }
}