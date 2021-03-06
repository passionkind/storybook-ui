'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A small utility to add before/afterEach to stories.
var WithLifecyle = function (_Component) {
  (0, _inherits3.default)(WithLifecyle, _Component);

  function WithLifecyle(props) {
    var _ref;

    (0, _classCallCheck3.default)(this, WithLifecyle);

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = WithLifecyle.__proto__ || (0, _getPrototypeOf2.default)(WithLifecyle)).call.apply(_ref, [this, props].concat(rest)));

    props.beforeEach();
    return _this;
  }

  (0, _createClass3.default)(WithLifecyle, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.afterEach();
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.storyFn();
    }
  }]);
  return WithLifecyle;
}(_react.Component);

WithLifecyle.propTypes = {
  storyFn: _propTypes2.default.func.isRequired,
  beforeEach: _propTypes2.default.func,
  afterEach: _propTypes2.default.func
};
WithLifecyle.defaultProps = {
  beforeEach: function beforeEach() {},
  afterEach: function afterEach() {}
};

exports.default = function (_ref2) {
  var beforeEach = _ref2.beforeEach,
      afterEach = _ref2.afterEach;
  return function (storyFn) {
    return _react2.default.createElement(WithLifecyle, { beforeEach: beforeEach, afterEach: afterEach, storyFn: storyFn });
  };
};