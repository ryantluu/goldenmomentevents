"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxFileName = "/Users/misiek/dev/gatsby/packages/gatsby/cache-dir/default-html.js";

class HTML extends _react.default.Component {
  render() {
    return _react.default.createElement("html", (0, _extends2.default)({}, this.props.htmlAttributes, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), _react.default.createElement("head", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, _react.default.createElement("meta", {
      charSet: "utf-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), _react.default.createElement("meta", {
      httpEquiv: "x-ua-compatible",
      content: "ie=edge",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), _react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), this.props.headComponents), _react.default.createElement("body", (0, _extends2.default)({}, this.props.bodyAttributes, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), this.props.preBodyComponents, _react.default.createElement("div", {
      key: `body`,
      id: "___gatsby",
      dangerouslySetInnerHTML: {
        __html: this.props.body
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), this.props.postBodyComponents));
  }

}

exports.default = HTML;
HTML.propTypes = {
  htmlAttributes: _propTypes.default.object,
  headComponents: _propTypes.default.array,
  bodyAttributes: _propTypes.default.object,
  preBodyComponents: _propTypes.default.array,
  body: _propTypes.default.string,
  postBodyComponents: _propTypes.default.array
};