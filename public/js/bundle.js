(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _reactDom = require('react-dom');

var _routes = require('./startup/client/routes.jsx');

(0, _reactDom.render)((0, _routes.renderRoutes)(), document.getElementById('app'));

},{"./startup/client/routes.jsx":2,"react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderRoutes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('../../ui/layouts/App.jsx');

var _App2 = _interopRequireDefault(_App);

var _Tasks = require('../../ui/pages/Tasks.jsx');

var _Tasks2 = _interopRequireDefault(_Tasks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderRoutes = exports.renderRoutes = function renderRoutes() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _App2.default },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _Tasks2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/dashboard', component: _Tasks2.default })
    )
  );
};

},{"../../ui/layouts/App.jsx":10,"../../ui/pages/Tasks.jsx":11,"react":"react","react-router":"react-router"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  var navDrawerOpen = { nav_drawer_open: props.navDrawerOpen };
  var toggleNavDrawerProps = {
    className: (0, _classnames2.default)('app_menu_item', 'toggle_nav_drawer', [navDrawerOpen]),
    onClick: props.toggleNavDrawer
  };

  return _react2.default.createElement(
    'header',
    { className: 'app_header' },
    _react2.default.createElement(
      'a',
      toggleNavDrawerProps,
      _react2.default.createElement(
        'i',
        { className: 'material-icons' },
        'menu'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'header_title' },
      '[Project Title]'
    )
  );
};

Header.propTypes = {
  navDrawerOpen: _react2.default.PropTypes.bool.isRequired,
  toggleNavDrawer: _react2.default.PropTypes.func.isRequired
};

exports.default = Header;

},{"classnames":"classnames","react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _NavigationItems = require('./NavigationItems.jsx');

var _NavigationItems2 = _interopRequireDefault(_NavigationItems);

var _NavigationItem = require('./NavigationItem.jsx');

var _NavigationItem2 = _interopRequireDefault(_NavigationItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationDrawer = function NavigationDrawer(props) {
  var navScreenClasses = (0, _classnames2.default)('nav_screen', { nav_drawer_open: props.open });
  var navDrawerClasses = (0, _classnames2.default)('nav_drawer', { nav_drawer_open: props.open });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('div', { className: navScreenClasses, onClick: props.toggleNavDrawer }),
    _react2.default.createElement(
      'div',
      { className: navDrawerClasses },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'app_title' },
          _react2.default.createElement(
            'h1',
            null,
            'LogApp'
          ),
          _react2.default.createElement(
            'a',
            { className: 'close_nav_drawer', onClick: props.toggleNavDrawer },
            _react2.default.createElement(
              'i',
              { className: 'material-icons' },
              'close'
            )
          )
        ),
        _react2.default.createElement(
          _NavigationItems2.default,
          null,
          _react2.default.createElement(
            _NavigationItem2.default,
            { title: 'Username', icon: 'arrow_drop_down' },
            _react2.default.createElement(
              _NavigationItems2.default,
              { secondary: true },
              _react2.default.createElement(_NavigationItem2.default, { title: 'Account', icon: 'account_circle', secondary: true, to: '/account' }),
              _react2.default.createElement(_NavigationItem2.default, { title: 'Sign Out', icon: 'lock', secondary: true, to: '/signout' })
            )
          ),
          _react2.default.createElement(_NavigationItem2.default, { title: 'Dashboard', icon: 'assessment', to: '/dashboard' }),
          _react2.default.createElement(_NavigationItem2.default, { title: 'Projects', icon: 'assignment', to: '/projects' }),
          _react2.default.createElement(_NavigationItem2.default, { title: 'Invoices', icon: 'payment', to: '/invoices' }),
          _react2.default.createElement(_NavigationItem2.default, { empty: true }),
          _react2.default.createElement(_NavigationItem2.default, { title: 'Settings', icon: 'settings', to: '/settings' })
        )
      )
    )
  );
};

NavigationDrawer.propTypes = {
  open: _react2.default.PropTypes.bool,
  toggleNavDrawer: _react2.default.PropTypes.func.isRequired
};

exports.default = NavigationDrawer;

},{"./NavigationItem.jsx":5,"./NavigationItems.jsx":6,"classnames":"classnames","react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationItem = function (_React$Component) {
  _inherits(NavigationItem, _React$Component);

  function NavigationItem(props) {
    _classCallCheck(this, NavigationItem);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NavigationItem).call(this, props));

    _this.state = {
      subItemsOpen: false
    };

    _this.toggleSubItems = _this.toggleSubItems.bind(_this);
    return _this;
  }

  _createClass(NavigationItem, [{
    key: 'toggleSubItems',
    value: function toggleSubItems() {
      var subItemsOpen = this.state.subItemsOpen;

      subItemsOpen = !subItemsOpen;
      this.setState({ subItemsOpen: subItemsOpen });
    }
  }, {
    key: 'renderNavigationItem',
    value: function renderNavigationItem() {
      var children = this.props.children;


      return _react2.default.createElement(
        'div',
        null,
        !!children ? this.renderItemWithSubItems() : this.renderItem()
      );
    }
  }, {
    key: 'renderItemWithSubItems',
    value: function renderItemWithSubItems() {
      var itemClass = (0, _classnames2.default)('nav_item', { secondary: !!this.props.secondary });
      var subItemsClass = (0, _classnames2.default)('sub_nav_items', { open: !!this.state.subItemsOpen });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { className: itemClass, onClick: this.toggleSubItems },
          _react2.default.createElement(
            'span',
            null,
            this.props.title
          ),
          _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            this.props.icon
          )
        ),
        _react2.default.createElement(
          'div',
          { className: subItemsClass },
          this.props.children
        )
      );
    }
  }, {
    key: 'renderItem',
    value: function renderItem() {
      var itemClass = (0, _classnames2.default)('nav_item', { secondary: !!this.props.secondary });
      return _react2.default.createElement(
        _reactRouter.Link,
        { className: itemClass, to: this.props.to },
        _react2.default.createElement(
          'span',
          null,
          this.props.title
        ),
        _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          this.props.icon
        )
      );
    }
  }, {
    key: 'renderEmptyItem',
    value: function renderEmptyItem() {
      return _react2.default.createElement('div', { className: 'empty_nav_item' });
    }
  }, {
    key: 'render',
    value: function render() {
      return !!this.props.empty ? this.renderEmptyItem() : this.renderNavigationItem();
    }
  }]);

  return NavigationItem;
}(_react2.default.Component);

exports.default = NavigationItem;


NavigationItem.propTypes = {
  empty: _react2.default.PropTypes.bool,
  title: _react2.default.PropTypes.string,
  icon: _react2.default.PropTypes.string,
  to: _react2.default.PropTypes.string,
  secondary: _react2.default.PropTypes.bool,
  children: _react2.default.PropTypes.object
};

NavigationItem.contextTypes = {
  router: _react2.default.PropTypes.object
};

},{"classnames":"classnames","react":"react","react-router":"react-router"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationItems = function NavigationItems(props) {
  var navItemsClass = (0, _classnames2.default)('nav_items', { secondary: !!props.secondary });

  return _react2.default.createElement(
    'div',
    { className: navItemsClass },
    props.children
  );
};

NavigationItems.propTypes = {
  secondary: _react2.default.PropTypes.bool,
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.array])
};

NavigationItems.contextTypes = {
  router: _react2.default.PropTypes.object
};

exports.default = NavigationItems;

},{"classnames":"classnames","react":"react"}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewTask = function NewTask() {
  return _react2.default.createElement(
    "section",
    { className: "new_task_container" },
    _react2.default.createElement(
      "div",
      { className: "new_task" },
      _react2.default.createElement("input", { placeholder: "What are you working on?" })
    ),
    _react2.default.createElement(
      "div",
      { className: "new_task_button" },
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "new_task_button_title" },
          _react2.default.createElement(
            "i",
            { className: "material-icons" },
            "play_arrow"
          )
        )
      )
    )
  );
};

exports.default = NewTask;

},{"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = function (_React$Component) {
  _inherits(Task, _React$Component);

  function Task(props) {
    _classCallCheck(this, Task);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Task).call(this, props));

    _this.state = {
      optionsOpen: false
    };

    _this.toggleOptions = _this.toggleOptions.bind(_this);
    return _this;
  }

  _createClass(Task, [{
    key: 'toggleOptions',
    value: function toggleOptions() {
      var optionsOpen = this.state.optionsOpen;

      optionsOpen = !optionsOpen;
      this.setState({ optionsOpen: optionsOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var optionsOpen = this.state.optionsOpen;

      var optionsClass = (0, _classnames2.default)('task_options_menu', { hidden: !optionsOpen });

      return _react2.default.createElement(
        'div',
        { className: 'task_container' },
        _react2.default.createElement(
          'div',
          { className: 'task_item' },
          _react2.default.createElement(
            'div',
            { className: 'task_details' },
            _react2.default.createElement(
              'div',
              { className: 'task_title' },
              'Do some arb task'
            ),
            _react2.default.createElement(
              'div',
              { className: 'task_parameters' },
              '08/02/2016 06:45 - 08/02/2016 07:45'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'task_time_elapsed' },
            '01:00'
          ),
          _react2.default.createElement(
            'a',
            { className: 'task_options', onClick: this.toggleOptions },
            _react2.default.createElement(
              'i',
              { className: 'material-icons' },
              'more_vert'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: optionsClass },
          _react2.default.createElement('span', null),
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement(
              'i',
              { className: 'material-icons' },
              'edit'
            )
          ),
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement(
              'i',
              { className: 'material-icons' },
              'delete'
            )
          ),
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement(
              'i',
              { className: 'material-icons', onClick: this.toggleOptions },
              'close'
            )
          )
        )
      );
    }
  }]);

  return Task;
}(_react2.default.Component);

exports.default = Task;

},{"classnames":"classnames","react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Task = require('./Task.jsx');

var _Task2 = _interopRequireDefault(_Task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TaskList = function TaskList() {
  return _react2.default.createElement(
    'section',
    { className: 'task_list_container' },
    _react2.default.createElement(
      'ul',
      { className: 'task_filter' },
      _react2.default.createElement('li', null),
      _react2.default.createElement(
        'li',
        { className: 'current' },
        _react2.default.createElement(
          'a',
          null,
          'Today'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          null,
          'Previous'
        )
      )
    ),
    _react2.default.createElement(
      'ul',
      { className: 'task_list' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(_Task2.default, null)
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(_Task2.default, null)
      )
    )
  );
};

exports.default = TaskList;

},{"./Task.jsx":8,"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavigationDrawer = require('../components/navigation/NavigationDrawer.jsx');

var _NavigationDrawer2 = _interopRequireDefault(_NavigationDrawer);

var _Header = require('../components/Header.jsx');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.state = {
      navDrawerOpen: false
    };

    _this.toggleNavDrawer = _this.toggleNavDrawer.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'toggleNavDrawer',
    value: function toggleNavDrawer() {
      var navDrawerOpen = this.state.navDrawerOpen;

      navDrawerOpen = !navDrawerOpen;
      this.setState({ navDrawerOpen: navDrawerOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var navigationDrawerProps = {
        toggleNavDrawer: this.toggleNavDrawer,
        open: this.state.navDrawerOpen
      };

      var headerProps = {
        toggleNavDrawer: this.toggleNavDrawer,
        navDrawerOpen: this.state.navDrawerOpen
      };

      return _react2.default.createElement(
        'div',
        { className: 'app_body' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_NavigationDrawer2.default, navigationDrawerProps),
          _react2.default.createElement(
            'div',
            { className: 'page' },
            _react2.default.createElement(_Header2.default, headerProps),
            this.props.children
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.propTypes = {
  children: _react2.default.PropTypes.object
};

exports.default = App;

},{"../components/Header.jsx":3,"../components/navigation/NavigationDrawer.jsx":4,"react":"react"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NewTask = require('../components/tasks/NewTask.jsx');

var _NewTask2 = _interopRequireDefault(_NewTask);

var _TaskList = require('../components/tasks/TaskList.jsx');

var _TaskList2 = _interopRequireDefault(_TaskList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tasks = function Tasks() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_NewTask2.default, null),
    _react2.default.createElement(_TaskList2.default, null)
  );
};

exports.default = Tasks;

},{"../components/tasks/NewTask.jsx":7,"../components/tasks/TaskList.jsx":9,"react":"react"}]},{},[1])


//# sourceMappingURL=bundle.js.map
