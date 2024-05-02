import React, { Component } from 'react'
import spinner from './spinner.gif'

export class Loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={spinner} alt="Loading" />
      </div>
    )
  }
}

export default Loader