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
      navigationBarTitleText: '父亲节'
    }, _this.components = {}, _this.data = {
      msg: '', //输入框的内容
      text: '', //格式化之后要展示的内容
      windowHeight: '100%' //手机屏幕高度
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'RegMsg',


    // 处理传递过来的信息
    value: function RegMsg() {
      var self = this;
      var msg = self.msg;
      var testArr = [];
      // 遇到以下符号立即截取内容分段
      var reg = /[，|,|.|。|、|？|；|;|/]/g;
      var index = '';
      var start = 0;
      while (index = reg.exec(msg) != null) {
        // 截取两个符合之间的文字，分段放入数组
        testArr.push(msg.substring(start, reg.lastIndex));
        // 检测并改变当前符号索引
        start = reg.lastIndex;
      }
      // 获取最后一段文字
      testArr.push(msg.substring(start, msg.length));
      self.text = testArr;
      self.$apply();
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var self = this;

      if (options.msg) {
        self.msg = options.msg;
      } else {
        // 默认留言
        self.msg = '\u5C0F\u65F6\u5019\uFF0C\u7236\u4EB2\u5C31\u662F\u9897\u53C2\u5929\u5927\u6811\uFF0C\u4E3A\u6211\u4EEC\u906E\u98CE\u6321\u96E8\uFF0C\u957F\u5927\u4E86\uFF0C\u7236\u4EB2\u6210\u4E86\u672C\u767E\u79D1\u5168\u4E66\uFF0C\u4E3A\u6211\u4EEC\u7B54\u7591\u89E3\u60D1\uFF0C\u7236\u4EB2\uFF0C\u6C38\u8FDC\u662F\u6211\u4EEC\u7684\u652F\u67F1\uFF0C\u7238\u7238\uFF0C\u8282\u65E5\u5FEB\u4E50';
      }
      self.RegMsg();
      self.$apply();

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
      backgroundAudioManager.title = '父亲';
      backgroundAudioManager.epname = '';
      backgroundAudioManager.singer = '筷子兄弟';
      backgroundAudioManager.coverImgUrl = 'https://om83cysj8.qnssl.com/a9d63448b881e12eab44fdfcdbd1cb7c_Fotor.png';
      backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/at20111229221940.mp3';
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
      var self = this;
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      // 卡片内容
      return {
        title: '父亲节快乐',
        path: '/appletsA/pages/details/father?msg=' + self.msg,
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/%E7%88%B6%E4%BA%B2%E8%8A%8211_Fotor.jpg',
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/father'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdGhlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIm1zZyIsInRleHQiLCJ3aW5kb3dIZWlnaHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJzZWxmIiwidGVzdEFyciIsInJlZyIsImluZGV4Iiwic3RhcnQiLCJleGVjIiwicHVzaCIsInN1YnN0cmluZyIsImxhc3RJbmRleCIsImxlbmd0aCIsIiRhcHBseSIsIm9wdGlvbnMiLCJSZWdNc2ciLCJ3eCIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtb2RlbCIsInBpeGVsUmF0aW8iLCJ3aW5kb3dXaWR0aCIsImxhbmd1YWdlIiwidmVyc2lvbiIsInBsYXRmb3JtIiwiYmFja2dyb3VuZEF1ZGlvTWFuYWdlciIsImdldEJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJ0aXRsZSIsImVwbmFtZSIsInNpbmdlciIsImNvdmVySW1nVXJsIiwic3JjIiwicGxheSIsInBhdXNlIiwiZnJvbSIsInRhcmdldCIsInBhdGgiLCJpbWFnZVVybCIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsYUFESyxFQUNJO0FBQ1RDLGNBRkssRUFFSztBQUNWQyxvQkFBYyxNQUhULENBR2dCO0FBSGhCLEssUUEyQlBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7Ozs7O0FBekJQOzZCQUNPO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSU4sTUFBTU0sS0FBS04sR0FBZjtBQUNB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O0FBWEksT0FBUDtBQWFEOzs7O0VBMUhnQyxlQUFLdUIsSTs7a0JBQW5CcEQsSyIsImZpbGUiOiJmYXRoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54i25Lqy6IqCJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICBtc2c6IGBgLCAvL+i+k+WFpeahhueahOWGheWuuVxuICAgIHRleHQ6IGBgLCAvL+agvOW8j+WMluS5i+WQjuimgeWxleekuueahOWGheWuuVxuICAgIHdpbmRvd0hlaWdodDogJzEwMCUnIC8v5omL5py65bGP5bmV6auY5bqmXG4gIH07XG5cbiAgICAvLyDlpITnkIbkvKDpgJLov4fmnaXnmoTkv6Hmga9cbiAgUmVnTXNnKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgbXNnID0gc2VsZi5tc2c7XG4gICAgbGV0IHRlc3RBcnIgPSBbXTtcbiAgICAvLyDpgYfliLDku6XkuIvnrKblj7fnq4vljbPmiKrlj5blhoXlrrnliIbmrrVcbiAgICBsZXQgcmVnID0gL1vvvIx8LHwufOOAgnzjgIF877yffO+8m3w7fC9dL2c7XG4gICAgbGV0IGluZGV4ID0gYGA7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICB3aGlsZSAoKGluZGV4ID0gcmVnLmV4ZWMobXNnKSAhPSBudWxsKSkge1xuICAgICAgLy8g5oiq5Y+W5Lik5Liq56ym5ZCI5LmL6Ze055qE5paH5a2X77yM5YiG5q615pS+5YWl5pWw57uEXG4gICAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgcmVnLmxhc3RJbmRleCkpO1xuICAgICAgLy8g5qOA5rWL5bm25pS55Y+Y5b2T5YmN56ym5Y+357Si5byVXG4gICAgICBzdGFydCA9IHJlZy5sYXN0SW5kZXg7XG4gICAgfVxuICAgIC8vIOiOt+WPluacgOWQjuS4gOauteaWh+Wtl1xuICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCBtc2cubGVuZ3RoKSk7XG4gICAgc2VsZi50ZXh0ID0gdGVzdEFycjtcbiAgICBzZWxmLiRhcHBseSgpO1xuICB9XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge307XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAob3B0aW9ucy5tc2cpIHtcbiAgICAgIHNlbGYubXNnID0gb3B0aW9ucy5tc2c7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOm7mOiupOeVmeiogFxuICAgICAgc2VsZi5tc2cgPSBg5bCP5pe25YCZ77yM54i25Lqy5bCx5piv6aKX5Y+C5aSp5aSn5qCR77yM5Li65oiR5Lus6YGu6aOO5oyh6Zuo77yM6ZW/5aSn5LqG77yM54i25Lqy5oiQ5LqG5pys55m+56eR5YWo5Lmm77yM5Li65oiR5Lus562U55aR6Kej5oOR77yM54i25Lqy77yM5rC46L+c5piv5oiR5Lus55qE5pSv5p+x77yM54i454i477yM6IqC5pel5b+r5LmQYDtcbiAgICB9XG4gICAgc2VsZi5SZWdNc2coKTtcbiAgICBzZWxmLiRhcHBseSgpO1xuXG4gICAgLy/mmL7npLrovazlj5FcbiAgICB3eC5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8g6I635Y+W5omL5py65L+h5oGvXG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLm1vZGVsKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMud2luZG93V2lkdGgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMud2luZG93SGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmxhbmd1YWdlKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnZlcnNpb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMucGxhdGZvcm0pO1xuICAgICAgICBzZWxmLndpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyDorr7nva7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIudGl0bGUgPSAn54i25LqyJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmVwbmFtZSA9ICcnO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuc2luZ2VyID0gJ+ett+WtkOWFhOW8nyc7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5jb3ZlckltZ1VybCA9XG4gICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL2E5ZDYzNDQ4Yjg4MWUxMmVhYjQ0ZmRmY2RiZDFjYjdjX0ZvdG9yLnBuZyc7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zcmMgPVxuICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS9hdDIwMTExMjI5MjIxOTQwLm1wMyc7XG4gIH1cblxuICAvLyDlvZPpobXpnaLmmL7npLrnmoTml7blgJlcbiAgb25TaG93KCkge1xuICAgIGNvbnNvbGUubG9nKCdzaG93Jyk7XG4gICAgLy8g57un57ut5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBsYXkoKTtcbiAgfVxuICBvbkhpZGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2hpZGRlbicpO1xuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG5cbiAgLy8g5b2T6aG16Z2i5YiH5o2i77yI6ZqQ6JeP77yJ55qE5pe25YCZXG4gIG9uVW5sb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCd1bmxvYWQnKTtcbiAgICAvLyDmmoLlgZzog4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgfVxuICAvLyDorr7nva7liIbkuqvljaHniYdcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldCk7XG4gICAgfVxuICAgIC8vIOWNoeeJh+WGheWuuVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+eItuS6suiKguW/q+S5kCcsXG4gICAgICBwYXRoOiBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvZmF0aGVyP21zZz0ke3NlbGYubXNnfWAsXG4gICAgICAvLyDlsIHpnaLlm75cbiAgICAgIGltYWdlVXJsOlxuICAgICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLyVFNyU4OCVCNiVFNCVCQSVCMiVFOCU4QSU4MjExX0ZvdG9yLmpwZycsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==