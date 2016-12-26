'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _ConversationMessage = require('./ConversationMessage.jsx');

var _ConversationMessage2 = _interopRequireDefault(_ConversationMessage);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _jsa = require('./images/jsa-128.jpg');

var _jsa2 = _interopRequireDefault(_jsa);

var _chexee = require('./images/chexee-128.jpg');

var _chexee2 = _interopRequireDefault(_chexee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var paperStyle = {
    width: 600,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
};

var textFieldStyle = {
    paddingLeft: 16,
    paddingRight: 16
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
                        maxWidth: 800,
                        display: 'flex',
                        justifyContent: 'center'
                    }
                },
                _react2.default.createElement(
                    _Paper2.default,
                    { style: paperStyle, zDepth: 1 },
                    _react2.default.createElement(
                        _Card.Card,
                        null,
                        _react2.default.createElement(_Card.CardHeader, {
                            title: 'James Anderson',
                            subtitle: 'Online',
                            avatar: _jsa2.default
                        }),
                        _react2.default.createElement(_ConversationMessage2.default, { text: 'Hi', authorType: 'receiver', authorImage: _jsa2.default,
                            messageTime: '08:40' }),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(_ConversationMessage2.default, { text: 'How are you', authorType: 'receiver', authorImage: _jsa2.default,
                            messageTime: '08:41' }),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(_ConversationMessage2.default, { text: 'I am doing good', authorType: 'sender', authorImage: _chexee2.default, messageTime: '08:42' }),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(_ConversationMessage2.default, { text: 'How about you ?', authorType: 'sender', authorImage: _chexee2.default, messageTime: '08:43' }),
                        _react2.default.createElement('br', null)
                    ),
                    _react2.default.createElement(_TextField2.default, { hintText: 'Type a Message', fullWidth: true, inputStyle: textFieldStyle,
                        hintStyle: textFieldStyle })
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
