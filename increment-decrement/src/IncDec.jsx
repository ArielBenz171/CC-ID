import React, {Component} from 'react'
import PropTypes from 'prop-types'


class IncDec extends Component{
    constructor(props){
        super(props);
        this.state = {
            val: this.props.num
        };
    }

    increase(){
        this.setState({val: this.state.val + 1})
    }

    decrease(){
        if(this.state.val === 0)
            alert("Value cannot be less than 0")
        else
            this.setState({val: this.state.val - 1})
    }

    render(){
        return <div>
            <h1>{this.state.val}</h1>
            <button type = "button" onClick = {() => this.increase()}>Increment</button>
            <button type = "button" onClick = {() => this.decrease()}>Decrement</button>
        </div>
    }
}

IncDec.propTypes = {
    num: PropTypes.number.isRequired,
}

export default IncDec;
