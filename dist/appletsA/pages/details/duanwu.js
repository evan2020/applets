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
      navigationBarTitleText: '端午'
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
          backgroundAudioManager.title = '忆端午';
          backgroundAudioManager.epname = '';
          backgroundAudioManager.singer = '罗中旭';
          backgroundAudioManager.coverImgUrl = 'https://om83cysj8.qnssl.com/fpic1467_Fotor.jpg';
          backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/95173.mp3';
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
        self.msg = '\u9001\u4F60\u4E2A\u7CBD\u5B50\uFF0C\u5E78\u8FD0\u94FA\u6EE1\u6E05\u65B0\u7684\u53F6\uFF0C\u5FEB\u4E50\u88F9\u6210\u7F8E\u5473\u7684\u9985\uFF0C\u95FB\u8D77\u6765\u662F\u6E29\u99A8\uFF0C\u5403\u8D77\u6765\u662F\u751C\u871C\uFF0C\u54BD\u4E0B\u53BB\u662F\u5E78\u798F\uFF0C\u56DE\u5473\u7740\u662F\u7F8E\u6EE1\uFF0C\u7AEF\u5348\u8282\u5FEB\u4E50\uFF01';
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
        title: '端午节快乐',
        path: '/appletsA/pages/details/duanwu?msg=' + self.msg + '&recordUrl=' + self.recordUrl + '&timeCheckVal=' + self.timeCheckVal + '&timeNow=' + self.timeNow,
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/121F2NC-0.jpg',
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
            card_name: '\u7AEF\u5348\u8282\u8D3A\u5361',
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
            card_name: '端午节贺卡'
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/duanwu'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1YW53dS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIm1zZyIsInRleHQiLCJyZWNvcmRVcmwiLCJtdXNpY1N0YXRlIiwid2luZG93SGVpZ2h0IiwidGltZUNoZWNrVmFsIiwidGltZU5vdyIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwid3giLCJnZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwicGxheSIsInBhdXNlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidG9nZ2xlTXVzaWMiLCJzZWxmIiwiJGFwcGx5IiwicmVjb3JkUGxheSIsImlubmVyQXVkaW9Db250ZXh0IiwiY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQiLCJhdXRvcGxheSIsInNyYyIsIm9uUGxheSIsIm9uRXJyb3IiLCJyZXMiLCJlcnJNc2ciLCJlcnJDb2RlIiwiZXZlbnRzIiwidGVzdEFyciIsInJlZyIsImluZGV4Iiwic3RhcnQiLCJleGVjIiwicHVzaCIsInN1YnN0cmluZyIsImxhc3RJbmRleCIsImxlbmd0aCIsIm9wdGlvbnMiLCJ0aW1lQ2hlY2tOb3ciLCJEYXRlIiwiZ2V0VGltZSIsIm5vd1RpbWUiLCJwYXJzZUludCIsInRpdGxlIiwiZXBuYW1lIiwic2luZ2VyIiwiY292ZXJJbWdVcmwiLCJyZWRpcmVjdFRvIiwidXJsIiwiUmVnTXNnIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwiZnJvbSIsInRhcmdldCIsInBhdGgiLCJpbWFnZVVybCIsImNhcmRfdGltZSIsInVzZXJpbmZvIiwiQmFhUyIsInN0b3JhZ2UiLCJnZXQiLCJ1c2VyX25hbWUiLCJuaWNrTmFtZSIsInVzZXJfb3BlbmlkIiwib3BlbmlkIiwidXNlcl9nZW5kZXIiLCJnZW5kZXIiLCJyZXBvcnRBbmFseXRpY3MiLCJjYXJkX25hbWUiLCJ0YWJsZUlEIiwiUHJvZHVjdCIsIlRhYmxlT2JqZWN0IiwicHJvZHVjdCIsImNyZWF0ZSIsImFwcGxlIiwic2VuZF9jYXJkIiwiY2FyZF9jb250ZW50Iiwic2V0Iiwic2F2ZSIsInRoZW4iLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsYUFESyxFQUNJO0FBQ1RDLGNBRkssRUFFSztBQUNWQyxtQkFISyxFQUdVO0FBQ2ZDLDJCQUpLLEVBSWtCO0FBQ3ZCQyxvQkFBYyxNQUxULEVBS2lCO0FBQ3RCQyxvQkFBYyxXQU5ULEVBTXNCO0FBQzNCQyxlQUFTLEVBUEosQ0FPTztBQVBQLEssUUFVUEMsSyxHQUFRO0FBQ047QUFDQUosZ0JBRk0sc0JBRUtLLFFBRkwsRUFFZUMsUUFGZixFQUV5QjtBQUM3QkMsZ0JBQVFDLEdBQVIsd0JBQWlDRixRQUFqQyxZQUFnREQsUUFBaEQ7QUFDQSxZQUFNSSx5QkFBeUJDLEdBQUdDLHlCQUFILEVBQS9CO0FBQ0EsWUFBSU4scUJBQUosRUFBMkI7QUFDekJJLGlDQUF1QkcsSUFBdkI7QUFDRCxTQUZELE1BRU87QUFDTEgsaUNBQXVCSSxLQUF2QjtBQUNEO0FBQ0Y7QUFWSyxLLFFBYVJDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSO0FBQ0FDLGlCQUZRLHlCQUVNO0FBQ1osWUFBSUMsT0FBTyxJQUFYO0FBQ0FWLGdCQUFRQyxHQUFSO0FBQ0EsWUFBSVMsS0FBS2pCLFVBQUwsSUFBbUIsU0FBdkIsRUFBa0M7QUFDaENpQixlQUFLakIsVUFBTDtBQUNELFNBRkQsTUFFTztBQUNMaUIsZUFBS2pCLFVBQUw7QUFDRDtBQUNEaUIsYUFBS0MsTUFBTDtBQUNELE9BWE87O0FBWVI7QUFDQUMsZ0JBYlEs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QUFkO0FBQ0EsY0FBSUcsVUFBVUYsUUFBUUcsTUFBUixFQUFkOztBQUVBO0FBQ0EsY0FBSUMsUUFBUTtBQUNWQyx1QkFBVyxPQUREO0FBRVZoRix1QkFBV2tCLEtBQUtsQixTQUZOO0FBR1ZrRSxnQ0FIVTtBQUlWSSxvQ0FKVTtBQUtWRixvQ0FMVTtBQU1WUCxnQ0FOVTtBQU9Wb0IsMEJBQWMvRCxLQUFLcEIsR0FQVDtBQVFWMkUsdUJBQVc7QUFSRCxXQUFaOztBQVdBSSxrQkFDR0ssR0FESCxDQUNPSCxLQURQLEVBRUdJLElBRkgsR0FHR0MsSUFISCxDQUlJLGVBQU87QUFDTDtBQUNBNUUsb0JBQVFDLEdBQVI7QUFDRCxXQVBMLEVBUUksZUFBTztBQUNMO0FBQ0QsV0FWTDtBQVlELFNBdkRJO0FBd0RMNEUsY0FBTSxjQUFTMUQsR0FBVCxFQUFjO0FBQ2xCO0FBQ0Q7QUExREksT0FBUDtBQTRERDs7OztFQWxQZ0MsZUFBSzJELEk7O2tCQUFuQjdGLEsiLCJmaWxlIjoiZHVhbnd1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+err+WNiCdcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgbXNnOiBgYCwgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICB0ZXh0OiBgYCwgLy/moLzlvI/ljJbkuYvlkI7opoHlsZXnpLrnmoTlhoXlrrlcbiAgICByZWNvcmRVcmw6IGBgLCAvL+W9lemfs+S6keaWh+S7tuWcsOWdgFxuICAgIG11c2ljU3RhdGU6IGBydW5uaW5nYCwgLy/pn7PkuZDlm77niYfliqjnlLvmmK/lkKbmmoLlgZxcbiAgICB3aW5kb3dIZWlnaHQ6ICcxMDAlJywgLy/miYvmnLrlsY/luZXpq5jluqZcbiAgICB0aW1lQ2hlY2tWYWw6ICd1bmxpbWl0ZWQnLCAvL+S/oeS7tuacieaViOacn1xuICAgIHRpbWVOb3c6ICcnIC8v6L2s5Y+R55qE5pe26Ze05oizXG4gIH07XG5cbiAgd2F0Y2ggPSB7XG4gICAgLy8gIOaaguWBnC/mkq3mlL7pn7PkuZBcbiAgICBtdXNpY1N0YXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coYG11c2ljU3RhdGUgdmFsdWU6ICR7b2xkVmFsdWV9IC0+ICR7bmV3VmFsdWV9YCk7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgICAgaWYgKG5ld1ZhbHVlID09IGBydW5uaW5nYCkge1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBsYXkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIC8vIOWIh+aNoumfs+S5kOWbvuagh+aXi+i9rFxuICAgIHRvZ2dsZU11c2ljKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2coYHRvZ2dsZWApO1xuICAgICAgaWYgKHNlbGYubXVzaWNTdGF0ZSA9PSAncnVubmluZycpIHtcbiAgICAgICAgc2VsZi5tdXNpY1N0YXRlID0gYHBhdXNlZGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLm11c2ljU3RhdGUgPSBgcnVubmluZ2A7XG4gICAgICB9XG4gICAgICBzZWxmLiRhcHBseSgpO1xuICAgIH0sXG4gICAgLy8g5pKt5pS+5b2V6Z+zXG4gICAgcmVjb3JkUGxheSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGDmkq3mlL7lvZXpn7NgKTtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgY29uc3QgaW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gc2VsZi5yZWNvcmRVcmw7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vblBsYXkoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn5byA5aeL5pKt5pS+Jyk7XG4gICAgICB9KTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uRXJyb3IocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJDb2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyDlpITnkIbkvKDpgJLov4fmnaXnmoTkv6Hmga9cbiAgUmVnTXNnKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgbXNnID0gc2VsZi5tc2c7XG4gICAgbGV0IHRlc3RBcnIgPSBbXTtcbiAgICAvLyDpgYfliLDku6XkuIvnrKblj7fnq4vljbPmiKrlj5blhoXlrrnliIbmrrVcbiAgICBsZXQgcmVnID0gL1vvvIx8LHwufOOAgnzjgIF877yffO+8m3w7fC9dL2c7XG4gICAgbGV0IGluZGV4ID0gYGA7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICB3aGlsZSAoKGluZGV4ID0gcmVnLmV4ZWMobXNnKSAhPSBudWxsKSkge1xuICAgICAgLy8g5oiq5Y+W5Lik5Liq56ym5ZCI5LmL6Ze055qE5paH5a2X77yM5YiG5q615pS+5YWl5pWw57uEXG4gICAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgcmVnLmxhc3RJbmRleCkpO1xuICAgICAgLy8g5qOA5rWL5bm25pS55Y+Y5b2T5YmN56ym5Y+357Si5byVXG4gICAgICBzdGFydCA9IHJlZy5sYXN0SW5kZXg7XG4gICAgfVxuICAgIC8vIOiOt+WPluacgOWQjuS4gOauteaWh+Wtl1xuICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCBtc2cubGVuZ3RoKSk7XG4gICAgc2VsZi50ZXh0ID0gdGVzdEFycjtcbiAgICBzZWxmLiRhcHBseSgpO1xuICB9XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBsZXQgdGltZUNoZWNrTm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdGltZU5vdyA9IHRpbWVDaGVja05vdy5nZXRUaW1lKCk7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMudGltZU5vdykge1xuICAgICAgbGV0IG5vd1RpbWUgPSBwYXJzZUludChvcHRpb25zLnRpbWVOb3cpO1xuICAgICAgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICd1bmxpbWl0ZWQnKSB7XG4gICAgICAgIHRpbWVOb3cgPSAxO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAnMzBtaW4nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub3dUaW1lJywgbm93VGltZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBub3dUaW1lKTtcbiAgICAgICAgbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogNjAgKiAzMDtcbiAgICAgICAgLy8gbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogMzA7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub3dUaW1lJywgbm93VGltZSk7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICczaG91cicpIHtcbiAgICAgICAgbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogNjAgKiA2MCAqIDM7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICczZGF5Jykge1xuICAgICAgICBub3dUaW1lID0gbm93VGltZSArIDEwMDAgKiA2MCAqIDYwICogMjQgKiAzO1xuICAgICAgfVxuICAgICAgLy8g5aaC5p6c5L+h5Lu25Zyo5pyJ5pWI5pyf5YaFXG4gICAgICBpZiAobm93VGltZSA+IHRpbWVOb3cpIHtcbiAgICAgICAgLy8g6K6+572u6IOM5pmv6Z+z5LmQXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIudGl0bGUgPSAn5b+G56uv5Y2IJztcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5lcG5hbWUgPSAnJztcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zaW5nZXIgPSAn572X5Lit5petJztcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5jb3ZlckltZ1VybCA9XG4gICAgICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS9mcGljMTQ2N19Gb3Rvci5qcGcnO1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNyYyA9ICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vOTUxNzMubXAzJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWmguaenOS/oeS7tuS4jeWcqOacieaViOacn+WGhe+8jOWwseW8ueWHuui/h+acn+aPkOekuu+8jOW5tumakOiXj+S/oeS7tuWGheWuuVxuICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICB1cmw6IGAvYXBwbGV0c0IvcGFnZXMvbm9kYXRhL25vZGF0YWBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5tc2cpIHtcbiAgICAgIHNlbGYubXNnID0gb3B0aW9ucy5tc2c7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOm7mOiupOeVmeiogFxuICAgICAgc2VsZi5tc2cgPSBg6YCB5L2g5Liq57K95a2Q77yM5bm46L+Q6ZO65ruh5riF5paw55qE5Y+277yM5b+r5LmQ6KO55oiQ576O5ZGz55qE6aaF77yM6Ze76LW35p2l5piv5rip6aao77yM5ZCD6LW35p2l5piv55Sc6Jyc77yM5ZK95LiL5Y675piv5bm456aP77yM5Zue5ZGz552A5piv576O5ruh77yM56uv5Y2I6IqC5b+r5LmQ77yBYDtcbiAgICB9XG4gICAgc2VsZi5yZWNvcmRVcmwgPSBvcHRpb25zLnJlY29yZFVybDtcbiAgICBzZWxmLnRpbWVDaGVja1ZhbCA9IG9wdGlvbnMudGltZUNoZWNrVmFsO1xuICAgIHNlbGYuUmVnTXNnKCk7XG4gICAgc2VsZi4kYXBwbHkoKTtcblxuICAgIC8v5pi+56S66L2s5Y+RXG4gICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIOiOt+WPluaJi+acuuS/oeaBr1xuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIOW9k+mhtemdouaYvuekuueahOaXtuWAmVxuICBvblNob3coKSB7XG4gICAgY29uc29sZS5sb2coJ3Nob3cnKTtcbiAgICAvLyDnu6fnu63mkq3mlL7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGxheSgpO1xuICB9XG4gIG9uSGlkZSgpIHtcbiAgICBjb25zb2xlLmxvZygnaGlkZGVuJyk7XG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gIH1cblxuICAvLyDlvZPpobXpnaLliIfmjaLvvIjpmpDol4/vvInnmoTml7blgJlcbiAgb25VbmxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ3VubG9hZCcpO1xuICAgIC8vIOaaguWBnOiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG4gIC8vIOiuvue9ruWIhuS6q+WNoeeJh1xuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHRpbWVDaGVja05vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRpbWVOb3cgPSB0aW1lQ2hlY2tOb3cuZ2V0VGltZSgpO1xuICAgIHNlbGYudGltZU5vdyA9IHRpbWVOb3c7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgICBjb25zb2xlLmxvZyhgdGltZU5vdyAke3RpbWVOb3d9YCk7XG4gICAgY29uc29sZS5sb2codHlwZW9mIHRpbWVOb3cpO1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldCk7XG4gICAgfVxuICAgIC8vIOWNoeeJh+WGheWuuVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+err+WNiOiKguW/q+S5kCcsXG4gICAgICBwYXRoOiBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvZHVhbnd1P21zZz0ke3NlbGYubXNnfSZyZWNvcmRVcmw9JHtcbiAgICAgICAgc2VsZi5yZWNvcmRVcmxcbiAgICAgIH0mdGltZUNoZWNrVmFsPSR7c2VsZi50aW1lQ2hlY2tWYWx9JnRpbWVOb3c9JHtzZWxmLnRpbWVOb3d9YCxcbiAgICAgIC8vIOWwgemdouWbvlxuICAgICAgaW1hZ2VVcmw6ICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMTIxRjJOQy0wLmpwZycsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgIGxldCBjYXJkX3RpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAvLyDojrflj5bnlKjmiLflrZjlgqjnmoTnlKjmiLfkv6Hmga9cbiAgICAgICAgbGV0IHVzZXJpbmZvID0gd3guQmFhUy5zdG9yYWdlLmdldChgdXNlcmluZm9gKTtcbiAgICAgICAgLy8g6K6+572u5aS05YOP5ZKM5ZCN56ewXG4gICAgICAgIGxldCB1c2VyX25hbWUgPSB1c2VyaW5mby5uaWNrTmFtZSB8fCBg5pyq55m75b2V5ri45a6iYDtcbiAgICAgICAgbGV0IHVzZXJfb3BlbmlkID0gdXNlcmluZm8ub3BlbmlkIHx8IGDml6BvcGVuaWRgO1xuICAgICAgICBsZXQgdXNlcl9nZW5kZXIgPSB1c2VyaW5mby5nZW5kZXIgfHwgYOaXoGA7XG4gICAgICAgIGNvbnNvbGUubG9nKGDovazlj5HmiJDlip9gLCBjYXJkX3RpbWUsIHVzZXJfbmFtZSwgdXNlcl9vcGVuaWQsIHVzZXJfZ2VuZGVyKTtcbiAgICAgICAgLy8g6Ieq5a6a5LmJ5LqL5Lu25LiK5oql77yI5YiG5Lqr5LqL5Lu277yJXG4gICAgICAgIHd4LnJlcG9ydEFuYWx5dGljcygnc2hhcmVfY2FyZCcsIHtcbiAgICAgICAgICBjYXJkX25hbWU6IGDnq6/ljYjoioLotLrljaFgLFxuICAgICAgICAgIHVzZXJfbmFtZSxcbiAgICAgICAgICBjYXJkX3RpbWUsXG4gICAgICAgICAgdXNlcl9vcGVuaWQsXG4gICAgICAgICAgdXNlcl9nZW5kZXJcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOiuvue9ruaooeadv+a2iOaBr+mAmuefpVxuICAgICAgICAvLyDlkJEgdGFibGVJRCDkuLogMzkwMDYg55qE5pWw5o2u6KGo5o+S5YWl5LiA5p2h6K6w5b2VXG4gICAgICAgIGxldCB0YWJsZUlEID0gMzkwMDY7XG4gICAgICAgIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG4gICAgICAgIGxldCBwcm9kdWN0ID0gUHJvZHVjdC5jcmVhdGUoKTtcblxuICAgICAgICAvLyDorr7nva7mlrnlvI/kuIBcbiAgICAgICAgbGV0IGFwcGxlID0ge1xuICAgICAgICAgIHNlbmRfY2FyZDogJ0VtYWlsJyxcbiAgICAgICAgICByZWNvcmRVcmw6IHNlbGYucmVjb3JkVXJsLFxuICAgICAgICAgIHVzZXJfbmFtZSxcbiAgICAgICAgICB1c2VyX2dlbmRlcixcbiAgICAgICAgICB1c2VyX29wZW5pZCxcbiAgICAgICAgICBjYXJkX3RpbWUsXG4gICAgICAgICAgY2FyZF9jb250ZW50OiBzZWxmLm1zZyxcbiAgICAgICAgICBjYXJkX25hbWU6ICfnq6/ljYjoioLotLrljaEnXG4gICAgICAgIH07XG5cbiAgICAgICAgcHJvZHVjdFxuICAgICAgICAgIC5zZXQoYXBwbGUpXG4gICAgICAgICAgLnNhdmUoKVxuICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg5Yib5bu66KGo5oiQ5YqfYCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgLy8gZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19