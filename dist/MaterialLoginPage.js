'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Card = require('material-ui/Card');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  errorStyle: {
    color: _colors.blue500
  }
};

var MaterialAppExampleProgress = function (_React$Component) {
  _inherits(MaterialAppExampleProgress, _React$Component);

  function MaterialAppExampleProgress(props) {
    _classCallCheck(this, MaterialAppExampleProgress);

    var _this = _possibleConstructorReturn(this, (MaterialAppExampleProgress.__proto__ || Object.getPrototypeOf(MaterialAppExampleProgress)).call(this, props));

    _this.state = {
      expanded: false
    };
    return _this;
  }

  _createClass(MaterialAppExampleProgress, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: {
            margin: '20px 100px',
            minWidth: 400,
            maxWidth: 450
          }
        },
        _react2.default.createElement(
          _Card.Card,
          { style: { width: '100%' } },
          _react2.default.createElement(_Card.CardHeader, {
            title: 'Login Page'
          }),
          _react2.default.createElement(
            _Card.CardText,
            null,
            _react2.default.createElement(_TextField2.default, {
              hintText: 'Email Address',
              errorText: 'This field is required',
              hintStyle: styles.errorStyle
            }),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(_TextField2.default, {
              hintText: 'Password',
              type: 'password',
              errorText: 'This field is required',
              hintStyle: styles.errorStyle
            }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'div',
              { style: { justifyContent: 'center', display: 'flex' } },
              _react2.default.createElement(_RaisedButton2.default, { label: 'Login', primary: true }),
              _react2.default.createElement(_RaisedButton2.default, { label: 'Sign Up', secondary: true })
            )
          )
        )
      );
    }
  }]);

  return MaterialAppExampleProgress;
}(_react2.default.Component);

exports.default = MaterialAppExampleProgress;


MaterialAppExampleProgress.contextTypes = {
  muiTheme: _react2.default.PropTypes.object.isRequired
};
