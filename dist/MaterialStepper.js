'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Stepper = require('material-ui/Stepper');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Card = require('material-ui/Card');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HorizontalLinearStepper = function (_React$Component) {
  _inherits(HorizontalLinearStepper, _React$Component);

  function HorizontalLinearStepper(props) {
    _classCallCheck(this, HorizontalLinearStepper);

    var _this = _possibleConstructorReturn(this, (HorizontalLinearStepper.__proto__ || Object.getPrototypeOf(HorizontalLinearStepper)).call(this, props));

    _this.handleNext = function () {
      var stepIndex = _this.state.stepIndex;

      _this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2
      });
    };

    _this.handlePrev = function () {
      var stepIndex = _this.state.stepIndex;

      if (stepIndex > 0) {
        _this.setState({ stepIndex: stepIndex - 1 });
      }
    };

    _this.state = {
      finished: false,
      stepIndex: 0
    };
    return _this;
  }

  _createClass(HorizontalLinearStepper, [{
    key: 'getStepContent',
    value: function getStepContent(stepIndex) {
      switch (stepIndex) {
        case 0:
          return 'Select campaign settings...';
        case 1:
          return 'What is an ad group anyways?';
        case 2:
          return 'This is the bit I really care about!';
        default:
          return 'You\'re a long way from home sonny jim!';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          finished = _state.finished,
          stepIndex = _state.stepIndex;

      var contentStyle = { margin: '0 16px' };
      var labelProps = {
        style: { color: this.context.muiTheme.palette.textColor }
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Card.Card,
          null,
          _react2.default.createElement(
            'div',
            { style: { width: '100%', maxWidth: 700, margin: 'auto' } },
            _react2.default.createElement(
              _Stepper.Stepper,
              { activeStep: stepIndex },
              _react2.default.createElement(
                _Stepper.Step,
                null,
                _react2.default.createElement(
                  _Stepper.StepLabel,
                  null,
                  _react2.default.createElement(
                    'span',
                    labelProps,
                    'Select options...'
                  )
                )
              ),
              _react2.default.createElement(
                _Stepper.Step,
                null,
                _react2.default.createElement(
                  _Stepper.StepLabel,
                  null,
                  _react2.default.createElement(
                    'span',
                    labelProps,
                    'Review selections'
                  )
                )
              ),
              _react2.default.createElement(
                _Stepper.Step,
                null,
                _react2.default.createElement(
                  _Stepper.StepLabel,
                  null,
                  _react2.default.createElement(
                    'span',
                    labelProps,
                    'Confirm'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _Card.CardActions,
              null,
              _react2.default.createElement(
                'div',
                { style: contentStyle },
                finished ? _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(_RaisedButton2.default, {
                    label: 'Click to Reset',
                    'default': true,
                    onTouchTap: function onTouchTap(event) {
                      event.preventDefault();
                      _this2.setState({ stepIndex: 0, finished: false });
                    }
                  })
                ) : _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    this.getStepContent(stepIndex)
                  ),
                  _react2.default.createElement(
                    'div',
                    { style: { margin: '12px 0' } },
                    _react2.default.createElement(_FlatButton2.default, {
                      label: 'Back',
                      disabled: stepIndex === 0,
                      onTouchTap: this.handlePrev,
                      style: { marginRight: 12 }
                    }),
                    _react2.default.createElement(_RaisedButton2.default, {
                      label: stepIndex === 2 ? 'Finish' : 'Next',
                      primary: true,
                      onTouchTap: this.handleNext
                    })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return HorizontalLinearStepper;
}(_react2.default.Component);

HorizontalLinearStepper.contextTypes = {
  muiTheme: _react2.default.PropTypes.object.isRequired
};

exports.default = HorizontalLinearStepper;
