import React, {Component} from 'react'

const defaultStyle = {
  display: 'inline-block',
  height: '36px',
  lineHeight: '36px',
  textAlign: 'center',
  borderRadius: '4px',
  border: '1px solid #000',
  padding: '0 16px'
}

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

        <h2 className='margin-t-2 margin-b-2'>左间距</h2>
        <h4>说明</h4>
        <ul>
          <li>基于@gap运算,.margin-l-1就是margin-left: 8px</li>
          <li>横向间距,要优先考虑栅格系统</li>
          <li>对于栅格不方便解决的,再考虑使用横向间距</li>
        </ul>

        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
            return (
              <div key={item}>
                <div style={defaultStyle}>参照</div>
                <div style={defaultStyle} className={`margin-t-2 margin-l-${item}`}>左间距 className: margin-l-{item}</div>
              </div>
            )
          })
        }

        <h2 className='margin-t-2 margin-b-2'>上间距</h2>
        <div style={defaultStyle}>参照</div>
        {
          [0, 1, 2, 3, 4].map((item) => {
            return (
              <div key={item}>
                <div style={defaultStyle} className={`margin-t-${item}`}>上间距 className: margin-t-{item}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Gaps
