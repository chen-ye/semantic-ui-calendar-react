'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Picker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _utils = require('../utils.js');

var _components = require('../components');

var _ = require('.');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Picker = function (_React$Component) {
  _inherits(Picker, _React$Component);

  function Picker(props) {
    _classCallCheck(this, Picker);

    var _this = _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

    _initialiseProps.call(_this);

    var initialValue = props.initialValue,
        dateFormat = props.dateFormat,
        startMode = props.startMode;

    var initialDate = initialValue ? (0, _moment2.default)(initialValue, dateFormat) : (0, _moment2.default)();
    _this.state = {
      activeDate: initialValue ? initialDate : null,
      dateToShow: initialDate,
      year: startMode !== 'year' ? initialDate.year().toString() : '',
      month: '',
      activeHour: '',
      activeMinute: '',
      mode: startMode,
      datesRange: { start: null, end: null }
    };
    return _this;
  }

  _createClass(Picker, [{
    key: 'render',
    value: function render() {
      var rest = (0, _utils.getUnhandledProps)(Picker, this.props);
      var _props = this.props,
          pickDate = _props.pickDate,
          pickDatesRange = _props.pickDatesRange;


      if (pickDatesRange) {
        return _react2.default.createElement(
          _semanticUiReact.Table,
          _extends({}, rest, {
            unstackable: true,
            celled: true,
            textAlign: 'center' }),
          _react2.default.createElement(_components.PickerHeader, {
            onDateClick: this.handleHeaderDateClick,
            onNextBtnClick: this.showNextMonth,
            onPrevBtnClick: this.showPrevMonth,
            activeDate: this.state.dateToShow,
            activeDatesRange: this.state.datesRange,
            showWeeks: true,
            width: '7' }),
          _react2.default.createElement(_components.DatePickerComponent, {
            datesRange: this.state.datesRange,
            onDateClick: this.setDatesRange,
            showedMonth: this.state.dateToShow })
        );
      }
      return _react2.default.createElement(
        _semanticUiReact.Table,
        _extends({}, rest, {
          unstackable: true,
          celled: true,
          textAlign: 'center' }),
        pickDate ? this.getDatePickerContent() : this.getDateTimePickerContent()
      );
    }
  }]);

  return Picker;
}(_react2.default.Component);

Picker.handledProps = ['dateFormat', 'divider', 'initialValue', 'onDateChange', 'onDatesRangeChange', 'onTimeChange', 'pickDate', 'pickDateTime', 'pickDatesRange', 'startMode'];

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.setDatesRange = function (event, data) {
    var onDatesRangeChange = _this2.props.onDatesRangeChange;

    _this2.setState(function (_ref) {
      var datesRange = _ref.datesRange;

      var newState = void 0;
      if (datesRange.start && datesRange.end) {
        newState = {
          datesRange: { start: null, end: null }
        };
        onDatesRangeChange(event, (0, _utils.cloneReplaceValue)(data, _this2.getDatesRange()));
      } else if (datesRange.start && datesRange.start.isAfter(data.value)) {
        newState = {
          datesRange: { start: null, end: null }
        };
        onDatesRangeChange(event, (0, _utils.cloneReplaceValue)(data, _this2.getDatesRange()));
      } else if (datesRange.start) {
        newState = {
          datesRange: { start: datesRange.start, end: data.value }
        };
        onDatesRangeChange(event, (0, _utils.cloneReplaceValue)(data, _this2.getDatesRange({
          start: datesRange.start,
          end: data.value
        })));
      } else {
        newState = {
          datesRange: { start: data.value, end: datesRange.end }
        };
        onDatesRangeChange(event, (0, _utils.cloneReplaceValue)(data, _this2.getDatesRange({
          start: data.value,
          end: datesRange.end
        })));
      }
      return newState;
    });
  };

  this.getDatesRange = function (range) {
    var _props2 = _this2.props,
        dateFormat = _props2.dateFormat,
        divider = _props2.divider;

    var _ref2 = range ? range : { start: null, end: null },
        start = _ref2.start,
        end = _ref2.end;

    var startStr = start && start.format ? start.format(dateFormat) : '. . .';
    var endStr = end && end.format ? end.format(dateFormat) : '. . .';
    return '' + startStr + divider + endStr;
  };

  this.switchToPrevMode = function () {
    var lastMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'day';

    var getNextMode = function getNextMode(mode) {
      if (mode === 'minute') return 'hour';
      if (mode === 'hour') return 'day';
      if (mode === 'day') return 'month';
      if (mode === 'month') return 'year';
      return lastMode;
    };
    _this2.setState({ mode: getNextMode(_this2.state.mode) });
  };

  this.switchToNextMode = function () {
    var lastMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'day';

    var getNextMode = function getNextMode(mode) {
      if (mode === lastMode) return lastMode;
      if (mode === 'year') return 'month';
      if (mode === 'month') return 'day';
      if (mode === 'day') return 'hour';
      if (mode === 'hour') return 'minute';
      return lastMode;
    };
    _this2.setState({ mode: getNextMode(_this2.state.mode) });
  };

  this.showNextYear = function () {
    _this2.setState(function (_ref3) {
      var dateToShow = _ref3.dateToShow;

      var nextYear = dateToShow.clone();
      nextYear.add(1, 'Y');
      return {
        dateToShow: nextYear,
        year: nextYear.format('YYYY')
      };
    });
  };

  this.showPrevYear = function () {
    _this2.setState(function (_ref4) {
      var dateToShow = _ref4.dateToShow;

      var prevYear = dateToShow.clone();
      prevYear.add(-1, 'Y');
      return {
        dateToShow: prevYear,
        year: prevYear.format('YYYY')
      };
    });
  };

  this.showNextMonth = function () {
    _this2.setState(function (_ref5) {
      var dateToShow = _ref5.dateToShow;

      var nextMonth = dateToShow.clone();
      nextMonth.add(1, 'M');
      return { dateToShow: nextMonth };
    });
  };

  this.showPrevMonth = function () {
    _this2.setState(function (_ref6) {
      var dateToShow = _ref6.dateToShow;

      var prevMonth = dateToShow.clone();
      prevMonth.add(-1, 'M');
      return { dateToShow: prevMonth };
    });
  };

  this.showNextDay = function () {
    if (_this2.props.pickDateTime) _this2.resetMinutes();
    _this2.setState(function (_ref7) {
      var activeDate = _ref7.activeDate;

      var nextDay = activeDate.clone();
      nextDay.add(1, 'd');
      _this2.props.onDateChange(null, { value: nextDay });
      return { activeDate: nextDay };
    });
  };

  this.showPrevDay = function () {
    if (_this2.props.pickDateTime) _this2.resetMinutes();
    _this2.setState(function (_ref8) {
      var activeDate = _ref8.activeDate;

      var prevDay = activeDate.clone();
      prevDay.add(-1, 'd');
      _this2.props.onDateChange(null, { value: prevDay });
      return { activeDate: prevDay };
    });
  };

  this.onDateClick = function (event, data) {
    var onDateChange = _this2.props.onDateChange;


    _this2.setState({
      activeDate: data.value
    });
    onDateChange(event, data);
    _this2.switchToNextMode(_this2.props.pickDateTime ? 'minute' : 'day');
  };

  this.onHourClick = function (event, data) {
    _this2.setState(function (prevState) {
      var newData = (0, _utils.cloneReplaceValue)(data, _this2.getTime({
        hour: data.value,
        minute: ''
      }));
      _this2.props.onTimeChange(event, newData);
      return {
        activeHour: data.value
      };
    });
    _this2.switchToNextMode('minute');
  };

  this.onMinuteClick = function (event, data) {
    _this2.setState(function (prevState) {
      var newData = (0, _utils.cloneReplaceValue)(data, _this2.getTime({
        hour: prevState.activeHour,
        minute: data.value
      }));
      _this2.props.onTimeChange(event, newData);
      return {
        activeMinute: data.value
      };
    });
    _this2.switchToNextMode('minute');
  };

  this.onYearChange = function (event, data) {
    var date = {
      year: data.value
    };
    _this2.setState({
      dateToShow: (0, _moment2.default)(date),
      year: data.value
    });
    _this2.switchToNextMode();
  };

  this.onMonthChange = function (event, data) {
    var date = {
      year: _this2.state.year,
      month: (0, _utils.monthIndex)(data.value)
    };
    _this2.setState({
      dateToShow: (0, _moment2.default)(date),
      month: data.value
    });
    _this2.switchToNextMode();
  };

  this.handleHeaderDateClick = function (event, data) {
    _this2.switchToPrevMode();
  };

  this.handleHeaderTimeClick = function (event, data) {
    _this2.switchToPrevMode('minute');
    _this2.resetMinutes();
    _this2.resetHours();
  };

  this.resetMinutes = function () {
    _this2.setState({ activeMinute: '' });
  };

  this.resetHours = function () {
    _this2.setState({ activeHour: '' });
  };

  this.getTime = function (_ref9) {
    var _ref9$hour = _ref9.hour,
        hour = _ref9$hour === undefined ? '' : _ref9$hour,
        _ref9$minute = _ref9.minute,
        minute = _ref9$minute === undefined ? '' : _ref9$minute;

    return hour + ':' + minute;
  };

  this.yearModeContent = function () {
    return _react2.default.createElement(_.YearPicker, {
      onHeaderDateClick: _this2.handleHeaderDateClick,
      standalone: false,
      onYearChange: _this2.onYearChange });
  };

  this.monthModeContent = function () {
    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(_components.PickerHeader, {
        onDateClick: _this2.handleHeaderDateClick,
        onNextBtnClick: _this2.showNextYear,
        onPrevBtnClick: _this2.showPrevYear,
        activeYear: _this2.state.dateToShow.format('YYYY'),
        width: '3' }),
      _react2.default.createElement(_components.MonthPickerComponent, {
        activeMonth: _this2.state.dateToShow.format('MMM'),
        onMonthClick: _this2.onMonthChange })
    );
  };

  this.dayModeContent = function () {
    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(_components.PickerHeader, {
        onDateClick: _this2.handleHeaderDateClick,
        onNextBtnClick: _this2.showNextMonth,
        onPrevBtnClick: _this2.showPrevMonth,
        activeDate: _this2.state.dateToShow,
        showWeeks: true,
        width: '7' }),
      _react2.default.createElement(_components.DatePickerComponent, {
        onDateClick: _this2.onDateClick,
        activeDate: _this2.state.activeDate,
        showedMonth: _this2.state.dateToShow })
    );
  };

  this.getDatePickerContent = function () {
    var mode = _this2.state.mode;

    if (mode === 'year') return _this2.yearModeContent();
    if (mode === 'year') return _this2.monthModeContent();
    if (mode === 'month') return _this2.monthModeContent();
    return _this2.dayModeContent();
  };

  this.getDateTimePickerContent = function () {
    var _state = _this2.state,
        activeDate = _state.activeDate,
        activeHour = _state.activeHour,
        activeMinute = _state.activeMinute,
        mode = _state.mode;

    var headerWidth = mode === 'minute' ? '3' : mode === 'hour' ? '4' : '7';
    if (mode !== 'hour' && mode !== 'minute') {
      return _this2.getDatePickerContent();
    }
    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(_components.PickerHeader, {
        onDateClick: _this2.handleHeaderTimeClick,
        onNextBtnClick: _this2.showNextDay,
        onPrevBtnClick: _this2.showPrevDay,
        activeDate: activeDate,
        includeDay: true,
        width: headerWidth }),
      _react2.default.createElement(_components.TimePickerComponent, {
        mode: mode,
        activeHour: activeHour,
        activeMinute: activeMinute,
        onHourClick: _this2.onHourClick,
        onMinuteClick: _this2.onMinuteClick })
    );
  };
};

Picker.propTypes = {
  /** (event, data) => {} */
  onDateChange: _propTypes2.default.func,
  /** (event, data) => {} */
  onTimeChange: _propTypes2.default.func,
  onDatesRangeChange: _propTypes2.default.func,
  startMode: _propTypes2.default.oneOf(['year', 'month', 'day']),
  initialValue: _propTypes2.default.string,
  dateFormat: _propTypes2.default.string,
  pickDate: _propTypes2.default.bool,
  pickDateTime: _propTypes2.default.bool,
  pickDatesRange: _propTypes2.default.bool,
  divider: _propTypes2.default.string
};

Picker.defaultProps = {
  onDateChange: _utils.emptyFunction,
  onTimeChange: _utils.emptyFunction,
  startMode: 'day',
  dateFormat: 'DD-MM-YYYY',
  divider: ' - '
};

exports.default = Picker;
exports.Picker = Picker;