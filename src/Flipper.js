import React, {Component} from 'react'

import FlippedCoin from './FlippedCoin'

class Flipper extends Component {
    static defaultProps = {
        head: "https://tinyurl.com/react-coin-heads-jpg",
        tail: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg",
    }
    constructor(props) {
        super(props);
            this.state = {
                headCount: 0,
                tailCount: 0,
                coinArray: [],
                pickedValue: undefined,
                options: [this.props.head, this.props.tail],
                gameStart: false
            }  
    }

    flipClick = () => {
        let val = this.state.options[Math.floor(Math.random() * this.state.options.length)]
        let headSize = this.state.coinArray.filter((fVal) => {
            return fVal !== "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"
        })
        let tailSize = this.state.coinArray.filter((fVal) => {
            return fVal !== "https://tinyurl.com/react-coin-heads-jpg"
        })

        if(val === "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"){
          tailSize.push("http://www.pcgscoinfacts.com/UserImages/71009269r.jpg")
        }else{
          headSize.push("https://tinyurl.com/react-coin-heads-jpg")
        }

        this.setState ((prev) => {
            return {
                coinArray: [...prev.coinArray, val],
                pickedValue: val,
                gameStart: true,
                headCount: headSize.length,
                tailCount: tailSize.length
            }
        })


    }
    render () {
        return (
            <div>
            <h2>Let's flip a coin!</h2>
            <FlippedCoin head = {this.state.pickedValue} 
            sizeOfArr = {this.state.coinArray.length} 
            headCount = {this.state.headCount}
            tailCount = {this.state.tailCount}/>
            <button onClick = {this.flipClick}>{this.state.gameStart? "Flip me" :"Click here to start flipping" }</button>
            </div>
        )
    }
}

export default Flipper