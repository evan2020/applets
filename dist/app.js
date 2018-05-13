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
        pages: ['pages/index/index', 'pages/text/text', 'pages/details/520']
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJzdWJQYWNrYWdlcyIsInJvb3QiLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0Iiwic2VsZWN0ZWRDb2xvciIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInJlcXVpcmUiLCJjbGllbnRJRCIsInd4IiwiQmFhUyIsImluaXQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlTWFuYWdlciIsImdldFVwZGF0ZU1hbmFnZXIiLCJvbkNoZWNrRm9yVXBkYXRlIiwicmVzIiwiaGFzVXBkYXRlIiwib25VcGRhdGVSZWFkeSIsImFwcGx5VXBkYXRlIiwib25VcGRhdGVGYWlsZWQiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswTEFHRUEsTSxHQUFTO0FBQ1BDLGFBQU8sQ0FBQyxhQUFELEVBQWdCLHVCQUFoQixFQUF5QyxXQUF6QyxFQUFzRCxZQUF0RCxDQURBO0FBRVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FGRDtBQVFQQyxtQkFBYSxDQUNYO0FBQ0VDLGNBQU0sVUFEUjtBQUVFUCxlQUFPLENBQUMsbUJBQUQsRUFBc0IsaUJBQXRCLEVBQXdDLG1CQUF4QztBQUZULE9BRFcsRUFLWDtBQUNFTyxjQUFNLFVBRFI7QUFFRVAsZUFBTyxDQUFDLG1CQUFELEVBQXNCLGlCQUF0QjtBQUZULE9BTFcsQ0FSTjtBQWtCUFEsY0FBUTtBQUNOQyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsYUFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLHlCQUFlLEtBSGpCO0FBSUVDLG9CQUFVLHdCQUpaO0FBS0VDLDRCQUFrQjtBQUxwQixTQURJLEVBUUo7QUFDRUosb0JBQVUsWUFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLHlCQUFlLEtBSGpCO0FBSUVDLG9CQUFVLHNCQUpaO0FBS0VDLDRCQUFrQjtBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxTQVJJO0FBREE7QUFsQkQsSyxRQTRDVEMsVSxHQUFhO0FBQ1hDLGdCQUFVO0FBREMsSzs7Ozs7K0JBSUY7QUFDVDtBQUNBQyxjQUFRLHVCQUFSOztBQUVBO0FBQ0EsVUFBSUMsV0FBVyxzQkFBZjtBQUNBQyxTQUFHQyxJQUFILENBQVFDLElBQVIsQ0FBYUgsUUFBYjs7QUFFQTtBQUNBSSxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLFVBQU1DLGdCQUFnQkwsR0FBR00sZ0JBQUgsRUFBdEI7O0FBRUFELG9CQUFjRSxnQkFBZCxDQUErQixVQUFTQyxHQUFULEVBQWM7QUFDM0M7QUFDQUwsZ0JBQVFDLEdBQVIsQ0FBWUksSUFBSUMsU0FBaEI7QUFDRCxPQUhEOztBQUtBSixvQkFBY0ssYUFBZCxDQUE0QixZQUFXO0FBQ3JDO0FBQ0FMLHNCQUFjTSxXQUFkO0FBQ0QsT0FIRDs7QUFLQU4sb0JBQWNPLGNBQWQsQ0FBNkIsWUFBVztBQUN0QztBQUNELE9BRkQ7QUFHRDs7OztFQTFFMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogWydwYWdlcy9pbmRleCcsICdwYWdlcy9kZXRhaWxzL2RldGFpbHMnLCAncGFnZXMvbG9nJywgJ3BhZ2VzL2luZm8nXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICB9LFxuICAgIHN1YlBhY2thZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIHJvb3Q6ICdhcHBsZXRzQScsXG4gICAgICAgIHBhZ2VzOiBbJ3BhZ2VzL2luZGV4L2luZGV4JywgJ3BhZ2VzL3RleHQvdGV4dCcsJ3BhZ2VzL2RldGFpbHMvNTIwJ11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJvb3Q6ICdhcHBsZXRzQicsXG4gICAgICAgIHBhZ2VzOiBbJ3BhZ2VzL2luZGV4L2luZGV4JywgJ3BhZ2VzL3RleHQvdGV4dCddXG4gICAgICB9XG4gICAgXSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5kZXgnLFxuICAgICAgICAgIHRleHQ6ICfpppbpobUnLFxuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6ICdyZWQnLFxuICAgICAgICAgIGljb25QYXRoOiAnL2ltZ3MvdGFiL3RhYlJvdXNlLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy9pbWdzL3RhYi90YWJSb3VzZS5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2luZm8nLFxuICAgICAgICAgIHRleHQ6ICfkv6Hmga8nLFxuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6ICdyZWQnLFxuICAgICAgICAgIGljb25QYXRoOiAnL2ltZ3MvdGFiL2VtYWlsNC5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcvaW1ncy90YWIvZW1haWw0LnBuZydcbiAgICAgICAgfVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgcGFnZVBhdGg6ICdwYWdlcy9sb2cnLFxuICAgICAgICAvLyAgIHRleHQ6ICfml6Xlv5cnLFxuICAgICAgICAvLyAgIGljb25QYXRoOiAnL2ljb24vZmxhc2gucG5nJyxcbiAgICAgICAgLy8gICBzZWxlY3RlZEljb25QYXRoOiAnL2ljb24vZmxhc2gucG5nJ1xuICAgICAgICAvLyB9XG4gICAgICBdXG4gICAgfVxuICB9O1xuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfTtcblxuICBvbkxhdW5jaCgpIHtcbiAgICAvLyDlvJXlhaXnn6XmmZPkupFTREtcbiAgICByZXF1aXJlKCcuL3V0aWxzL3Nkay12MS40LjAuanMnKTtcblxuICAgIC8vIOWIneWni+WMliBTREtcbiAgICBsZXQgY2xpZW50SUQgPSAnY2NlNmEyMTYyYjIzMzE1NTY0ODYnO1xuICAgIHd4LkJhYVMuaW5pdChjbGllbnRJRCk7XG5cbiAgICAvLyAgIOiuvue9ruW8uuWItuabtOaWsFxuICAgIGNvbnNvbGUubG9nKCflvLrliLbmm7TmlrAnKTtcbiAgICBjb25zdCB1cGRhdGVNYW5hZ2VyID0gd3guZ2V0VXBkYXRlTWFuYWdlcigpO1xuXG4gICAgdXBkYXRlTWFuYWdlci5vbkNoZWNrRm9yVXBkYXRlKGZ1bmN0aW9uKHJlcykge1xuICAgICAgLy8g6K+35rGC5a6M5paw54mI5pys5L+h5oGv55qE5Zue6LCDXG4gICAgICBjb25zb2xlLmxvZyhyZXMuaGFzVXBkYXRlKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeShmdW5jdGlvbigpIHtcbiAgICAgIC8vIOaWsOeahOeJiOacrOW3sue7j+S4i+i9veWlve+8jOiwg+eUqCBhcHBseVVwZGF0ZSDlupTnlKjmlrDniYjmnKzlubbph43lkK9cbiAgICAgIHVwZGF0ZU1hbmFnZXIuYXBwbHlVcGRhdGUoKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVGYWlsZWQoZnVuY3Rpb24oKSB7XG4gICAgICAvLyDmlrDnmoTniYjmnKzkuIvovb3lpLHotKVcbiAgICB9KTtcbiAgfVxufVxuIl19