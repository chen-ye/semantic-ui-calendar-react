'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimePicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _components = require('../components');

var _utils = require('../utils.js');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimePicker = function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker(props) {
    _classCallCheck(this, TimePicker);

    var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

    _this.onHourClick = function (event, data) {
      _this.setState(function (prevState) {
        var newData = (0, _utils.cloneReplaceValue)(data, _this.getTime({
          hour: data.value,
          minute: ''
        }));
        _this.props.onTimeChange(event, newData);
        return {
          activeHour: data.value,
          mode: 'minute'
        };
      });
    };

    _this.getTime = function (_ref) {
      var _ref$hour = _ref.hour,
          hour = _ref$hour === undefined ? '' : _ref$hour,
          _ref$minute = _ref.minute,
          minute = _ref$minute === undefined ? '' : _ref$minute;

      return hour + ':' + minute;
    };

    _this.onMinuteClick = function (event, data) {
      _this.setState(function (prevState) {
        var newData = (0, _utils.cloneReplaceValue)(data, _this.getTime({
          hour: prevState.activeHour,
          minute: data.value
        }));
        _this.props.onTimeChange(event, newData);
        return {
          activeMinute: data.value
        };
      });
    };

    _this.state = {
      activeHour: '',
      activeMinute: '',
      mode: 'hour'
    };
    return _this;
  }

  _createClass(TimePicker, [{
    key: 'render',
    value: function render() {
      var rest = (0, _utils.getUnhandledProps)(TimePicker, this.props);
      return _react2.default.createElement(
        _semanticUiReact.Table,
        _extends({}, rest, {
          unstackable: true,
          celled: true,
          textAlign: 'center' }),
        _react2.default.createElement(_components.TimePickerComponent, {
          mode: this.state.mode,
          activeHour: this.state.activeHour,
          activeMinute: this.state.activeMinute,
          onHourClick: this.onHourClick,
          onMinuteClick: this.onMinuteClick })
      );
    }
  }]);

  return TimePicker;
}(_react2.default.Component);

TimePicker.handledProps = ['onTimeChange'];


TimePicker.propTypes = {
  /** (event, data) => {} */
  onTimeChange: _propTypes2.default.func
};

TimePicker.defaultProps = {
  onTimeChange: _utils.emptyFunction
};

exports.default = TimePicker;
exports.TimePicker = TimePicker;