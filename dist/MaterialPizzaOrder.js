'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extraToppings = ['Mushrooms', 'Pepperoni', 'Beef', 'Chicken', 'Jalapenos', 'Pineapple', 'Feta Cheese', 'Spinach', 'Red Pepper', 'Olive', 'Onion', 'Green Pepper'];

var PizzaOrder = function (_Component) {
  _inherits(PizzaOrder, _Component);

  function PizzaOrder(props) {
    _classCallCheck(this, PizzaOrder);

    var _this = _possibleConstructorReturn(this, (PizzaOrder.__proto__ || Object.getPrototypeOf(PizzaOrder)).call(this, props));

    _this.handelRequestDelete = function (data) {
      _this.chipData = _this.state.toppings;
      _this.chipData.filter(function (chip) {
        return chip.label === data.label ? '' : chip;
      });
      _this.setState({
        toppings: _this.chipData
      });
    };

    _this.state = {
      toppings: [{ label: 'Cheese' }, { label: 'Tomato Sauce' }],
      size: ''
    };
    _this.renderChip = _this.renderChip.bind(_this);
    _this.addToppings = _this.addToppings.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handelRequestDelete = _this.handelRequestDelete.bind(_this);
    return _this;
  }

  _createClass(PizzaOrder, [{
    key: 'handleChange',
    value: function handleChange(event, index, value) {
      this.setState({
        size: value
      });
    }
  }, {
    key: 'addToppings',
    value: function addToppings(value, index) {
      var newTop = { label: value };
      var toppings = this.state.toppings.append(newTop);
      this.setState({ toppings: toppings });
    }
  }, {
    key: 'renderChip',
    value: function renderChip(data, index) {
      var _this2 = this;

      return _react2.default.createElement(
        _materialUi.Chip,
        {
          key: index,
          onRequestDelete: function onRequestDelete() {
            return _this2.handleRequestDelete.bind(null, data);
          }
        },
        data.label
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_materialUi.TextField, {
          floatingLabelText: 'Name',
          floatingLabelFixed: true
        }),
        _react2.default.createElement(_materialUi.TextField, {
          floatingLabelText: 'Phone Number',
          floatingLabelFixed: true
        }),
        _react2.default.createElement(
          _materialUi.DropDownMenu,
          { value: this.state.size, onChange: this.handleChange },
          _react2.default.createElement(_materialUi.MenuItem, { value: 'Small', primaryText: 'Small' }),
          _react2.default.createElement(_materialUi.MenuItem, { value: 'Medium', primaryText: 'Medium' }),
          _react2.default.createElement(_materialUi.MenuItem, { value: 'Large', primaryText: 'Large' }),
          _react2.default.createElement(_materialUi.MenuItem, { value: 'XL', primaryText: 'Extra Large' })
        ),
        _react2.default.createElement(_AutoComplete2.default, {
          floatingLabelText: 'More Toppings',
          filter: Autocomplete.fuzzyFilter,
          dataSource: extraToppings,
          maxSearchResults: 5,
          onNewRequest: this.addToppings
        }),
        _react2.default.createElement(
          'div',
          null,
          this.state.toppings.map(this.renderChip, this)
        )
      );
    }
  }]);

  return PizzaOrder;
}(_react.Component);

exports.default = PizzaOrder;
