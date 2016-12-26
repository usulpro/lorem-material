'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _LinearProgress = require('material-ui/LinearProgress');

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactTwitterButton = require('./socials/react-twitter-button');

var _reactTwitterButton2 = _interopRequireDefault(_reactTwitterButton);

var _reactGithubButton = require('./socials/react-github-button');

var _reactGithubButton2 = _interopRequireDefault(_reactGithubButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaterialAppExampleProgress = function (_React$Component) {
  _inherits(MaterialAppExampleProgress, _React$Component);

  function MaterialAppExampleProgress() {
    _classCallCheck(this, MaterialAppExampleProgress);

    return _possibleConstructorReturn(this, (MaterialAppExampleProgress.__proto__ || Object.getPrototypeOf(MaterialAppExampleProgress)).apply(this, arguments));
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
            maxWidth: 800,
            display: 'flex',
            justifyContent: 'center'
          }
        },
        _react2.default.createElement(
          _Card.Card,
          { style: { width: '100%' } },
          _react2.default.createElement(
            _Card.CardMedia,
            { style: { marginTop: 16 } },
            _react2.default.createElement(_LinearProgress2.default, { mode: 'indeterminate' })
          ),
          _react2.default.createElement(
            _Card.CardMedia,
            null,
            _react2.default.createElement(
              'div',
              {
                style: {
                  textAlign: 'center',
                  //                    height: 100,
                  borderTop: '1px red solid',
                  borderBottom: '1px red solid',
                  borderColor: this.context.muiTheme.palette.borderColor,
                  padding: '16px 0px'
                }
              },
              _react2.default.createElement(
                'span',
                {
                  style: {
                    fontVariant: 'small-caps',
                    fontWeight: 'bold',
                    color: this.context.muiTheme.palette.textColor
                  }
                },
                'waiting for contributors'
              )
            )
          ),
          _react2.default.createElement(
            _Card.CardActions,
            {
              style: {
                display: 'flex',
                justifyContent: 'space-around',
                margin: '16px 0px'
              }
            },
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/sm-react/storybook-addon-material-ui/fork', target: 'blank' },
              _react2.default.createElement(_RaisedButton2.default, { label: 'I\'m in', primary: true })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/sm-react/storybook-addon-material-ui/subscription', target: 'blank' },
              _react2.default.createElement(_RaisedButton2.default, { label: 'for tomorrow', secondary: true })
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
