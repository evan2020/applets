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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJzdWJQYWNrYWdlcyIsInJvb3QiLCJ0YWJCYXIiLCJsaXN0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZU1hbmFnZXIiLCJ3eCIsImdldFVwZGF0ZU1hbmFnZXIiLCJvbkNoZWNrRm9yVXBkYXRlIiwicmVzIiwiaGFzVXBkYXRlIiwib25VcGRhdGVSZWFkeSIsImFwcGx5VXBkYXRlIiwib25VcGRhdGVGYWlsZWQiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswTEFHRUEsTSxHQUFTO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsV0FGSyxFQUdMLFlBSEssQ0FEQTtBQU1QQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BTkQ7QUFZUEMsbUJBQWEsQ0FDWDtBQUNFQyxjQUFNLFVBRFI7QUFFRVAsZUFBTyxDQUNMLG1CQURLLEVBRUwsaUJBRks7QUFGVCxPQURXLEVBUVg7QUFDRU8sY0FBTSxVQURSO0FBRUVQLGVBQU8sQ0FDTCxtQkFESyxFQUVMLGlCQUZLO0FBRlQsT0FSVyxDQVpOO0FBNEJQUSxjQUFRO0FBQ1JDLGNBQU0sQ0FDSjtBQUNFLHNCQUFZLGFBRGQ7QUFFRSxrQkFBUSxJQUZWO0FBR0UsMkJBQWdCLEtBSGxCO0FBSUUsc0JBQVksZ0JBSmQ7QUFLRSw4QkFBbUI7QUFMckIsU0FESSxFQVFKO0FBQ0Usc0JBQVksWUFEZDtBQUVFLGtCQUFRLElBRlY7QUFHRSwyQkFBZ0IsS0FIbEI7QUFJRSxzQkFBWSxlQUpkO0FBS0UsOEJBQW1CO0FBTHJCLFNBUkksRUFlSjtBQUNFLHNCQUFZLFdBRGQ7QUFFRSxrQkFBUSxJQUZWO0FBR0Usc0JBQVcsaUJBSGI7QUFJRSw4QkFBb0I7QUFKdEIsU0FmSTtBQURFO0FBNUJELEssUUFzRFRDLFUsR0FBYTtBQUNYQyxnQkFBVTtBQURDLEs7Ozs7OytCQUlGOztBQUVUO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsVUFBTUMsZ0JBQWdCQyxHQUFHQyxnQkFBSCxFQUF0Qjs7QUFFQUYsb0JBQWNHLGdCQUFkLENBQStCLFVBQVNDLEdBQVQsRUFBYztBQUMzQztBQUNBTixnQkFBUUMsR0FBUixDQUFZSyxJQUFJQyxTQUFoQjtBQUNELE9BSEQ7O0FBS0FMLG9CQUFjTSxhQUFkLENBQTRCLFlBQVc7QUFDckM7QUFDQU4sc0JBQWNPLFdBQWQ7QUFDRCxPQUhEOztBQUtBUCxvQkFBY1EsY0FBZCxDQUE2QixZQUFXO0FBQ3RDO0FBQ0QsT0FGRDtBQUdEOzs7O0VBOUUwQixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2xvZycsXG4gICAgICAncGFnZXMvaW5mbydcbiAgICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfSxcbiAgICBzdWJQYWNrYWdlczogW1xuICAgICAge1xuICAgICAgICByb290OiAnYXBwbGV0c0EnLFxuICAgICAgICBwYWdlczogW1xuICAgICAgICAgICdwYWdlcy9pbmRleC9pbmRleCcsXG4gICAgICAgICAgJ3BhZ2VzL3RleHQvdGV4dCcsXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJvb3Q6ICdhcHBsZXRzQicsXG4gICAgICAgIHBhZ2VzOiBbXG4gICAgICAgICAgJ3BhZ2VzL2luZGV4L2luZGV4JyxcbiAgICAgICAgICAncGFnZXMvdGV4dC90ZXh0JyxcbiAgICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcbiAgICB0YWJCYXI6IHtcbiAgICBsaXN0OiBbXG4gICAgICB7XG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9pbmRleFwiLFxuICAgICAgICBcInRleHRcIjogXCLpppbpobVcIixcbiAgICAgICAgXCJzZWxlY3RlZENvbG9yXCI6XCJyZWRcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcIi9pY29uL2ppYW4ucG5nXCIsXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOlwiL2ljb24vamlhbi5wbmdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2luZm9cIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5L+h5oGvXCIsXG4gICAgICAgIFwic2VsZWN0ZWRDb2xvclwiOlwicmVkXCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCIvaWNvbi9kdW4ucG5nXCIsXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOlwiL2ljb24vZHVuLnBuZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvbG9nXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIuaXpeW/l1wiLFxuICAgICAgICBcImljb25QYXRoXCI6XCIvaWNvbi9mbGFzaC5wbmdcIixcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiL2ljb24vZmxhc2gucG5nXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbiAgfTtcblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH07XG5cbiAgb25MYXVuY2goKSB7XG5cbiAgICAvLyAgIOiuvue9ruW8uuWItuabtOaWsFxuICAgIGNvbnNvbGUubG9nKFwi5by65Yi25pu05pawXCIpXG4gICAgY29uc3QgdXBkYXRlTWFuYWdlciA9IHd4LmdldFVwZGF0ZU1hbmFnZXIoKTtcblxuICAgIHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZShmdW5jdGlvbihyZXMpIHtcbiAgICAgIC8vIOivt+axguWujOaWsOeJiOacrOS/oeaBr+eahOWbnuiwg1xuICAgICAgY29uc29sZS5sb2cocmVzLmhhc1VwZGF0ZSk7XG4gICAgfSk7XG5cbiAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlUmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAvLyDmlrDnmoTniYjmnKzlt7Lnu4/kuIvovb3lpb3vvIzosIPnlKggYXBwbHlVcGRhdGUg5bqU55So5paw54mI5pys5bm26YeN5ZCvXG4gICAgICB1cGRhdGVNYW5hZ2VyLmFwcGx5VXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uKCkge1xuICAgICAgLy8g5paw55qE54mI5pys5LiL6L295aSx6LSlXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==