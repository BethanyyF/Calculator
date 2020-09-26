
import React, { Component } from 'react';
import './App.css';
import KeypadButtons from "./keypad";
import ResultComponent from './results';


class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }

        this.startFresh = false;
    }

    onClick = button => {

        //If equals
        if(button === "="){
            this.calculate()

            //Trigger calculator to start from fresh on next button
            this.startFresh = true;
        }

        //If clear button or set to be started from fresh
        else if(button === "C" || this.startFresh === true){
            this.reset()
            
            //If Fresh is set, re-apply the pressed button
            if(this.startFresh === true){
                this.setState({
                    result: button
                })

                this.startFresh = false;    //set back to false
            }
        }
        
        //Any other buttons
        else {

            //View new result
            var result = this.state.result + button;

            
            //If more than two characters, check if the last two characters are both either: - + * /
            if ( result.length > 2 ) {
                const regEx = /^[-+*\/]{2}/

                //If there both two characters are operators, remove the last one
                if (result.slice(-2).match(regEx)) {
                    var result = result.slice(0, -1);
                }
            }
            

            //Set the state
            this.setState({
                result: result
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "ERROR: Cannot perform this calculation"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };


    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <ResultComponent result={this.state.result}/>
                    <KeypadButtons onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;