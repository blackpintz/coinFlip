import React, {Component} from 'react'
import './FlippedCoin.css'


class FlippedCoin extends Component {
    render() {
        return (
            <div className = "FlippedCoin">
            {this.props.head && <img src={this.props.head}/>}
            <h3>Out of {this.props.sizeOfArr} flips, there have been {this.props.headCount} heads and {this.props.tailCount} tails.</h3>
            </div>
        )
    }
}

export default FlippedCoin