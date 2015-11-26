import React    from 'react'
import ReactDOM from 'react-dom'

class DialButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active : false
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
  }
  handleMouseDown(e) {
    this.setState({active: true})
  }
  handleMouseUp(e) {
    if (this.state.active) {
      this.setState({active: false})
    }
  }
  componentDidMount() {
    const element = ReactDOM.findDOMNode(this.refs.button)
    element.addEventListener('mousedown', this.handleMouseDown)
    window.addEventListener('mouseup', this.handleMouseUp)
  }
  componentWillUnmount() {
    const element = ReactDOM.findDOMNode(this.refs.button)
    element.removeEventListener('mousedown', this.handleMouseDown)
    window.removeEventListener('mouseup', this.handleMouseUp)
  }
  render() {
    const { symbol, alias, icon, compact } = this.props
    const { active } = this.state
    return (
      <p ref='button' style={{
        'borderWidth'       : '1px',
        'borderStyle'       : 'solid',
        'borderColor'       : '#4d4d4d #000 #000 #4d4d4d',
        'color'             : '#fff',
        'fontSize'          : '30px',
        'padding'           : '25px 15px',
        'margin'            : 0,
        'backgroundColor'   : active ? '#00caf2' : 'transparent' 
      }}>
        <strong style={{
          'marginRight'     : '8px'
        }}>
          {icon}
          {(!icon || !compact) && (
            <span>&nbsp;{symbol}</span>
          )}
        </strong>
        {!!alias && !compact && (
          <sup style={{
            'textTransform' : 'uppercase',
            'color'         : '#c1c1c1',
            'fontSize'      : '60%'
          }}>{alias}</sup>
        )}
      </p>
    )
  }
}

export class DialPad extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { onClick, compact } = this.props
    const buttons = [
      {
        symbol : '1'
      },
      {
        symbol : '2',
        alias  : 'abc'
      },
      {
        symbol : '3',
        alias  : 'def'
      },
      {
        symbol : '4',
        alias  : 'ghi'
      },
      {
        symbol : '5',
        alias  : 'jkl'
      },
      {
        symbol : '6',
        alias  : 'mno'
      },
      {
        symbol : '7',
        alias  : 'pqrs'
      },
      {
        symbol : '8',
        alias  : 'tuv'
      },
      {
        symbol : '9',
        alias  : 'wxyz'
      },
      {
        symbol : '*'
      },
      {
        symbol : '0'
      },
      {
        symbol : '#'
      },
      {
        icon   : (<i className='fa fa-phone' />),
        symbol : 'Call',
        action : 'call'
      },
      {
        symbol : '+'
      },
      {
        icon   : (<i className='fa fa-remove' />),
        symbol : 'Hang Up',
        action : 'hangup'
      }
    ]
    return (
      <div>
        <div style={{
          'float'                : 'left', 
          'display'              : 'block', 
          'width'                : '100%',
          'WebkitTouchCallout'   : 'none',
          'WebkitUserSelect'     : 'none',
          'KhtmlUserSelect'      : 'none',
          'MozUserSelect'        : 'none',
          'MsUserSelect'         : 'none',
          'userSelect'           : 'none',
          'background'           : '#1d1918',
          'fontFamily'           : '"Lucida Grande", Tahoma, Arial, Verdana, sans-serif'
        }}>
          <ol style={{
            'margin'             : 0,
            'padding'            : 0,
            'listStyle'          : 'none'
          }}>
            {buttons.map((button, i) => (
              <li onClick={() => onClick(button)} style={{
                'float'          : 'left', 
                'cursor'         : 'pointer',
                'width'          : 'calc(100%/3)'
              }} key={i}>
                <DialButton {...button} compact={compact} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

DialPad.defaultProps = {
  onClick : () => {}
}

export default class Dial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value   : '',
      capture : true,
      compact : window.innerWidth < 400 
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }
  handleResize(e) {
    const { compact } = this.state
    if (window.innerWidth < 400) {
      if (!compact) {
        this.setState({compact: true})
      }
    } else {
      if (compact) {
        this.setState({compact: false})
      }
    }
  }
  handleClick(button) {
    const { value } = this.state
    if ('string' === typeof button.symbol) {
      this.setState({
        value : value + button.symbol
      })
    } else if ('call' === button.action) {
      console.log(`Call number ${value}`)
    } else if ('hangup' === button.action) {
      console.log('Hangup call')
    }
  }
  handleKeyPress(e) {
    const { capture, value } = this.state
    if (!capture) {
      return
    }
    switch (e.charCode) {
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
      case 42:
      case 43:
        this.setState({
          value : value + String.fromCharCode(e.charCode)
        })
      default:
        break
    }
  }
  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress)
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress)
    window.removeEventListener('resize', this.handleResize)
  }
  beginCapture(e) {
    this.setState({
      capture : true
    })
  }
  endCapture(e) {
    this.setState({
      capture : false
    })
  }
  reset() {
    this.setState({
      value : ''
    })
  }
  handleChange(e) {
    const { capture } = this.state
    if (!capture) {
      this.setState({
        value : e.target.value
      })
    }
  }
  render() {
    const { value, compact } = this.state
    return (
      <div>
        {!!value && (
          <a 
            href    = '#' 
            onClick = {this.reset.bind(this)} 
            style   = {{
              'padding'        : '5px 14px',
              'fontWeight'     : 'bold',
              'float'          : 'right',
              'position'       : 'absolute',
              'textAlign'      : 'right',
              'marginTop'      : '11px',
              'fontSize'       : '30px',
              'right'          : '8px',
              'textDecoration' : 'none',
              'color'          : '#4d4d4d'
            }}>&times;</a>
        )}
        <input 
          style    = {{
          'border'      : 'none',
          'float'       : 'left', 
          'display'     : 'block', 
          'width'       : '100%',
          'fontSize'    : compact ? '24px' : '40px',
          'minHeight'   : '47px',
          'margin'      : '10px 0',
          'color'       : '#4d4d4d'
        }} 
          onChange = {this.handleChange.bind(this)}
          onFocus  = {this.endCapture.bind(this)}
          onBlur   = {this.beginCapture.bind(this)}
          type     = 'text'
          value    = {value} />
        <DialPad onClick={this.handleClick.bind(this)} compact={compact} />
      </div>
    )
  }
}

ReactDOM.render(
  <Dial />,
  document.getElementById('main')
)
