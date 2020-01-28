import React, {Component} from 'react';

export default class Bomb extends Component {

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    generateContent = () => {
        if (this.state.secondsLeft === 0){
            return (
                <p>Boom!</p>
            )
        } else {
            return (
                <p>{this.state.secondsLeft} seconds left before I go boom!</p>
            )
        }
    }


    render () {
        return (
            this.generateContent()
        )
    }
}