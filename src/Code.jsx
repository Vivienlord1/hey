import React, { Component } from 'react';

 class Code extends Component {
     constructor(props) {
         super(props);

    this.state = {
        intext: "I will change when you click Me",
      };
     }

     toChange = () => {
        this.setState({
          intext: "I have been changed",
        });
      };

    render(props) {
        return (
            <div>
                <h1>{this.state.intext}</h1>
                <button onClick={this.toChange}>clicked</button>
            </div>
        )
    }
}
export default Code;
