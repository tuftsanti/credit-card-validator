import React, {Component} from 'react';
import './App.css';

function App() {
// class App1 extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       result:null,
//       show: false,
//       num: '',
//       setNumber: '',
//     }
//   }
  const [num, setNumber] = React.useState("")
  // setNumber = () => {
  //   this.setState({ num: "" });
  // }
  let result = null

  const checkNumber = (num, result) => {
    console.log(num)
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
        console.log(magicNumber)
      }
      // console.log(typeof(magicNumber))
      // num = parseInt(num)
      for (let i = num.length - 1; i > -1; i -= 2) {
        // console.log(typeof(num))
        console.log(num[i])
        magicNumber += parseInt(num[i])
      }
      console.log(`Magic Number is: ${magicNumber}`)

      if (magicNumber % 10 === 0 && num.length === 15 && (num[1] == 4 || num[1] == 7)) {
        // console.log(`${num} is an AMEX`)
        result = 'AMEX'
      }
      else if (magicNumber % 10 === 0 && num.length === 16 && (num[0] == 5 || num[0] == 2) && (num[1] == 1 || num[1] == 2 || num[1] == 3 || num[1] == 4 || num[1] == 5)) {
        // console.log(`${num} is a MASTERCARD`)
        console.log(result)
        result = 'MASTERCARD'
        console.log(result)
      }
      else if (magicNumber % 10 === 0 && num[0] == 4 && (num.length === 13 || num.length === 16)) {
        // console.log(`${num} is a VISA`)
        result = 'VISA'
      }
      else {
        // console.log(`${num} is an INVALID num`)
        result = 'INVALID'
      }
    }
    else {
      console.log(`${num} is an INVALID num`)
    }
  }

  // const handleChange = (e) => {
  //   this.setState({value: e.target.value})
  // }

  // const handleSubmit = (e) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(`${num} was submitted.`)
    checkNumber(num)
    setNumber("")
  }

  // render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={handleSubmit }>
            <label>
              Input Credit Card Number<br/>
              <input 
                name="num"
                type="num"
                value={num} 
                onChange={e => setNumber(e.target.value)}/>
            </label>
            <button>SUBMIT</button>
          </form>
          <h1>{result ? result : `NAN`}</h1>
        </header>
      </div>
    );
  }
// }

export default App;
