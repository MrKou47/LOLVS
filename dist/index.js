"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var handleServe = function (req, res) {
    res.end('nnn');
};
http_1.default
    .createServer(handleServe)
    .listen(8388, function () {
    console.log('sever start');
});
//# sourceMappingURL=index.js.map