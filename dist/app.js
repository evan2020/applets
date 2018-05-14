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
      pages: ['pages/index', 'pages/details/details', 'pages/log', 'pages/info'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      subPackages: [{
        root: 'appletsA',
        pages: ['pages/index/index', 'pages/text/text', 'pages/details/520', 'pages/details/duanwu', 'pages/details/father', 'pages/details/iloveyou', 'pages/details/child']
      }, {
        root: 'appletsB',
        pages: ['pages/index/index', 'pages/text/text']
      }],
      tabBar: {
        list: [{
          pagePath: 'pages/index',
          text: '首页',
          selectedColor: 'red',
          iconPath: '/imgs/tab/tabRouse.png',
          selectedIconPath: '/imgs/tab/tabRouse.png'
        }, {
          pagePath: 'pages/info',
          text: '信息',
          selectedColor: 'red',
          iconPath: '/imgs/tab/email4.png',
          selectedIconPath: '/imgs/tab/email4.png'
          // {
          //   pagePath: 'pages/log',
          //   text: '日志',
          //   iconPath: '/icon/flash.png',
          //   selectedIconPath: '/icon/flash.png'
          // }
        }]
      }
    }, _this.globalData = {
      userInfo: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      // 引入知晓云SDK
      require('./utils/sdk-v1.4.0.js');

      // 初始化 SDK
      var clientID = 'cce6a2162b2331556486';
      wx.BaaS.init(clientID);

      //   设置强制更新
      console.log('强制更新');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJzdWJQYWNrYWdlcyIsInJvb3QiLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0Iiwic2VsZWN0ZWRDb2xvciIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInJlcXVpcmUiLCJjbGllbnRJRCIsInd4IiwiQmFhUyIsImluaXQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlTWFuYWdlciIsImdldFVwZGF0ZU1hbmFnZXIiLCJvbkNoZWNrRm9yVXBkYXRlIiwicmVzIiwiaGFzVXBkYXRlIiwib25VcGRhdGVSZWFkeSIsImFwcGx5VXBkYXRlIiwib25VcGRhdGVGYWlsZWQiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswTEFHRUEsTSxHQUFTO0FBQ1BDLGFBQU8sQ0FBQyxhQUFELEVBQWdCLHVCQUFoQixFQUF5QyxXQUF6QyxFQUFzRCxZQUF0RCxDQURBO0FBRVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FGRDtBQVFQQyxtQkFBYSxDQUNYO0FBQ0VDLGNBQU0sVUFEUjtBQUVFUCxlQUFPLENBQ0wsbUJBREssRUFFTCxpQkFGSyxFQUdMLG1CQUhLLEVBSUwsc0JBSkssRUFLTCxzQkFMSyxFQU1MLHdCQU5LLEVBT0wscUJBUEs7QUFGVCxPQURXLEVBYVg7QUFDRU8sY0FBTSxVQURSO0FBRUVQLGVBQU8sQ0FBQyxtQkFBRCxFQUFzQixpQkFBdEI7QUFGVCxPQWJXLENBUk47QUEwQlBRLGNBQVE7QUFDTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLGFBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyx5QkFBZSxLQUhqQjtBQUlFQyxvQkFBVSx3QkFKWjtBQUtFQyw0QkFBa0I7QUFMcEIsU0FESSxFQVFKO0FBQ0VKLG9CQUFVLFlBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyx5QkFBZSxLQUhqQjtBQUlFQyxvQkFBVSxzQkFKWjtBQUtFQyw0QkFBa0I7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsU0FSSTtBQURBO0FBMUJELEssUUFvRFRDLFUsR0FBYTtBQUNYQyxnQkFBVTtBQURDLEs7Ozs7OytCQUlGO0FBQ1Q7QUFDQUMsY0FBUSx1QkFBUjs7QUFFQTtBQUNBLFVBQUlDLFdBQVcsc0JBQWY7QUFDQUMsU0FBR0MsSUFBSCxDQUFRQyxJQUFSLENBQWFILFFBQWI7O0FBRUE7QUFDQUksY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDQSxVQUFNQyxnQkFBZ0JMLEdBQUdNLGdCQUFILEVBQXRCOztBQUVBRCxvQkFBY0UsZ0JBQWQsQ0FBK0IsVUFBU0MsR0FBVCxFQUFjO0FBQzNDO0FBQ0FMLGdCQUFRQyxHQUFSLENBQVlJLElBQUlDLFNBQWhCO0FBQ0QsT0FIRDs7QUFLQUosb0JBQWNLLGFBQWQsQ0FBNEIsWUFBVztBQUNyQztBQUNBTCxzQkFBY00sV0FBZDtBQUNELE9BSEQ7O0FBS0FOLG9CQUFjTyxjQUFkLENBQTZCLFlBQVc7QUFDdEM7QUFDRCxPQUZEO0FBR0Q7Ozs7RUFsRjBCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFsncGFnZXMvaW5kZXgnLCAncGFnZXMvZGV0YWlscy9kZXRhaWxzJywgJ3BhZ2VzL2xvZycsICdwYWdlcy9pbmZvJ10sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfSxcbiAgICBzdWJQYWNrYWdlczogW1xuICAgICAge1xuICAgICAgICByb290OiAnYXBwbGV0c0EnLFxuICAgICAgICBwYWdlczogW1xuICAgICAgICAgICdwYWdlcy9pbmRleC9pbmRleCcsXG4gICAgICAgICAgJ3BhZ2VzL3RleHQvdGV4dCcsXG4gICAgICAgICAgJ3BhZ2VzL2RldGFpbHMvNTIwJyxcbiAgICAgICAgICAncGFnZXMvZGV0YWlscy9kdWFud3UnLFxuICAgICAgICAgICdwYWdlcy9kZXRhaWxzL2ZhdGhlcicsXG4gICAgICAgICAgJ3BhZ2VzL2RldGFpbHMvaWxvdmV5b3UnLFxuICAgICAgICAgICdwYWdlcy9kZXRhaWxzL2NoaWxkJyxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm9vdDogJ2FwcGxldHNCJyxcbiAgICAgICAgcGFnZXM6IFsncGFnZXMvaW5kZXgvaW5kZXgnLCAncGFnZXMvdGV4dC90ZXh0J11cbiAgICAgIH1cbiAgICBdLFxuICAgIHRhYkJhcjoge1xuICAgICAgbGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+mmlumhtScsXG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgaWNvblBhdGg6ICcvaW1ncy90YWIvdGFiUm91c2UucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnL2ltZ3MvdGFiL3RhYlJvdXNlLnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5mbycsXG4gICAgICAgICAgdGV4dDogJ+S/oeaBrycsXG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgaWNvblBhdGg6ICcvaW1ncy90YWIvZW1haWw0LnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy9pbWdzL3RhYi9lbWFpbDQucG5nJ1xuICAgICAgICB9XG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBwYWdlUGF0aDogJ3BhZ2VzL2xvZycsXG4gICAgICAgIC8vICAgdGV4dDogJ+aXpeW/lycsXG4gICAgICAgIC8vICAgaWNvblBhdGg6ICcvaWNvbi9mbGFzaC5wbmcnLFxuICAgICAgICAvLyAgIHNlbGVjdGVkSWNvblBhdGg6ICcvaWNvbi9mbGFzaC5wbmcnXG4gICAgICAgIC8vIH1cbiAgICAgIF1cbiAgICB9XG4gIH07XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9O1xuXG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOW8leWFpeefpeaZk+S6kVNES1xuICAgIHJlcXVpcmUoJy4vdXRpbHMvc2RrLXYxLjQuMC5qcycpO1xuXG4gICAgLy8g5Yid5aeL5YyWIFNES1xuICAgIGxldCBjbGllbnRJRCA9ICdjY2U2YTIxNjJiMjMzMTU1NjQ4Nic7XG4gICAgd3guQmFhUy5pbml0KGNsaWVudElEKTtcblxuICAgIC8vICAg6K6+572u5by65Yi25pu05pawXG4gICAgY29uc29sZS5sb2coJ+W8uuWItuabtOaWsCcpO1xuICAgIGNvbnN0IHVwZGF0ZU1hbmFnZXIgPSB3eC5nZXRVcGRhdGVNYW5hZ2VyKCk7XG5cbiAgICB1cGRhdGVNYW5hZ2VyLm9uQ2hlY2tGb3JVcGRhdGUoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAvLyDor7fmsYLlrozmlrDniYjmnKzkv6Hmga/nmoTlm57osINcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5oYXNVcGRhdGUpO1xuICAgIH0pO1xuXG4gICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZVJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgLy8g5paw55qE54mI5pys5bey57uP5LiL6L295aW977yM6LCD55SoIGFwcGx5VXBkYXRlIOW6lOeUqOaWsOeJiOacrOW5tumHjeWQr1xuICAgICAgdXBkYXRlTWFuYWdlci5hcHBseVVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZUZhaWxlZChmdW5jdGlvbigpIHtcbiAgICAgIC8vIOaWsOeahOeJiOacrOS4i+i9veWksei0pVxuICAgIH0pO1xuICB9XG59XG4iXX0=