'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var paperStyle = {
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};
var signInButton = {
  width: 256,
  margin: 15
};
var toggle = {
  textAlign: 'left',
  width: 256,
  margin: 15
};

var MyTest = function (_React$Component) {
  _inherits(MyTest, _React$Component);

  function MyTest() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyTest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyTest.__proto__ || Object.getPrototypeOf(MyTest)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      logged: true
    }, _this.handleChange = function (event, logged) {
      _this.setState({ logged: logged });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyTest, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: {
            margin: '20px 100px',
            minWidth: 400,
            maxWidth: 800,
            display: 'flex',
            justifyContent: 'center'
          } },
        _react2.default.createElement(
          _Paper2.default,
          { style: paperStyle, zDepth: 1 },
          _react2.default.createElement(_AppBar2.default, {
            title: 'Welcome',
            showMenuIconButton: false
          }),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, {
              floatingLabelText: 'Email',
              type: 'text'
            }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(_TextField2.default, {
              floatingLabelText: 'Password',
              type: 'password'
            }),
            _react2.default.createElement(_Toggle2.default, {
              label: 'Remember me',
              defaultToggled: true,
              onToggle: this.handleChange,
              labelPosition: 'right',
              style: toggle
            }),
            _react2.default.createElement(_RaisedButton2.default, { label: 'Sign in', style: signInButton, primary: true }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'a',
                { style: {
                    color: this.context.muiTheme.palette.secondaryTextColor
                  },
                  href: '#' },
                'Forgot password?'
              )
            )
          )
        )
      );
    }
  }]);

  return MyTest;
}(_react2.default.Component);

exports.default = MyTest;

MyTest.contextTypes = {
  muiTheme: _react2.default.PropTypes.object.isRequired
};
