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
      pages: ['pages/index', 'pages/log', 'pages/info'],
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
      }],
      tabBar: {
        list: [{
          "pagePath": "pages/index",
          "text": "首页",
          "selectedColor": "red",
          "iconPath": "/icon/jian.png",
          "selectedIconPath": "/icon/jian.png"
        }, {
          "pagePath": "pages/info",
          "text": "信息",
          "selectedColor": "red",
          "iconPath": "/icon/dun.png",
          "selectedIconPath": "/icon/dun.png"
        }, {
          "pagePath": "pages/log",
          "text": "日志",
          "iconPath": "/icon/flash.png",
          "selectedIconPath": "/icon/flash.png"
        }]
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJzdWJQYWNrYWdlcyIsInJvb3QiLCJ0YWJCYXIiLCJsaXN0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZU1hbmFnZXIiLCJ3eCIsImdldFVwZGF0ZU1hbmFnZXIiLCJvbkNoZWNrRm9yVXBkYXRlIiwicmVzIiwiaGFzVXBkYXRlIiwib25VcGRhdGVSZWFkeSIsImFwcGx5VXBkYXRlIiwib25VcGRhdGVGYWlsZWQiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswTEFHRUEsTSxHQUFTO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsV0FGSyxFQUdMLFlBSEssQ0FEQTtBQU1QQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BTkQ7QUFZUEMsbUJBQWEsQ0FDWDtBQUNFQyxjQUFNLFVBRFI7QUFFRVAsZUFBTyxDQUFDLG1CQUFEO0FBRlQsT0FEVyxFQUtYO0FBQ0VPLGNBQU0sVUFEUjtBQUVFUCxlQUFPLENBQUMsbUJBQUQ7QUFGVCxPQUxXLENBWk47QUFzQlBRLGNBQVE7QUFDUkMsY0FBTSxDQUNKO0FBQ0Usc0JBQVksYUFEZDtBQUVFLGtCQUFRLElBRlY7QUFHRSwyQkFBZ0IsS0FIbEI7QUFJRSxzQkFBWSxnQkFKZDtBQUtFLDhCQUFtQjtBQUxyQixTQURJLEVBUUo7QUFDRSxzQkFBWSxZQURkO0FBRUUsa0JBQVEsSUFGVjtBQUdFLDJCQUFnQixLQUhsQjtBQUlFLHNCQUFZLGVBSmQ7QUFLRSw4QkFBbUI7QUFMckIsU0FSSSxFQWVKO0FBQ0Usc0JBQVksV0FEZDtBQUVFLGtCQUFRLElBRlY7QUFHRSxzQkFBVyxpQkFIYjtBQUlFLDhCQUFvQjtBQUp0QixTQWZJO0FBREU7QUF0QkQsSyxRQWdEVEMsVSxHQUFhO0FBQ1hDLGdCQUFVO0FBREMsSzs7Ozs7K0JBSUY7O0FBRVQ7QUFDQUMsY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDQSxVQUFNQyxnQkFBZ0JDLEdBQUdDLGdCQUFILEVBQXRCOztBQUVBRixvQkFBY0csZ0JBQWQsQ0FBK0IsVUFBU0MsR0FBVCxFQUFjO0FBQzNDO0FBQ0FOLGdCQUFRQyxHQUFSLENBQVlLLElBQUlDLFNBQWhCO0FBQ0QsT0FIRDs7QUFLQUwsb0JBQWNNLGFBQWQsQ0FBNEIsWUFBVztBQUNyQztBQUNBTixzQkFBY08sV0FBZDtBQUNELE9BSEQ7O0FBS0FQLG9CQUFjUSxjQUFkLENBQTZCLFlBQVc7QUFDdEM7QUFDRCxPQUZEO0FBR0Q7Ozs7RUF4RTBCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9pbmRleCcsXG4gICAgICAncGFnZXMvbG9nJyxcbiAgICAgICdwYWdlcy9pbmZvJ1xuICAgICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICB9LFxuICAgIHN1YlBhY2thZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIHJvb3Q6ICdhcHBsZXRzQScsXG4gICAgICAgIHBhZ2VzOiBbJ3BhZ2VzL2luZGV4L2luZGV4J11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJvb3Q6ICdhcHBsZXRzQicsXG4gICAgICAgIHBhZ2VzOiBbJ3BhZ2VzL2luZGV4L2luZGV4J11cbiAgICAgIH1cbiAgICBdLFxuICAgIHRhYkJhcjoge1xuICAgIGxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2luZGV4XCIsXG4gICAgICAgIFwidGV4dFwiOiBcIummlumhtVwiLFxuICAgICAgICBcInNlbGVjdGVkQ29sb3JcIjpcInJlZFwiLFxuICAgICAgICBcImljb25QYXRoXCI6IFwiL2ljb24vamlhbi5wbmdcIixcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6XCIvaWNvbi9qaWFuLnBuZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvaW5mb1wiLFxuICAgICAgICBcInRleHRcIjogXCLkv6Hmga9cIixcbiAgICAgICAgXCJzZWxlY3RlZENvbG9yXCI6XCJyZWRcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcIi9pY29uL2R1bi5wbmdcIixcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6XCIvaWNvbi9kdW4ucG5nXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9sb2dcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5pel5b+XXCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjpcIi9pY29uL2ZsYXNoLnBuZ1wiLFxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCIvaWNvbi9mbGFzaC5wbmdcIlxuICAgICAgfVxuICAgIF1cbiAgfVxuICB9O1xuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfTtcblxuICBvbkxhdW5jaCgpIHtcblxuICAgIC8vICAg6K6+572u5by65Yi25pu05pawXG4gICAgY29uc29sZS5sb2coXCLlvLrliLbmm7TmlrBcIilcbiAgICBjb25zdCB1cGRhdGVNYW5hZ2VyID0gd3guZ2V0VXBkYXRlTWFuYWdlcigpO1xuXG4gICAgdXBkYXRlTWFuYWdlci5vbkNoZWNrRm9yVXBkYXRlKGZ1bmN0aW9uKHJlcykge1xuICAgICAgLy8g6K+35rGC5a6M5paw54mI5pys5L+h5oGv55qE5Zue6LCDXG4gICAgICBjb25zb2xlLmxvZyhyZXMuaGFzVXBkYXRlKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeShmdW5jdGlvbigpIHtcbiAgICAgIC8vIOaWsOeahOeJiOacrOW3sue7j+S4i+i9veWlve+8jOiwg+eUqCBhcHBseVVwZGF0ZSDlupTnlKjmlrDniYjmnKzlubbph43lkK9cbiAgICAgIHVwZGF0ZU1hbmFnZXIuYXBwbHlVcGRhdGUoKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVGYWlsZWQoZnVuY3Rpb24oKSB7XG4gICAgICAvLyDmlrDnmoTniYjmnKzkuIvovb3lpLHotKVcbiAgICB9KTtcbiAgfVxufVxuIl19