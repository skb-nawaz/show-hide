import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {key1: false, key2: false}

  IsclickedFirst = () => {
    const {key1} = this.state
    if (key1) {
      this.setState({key1: false})
      this.IsclickedFirstName()
    } else {
      this.setState({key1: true})
      this.IsclickedFirstName()
    }
  }

  IsclickedSecond = () => {
    const {key2} = this.state
    if (key2) {
      this.setState({key2: false})
      this.IsclickedSecondName()
    } else {
      this.setState({key2: true})
      this.IsclickedSecondName()
    }
  }

  IsclickedFirstName = () => {
    const {key1} = this.state
    if (key1) {
      return (
        <div className="hiding1">
          <p>Joe</p>
        </div>
      )
    }
    return null
  }

  IsclickedSecondName = () => {
    const {key2} = this.state
    if (key2) {
      return (
        <div className="hiding1">
          <p>Jonas</p>
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="Heading">Show/Hide</h1>
        <div className="inner-Bg-container">
          <div className="inner-container">
            <button onClick={this.IsclickedFirst} className="buttonstyle">
              Show/Hide Firstname
            </button>
            {this.IsclickedFirstName()}
          </div>
          <div className="inner-container">
            <button onClick={this.IsclickedSecond} className="buttonstyle">
              Show/Hide Lastname
            </button>
            {this.IsclickedSecondName()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
