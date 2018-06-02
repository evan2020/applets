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
      navigationBarTitleText: '520'
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
        self.msg = '\u4ED6\u4EEC\u8BF4\uFF0C\u8FD9\u4E2A\u4E16\u754C\u4E0A\uFF0C\u6D77\u6700\u6DF1\u9083\uFF0C\u5E72\u51C0\u53C8\u900F\u660E\uFF0C\u6211\u60F3\uFF0C\u90A3\u662F\u4ED6\u4EEC\u6CA1\u89C1\u8FC7\u4F60\u7684\u773C\u775B';
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
      backgroundAudioManager.title = '就是爱你';
      backgroundAudioManager.epname = '';
      backgroundAudioManager.singer = '陶喆';
      backgroundAudioManager.coverImgUrl = 'https://om83cysj8.qnssl.com/123jjdln%20%28153%29_Fotor.jpg';
      backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/552.mp3';
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
        title: '我爱你',
        path: '/appletsA/pages/details/520?msg=' + self.msg,
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/33809_2014021217065921537600.jpg',
        success: function success(res) {
          // 转发成功
          var card_time = new Date();
          // 获取用户存储的用户信息
          var userinfo = wx.BaaS.storage.get('userinfo');
          // 设置头像和名称
          var user_name = userinfo.nickName || '\u672A\u767B\u5F55\u6E38\u5BA2';
          var user_openid = userinfo.openid || '\u65E0openid';
          var user_gender = userinfo.gender || '\u65E0';
          console.log('\u8F6C\u53D1\u6210\u529F', card_time, user_name, user_openid, user_gender);
          // 自定义事件上报（分享事件）
          wx.reportAnalytics('share_card', {
            card_name: '520',
            user_name: user_name,
            card_time: card_time,
            user_openid: user_openid,
            user_gender: user_gender
          });
        },
        fail: function fail(res) {
          // 转发失败
        }
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/520'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjUyMC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIm1zZyIsInRleHQiLCJ3aW5kb3dIZWlnaHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJzZWxmIiwidGVzdEFyciIsInJlZyIsImluZGV4Iiwic3RhcnQiLCJleGVjIiwicHVzaCIsInN1YnN0cmluZyIsImxhc3RJbmRleCIsImxlbmd0aCIsIiRhcHBseSIsIm9wdGlvbnMiLCJSZWdNc2ciLCJ3eCIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtb2RlbCIsInBpeGVsUmF0aW8iLCJ3aW5kb3dXaWR0aCIsImxhbmd1YWdlIiwidmVyc2lvbiIsInBsYXRmb3JtIiwiYmFja2dyb3VuZEF1ZGlvTWFuYWdlciIsImdldEJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJ0aXRsZSIsImVwbmFtZSIsInNpbmdlciIsImNvdmVySW1nVXJsIiwic3JjIiwicGxheSIsInBhdXNlIiwiZnJvbSIsInRhcmdldCIsInBhdGgiLCJpbWFnZVVybCIsImNhcmRfdGltZSIsIkRhdGUiLCJ1c2VyaW5mbyIsIkJhYVMiLCJzdG9yYWdlIiwiZ2V0IiwidXNlcl9uYW1lIiwibmlja05hbWUiLCJ1c2VyX29wZW5pZCIsIm9wZW5pZCIsInVzZXJfZ2VuZGVyIiwiZ2VuZGVyIiwicmVwb3J0QW5hbHl0aWNzIiwiY2FyZF9uYW1lIiwiZmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxhQURLLEVBQ0k7QUFDVEMsY0FGSyxFQUVL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TFIsZUFBTyxLQURGO0FBRUxTLG1EQUF5Q3RDLEtBQUtOLEdBRnpDO0FBR0w7QUFDQTZDLGtCQUNFLDhEQUxHO0FBTUx0QixpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCO0FBQ0EsY0FBSXNCLFlBQVksSUFBSUMsSUFBSixFQUFoQjtBQUNBO0FBQ0EsY0FBSUMsV0FBVzdCLEdBQUc4QixJQUFILENBQVFDLE9BQVIsQ0FBZ0JDLEdBQWhCLFlBQWY7QUFDQTtBQUNBLGNBQUlDLFlBQVlKLFNBQVNLLFFBQVQsb0NBQWhCO0FBQ0EsY0FBSUMsY0FBY04sU0FBU08sTUFBVCxrQkFBbEI7QUFDQSxjQUFJQyxjQUFjUixTQUFTUyxNQUFULFlBQWxCO0FBQ0FoQyxrQkFBUUMsR0FBUiw2QkFBb0JvQixTQUFwQixFQUErQk0sU0FBL0IsRUFBMENFLFdBQTFDLEVBQXVERSxXQUF2RDtBQUNBO0FBQ0FyQyxhQUFHdUMsZUFBSCxDQUFtQixZQUFuQixFQUFpQztBQUMvQkMsNEJBRCtCO0FBRS9CUCxnQ0FGK0I7QUFHL0JOLGdDQUgrQjtBQUkvQlEsb0NBSitCO0FBSy9CRTtBQUwrQixXQUFqQztBQU9ELFNBeEJJO0FBeUJMSSxjQUFNLGNBQVNwQyxHQUFULEVBQWM7QUFDbEI7QUFDRDtBQTNCSSxPQUFQO0FBNkJEOzs7O0VBMUlnQyxlQUFLcUMsSTs7a0JBQW5CbEUsSyIsImZpbGUiOiI1MjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnNTIwJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICBtc2c6IGBgLCAvL+i+k+WFpeahhueahOWGheWuuVxuICAgIHRleHQ6IGBgLCAvL+agvOW8j+WMluS5i+WQjuimgeWxleekuueahOWGheWuuVxuICAgIHdpbmRvd0hlaWdodDogJzEwMCUnIC8v5omL5py65bGP5bmV6auY5bqmXG4gIH07XG5cbiAgICAvLyDlpITnkIbkvKDpgJLov4fmnaXnmoTkv6Hmga9cbiAgUmVnTXNnKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgbXNnID0gc2VsZi5tc2c7XG4gICAgbGV0IHRlc3RBcnIgPSBbXTtcbiAgICAvLyDpgYfliLDku6XkuIvnrKblj7fnq4vljbPmiKrlj5blhoXlrrnliIbmrrVcbiAgICBsZXQgcmVnID0gL1vvvIx8LHwufOOAgnzjgIF877yffO+8m3w7fC9dL2c7XG4gICAgbGV0IGluZGV4ID0gYGA7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICB3aGlsZSAoKGluZGV4ID0gcmVnLmV4ZWMobXNnKSAhPSBudWxsKSkge1xuICAgICAgLy8g5oiq5Y+W5Lik5Liq56ym5ZCI5LmL6Ze055qE5paH5a2X77yM5YiG5q615pS+5YWl5pWw57uEXG4gICAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgcmVnLmxhc3RJbmRleCkpO1xuICAgICAgLy8g5qOA5rWL5bm25pS55Y+Y5b2T5YmN56ym5Y+357Si5byVXG4gICAgICBzdGFydCA9IHJlZy5sYXN0SW5kZXg7XG4gICAgfVxuICAgIC8vIOiOt+WPluacgOWQjuS4gOauteaWh+Wtl1xuICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCBtc2cubGVuZ3RoKSk7XG4gICAgc2VsZi50ZXh0ID0gdGVzdEFycjtcbiAgICBzZWxmLiRhcHBseSgpO1xuICB9XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge307XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAob3B0aW9ucy5tc2cpIHtcbiAgICAgIHNlbGYubXNnID0gb3B0aW9ucy5tc2c7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOm7mOiupOeVmeiogFxuICAgICAgc2VsZi5tc2cgPSBg5LuW5Lus6K+077yM6L+Z5Liq5LiW55WM5LiK77yM5rW35pyA5rex6YKD77yM5bmy5YeA5Y+I6YCP5piO77yM5oiR5oOz77yM6YKj5piv5LuW5Lus5rKh6KeB6L+H5L2g55qE55y8552bYDtcbiAgICB9XG4gICAgc2VsZi5SZWdNc2coKTtcbiAgICBzZWxmLiRhcHBseSgpO1xuXG4gICAgLy/mmL7npLrovazlj5FcbiAgICB3eC5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8g6I635Y+W5omL5py65L+h5oGvXG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLm1vZGVsKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMud2luZG93V2lkdGgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMud2luZG93SGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmxhbmd1YWdlKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnZlcnNpb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMucGxhdGZvcm0pO1xuICAgICAgICBzZWxmLndpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyDorr7nva7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIudGl0bGUgPSAn5bCx5piv54ix5L2gJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmVwbmFtZSA9ICcnO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuc2luZ2VyID0gJ+mZtuWWhic7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5jb3ZlckltZ1VybCA9XG4gICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzEyM2pqZGxuJTIwJTI4MTUzJTI5X0ZvdG9yLmpwZyc7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zcmMgPVxuICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS81NTIubXAzJztcbiAgfVxuXG4gIC8vIOW9k+mhtemdouaYvuekuueahOaXtuWAmVxuICBvblNob3coKSB7XG4gICAgY29uc29sZS5sb2coJ3Nob3cnKTtcbiAgICAvLyDnu6fnu63mkq3mlL7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGxheSgpO1xuICB9XG4gIG9uSGlkZSgpIHtcbiAgICBjb25zb2xlLmxvZygnaGlkZGVuJyk7XG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gIH1cblxuICAvLyDlvZPpobXpnaLliIfmjaLvvIjpmpDol4/vvInnmoTml7blgJlcbiAgb25VbmxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ3VubG9hZCcpO1xuICAgIC8vIOaaguWBnOiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG4gIC8vIOiuvue9ruWIhuS6q+WNoeeJh1xuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KTtcbiAgICB9XG4gICAgLy8g5Y2h54mH5YaF5a65XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5oiR54ix5L2gJyxcbiAgICAgIHBhdGg6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy81MjA/bXNnPSR7c2VsZi5tc2d9YCxcbiAgICAgIC8vIOWwgemdouWbvlxuICAgICAgaW1hZ2VVcmw6XG4gICAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMzM4MDlfMjAxNDAyMTIxNzA2NTkyMTUzNzYwMC5qcGcnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeaIkOWKn1xuICAgICAgICBsZXQgY2FyZF90aW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgLy8g6I635Y+W55So5oi35a2Y5YKo55qE55So5oi35L+h5oGvXG4gICAgICAgIGxldCB1c2VyaW5mbyA9IHd4LkJhYVMuc3RvcmFnZS5nZXQoYHVzZXJpbmZvYCk7XG4gICAgICAgIC8vIOiuvue9ruWktOWDj+WSjOWQjeensFxuICAgICAgICBsZXQgdXNlcl9uYW1lID0gdXNlcmluZm8ubmlja05hbWUgfHwgYOacqueZu+W9lea4uOWuomA7XG4gICAgICAgIGxldCB1c2VyX29wZW5pZCA9IHVzZXJpbmZvLm9wZW5pZCB8fCBg5pegb3BlbmlkYDtcbiAgICAgICAgbGV0IHVzZXJfZ2VuZGVyID0gdXNlcmluZm8uZ2VuZGVyIHx8IGDml6BgO1xuICAgICAgICBjb25zb2xlLmxvZyhg6L2s5Y+R5oiQ5YqfYCwgY2FyZF90aW1lLCB1c2VyX25hbWUsIHVzZXJfb3BlbmlkLCB1c2VyX2dlbmRlcik7XG4gICAgICAgIC8vIOiHquWumuS5ieS6i+S7tuS4iuaKpe+8iOWIhuS6q+S6i+S7tu+8iVxuICAgICAgICB3eC5yZXBvcnRBbmFseXRpY3MoJ3NoYXJlX2NhcmQnLCB7XG4gICAgICAgICAgY2FyZF9uYW1lOiBgNTIwYCxcbiAgICAgICAgICB1c2VyX25hbWUsXG4gICAgICAgICAgY2FyZF90aW1lLFxuICAgICAgICAgIHVzZXJfb3BlbmlkLFxuICAgICAgICAgIHVzZXJfZ2VuZGVyLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19