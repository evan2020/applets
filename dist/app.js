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
      // 分包加载
      subPackages: [{
        // A包
        root: 'appletsA',
        pages: ['pages/index/index', //首页
        'pages/text/text', //留言页面
        'pages/details/520', //520贺卡
        'pages/details/duanwu', //端午节贺卡
        'pages/details/father', //父亲节贺卡
        'pages/details/mather', //母亲节贺卡
        'pages/details/iloveyou', //七夕贺卡
        'pages/details/child', //儿童节贺卡
        'pages/details/birthday', //生日贺卡
        'pages/details/remember', //纪念日
        'pages/video/index', //毕业季
        'pages/video/drawing', //手绘
        'pages/web/hello' //H5页面
        ]
      },
      // B包
      {
        root: 'appletsB',
        pages: ['pages/index/index', //首页
        'pages/text/text', //留言编辑
        'pages/nodata/nodata' //过期提示页面
        ]
      }],

      // 底部栏
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
        }]
      }
    }, _this.globalData = {
      userInfo: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // 全局数据


  _createClass(_default, [{
    key: 'diyEvant',


    // 自定义数据上报
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
        // console.log('sys', SystemInfo);
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
        // 截屏事件上报
        wx.reportAnalytics('capture_screen', {
          capturescreen: '1'
        });
      });

      // 设置自定义数据上报
      self.diyEvant();
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJzdWJQYWNrYWdlcyIsInJvb3QiLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0Iiwic2VsZWN0ZWRDb2xvciIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiU3lzdGVtSW5mbyIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJnZXROZXR3b3JrVHlwZSIsIm5ldHdvcmtUeXBlIiwiZ2V0Q2xpcGJvYXJkRGF0YSIsIkNsaXBib2FyZERhdGEiLCJkYXRhIiwiZ2V0U2NyZWVuQnJpZ2h0bmVzcyIsIlNjcmVlbkJyaWdodG5lc3MiLCJ2YWx1ZSIsImdldEhDRVN0YXRlIiwiSENFU3RhdGUiLCJmYWlsIiwiZXJyIiwiZ2V0Q29ubmVjdGVkV2lmaSIsIndpZmkiLCJzZXRUaW1lb3V0IiwicmVwb3J0QW5hbHl0aWNzIiwiYnJhbmQiLCJtb2RlbCIsInBpeGVscmF0aW8iLCJwaXhlbFJhdGlvIiwic2NyZWVud2lkdGgiLCJzY3JlZW5XaWR0aCIsInNjcmVlbmhlaWdodCIsInNjcmVlbkhlaWdodCIsIndpbmRvd3dpZHRoIiwid2luZG93V2lkdGgiLCJ3aW5kb3doZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJsYW5ndWFnZSIsInZlcnNpb24iLCJzeXN0ZW0iLCJwbGF0Zm9ybSIsImZvbnRzaXplc2V0dGluZyIsImZvbnRTaXplU2V0dGluZyIsInNka3ZlcnNpb24iLCJTREtWZXJzaW9uIiwibmV0d29ya3R5cGUiLCJjbGlwYm9hcmRkYXRhIiwic2NyZWVuYnJpZ2h0bmVzcyIsImhjZXN0YXRlIiwicmVxdWlyZSIsImNsaWVudElEIiwiQmFhUyIsImluaXQiLCJ1cGRhdGVNYW5hZ2VyIiwiZ2V0VXBkYXRlTWFuYWdlciIsIm9uQ2hlY2tGb3JVcGRhdGUiLCJoYXNVcGRhdGUiLCJvblVwZGF0ZVJlYWR5IiwiYXBwbHlVcGRhdGUiLCJvblVwZGF0ZUZhaWxlZCIsIm9uVXNlckNhcHR1cmVTY3JlZW4iLCJjYXB0dXJlc2NyZWVuIiwiZGl5RXZhbnQiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBMQUdFQSxNLEdBQVM7QUFDUEMsYUFBTyxDQUFDLGFBQUQsRUFBZ0IsdUJBQWhCLEVBQXlDLFdBQXpDLEVBQXNELFlBQXRELENBREE7QUFFUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQUZEO0FBUVA7QUFDQUMsbUJBQWEsQ0FDWDtBQUNFO0FBQ0FDLGNBQU0sVUFGUjtBQUdFUCxlQUFPLENBQ0wsbUJBREssRUFDZ0I7QUFDckIseUJBRkssRUFFYztBQUNuQiwyQkFISyxFQUdnQjtBQUNyQiw4QkFKSyxFQUltQjtBQUN4Qiw4QkFMSyxFQUttQjtBQUxuQixnQ0FNbUI7QUFDeEIsZ0NBUEssRUFPcUI7QUFDMUIsNkJBUkssRUFRa0I7QUFDdkIsZ0NBVEssRUFTcUI7QUFDMUIsZ0NBVkssRUFVcUI7QUFDMUIsMkJBWEssRUFXZ0I7QUFDckIsNkJBWkssRUFZa0I7QUFDdkIseUJBYkssQ0FhYTtBQWJiO0FBSFQsT0FEVztBQW9CWDtBQUNBO0FBQ0VPLGNBQU0sVUFEUjtBQUVFUCxlQUFPLENBQ0wsbUJBREssRUFDZ0I7QUFDckIseUJBRkssRUFFYztBQUNuQiw2QkFISyxDQUdpQjtBQUhqQjtBQUZULE9BckJXLENBVE47O0FBd0NQO0FBQ0FRLGNBQVE7QUFDTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLGFBRFo7QUFF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QUgsQ0FBUUMsSUFBUixDQUFhRixRQUFiOztBQUVBO0FBQ0FoRCxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLFVBQU1rRCxnQkFBZ0JoRCxHQUFHaUQsZ0JBQUgsRUFBdEI7O0FBRUFELG9CQUFjRSxnQkFBZCxDQUErQixVQUFTL0MsR0FBVCxFQUFjO0FBQzNDO0FBQ0FOLGdCQUFRQyxHQUFSLENBQVlLLElBQUlnRCxTQUFoQjtBQUNELE9BSEQ7O0FBS0FILG9CQUFjSSxhQUFkLENBQTRCLFlBQVc7QUFDckM7QUFDQUosc0JBQWNLLFdBQWQ7QUFDRCxPQUhEOztBQUtBTCxvQkFBY00sY0FBZCxDQUE2QixZQUFXO0FBQ3RDO0FBQ0QsT0FGRDs7QUFJQTtBQUNBdEQsU0FBR3VELG1CQUFILENBQXVCLFVBQVNwRCxHQUFULEVBQWM7QUFDbkNOLGdCQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBO0FBQ0FFLFdBQUdtQixlQUFILENBQW1CLGdCQUFuQixFQUFxQztBQUNuQ3FDLHlCQUFlO0FBRG9CLFNBQXJDO0FBR0QsT0FORDs7QUFRQTtBQUNBNUQsV0FBSzZELFFBQUw7QUFDRDs7OztFQTdMMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogWydwYWdlcy9pbmRleCcsICdwYWdlcy9kZXRhaWxzL2RldGFpbHMnLCAncGFnZXMvbG9nJywgJ3BhZ2VzL2luZm8nXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICB9LFxuICAgIC8vIOWIhuWMheWKoOi9vVxuICAgIHN1YlBhY2thZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIC8vIEHljIVcbiAgICAgICAgcm9vdDogJ2FwcGxldHNBJyxcbiAgICAgICAgcGFnZXM6IFtcbiAgICAgICAgICAncGFnZXMvaW5kZXgvaW5kZXgnLCAvL+mmlumhtVxuICAgICAgICAgICdwYWdlcy90ZXh0L3RleHQnLCAvL+eVmeiogOmhtemdolxuICAgICAgICAgICdwYWdlcy9kZXRhaWxzLzUyMCcsIC8vNTIw6LS65Y2hXG4gICAgICAgICAgJ3BhZ2VzL2RldGFpbHMvZHVhbnd1JywgLy/nq6/ljYjoioLotLrljaFcbiAgICAgICAgICAncGFnZXMvZGV0YWlscy9mYXRoZXInLCAvL+eItuS6suiKgui0uuWNoVxuICAgICAgICAgIGBwYWdlcy9kZXRhaWxzL21hdGhlcmAsIC8v5q+N5Lqy6IqC6LS65Y2hXG4gICAgICAgICAgJ3BhZ2VzL2RldGFpbHMvaWxvdmV5b3UnLCAvL+S4g+Wklei0uuWNoVxuICAgICAgICAgICdwYWdlcy9kZXRhaWxzL2NoaWxkJywgLy/lhL/nq6XoioLotLrljaFcbiAgICAgICAgICAncGFnZXMvZGV0YWlscy9iaXJ0aGRheScsIC8v55Sf5pel6LS65Y2hXG4gICAgICAgICAgJ3BhZ2VzL2RldGFpbHMvcmVtZW1iZXInLCAvL+e6quW/teaXpVxuICAgICAgICAgICdwYWdlcy92aWRlby9pbmRleCcsIC8v5q+V5Lia5a2jXG4gICAgICAgICAgJ3BhZ2VzL3ZpZGVvL2RyYXdpbmcnLCAvL+aJi+e7mFxuICAgICAgICAgICdwYWdlcy93ZWIvaGVsbG8nIC8vSDXpobXpnaJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIELljIVcbiAgICAgIHtcbiAgICAgICAgcm9vdDogJ2FwcGxldHNCJyxcbiAgICAgICAgcGFnZXM6IFtcbiAgICAgICAgICAncGFnZXMvaW5kZXgvaW5kZXgnLCAvL+mmlumhtVxuICAgICAgICAgICdwYWdlcy90ZXh0L3RleHQnLCAvL+eVmeiogOe8lui+kVxuICAgICAgICAgICdwYWdlcy9ub2RhdGEvbm9kYXRhJyAvL+i/h+acn+aPkOekuumhtemdolxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcblxuICAgIC8vIOW6lemDqOagj1xuICAgIHRhYkJhcjoge1xuICAgICAgbGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+mmlumhtScsXG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgaWNvblBhdGg6ICcvaW1ncy90YWIvdGFiUm91c2UucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnL2ltZ3MvdGFiL3RhYlJvdXNlLnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5mbycsXG4gICAgICAgICAgdGV4dDogJ+S/oeaBrycsXG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgaWNvblBhdGg6ICcvaW1ncy90YWIvZW1haWw0LnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy9pbWdzL3RhYi9lbWFpbDQucG5nJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9O1xuXG4gIC8vIOWFqOWxgOaVsOaNrlxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH07XG5cbiAgLy8g6Ieq5a6a5LmJ5pWw5o2u5LiK5oqlXG4gIGRpeUV2YW50KCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBjb25zb2xlLmxvZyhg6Ieq5a6a5LmJ5pWw5o2u5LiK5oqlYCk7XG4gICAgbGV0IFN5c3RlbUluZm8gPSB7fTtcbiAgICAvLyDojrflj5bns7vnu5/kv6Hmga9cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBTeXN0ZW1JbmZvID0geyAuLi5yZXMgfTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coU3lzdGVtSW5mbyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8g6I635Y+W572R57uc57G75Z6L44CCXG4gICAgd3guZ2V0TmV0d29ya1R5cGUoe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi/lOWbnue9kee7nOexu+Weiywg5pyJ5pWI5YC877yaXG4gICAgICAgIC8vIHdpZmkvMmcvM2cvNGcvdW5rbm93bihBbmRyb2lk5LiL5LiN5bi46KeB55qE572R57uc57G75Z6LKS9ub25lKOaXoOe9kee7nClcbiAgICAgICAgbGV0IG5ldHdvcmtUeXBlID0gcmVzLm5ldHdvcmtUeXBlO1xuICAgICAgICBTeXN0ZW1JbmZvLm5ldHdvcmtUeXBlID0gbmV0d29ya1R5cGU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5uZXR3b3JrVHlwZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8g6I635Y+W5Ymq5YiH5p2/5YaF5a65XG4gICAgd3guZ2V0Q2xpcGJvYXJkRGF0YSh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICBTeXN0ZW1JbmZvLkNsaXBib2FyZERhdGEgPSByZXMuZGF0YTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIOiOt+WPluWxj+W5leS6ruW6plxuICAgIHd4LmdldFNjcmVlbkJyaWdodG5lc3Moe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy52YWx1ZSk7XG4gICAgICAgIFN5c3RlbUluZm8uU2NyZWVuQnJpZ2h0bmVzcyA9IHJlcy52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIOWIpOaWreW9k+WJjeiuvuWkh+aYr+WQpuaUr+aMgSBIQ0Ug6IO95Yqb44CCXG4gICAgd3guZ2V0SENFU3RhdGUoe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIFN5c3RlbUluZm8uSENFU3RhdGUgPSByZXM7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8g6I635Y+W5bey6L+e5o6l5Lit55qEIFdpLUZpIOS/oeaBr1xuICAgIHd4LmdldENvbm5lY3RlZFdpZmkoe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy53aWZpKTtcbiAgICAgICAgU3lzdGVtSW5mby53aWZpID0gcmVzLndpZmk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3lzJywgU3lzdGVtSW5mbyk7XG4gICAgICB3eC5yZXBvcnRBbmFseXRpY3MoJ3VzZXJfaW5mb19vbmUnLCB7XG4gICAgICAgIGJyYW5kOiBTeXN0ZW1JbmZvLmJyYW5kLFxuICAgICAgICBtb2RlbDogU3lzdGVtSW5mby5tb2RlbCxcbiAgICAgICAgcGl4ZWxyYXRpbzogU3lzdGVtSW5mby5waXhlbFJhdGlvLFxuICAgICAgICBzY3JlZW53aWR0aDogU3lzdGVtSW5mby5zY3JlZW5XaWR0aCxcbiAgICAgICAgc2NyZWVuaGVpZ2h0OiBTeXN0ZW1JbmZvLnNjcmVlbkhlaWdodCxcbiAgICAgICAgd2luZG93d2lkdGg6IFN5c3RlbUluZm8ud2luZG93V2lkdGgsXG4gICAgICAgIHdpbmRvd2hlaWdodDogU3lzdGVtSW5mby53aW5kb3dIZWlnaHQsXG4gICAgICAgIGxhbmd1YWdlOiBTeXN0ZW1JbmZvLmxhbmd1YWdlLFxuICAgICAgICB2ZXJzaW9uOiBTeXN0ZW1JbmZvLnZlcnNpb24sXG4gICAgICAgIHN5c3RlbTogU3lzdGVtSW5mby5zeXN0ZW0sXG4gICAgICAgIHBsYXRmb3JtOiBTeXN0ZW1JbmZvLnBsYXRmb3JtLFxuICAgICAgICBmb250c2l6ZXNldHRpbmc6IFN5c3RlbUluZm8uZm9udFNpemVTZXR0aW5nLFxuICAgICAgICBzZGt2ZXJzaW9uOiBTeXN0ZW1JbmZvLlNES1ZlcnNpb24sXG4gICAgICAgIG5ldHdvcmt0eXBlOiBTeXN0ZW1JbmZvLm5ldHdvcmtUeXBlLFxuICAgICAgICBjbGlwYm9hcmRkYXRhOiBTeXN0ZW1JbmZvLkNsaXBib2FyZERhdGEsXG4gICAgICAgIHNjcmVlbmJyaWdodG5lc3M6IFN5c3RlbUluZm8uU2NyZWVuQnJpZ2h0bmVzcyxcbiAgICAgICAgaGNlc3RhdGU6IFN5c3RlbUluZm8uSENFU3RhdGUsXG4gICAgICAgIHdpZmk6IFN5c3RlbUluZm8ud2lmaVxuICAgICAgfSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBvbkxhdW5jaCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyDlvJXlhaXnn6XmmZPkupFTREtcbiAgICByZXF1aXJlKCcuL3V0aWxzL3Nkay12MS40LjAuanMnKTtcblxuICAgIC8vIOWIneWni+WMliBTREtcbiAgICBsZXQgY2xpZW50SUQgPSAnY2NlNmEyMTYyYjIzMzE1NTY0ODYnO1xuICAgIHd4LkJhYVMuaW5pdChjbGllbnRJRCk7XG5cbiAgICAvLyAgIOiuvue9ruW8uuWItuabtOaWsFxuICAgIGNvbnNvbGUubG9nKCflvLrliLbmm7TmlrAnKTtcbiAgICBjb25zdCB1cGRhdGVNYW5hZ2VyID0gd3guZ2V0VXBkYXRlTWFuYWdlcigpO1xuXG4gICAgdXBkYXRlTWFuYWdlci5vbkNoZWNrRm9yVXBkYXRlKGZ1bmN0aW9uKHJlcykge1xuICAgICAgLy8g6K+35rGC5a6M5paw54mI5pys5L+h5oGv55qE5Zue6LCDXG4gICAgICBjb25zb2xlLmxvZyhyZXMuaGFzVXBkYXRlKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeShmdW5jdGlvbigpIHtcbiAgICAgIC8vIOaWsOeahOeJiOacrOW3sue7j+S4i+i9veWlve+8jOiwg+eUqCBhcHBseVVwZGF0ZSDlupTnlKjmlrDniYjmnKzlubbph43lkK9cbiAgICAgIHVwZGF0ZU1hbmFnZXIuYXBwbHlVcGRhdGUoKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVGYWlsZWQoZnVuY3Rpb24oKSB7XG4gICAgICAvLyDmlrDnmoTniYjmnKzkuIvovb3lpLHotKVcbiAgICB9KTtcblxuICAgIC8vIOebkeWQrOeUqOaIt+aIquWxj1xuICAgIHd4Lm9uVXNlckNhcHR1cmVTY3JlZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICBjb25zb2xlLmxvZygn55So5oi35oiq5bGP5LqGJyk7XG4gICAgICAvLyDmiKrlsY/kuovku7bkuIrmiqVcbiAgICAgIHd4LnJlcG9ydEFuYWx5dGljcygnY2FwdHVyZV9zY3JlZW4nLCB7XG4gICAgICAgIGNhcHR1cmVzY3JlZW46ICcxJ1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyDorr7nva7oh6rlrprkuYnmlbDmja7kuIrmiqVcbiAgICBzZWxmLmRpeUV2YW50KCk7XG4gIH1cbn1cbiJdfQ==