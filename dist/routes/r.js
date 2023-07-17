"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var routes = function routes(app) {
  app.route("/contact").get(function (req, res) {
    res.send("Get req ");
  }).post(function (req, res) {
    res.send("Post req ");
  });
  app.route("/contact/:contactId").put(function (req, res) {
    res.send("Put req");
  })["delete"](function (req, res) {
    res.send("Del req");
  });
};
var _default = routes;
exports["default"] = _default;