import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.round(Math.random() * 100),
    }))
  }

  render() {
    let types
    const {count} = this.state

    if (count % 2 === 0) {
      types = 'Even'
    } else {
      types = 'Odd'
    }

    return (
      <div className="page-container">
        <div className="card-container">
          <h1>Count {count}</h1>
          <p>Count is {types}</p>
          <button className="btn" type="button" onClick={this.onClickIncrement}>
            Increment
          </button>
          <p className="description">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
