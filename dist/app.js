'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      subPackages: [{
        root: 'appletsA',
        pages: ['pages/index/index']
      }, {
        root: 'appletsB',
        pages: ['pages/index/index']
      }]
    }, _this.globalData = {
      userInfo: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {

      //   设置强制更新
      console.log("强制更新");
      var updateManager = wx.getUpdateManager();

      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        console.log(res.hasUpdate);
      });

      updateManager.onUpdateReady(function () {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate();
      });

      updateManager.onUpdateFailed(function () {
        // 新的版本下载失败
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJzdWJQYWNrYWdlcyIsInJvb3QiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJjb25zb2xlIiwibG9nIiwidXBkYXRlTWFuYWdlciIsInd4IiwiZ2V0VXBkYXRlTWFuYWdlciIsIm9uQ2hlY2tGb3JVcGRhdGUiLCJyZXMiLCJoYXNVcGRhdGUiLCJvblVwZGF0ZVJlYWR5IiwiYXBwbHlVcGRhdGUiLCJvblVwZGF0ZUZhaWxlZCIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBMQUdFQSxNLEdBQVM7QUFDUEMsYUFBTyxDQUFDLGFBQUQsQ0FEQTtBQUVQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BRkQ7QUFRUEMsbUJBQWEsQ0FDWDtBQUNFQyxjQUFNLFVBRFI7QUFFRVAsZUFBTyxDQUFDLG1CQUFEO0FBRlQsT0FEVyxFQUtYO0FBQ0VPLGNBQU0sVUFEUjtBQUVFUCxlQUFPLENBQUMsbUJBQUQ7QUFGVCxPQUxXO0FBUk4sSyxRQW9CVFEsVSxHQUFhO0FBQ1hDLGdCQUFVO0FBREMsSzs7Ozs7K0JBSUY7O0FBRVQ7QUFDQUMsY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDQSxVQUFNQyxnQkFBZ0JDLEdBQUdDLGdCQUFILEVBQXRCOztBQUVBRixvQkFBY0csZ0JBQWQsQ0FBK0IsVUFBU0MsR0FBVCxFQUFjO0FBQzNDO0FBQ0FOLGdCQUFRQyxHQUFSLENBQVlLLElBQUlDLFNBQWhCO0FBQ0QsT0FIRDs7QUFLQUwsb0JBQWNNLGFBQWQsQ0FBNEIsWUFBVztBQUNyQztBQUNBTixzQkFBY08sV0FBZDtBQUNELE9BSEQ7O0FBS0FQLG9CQUFjUSxjQUFkLENBQTZCLFlBQVc7QUFDdEM7QUFDRCxPQUZEO0FBR0Q7Ozs7RUE1QzBCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFsncGFnZXMvaW5kZXgnXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICB9LFxuICAgIHN1YlBhY2thZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIHJvb3Q6ICdhcHBsZXRzQScsXG4gICAgICAgIHBhZ2VzOiBbJ3BhZ2VzL2luZGV4L2luZGV4J11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJvb3Q6ICdhcHBsZXRzQicsXG4gICAgICAgIHBhZ2VzOiBbJ3BhZ2VzL2luZGV4L2luZGV4J11cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9O1xuXG4gIG9uTGF1bmNoKCkge1xuXG4gICAgLy8gICDorr7nva7lvLrliLbmm7TmlrBcbiAgICBjb25zb2xlLmxvZyhcIuW8uuWItuabtOaWsFwiKVxuICAgIGNvbnN0IHVwZGF0ZU1hbmFnZXIgPSB3eC5nZXRVcGRhdGVNYW5hZ2VyKCk7XG5cbiAgICB1cGRhdGVNYW5hZ2VyLm9uQ2hlY2tGb3JVcGRhdGUoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAvLyDor7fmsYLlrozmlrDniYjmnKzkv6Hmga/nmoTlm57osINcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5oYXNVcGRhdGUpO1xuICAgIH0pO1xuXG4gICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZVJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgLy8g5paw55qE54mI5pys5bey57uP5LiL6L295aW977yM6LCD55SoIGFwcGx5VXBkYXRlIOW6lOeUqOaWsOeJiOacrOW5tumHjeWQr1xuICAgICAgdXBkYXRlTWFuYWdlci5hcHBseVVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZUZhaWxlZChmdW5jdGlvbigpIHtcbiAgICAgIC8vIOaWsOeahOeJiOacrOS4i+i9veWksei0pVxuICAgIH0pO1xuICB9XG59XG4iXX0=