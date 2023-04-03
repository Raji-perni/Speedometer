// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickBreakButton = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onClickAccelerateButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="img-sdm"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h2 className="sub-heading">Speed is {speed}mph</h2>
          <p className="para-details">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-details">
            <button
              className="btn acc-btn"
              type="button"
              onClick={this.onClickAccelerateButton}
            >
              Accelerate
            </button>
            <button
              className="btn br-btn"
              type="button"
              onClick={this.onClickBreakButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
