import React, { Component } from 'react'

 class Bonus extends Component {
     constructor(props) {
         super (props)

         this.state = {
             color: true
         }
     }

     changeColor(){
         this.setState({
            color: green
         });
     }
    render(props) {
        return (
            <div>
                <h1>{this.state.black}</h1>
                <button onClick={this.changeColor}>Clicked</button>
            </div>
        )
    }
}
export default Bonus;