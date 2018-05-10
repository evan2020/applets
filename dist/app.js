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
        pages: ['pages/index/index', 'pages/text/text']
      }, {
        root: 'appletsB',
        pages: ['pages/index/index', 'pages/text/text']
      }],
      tabBar: {
        list: [{
          pagePath: 'pages/index',
          text: '首页',
          selectedColor: 'red',
          iconPath: '/icon/jian.png',
          selectedIconPath: '/icon/jian.png'
        }, {
          pagePath: 'pages/info',
          text: '信息',
          selectedColor: 'red',
          iconPath: '/icon/dun.png',
          selectedIconPath: '/icon/dun.png'
        }, {
          pagePath: 'pages/log',
          text: '日志',
          iconPath: '/icon/flash.png',
          selectedIconPath: '/icon/flash.png'
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
      require('./utils/sdk-v1.3.0.js');

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJzdWJQYWNrYWdlcyIsInJvb3QiLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0Iiwic2VsZWN0ZWRDb2xvciIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInJlcXVpcmUiLCJjbGllbnRJRCIsInd4IiwiQmFhUyIsImluaXQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlTWFuYWdlciIsImdldFVwZGF0ZU1hbmFnZXIiLCJvbkNoZWNrRm9yVXBkYXRlIiwicmVzIiwiaGFzVXBkYXRlIiwib25VcGRhdGVSZWFkeSIsImFwcGx5VXBkYXRlIiwib25VcGRhdGVGYWlsZWQiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswTEFHRUEsTSxHQUFTO0FBQ1BDLGFBQU8sQ0FBQyxhQUFELEVBQWdCLFdBQWhCLEVBQTZCLFlBQTdCLENBREE7QUFFUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQUZEO0FBUVBDLG1CQUFhLENBQ1g7QUFDRUMsY0FBTSxVQURSO0FBRUVQLGVBQU8sQ0FBQyxtQkFBRCxFQUFzQixpQkFBdEI7QUFGVCxPQURXLEVBS1g7QUFDRU8sY0FBTSxVQURSO0FBRUVQLGVBQU8sQ0FBQyxtQkFBRCxFQUFzQixpQkFBdEI7QUFGVCxPQUxXLENBUk47QUFrQlBRLGNBQVE7QUFDTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLGFBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyx5QkFBZSxLQUhqQjtBQUlFQyxvQkFBVSxnQkFKWjtBQUtFQyw0QkFBa0I7QUFMcEIsU0FESSxFQVFKO0FBQ0VKLG9CQUFVLFlBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyx5QkFBZSxLQUhqQjtBQUlFQyxvQkFBVSxlQUpaO0FBS0VDLDRCQUFrQjtBQUxwQixTQVJJLEVBZUo7QUFDRUosb0JBQVUsV0FEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VFLG9CQUFVLGlCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQWZJO0FBREE7QUFsQkQsSyxRQTRDVEMsVSxHQUFhO0FBQ1hDLGdCQUFVO0FBREMsSzs7Ozs7K0JBSUY7QUFDVDtBQUNBQyxjQUFRLHVCQUFSOztBQUVBO0FBQ0EsVUFBSUMsV0FBVyxzQkFBZjtBQUNBQyxTQUFHQyxJQUFILENBQVFDLElBQVIsQ0FBYUgsUUFBYjs7QUFHQTtBQUNBSSxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLFVBQU1DLGdCQUFnQkwsR0FBR00sZ0JBQUgsRUFBdEI7O0FBRUFELG9CQUFjRSxnQkFBZCxDQUErQixVQUFTQyxHQUFULEVBQWM7QUFDM0M7QUFDQUwsZ0JBQVFDLEdBQVIsQ0FBWUksSUFBSUMsU0FBaEI7QUFDRCxPQUhEOztBQUtBSixvQkFBY0ssYUFBZCxDQUE0QixZQUFXO0FBQ3JDO0FBQ0FMLHNCQUFjTSxXQUFkO0FBQ0QsT0FIRDs7QUFLQU4sb0JBQWNPLGNBQWQsQ0FBNkIsWUFBVztBQUN0QztBQUNELE9BRkQ7QUFHRDs7OztFQTNFMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogWydwYWdlcy9pbmRleCcsICdwYWdlcy9sb2cnLCAncGFnZXMvaW5mbyddLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgIH0sXG4gICAgc3ViUGFja2FnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgcm9vdDogJ2FwcGxldHNBJyxcbiAgICAgICAgcGFnZXM6IFsncGFnZXMvaW5kZXgvaW5kZXgnLCAncGFnZXMvdGV4dC90ZXh0J11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJvb3Q6ICdhcHBsZXRzQicsXG4gICAgICAgIHBhZ2VzOiBbJ3BhZ2VzL2luZGV4L2luZGV4JywgJ3BhZ2VzL3RleHQvdGV4dCddXG4gICAgICB9XG4gICAgXSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5kZXgnLFxuICAgICAgICAgIHRleHQ6ICfpppbpobUnLFxuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6ICdyZWQnLFxuICAgICAgICAgIGljb25QYXRoOiAnL2ljb24vamlhbi5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcvaWNvbi9qaWFuLnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5mbycsXG4gICAgICAgICAgdGV4dDogJ+S/oeaBrycsXG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgaWNvblBhdGg6ICcvaWNvbi9kdW4ucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnL2ljb24vZHVuLnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbG9nJyxcbiAgICAgICAgICB0ZXh0OiAn5pel5b+XJyxcbiAgICAgICAgICBpY29uUGF0aDogJy9pY29uL2ZsYXNoLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy9pY29uL2ZsYXNoLnBuZydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfTtcblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH07XG5cbiAgb25MYXVuY2goKSB7XG4gICAgLy8g5byV5YWl55+l5pmT5LqRU0RLXG4gICAgcmVxdWlyZSgnLi91dGlscy9zZGstdjEuMy4wLmpzJyk7XG5cbiAgICAvLyDliJ3lp4vljJYgU0RLXG4gICAgbGV0IGNsaWVudElEID0gJ2NjZTZhMjE2MmIyMzMxNTU2NDg2JztcbiAgICB3eC5CYWFTLmluaXQoY2xpZW50SUQpO1xuXG4gICAgXG4gICAgLy8gICDorr7nva7lvLrliLbmm7TmlrBcbiAgICBjb25zb2xlLmxvZygn5by65Yi25pu05pawJyk7XG4gICAgY29uc3QgdXBkYXRlTWFuYWdlciA9IHd4LmdldFVwZGF0ZU1hbmFnZXIoKTtcblxuICAgIHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZShmdW5jdGlvbihyZXMpIHtcbiAgICAgIC8vIOivt+axguWujOaWsOeJiOacrOS/oeaBr+eahOWbnuiwg1xuICAgICAgY29uc29sZS5sb2cocmVzLmhhc1VwZGF0ZSk7XG4gICAgfSk7XG5cbiAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlUmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAvLyDmlrDnmoTniYjmnKzlt7Lnu4/kuIvovb3lpb3vvIzosIPnlKggYXBwbHlVcGRhdGUg5bqU55So5paw54mI5pys5bm26YeN5ZCvXG4gICAgICB1cGRhdGVNYW5hZ2VyLmFwcGx5VXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uKCkge1xuICAgICAgLy8g5paw55qE54mI5pys5LiL6L295aSx6LSlXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==