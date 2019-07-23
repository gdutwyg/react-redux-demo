// import React from 'react'
import React, { Component } from 'react'
import './index.css'
// let abc = ''
// const Test = ({ text, onClick }) => {
//   return (
//     <div>
//       {text}
//       <input onInput={(e) => { abc = e.target.value }} />
//       <button onClick={() => { onClick(abc) }}>change Text</button>
//     </div>
//   )
// }
class Test extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }
  handleInputVal (e) {
    this.setState({
      text: e.target.value
    })
  }
  render () {
    return (
      <div className="demo">
        <div>store的默认值：{this.props.text}</div>
        <input value={this.state.text} onChange={this.handleInputVal.bind(this)} placeholder="请输入文字" />
        <button onClick={() => { this.props.onClick(this.state.text) }} style={{ color: 'blue' }}>change store</button>
      </div>
    )
  }
}

export default Test