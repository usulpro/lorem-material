'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _RadioButton = require('material-ui/RadioButton');

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  radioButton: {
    width: '40%'
  },
  datePicker: {
    width: '90%'
  },
  label: {
    /** note: need to use context.palette.secondaryTextColor
     *    color: 'black'
    */
  },
  textField: {
    width: '160%'
  },
  selectField: {
    width: '30%',
    marginRight: '20px'
  }
};

var adultNum = [];
for (var i = 1; i < 7; i++) {
  adultNum.push(_react2.default.createElement(_MenuItem2.default, { value: i, key: i, primaryText: i }));
}

var childNum = [];
for (var _i = 0; _i < 7; _i++) {
  childNum.push(_react2.default.createElement(_MenuItem2.default, { value: _i, key: _i, primaryText: _i }));
}

var MaterialAirlineBooking = function (_React$Component) {
  _inherits(MaterialAirlineBooking, _React$Component);

  function MaterialAirlineBooking(props) {
    _classCallCheck(this, MaterialAirlineBooking);

    var _this = _possibleConstructorReturn(this, (MaterialAirlineBooking.__proto__ || Object.getPrototypeOf(MaterialAirlineBooking)).call(this, props));

    _this.state = {
      flightType: 'return',
      adultNum: 1,
      childNum: 0,
      infantNum: 0,
      dataSource: ['Ahmedabad', 'Ankara', 'Atlanta', 'Bangalore', 'Bangkok', 'Barcelona', 'Beijing', 'Belo Horizonte', 'Berlin', 'Bogotá', 'Boston', 'Buenos Aires', 'Changzhou', 'Chengdu', 'Chennai', 'Chicago', 'Chongqing', 'Colombo', 'Dallas–FortWorth', 'Delhi', 'Detroit', 'Dhaka', 'Guadalajara', 'Guangzhou', 'Hamburg', 'Hangzhou', 'Harbin', 'Hong Kong', 'Houston', 'Hyderabad', 'Inland Empire', 'Istanbul', 'Jakarta', 'Jinan', 'Karachi', 'Kolkata', 'Lagos', 'Lima', 'London', 'Los Angeles', 'Luanda', 'Madrid', 'Manila', 'Melbourne', 'Mexico City', 'Miami', 'Milan', 'Monterrey', 'Mumbai', 'Munich', 'Nagoya', 'Nanchang', 'Nanjing', 'New York City', 'Nice', 'Osaka', 'Paris', 'Philadelphia', 'Phoenix', 'Pune', 'Qingdao', 'Rhine-Ruhr', 'Rio de Janeiro', 'Rome', 'San Francisco', 'Santiago', 'Seoul', 'Shanghai', 'Shantou', 'Shenyang', 'Shenzhen', 'Singapore', 'Stuttgart', 'Surat', 'Sydney', 'São Paulo', 'Taipei', 'Tehran', 'Tianjin', 'Tokyo', 'Toronto', 'Vancouver', 'Washington D.C.', 'Wenzhou', 'Wuhan', "Xi'an", 'Zhengzhou']
    };
    return _this;
  }

  _createClass(MaterialAirlineBooking, [{
    key: 'handleChildChange',
    value: function handleChildChange(event, index, value) {
      this.setState({ childNum: value });
    }
  }, {
    key: 'handleAdultChange',
    value: function handleAdultChange(event, index, value) {
      this.setState({ adultNum: value });
    }
  }, {
    key: 'handleInfantChange',
    value: function handleInfantChange(event, index, value) {
      this.setState({ infantNum: value });
    }
  }, {
    key: 'handleFlightType',
    value: function handleFlightType(event, value) {
      this.setState({ flightType: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var returnDate = void 0;
      if (this.state.flightType === 'return') {
        returnDate = _react2.default.createElement(_DatePicker2.default, { hintText: 'Return', autoOk: true, container: 'inline', mode: 'landscape',
          floatingLabelText: 'Return date:',
          floatingLabelFixed: true,
          floatingLabelStyle: styles.label,
          textFieldStyle: styles.datePicker
        });
      } else {
        returnDate = '';
      }

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
            title: 'Airline booking component',
            subtitle: '#first but not least'
          }),
          _react2.default.createElement(
            _Card.CardText,
            null,
            _react2.default.createElement(
              _RadioButton.RadioButtonGroup,
              { name: 'flightType', style: { display: 'flex', justifyContent: 'space-between' }, defaultSelected: 'return', onChange: this.handleFlightType.bind(this) },
              _react2.default.createElement(_RadioButton.RadioButton, {
                value: 'return',
                label: 'Return',
                style: styles.radioButton
              }),
              _react2.default.createElement(_RadioButton.RadioButton, {
                value: 'oneWay',
                label: 'One way',
                style: styles.radioButton
              })
            ),
            _react2.default.createElement(_AutoComplete2.default, {
              hintText: 'E.g London',
              floatingLabelText: 'From',
              floatingLabelFixed: true,
              floatingLabelStyle: styles.label,
              textFieldStyle: styles.textField,
              dataSource: this.state.dataSource,
              filter: _AutoComplete2.default.caseInsensitiveFilter,
              maxSearchResults: 6
            }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(_AutoComplete2.default, {
              hintText: 'E.g Sydney',
              dataSource: this.state.dataSource,
              filter: _AutoComplete2.default.caseInsensitiveFilter,
              floatingLabelText: 'To',
              floatingLabelFixed: true,
              floatingLabelStyle: styles.label,
              textFieldStyle: styles.textField,
              maxSearchResults: 6
            }),
            _react2.default.createElement(
              'div',
              { style: { display: 'flex', justifyContent: 'space-between' } },
              _react2.default.createElement(_DatePicker2.default, { hintText: 'Departure', autoOk: true, container: 'inline', mode: 'landscape',
                floatingLabelText: 'Departure date:',
                floatingLabelFixed: true,
                floatingLabelStyle: styles.label,
                textFieldStyle: styles.datePicker
              }),
              returnDate
            ),
            _react2.default.createElement(
              'div',
              { style: { display: 'flex', justifyContent: 'space-between' } },
              _react2.default.createElement(
                _SelectField2.default,
                {
                  value: this.state.adultNum,
                  onChange: this.handleAdultChange.bind(this),
                  style: styles.selectField,
                  floatingLabelText: 'Adult',
                  floatingLabelFixed: true,
                  floatingLabelStyle: styles.label
                },
                adultNum
              ),
              _react2.default.createElement(
                _SelectField2.default,
                {
                  value: this.state.childNum,
                  onChange: this.handleChildChange.bind(this),
                  style: styles.selectField,
                  floatingLabelText: 'Child',
                  floatingLabelFixed: true,
                  floatingLabelStyle: styles.label
                },
                childNum
              ),
              _react2.default.createElement(
                _SelectField2.default,
                {
                  value: this.state.infantNum,
                  onChange: this.handleInfantChange.bind(this),
                  style: styles.selectField,
                  floatingLabelText: 'Infant',
                  floatingLabelFixed: true,
                  floatingLabelStyle: styles.label
                },
                _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: '0' }),
                _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: '1' })
              )
            ),
            _react2.default.createElement(
              'div',
              { style: { justifyContent: 'center', display: 'flex' } },
              _react2.default.createElement(_RaisedButton2.default, { label: 'Search..', primary: true, style: { margin: '20px' } })
            )
          )
        )
      );
    }
  }]);

  return MaterialAirlineBooking;
}(_react2.default.Component);

exports.default = MaterialAirlineBooking;


MaterialAirlineBooking.contextTypes = {
  muiTheme: _react2.default.PropTypes.object.isRequired
};
