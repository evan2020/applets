'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

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
      navigationBarTitleText: '祝福'
    }, _this.components = {}, _this.data = {
      msg: '', //输入框的内容
      text: '', //格式化之后要展示的内容
      recordUrl: '', //录音云文件地址
      musicState: 'running', //音乐图片动画是否暂停
      windowHeight: '100%' //手机屏幕高度
    }, _this.watch = {
      //  暂停/播放音乐
      musicState: function musicState(newValue, oldValue) {
        console.log('musicState value: ' + oldValue + ' -> ' + newValue);
        var backgroundAudioManager = wx.getBackgroundAudioManager();
        if (newValue == 'running') {
          backgroundAudioManager.play();
        } else {
          backgroundAudioManager.pause();
        }
      }
    }, _this.computed = {}, _this.methods = {
      // 切换音乐图标旋转
      toggleMusic: function toggleMusic() {
        var self = this;
        console.log('toggle');
        if (self.musicState == 'running') {
          self.musicState = 'paused';
        } else {
          self.musicState = 'running';
        }
        self.$apply();
      },

      // 播放录音
      recordPlay: function recordPlay() {
        console.log('\u64AD\u653E\u5F55\u97F3');
        var self = this;

        var innerAudioContext = wx.createInnerAudioContext();
        innerAudioContext.autoplay = true;
        innerAudioContext.src = self.recordUrl;
        innerAudioContext.onPlay(function () {
          console.log('开始播放');
        });
        innerAudioContext.onError(function (res) {
          console.log(res.errMsg);
          console.log(res.errCode);
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
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
      console.log(options);

      if (options.msg) {
        self.msg = options.msg;
      } else {
        // 默认留言
        self.msg = '\u7236\u6BCD\u5728\uFF0C\u4E0D\u8FDC\u6E38\uFF0C\u4E0D\u5728\u4F60\u4EEC\u8EAB\u8FB9\u7684\u65F6\u5019\uFF0C\u5E0C\u671B\u4F60\u4EEC\u80FD\u7167\u987E\u597D\u81EA\u5DF1\uFF0C\u65E0\u8BBA\u7E41\u5FD9\u52B3\u788C\uFF0C\u8FD8\u662F\u6E38\u73A9\u4F11\u95F2\uFF0C\u613F\u8EAB\u4F53\u5065\u5EB7\uFF0C\u613F\u5FC3\u60F3\u4E8B\u6210\uFF0C\u5988\u5988\uFF0C\u5728\u8FD9\u4E2A\u7279\u6B8A\u7684\u65E5\u5B50\uFF0C\u795D\u4F60\u8282\u65E5\u5FEB\u4E50';
      }
      self.recordUrl = options.recordUrl;
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
      backgroundAudioManager.title = '听妈妈的话';
      backgroundAudioManager.epname = '';
      backgroundAudioManager.singer = '周杰伦';
      backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000';
      backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/%E5%90%AC%E5%A6%88%E5%A6%88%E7%9A%84%E8%AF%9D_%E9%93%83%E5%A3%B0%E4%B9%8B%E5%AE%B6cnwav.mp3';
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
        console.log('res.target', res.target);
      }
      // 卡片内容
      return {
        title: '妈妈',
        path: '/pages/details/details?msg=' + self.msg + '&recordUrl=' + self.recordUrl,
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/ChMkJ1bKxYWIckH4AAF86HwJVvYAALHXAP96qIAAX0A162.jpg',
        success: function success(res) {
          // 转发成功
          var card_time = new Date();
          // 获取用户存储的用户信息
          var userinfo = wx.BaaS.storage.get('userinfo');
          // 设置头像和名称
          var user_name = userinfo.nickName || '\u672A\u767B\u5F55\u6E38\u5BA2';
          var user_openid = userinfo.openid || '\u65E0openid';
          var user_gender = userinfo.gender || '\u65E0';

          console.log('\u8F6C\u53D1\u6210\u529F', card_time, user_name, user_openid, user_gender, self.recordUrl);
          // 自定义事件上报（分享事件）
          wx.reportAnalytics('share_card', {
            card_name: '\u6BCD\u4EB2\u8282\u8D3A\u5361',
            user_name: user_name,
            card_time: card_time,
            user_openid: user_openid,
            user_gender: user_gender
          });
          // 设置模板消息通知
          // 向 tableID 为 39006 的数据表插入一条记录
          var tableID = 39006;
          var Product = new wx.BaaS.TableObject(tableID);
          var product = Product.create();

          // 设置方式一
          var apple = {
            send_card: 'Email',
            recordUrl: self.recordUrl,
            user_name: user_name,
            user_gender: user_gender,
            user_openid: user_openid,
            card_time: card_time,
            card_content: self.msg,
            card_name: '母亲节贺卡'

            // 信件已查收
            // send_card: `sendCard`,
            // state: `已接收`,
            // directions: `沙漏的时光`,
            // note: `点击查看发送内容`
          };

          product.set(apple).save().then(function (res) {
            // success
            console.log('\u521B\u5EFA\u8868\u6210\u529F');
          }, function (err) {
            // err
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/details/details'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJtc2ciLCJ0ZXh0IiwicmVjb3JkVXJsIiwibXVzaWNTdGF0ZSIsIndpbmRvd0hlaWdodCIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwid3giLCJnZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwicGxheSIsInBhdXNlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidG9nZ2xlTXVzaWMiLCJzZWxmIiwiJGFwcGx5IiwicmVjb3JkUGxheSIsImlubmVyQXVkaW9Db250ZXh0IiwiY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQiLCJhdXRvcGxheSIsInNyYyIsIm9uUGxheSIsIm9uRXJyb3IiLCJyZXMiLCJlcnJNc2ciLCJlcnJDb2RlIiwiZXZlbnRzIiwidGVzdEFyciIsInJlZyIsImluZGV4Iiwic3RhcnQiLCJleGVjIiwicHVzaCIsInN1YnN0cmluZyIsImxhc3RJbmRleCIsImxlbmd0aCIsIm9wdGlvbnMiLCJSZWdNc2ciLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJtb2RlbCIsInBpeGVsUmF0aW8iLCJ3aW5kb3dXaWR0aCIsImxhbmd1YWdlIiwidmVyc2lvbiIsInBsYXRmb3JtIiwidGl0bGUiLCJlcG5hbWUiLCJzaW5nZXIiLCJjb3ZlckltZ1VybCIsImZyb20iLCJ0YXJnZXQiLCJwYXRoIiwiaW1hZ2VVcmwiLCJjYXJkX3RpbWUiLCJEYXRlIiwidXNlcmluZm8iLCJCYWFTIiwic3RvcmFnZSIsImdldCIsInVzZXJfbmFtZSIsIm5pY2tOYW1lIiwidXNlcl9vcGVuaWQiLCJvcGVuaWQiLCJ1c2VyX2dlbmRlciIsImdlbmRlciIsInJlcG9ydEFuYWx5dGljcyIsImNhcmRfbmFtZSIsInRhYmxlSUQiLCJQcm9kdWN0IiwiVGFibGVPYmplY3QiLCJwcm9kdWN0IiwiY3JlYXRlIiwiYXBwbGUiLCJzZW5kX2NhcmQiLCJjYXJkX2NvbnRlbnQiLCJzZXQiLCJzYXZlIiwidGhlbiIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsYUFESyxFQUNJO0FBQ1RDLGNBRkssRUFFSztBQUNWQyxtQkFISyxFQUdVO0FBQ2ZDLDJCQUpLLEVBSWtCO0FBQ3ZCQyxvQkFBYyxNQUxULENBS2dCO0FBTGhCLEssUUFRUEMsSyxHQUFRO0FBQ047QUFDQUYsZ0JBRk0sc0JBRUtHLFFBRkwsRUFFZUMsUUFGZixFQUV5QjtBQUM3QkMsZ0JBQVFDLEdBQVIsd0JBQWlDRixRQUFqQyxZQUFnREQsUUFBaEQ7QUFDQSxZQUFNSSx5QkFBeUJDLEdBQUdDLHlCQUFILEVBQS9CO0FBQ0EsWUFBSU4scUJBQUosRUFBMkI7QUFDekJJLGlDQUF1QkcsSUFBdkI7QUFDRCxTQUZELE1BRU87QUFDTEgsaUNBQXVCSSxLQUF2QjtBQUNEO0FBQ0Y7QUFWSyxLLFFBa0NSQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUjtBQUNBQyxpQkFGUSx5QkFFTTtBQUNaLFlBQUlDLE9BQU8sSUFBWDtBQUNBVixnQkFBUUMsR0FBUjtBQUNBLFlBQUlTLEtBQUtmLFVBQUwsSUFBbUIsU0FBdkIsRUFBa0M7QUFDaENlLGVBQUtmLFVBQUw7QUFDRCxTQUZELE1BRU87QUFDTGUsZUFBS2YsVUFBTDtBQUNEO0FBQ0RlLGFBQUtDLE1BQUw7QUFDRCxPQVhPOztBQVlSO0FBQ0FDLGdCQWJRLHdCQWFLO0FBQ1haLGdCQUFRQyxHQUFSO0FBQ0EsWUFBSVMsT0FBTyxJQUFYOztBQUVBLFlBQU1HLG9CQUFvQlYsR0FBR1csdUJB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QUlJLFVBQVUsS0FBZDtBQUNBLGNBQUlDLFVBQVUsSUFBSWhFLEdBQUdvRCxJQUFILENBQVFhLFdBQVosQ0FBd0JGLE9BQXhCLENBQWQ7QUFDQSxjQUFJRyxVQUFVRixRQUFRRyxNQUFSLEVBQWQ7O0FBRUE7QUFDQSxjQUFJQyxRQUFRO0FBQ1ZDLHVCQUFXLE9BREQ7QUFFVjlFLHVCQUFXZ0IsS0FBS2hCLFNBRk47QUFHVmdFLGdDQUhVO0FBSVZJLG9DQUpVO0FBS1ZGLG9DQUxVO0FBTVZSLGdDQU5VO0FBT1ZxQiwwQkFBYy9ELEtBQUtsQixHQVBUO0FBUVZ5RSx1QkFBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZFUsV0FBWjs7QUFpQkFJLGtCQUNHSyxHQURILENBQ09ILEtBRFAsRUFFR0ksSUFGSCxHQUdHQyxJQUhILENBSUksZUFBTztBQUNMO0FBQ0E1RSxvQkFBUUMsR0FBUjtBQUNELFdBUEwsRUFRSSxlQUFPO0FBQ0w7QUFDRCxXQVZMO0FBWUQsU0F0RUk7QUF1RUw0RSxjQUFNLGNBQVMxRCxHQUFULEVBQWM7QUFDbEI7QUFDRDtBQXpFSSxPQUFQO0FBMkVEOzs7O0VBck9nQyxlQUFLMkQsSTs7a0JBQW5CM0YsSyIsImZpbGUiOiJkZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+elneemjydcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgbXNnOiBgYCwgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICB0ZXh0OiBgYCwgLy/moLzlvI/ljJbkuYvlkI7opoHlsZXnpLrnmoTlhoXlrrlcbiAgICByZWNvcmRVcmw6IGBgLCAvL+W9lemfs+S6keaWh+S7tuWcsOWdgFxuICAgIG11c2ljU3RhdGU6IGBydW5uaW5nYCwgLy/pn7PkuZDlm77niYfliqjnlLvmmK/lkKbmmoLlgZxcbiAgICB3aW5kb3dIZWlnaHQ6ICcxMDAlJyAvL+aJi+acuuWxj+W5lemrmOW6plxuICB9O1xuXG4gIHdhdGNoID0ge1xuICAgIC8vICDmmoLlgZwv5pKt5pS+6Z+z5LmQXG4gICAgbXVzaWNTdGF0ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBtdXNpY1N0YXRlIHZhbHVlOiAke29sZFZhbHVlfSAtPiAke25ld1ZhbHVlfWApO1xuICAgICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICAgIGlmIChuZXdWYWx1ZSA9PSBgcnVubmluZ2ApIHtcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIOWkhOeQhuS8oOmAkui/h+adpeeahOS/oeaBr1xuICBSZWdNc2coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBtc2cgPSBzZWxmLm1zZztcbiAgICBsZXQgdGVzdEFyciA9IFtdO1xuICAgIC8vIOmBh+WIsOS7peS4i+espuWPt+eri+WNs+aIquWPluWGheWuueWIhuautVxuICAgIGxldCByZWcgPSAvW++8jHwsfC5844CCfOOAgXzvvJ9877ybfDt8L10vZztcbiAgICBsZXQgaW5kZXggPSBgYDtcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIHdoaWxlICgoaW5kZXggPSByZWcuZXhlYyhtc2cpICE9IG51bGwpKSB7XG4gICAgICAvLyDmiKrlj5bkuKTkuKrnrKblkIjkuYvpl7TnmoTmloflrZfvvIzliIbmrrXmlL7lhaXmlbDnu4RcbiAgICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCByZWcubGFzdEluZGV4KSk7XG4gICAgICAvLyDmo4DmtYvlubbmlLnlj5jlvZPliY3nrKblj7fntKLlvJVcbiAgICAgIHN0YXJ0ID0gcmVnLmxhc3RJbmRleDtcbiAgICB9XG4gICAgLy8g6I635Y+W5pyA5ZCO5LiA5q615paH5a2XXG4gICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIG1zZy5sZW5ndGgpKTtcbiAgICBzZWxmLnRleHQgPSB0ZXN0QXJyO1xuICAgIHNlbGYuJGFwcGx5KCk7XG4gIH1cblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g5YiH5o2i6Z+z5LmQ5Zu+5qCH5peL6L2sXG4gICAgdG9nZ2xlTXVzaWMoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhgdG9nZ2xlYCk7XG4gICAgICBpZiAoc2VsZi5tdXNpY1N0YXRlID09ICdydW5uaW5nJykge1xuICAgICAgICBzZWxmLm11c2ljU3RhdGUgPSBgcGF1c2VkYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubXVzaWNTdGF0ZSA9IGBydW5uaW5nYDtcbiAgICAgIH1cbiAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgfSxcbiAgICAvLyDmkq3mlL7lvZXpn7NcbiAgICByZWNvcmRQbGF5KCkge1xuICAgICAgY29uc29sZS5sb2coYOaSreaUvuW9lemfs2ApO1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICBjb25zdCBpbm5lckF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IHRydWU7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSBzZWxmLnJlY29yZFVybDtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uUGxheSgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCflvIDlp4vmkq3mlL4nKTtcbiAgICAgIH0pO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FcnJvcihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyckNvZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuXG4gICAgaWYgKG9wdGlvbnMubXNnKSB7XG4gICAgICBzZWxmLm1zZyA9IG9wdGlvbnMubXNnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDpu5jorqTnlZnoqIBcbiAgICAgIHNlbGYubXNnID0gYOeItuavjeWcqO+8jOS4jei/nOa4uO+8jOS4jeWcqOS9oOS7rOi6q+i+ueeahOaXtuWAme+8jOW4jOacm+S9oOS7rOiDveeFp+mhvuWlveiHquW3se+8jOaXoOiuuue5geW/meWKs+eijO+8jOi/mOaYr+a4uOeOqeS8kemXsu+8jOaEv+i6q+S9k+WBpeW6t++8jOaEv+W/g+aDs+S6i+aIkO+8jOWmiOWmiO+8jOWcqOi/meS4queJueauiueahOaXpeWtkO+8jOelneS9oOiKguaXpeW/q+S5kGA7XG4gICAgfVxuICAgIHNlbGYucmVjb3JkVXJsID0gb3B0aW9ucy5yZWNvcmRVcmw7XG4gICAgc2VsZi5SZWdNc2coKTtcbiAgICBzZWxmLiRhcHBseSgpO1xuXG4gICAgLy/mmL7npLrovazlj5FcbiAgICB3eC5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8g6I635Y+W5omL5py65L+h5oGvXG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLm1vZGVsKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMud2luZG93V2lkdGgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMud2luZG93SGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmxhbmd1YWdlKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnZlcnNpb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMucGxhdGZvcm0pO1xuICAgICAgICBzZWxmLndpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyDorr7nva7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIudGl0bGUgPSAn5ZCs5aaI5aaI55qE6K+dJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmVwbmFtZSA9ICcnO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuc2luZ2VyID0gJ+WRqOadsOS8pic7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5jb3ZlckltZ1VybCA9XG4gICAgICAnaHR0cDovL3kuZ3RpbWcuY24vbXVzaWMvcGhvdG9fbmV3L1QwMDJSMzAweDMwME0wMDAwMDNyc0tGNDRHeWFTay5qcGc/bWF4X2FnZT0yNTkyMDAwJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNyYyA9XG4gICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLyVFNSU5MCVBQyVFNSVBNiU4OCVFNSVBNiU4OCVFNyU5QSU4NCVFOCVBRiU5RF8lRTklOTMlODMlRTUlQTMlQjAlRTQlQjklOEIlRTUlQUUlQjZjbndhdi5tcDMnO1xuICB9XG5cbiAgLy8g5b2T6aG16Z2i5pi+56S655qE5pe25YCZXG4gIG9uU2hvdygpIHtcbiAgICBjb25zb2xlLmxvZygnc2hvdycpO1xuICAgIC8vIOe7p+e7reaSreaUvuiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wbGF5KCk7XG4gIH1cbiAgb25IaWRlKCkge1xuICAgIGNvbnNvbGUubG9nKCdoaWRkZW4nKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgfVxuXG4gIC8vIOW9k+mhtemdouWIh+aNou+8iOmakOiXj++8ieeahOaXtuWAmVxuICBvblVubG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygndW5sb2FkJyk7XG4gICAgLy8g5pqC5YGc6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gIH1cbiAgLy8g6K6+572u5YiG5Lqr5Y2h54mHXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cbiAgICAgIGNvbnNvbGUubG9nKCdyZXMudGFyZ2V0JywgcmVzLnRhcmdldCk7XG4gICAgfVxuICAgIC8vIOWNoeeJh+WGheWuuVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+WmiOWmiCcsXG4gICAgICBwYXRoOiBgL3BhZ2VzL2RldGFpbHMvZGV0YWlscz9tc2c9JHtzZWxmLm1zZ30mcmVjb3JkVXJsPSR7XG4gICAgICAgIHNlbGYucmVjb3JkVXJsXG4gICAgICB9YCxcbiAgICAgIC8vIOWwgemdouWbvlxuICAgICAgaW1hZ2VVcmw6XG4gICAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vQ2hNa0oxYkt4WVdJY2tINEFBRjg2SHdKVnZZQUFMSFhBUDk2cUlBQVgwQTE2Mi5qcGcnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeaIkOWKn1xuICAgICAgICBsZXQgY2FyZF90aW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgLy8g6I635Y+W55So5oi35a2Y5YKo55qE55So5oi35L+h5oGvXG4gICAgICAgIGxldCB1c2VyaW5mbyA9IHd4LkJhYVMuc3RvcmFnZS5nZXQoYHVzZXJpbmZvYCk7XG4gICAgICAgIC8vIOiuvue9ruWktOWDj+WSjOWQjeensFxuICAgICAgICBsZXQgdXNlcl9uYW1lID0gdXNlcmluZm8ubmlja05hbWUgfHwgYOacqueZu+W9lea4uOWuomA7XG4gICAgICAgIGxldCB1c2VyX29wZW5pZCA9IHVzZXJpbmZvLm9wZW5pZCB8fCBg5pegb3BlbmlkYDtcbiAgICAgICAgbGV0IHVzZXJfZ2VuZGVyID0gdXNlcmluZm8uZ2VuZGVyIHx8IGDml6BgO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIGDovazlj5HmiJDlip9gLFxuICAgICAgICAgIGNhcmRfdGltZSxcbiAgICAgICAgICB1c2VyX25hbWUsXG4gICAgICAgICAgdXNlcl9vcGVuaWQsXG4gICAgICAgICAgdXNlcl9nZW5kZXIsXG4gICAgICAgICAgc2VsZi5yZWNvcmRVcmxcbiAgICAgICAgKTtcbiAgICAgICAgLy8g6Ieq5a6a5LmJ5LqL5Lu25LiK5oql77yI5YiG5Lqr5LqL5Lu277yJXG4gICAgICAgIHd4LnJlcG9ydEFuYWx5dGljcygnc2hhcmVfY2FyZCcsIHtcbiAgICAgICAgICBjYXJkX25hbWU6IGDmr43kurLoioLotLrljaFgLFxuICAgICAgICAgIHVzZXJfbmFtZSxcbiAgICAgICAgICBjYXJkX3RpbWUsXG4gICAgICAgICAgdXNlcl9vcGVuaWQsXG4gICAgICAgICAgdXNlcl9nZW5kZXJcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOiuvue9ruaooeadv+a2iOaBr+mAmuefpVxuICAgICAgICAvLyDlkJEgdGFibGVJRCDkuLogMzkwMDYg55qE5pWw5o2u6KGo5o+S5YWl5LiA5p2h6K6w5b2VXG4gICAgICAgIGxldCB0YWJsZUlEID0gMzkwMDY7XG4gICAgICAgIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG4gICAgICAgIGxldCBwcm9kdWN0ID0gUHJvZHVjdC5jcmVhdGUoKTtcblxuICAgICAgICAvLyDorr7nva7mlrnlvI/kuIBcbiAgICAgICAgbGV0IGFwcGxlID0ge1xuICAgICAgICAgIHNlbmRfY2FyZDogJ0VtYWlsJyxcbiAgICAgICAgICByZWNvcmRVcmw6IHNlbGYucmVjb3JkVXJsLFxuICAgICAgICAgIHVzZXJfbmFtZSxcbiAgICAgICAgICB1c2VyX2dlbmRlcixcbiAgICAgICAgICB1c2VyX29wZW5pZCxcbiAgICAgICAgICBjYXJkX3RpbWUsXG4gICAgICAgICAgY2FyZF9jb250ZW50OiBzZWxmLm1zZyxcbiAgICAgICAgICBjYXJkX25hbWU6ICfmr43kurLoioLotLrljaEnXG5cbiAgICAgICAgICAvLyDkv6Hku7blt7Lmn6XmlLZcbiAgICAgICAgICAvLyBzZW5kX2NhcmQ6IGBzZW5kQ2FyZGAsXG4gICAgICAgICAgLy8gc3RhdGU6IGDlt7LmjqXmlLZgLFxuICAgICAgICAgIC8vIGRpcmVjdGlvbnM6IGDmspnmvI/nmoTml7blhYlgLFxuICAgICAgICAgIC8vIG5vdGU6IGDngrnlh7vmn6XnnIvlj5HpgIHlhoXlrrlgXG4gICAgICAgIH07XG5cbiAgICAgICAgcHJvZHVjdFxuICAgICAgICAgIC5zZXQoYXBwbGUpXG4gICAgICAgICAgLnNhdmUoKVxuICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg5Yib5bu66KGo5oiQ5YqfYCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgLy8gZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19