'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomPopup = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _keyboardKey = require('keyboard-key');

var _keyboardKey2 = _interopRequireDefault(_keyboardKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomPopup = function (_React$Component) {
  _inherits(CustomPopup, _React$Component);

  function CustomPopup(props) {
    _classCallCheck(this, CustomPopup);

    var _this = _possibleConstructorReturn(this, (CustomPopup.__proto__ || Object.getPrototypeOf(CustomPopup)).call(this, props));

    _this.handleOpen = function () {
      _this.setState({ popupIsOpen: true });
      setTimeout(function () {
        _this.popupCoords = document.getElementById('suirCalendarPopup').getBoundingClientRect();
      }, 0);
    };

    _this.handleClose = function (e) {
      var clickCoords = { x: e.clientX, y: e.clientY };
      if (_this.shouldClosePopup(_this.popupCoords, clickCoords) || _keyboardKey2.default.getCode(e) === _keyboardKey2.default.Escape) {
        _this.setState({ popupIsOpen: false });
      }
    };

    _this.shouldClosePopup = function (popupCoords, clickCoords) {
      var x = popupCoords.x,
          y = popupCoords.y,
          width = popupCoords.width,
          height = popupCoords.height;

      return clickCoords.x < x || clickCoords.y < y || clickCoords.x > x + width || clickCoords.y > y + height;
    };

    _this.state = {
      popupIsOpen: false
    };
    return _this;
  }

  _createClass(CustomPopup, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Popup, _extends({}, this.props, {
        id: 'suirCalendarPopup',
        onOpen: this.handleOpen,
        onClose: this.handleClose,
        open: this.state.popupIsOpen }));
    }
  }]);

  return CustomPopup;
}(_react2.default.Component);

CustomPopup.handledProps = [];
exports.default = CustomPopup;
exports.CustomPopup = CustomPopup;