'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _reactTwitterButton = require('../react-twitter-button');

var _reactTwitterButton2 = _interopRequireDefault(_reactTwitterButton);

var _reactGithubButton = require('../react-github-button');

var _reactGithubButton2 = _interopRequireDefault(_reactGithubButton);

var _hacktoberfest_logo = require('./hacktoberfest_logo.svg');

var _hacktoberfest_logo2 = _interopRequireDefault(_hacktoberfest_logo);

var _sectionDividerCenter = require('./section-divider-center.svg');

var _sectionDividerCenter2 = _interopRequireDefault(_sectionDividerCenter);

var _octo_avatar = require('./octo_avatar.png');

var _octo_avatar2 = _interopRequireDefault(_octo_avatar);

var _ic_account_balance_black = require('./doc/ic_account_balance_black.png');

var _ic_account_balance_black2 = _interopRequireDefault(_ic_account_balance_black);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Buttons = _react2.default.createElement(
  'div',
  { style: { display: 'flex', justifyContent: 'space-between' } },
  _react2.default.createElement(_reactGithubButton2.default, {
    user: 'sm-react',
    repo: 'storybook-addon-material-ui',
    type: 'star'
  }),
  _react2.default.createElement(_reactGithubButton2.default, {
    user: 'sm-react',
    repo: 'storybook-addon-material-ui',
    type: 'fork'
  }),
  _react2.default.createElement(_reactTwitterButton2.default, {
    text: 'Material-UI Visual Theme Editor',
    url: 'https://sm-react.github.io/storybook-addon-material-ui',
    via: 'UsulPro',
    related: ['UsulPro'],
    hashtags: ['reactjs', 'materialui', 'reactstorybook']
  })
);

var MaterialAppExampleCard = function (_React$Component) {
  _inherits(MaterialAppExampleCard, _React$Component);

  function MaterialAppExampleCard(props) {
    _classCallCheck(this, MaterialAppExampleCard);

    var _this = _possibleConstructorReturn(this, (MaterialAppExampleCard.__proto__ || Object.getPrototypeOf(MaterialAppExampleCard)).call(this, props));

    _this.handleExpandChange = function (expanded) {
      _this.setState({ expanded: expanded });
    };

    _this.handleToggle = function (event, toggle) {
      _this.setState({ expanded: toggle });
    };

    _this.handleExpand = function () {
      _this.setState({ expanded: true });
    };

    _this.handleReduce = function () {
      _this.setState({ expanded: false });
    };

    _this.state = {
      expanded: false
    };
    return _this;
  }

  _createClass(MaterialAppExampleCard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: {
            margin: '20px 100px',
            minWidth: 700,
            maxWidth: 1200,
            display: 'flex',
            justifyContent: 'center'
          }
        },
        _react2.default.createElement(
          'style',
          { scoped: true },
          '\nli {\n    margin-bottom: 10px;\n}\na {\n  text-decoration: none;\n  color: #ce873d;\n  font-weight: bold;\n}\n\n              '
        ),
        _react2.default.createElement(
          _Card.Card,
          {
            expanded: this.state.expanded,
            onExpandChange: this.handleExpandChange,
            style: { width: '100%' }
          },
          _react2.default.createElement(_Card.CardHeader, {
            title: 'New Contributor',
            subtitle: '#good_first_PR',
            avatar: _octo_avatar2.default,
            actAsExpander: true,
            showExpandableButton: true
          }),
          _react2.default.createElement(
            _Card.CardText,
            null,
            _react2.default.createElement(_Toggle2.default, {
              toggled: this.state.expanded,
              onToggle: this.handleToggle,
              labelPosition: 'right',
              label: 'Start Hacking'
            })
          ),
          _react2.default.createElement(
            _Card.CardMedia,
            {
              expandable: true
            },
            _react2.default.createElement(
              'div',
              { style: { display: 'flex', margin: '10px 20px' } },
              _react2.default.createElement(
                'div',
                { style: { minWidth: 300 } },
                _react2.default.createElement(
                  'a',
                  { href: 'https://hacktoberfest.digitalocean.com/', target: 'blank' },
                  _react2.default.createElement('img', { src: _hacktoberfest_logo2.default, alt: 'H' })
                )
              ),
              _react2.default.createElement(
                'div',
                { style: { margin: '10px 50px' } },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Event details'
                ),
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    { style: { paddingBottom: 10 } },
                    'Hacktoberfest is ',
                    _react2.default.createElement(
                      'b',
                      null,
                      'open to everyone'
                    ),
                    ' in our global community!'
                  ),
                  _react2.default.createElement(
                    'li',
                    { style: { paddingBottom: 10 } },
                    'Pull requests can be made in ',
                    _react2.default.createElement(
                      'b',
                      null,
                      'any GitHub-hosted repositories/projects.'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { style: { paddingBottom: 10 } },
                    'You can sign up anytime between October 1 and October 31.'
                  )
                ),
                _react2.default.createElement(
                  'h3',
                  null,
                  'Rules'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'To get a shirt, you must make ',
                  _react2.default.createElement(
                    'b',
                    null,
                    'four pull requests'
                  ),
                  'between October 1-31. Pull requests can be to any public repo on GitHub, not just the ones we\'ve highlighted. Pull requests reported by maintainers as spam or that are automated will be marked as invalid and won\u2019t count towards the shirt.'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { style: { display: 'flex', justifyContent: 'center' } },
              _react2.default.createElement(
                'div',
                { style: { maxWidth: 400, minWidth: 100, width: '50%' } },
                _react2.default.createElement('img', { src: _sectionDividerCenter2.default, alt: 'Section divider center' })
              )
            )
          ),
          _react2.default.createElement(_Card.CardTitle, { title: 'Hacktoberfest', subtitle: 'What you need to know', expandable: true }),
          _react2.default.createElement(
            _Card.CardText,
            { expandable: true },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'Getting Started'
              ),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'a',
                      {
                        href: 'https://www.digitalocean.com/community/tutorials/an-introduction-to-contributing-to-open-source-projects-and-installing-git'
                      },
                      'An Introduction to Open Source (Tutorial Series)'
                    ),
                    _react2.default.createElement('br', null),
                    'by Lisa Tagliaferri'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'https://guides.github.com/activities/contributing-to-open-source/', target: 'blank' },
                      'Contributing to Open Source on GitHub'
                    ),
                    _react2.default.createElement('br', null),
                    'by GitHub'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'a',
                      {
                        href: 'http://www.erikaheidi.com/blog/a-beginners-guide-to-open-source-making-your-first-contribution'
                      },
                      'A Beginner\'s Guide to Open Source: The Best Advice for Making your First Contribution'
                    ),
                    _react2.default.createElement('br', null),
                    'by Erika Heidi'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'a',
                      {
                        href: 'https://medium.com/@kentcdodds/what-open-source-project-should-i-contribute-to-7d50ecfe1cb4#.2709vufoy'
                      },
                      'What open source project should I contribute to?'
                    ),
                    _react2.default.createElement('br', null),
                    'by Kent C. Dodds'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'http://hood.ie/blog/welcoming-communities', target: 'blank' },
                      'Welcoming Communities'
                    ),
                    _react2.default.createElement('br', null),
                    'by Gregor Martynus, Hoodie'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'a',
                      {
                        href: 'https://the-pastry-box-project.net/charlotte-spencer/2015-september-16'
                      },
                      'Lowering the barriers'
                    ),
                    _react2.default.createElement('br', null),
                    'by Charlotte Spencer'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'http://contributor-covenant.org', target: 'blank' },
                      'Contributor Covenant: A Code of Conduct for Open Source Projects'
                    ),
                    _react2.default.createElement('br', null),
                    'by Coraline Ada Ehmke'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _Card.CardText,
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Material content filling'
            ),
            _react2.default.createElement(
              'p',
              { style: { textAlign: 'justify', fontSize: 16 } },
              _react2.default.createElement('img', { src: _ic_account_balance_black2.default, alt: 'Material' }),
              'For easy themes design we required a realistic-looking content. It will be possible to try out different themes and immediately see how they look. For this we feel the need of help by designers and front-end developers in material design. Therefore, we are opening this trend and attract',
              _react2.default.createElement(
                'a',
                { href: 'https://hacktoberfest.digitalocean.com/', target: 'blank' },
                _react2.default.createElement(
                  'b',
                  null,
                  ' #hacktoberfest '
                )
              ),
              'participants. We welcome all who wish to contribute.'
            ),
            _react2.default.createElement(
              'p',
              { style: { textAlign: 'justify', fontSize: 16 } },
              'We propose to fill this library by adding small pages or applications - each in a separate',
              _react2.default.createElement(
                'a',
                {
                  href: 'https://sm-react.github.io/storybook-addon-material-ui/?theme-ind=0&theme-sidebar=false&theme-full=false&selectedKind=Material%20App&selectedStory=Hactoberfest%20issues%3A&full=0&down=1&left=1&panelRight=0&downPanel=sm%2Fstorybook-addon-material-ui%2Fmaterial-panel'
                },
                _react2.default.createElement(
                  'span',
                  null,
                  ' story'
                )
              ),
              '. They should be made in the material design style and look like a real application (no need to use real data). We are pleased to see various interesting applications, but you can try your hand at creating something simple.'
            ),
            _react2.default.createElement(
              'p',
              { style: { textAlign: 'justify', fontSize: 16 } },
              'We do not impose special restrictions to create pages, but please keep the following:',
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  'It should be in the',
                  _react2.default.createElement(
                    'a',
                    { href: 'https://material.google.com/', target: 'blank' },
                    _react2.default.createElement(
                      'span',
                      null,
                      ' Material Design '
                    )
                  ),
                  'style'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'It should be based on the',
                  _react2.default.createElement(
                    'a',
                    { href: 'http://www.material-ui.com/#/', target: 'blank' },
                    _react2.default.createElement(
                      'span',
                      null,
                      ' Material-UI '
                    )
                  ),
                  'library'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Should look good with different themes'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'The appearance should rely on themes settings'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Should not copy an already existing',
                  _react2.default.createElement(
                    'a',
                    { href: 'https://sm-react.github.io/storybook-addon-material-ui', target: 'blank' },
                    _react2.default.createElement(
                      'span',
                      null,
                      ' story '
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Each story in a separate file (or a folder)'
                )
              )
            ),
            _react2.default.createElement(
              'h3',
              { style: { textAlign: 'justify', fontSize: 16 } },
              'to initiate the participation',
              _react2.default.createElement(
                'a',
                { href: 'https://github.com/sm-react/storybook-addon-material-ui/fork', target: 'blank' },
                _react2.default.createElement(
                  'span',
                  null,
                  ' fork this project '
                )
              ),
              '.'
            ),
            _react2.default.createElement(
              'p',
              { style: { textAlign: 'justify', fontSize: 16 } },
              'See details',
              _react2.default.createElement(
                'a',
                { href: 'https://github.com/sm-react/storybook-addon-material-ui/issues/19', target: 'blank' },
                _react2.default.createElement(
                  'span',
                  null,
                  ' here'
                )
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              Buttons
            )
          ),
          _react2.default.createElement(
            _Card.CardActions,
            null,
            _react2.default.createElement(_FlatButton2.default, { label: 'Expand', onTouchTap: this.handleExpand }),
            _react2.default.createElement(_FlatButton2.default, { label: 'Reduce', onTouchTap: this.handleReduce })
          )
        )
      );
    }
  }]);

  return MaterialAppExampleCard;
}(_react2.default.Component);

exports.default = MaterialAppExampleCard;
