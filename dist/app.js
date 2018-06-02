'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        pages: ['pages/index/index', //首页
        'pages/text/text', //留言页面
        'pages/details/520', //520贺卡
        'pages/details/duanwu', //端午节贺卡
        'pages/details/father', //父亲节贺卡
        'pages/details/iloveyou', //七夕贺卡
        'pages/details/child', //儿童节贺卡
        'pages/details/birthday', //生日贺卡
        'pages/details/remember', //纪念日
        'pages/video/index', //毕业季
        'pages/video/drawing', //手绘
        'pages/web/hello' //H5页面
        ]
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
    key: 'diyEvant',
    value: function diyEvant() {
      var self = this;
      console.log('\u81EA\u5B9A\u4E49\u6570\u636E\u4E0A\u62A5');
      var SystemInfo = {};
      // 获取系统信息
      wx.getSystemInfo({
        success: function success(res) {
          SystemInfo = _extends({}, res);
          // console.log(SystemInfo);
        }
      });
      // 获取网络类型。
      wx.getNetworkType({
        success: function success(res) {
          // 返回网络类型, 有效值：
          // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
          var networkType = res.networkType;
          SystemInfo.networkType = networkType;
          // console.log(res.networkType);
        }
      });
      // 获取剪切板内容
      wx.getClipboardData({
        success: function success(res) {
          // console.log(res.data);
          SystemInfo.ClipboardData = res.data;
        }
      });

      // 获取屏幕亮度
      wx.getScreenBrightness({
        success: function success(res) {
          // console.log(res.value);
          SystemInfo.ScreenBrightness = res.value;
        }
      });

      // 判断当前设备是否支持 HCE 能力。
      wx.getHCEState({
        success: function success(res) {
          // console.log(res);
          SystemInfo.HCEState = res;
        },
        fail: function fail(err) {
          // console.log(err);
        }
      });
      // 获取已连接中的 Wi-Fi 信息
      wx.getConnectedWifi({
        success: function success(res) {
          // console.log(res.wifi);
          SystemInfo.wifi = res.wifi;
        },
        fail: function fail(err) {
          // console.log(err);
        }
      });
      setTimeout(function () {
        console.log('sys', SystemInfo);
        wx.reportAnalytics('user_info_one', {
          brand: SystemInfo.brand,
          model: SystemInfo.model,
          pixelratio: SystemInfo.pixelRatio,
          screenwidth: SystemInfo.screenWidth,
          screenheight: SystemInfo.screenHeight,
          windowwidth: SystemInfo.windowWidth,
          windowheight: SystemInfo.windowHeight,
          language: SystemInfo.language,
          version: SystemInfo.version,
          system: SystemInfo.system,
          platform: SystemInfo.platform,
          fontsizesetting: SystemInfo.fontSizeSetting,
          sdkversion: SystemInfo.SDKVersion,
          networktype: SystemInfo.networkType,
          clipboarddata: SystemInfo.ClipboardData,
          screenbrightness: SystemInfo.ScreenBrightness,
          hcestate: SystemInfo.HCEState,
          wifi: SystemInfo.wifi
        });
      }, 1000);
    }
  }, {
    key: 'onLaunch',
    value: function onLaunch() {
      var self = this;

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

      // 监听用户截屏
      wx.onUserCaptureScreen(function (res) {
        console.log('用户截屏了');
      });

      // 设置自定义数据上报
      self.diyEvant();
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJzdWJQYWNrYWdlcyIsInJvb3QiLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0Iiwic2VsZWN0ZWRDb2xvciIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiU3lzdGVtSW5mbyIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJnZXROZXR3b3JrVHlwZSIsIm5ldHdvcmtUeXBlIiwiZ2V0Q2xpcGJvYXJkRGF0YSIsIkNsaXBib2FyZERhdGEiLCJkYXRhIiwiZ2V0U2NyZWVuQnJpZ2h0bmVzcyIsIlNjcmVlbkJyaWdodG5lc3MiLCJ2YWx1ZSIsImdldEhDRVN0YXRlIiwiSENFU3RhdGUiLCJmYWlsIiwiZXJyIiwiZ2V0Q29ubmVjdGVkV2lmaSIsIndpZmkiLCJzZXRUaW1lb3V0IiwicmVwb3J0QW5hbHl0aWNzIiwiYnJhbmQiLCJtb2RlbCIsInBpeGVscmF0aW8iLCJwaXhlbFJhdGlvIiwic2NyZWVud2lkdGgiLCJzY3JlZW5XaWR0aCIsInNjcmVlbmhlaWdodCIsInNjcmVlbkhlaWdodCIsIndpbmRvd3dpZHRoIiwid2luZG93V2lkdGgiLCJ3aW5kb3doZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJsYW5ndWFnZSIsInZlcnNpb24iLCJzeXN0ZW0iLCJwbGF0Zm9ybSIsImZvbnRzaXplc2V0dGluZyIsImZvbnRTaXplU2V0dGluZyIsInNka3ZlcnNpb24iLCJTREtWZXJzaW9uIiwibmV0d29ya3R5cGUiLCJjbGlwYm9hcmRkYXRhIiwic2NyZWVuYnJpZ2h0bmVzcyIsImhjZXN0YXRlIiwicmVxdWlyZSIsImNsaWVudElEIiwiQmFhUyIsImluaXQiLCJ1cGRhdGVNYW5hZ2VyIiwiZ2V0VXBkYXRlTWFuYWdlciIsIm9uQ2hlY2tGb3JVcGRhdGUiLCJoYXNVcGRhdGUiLCJvblVwZGF0ZVJlYWR5IiwiYXBwbHlVcGRhdGUiLCJvblVwZGF0ZUZhaWxlZCIsIm9uVXNlckNhcHR1cmVTY3JlZW4iLCJkaXlFdmFudCIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MExBR0VBLE0sR0FBUztBQUNQQyxhQUFPLENBQUMsYUFBRCxFQUFnQix1QkFBaEIsRUFBeUMsV0FBekMsRUFBc0QsWUFBdEQsQ0FEQTtBQUVQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BRkQ7QUFRUEMsbUJBQWEsQ0FDWDtBQUNFQyxjQUFNLFVBRFI7QUFFRVAsZUFBTyxDQUNMLG1CQURLLEVBQ2dCO0FBQ3JCLHlCQUZLLEVBRWM7QUFDbkIsMkJBSEssRUFHZ0I7QUFDckIsOEJBSkssRUFJbUI7QUFDeEIsOEJBTEssRUFLbUI7QUFDeEIsZ0NBTkssRUFNcUI7QUFDMUIsNkJBUEssRUFPa0I7QUFDdkIsZ0NBUkssRUFRcUI7QUFDMUIsZ0NBVEssRUFTcUI7QUFDMUIsMkJBVkssRUFVZ0I7QUFDckIsNkJBWEssRUFXa0I7QUFDdkIseUJBWkssQ0FZYTtBQVpiO0FBRlQsT0FEVyxFQWtCWDtBQUNFTyxjQUFNLFVBRFI7QUFFRVAsZUFBTyxDQUFDLG1CQUFELEVBQXNCLGlCQUF0QjtBQUZULE9BbEJXLENBUk47QUErQlBRLGNBQVE7QUFDTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLGFBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyx5QkFBZSxLQUhqQjtBQUlFQyxvQkFBVSx3QkFKWjtBQUtFQyw0QkFBa0I7QUFMcEIsU0FESSxFQVFKO0FBQ0VK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QUNBaEQsY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDQSxVQUFNa0QsZ0JBQWdCaEQsR0FBR2lELGdCQUFILEVBQXRCOztBQUVBRCxvQkFBY0UsZ0JBQWQsQ0FBK0IsVUFBUy9DLEdBQVQsRUFBYztBQUMzQztBQUNBTixnQkFBUUMsR0FBUixDQUFZSyxJQUFJZ0QsU0FBaEI7QUFDRCxPQUhEOztBQUtBSCxvQkFBY0ksYUFBZCxDQUE0QixZQUFXO0FBQ3JDO0FBQ0FKLHNCQUFjSyxXQUFkO0FBQ0QsT0FIRDs7QUFLQUwsb0JBQWNNLGNBQWQsQ0FBNkIsWUFBVztBQUN0QztBQUNELE9BRkQ7O0FBSUE7QUFDQXRELFNBQUd1RCxtQkFBSCxDQUF1QixVQUFTcEQsR0FBVCxFQUFjO0FBQ25DTixnQkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDRCxPQUZEOztBQUlBO0FBQ0FGLFdBQUs0RCxRQUFMO0FBQ0Q7Ozs7RUFuTDBCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFsncGFnZXMvaW5kZXgnLCAncGFnZXMvZGV0YWlscy9kZXRhaWxzJywgJ3BhZ2VzL2xvZycsICdwYWdlcy9pbmZvJ10sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfSxcbiAgICBzdWJQYWNrYWdlczogW1xuICAgICAge1xuICAgICAgICByb290OiAnYXBwbGV0c0EnLFxuICAgICAgICBwYWdlczogW1xuICAgICAgICAgICdwYWdlcy9pbmRleC9pbmRleCcsIC8v6aaW6aG1XG4gICAgICAgICAgJ3BhZ2VzL3RleHQvdGV4dCcsIC8v55WZ6KiA6aG16Z2iXG4gICAgICAgICAgJ3BhZ2VzL2RldGFpbHMvNTIwJywgLy81MjDotLrljaFcbiAgICAgICAgICAncGFnZXMvZGV0YWlscy9kdWFud3UnLCAvL+err+WNiOiKgui0uuWNoVxuICAgICAgICAgICdwYWdlcy9kZXRhaWxzL2ZhdGhlcicsIC8v54i25Lqy6IqC6LS65Y2hXG4gICAgICAgICAgJ3BhZ2VzL2RldGFpbHMvaWxvdmV5b3UnLCAvL+S4g+Wklei0uuWNoVxuICAgICAgICAgICdwYWdlcy9kZXRhaWxzL2NoaWxkJywgLy/lhL/nq6XoioLotLrljaFcbiAgICAgICAgICAncGFnZXMvZGV0YWlscy9iaXJ0aGRheScsIC8v55Sf5pel6LS65Y2hXG4gICAgICAgICAgJ3BhZ2VzL2RldGFpbHMvcmVtZW1iZXInLCAvL+e6quW/teaXpVxuICAgICAgICAgICdwYWdlcy92aWRlby9pbmRleCcsIC8v5q+V5Lia5a2jXG4gICAgICAgICAgJ3BhZ2VzL3ZpZGVvL2RyYXdpbmcnLCAvL+aJi+e7mFxuICAgICAgICAgICdwYWdlcy93ZWIvaGVsbG8nIC8vSDXpobXpnaJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm9vdDogJ2FwcGxldHNCJyxcbiAgICAgICAgcGFnZXM6IFsncGFnZXMvaW5kZXgvaW5kZXgnLCAncGFnZXMvdGV4dC90ZXh0J11cbiAgICAgIH1cbiAgICBdLFxuICAgIHRhYkJhcjoge1xuICAgICAgbGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+mmlumhtScsXG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgaWNvblBhdGg6ICcvaW1ncy90YWIvdGFiUm91c2UucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnL2ltZ3MvdGFiL3RhYlJvdXNlLnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5mbycsXG4gICAgICAgICAgdGV4dDogJ+S/oeaBrycsXG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgaWNvblBhdGg6ICcvaW1ncy90YWIvZW1haWw0LnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy9pbWdzL3RhYi9lbWFpbDQucG5nJ1xuICAgICAgICB9XG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBwYWdlUGF0aDogJ3BhZ2VzL2xvZycsXG4gICAgICAgIC8vICAgdGV4dDogJ+aXpeW/lycsXG4gICAgICAgIC8vICAgaWNvblBhdGg6ICcvaWNvbi9mbGFzaC5wbmcnLFxuICAgICAgICAvLyAgIHNlbGVjdGVkSWNvblBhdGg6ICcvaWNvbi9mbGFzaC5wbmcnXG4gICAgICAgIC8vIH1cbiAgICAgIF1cbiAgICB9XG4gIH07XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9O1xuXG4gIGRpeUV2YW50KCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBjb25zb2xlLmxvZyhg6Ieq5a6a5LmJ5pWw5o2u5LiK5oqlYCk7XG4gICAgbGV0IFN5c3RlbUluZm8gPSB7fTtcbiAgICAvLyDojrflj5bns7vnu5/kv6Hmga9cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBTeXN0ZW1JbmZvID0geyAuLi5yZXMgfTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coU3lzdGVtSW5mbyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8g6I635Y+W572R57uc57G75Z6L44CCXG4gICAgd3guZ2V0TmV0d29ya1R5cGUoe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi/lOWbnue9kee7nOexu+Weiywg5pyJ5pWI5YC877yaXG4gICAgICAgIC8vIHdpZmkvMmcvM2cvNGcvdW5rbm93bihBbmRyb2lk5LiL5LiN5bi46KeB55qE572R57uc57G75Z6LKS9ub25lKOaXoOe9kee7nClcbiAgICAgICAgbGV0IG5ldHdvcmtUeXBlID0gcmVzLm5ldHdvcmtUeXBlO1xuICAgICAgICBTeXN0ZW1JbmZvLm5ldHdvcmtUeXBlID0gbmV0d29ya1R5cGU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5uZXR3b3JrVHlwZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8g6I635Y+W5Ymq5YiH5p2/5YaF5a65XG4gICAgd3guZ2V0Q2xpcGJvYXJkRGF0YSh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICBTeXN0ZW1JbmZvLkNsaXBib2FyZERhdGEgPSByZXMuZGF0YTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIOiOt+WPluWxj+W5leS6ruW6plxuICAgIHd4LmdldFNjcmVlbkJyaWdodG5lc3Moe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy52YWx1ZSk7XG4gICAgICAgIFN5c3RlbUluZm8uU2NyZWVuQnJpZ2h0bmVzcyA9IHJlcy52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIOWIpOaWreW9k+WJjeiuvuWkh+aYr+WQpuaUr+aMgSBIQ0Ug6IO95Yqb44CCXG4gICAgd3guZ2V0SENFU3RhdGUoe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIFN5c3RlbUluZm8uSENFU3RhdGUgPSByZXM7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8g6I635Y+W5bey6L+e5o6l5Lit55qEIFdpLUZpIOS/oeaBr1xuICAgIHd4LmdldENvbm5lY3RlZFdpZmkoe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy53aWZpKTtcbiAgICAgICAgU3lzdGVtSW5mby53aWZpID0gcmVzLndpZmk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnc3lzJywgU3lzdGVtSW5mbyk7XG4gICAgICB3eC5yZXBvcnRBbmFseXRpY3MoJ3VzZXJfaW5mb19vbmUnLCB7XG4gICAgICAgIGJyYW5kOiBTeXN0ZW1JbmZvLmJyYW5kLFxuICAgICAgICBtb2RlbDogU3lzdGVtSW5mby5tb2RlbCxcbiAgICAgICAgcGl4ZWxyYXRpbzogU3lzdGVtSW5mby5waXhlbFJhdGlvLFxuICAgICAgICBzY3JlZW53aWR0aDogU3lzdGVtSW5mby5zY3JlZW5XaWR0aCxcbiAgICAgICAgc2NyZWVuaGVpZ2h0OiBTeXN0ZW1JbmZvLnNjcmVlbkhlaWdodCxcbiAgICAgICAgd2luZG93d2lkdGg6IFN5c3RlbUluZm8ud2luZG93V2lkdGgsXG4gICAgICAgIHdpbmRvd2hlaWdodDogU3lzdGVtSW5mby53aW5kb3dIZWlnaHQsXG4gICAgICAgIGxhbmd1YWdlOiBTeXN0ZW1JbmZvLmxhbmd1YWdlLFxuICAgICAgICB2ZXJzaW9uOiBTeXN0ZW1JbmZvLnZlcnNpb24sXG4gICAgICAgIHN5c3RlbTogU3lzdGVtSW5mby5zeXN0ZW0sXG4gICAgICAgIHBsYXRmb3JtOiBTeXN0ZW1JbmZvLnBsYXRmb3JtLFxuICAgICAgICBmb250c2l6ZXNldHRpbmc6IFN5c3RlbUluZm8uZm9udFNpemVTZXR0aW5nLFxuICAgICAgICBzZGt2ZXJzaW9uOiBTeXN0ZW1JbmZvLlNES1ZlcnNpb24sXG4gICAgICAgIG5ldHdvcmt0eXBlOiBTeXN0ZW1JbmZvLm5ldHdvcmtUeXBlLFxuICAgICAgICBjbGlwYm9hcmRkYXRhOiBTeXN0ZW1JbmZvLkNsaXBib2FyZERhdGEsXG4gICAgICAgIHNjcmVlbmJyaWdodG5lc3M6IFN5c3RlbUluZm8uU2NyZWVuQnJpZ2h0bmVzcyxcbiAgICAgICAgaGNlc3RhdGU6IFN5c3RlbUluZm8uSENFU3RhdGUsXG4gICAgICAgIHdpZmk6IFN5c3RlbUluZm8ud2lmaVxuICAgICAgfSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBvbkxhdW5jaCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyDlvJXlhaXnn6XmmZPkupFTREtcbiAgICByZXF1aXJlKCcuL3V0aWxzL3Nkay12MS40LjAuanMnKTtcblxuICAgIC8vIOWIneWni+WMliBTREtcbiAgICBsZXQgY2xpZW50SUQgPSAnY2NlNmEyMTYyYjIzMzE1NTY0ODYnO1xuICAgIHd4LkJhYVMuaW5pdChjbGllbnRJRCk7XG5cbiAgICAvLyAgIOiuvue9ruW8uuWItuabtOaWsFxuICAgIGNvbnNvbGUubG9nKCflvLrliLbmm7TmlrAnKTtcbiAgICBjb25zdCB1cGRhdGVNYW5hZ2VyID0gd3guZ2V0VXBkYXRlTWFuYWdlcigpO1xuXG4gICAgdXBkYXRlTWFuYWdlci5vbkNoZWNrRm9yVXBkYXRlKGZ1bmN0aW9uKHJlcykge1xuICAgICAgLy8g6K+35rGC5a6M5paw54mI5pys5L+h5oGv55qE5Zue6LCDXG4gICAgICBjb25zb2xlLmxvZyhyZXMuaGFzVXBkYXRlKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeShmdW5jdGlvbigpIHtcbiAgICAgIC8vIOaWsOeahOeJiOacrOW3sue7j+S4i+i9veWlve+8jOiwg+eUqCBhcHBseVVwZGF0ZSDlupTnlKjmlrDniYjmnKzlubbph43lkK9cbiAgICAgIHVwZGF0ZU1hbmFnZXIuYXBwbHlVcGRhdGUoKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVGYWlsZWQoZnVuY3Rpb24oKSB7XG4gICAgICAvLyDmlrDnmoTniYjmnKzkuIvovb3lpLHotKVcbiAgICB9KTtcblxuICAgIC8vIOebkeWQrOeUqOaIt+aIquWxj1xuICAgIHd4Lm9uVXNlckNhcHR1cmVTY3JlZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICBjb25zb2xlLmxvZygn55So5oi35oiq5bGP5LqGJyk7XG4gICAgfSk7XG5cbiAgICAvLyDorr7nva7oh6rlrprkuYnmlbDmja7kuIrmiqVcbiAgICBzZWxmLmRpeUV2YW50KCk7XG4gIH1cbn1cbiJdfQ==