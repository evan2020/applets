'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '儿童节'
    }, _this.components = {}, _this.data = {
      windowHeight: '100%' //手机屏幕高度
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var self = this;

      //显示转发
      wx.showShareMenu({
        withShareTicket: true
      });

      // 获取手机信息
      wx.getSystemInfo({
        success: function success(res) {
          console.log(res.model);
          console.log(res.pixelRatio);
          console.log(res.windowWidth);
          console.log(res.windowHeight);
          console.log(res.language);
          console.log(res.version);
          console.log(res.platform);
          self.windowHeight = res.windowHeight;
        }
      });

      // 设置背景音乐
      var backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.title = '韩国可爱';
      backgroundAudioManager.epname = '';
      backgroundAudioManager.singer = '铃声';
      backgroundAudioManager.coverImgUrl = 'https://om83cysj8.qnssl.com/924d_700x962_Fotor.jpg';
      backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/291204372936670.mp3';
    }

    // 当页面显示的时候

  }, {
    key: 'onShow',
    value: function onShow() {
      console.log('show');
      // 继续播放背景音乐
      var backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.play();
    }
  }, {
    key: 'onHide',
    value: function onHide() {
      console.log('hidden');
      var backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.pause();
    }

    // 当页面切换（隐藏）的时候

  }, {
    key: 'onUnload',
    value: function onUnload() {
      console.log('unload');
      // 暂停背景音乐
      var backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.pause();
    }
    // 设置分享卡片

  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      // 卡片内容
      return {
        title: '儿童节快乐',
        path: '/appletsA/pages/details/child',
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/tooopen_sy_162661186586.jpg',
        success: function success(res) {
          // 转发成功
        },
        fail: function fail(res) {
          // 转发失败
        }
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/child'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwid2luZG93SGVpZ2h0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwib3B0aW9ucyIsInNlbGYiLCJ3eCIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtb2RlbCIsInBpeGVsUmF0aW8iLCJ3aW5kb3dXaWR0aCIsImxhbmd1YWdlIiwidmVyc2lvbiIsInBsYXRmb3JtIiwiYmFja2dyb3VuZEF1ZGlvTWFuYWdlciIsImdldEJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJ0aXRsZSIsImVwbmFtZSIsInNpbmdlciIsImNvdmVySW1nVXJsIiwic3JjIiwicGxheSIsInBhdXNlIiwiZnJvbSIsInRhcmdldCIsInBhdGgiLCJpbWFnZVVybCIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsb0JBQWMsTUFEVCxDQUNnQjtBQURoQixLLFFBSVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7OzsyQkFFRkMsTyxFQUFTO0FBQ2QsVUFBSUMsT0FBTyxJQUFYOztBQUVBO0FBQ0FDLFNBQUdDLGFBQUgsQ0FBaUI7QUFDZkMseUJBQWlCO0FBREYsT0FBakI7O0FBSUE7QUFDQUYsU0FBR0csYUFBSCxDQUFpQjtBQUNmQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCQyxrQkFBUUMsR0FBUixDQUFZRixJQUFJRyxLQUFoQjtBQUNBRixrQkFBUUMsR0FBUixDQUFZRixJQUFJSSxVQUFoQjtBQUNBSCxrQkFBUUMsR0FBUixDQUFZRixJQUFJSyxXQUFoQjtBQUNBSixrQkFBUUMsR0FBUixDQUFZRixJQUFJWCxZQUFoQjtBQUNBWSxrQkFBUUMsR0FBUixDQUFZRixJQUFJTSxRQUFoQjtBQUNBTCxrQkFBUUMsR0FBUixDQUFZRixJQUFJTyxPQUFoQjtBQUNBTixrQkFBUUMsR0FBUixDQUFZRixJQUFJUSxRQUFoQjtBQUNBZCxlQUFLTCxZQUFMLEdBQW9CVyxJQUFJWCxZQUF4QjtBQUNEO0FBVmMsT0FBakI7O0FBYUE7QUFDQSxVQUFNb0IseUJBQXlCZCxHQUFHZSx5QkFBSCxFQUEvQjtBQUNBRCw2QkFBdUJFLEtBQXZCLEdBQStCLE1BQS9CO0FBQ0FGLDZCQUF1QkcsTUFBdkIsR0FBZ0MsRUFBaEM7QUFDQUgsNkJBQXVCSSxNQUF2QixHQUFnQyxJQUFoQztBQUNBSiw2QkFBdUJLLFdBQXZCLEdBQ0Usb0RBREY7QUFFQUwsNkJBQXVCTSxHQUF2QixHQUNFLGlEQURGO0FBRUQ7O0FBRUQ7Ozs7NkJBQ1M7QUFDUGQsY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDQTtBQUNBLFVBQU1PLHlCQUF5QmQsR0FBR2UseUJBQUgsRUFBL0I7QUFDQUQsNkJBQXVCTyxJQUF2QjtBQUNEOzs7NkJBQ1E7QUFDUGYsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSxVQUFNTyx5QkFBeUJkLEdBQUdlLHlCQUFILEVBQS9CO0FBQ0FELDZCQUF1QlEsS0FBdkI7QUFDRDs7QUFFRDs7OzsrQkFDVztBQUNUaEIsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDQTtBQUNBLFVBQU1PLHlCQUF5QmQsR0FBR2UseUJBQUgsRUFBL0I7QUFDQUQsNkJBQXVCUSxLQUF2QjtBQUNEO0FBQ0Q7Ozs7c0NBQ2tCakIsRyxFQUFLO0FBQ3JCLFVBQUlBLElBQUlrQixJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekI7QUFDQWpCLGdCQUFRQyxHQUFSLENBQVlGLElBQUltQixNQUFoQjtBQUNEO0FBQ0Q7QUFDQSxhQUFPO0FBQ0xSLGVBQU8sT0FERjtBQUVMUyxjQUFNLCtCQUZEO0FBR0w7QUFDQUMsa0JBQ0UseURBTEc7QUFNTHRCLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckI7QUFDRCxTQVJJO0FBU0xzQixjQUFNLGNBQVN0QixHQUFULEVBQWM7QUFDbEI7QUFDRDtBQVhJLE9BQVA7QUFhRDs7OztFQXpGZ0MsZUFBS3VCLEk7O2tCQUFuQnZDLEsiLCJmaWxlIjoiY2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YS/56ul6IqCJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICB3aW5kb3dIZWlnaHQ6ICcxMDAlJyAvL+aJi+acuuWxj+W5lemrmOW6plxuICB9O1xuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHt9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy/mmL7npLrovazlj5FcbiAgICB3eC5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8g6I635Y+W5omL5py65L+h5oGvXG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLm1vZGVsKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMud2luZG93V2lkdGgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMud2luZG93SGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmxhbmd1YWdlKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnZlcnNpb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMucGxhdGZvcm0pO1xuICAgICAgICBzZWxmLndpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyDorr7nva7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIudGl0bGUgPSAn6Z+p5Zu95Y+v54ixJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmVwbmFtZSA9ICcnO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuc2luZ2VyID0gJ+mTg+WjsCc7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5jb3ZlckltZ1VybCA9XG4gICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzkyNGRfNzAweDk2Ml9Gb3Rvci5qcGcnO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuc3JjID1cbiAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMjkxMjA0MzcyOTM2NjcwLm1wMyc7XG4gIH1cblxuICAvLyDlvZPpobXpnaLmmL7npLrnmoTml7blgJlcbiAgb25TaG93KCkge1xuICAgIGNvbnNvbGUubG9nKCdzaG93Jyk7XG4gICAgLy8g57un57ut5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBsYXkoKTtcbiAgfVxuICBvbkhpZGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2hpZGRlbicpO1xuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG5cbiAgLy8g5b2T6aG16Z2i5YiH5o2i77yI6ZqQ6JeP77yJ55qE5pe25YCZXG4gIG9uVW5sb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCd1bmxvYWQnKTtcbiAgICAvLyDmmoLlgZzog4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgfVxuICAvLyDorr7nva7liIbkuqvljaHniYdcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KTtcbiAgICB9XG4gICAgLy8g5Y2h54mH5YaF5a65XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5YS/56ul6IqC5b+r5LmQJyxcbiAgICAgIHBhdGg6ICcvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9jaGlsZCcsXG4gICAgICAvLyDlsIHpnaLlm75cbiAgICAgIGltYWdlVXJsOlxuICAgICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL3Rvb29wZW5fc3lfMTYyNjYxMTg2NTg2LmpwZycsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==