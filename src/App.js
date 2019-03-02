import React from 'react'

class Test extends React.Component {
  state = {
    object: {
      color: "red",
      background: 'lightblue',
    }
  }


  handleClick = () => {
    this.setState({
      object: {
        color: 'white',
        background: 'black'
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} style={this.state.object}>
          Click me!
        </button>
      </div>
    )
  }
}

export default Test;