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
        'pages/web/hello', //H5页面

        'pages/timeCard/card']
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJzdWJQYWNrYWdlcyIsInJvb3QiLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0Iiwic2VsZWN0ZWRDb2xvciIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiU3lzdGVtSW5mbyIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJnZXROZXR3b3JrVHlwZSIsIm5ldHdvcmtUeXBlIiwiZ2V0Q2xpcGJvYXJkRGF0YSIsIkNsaXBib2FyZERhdGEiLCJkYXRhIiwiZ2V0U2NyZWVuQnJpZ2h0bmVzcyIsIlNjcmVlbkJyaWdodG5lc3MiLCJ2YWx1ZSIsImdldEhDRVN0YXRlIiwiSENFU3RhdGUiLCJmYWlsIiwiZXJyIiwiZ2V0Q29ubmVjdGVkV2lmaSIsIndpZmkiLCJzZXRUaW1lb3V0IiwicmVwb3J0QW5hbHl0aWNzIiwiYnJhbmQiLCJtb2RlbCIsInBpeGVscmF0aW8iLCJwaXhlbFJhdGlvIiwic2NyZWVud2lkdGgiLCJzY3JlZW5XaWR0aCIsInNjcmVlbmhlaWdodCIsInNjcmVlbkhlaWdodCIsIndpbmRvd3dpZHRoIiwid2luZG93V2lkdGgiLCJ3aW5kb3doZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJsYW5ndWFnZSIsInZlcnNpb24iLCJzeXN0ZW0iLCJwbGF0Zm9ybSIsImZvbnRzaXplc2V0dGluZyIsImZvbnRTaXplU2V0dGluZyIsInNka3ZlcnNpb24iLCJTREtWZXJzaW9uIiwibmV0d29ya3R5cGUiLCJjbGlwYm9hcmRkYXRhIiwic2NyZWVuYnJpZ2h0bmVzcyIsImhjZXN0YXRlIiwicmVxdWlyZSIsImNsaWVudElEIiwiQmFhUyIsImluaXQiLCJ1cGRhdGVNYW5hZ2VyIiwiZ2V0VXBkYXRlTWFuYWdlciIsIm9uQ2hlY2tGb3JVcGRhdGUiLCJoYXNVcGRhdGUiLCJvblVwZGF0ZVJlYWR5IiwiYXBwbHlVcGRhdGUiLCJvblVwZGF0ZUZhaWxlZCIsIm9uVXNlckNhcHR1cmVTY3JlZW4iLCJjYXB0dXJlc2NyZWVuIiwiZGl5RXZhbnQiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBMQUdFQSxNLEdBQVM7QUFDUEMsYUFBTyxDQUFDLGFBQUQsRUFBZ0IsdUJBQWhCLEVBQXlDLFdBQXpDLEVBQXNELFlBQXRELENBREE7QUFFUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQUZEO0FBUVA7QUFDQUMsbUJBQWEsQ0FDWDtBQUNFO0FBQ0FDLGNBQU0sVUFGUjtBQUdFUCxlQUFPLENBQ0wsbUJBREssRUFDZ0I7QUFDckIseUJBRkssRUFFYztBQUNuQiwyQkFISyxFQUdnQjtBQUNyQiw4QkFKSyxFQUltQjtBQUN4Qiw4QkFMSyxFQUttQjtBQUxuQixnQ0FNbUI7QUFDeEIsZ0NBUEssRUFPcUI7QUFDMUIsNkJBUkssRUFRa0I7QUFDdkIsZ0NBVEssRUFTcUI7QUFDMUIsZ0NBVkssRUFVcUI7QUFDMUIsMkJBWEssRUFXZ0I7QUFDckIsNkJBWkssRUFZa0I7QUFDdkIseUJBYkssRUFhYzs7QUFiZDtBQUhULE9BRFc7QUF1Qlg7QUFDQTtBQUNFTyxjQUFNLFVBRFI7QUFFRVAsZUFBTyxDQUNMLG1CQURLLEVBQ2dCO0FBQ3JCLHlCQUZLLEVBRWM7QUFDbkIsNkJBSEssQ0FHaUI7QUFIakI7QUFGVCxPQXhCVyxDQVROOztBQTJDUDtBQUNBUSxjQUFRO0FBQ05DLGNBQU0sQ0FDSjtBQUNFQyxvQkFBVSxhQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMseUJBQWUsS0FIakI7QUFJRUMsb0JBQVUsd0JBSlo7QUFLRUMsNEJBQWtCO0FBTHBCLFNBREksRUFRSjtBQUNFSixvQkFBVSxZQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMseUJBQWUsS0FIakI7QUFJRUMsb0JBQVUsc0JBSlo7QUFLRUMsNEJBQWtCO0FBTHBCLFNBUkk7QUFEQTtBQTVDRCxLLFFBaUVUQyxVLEdBQWE7QUFDWEMsZ0JBQVU7QUFEQyxLOzs7QUFEYjs7Ozs7OztBQUtBOytCQUNXO0FBQ1QsVUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGNBQVFDLEdBQVI7QUFDQSxVQUFJQyxhQUFhLEVBQWpCO0FBQ0E7QUFDQUMsU0FBR0MsYUFBSCxDQUFpQjtBQUNmQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSixvQ0FBa0JJLEdBQWxCO0FBQ0E7QUFDRDtBQUpjLE9BQWpCO0FBTUE7QUFDQUgsU0FBR0ksY0FBSCxDQUFrQjtBQUNoQkYsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQjtBQUNBO0FBQ0EsY0FBSUUsY0FBY0YsSUFBSUUsV0FBdEI7QUFDQU4scUJBQVdNLFdBQVgsR0FBeUJBLFdBQXpCO0FBQ0E7QUFDRDtBQVBlLE9BQWxCO0FBU0E7QUFDQUwsU0FBR00sZ0JBQUgsQ0FBb0I7QUFDbEJKLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckI7QUFDQUoscUJBQVdRLGFBQVgsR0FBMkJKLElBQUlLLElBQS9CO0FBQ0Q7QUFKaUIsT0FBcEI7O0FBT0E7QUFDQVIsU0FBR1MsbUJBQUgsQ0FBdUI7QUFDckJQLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckI7QUFDQUoscUJBQVdXLGdCQUFYLEdBQThCUCxJQUFJUSxLQUFsQztBQUNEO0FBSm9CLE9BQXZCOztBQU9BO0FBQ0FYLFNBQUdZLFdBQUgsQ0FBZTtBQUNiVixpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCO0FBQ0FKLHFCQUFXYyxRQUFYLEdBQXNCVixHQUF0QjtBQUNELFNBSlk7QUFLYlcsY0FBTSxjQUFTQyxHQUFULEVBQWM7QUFDbEI7QUFDRDtBQVBZLE9BQWY7QUFTQTtBQUNBZixTQUFHZ0IsZ0JBQUgsQ0FBb0I7QUFDbEJkLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckI7QUFDQUoscUJBQVdrQixJQUFYLEdBQWtCZCxJQUFJYyxJQUF0QjtBQUNELFNBSmlCO0FBS2xCSCxjQUFNLGNBQVNDLEdBQVQsRUFBYztBQUNsQjtBQUNEO0FBUGlCLE9BQXBCO0FBU0FHLGlCQUFXLFlBQU07QUFDZjtBQUNBbEIsV0FBR21CLGVBQUgsQ0FBbUIsZUFBbkIsRUFBb0M7QUFDbENDLGlCQUFPckIsV0FBV3FCLEtBRGdCO0FBRWxDQyxpQkFBT3RCLFdBQVdzQixLQUZnQjtBQUdsQ0Msc0JBQVl2QixXQUFXd0IsVUFIVztBQUlsQ0MsdUJBQWF6QixXQUFXMEIsV0FKVTtBQUtsQ0Msd0JBQWMzQixXQUFXNEIsWUFMUztBQU1sQ0MsdUJBQWE3QixXQUFXOEIsV0FOVTtBQU9sQ0Msd0JBQWMvQixXQUFXZ0MsWUFQUztBQVFsQ0Msb0JBQVVqQyxXQUFXaUMsUUFSYTtBQVNsQ0MsbUJBQVNsQyxXQUFXa0MsT0FUYztBQVVsQ0Msa0JBQVFuQyxXQUFXbUMsTUFWZTtBQVdsQ0Msb0JBQVVwQyxXQUFXb0MsUUFYYTtBQVlsQ0MsMkJBQWlCckMsV0FBV3NDLGVBWk07QUFhbENDLHNCQUFZdkMsV0FBV3dDLFVBYlc7QUFjbENDLHVCQUFhekMsV0FBV00sV0FkVTtBQWVsQ29DLHlCQUFlMUMsV0FBV1EsYUFmUTtBQWdCbENtQyw0QkFBa0IzQyxXQUFXVyxnQkFoQks7QUFpQmxDaUMsb0JBQVU1QyxXQUFXYyxRQWpCYTtBQWtCbENJLGdCQUFNbEIsV0FBV2tCO0FBbEJpQixTQUFwQztBQW9CRCxPQXRCRCxFQXNCRyxJQXRCSDtBQXVCRDs7OytCQUVVO0FBQ1QsVUFBSXJCLE9BQU8sSUFBWDs7QUFFQTtBQUNBZ0QsY0FBUSx1QkFBUjs7QUFFQTtBQUNBLFVBQUlDLFdBQVcsc0JBQWY7QUFDQTdDLFNBQUc4QyxJQUFILENBQVFDLElBQVIsQ0FBYUYsUUFBYjs7QUFFQTtBQUNBaEQsY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDQSxVQUFNa0QsZ0JBQWdCaEQsR0FBR2lELGdCQUFILEVBQXRCOztBQUVBRCxvQkFBY0UsZ0JBQWQsQ0FBK0IsVUFBUy9DLEdBQVQsRUFBYztBQUMzQztBQUNBTixnQkFBUUMsR0FBUixDQUFZSyxJQUFJZ0QsU0FBaEI7QUFDRCxPQUhEOztBQUtBSCxvQkFBY0ksYUFBZCxDQUE0QixZQUFXO0FBQ3JDO0FBQ0FKLHNCQUFjSyxXQUFkO0FBQ0QsT0FIRDs7QUFLQUwsb0JBQWNNLGNBQWQsQ0FBNkIsWUFBVztBQUN0QztBQUNELE9BRkQ7O0FBSUE7QUFDQXRELFNBQUd1RCxtQkFBSCxDQUF1QixVQUFTcEQsR0FBVCxFQUFjO0FBQ25DTixnQkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQTtBQUNBRSxXQUFHbUIsZUFBSCxDQUFtQixnQkFBbkIsRUFBcUM7QUFDbkNxQyx5QkFBZTtBQURvQixTQUFyQztBQUdELE9BTkQ7O0FBUUE7QUFDQTVELFdBQUs2RCxRQUFMO0FBQ0Q7Ozs7RUFoTTBCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFsncGFnZXMvaW5kZXgnLCAncGFnZXMvZGV0YWlscy9kZXRhaWxzJywgJ3BhZ2VzL2xvZycsICdwYWdlcy9pbmZvJ10sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfSxcbiAgICAvLyDliIbljIXliqDovb1cbiAgICBzdWJQYWNrYWdlczogW1xuICAgICAge1xuICAgICAgICAvLyBB5YyFXG4gICAgICAgIHJvb3Q6ICdhcHBsZXRzQScsXG4gICAgICAgIHBhZ2VzOiBbXG4gICAgICAgICAgJ3BhZ2VzL2luZGV4L2luZGV4JywgLy/pppbpobVcbiAgICAgICAgICAncGFnZXMvdGV4dC90ZXh0JywgLy/nlZnoqIDpobXpnaJcbiAgICAgICAgICAncGFnZXMvZGV0YWlscy81MjAnLCAvLzUyMOi0uuWNoVxuICAgICAgICAgICdwYWdlcy9kZXRhaWxzL2R1YW53dScsIC8v56uv5Y2I6IqC6LS65Y2hXG4gICAgICAgICAgJ3BhZ2VzL2RldGFpbHMvZmF0aGVyJywgLy/niLbkurLoioLotLrljaFcbiAgICAgICAgICBgcGFnZXMvZGV0YWlscy9tYXRoZXJgLCAvL+avjeS6suiKgui0uuWNoVxuICAgICAgICAgICdwYWdlcy9kZXRhaWxzL2lsb3ZleW91JywgLy/kuIPlpJXotLrljaFcbiAgICAgICAgICAncGFnZXMvZGV0YWlscy9jaGlsZCcsIC8v5YS/56ul6IqC6LS65Y2hXG4gICAgICAgICAgJ3BhZ2VzL2RldGFpbHMvYmlydGhkYXknLCAvL+eUn+aXpei0uuWNoVxuICAgICAgICAgICdwYWdlcy9kZXRhaWxzL3JlbWVtYmVyJywgLy/nuqrlv7Xml6VcbiAgICAgICAgICAncGFnZXMvdmlkZW8vaW5kZXgnLCAvL+avleS4muWto1xuICAgICAgICAgICdwYWdlcy92aWRlby9kcmF3aW5nJywgLy/miYvnu5hcbiAgICAgICAgICAncGFnZXMvd2ViL2hlbGxvJywgLy9INemhtemdolxuXG4gICAgICAgICAgYHBhZ2VzL3RpbWVDYXJkL2NhcmRgLC8v5YCS6K6h5pe25Y2h54mH6aG16Z2iXG4gICAgICAgICAgXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICAvLyBC5YyFXG4gICAgICB7XG4gICAgICAgIHJvb3Q6ICdhcHBsZXRzQicsXG4gICAgICAgIHBhZ2VzOiBbXG4gICAgICAgICAgJ3BhZ2VzL2luZGV4L2luZGV4JywgLy/pppbpobVcbiAgICAgICAgICAncGFnZXMvdGV4dC90ZXh0JywgLy/nlZnoqIDnvJbovpFcbiAgICAgICAgICAncGFnZXMvbm9kYXRhL25vZGF0YScgLy/ov4fmnJ/mj5DnpLrpobXpnaJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG5cbiAgICAvLyDlupXpg6jmoI9cbiAgICB0YWJCYXI6IHtcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5kZXgnLFxuICAgICAgICAgIHRleHQ6ICfpppbpobUnLFxuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6ICdyZWQnLFxuICAgICAgICAgIGljb25QYXRoOiAnL2ltZ3MvdGFiL3RhYlJvdXNlLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy9pbWdzL3RhYi90YWJSb3VzZS5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2luZm8nLFxuICAgICAgICAgIHRleHQ6ICfkv6Hmga8nLFxuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6ICdyZWQnLFxuICAgICAgICAgIGljb25QYXRoOiAnL2ltZ3MvdGFiL2VtYWlsNC5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcvaW1ncy90YWIvZW1haWw0LnBuZydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfTtcblxuICAvLyDlhajlsYDmlbDmja5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9O1xuXG4gIC8vIOiHquWumuS5ieaVsOaNruS4iuaKpVxuICBkaXlFdmFudCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coYOiHquWumuS5ieaVsOaNruS4iuaKpWApO1xuICAgIGxldCBTeXN0ZW1JbmZvID0ge307XG4gICAgLy8g6I635Y+W57O757uf5L+h5oGvXG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgU3lzdGVtSW5mbyA9IHsgLi4ucmVzIH07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFN5c3RlbUluZm8pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIOiOt+WPlue9kee7nOexu+Wei+OAglxuICAgIHd4LmdldE5ldHdvcmtUeXBlKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDov5Tlm57nvZHnu5znsbvlnossIOacieaViOWAvO+8mlxuICAgICAgICAvLyB3aWZpLzJnLzNnLzRnL3Vua25vd24oQW5kcm9pZOS4i+S4jeW4uOingeeahOe9kee7nOexu+Weiykvbm9uZSjml6DnvZHnu5wpXG4gICAgICAgIGxldCBuZXR3b3JrVHlwZSA9IHJlcy5uZXR3b3JrVHlwZTtcbiAgICAgICAgU3lzdGVtSW5mby5uZXR3b3JrVHlwZSA9IG5ldHdvcmtUeXBlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMubmV0d29ya1R5cGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIOiOt+WPluWJquWIh+adv+WGheWuuVxuICAgIHd4LmdldENsaXBib2FyZERhdGEoe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgU3lzdGVtSW5mby5DbGlwYm9hcmREYXRhID0gcmVzLmRhdGE7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyDojrflj5blsY/luZXkuq7luqZcbiAgICB3eC5nZXRTY3JlZW5CcmlnaHRuZXNzKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMudmFsdWUpO1xuICAgICAgICBTeXN0ZW1JbmZvLlNjcmVlbkJyaWdodG5lc3MgPSByZXMudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyDliKTmlq3lvZPliY3orr7lpIfmmK/lkKbmlK/mjIEgSENFIOiDveWKm+OAglxuICAgIHd4LmdldEhDRVN0YXRlKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBTeXN0ZW1JbmZvLkhDRVN0YXRlID0gcmVzO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIOiOt+WPluW3sui/nuaOpeS4reeahCBXaS1GaSDkv6Hmga9cbiAgICB3eC5nZXRDb25uZWN0ZWRXaWZpKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMud2lmaSk7XG4gICAgICAgIFN5c3RlbUluZm8ud2lmaSA9IHJlcy53aWZpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N5cycsIFN5c3RlbUluZm8pO1xuICAgICAgd3gucmVwb3J0QW5hbHl0aWNzKCd1c2VyX2luZm9fb25lJywge1xuICAgICAgICBicmFuZDogU3lzdGVtSW5mby5icmFuZCxcbiAgICAgICAgbW9kZWw6IFN5c3RlbUluZm8ubW9kZWwsXG4gICAgICAgIHBpeGVscmF0aW86IFN5c3RlbUluZm8ucGl4ZWxSYXRpbyxcbiAgICAgICAgc2NyZWVud2lkdGg6IFN5c3RlbUluZm8uc2NyZWVuV2lkdGgsXG4gICAgICAgIHNjcmVlbmhlaWdodDogU3lzdGVtSW5mby5zY3JlZW5IZWlnaHQsXG4gICAgICAgIHdpbmRvd3dpZHRoOiBTeXN0ZW1JbmZvLndpbmRvd1dpZHRoLFxuICAgICAgICB3aW5kb3doZWlnaHQ6IFN5c3RlbUluZm8ud2luZG93SGVpZ2h0LFxuICAgICAgICBsYW5ndWFnZTogU3lzdGVtSW5mby5sYW5ndWFnZSxcbiAgICAgICAgdmVyc2lvbjogU3lzdGVtSW5mby52ZXJzaW9uLFxuICAgICAgICBzeXN0ZW06IFN5c3RlbUluZm8uc3lzdGVtLFxuICAgICAgICBwbGF0Zm9ybTogU3lzdGVtSW5mby5wbGF0Zm9ybSxcbiAgICAgICAgZm9udHNpemVzZXR0aW5nOiBTeXN0ZW1JbmZvLmZvbnRTaXplU2V0dGluZyxcbiAgICAgICAgc2RrdmVyc2lvbjogU3lzdGVtSW5mby5TREtWZXJzaW9uLFxuICAgICAgICBuZXR3b3JrdHlwZTogU3lzdGVtSW5mby5uZXR3b3JrVHlwZSxcbiAgICAgICAgY2xpcGJvYXJkZGF0YTogU3lzdGVtSW5mby5DbGlwYm9hcmREYXRhLFxuICAgICAgICBzY3JlZW5icmlnaHRuZXNzOiBTeXN0ZW1JbmZvLlNjcmVlbkJyaWdodG5lc3MsXG4gICAgICAgIGhjZXN0YXRlOiBTeXN0ZW1JbmZvLkhDRVN0YXRlLFxuICAgICAgICB3aWZpOiBTeXN0ZW1JbmZvLndpZmlcbiAgICAgIH0pO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgb25MYXVuY2goKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8g5byV5YWl55+l5pmT5LqRU0RLXG4gICAgcmVxdWlyZSgnLi91dGlscy9zZGstdjEuNC4wLmpzJyk7XG5cbiAgICAvLyDliJ3lp4vljJYgU0RLXG4gICAgbGV0IGNsaWVudElEID0gJ2NjZTZhMjE2MmIyMzMxNTU2NDg2JztcbiAgICB3eC5CYWFTLmluaXQoY2xpZW50SUQpO1xuXG4gICAgLy8gICDorr7nva7lvLrliLbmm7TmlrBcbiAgICBjb25zb2xlLmxvZygn5by65Yi25pu05pawJyk7XG4gICAgY29uc3QgdXBkYXRlTWFuYWdlciA9IHd4LmdldFVwZGF0ZU1hbmFnZXIoKTtcblxuICAgIHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZShmdW5jdGlvbihyZXMpIHtcbiAgICAgIC8vIOivt+axguWujOaWsOeJiOacrOS/oeaBr+eahOWbnuiwg1xuICAgICAgY29uc29sZS5sb2cocmVzLmhhc1VwZGF0ZSk7XG4gICAgfSk7XG5cbiAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlUmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAvLyDmlrDnmoTniYjmnKzlt7Lnu4/kuIvovb3lpb3vvIzosIPnlKggYXBwbHlVcGRhdGUg5bqU55So5paw54mI5pys5bm26YeN5ZCvXG4gICAgICB1cGRhdGVNYW5hZ2VyLmFwcGx5VXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uKCkge1xuICAgICAgLy8g5paw55qE54mI5pys5LiL6L295aSx6LSlXG4gICAgfSk7XG5cbiAgICAvLyDnm5HlkKznlKjmiLfmiKrlsY9cbiAgICB3eC5vblVzZXJDYXB0dXJlU2NyZWVuKGZ1bmN0aW9uKHJlcykge1xuICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+aIquWxj+S6hicpO1xuICAgICAgLy8g5oiq5bGP5LqL5Lu25LiK5oqlXG4gICAgICB3eC5yZXBvcnRBbmFseXRpY3MoJ2NhcHR1cmVfc2NyZWVuJywge1xuICAgICAgICBjYXB0dXJlc2NyZWVuOiAnMSdcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8g6K6+572u6Ieq5a6a5LmJ5pWw5o2u5LiK5oqlXG4gICAgc2VsZi5kaXlFdmFudCgpO1xuICB9XG59XG4iXX0=