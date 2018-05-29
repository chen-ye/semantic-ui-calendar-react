'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _containers = require('../../containers');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../../utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function YearInput(props) {
  var onChange = props.onChange,
      icon = props.icon,
      popupPosition = props.popupPosition,
      inline = props.inline;

  var rest = (0, _utils.getUnhandledProps)(YearInput, props);

  var inputElement = _react2.default.createElement(_semanticUiReact.Input, _extends({}, rest, {
    icon: icon,
    onChange: onChange }));
  if (inline) {
    return _react2.default.createElement(_containers.YearPicker, { onYearChange: onChange });
  }
  return _react2.default.createElement(
    _containers.CustomPopup,
    {
      on: 'click',
      position: popupPosition,
      className: 'suir-calendar popup',
      hoverable: true,
      trigger: inputElement },
    _react2.default.createElement(_containers.YearPicker, {
      onYearChange: onChange })
  );
}

YearInput.handledProps = ['icon', 'inline', 'onChange', 'popupPosition'];
YearInput.propTypes = {
  /** Called on change.
   * @param {SyntheticEvent} event React's original SyntheticEvent.
   * @param {object} data All props and proposed value.
  */
  onChange: _propTypes2.default.func,
  /** Same as semantic-ui-react Input's ``icon`` prop. */
  icon: _propTypes2.default.any,
  popupPosition: _propTypes2.default.oneOf(['top left', 'top right', 'bottom left', 'bottom right', 'right center', 'left center', 'top center', 'bottom center']),
  inline: _propTypes2.default.bool
};

YearInput.defaultProps = {
  icon: 'calendar',
  inline: false
};

exports.default = YearInput;
exports.YearInput = YearInput;