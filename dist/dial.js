'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var DialButton = (function (_React$Component) {
  _inherits(DialButton, _React$Component);

  function DialButton(props) {
    _classCallCheck(this, DialButton);

    _get(Object.getPrototypeOf(DialButton.prototype), 'constructor', this).call(this, props);
    this.state = {
      active: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  _createClass(DialButton, [{
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      this.setState({ active: true });
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(e) {
      if (this.state.active) {
        this.setState({ active: false });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var element = _reactDom2['default'].findDOMNode(this.refs.button);
      element.addEventListener('mousedown', this.handleMouseDown);
      window.addEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var element = _reactDom2['default'].findDOMNode(this.refs.button);
      element.removeEventListener('mousedown', this.handleMouseDown);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var symbol = _props.symbol;
      var alias = _props.alias;
      var active = this.state.active;

      return _react2['default'].createElement(
        'p',
        { ref: 'button', style: {
            'borderWidth': '1px',
            'borderStyle': 'solid',
            'borderColor': '#4d4d4d #000 #000 #4d4d4d',
            'color': '#fff',
            'fontSize': '30px',
            'padding': '25px 15px',
            'margin': 0,
            'backgroundColor': active ? '#00caf2' : 'transparent'
          } },
        _react2['default'].createElement(
          'strong',
          { style: {
              'marginRight': '8px'
            } },
          symbol
        ),
        !!alias && _react2['default'].createElement(
          'sup',
          { style: {
              'textTransform': 'uppercase',
              'color': '#c1c1c1',
              'fontSize': '60%'
            } },
          alias
        )
      );
    }
  }]);

  return DialButton;
})(_react2['default'].Component);

var DialPad = (function (_React$Component2) {
  _inherits(DialPad, _React$Component2);

  function DialPad(props) {
    _classCallCheck(this, DialPad);

    _get(Object.getPrototypeOf(DialPad.prototype), 'constructor', this).call(this, props);
  }

  _createClass(DialPad, [{
    key: 'render',
    value: function render() {
      var onClick = this.props.onClick;

      var buttons = [{
        symbol: '1'
      }, {
        symbol: '2',
        alias: 'abc'
      }, {
        symbol: '3',
        alias: 'def'
      }, {
        symbol: '4',
        alias: 'ghi'
      }, {
        symbol: '5',
        alias: 'jkl'
      }, {
        symbol: '6',
        alias: 'mno'
      }, {
        symbol: '7',
        alias: 'pqrs'
      }, {
        symbol: '8',
        alias: 'tuv'
      }, {
        symbol: '9',
        alias: 'wxyz'
      }, {
        symbol: '*'
      }, {
        symbol: '0'
      }, {
        symbol: '#'
      }, {
        symbol: _react2['default'].createElement(
          'span',
          null,
          _react2['default'].createElement('i', { className: 'fa fa-phone' }),
          ' Call'
        ),
        action: 'call'
      }, {
        symbol: '+'
      }, {
        symbol: _react2['default'].createElement(
          'span',
          null,
          _react2['default'].createElement('i', { className: 'fa fa-remove' }),
          ' Hang Up'
        ),
        action: 'hangup'
      }];
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { style: {
              'float': 'left',
              'display': 'block',
              'width': '100%',
              'WebkitTouchCallout': 'none',
              'WebkitUserSelect': 'none',
              'KhtmlUserSelect': 'none',
              'MozUserSelect': 'none',
              'MsUserSelect': 'none',
              'userSelect': 'none',
              'background': '#1d1918',
              'fontFamily': '"Lucida Grande", Tahoma, Arial, Verdana, sans-serif'
            } },
          _react2['default'].createElement(
            'ol',
            { style: {
                'margin': 0,
                'padding': 0,
                'listStyle': 'none'
              } },
            buttons.map(function (button, i) {
              return _react2['default'].createElement(
                'li',
                { onClick: function () {
                    return onClick(button);
                  }, style: {
                    'float': 'left',
                    'cursor': 'pointer',
                    'width': 'calc(100%/3)'
                  }, key: i },
                _react2['default'].createElement(DialButton, button)
              );
            })
          )
        )
      );
    }
  }]);

  return DialPad;
})(_react2['default'].Component);

exports.DialPad = DialPad;

DialPad.defaultProps = {
  onClick: function onClick() {}
};

var Dial = (function (_React$Component3) {
  _inherits(Dial, _React$Component3);

  function Dial(props) {
    _classCallCheck(this, Dial);

    _get(Object.getPrototypeOf(Dial.prototype), 'constructor', this).call(this, props);
    this.state = {
      value: '',
      capture: true
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  _createClass(Dial, [{
    key: 'handleClick',
    value: function handleClick(button) {
      var value = this.state.value;

      if ('string' === typeof button.symbol) {
        this.setState({
          value: value + button.symbol
        });
      } else if ('call' === button.action) {
        console.log('Call number ' + value);
      } else if ('hangup' === button.action) {
        console.log('Hangup call');
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      var _state = this.state;
      var capture = _state.capture;
      var value = _state.value;

      if (!capture) {
        return;
      }
      switch (e.keyCode) {
        case 35:
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
            value: value + String.fromCharCode(e.charCode)
          });
        default:
          break;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('keypress', this.handleKeyPress);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keypress', this.handleKeyPress);
    }
  }, {
    key: 'beginCapture',
    value: function beginCapture(e) {
      this.setState({
        capture: true
      });
    }
  }, {
    key: 'endCapture',
    value: function endCapture(e) {
      this.setState({
        capture: false
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.setState({
        value: ''
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var capture = this.state.capture;

      if (!capture) {
        this.setState({
          value: e.target.value
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.state.value;

      return _react2['default'].createElement(
        'div',
        null,
        !!value && _react2['default'].createElement(
          'a',
          {
            href: '#',
            onClick: this.reset.bind(this),
            style: {
              'padding': '5px 14px',
              'fontWeight': 'bold',
              'float': 'right',
              'position': 'absolute',
              'textAlign': 'right',
              'marginTop': '11px',
              'fontSize': '30px',
              'right': '8px',
              'textDecoration': 'none',
              'color': '#4d4d4d'
            } },
          '×'
        ),
        _react2['default'].createElement('input', {
          style: {
            'border': 'none',
            'float': 'left',
            'display': 'block',
            'width': '100%',
            'fontSize': '40px',
            'margin': '10px 0',
            'color': '#4d4d4d'
          },
          onChange: this.handleChange.bind(this),
          onFocus: this.endCapture.bind(this),
          onBlur: this.beginCapture.bind(this),
          type: 'text',
          value: value }),
        _react2['default'].createElement(DialPad, { onClick: this.handleClick.bind(this) })
      );
    }
  }]);

  return Dial;
})(_react2['default'].Component);

exports['default'] = Dial;

_reactDom2['default'].render(_react2['default'].createElement(Dial, null), document.getElementById('main'));

//# sourceMappingURL=dial.js.map