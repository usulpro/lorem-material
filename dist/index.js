'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Lorem = 'Material';

exports.default = Lorem;


var lorems = require.context('./', true, /Material\w*.jsx/);
lorems.keys().forEach(function (filename) {
    var ipsum = lorems(filename).default;
    var ipsumName = filename.replace(/^.\//, '').replace(/.jsx$/, '');
    module.exports[ipsumName] = ipsum;
});
