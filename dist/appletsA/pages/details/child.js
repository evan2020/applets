'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
      msg: '', //输入框的内容
      text: '', //格式化之后要展示的内容
      recordUrl: '', //录音云文件地址
      musicState: 'running', //音乐图片动画是否暂停
      windowHeight: '100%', //手机屏幕高度
      timeCheckVal: 'unlimited', //信件有效期
      timeNow: '' //转发的时间戳
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
      var timeCheckNow = new Date();
      var timeNow = timeCheckNow.getTime();
      console.log(options);
      if (options.timeNow) {
        var nowTime = parseInt(options.timeNow);
        if (options.timeCheckVal == 'unlimited') {
          timeNow = 1;
        } else if (options.timeCheckVal == '30min') {
          console.log('nowTime', nowTime);
          console.log(typeof nowTime === 'undefined' ? 'undefined' : _typeof(nowTime));
          nowTime = nowTime + 1000 * 60 * 30;
          // nowTime = nowTime + 1000 * 30;
          console.log('nowTime', nowTime);
        } else if (options.timeCheckVal == '3hour') {
          nowTime = nowTime + 1000 * 60 * 60 * 3;
        } else if (options.timeCheckVal == '3day') {
          nowTime = nowTime + 1000 * 60 * 60 * 24 * 3;
        }
        // 如果信件在有效期内
        if (nowTime > timeNow) {
          // 设置背景音乐
          var backgroundAudioManager = wx.getBackgroundAudioManager();
          backgroundAudioManager.title = '韩国可爱';
          backgroundAudioManager.epname = '';
          backgroundAudioManager.singer = '铃声';
          backgroundAudioManager.coverImgUrl = 'https://om83cysj8.qnssl.com/924d_700x962_Fotor.jpg';
          backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/291204372936670.mp3';
        } else {
          // 如果信件不在有效期内，就弹出过期提示，并隐藏信件内容
          wx.redirectTo({
            url: '/appletsB/pages/nodata/nodata'
          });
        }
      } else {}

      if (options.msg) {
        self.msg = options.msg;
      } else {
        // 默认留言
        self.msg = '\u516D\u4E00\u513F\u7AE5\u8282\uFF0C\u9001\u4F60\u516D\u4EFD\u5927\u793C\uFF0C\u846B\u82A6\u5A03\u7684\u52C7\u6562\uFF0C\u5965\u7279\u66FC\u7684\u65E0\u654C\uFF0C\u4E00\u4F11\u54E5\u7684\u806A\u660E\uFF0C\u84DD\u7CBE\u7075\u7684\u4F36\u4FD0\uFF0C\u7C73\u8001\u9F20\u7684\u6F47\u6D12\uFF0C\u82B1\u4ED9\u5B50\u7684\u7F8E\u4E3D\uFF0C\u613F\u4F60\u7684\u751F\u6D3B\u50CF\u7AE5\u8BDD\u4E00\u6837\u7CBE\u5F69\uFF01';
      }
      self.recordUrl = options.recordUrl;
      self.timeCheckVal = options.timeCheckVal;
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
    }

    // 当页面显示的时候

  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      console.log('show');
      // 继续播放背景音乐
      var backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.play();
      backgroundAudioManager.onPlay(function () {
        console.log('onPlay');
        self.musicState = 'running';
      });
      backgroundAudioManager.onPause(function () {
        console.log('onPause');
        self.musicState = 'paused';
      });
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
      var timeCheckNow = new Date();
      var timeNow = timeCheckNow.getTime();
      self.timeNow = timeNow;
      self.$apply();
      console.log('timeNow ' + timeNow);
      console.log(typeof timeNow === 'undefined' ? 'undefined' : _typeof(timeNow));
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      // 卡片内容
      return {
        title: '儿童节快乐',
        path: '/appletsA/pages/details/child?msg=' + self.msg + '&recordUrl=' + self.recordUrl + '&timeCheckVal=' + self.timeCheckVal + '&timeNow=' + self.timeNow,
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/tooopen_sy_162661186586.jpg',
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
            card_name: '\u516D\u4E00\u513F\u7AE5\u8282\u8D3A\u5361',
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
            card_name: '六一儿童节贺卡'
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
          console.log('\u8F6C\u53D1\u5931\u8D25');
        }
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/child'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwibXNnIiwidGV4dCIsInJlY29yZFVybCIsIm11c2ljU3RhdGUiLCJ3aW5kb3dIZWlnaHQiLCJ0aW1lQ2hlY2tWYWwiLCJ0aW1lTm93Iiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJ3eCIsImdldEJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJwbGF5IiwicGF1c2UiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0b2dnbGVNdXNpYyIsInNlbGYiLCIkYXBwbHkiLCJyZWNvcmRQbGF5IiwiaW5uZXJBdWRpb0NvbnRleHQiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsImF1dG9wbGF5Iiwic3JjIiwib25QbGF5Iiwib25FcnJvciIsInJlcyIsImVyck1zZyIsImVyckNvZGUiLCJldmVudHMiLCJ0ZXN0QXJyIiwicmVnIiwiaW5kZXgiLCJzdGFydCIsImV4ZWMiLCJwdXNoIiwic3Vic3RyaW5nIiwibGFzdEluZGV4IiwibGVuZ3RoIiwib3B0aW9ucyIsInRpbWVDaGVja05vdyIsIkRhdGUiLCJnZXRUaW1lIiwibm93VGltZSIsInBhcnNlSW50IiwidGl0bGUiLCJlcG5hbWUiLCJzaW5nZXIiLCJjb3ZlckltZ1VybCIsInJlZGlyZWN0VG8iLCJ1cmwiLCJSZWdNc2ciLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJtb2RlbCIsInBpeGVsUmF0aW8iLCJ3aW5kb3dXaWR0aCIsImxhbmd1YWdlIiwidmVyc2lvbiIsInBsYXRmb3JtIiwib25QYXVzZSIsImZyb20iLCJ0YXJnZXQiLCJwYXRoIiwiaW1hZ2VVcmwiLCJjYXJkX3RpbWUiLCJ1c2VyaW5mbyIsIkJhYVMiLCJzdG9yYWdlIiwiZ2V0IiwidXNlcl9uYW1lIiwibmlja05hbWUiLCJ1c2VyX29wZW5pZCIsIm9wZW5pZCIsInVzZXJfZ2VuZGVyIiwiZ2VuZGVyIiwicmVwb3J0QW5hbHl0aWNzIiwiY2FyZF9uYW1lIiwidGFibGVJRCIsIlByb2R1Y3QiLCJUYWJsZU9iamVjdCIsInByb2R1Y3QiLCJjcmVhdGUiLCJhcHBsZSIsInNlbmRfY2FyZCIsImNhcmRfY29udGVudCIsInNldCIsInNhdmUiLCJ0aGVuIiwiZmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGFBREssRUFDSTtBQUNUQyxjQUZLLEVBRUs7QUFDVkMsbUJBSEssRUFHVTtBQUNmQywyQkFKSyxFQUlrQjtBQUN2QkMsb0JBQWMsTUFMVCxFQUtpQjtBQUN0QkMsb0JBQWMsV0FOVCxFQU1zQjtBQUMzQkMsZUFBUyxFQVBKLENBT087QUFQUCxLLFFBVVBDLEssR0FBUTtBQUNOO0FBQ0FKLGdCQUZNLHNCQUVLSyxRQUZMLEVBRWVDLFFBRmYsRUFFeUI7QUFDN0JDLGdCQUFRQyxHQUFSLHdCQUFpQ0YsUUFBakMsWUFBZ0RELFFBQWhEO0FBQ0EsWUFBTUkseUJBQXlCQyxHQUFHQyx5QkFBSCxFQUEvQjtBQUNBLFlBQUlOLHFCQUFKLEVBQTJCO0FBQ3pCSSxpQ0FBdUJHLElBQXZCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xILGlDQUF1QkksS0FBdkI7QUFDRDtBQUNGO0FBVkssSyxRQWtDUkMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1I7QUFDQUMsaUJBRlEseUJBRU07QUFDWixZQUFJQyxPQUFPLElBQVg7QUFDQVYsZ0JBQVFDLEdBQVI7QUFDQSxZQUFJUyxLQUFLakIsVUFBTCxJQUFtQixTQUF2QixFQUFrQztBQUNoQ2lCLGVBQUtqQixVQUFMO0FBQ0QsU0FG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bEI7QUFDQW5CLGtCQUFRQyxHQUFSO0FBQ0Q7QUE1REksT0FBUDtBQThERDs7OztFQXJRZ0MsZUFBS29GLEk7O2tCQUFuQnBHLEsiLCJmaWxlIjoiY2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YS/56ul6IqCJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICBtc2c6IGBgLCAvL+i+k+WFpeahhueahOWGheWuuVxuICAgIHRleHQ6IGBgLCAvL+agvOW8j+WMluS5i+WQjuimgeWxleekuueahOWGheWuuVxuICAgIHJlY29yZFVybDogYGAsIC8v5b2V6Z+z5LqR5paH5Lu25Zyw5Z2AXG4gICAgbXVzaWNTdGF0ZTogYHJ1bm5pbmdgLCAvL+mfs+S5kOWbvueJh+WKqOeUu+aYr+WQpuaaguWBnFxuICAgIHdpbmRvd0hlaWdodDogJzEwMCUnLCAvL+aJi+acuuWxj+W5lemrmOW6plxuICAgIHRpbWVDaGVja1ZhbDogJ3VubGltaXRlZCcsIC8v5L+h5Lu25pyJ5pWI5pyfXG4gICAgdGltZU5vdzogJycgLy/ovazlj5HnmoTml7bpl7TmiLNcbiAgfTtcblxuICB3YXRjaCA9IHtcbiAgICAvLyAg5pqC5YGcL+aSreaUvumfs+S5kFxuICAgIG11c2ljU3RhdGUobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgbXVzaWNTdGF0ZSB2YWx1ZTogJHtvbGRWYWx1ZX0gLT4gJHtuZXdWYWx1ZX1gKTtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgICBpZiAobmV3VmFsdWUgPT0gYHJ1bm5pbmdgKSB7XG4gICAgICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGxheSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyDlpITnkIbkvKDpgJLov4fmnaXnmoTkv6Hmga9cbiAgUmVnTXNnKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgbXNnID0gc2VsZi5tc2c7XG4gICAgbGV0IHRlc3RBcnIgPSBbXTtcbiAgICAvLyDpgYfliLDku6XkuIvnrKblj7fnq4vljbPmiKrlj5blhoXlrrnliIbmrrVcbiAgICBsZXQgcmVnID0gL1vvvIx8LHwufOOAgnzjgIF877yffO+8m3w7fC9dL2c7XG4gICAgbGV0IGluZGV4ID0gYGA7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICB3aGlsZSAoKGluZGV4ID0gcmVnLmV4ZWMobXNnKSAhPSBudWxsKSkge1xuICAgICAgLy8g5oiq5Y+W5Lik5Liq56ym5ZCI5LmL6Ze055qE5paH5a2X77yM5YiG5q615pS+5YWl5pWw57uEXG4gICAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgcmVnLmxhc3RJbmRleCkpO1xuICAgICAgLy8g5qOA5rWL5bm25pS55Y+Y5b2T5YmN56ym5Y+357Si5byVXG4gICAgICBzdGFydCA9IHJlZy5sYXN0SW5kZXg7XG4gICAgfVxuICAgIC8vIOiOt+WPluacgOWQjuS4gOauteaWh+Wtl1xuICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCBtc2cubGVuZ3RoKSk7XG4gICAgc2VsZi50ZXh0ID0gdGVzdEFycjtcbiAgICBzZWxmLiRhcHBseSgpO1xuICB9XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIC8vIOWIh+aNoumfs+S5kOWbvuagh+aXi+i9rFxuICAgIHRvZ2dsZU11c2ljKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2coYHRvZ2dsZWApO1xuICAgICAgaWYgKHNlbGYubXVzaWNTdGF0ZSA9PSAncnVubmluZycpIHtcbiAgICAgICAgc2VsZi5tdXNpY1N0YXRlID0gYHBhdXNlZGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLm11c2ljU3RhdGUgPSBgcnVubmluZ2A7XG4gICAgICB9XG4gICAgICBzZWxmLiRhcHBseSgpO1xuICAgIH0sXG5cbiAgICAvLyDmkq3mlL7lvZXpn7NcbiAgICByZWNvcmRQbGF5KCkge1xuICAgICAgY29uc29sZS5sb2coYOaSreaUvuW9lemfs2ApO1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICBjb25zdCBpbm5lckF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IHRydWU7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSBzZWxmLnJlY29yZFVybDtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uUGxheSgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCflvIDlp4vmkq3mlL4nKTtcbiAgICAgIH0pO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FcnJvcihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyckNvZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCB0aW1lQ2hlY2tOb3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCB0aW1lTm93ID0gdGltZUNoZWNrTm93LmdldFRpbWUoKTtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy50aW1lTm93KSB7XG4gICAgICBsZXQgbm93VGltZSA9IHBhcnNlSW50KG9wdGlvbnMudGltZU5vdyk7XG4gICAgICBpZiAob3B0aW9ucy50aW1lQ2hlY2tWYWwgPT0gJ3VubGltaXRlZCcpIHtcbiAgICAgICAgdGltZU5vdyA9IDE7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICczMG1pbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25vd1RpbWUnLCBub3dUaW1lKTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIG5vd1RpbWUpO1xuICAgICAgICBub3dUaW1lID0gbm93VGltZSArIDEwMDAgKiA2MCAqIDMwO1xuICAgICAgICAvLyBub3dUaW1lID0gbm93VGltZSArIDEwMDAgKiAzMDtcbiAgICAgICAgY29uc29sZS5sb2coJ25vd1RpbWUnLCBub3dUaW1lKTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50aW1lQ2hlY2tWYWwgPT0gJzNob3VyJykge1xuICAgICAgICBub3dUaW1lID0gbm93VGltZSArIDEwMDAgKiA2MCAqIDYwICogMztcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50aW1lQ2hlY2tWYWwgPT0gJzNkYXknKSB7XG4gICAgICAgIG5vd1RpbWUgPSBub3dUaW1lICsgMTAwMCAqIDYwICogNjAgKiAyNCAqIDM7XG4gICAgICB9XG4gICAgICAvLyDlpoLmnpzkv6Hku7blnKjmnInmlYjmnJ/lhoVcbiAgICAgIGlmIChub3dUaW1lID4gdGltZU5vdykge1xuICAgICAgICAvLyDorr7nva7og4zmma/pn7PkuZBcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci50aXRsZSA9ICfpn6nlm73lj6/niLEnO1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmVwbmFtZSA9ICcnO1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNpbmdlciA9ICfpk4Plo7AnO1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmNvdmVySW1nVXJsID1cbiAgICAgICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzkyNGRfNzAweDk2Ml9Gb3Rvci5qcGcnO1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNyYyA9XG4gICAgICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8yOTEyMDQzNzI5MzY2NzAubXAzJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWmguaenOS/oeS7tuS4jeWcqOacieaViOacn+WGhe+8jOWwseW8ueWHuui/h+acn+aPkOekuu+8jOW5tumakOiXj+S/oeS7tuWGheWuuVxuICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICB1cmw6IGAvYXBwbGV0c0IvcGFnZXMvbm9kYXRhL25vZGF0YWBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5tc2cpIHtcbiAgICAgIHNlbGYubXNnID0gb3B0aW9ucy5tc2c7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOm7mOiupOeVmeiogFxuICAgICAgc2VsZi5tc2cgPSBg5YWt5LiA5YS/56ul6IqC77yM6YCB5L2g5YWt5Lu95aSn56S877yM6JGr6Iqm5aiD55qE5YuH5pWi77yM5aWl54m55pu855qE5peg5pWM77yM5LiA5LyR5ZOl55qE6IGq5piO77yM6JOd57K+54G155qE5Ly25L+Q77yM57Gz6ICB6byg55qE5r2H5rSS77yM6Iqx5LuZ5a2Q55qE576O5Li977yM5oS/5L2g55qE55Sf5rS75YOP56ul6K+d5LiA5qC357K+5b2p77yBYDtcbiAgICB9XG4gICAgc2VsZi5yZWNvcmRVcmwgPSBvcHRpb25zLnJlY29yZFVybDtcbiAgICBzZWxmLnRpbWVDaGVja1ZhbCA9IG9wdGlvbnMudGltZUNoZWNrVmFsO1xuICAgIHNlbGYuUmVnTXNnKCk7XG4gICAgc2VsZi4kYXBwbHkoKTtcblxuICAgIC8v5pi+56S66L2s5Y+RXG4gICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIOiOt+WPluaJi+acuuS/oeaBr1xuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5tb2RlbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5waXhlbFJhdGlvKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLndpbmRvd1dpZHRoKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLndpbmRvd0hlaWdodCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5sYW5ndWFnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy52ZXJzaW9uKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnBsYXRmb3JtKTtcbiAgICAgICAgc2VsZi53aW5kb3dIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8g5b2T6aG16Z2i5pi+56S655qE5pe25YCZXG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coJ3Nob3cnKTtcbiAgICAvLyDnu6fnu63mkq3mlL7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGxheSgpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIub25QbGF5KGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYG9uUGxheWApO1xuICAgICAgc2VsZi5tdXNpY1N0YXRlID0gYHJ1bm5pbmdgO1xuICAgIH0pO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIub25QYXVzZShmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBvblBhdXNlYCk7XG4gICAgICBzZWxmLm11c2ljU3RhdGUgPSBgcGF1c2VkYDtcbiAgICB9KTtcbiAgfVxuICBvbkhpZGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2hpZGRlbicpO1xuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG5cbiAgLy8g5b2T6aG16Z2i5YiH5o2i77yI6ZqQ6JeP77yJ55qE5pe25YCZXG4gIG9uVW5sb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCd1bmxvYWQnKTtcbiAgICAvLyDmmoLlgZzog4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgfVxuICAvLyDorr7nva7liIbkuqvljaHniYdcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCB0aW1lQ2hlY2tOb3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCB0aW1lTm93ID0gdGltZUNoZWNrTm93LmdldFRpbWUoKTtcbiAgICBzZWxmLnRpbWVOb3cgPSB0aW1lTm93O1xuICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgY29uc29sZS5sb2coYHRpbWVOb3cgJHt0aW1lTm93fWApO1xuICAgIGNvbnNvbGUubG9nKHR5cGVvZiB0aW1lTm93KTtcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpO1xuICAgIH1cbiAgICAvLyDljaHniYflhoXlrrlcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICflhL/nq6XoioLlv6vkuZAnLFxuICAgICAgcGF0aDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2NoaWxkP21zZz0ke3NlbGYubXNnfSZyZWNvcmRVcmw9JHtcbiAgICAgICAgc2VsZi5yZWNvcmRVcmxcbiAgICAgIH0mdGltZUNoZWNrVmFsPSR7c2VsZi50aW1lQ2hlY2tWYWx9JnRpbWVOb3c9JHtzZWxmLnRpbWVOb3d9YCxcbiAgICAgIC8vIOWwgemdouWbvlxuICAgICAgaW1hZ2VVcmw6ICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vdG9vb3Blbl9zeV8xNjI2NjExODY1ODYuanBnJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgbGV0IGNhcmRfdGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+WtmOWCqOeahOeUqOaIt+S/oeaBr1xuICAgICAgICBsZXQgdXNlcmluZm8gPSB3eC5CYWFTLnN0b3JhZ2UuZ2V0KGB1c2VyaW5mb2ApO1xuICAgICAgICAvLyDorr7nva7lpLTlg4/lkozlkI3np7BcbiAgICAgICAgbGV0IHVzZXJfbmFtZSA9IHVzZXJpbmZvLm5pY2tOYW1lIHx8IGDmnKrnmbvlvZXmuLjlrqJgO1xuICAgICAgICBsZXQgdXNlcl9vcGVuaWQgPSB1c2VyaW5mby5vcGVuaWQgfHwgYOaXoG9wZW5pZGA7XG4gICAgICAgIGxldCB1c2VyX2dlbmRlciA9IHVzZXJpbmZvLmdlbmRlciB8fCBg5pegYDtcbiAgICAgICAgY29uc29sZS5sb2coYOi9rOWPkeaIkOWKn2AsIGNhcmRfdGltZSwgdXNlcl9uYW1lLCB1c2VyX29wZW5pZCwgdXNlcl9nZW5kZXIpO1xuICAgICAgICAvLyDoh6rlrprkuYnkuovku7bkuIrmiqXvvIjliIbkuqvkuovku7bvvIlcbiAgICAgICAgd3gucmVwb3J0QW5hbHl0aWNzKCdzaGFyZV9jYXJkJywge1xuICAgICAgICAgIGNhcmRfbmFtZTogYOWFreS4gOWEv+erpeiKgui0uuWNoWAsXG4gICAgICAgICAgdXNlcl9uYW1lLFxuICAgICAgICAgIGNhcmRfdGltZSxcbiAgICAgICAgICB1c2VyX29wZW5pZCxcbiAgICAgICAgICB1c2VyX2dlbmRlclxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDorr7nva7mqKHmnb/mtojmga/pgJrnn6VcbiAgICAgICAgLy8g5ZCRIHRhYmxlSUQg5Li6IDM5MDA2IOeahOaVsOaNruihqOaPkuWFpeS4gOadoeiusOW9lVxuICAgICAgICBsZXQgdGFibGVJRCA9IDM5MDA2O1xuICAgICAgICBsZXQgUHJvZHVjdCA9IG5ldyB3eC5CYWFTLlRhYmxlT2JqZWN0KHRhYmxlSUQpO1xuICAgICAgICBsZXQgcHJvZHVjdCA9IFByb2R1Y3QuY3JlYXRlKCk7XG5cbiAgICAgICAgLy8g6K6+572u5pa55byP5LiAXG4gICAgICAgIGxldCBhcHBsZSA9IHtcbiAgICAgICAgICBzZW5kX2NhcmQ6ICdFbWFpbCcsXG4gICAgICAgICAgcmVjb3JkVXJsOiBzZWxmLnJlY29yZFVybCxcbiAgICAgICAgICB1c2VyX25hbWUsXG4gICAgICAgICAgdXNlcl9nZW5kZXIsXG4gICAgICAgICAgdXNlcl9vcGVuaWQsXG4gICAgICAgICAgY2FyZF90aW1lLFxuICAgICAgICAgIGNhcmRfY29udGVudDogc2VsZi5tc2csXG4gICAgICAgICAgY2FyZF9uYW1lOiAn5YWt5LiA5YS/56ul6IqC6LS65Y2hJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHByb2R1Y3RcbiAgICAgICAgICAuc2V0KGFwcGxlKVxuICAgICAgICAgIC5zYXZlKClcbiAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYOWIm+W7uuihqOaIkOWKn2ApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgICBjb25zb2xlLmxvZyhg6L2s5Y+R5aSx6LSlYCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19