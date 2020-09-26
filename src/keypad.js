
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class KeypadButtons extends Component {

    render() {
        return (
            <div className="button">

                <Button variant="outline-primary" name="1" onClick={e => this.props.onClick(e.target.name)}>1</Button>
                <Button variant="outline-primary" name="2" onClick={e => this.props.onClick(e.target.name)}>2</Button>
                <Button variant="outline-primary" name="3" onClick={e => this.props.onClick(e.target.name)}>3</Button>
                <Button variant="outline-info" name="+" onClick={e => this.props.onClick(e.target.name)}>+</Button><br/>

                <Button variant="outline-primary" name="4" onClick={e => this.props.onClick(e.target.name)}>4</Button>
                <Button variant="outline-primary" name="5" onClick={e => this.props.onClick(e.target.name)}>5</Button>
                <Button variant="outline-primary" name="6" onClick={e => this.props.onClick(e.target.name)}>6</Button>
                <Button variant="outline-info" name="-" onClick={e => this.props.onClick(e.target.name)}>-</Button><br/>

                <Button variant="outline-primary" name="7" onClick={e => this.props.onClick(e.target.name)}>7</Button>
                <Button variant="outline-primary" name="8" onClick={e => this.props.onClick(e.target.name)}>8</Button>
                <Button variant="outline-primary" name="9" onClick={e => this.props.onClick(e.target.name)}>9</Button>
                <Button variant="outline-info" name="*" onClick={e => this.props.onClick(e.target.name)}>x</Button><br/>

                <Button variant="outline-primary" name="0" onClick={e => this.props.onClick(e.target.name)}>0</Button>
                <Button variant="outline-info" name="." onClick={e => this.props.onClick(e.target.name)}>.</Button>
                <Button variant="outline-info" name="%" onClick={e => this.props.onClick(e.target.name)}>%</Button>
                <Button variant="outline-info" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</Button><br/>

                <Button variant="success" name="=" onClick={e => this.props.onClick(e.target.name)}>=</Button>
                <Button variant="danger" name="C" onClick={e => this.props.onClick(e.target.name)}>C</Button>
            </div>
        );
    }
}


export default KeypadButtons;