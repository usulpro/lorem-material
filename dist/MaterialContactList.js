'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _List = require('material-ui/List');

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _ok = require('./images/ok-128.jpg');

var _ok2 = _interopRequireDefault(_ok);

var _kolage = require('./images/kolage-128.jpg');

var _kolage2 = _interopRequireDefault(_kolage);

var _uxceo = require('./images/uxceo-128.jpg');

var _uxceo2 = _interopRequireDefault(_uxceo);

var _kerem = require('./images/kerem-128.jpg');

var _kerem2 = _interopRequireDefault(_kerem);

var _raquelromanp = require('./images/raquelromanp-128.jpg');

var _raquelromanp2 = _interopRequireDefault(_raquelromanp);

var _chexee = require('./images/chexee-128.jpg');

var _chexee2 = _interopRequireDefault(_chexee);

var _jsa = require('./images/jsa-128.jpg');

var _jsa2 = _interopRequireDefault(_jsa);

var _colors = require('material-ui/styles/colors');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

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
            _List.List,
            null,
            _react2.default.createElement(
              _Subheader2.default,
              null,
              'Contacts List'
            ),
            _react2.default.createElement(_Divider2.default, null),
            _react2.default.createElement(_List.ListItem, {
              primaryText: 'James Anderson',
              rightAvatar: _react2.default.createElement(_Avatar2.default, { src: _jsa2.default }),
              secondaryText: '(503) 123 - 9876',
              leftAvatar: _react2.default.createElement(
                _Avatar2.default,
                {
                  color: _colors.pinkA200, backgroundColor: _colors.transparent,
                  style: { left: 8 }
                },
                'A'
              )
            }),
            _react2.default.createElement(_List.ListItem, {
              primaryText: 'Chelsea Atakan',
              rightAvatar: _react2.default.createElement(_Avatar2.default, { src: _chexee2.default }),
              secondaryText: '(650) 213 - 4123',
              leftAvatar: _react2.default.createElement(_Avatar2.default, {
                color: _colors.pinkA200, backgroundColor: _colors.transparent,
                style: { left: 8 }
              })
            }),
            _react2.default.createElement(_Divider2.default, null),
            _react2.default.createElement(_List.ListItem, {
              primaryText: 'Eric Hoffman',
              rightAvatar: _react2.default.createElement(_Avatar2.default, { src: _kolage2.default }),
              secondaryText: '(909) 412 - 1252',
              leftAvatar: _react2.default.createElement(
                _Avatar2.default,
                {
                  color: _colors.pinkA200, backgroundColor: _colors.transparent,
                  style: { left: 8 }
                },
                'H'
              )
            }),
            _react2.default.createElement(_Divider2.default, null),
            _react2.default.createElement(_List.ListItem, {
              primaryText: 'Brendan Lim',
              rightAvatar: _react2.default.createElement(_Avatar2.default, { src: _ok2.default }),
              secondaryText: '(650) 555 - 1234',
              leftAvatar: _react2.default.createElement(
                _Avatar2.default,
                {
                  color: _colors.pinkA200, backgroundColor: _colors.transparent,
                  style: { left: 8 }
                },
                'L'
              )
            }),
            _react2.default.createElement(_Divider2.default, null),
            _react2.default.createElement(_List.ListItem, {
              primaryText: 'Grace Ng',
              rightAvatar: _react2.default.createElement(_Avatar2.default, { src: _uxceo2.default }),
              secondaryText: '(820) 612 - 8273',
              leftAvatar: _react2.default.createElement(
                _Avatar2.default,
                {
                  color: _colors.pinkA200, backgroundColor: _colors.transparent,
                  style: { left: 8 }
                },
                'N'
              )
            }),
            _react2.default.createElement(_Divider2.default, null),
            _react2.default.createElement(_List.ListItem, {
              primaryText: 'Chelsea Otakan',
              rightAvatar: _react2.default.createElement(_Avatar2.default, { src: _chexee2.default }),
              secondaryText: '(650) 213 - 4123',
              leftAvatar: _react2.default.createElement(
                _Avatar2.default,
                {
                  color: _colors.pinkA200, backgroundColor: _colors.transparent,
                  style: { left: 8 }
                },
                'O'
              )
            }),
            _react2.default.createElement(_Divider2.default, null),
            _react2.default.createElement(_List.ListItem, {
              primaryText: 'Raquel Parrado',
              rightAvatar: _react2.default.createElement(_Avatar2.default, { src: _raquelromanp2.default }),
              secondaryText: '(920) 223 - 1569',
              leftAvatar: _react2.default.createElement(
                _Avatar2.default,
                {
                  color: _colors.pinkA200, backgroundColor: _colors.transparent,
                  style: { left: 8 }
                },
                'P'
              )
            }),
            _react2.default.createElement(_Divider2.default, null),
            _react2.default.createElement(_List.ListItem, {
              primaryText: 'Kerem Suer',
              rightAvatar: _react2.default.createElement(_Avatar2.default, { src: _kerem2.default }),
              secondaryText: '(529) 527 - 2834',
              leftAvatar: _react2.default.createElement(
                _Avatar2.default,
                {
                  color: _colors.pinkA200, backgroundColor: _colors.transparent,
                  style: { left: 8 }
                },
                'S'
              )
            })
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
