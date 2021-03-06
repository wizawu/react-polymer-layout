"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Item = (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Item.prototype.componentDidMount = function () {
        this.insertDisplayFlex();
    };
    Item.prototype.componentDidUpdate = function () {
        this.insertDisplayFlex();
    };
    Item.prototype.insertDisplayFlex = function () {
        if (this.props.layout) {
            var root = ReactDOM.findDOMNode(this.refs.root);
            var values = ["-webkit-box", "-webkit-flex", "-ms-flexbox", "flex"].map(function (v) { return "display:" + v + ";"; }).join("");
            var style = root.getAttribute("style") || "";
            if (style.indexOf(values) !== 0)
                root.setAttribute("style", values + style);
        }
    };
    Item.prototype.render = function () {
        var props = this.props;
        var flex = props.flex, layout = props.layout, selfStart = props.selfStart, selfCenter = props.selfCenter, selfEnd = props.selfEnd, selfStretch = props.selfStretch, relative = props.relative, fit = props.fit, fullbleed = props.fullbleed, hidden = props.hidden, children = props.children, otherProps = __rest(props, ["flex", "layout", "selfStart", "selfCenter", "selfEnd", "selfStretch", "relative", "fit", "fullbleed", "hidden", "children"]);
        var style = {};
        switch (typeof (props.flex)) {
            case "boolean":
            case "number":
            case "string":
                var flex_1 = (props.flex === true ? "1 1 0" : (props.flex || "")).toString();
                style = __assign({}, style, { WebkitBoxFlex: flex_1, WebkitFlex: flex_1, MsFlex: flex_1, flex: flex_1 });
                break;
        }
        var alignSelf = null;
        if (props.selfStart) {
            alignSelf = ["flex-start", "start", "flex-start"];
        }
        else if (props.selfCenter) {
            alignSelf = ["center", "center", "center"];
        }
        else if (props.selfEnd) {
            alignSelf = ["flex-end", "end", "flex-end"];
        }
        else if (props.selfStretch) {
            alignSelf = ["stretch", "stretch", "stretch"];
        }
        style = alignSelf ? __assign({}, style, { WebkitAlignSelf: alignSelf[0], MsFlexItemAlign: alignSelf[1], alignSelf: alignSelf[2] }) : style;
        if (props.relative) {
            style.position = "relative";
        }
        else if (props.fit) {
            style.position = "absolute";
            style.top = style.bottom = style.left = style.right = 0;
        }
        if (props.fullbleed) {
            style.margin = 0;
            style.height = "100vh";
        }
        if (props.hidden)
            style.display = "none";
        style.overflow = props.overflow === true ? "auto" : (props.overflow || "hidden");
        return (React.createElement("div", __assign({ ref: "root" }, otherProps, { style: __assign({}, style, props.style) }), children));
    };
    return Item;
}(React.Component));
exports.default = Item;
