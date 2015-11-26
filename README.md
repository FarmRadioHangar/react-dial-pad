<img src="https://avatars2.githubusercontent.com/u/6412038?v=3&s=200" alt="react logo" title="react" align="right" width="64" height="64" />

# FRH React Dial Pad

![travis-ci](https://travis-ci.org/FarmRadioHangar/react-dial-pad.svg?branch=master)
[![npm version](https://badge.fury.io/js/frh-react-dial-pad.svg)](https://badge.fury.io/js/frh-react-dial-pad)
[![Dependency Status](https://david-dm.org/FarmRadioHangar/react-dial-pad.svg)](https://david-dm.org/FarmRadioHangar/react-dial-pad#info=dependencies)
[![devDependency Status](https://david-dm.org/FarmRadioHangar/react-dial-pad/dev-status.svg)](https://david-dm.org/FarmRadioHangar/react-dial-pad#info=devDependencies)

Simple React phone dial pad component inspired by the [jQuery dialpad plugin demo](http://www.jqueryscript.net/demo/Creating-A-Responsive-Phone-Dial-Pad-with-jQuery-CSS3-dialpad/).

![screenshot](screenshot.gif)

## Demo

Try the demo [here](http://farmradiohangar.github.io/react-dial-pad/public/).

## Installation
## Usage

### Basic usage

```javascript
import React    from 'react'
import ReactDOM from 'react-dom'
import Dial     from 'frh-react-dial-pad'

ReactDOM.render(
  <Dial />,
  document.getElementById('main')
)
```

### Only the number pad

```javascript
import React    from 'react'
import ReactDOM from 'react-dom'

import { DialPad } 
  from 'frh-react-dial-pad'

ReactDOM.render(
  <DialPad />,
  document.getElementById('main')
)
```

## Contribute

* GitHub: https://github.com/FarmRadioHangar/react-dial-pad
* Issue tracker: https://github.com/FarmRadioHangar/react-dial-pad/issues

## License

BSD
