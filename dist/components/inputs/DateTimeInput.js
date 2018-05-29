'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimeInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _containers = require('../../containers');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../../utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimeInput = function (_React$Component) {
  _inherits(DateTimeInput, _React$Component);

  function DateTimeInput(props) {
    _classCallCheck(this, DateTimeInput);

    var _this = _possibleConstructorReturn(this, (DateTimeInput.__proto__ || Object.getPrototypeOf(DateTimeInput)).call(this, props));

    _this.getDateTime = function (_ref) {
      var _ref$date = _ref.date,
          date = _ref$date === undefined ? '' : _ref$date,
          _ref$time = _ref.time,
          time = _ref$time === undefined ? '' : _ref$time;

      return '' + date + _this.props.divider + time;
    };

    _this.onDateChange = function (event, data) {
      var dateFormat = _this.props.dateFormat;

      _this.setState(function (prevState) {
        var newData = (0, _utils.cloneReplaceValue)(data, _this.getDateTime({ date: data.value.format(dateFormat) }));
        _this.props.onChange(event, newData);
        return {
          selectedDate: data.value.format(dateFormat)
        };
      });
    };

    _this.onTimeChange = function (event, data) {
      _this.setState(function (prevState) {
        var newData = (0, _utils.cloneReplaceValue)(data, _this.getDateTime({ date: prevState.selectedDate, time: data.value }));
        _this.props.onChange(event, newData);
        return {
          selectedTime: data.value
        };
      });
    };

    _this.state = {
      selectedDate: '',
      selectedTime: ''
    };
    return _this;
  }

  _createClass(DateTimeInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          onChange = _props.onChange,
          startMode = _props.startMode,
          popupPosition = _props.popupPosition,
          inline = _props.inline,
          value = _props.value;

      var rest = (0, _utils.getUnhandledProps)(DateTimeInput, this.props);

      var inputElement = _react2.default.createElement(_semanticUiReact.Input, _extends({}, rest, {
        value: value,
        onChange: onChange,
        icon: icon }));
      if (inline) {
        return _react2.default.createElement(_containers.DateTimePicker, {
          dateFormat: this.props.dateFormat,
          startMode: startMode,
          onDateChange: this.onDateChange,
          onTimeChange: this.onTimeChange });
      }
      return _react2.default.createElement(
        _containers.CustomPopup,
        {
          on: 'click',
          position: popupPosition,
          className: 'suir-calendar popup',
          hoverable: true,
          trigger: inputElement },
        _react2.default.createElement(_containers.DateTimePicker, {
          initialValue: value,
          dateFormat: this.props.dateFormat,
          startMode: startMode,
          onDateChange: this.onDateChange,
          onTimeChange: this.onTimeChange })
      );
    }
  }]);

  return DateTimeInput;
}(_react2.default.Component);

DateTimeInput.handledProps = ['dateFormat', 'divider', 'icon', 'inline', 'onChange', 'popupPosition', 'startMode', 'value'];


DateTimeInput.propTypes = {
  /** Called on change.
   * @param {SyntheticEvent} event React's original SyntheticEvent.
   * @param {object} data All props and proposed value.
  */
  onChange: _propTypes2.default.func,
  /** Same as semantic-ui-react Input's ``icon`` prop. */
  icon: _propTypes2.default.any,
  /** Date formatting string.
   * Anything that that can be passed to ``moment().format``.
   */
  dateFormat: _propTypes2.default.string,
  /** Characters that are used to divide date and time in string. */
  divider: _propTypes2.default.string,
  startMode: _propTypes2.default.oneOf(['year', 'month', 'day']),
  popupPosition: _propTypes2.default.oneOf(['top left', 'top right', 'bottom left', 'bottom right', 'right center', 'left center', 'top center', 'bottom center']),
  inline: _propTypes2.default.bool,
  value: _propTypes2.default.string
};

DateTimeInput.defaultProps = {
  icon: 'calendar',
  dateFormat: 'DD-MM-YYYY',
  divider: ' ',
  startMode: 'day',
  inline: false
};

exports.default = DateTimeInput;
exports.DateTimeInput = DateTimeInput;