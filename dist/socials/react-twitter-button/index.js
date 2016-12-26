'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TwitterButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** note: Tweet Button Parameter Reference **
 * all props mirrow this param list:
 * https://dev.twitter.com/web/tweet-button/parameters
 */

var propTypes = {
    text: _react2.default.PropTypes.string,
    url: _react2.default.PropTypes.string,
    hashtags: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
    screen_name: _react2.default.PropTypes.string,
    via: _react2.default.PropTypes.string,
    related: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
    large: _react2.default.PropTypes.bool,
    lang: _react2.default.PropTypes.string,
    dnt: _react2.default.PropTypes.bool,
    src: _react2.default.PropTypes.func
};

var defaultProps = {
    text: '',
    url: '',
    hashtags: ['reactjs'],
    screen_name: null,
    via: '',
    related: null,
    large: false,
    lang: 'en',
    dnt: false,
    src: function src() {}
};

function TwitterButton(props) {
    var tweetSrc = '\nhttps://platform.twitter.com/widgets/tweet_button.html?' + ('' + (props.large ? '\n&size=l' : '')) + ('' + (props.url ? '\n&url=' + props.url : '')) + ('' + (props.via ? '\n&via=' + props.via : '')) + ('' + (props.text ? '\n&text=' + props.text : '')) + ('' + (props.hashtags ? '\n&hashtags=' + props.hashtags.reduce(function (p, n) {
        return p + ',' + n;
    }) : '')) + ((props.related ? '\n&related=' + props.related.reduce(function (p, n) {
        return p + ',' + n;
    }) : '') + '\n');
    props.src(tweetSrc);
    return _react2.default.createElement('iframe', {
        src: tweetSrc,
        width: props.large ? 80 : 62,
        height: props.large ? 37 : 28,
        title: 'Twitter Tweet Button',
        style: { border: 0, overflow: 'hidden' }
    });
}

TwitterButton.propTypes = propTypes;
TwitterButton.defaultProps = defaultProps;
