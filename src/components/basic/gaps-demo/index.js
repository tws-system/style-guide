import React, {Component} from 'react'

class Gaps extends Component {
  render () {
    return (
      <div>
        <h1>间距</h1>
        <hr />
        <h2 className='margin-t-2 margin-b-2'>间距</h2>
        <p>
          @gap为8px，则@gap-2为16px, @gap-3为24px,以此类推,直到@gap-10为80px
        </p>
      </div>
    )
  }
}

export default Gaps
