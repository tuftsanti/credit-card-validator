import React, {Component} from 'react';
import './App.css';

const h1text = {
  color: 'orange'
}

// function App() {
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input:'',
      // show: false,
      value: '',
      number: '',
      result: '',
    }
  }

  // const [num, setNumber] = React.useState("")
  setNumber (e) {
    // console.log(this.state.input)
    this.setState({ input: e.target.value });
    // console.log(this.state.input)
  }
  // let result = null

  // const handleSubmit = (e) => {
  handleSubmit (e)  {
    e.preventDefault()
    // console.log(`${num} was submitted.`)
    // console.log(this.state.input)
    this.checkNumber(this.state.input)
    e.target.reset()
    // this.setState({input: ''})
    // this.state.input = ''
    // console.log(this.state.result)
  }

  checkNumber (num, result, number) {
    // console.log(num)
    if ((num.length === 13 || num.length === 15 || num.length === 16) && num.length < 17) {
      // console.log(num.length)
      let magicNumber = 0
      for (let x = num.length - 2; x > -1; x -= 2) {
        // console.log(num[x])
        if (num[x] * 2 > 9) {
          magicNumber += ((num[x] * 2) % 10) + 1
          // console.log(magicNumber)
        } 
        else {
          magicNumber += num[x] * 2
          // console.log(magicNumber)
        }
        // console.log(magicNumber)
      }
      // console.log(typeof(magicNumber))
      // num = parseInt(num)
      for (let i = num.length - 1; i > -1; i -= 2) {
        // console.log(typeof(num))
        // console.log(num[i])
        magicNumber += parseInt(num[i])
      }
      console.log(`Magic Number is: ${magicNumber}`)
      const firstTwoNumbers = parseInt(num.slice(0,2))
      const firstThreeNumbers = parseInt(num.slice(0,3))
      const firstFourNumbers = parseInt(num.slice(0,4))
      // console.log(typeof(firstTwoNumbers, firstThreeNumbers, firstFourNumbers))
      // console.log(firstFourNumbers)
      if (magicNumber % 10 === 0 && num.length === 15 && (parseInt(num[1]) === 4 || parseInt(num[1]) === 7)) {
        // console.log(`${num} is an AMEX`)
        // this.result = 'AMEX'
        result = `American Express`
        number = this.state.input;
        this.setState({result, number})
      }
      else if (magicNumber % 10 === 0 && num.length === 16 && (parseInt(num[0]) === 5 || parseInt(num[0]) === 2) && (1 <= parseInt(num[1]) <= 5)) {
        // console.log(`${num} is a MASTERCARD`)
        // console.log(result)
        result = `Mastercard`
        number = this.state.input;
        this.setState({result, number})
        // console.log(result)
      }
      else if (magicNumber % 10 === 0 && parseInt(num[0]) === 4 && (num.length === 13 || num.length === 16)) {
        // console.log(`${num} is a VISA`)
        result = `VISA`
        number = this.state.input;
        this.setState({result, number})
      }
      else if (magicNumber % 10 === 0 && num.length === 16 && (firstFourNumbers === 6011 || (firstThreeNumbers >= 644 && firstThreeNumbers <= 649) || firstThreeNumbers === 622)){
        // console.log(`${num} is a DISCOVER`)
        result = `Discover`
        number = this.state.input;
        this.setState({result, number})
      }
      else if (magicNumber % 10 === 0 && num.length === 16 && firstTwoNumbers === 35) {
        // console.log(`${num} is a JCB`)
        result = `JCB`
        number = this.state.input;
        this.setState({result, number})
      }
      else if (magicNumber % 10 === 0 && ((num.length === 16 && (firstTwoNumbers === 38 || firstTwoNumbers === 39)) || (num.length === 14 && ((firstThreeNumbers >= 300 && firstThreeNumbers <= 305) || firstThreeNumbers === 309 || firstTwoNumbers === 36)))) {
        // console.log(`${num} is a Diner's Club`)
        result = `Diner's Club`
        number = this.state.input;
        this.setState({result, number})
      }
      else {
        // console.log(`${num} is an INVALID num`)
        result = `INVALID`
        number = this.state.input;
        this.setState({result, number})
      }
    }
    else {
      // console.log(`${num} is an INVALID num`)
      result = `INVALID`
        number = this.state.input;
        this.setState({result, number})
    }
  }

  // const handleChange = (e) => {
  //   this.setState({value: e.target.value})
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>
              Input Credit Card Number<br/>
              <input 
                placeholder="Enter number..."
                name="number"
                type="number"
                // value={this.num} 
                onChange={e => this.setNumber(e)}/>
            </label>
            <button>SUBMIT</button>
          </form>
          {this.state.number ? 
            <>
              <h1 style={h1text}>{this.state.number}</h1><br/>
              is a/an <br/>
              <h1 style={h1text}>{this.state.result}</h1><br/>
              credit card number
            </> : ''}
        </header>
      </div>
    );
  }
}

export default App;
