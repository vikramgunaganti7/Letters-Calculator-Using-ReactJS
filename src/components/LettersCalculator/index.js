import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    initailPharse: '',
  }

  onChangeInput = event => {
    const {value} = event.target
    this.setState({initailPharse: value})
  }

  render() {
    const {initailPharse} = this.state
    return (
      <div className="app-container">
        <div className="calculator-container">
          <div className="calculator-section">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <form className="form-container">
              <label className="label" htmlFor="pharseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                id="pharseText"
                onChange={this.onChangeInput}
                placeholder="Enter the phrase"
                type="text"
              />
              {initailPharse.length < 1 ? (
                <p className="letters-count">No.of letters: 0</p>
              ) : (
                <p className="letters-count">
                  No.of letters:{initailPharse.length}
                </p>
              )}
            </form>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="letters-calculator-image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
