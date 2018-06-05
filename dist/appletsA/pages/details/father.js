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
      navigationBarTitleText: '父亲节'
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
          backgroundAudioManager.title = '父亲';
          backgroundAudioManager.epname = '';
          backgroundAudioManager.singer = '筷子兄弟';
          backgroundAudioManager.coverImgUrl = 'https://om83cysj8.qnssl.com/a9d63448b881e12eab44fdfcdbd1cb7c_Fotor.png';
          backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/at20111229221940.mp3';
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
        self.msg = '\u5C0F\u65F6\u5019\uFF0C\u7236\u4EB2\u5C31\u662F\u9897\u53C2\u5929\u5927\u6811\uFF0C\u4E3A\u6211\u4EEC\u906E\u98CE\u6321\u96E8\uFF0C\u957F\u5927\u4E86\uFF0C\u7236\u4EB2\u6210\u4E86\u672C\u767E\u79D1\u5168\u4E66\uFF0C\u4E3A\u6211\u4EEC\u7B54\u7591\u89E3\u60D1\uFF0C\u7236\u4EB2\uFF0C\u6C38\u8FDC\u662F\u6211\u4EEC\u7684\u652F\u67F1\uFF0C\u7238\u7238\uFF0C\u8282\u65E5\u5FEB\u4E50';
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
        title: '父亲节快乐',
        path: '/appletsA/pages/details/father?msg=' + self.msg + '&recordUrl=' + self.recordUrl + '&timeCheckVal=' + self.timeCheckVal + '&timeNow=' + self.timeNow,
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/%E7%88%B6%E4%BA%B2%E8%8A%8211_Fotor.jpg',
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
            card_name: '\u7236\u4EB2\u8282\u8D3A\u5361',
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
            card_name: '父亲节贺卡'
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/father'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdGhlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIm1zZyIsInRleHQiLCJyZWNvcmRVcmwiLCJtdXNpY1N0YXRlIiwid2luZG93SGVpZ2h0IiwidGltZUNoZWNrVmFsIiwidGltZU5vdyIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwid3giLCJnZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwicGxheSIsInBhdXNlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidG9nZ2xlTXVzaWMiLCJzZWxmIiwiJGFwcGx5IiwicmVjb3JkUGxheSIsImlubmVyQXVkaW9Db250ZXh0IiwiY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQiLCJhdXRvcGxheSIsInNyYyIsIm9uUGxheSIsIm9uRXJyb3IiLCJyZXMiLCJlcnJNc2ciLCJlcnJDb2RlIiwiZXZlbnRzIiwidGVzdEFyciIsInJlZyIsImluZGV4Iiwic3RhcnQiLCJleGVjIiwicHVzaCIsInN1YnN0cmluZyIsImxhc3RJbmRleCIsImxlbmd0aCIsIm9wdGlvbnMiLCJ0aW1lQ2hlY2tOb3ciLCJEYXRlIiwiZ2V0VGltZSIsIm5vd1RpbWUiLCJwYXJzZUludCIsInRpdGxlIiwiZXBuYW1lIiwic2luZ2VyIiwiY292ZXJJbWdVcmwiLCJyZWRpcmVjdFRvIiwidXJsIiwiUmVnTXNnIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwibW9kZWwiLCJwaXhlbFJhdGlvIiwid2luZG93V2lkdGgiLCJsYW5ndWFnZSIsInZlcnNpb24iLCJwbGF0Zm9ybSIsImZyb20iLCJ0YXJnZXQiLCJwYXRoIiwiaW1hZ2VVcmwiLCJjYXJkX3RpbWUiLCJ1c2VyaW5mbyIsIkJhYVMiLCJzdG9yYWdlIiwiZ2V0IiwidXNlcl9uYW1lIiwibmlja05hbWUiLCJ1c2VyX29wZW5pZCIsIm9wZW5pZCIsInVzZXJfZ2VuZGVyIiwiZ2VuZGVyIiwicmVwb3J0QW5hbHl0aWNzIiwiY2FyZF9uYW1lIiwidGFibGVJRCIsIlByb2R1Y3QiLCJUYWJsZU9iamVjdCIsInByb2R1Y3QiLCJjcmVhdGUiLCJhcHBsZSIsInNlbmRfY2FyZCIsImNhcmRfY29udGVudCIsInNldCIsInNhdmUiLCJ0aGVuIiwiZmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGFBREssRUFDSTtBQUNUQyxjQUZLLEVBRUs7QUFDVkMsbUJBSEssRUFHVTtBQUNmQywyQkFKSyxFQUlrQjtBQUN2QkMsb0JBQWMsTUFMVCxFQUtpQjtBQUN0QkMsb0JBQWMsV0FOVCxFQU1zQjtBQUMzQkMsZUFBUyxFQVBKLENBT087QUFQUCxLLFFBVVBDLEssR0FBUTtBQUNOO0FBQ0FKLGdCQUZNLHNCQUVLSyxRQUZMLEVBRWVDLFFBRmYsRUFFeUI7QUFDN0JDLGdCQUFRQyxHQUFSLHdCQUFpQ0YsUUFBakMsWUFBZ0RELFFBQWhEO0FBQ0EsWUFBTUkseUJBQXlCQyxHQUFHQyx5QkFBSCxFQUEvQjtBQUNBLFlBQUlOLHFCQUFKLEVBQTJCO0FBQ3pCSSxpQ0FBdUJHLElBQXZCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xILGlDQUF1QkksS0FBdkI7QUFDRDtBQUNGO0FBVkssSyxRQWtDUkMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1I7QUFDQUMsaUJBRlEseUJBRU07QUFDWixZQUFJQyxPQUFPLElBQVg7QUFDQVYsZ0JBQVFDLEdBQVI7QUFDQSxZQUFJUyxLQUFLakIsVUFBTCxJQUFtQixTQUF2QixFQUFrQztBQUNoQ2lCLGVBQUtqQixVQUFMO0FBQ0QsU0FGRCxNQUVPO0FB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SUMsY0FBY04sU0FBU08sTUFBVCxrQkFBbEI7QUFDQSxjQUFJQyxjQUFjUixTQUFTUyxNQUFULFlBQWxCO0FBQ0FyRSxrQkFBUUMsR0FBUiw2QkFBb0IwRCxTQUFwQixFQUErQkssU0FBL0IsRUFBMENFLFdBQTFDLEVBQXVERSxXQUF2RDtBQUNBO0FBQ0FqRSxhQUFHbUUsZUFBSCxDQUFtQixZQUFuQixFQUFpQztBQUMvQkMsdURBRCtCO0FBRS9CUCxnQ0FGK0I7QUFHL0JMLGdDQUgrQjtBQUkvQk8sb0NBSitCO0FBSy9CRTtBQUwrQixXQUFqQztBQU9BO0FBQ0E7QUFDQSxjQUFJSSxVQUFVLEtBQWQ7QUFDQSxjQUFJQyxVQUFVLElBQUl0RSxHQUFHMEQsSUFBSCxDQUFRYSxXQUFaLENBQXdCRixPQUF4QixDQUFkO0FBQ0EsY0FBSUcsVUFBVUYsUUFBUUcsTUFBUixFQUFkOztBQUVBO0FBQ0EsY0FBSUMsUUFBUTtBQUNWQyx1QkFBVyxPQUREO0FBRVZ0Rix1QkFBV2tCLEtBQUtsQixTQUZOO0FBR1Z3RSxnQ0FIVTtBQUlWSSxvQ0FKVTtBQUtWRixvQ0FMVTtBQU1WUCxnQ0FOVTtBQU9Wb0IsMEJBQWNyRSxLQUFLcEIsR0FQVDtBQVFWaUYsdUJBQVc7QUFSRCxXQUFaOztBQVdBSSxrQkFDR0ssR0FESCxDQUNPSCxLQURQLEVBRUdJLElBRkgsR0FHR0MsSUFISCxDQUlJLGVBQU87QUFDTDtBQUNBbEYsb0JBQVFDLEdBQVI7QUFDRCxXQVBMLEVBUUksZUFBTztBQUNMO0FBQ0QsV0FWTDtBQVlELFNBeERJO0FBeURMa0YsY0FBTSxjQUFTaEUsR0FBVCxFQUFjO0FBQ2xCO0FBQ0Q7QUEzREksT0FBUDtBQTZERDs7OztFQTNQZ0MsZUFBS2lFLEk7O2tCQUFuQm5HLEsiLCJmaWxlIjoiZmF0aGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eItuS6suiKgidcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgbXNnOiBgYCwgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICB0ZXh0OiBgYCwgLy/moLzlvI/ljJbkuYvlkI7opoHlsZXnpLrnmoTlhoXlrrlcbiAgICByZWNvcmRVcmw6IGBgLCAvL+W9lemfs+S6keaWh+S7tuWcsOWdgFxuICAgIG11c2ljU3RhdGU6IGBydW5uaW5nYCwgLy/pn7PkuZDlm77niYfliqjnlLvmmK/lkKbmmoLlgZxcbiAgICB3aW5kb3dIZWlnaHQ6ICcxMDAlJywgLy/miYvmnLrlsY/luZXpq5jluqZcbiAgICB0aW1lQ2hlY2tWYWw6ICd1bmxpbWl0ZWQnLCAvL+S/oeS7tuacieaViOacn1xuICAgIHRpbWVOb3c6ICcnIC8v6L2s5Y+R55qE5pe26Ze05oizXG4gIH07XG5cbiAgd2F0Y2ggPSB7XG4gICAgLy8gIOaaguWBnC/mkq3mlL7pn7PkuZBcbiAgICBtdXNpY1N0YXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coYG11c2ljU3RhdGUgdmFsdWU6ICR7b2xkVmFsdWV9IC0+ICR7bmV3VmFsdWV9YCk7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgICAgaWYgKG5ld1ZhbHVlID09IGBydW5uaW5nYCkge1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBsYXkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8g5aSE55CG5Lyg6YCS6L+H5p2l55qE5L+h5oGvXG4gIFJlZ01zZygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IG1zZyA9IHNlbGYubXNnO1xuICAgIGxldCB0ZXN0QXJyID0gW107XG4gICAgLy8g6YGH5Yiw5Lul5LiL56ym5Y+356uL5Y2z5oiq5Y+W5YaF5a655YiG5q61XG4gICAgbGV0IHJlZyA9IC9b77yMfCx8LnzjgIJ844CBfO+8n3zvvJt8O3wvXS9nO1xuICAgIGxldCBpbmRleCA9IGBgO1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgd2hpbGUgKChpbmRleCA9IHJlZy5leGVjKG1zZykgIT0gbnVsbCkpIHtcbiAgICAgIC8vIOaIquWPluS4pOS4quespuWQiOS5i+mXtOeahOaWh+Wtl++8jOWIhuauteaUvuWFpeaVsOe7hFxuICAgICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIHJlZy5sYXN0SW5kZXgpKTtcbiAgICAgIC8vIOajgOa1i+W5tuaUueWPmOW9k+WJjeespuWPt+e0ouW8lVxuICAgICAgc3RhcnQgPSByZWcubGFzdEluZGV4O1xuICAgIH1cbiAgICAvLyDojrflj5bmnIDlkI7kuIDmrrXmloflrZdcbiAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgbXNnLmxlbmd0aCkpO1xuICAgIHNlbGYudGV4dCA9IHRlc3RBcnI7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgfVxuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDliIfmjaLpn7PkuZDlm77moIfml4vovaxcbiAgICB0b2dnbGVNdXNpYygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKGB0b2dnbGVgKTtcbiAgICAgIGlmIChzZWxmLm11c2ljU3RhdGUgPT0gJ3J1bm5pbmcnKSB7XG4gICAgICAgIHNlbGYubXVzaWNTdGF0ZSA9IGBwYXVzZWRgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5tdXNpY1N0YXRlID0gYHJ1bm5pbmdgO1xuICAgICAgfVxuICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICB9LFxuICAgIC8vIOaSreaUvuW9lemfs1xuICAgIHJlY29yZFBsYXkoKSB7XG4gICAgICBjb25zb2xlLmxvZyhg5pKt5pS+5b2V6Z+zYCk7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGNvbnN0IGlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHNlbGYucmVjb3JkVXJsO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25QbGF5KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ+W8gOWni+aSreaUvicpO1xuICAgICAgfSk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyQ29kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBsZXQgdGltZUNoZWNrTm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdGltZU5vdyA9IHRpbWVDaGVja05vdy5nZXRUaW1lKCk7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMudGltZU5vdykge1xuICAgICAgbGV0IG5vd1RpbWUgPSBwYXJzZUludChvcHRpb25zLnRpbWVOb3cpO1xuICAgICAgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICd1bmxpbWl0ZWQnKSB7XG4gICAgICAgIHRpbWVOb3cgPSAxO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAnMzBtaW4nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub3dUaW1lJywgbm93VGltZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBub3dUaW1lKTtcbiAgICAgICAgbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogNjAgKiAzMDtcbiAgICAgICAgLy8gbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogMzA7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub3dUaW1lJywgbm93VGltZSk7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICczaG91cicpIHtcbiAgICAgICAgbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogNjAgKiA2MCAqIDM7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICczZGF5Jykge1xuICAgICAgICBub3dUaW1lID0gbm93VGltZSArIDEwMDAgKiA2MCAqIDYwICogMjQgKiAzO1xuICAgICAgfVxuICAgICAgLy8g5aaC5p6c5L+h5Lu25Zyo5pyJ5pWI5pyf5YaFXG4gICAgICBpZiAobm93VGltZSA+IHRpbWVOb3cpIHtcbiAgICAgICAgLy8g6K6+572u6IOM5pmv6Z+z5LmQXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIudGl0bGUgPSAn54i25LqyJztcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5lcG5hbWUgPSAnJztcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zaW5nZXIgPSAn56235a2Q5YWE5byfJztcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5jb3ZlckltZ1VybCA9XG4gICAgICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS9hOWQ2MzQ0OGI4ODFlMTJlYWI0NGZkZmNkYmQxY2I3Y19Gb3Rvci5wbmcnO1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNyYyA9XG4gICAgICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS9hdDIwMTExMjI5MjIxOTQwLm1wMyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlpoLmnpzkv6Hku7bkuI3lnKjmnInmlYjmnJ/lhoXvvIzlsLHlvLnlh7rov4fmnJ/mj5DnpLrvvIzlubbpmpDol4/kv6Hku7blhoXlrrlcbiAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgdXJsOiBgL2FwcGxldHNCL3BhZ2VzL25vZGF0YS9ub2RhdGFgXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubXNnKSB7XG4gICAgICBzZWxmLm1zZyA9IG9wdGlvbnMubXNnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDpu5jorqTnlZnoqIBcbiAgICAgIHNlbGYubXNnID0gYOWwj+aXtuWAme+8jOeItuS6suWwseaYr+mil+WPguWkqeWkp+agke+8jOS4uuaIkeS7rOmBrumjjuaMoembqO+8jOmVv+Wkp+S6hu+8jOeItuS6suaIkOS6huacrOeZvuenkeWFqOS5pu+8jOS4uuaIkeS7rOetlOeWkeino+aDke+8jOeItuS6su+8jOawuOi/nOaYr+aIkeS7rOeahOaUr+afse+8jOeIuOeIuO+8jOiKguaXpeW/q+S5kGA7XG4gICAgfVxuICAgIHNlbGYucmVjb3JkVXJsID0gb3B0aW9ucy5yZWNvcmRVcmw7XG4gICAgc2VsZi50aW1lQ2hlY2tWYWwgPSBvcHRpb25zLnRpbWVDaGVja1ZhbDtcbiAgICBzZWxmLlJlZ01zZygpO1xuICAgIHNlbGYuJGFwcGx5KCk7XG5cbiAgICAvL+aYvuekuui9rOWPkVxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5bmiYvmnLrkv6Hmga9cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMubW9kZWwpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMucGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy53aW5kb3dXaWR0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy53aW5kb3dIZWlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMubGFuZ3VhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudmVyc2lvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5wbGF0Zm9ybSk7XG4gICAgICAgIHNlbGYud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIOW9k+mhtemdouaYvuekuueahOaXtuWAmVxuICBvblNob3coKSB7XG4gICAgY29uc29sZS5sb2coJ3Nob3cnKTtcbiAgICAvLyDnu6fnu63mkq3mlL7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGxheSgpO1xuICB9XG4gIG9uSGlkZSgpIHtcbiAgICBjb25zb2xlLmxvZygnaGlkZGVuJyk7XG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gIH1cblxuICAvLyDlvZPpobXpnaLliIfmjaLvvIjpmpDol4/vvInnmoTml7blgJlcbiAgb25VbmxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ3VubG9hZCcpO1xuICAgIC8vIOaaguWBnOiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG4gIC8vIOiuvue9ruWIhuS6q+WNoeeJh1xuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgIGxldCB0aW1lQ2hlY2tOb3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCB0aW1lTm93ID0gdGltZUNoZWNrTm93LmdldFRpbWUoKTtcbiAgICBzZWxmLnRpbWVOb3cgPSB0aW1lTm93O1xuICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgY29uc29sZS5sb2coYHRpbWVOb3cgJHt0aW1lTm93fWApO1xuICAgIGNvbnNvbGUubG9nKHR5cGVvZiB0aW1lTm93KTtcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpO1xuICAgIH1cbiAgICAvLyDljaHniYflhoXlrrlcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfniLbkurLoioLlv6vkuZAnLFxuICAgICAgcGF0aDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2ZhdGhlcj9tc2c9JHtzZWxmLm1zZ30mcmVjb3JkVXJsPSR7XG4gICAgICAgIHNlbGYucmVjb3JkVXJsXG4gICAgICB9JnRpbWVDaGVja1ZhbD0ke3NlbGYudGltZUNoZWNrVmFsfSZ0aW1lTm93PSR7c2VsZi50aW1lTm93fWAsXG4gICAgICAvLyDlsIHpnaLlm75cbiAgICAgIGltYWdlVXJsOlxuICAgICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLyVFNyU4OCVCNiVFNCVCQSVCMiVFOCU4QSU4MjExX0ZvdG9yLmpwZycsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgIGxldCBjYXJkX3RpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAvLyDojrflj5bnlKjmiLflrZjlgqjnmoTnlKjmiLfkv6Hmga9cbiAgICAgICAgbGV0IHVzZXJpbmZvID0gd3guQmFhUy5zdG9yYWdlLmdldChgdXNlcmluZm9gKTtcbiAgICAgICAgLy8g6K6+572u5aS05YOP5ZKM5ZCN56ewXG4gICAgICAgIGxldCB1c2VyX25hbWUgPSB1c2VyaW5mby5uaWNrTmFtZSB8fCBg5pyq55m75b2V5ri45a6iYDtcbiAgICAgICAgbGV0IHVzZXJfb3BlbmlkID0gdXNlcmluZm8ub3BlbmlkIHx8IGDml6BvcGVuaWRgO1xuICAgICAgICBsZXQgdXNlcl9nZW5kZXIgPSB1c2VyaW5mby5nZW5kZXIgfHwgYOaXoGA7XG4gICAgICAgIGNvbnNvbGUubG9nKGDovazlj5HmiJDlip9gLCBjYXJkX3RpbWUsIHVzZXJfbmFtZSwgdXNlcl9vcGVuaWQsIHVzZXJfZ2VuZGVyKTtcbiAgICAgICAgLy8g6Ieq5a6a5LmJ5LqL5Lu25LiK5oql77yI5YiG5Lqr5LqL5Lu277yJXG4gICAgICAgIHd4LnJlcG9ydEFuYWx5dGljcygnc2hhcmVfY2FyZCcsIHtcbiAgICAgICAgICBjYXJkX25hbWU6IGDniLbkurLoioLotLrljaFgLFxuICAgICAgICAgIHVzZXJfbmFtZSxcbiAgICAgICAgICBjYXJkX3RpbWUsXG4gICAgICAgICAgdXNlcl9vcGVuaWQsXG4gICAgICAgICAgdXNlcl9nZW5kZXJcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOiuvue9ruaooeadv+a2iOaBr+mAmuefpVxuICAgICAgICAvLyDlkJEgdGFibGVJRCDkuLogMzkwMDYg55qE5pWw5o2u6KGo5o+S5YWl5LiA5p2h6K6w5b2VXG4gICAgICAgIGxldCB0YWJsZUlEID0gMzkwMDY7XG4gICAgICAgIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG4gICAgICAgIGxldCBwcm9kdWN0ID0gUHJvZHVjdC5jcmVhdGUoKTtcblxuICAgICAgICAvLyDorr7nva7mlrnlvI/kuIBcbiAgICAgICAgbGV0IGFwcGxlID0ge1xuICAgICAgICAgIHNlbmRfY2FyZDogJ0VtYWlsJyxcbiAgICAgICAgICByZWNvcmRVcmw6IHNlbGYucmVjb3JkVXJsLFxuICAgICAgICAgIHVzZXJfbmFtZSxcbiAgICAgICAgICB1c2VyX2dlbmRlcixcbiAgICAgICAgICB1c2VyX29wZW5pZCxcbiAgICAgICAgICBjYXJkX3RpbWUsXG4gICAgICAgICAgY2FyZF9jb250ZW50OiBzZWxmLm1zZyxcbiAgICAgICAgICBjYXJkX25hbWU6ICfniLbkurLoioLotLrljaEnXG4gICAgICAgIH07XG5cbiAgICAgICAgcHJvZHVjdFxuICAgICAgICAgIC5zZXQoYXBwbGUpXG4gICAgICAgICAgLnNhdmUoKVxuICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg5Yib5bu66KGo5oiQ5YqfYCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgLy8gZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19