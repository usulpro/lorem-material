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

var _Chip = require('material-ui/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var authorTypes = {
  'sender': 'sender',
  'receiver': 'receiver'
};

var chipStyle = {
  margin: 4,
  float: 'right'
};

var MaterialAppExampleProgress = function (_React$Component) {
  _inherits(MaterialAppExampleProgress, _React$Component);

  function MaterialAppExampleProgress(props) {
    _classCallCheck(this, MaterialAppExampleProgress);

    var _this = _possibleConstructorReturn(this, (MaterialAppExampleProgress.__proto__ || Object.getPrototypeOf(MaterialAppExampleProgress)).call(this, props));

    _this.state = {
      text: '',
      authorType: '',
      authorImage: '',
      messageTime: ''
    };

    return _this;
  }

  _createClass(MaterialAppExampleProgress, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.state.text = newProps.text;
      this.state.authorType = newProps.authorType;
      this.state.authorImage = newProps.authorImage;
      this.state.messageTime = newProps.messageTime;
    }
  }, {
    key: 'render',
    value: function render() {
      var messageComponent, authorTypeStyle, messageStyle;
      if (this.state.authorType === authorTypes.sender) {
        authorTypeStyle = {
          float: 'right'
        };
        messageStyle = {
          float: 'right',
          margin: 10
        };
        return _react2.default.createElement(
          _Card.CardText,
          null,
          _react2.default.createElement(
            'span',
            { style: messageStyle },
            this.state.messageTime
          ),
          _react2.default.createElement(
            _Chip2.default,
            { style: authorTypeStyle },
            _react2.default.createElement(_Avatar2.default, { src: this.state.authorImage }),
            _react2.default.createElement(
              'div',
              null,
              this.state.text
            )
          )
        );
      } else {
        authorTypeStyle = {
          float: 'left'
        };
        messageStyle = {
          float: 'left',
          margin: 10
        };
        return _react2.default.createElement(
          _Card.CardText,
          null,
          _react2.default.createElement(
            _Chip2.default,
            { style: authorTypeStyle },
            _react2.default.createElement(_Avatar2.default, { src: this.state.authorImage }),
            _react2.default.createElement(
              'div',
              null,
              this.state.text
            )
          ),
          _react2.default.createElement(
            'span',
            { style: messageStyle },
            this.state.messageTime
          )
        );
      }
    }
  }]);

  return MaterialAppExampleProgress;
}(_react2.default.Component);

exports.default = MaterialAppExampleProgress;


MaterialAppExampleProgress.contextTypes = {
  muiTheme: _react2.default.PropTypes.object.isRequired
};
