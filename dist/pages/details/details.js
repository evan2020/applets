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
      formId: '', //信件的模板消息id
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
      self.formId = options.formId;
      if (options.type == 'sendLetter') {
        console.log('\u786E\u8BA4\u6536\u5230\u6765\u4FE1');
        var card_time = new Date();

        // 设置模板消息通知
        // 向 tableID 为 39006 的数据表插入一条记录
        var tableID = 39006;
        var Product = new wx.BaaS.TableObject(tableID);
        var product = Product.create();

        // 设置方式一
        var apple = {
          // 信件已查收
          send_card: 'sendCard',
          card_name: '\u6BCD\u4EB2\u8282\u8D3A\u5361',
          state: '\u5DF2\u63A5\u6536',
          directions: '\u6C99\u6F0F\u7684\u65F6\u5149',
          note: card_time
        };

        product.set(apple).save().then(function (res) {
          // success
          console.log('\u521B\u5EFA\u8868\u6210\u529F');
          console.log(res);
          console.log(options.formId);
          wx.BaaS.wxReportTicket(options.formId);
          console.log("提交formId");
        }, function (err) {
          // err
        });
      } else {
        console.log('\u6CA1\u6709\u6536\u5230\u6765\u4FE1');
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
        path: '/pages/details/details?msg=' + self.msg + '&recordUrl=' + self.recordUrl + '&formId=' + self.formId + '&type=sendLetter',
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/ChMkJ1bKxYWIckH4AAF86HwJVvYAALHXAP96qIAAX0A162.jpg',
        success: function success(res) {
          // 转发成功
          console.log('self.formId', self.formId);
          // self.sendModule();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJtc2ciLCJ0ZXh0IiwicmVjb3JkVXJsIiwiZm9ybUlkIiwibXVzaWNTdGF0ZSIsIndpbmRvd0hlaWdodCIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwid3giLCJnZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwicGxheSIsInBhdXNlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidG9nZ2xlTXVzaWMiLCJzZWxmIiwiJGFwcGx5IiwicmVjb3JkUGxheSIsImlubmVyQXVkaW9Db250ZXh0IiwiY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQiLCJhdXRvcGxheSIsInNyYyIsIm9uUGxheSIsIm9uRXJyb3IiLCJyZXMiLCJlcnJNc2ciLCJlcnJDb2RlIiwiZXZlbnRzIiwidGVzdEFyciIsInJlZyIsImluZGV4Iiwic3RhcnQiLCJleGVjIiwicHVzaCIsInN1YnN0cmluZyIsImxhc3RJbmRleCIsImxlbmd0aCIsIm9wdGlvbnMiLCJ0eXBlIiwiY2FyZF90aW1lIiwiRGF0ZSIsInRhYmxlSUQiLCJQcm9kdWN0IiwiQmFhUyIsIlRhYmxlT2JqZWN0IiwicHJvZHVjdCIsImNyZWF0ZSIsImFwcGxlIiwic2VuZF9jYXJkIiwiY2FyZF9uYW1lIiwic3RhdGUiLCJkaXJlY3Rpb25zIiwibm90ZSIsInNldCIsInNhdmUiLCJ0aGVuIiwid3hSZXBvcnRUaWNrZXQiLCJSZWdNc2ciLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJtb2RlbCIsInBpeGVsUmF0aW8iLCJ3aW5kb3dXaWR0aCIsImxhbmd1YWdlIiwidmVyc2lvbiIsInBsYXRmb3JtIiwidGl0bGUiLCJlcG5hbWUiLCJzaW5nZXIiLCJjb3ZlckltZ1VybCIsImZyb20iLCJ0YXJnZXQiLCJwYXRoIiwiaW1hZ2VVcmwiLCJ1c2VyaW5mbyIsInN0b3JhZ2UiLCJnZXQiLCJ1c2VyX25hbWUiLCJuaWNrTmFtZSIsInVzZXJfb3BlbmlkIiwib3BlbmlkIiwidXNlcl9nZW5kZXIiLCJnZW5kZXIiLCJyZXBvcnRBbmFseXRpY3MiLCJjYXJkX2NvbnRlbnQiLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGFBREssRUFDSTtBQUNUQyxjQUZLLEVBRUs7QUFDVkMsbUJBSEssRUFHVTtBQUNmQyxnQkFKSyxFQUlPO0FBQ1pDLDJCQUxLLEVBS2tCO0FBQ3ZCQyxvQkFBYyxNQU5ULENBTWdCO0FBTmhCLEssUUFTUEMsSyxHQUFRO0FBQ047QUFDQUYsZ0JBRk0sc0JBRUtHLFFBRkwsRUFFZUMsUUFGZixFQUV5QjtBQUM3QkMsZ0JBQVFDLEdBQVIsd0JBQWlDRixRQUFqQyxZQUFnREQsUUFBaEQ7QUFDQSxZQUFNSSx5QkFBeUJDLEdBQUdDLHlCQUFILEVBQS9CO0FBQ0EsWUFBSU4scUJBQUosRUFBMkI7QUFDekJJLGlDQUF1QkcsSUFBdkI7QUFDRCxTQUZELE1BRU87QUFDTEgsaUNBQXVCSSxLQUF2QjtBQUNEO0FBQ0Y7QUFWSyxLLFFBa0NSQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUjtBQUNBQyxpQkFGUSx5QkFFTTtBQUNaLFlBQUlDLE9BQU8sSUFBWDtBQUNBVixnQkFBUUMsR0FBUjtBQUNBLFlBQUlTLEtBQUtmLFVBQUwsSUFBbUIsU0FBdkIsRUFBa0M7QUFDaENlLGVBQUtmLFVBQUw7QUFDRCxTQUZELE1BRU87QUFDTGUsZUFBS2YsVUFBTDtBQUNEO0FBQ0RlLGFBQUtDLE1BQUw7QUFDRCxPQVhPOztBQVlSO0FBQ0FDLGdC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eEIsQ0FBZDtBQUNBLGNBQUlJLFVBQVVILFFBQVFJLE1BQVIsRUFBZDs7QUFFQTtBQUNBLGNBQUlDLFFBQVE7QUFDVkMsdUJBQVcsT0FERDtBQUVWbEQsdUJBQVdpQixLQUFLakIsU0FGTjtBQUdWaUYsZ0NBSFU7QUFJVkksb0NBSlU7QUFLVkYsb0NBTFU7QUFNVjFDLGdDQU5VO0FBT1YrQywwQkFBY3ZFLEtBQUtuQixHQVBUO0FBUVZxRCx1QkFBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZFUsV0FBWjs7QUFpQkFKLGtCQUNHUSxHQURILENBQ09OLEtBRFAsRUFFR08sSUFGSCxHQUdHQyxJQUhILENBSUksZUFBTztBQUNMO0FBQ0FsRCxvQkFBUUMsR0FBUjtBQUNELFdBUEwsRUFRSSxlQUFPO0FBQ0w7QUFDRCxXQVZMO0FBWUQsU0F4RUk7QUF5RUxpRixjQUFNLGNBQVMvRCxHQUFULEVBQWM7QUFDbEI7QUFDRDtBQTNFSSxPQUFQO0FBNkVEOzs7O0VBaFJnQyxlQUFLZ0UsSTs7a0JBQW5CakcsSyIsImZpbGUiOiJkZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+elneemjydcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgbXNnOiBgYCwgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICB0ZXh0OiBgYCwgLy/moLzlvI/ljJbkuYvlkI7opoHlsZXnpLrnmoTlhoXlrrlcbiAgICByZWNvcmRVcmw6IGBgLCAvL+W9lemfs+S6keaWh+S7tuWcsOWdgFxuICAgIGZvcm1JZDogYGAsIC8v5L+h5Lu255qE5qih5p2/5raI5oGvaWRcbiAgICBtdXNpY1N0YXRlOiBgcnVubmluZ2AsIC8v6Z+z5LmQ5Zu+54mH5Yqo55S75piv5ZCm5pqC5YGcXG4gICAgd2luZG93SGVpZ2h0OiAnMTAwJScgLy/miYvmnLrlsY/luZXpq5jluqZcbiAgfTtcblxuICB3YXRjaCA9IHtcbiAgICAvLyAg5pqC5YGcL+aSreaUvumfs+S5kFxuICAgIG11c2ljU3RhdGUobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgbXVzaWNTdGF0ZSB2YWx1ZTogJHtvbGRWYWx1ZX0gLT4gJHtuZXdWYWx1ZX1gKTtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgICBpZiAobmV3VmFsdWUgPT0gYHJ1bm5pbmdgKSB7XG4gICAgICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGxheSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyDlpITnkIbkvKDpgJLov4fmnaXnmoTkv6Hmga9cbiAgUmVnTXNnKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgbXNnID0gc2VsZi5tc2c7XG4gICAgbGV0IHRlc3RBcnIgPSBbXTtcbiAgICAvLyDpgYfliLDku6XkuIvnrKblj7fnq4vljbPmiKrlj5blhoXlrrnliIbmrrVcbiAgICBsZXQgcmVnID0gL1vvvIx8LHwufOOAgnzjgIF877yffO+8m3w7fC9dL2c7XG4gICAgbGV0IGluZGV4ID0gYGA7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICB3aGlsZSAoKGluZGV4ID0gcmVnLmV4ZWMobXNnKSAhPSBudWxsKSkge1xuICAgICAgLy8g5oiq5Y+W5Lik5Liq56ym5ZCI5LmL6Ze055qE5paH5a2X77yM5YiG5q615pS+5YWl5pWw57uEXG4gICAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgcmVnLmxhc3RJbmRleCkpO1xuICAgICAgLy8g5qOA5rWL5bm25pS55Y+Y5b2T5YmN56ym5Y+357Si5byVXG4gICAgICBzdGFydCA9IHJlZy5sYXN0SW5kZXg7XG4gICAgfVxuICAgIC8vIOiOt+WPluacgOWQjuS4gOauteaWh+Wtl1xuICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCBtc2cubGVuZ3RoKSk7XG4gICAgc2VsZi50ZXh0ID0gdGVzdEFycjtcbiAgICBzZWxmLiRhcHBseSgpO1xuICB9XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIC8vIOWIh+aNoumfs+S5kOWbvuagh+aXi+i9rFxuICAgIHRvZ2dsZU11c2ljKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2coYHRvZ2dsZWApO1xuICAgICAgaWYgKHNlbGYubXVzaWNTdGF0ZSA9PSAncnVubmluZycpIHtcbiAgICAgICAgc2VsZi5tdXNpY1N0YXRlID0gYHBhdXNlZGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLm11c2ljU3RhdGUgPSBgcnVubmluZ2A7XG4gICAgICB9XG4gICAgICBzZWxmLiRhcHBseSgpO1xuICAgIH0sXG4gICAgLy8g5pKt5pS+5b2V6Z+zXG4gICAgcmVjb3JkUGxheSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGDmkq3mlL7lvZXpn7NgKTtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgY29uc3QgaW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gc2VsZi5yZWNvcmRVcmw7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vblBsYXkoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn5byA5aeL5pKt5pS+Jyk7XG4gICAgICB9KTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uRXJyb3IocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJDb2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcblxuICAgIGlmIChvcHRpb25zLm1zZykge1xuICAgICAgc2VsZi5tc2cgPSBvcHRpb25zLm1zZztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6buY6K6k55WZ6KiAXG4gICAgICBzZWxmLm1zZyA9IGDniLbmr43lnKjvvIzkuI3ov5zmuLjvvIzkuI3lnKjkvaDku6zouqvovrnnmoTml7blgJnvvIzluIzmnJvkvaDku6zog73nhafpob7lpb3oh6rlt7HvvIzml6DorrrnuYHlv5nlirPnoozvvIzov5jmmK/muLjnjqnkvJHpl7LvvIzmhL/ouqvkvZPlgaXlurfvvIzmhL/lv4Pmg7PkuovmiJDvvIzlpojlpojvvIzlnKjov5nkuKrnibnmrornmoTml6XlrZDvvIznpZ3kvaDoioLml6Xlv6vkuZBgO1xuICAgIH1cbiAgICBzZWxmLnJlY29yZFVybCA9IG9wdGlvbnMucmVjb3JkVXJsO1xuICAgIHNlbGYuZm9ybUlkID0gb3B0aW9ucy5mb3JtSWQ7XG4gICAgaWYgKG9wdGlvbnMudHlwZSA9PSBgc2VuZExldHRlcmApIHtcbiAgICAgIGNvbnNvbGUubG9nKGDnoa7orqTmlLbliLDmnaXkv6FgKTtcbiAgICAgIGxldCBjYXJkX3RpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgXG4gICAgICAvLyDorr7nva7mqKHmnb/mtojmga/pgJrnn6VcbiAgICAgIC8vIOWQkSB0YWJsZUlEIOS4uiAzOTAwNiDnmoTmlbDmja7ooajmj5LlhaXkuIDmnaHorrDlvZVcbiAgICAgIGxldCB0YWJsZUlEID0gMzkwMDY7XG4gICAgICBsZXQgUHJvZHVjdCA9IG5ldyB3eC5CYWFTLlRhYmxlT2JqZWN0KHRhYmxlSUQpO1xuICAgICAgbGV0IHByb2R1Y3QgPSBQcm9kdWN0LmNyZWF0ZSgpO1xuXG4gICAgICAvLyDorr7nva7mlrnlvI/kuIBcbiAgICAgIGxldCBhcHBsZSA9IHtcbiAgICAgICAgLy8g5L+h5Lu25bey5p+l5pS2XG4gICAgICAgIHNlbmRfY2FyZDogYHNlbmRDYXJkYCxcbiAgICAgICAgY2FyZF9uYW1lOiBg5q+N5Lqy6IqC6LS65Y2hYCxcbiAgICAgICAgc3RhdGU6IGDlt7LmjqXmlLZgLFxuICAgICAgICBkaXJlY3Rpb25zOiBg5rKZ5ryP55qE5pe25YWJYCxcbiAgICAgICAgbm90ZTogY2FyZF90aW1lXG4gICAgICB9O1xuXG4gICAgICBwcm9kdWN0XG4gICAgICAgIC5zZXQoYXBwbGUpXG4gICAgICAgIC5zYXZlKClcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDliJvlu7rooajmiJDlip9gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zLmZvcm1JZCk7XG4gICAgICAgICAgICB3eC5CYWFTLnd4UmVwb3J0VGlja2V0KG9wdGlvbnMuZm9ybUlkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5o+Q5LqkZm9ybUlkXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgIC8vIGVyclxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYOayoeacieaUtuWIsOadpeS/oWApO1xuICAgIH1cbiAgICBzZWxmLlJlZ01zZygpO1xuICAgIHNlbGYuJGFwcGx5KCk7XG5cbiAgICAvL+aYvuekuui9rOWPkVxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5bmiYvmnLrkv6Hmga9cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMubW9kZWwpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMucGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy53aW5kb3dXaWR0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy53aW5kb3dIZWlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMubGFuZ3VhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudmVyc2lvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5wbGF0Zm9ybSk7XG4gICAgICAgIHNlbGYud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIOiuvue9ruiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci50aXRsZSA9ICflkKzlpojlpojnmoTor50nO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuZXBuYW1lID0gJyc7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zaW5nZXIgPSAn5ZGo5p2w5LymJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmNvdmVySW1nVXJsID1cbiAgICAgICdodHRwOi8veS5ndGltZy5jbi9tdXNpYy9waG90b19uZXcvVDAwMlIzMDB4MzAwTTAwMDAwM3JzS0Y0NEd5YVNrLmpwZz9tYXhfYWdlPTI1OTIwMDAnO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuc3JjID1cbiAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vJUU1JTkwJUFDJUU1JUE2JTg4JUU1JUE2JTg4JUU3JTlBJTg0JUU4JUFGJTlEXyVFOSU5MyU4MyVFNSVBMyVCMCVFNCVCOSU4QiVFNSVBRSVCNmNud2F2Lm1wMyc7XG4gIH1cblxuICAvLyDlvZPpobXpnaLmmL7npLrnmoTml7blgJlcbiAgb25TaG93KCkge1xuICAgIGNvbnNvbGUubG9nKCdzaG93Jyk7XG4gICAgLy8g57un57ut5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBsYXkoKTtcbiAgfVxuICBvbkhpZGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2hpZGRlbicpO1xuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG5cbiAgLy8g5b2T6aG16Z2i5YiH5o2i77yI6ZqQ6JeP77yJ55qE5pe25YCZXG4gIG9uVW5sb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCd1bmxvYWQnKTtcbiAgICAvLyDmmoLlgZzog4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgfVxuICAvLyDorr7nva7liIbkuqvljaHniYdcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgY29uc29sZS5sb2coJ3Jlcy50YXJnZXQnLCByZXMudGFyZ2V0KTtcbiAgICB9XG4gICAgLy8g5Y2h54mH5YaF5a65XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5aaI5aaIJyxcbiAgICAgIHBhdGg6IGAvcGFnZXMvZGV0YWlscy9kZXRhaWxzP21zZz0ke3NlbGYubXNnfSZyZWNvcmRVcmw9JHtcbiAgICAgICAgc2VsZi5yZWNvcmRVcmxcbiAgICAgIH0mZm9ybUlkPSR7c2VsZi5mb3JtSWR9JnR5cGU9c2VuZExldHRlcmAsXG4gICAgICAvLyDlsIHpnaLlm75cbiAgICAgIGltYWdlVXJsOlxuICAgICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL0NoTWtKMWJLeFlXSWNrSDRBQUY4Nkh3SlZ2WUFBTEhYQVA5NnFJQUFYMEExNjIuanBnJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgY29uc29sZS5sb2coJ3NlbGYuZm9ybUlkJywgc2VsZi5mb3JtSWQpO1xuICAgICAgICAvLyBzZWxmLnNlbmRNb2R1bGUoKTtcbiAgICAgICAgbGV0IGNhcmRfdGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+WtmOWCqOeahOeUqOaIt+S/oeaBr1xuICAgICAgICBsZXQgdXNlcmluZm8gPSB3eC5CYWFTLnN0b3JhZ2UuZ2V0KGB1c2VyaW5mb2ApO1xuICAgICAgICAvLyDorr7nva7lpLTlg4/lkozlkI3np7BcbiAgICAgICAgbGV0IHVzZXJfbmFtZSA9IHVzZXJpbmZvLm5pY2tOYW1lIHx8IGDmnKrnmbvlvZXmuLjlrqJgO1xuICAgICAgICBsZXQgdXNlcl9vcGVuaWQgPSB1c2VyaW5mby5vcGVuaWQgfHwgYOaXoG9wZW5pZGA7XG4gICAgICAgIGxldCB1c2VyX2dlbmRlciA9IHVzZXJpbmZvLmdlbmRlciB8fCBg5pegYDtcblxuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBg6L2s5Y+R5oiQ5YqfYCxcbiAgICAgICAgICBjYXJkX3RpbWUsXG4gICAgICAgICAgdXNlcl9uYW1lLFxuICAgICAgICAgIHVzZXJfb3BlbmlkLFxuICAgICAgICAgIHVzZXJfZ2VuZGVyLFxuICAgICAgICAgIHNlbGYucmVjb3JkVXJsXG4gICAgICAgICk7XG4gICAgICAgIC8vIOiHquWumuS5ieS6i+S7tuS4iuaKpe+8iOWIhuS6q+S6i+S7tu+8iVxuICAgICAgICB3eC5yZXBvcnRBbmFseXRpY3MoJ3NoYXJlX2NhcmQnLCB7XG4gICAgICAgICAgY2FyZF9uYW1lOiBg5q+N5Lqy6IqC6LS65Y2hYCxcbiAgICAgICAgICB1c2VyX25hbWUsXG4gICAgICAgICAgY2FyZF90aW1lLFxuICAgICAgICAgIHVzZXJfb3BlbmlkLFxuICAgICAgICAgIHVzZXJfZ2VuZGVyXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDorr7nva7mqKHmnb/mtojmga/pgJrnn6VcbiAgICAgICAgLy8g5ZCRIHRhYmxlSUQg5Li6IDM5MDA2IOeahOaVsOaNruihqOaPkuWFpeS4gOadoeiusOW9lVxuICAgICAgICBsZXQgdGFibGVJRCA9IDM5MDA2O1xuICAgICAgICBsZXQgUHJvZHVjdCA9IG5ldyB3eC5CYWFTLlRhYmxlT2JqZWN0KHRhYmxlSUQpO1xuICAgICAgICBsZXQgcHJvZHVjdCA9IFByb2R1Y3QuY3JlYXRlKCk7XG5cbiAgICAgICAgLy8g6K6+572u5pa55byP5LiAXG4gICAgICAgIGxldCBhcHBsZSA9IHtcbiAgICAgICAgICBzZW5kX2NhcmQ6ICdFbWFpbCcsXG4gICAgICAgICAgcmVjb3JkVXJsOiBzZWxmLnJlY29yZFVybCxcbiAgICAgICAgICB1c2VyX25hbWUsXG4gICAgICAgICAgdXNlcl9nZW5kZXIsXG4gICAgICAgICAgdXNlcl9vcGVuaWQsXG4gICAgICAgICAgY2FyZF90aW1lLFxuICAgICAgICAgIGNhcmRfY29udGVudDogc2VsZi5tc2csXG4gICAgICAgICAgY2FyZF9uYW1lOiAn5q+N5Lqy6IqC6LS65Y2hJ1xuXG4gICAgICAgICAgLy8g5L+h5Lu25bey5p+l5pS2XG4gICAgICAgICAgLy8gc2VuZF9jYXJkOiBgc2VuZENhcmRgLFxuICAgICAgICAgIC8vIHN0YXRlOiBg5bey5o6l5pS2YCxcbiAgICAgICAgICAvLyBkaXJlY3Rpb25zOiBg5rKZ5ryP55qE5pe25YWJYCxcbiAgICAgICAgICAvLyBub3RlOiBg54K55Ye75p+l55yL5Y+R6YCB5YaF5a65YFxuICAgICAgICB9O1xuXG4gICAgICAgIHByb2R1Y3RcbiAgICAgICAgICAuc2V0KGFwcGxlKVxuICAgICAgICAgIC5zYXZlKClcbiAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYOWIm+W7uuihqOaIkOWKn2ApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==