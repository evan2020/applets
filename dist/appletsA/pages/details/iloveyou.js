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
      navigationBarTitleText: '七夕'
    }, _this.components = {}, _this.data = {
      msg: '', //输入框的内容
      text: '', //格式化之后要展示的内容
      recordUrl: '', //录音云文件地址
      musicState: 'running', //音乐图片动画是否暂停
      windowHeight: '100%', //手机屏幕高度
      timeCheckVal: 'unlimited', //信件有效期
      timeNow: '' //转发的时间错
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
          // nowTime = nowTime + 1000 * 15;
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
          backgroundAudioManager.title = '就是爱你';
          backgroundAudioManager.epname = '';
          backgroundAudioManager.singer = '陶喆';
          backgroundAudioManager.coverImgUrl = 'https://om83cysj8.qnssl.com/123jjdln%20%28153%29_Fotor.jpg';
          backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/552.mp3';
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
        self.msg = '\u4F60\u5FAE\u7B11\u5730\u770B\u7740\u6211\uFF0C\u4E0D\u8BF4\u4E00\u53E5\u8BDD\uFF0C\u800C\u6211\u77E5\u9053\uFF0C\u4E3A\u4E86\u8FD9\u4E2A\uFF0C\u6211\u5DF2\u7ECF\u7B49\u4E86\u5F88\u4E45\u4E86';
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
        title: '情人节快乐',
        path: '/appletsA/pages/details/iloveyou?msg=' + self.msg + '&recordUrl=' + self.recordUrl + '&timeCheckVal=' + self.timeCheckVal + '&timeNow=' + self.timeNow,
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/71244679da9054cc53ee98bb54a872b62.jpg',
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
            card_name: '\u4E03\u5915\u60C5\u4EBA\u8282\u8D3A\u5361',
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
            card_name: '七夕情人节贺卡'
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/iloveyou'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlsb3ZleW91LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwibXNnIiwidGV4dCIsInJlY29yZFVybCIsIm11c2ljU3RhdGUiLCJ3aW5kb3dIZWlnaHQiLCJ0aW1lQ2hlY2tWYWwiLCJ0aW1lTm93Iiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJ3eCIsImdldEJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJwbGF5IiwicGF1c2UiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0b2dnbGVNdXNpYyIsInNlbGYiLCIkYXBwbHkiLCJyZWNvcmRQbGF5IiwiaW5uZXJBdWRpb0NvbnRleHQiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsImF1dG9wbGF5Iiwic3JjIiwib25QbGF5Iiwib25FcnJvciIsInJlcyIsImVyck1zZyIsImVyckNvZGUiLCJldmVudHMiLCJ0ZXN0QXJyIiwicmVnIiwiaW5kZXgiLCJzdGFydCIsImV4ZWMiLCJwdXNoIiwic3Vic3RyaW5nIiwibGFzdEluZGV4IiwibGVuZ3RoIiwib3B0aW9ucyIsInRpbWVDaGVja05vdyIsIkRhdGUiLCJnZXRUaW1lIiwibm93VGltZSIsInBhcnNlSW50IiwidGl0bGUiLCJlcG5hbWUiLCJzaW5nZXIiLCJjb3ZlckltZ1VybCIsInJlZGlyZWN0VG8iLCJ1cmwiLCJSZWdNc2ciLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJtb2RlbCIsInBpeGVsUmF0aW8iLCJ3aW5kb3dXaWR0aCIsImxhbmd1YWdlIiwidmVyc2lvbiIsInBsYXRmb3JtIiwiZnJvbSIsInRhcmdldCIsInBhdGgiLCJpbWFnZVVybCIsImNhcmRfdGltZSIsInVzZXJpbmZvIiwiQmFhUyIsInN0b3JhZ2UiLCJnZXQiLCJ1c2VyX25hbWUiLCJuaWNrTmFtZSIsInVzZXJfb3BlbmlkIiwib3BlbmlkIiwidXNlcl9nZW5kZXIiLCJnZW5kZXIiLCJyZXBvcnRBbmFseXRpY3MiLCJjYXJkX25hbWUiLCJ0YWJsZUlEIiwiUHJvZHVjdCIsIlRhYmxlT2JqZWN0IiwicHJvZHVjdCIsImNyZWF0ZSIsImFwcGxlIiwic2VuZF9jYXJkIiwiY2FyZF9jb250ZW50Iiwic2V0Iiwic2F2ZSIsInRoZW4iLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsYUFESyxFQUNJO0FBQ1RDLGNBRkssRUFFSztBQUNWQyxtQkFISyxFQUdVO0FBQ2ZDLDJCQUpLLEVBSWtCO0FBQ3ZCQyxvQkFBYyxNQUxULEVBS2lCO0FBQ3RCQyxvQkFBYyxXQU5ULEVBTXNCO0FBQzNCQyxlQUFTLEVBUEosQ0FPTztBQVBQLEssUUFVUEMsSyxHQUFRO0FBQ047QUFDQUosZ0JBRk0sc0JBRUtLLFFBRkwsRUFFZUMsUUFGZixFQUV5QjtBQUM3QkMsZ0JBQVFDLEdBQVIsd0JBQWlDRixRQUFqQyxZQUFnREQsUUFBaEQ7QUFDQSxZQUFNSSx5QkFBeUJDLEdBQUdDLHlCQUFILEVBQS9CO0FBQ0EsWUFBSU4scUJBQUosRUFBMkI7QUFDekJJLGlDQUF1QkcsSUFBdkI7QUFDRCxTQUZELE1BRU87QUFDTEgsaUNBQXVCSSxLQUF2QjtBQUNEO0FBQ0Y7QUFWSyxLLFFBa0NSQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUjtBQUNBQyxpQkFGUSx5QkFFTTtBQUNaLFlBQUlDLE9BQU8sSUFBWDtBQUNBVixnQkFBUUMsR0FBUjtBQUNBLFlBQUlTLEtBQUtqQixVQUFMLElBQW1CLFNBQXZCLEVBQWtDO0FBQ2hDaUIsZUFBS2pCLFVBQUw7QUFDRCxTQUZELE1BRU87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LGNBQUlDLGNBQWNOLFNBQVNPLE1BQVQsa0JBQWxCO0FBQ0EsY0FBSUMsY0FBY1IsU0FBU1MsTUFBVCxZQUFsQjtBQUNBckUsa0JBQVFDLEdBQVIsNkJBQW9CMEQsU0FBcEIsRUFBK0JLLFNBQS9CLEVBQTBDRSxXQUExQyxFQUF1REUsV0FBdkQ7QUFDQTtBQUNBakUsYUFBR21FLGVBQUgsQ0FBbUIsWUFBbkIsRUFBaUM7QUFDL0JDLG1FQUQrQjtBQUUvQlAsZ0NBRitCO0FBRy9CTCxnQ0FIK0I7QUFJL0JPLG9DQUorQjtBQUsvQkU7QUFMK0IsV0FBakM7QUFPQTtBQUNBO0FBQ0EsY0FBSUksVUFBVSxLQUFkO0FBQ0EsY0FBSUMsVUFBVSxJQUFJdEUsR0FBRzBELElBQUgsQ0FBUWEsV0FBWixDQUF3QkYsT0FBeEIsQ0FBZDtBQUNBLGNBQUlHLFVBQVVGLFFBQVFHLE1BQVIsRUFBZDs7QUFFQTtBQUNBLGNBQUlDLFFBQVE7QUFDVkMsdUJBQVcsT0FERDtBQUVWdEYsdUJBQVdrQixLQUFLbEIsU0FGTjtBQUdWd0UsZ0NBSFU7QUFJVkksb0NBSlU7QUFLVkYsb0NBTFU7QUFNVlAsZ0NBTlU7QUFPVm9CLDBCQUFjckUsS0FBS3BCLEdBUFQ7QUFRVmlGLHVCQUFXO0FBUkQsV0FBWjs7QUFXQUksa0JBQ0dLLEdBREgsQ0FDT0gsS0FEUCxFQUVHSSxJQUZILEdBR0dDLElBSEgsQ0FJSSxlQUFPO0FBQ0w7QUFDQWxGLG9CQUFRQyxHQUFSO0FBQ0QsV0FQTCxFQVFJLGVBQU87QUFDTDtBQUNELFdBVkw7QUFZRCxTQXhESTtBQXlETGtGLGNBQU0sY0FBU2hFLEdBQVQsRUFBYztBQUNsQjtBQUNEO0FBM0RJLE9BQVA7QUE2REQ7Ozs7RUExUGdDLGVBQUtpRSxJOztrQkFBbkJuRyxLIiwiZmlsZSI6Imlsb3ZleW91LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4g+WklSdcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgbXNnOiBgYCwgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICB0ZXh0OiBgYCwgLy/moLzlvI/ljJbkuYvlkI7opoHlsZXnpLrnmoTlhoXlrrlcbiAgICByZWNvcmRVcmw6IGBgLCAvL+W9lemfs+S6keaWh+S7tuWcsOWdgFxuICAgIG11c2ljU3RhdGU6IGBydW5uaW5nYCwgLy/pn7PkuZDlm77niYfliqjnlLvmmK/lkKbmmoLlgZxcbiAgICB3aW5kb3dIZWlnaHQ6ICcxMDAlJywgLy/miYvmnLrlsY/luZXpq5jluqZcbiAgICB0aW1lQ2hlY2tWYWw6ICd1bmxpbWl0ZWQnLCAvL+S/oeS7tuacieaViOacn1xuICAgIHRpbWVOb3c6ICcnIC8v6L2s5Y+R55qE5pe26Ze06ZSZXG4gIH07XG5cbiAgd2F0Y2ggPSB7XG4gICAgLy8gIOaaguWBnC/mkq3mlL7pn7PkuZBcbiAgICBtdXNpY1N0YXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coYG11c2ljU3RhdGUgdmFsdWU6ICR7b2xkVmFsdWV9IC0+ICR7bmV3VmFsdWV9YCk7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgICAgaWYgKG5ld1ZhbHVlID09IGBydW5uaW5nYCkge1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBsYXkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8g5aSE55CG5Lyg6YCS6L+H5p2l55qE5L+h5oGvXG4gIFJlZ01zZygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IG1zZyA9IHNlbGYubXNnO1xuICAgIGxldCB0ZXN0QXJyID0gW107XG4gICAgLy8g6YGH5Yiw5Lul5LiL56ym5Y+356uL5Y2z5oiq5Y+W5YaF5a655YiG5q61XG4gICAgbGV0IHJlZyA9IC9b77yMfCx8LnzjgIJ844CBfO+8n3zvvJt8O3wvXS9nO1xuICAgIGxldCBpbmRleCA9IGBgO1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgd2hpbGUgKChpbmRleCA9IHJlZy5leGVjKG1zZykgIT0gbnVsbCkpIHtcbiAgICAgIC8vIOaIquWPluS4pOS4quespuWQiOS5i+mXtOeahOaWh+Wtl++8jOWIhuauteaUvuWFpeaVsOe7hFxuICAgICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIHJlZy5sYXN0SW5kZXgpKTtcbiAgICAgIC8vIOajgOa1i+W5tuaUueWPmOW9k+WJjeespuWPt+e0ouW8lVxuICAgICAgc3RhcnQgPSByZWcubGFzdEluZGV4O1xuICAgIH1cbiAgICAvLyDojrflj5bmnIDlkI7kuIDmrrXmloflrZdcbiAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgbXNnLmxlbmd0aCkpO1xuICAgIHNlbGYudGV4dCA9IHRlc3RBcnI7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgfVxuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDliIfmjaLpn7PkuZDlm77moIfml4vovaxcbiAgICB0b2dnbGVNdXNpYygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKGB0b2dnbGVgKTtcbiAgICAgIGlmIChzZWxmLm11c2ljU3RhdGUgPT0gJ3J1bm5pbmcnKSB7XG4gICAgICAgIHNlbGYubXVzaWNTdGF0ZSA9IGBwYXVzZWRgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5tdXNpY1N0YXRlID0gYHJ1bm5pbmdgO1xuICAgICAgfVxuICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICB9LFxuICAgIC8vIOaSreaUvuW9lemfs1xuICAgIHJlY29yZFBsYXkoKSB7XG4gICAgICBjb25zb2xlLmxvZyhg5pKt5pS+5b2V6Z+zYCk7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGNvbnN0IGlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHNlbGYucmVjb3JkVXJsO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25QbGF5KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ+W8gOWni+aSreaUvicpO1xuICAgICAgfSk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyQ29kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBsZXQgdGltZUNoZWNrTm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdGltZU5vdyA9IHRpbWVDaGVja05vdy5nZXRUaW1lKCk7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMudGltZU5vdykge1xuICAgICAgbGV0IG5vd1RpbWUgPSBwYXJzZUludChvcHRpb25zLnRpbWVOb3cpO1xuICAgICAgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICd1bmxpbWl0ZWQnKSB7XG4gICAgICAgIHRpbWVOb3cgPSAxO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAnMzBtaW4nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub3dUaW1lJywgbm93VGltZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBub3dUaW1lKTtcbiAgICAgICAgbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogNjAgKiAzMDtcbiAgICAgICAgLy8gbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogMTU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub3dUaW1lJywgbm93VGltZSk7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICczaG91cicpIHtcbiAgICAgICAgbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogNjAgKiA2MCAqIDM7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICczZGF5Jykge1xuICAgICAgICBub3dUaW1lID0gbm93VGltZSArIDEwMDAgKiA2MCAqIDYwICogMjQgKiAzO1xuICAgICAgfVxuICAgICAgLy8g5aaC5p6c5L+h5Lu25Zyo5pyJ5pWI5pyf5YaFXG4gICAgICBpZiAobm93VGltZSA+IHRpbWVOb3cpIHtcbiAgICAgICAgLy8g6K6+572u6IOM5pmv6Z+z5LmQXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIudGl0bGUgPSAn5bCx5piv54ix5L2gJztcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5lcG5hbWUgPSAnJztcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zaW5nZXIgPSAn6Zm25ZaGJztcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5jb3ZlckltZ1VybCA9XG4gICAgICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8xMjNqamRsbiUyMCUyODE1MyUyOV9Gb3Rvci5qcGcnO1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNyYyA9ICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vNTUyLm1wMyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlpoLmnpzkv6Hku7bkuI3lnKjmnInmlYjmnJ/lhoXvvIzlsLHlvLnlh7rov4fmnJ/mj5DnpLrvvIzlubbpmpDol4/kv6Hku7blhoXlrrlcbiAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgdXJsOiBgL2FwcGxldHNCL3BhZ2VzL25vZGF0YS9ub2RhdGFgXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubXNnKSB7XG4gICAgICBzZWxmLm1zZyA9IG9wdGlvbnMubXNnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDpu5jorqTnlZnoqIBcbiAgICAgIHNlbGYubXNnID0gYOS9oOW+rueskeWcsOeci+edgOaIke+8jOS4jeivtOS4gOWPpeivne+8jOiAjOaIkeefpemBk++8jOS4uuS6hui/meS4qu+8jOaIkeW3sue7j+etieS6huW+iOS5heS6hmA7XG4gICAgfVxuICAgIHNlbGYucmVjb3JkVXJsID0gb3B0aW9ucy5yZWNvcmRVcmw7XG4gICAgc2VsZi50aW1lQ2hlY2tWYWwgPSBvcHRpb25zLnRpbWVDaGVja1ZhbDtcbiAgICBzZWxmLlJlZ01zZygpO1xuICAgIHNlbGYuJGFwcGx5KCk7XG5cbiAgICAvL+aYvuekuui9rOWPkVxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5bmiYvmnLrkv6Hmga9cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMubW9kZWwpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMucGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy53aW5kb3dXaWR0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy53aW5kb3dIZWlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMubGFuZ3VhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudmVyc2lvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5wbGF0Zm9ybSk7XG4gICAgICAgIHNlbGYud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIOW9k+mhtemdouaYvuekuueahOaXtuWAmVxuICBvblNob3coKSB7XG4gICAgY29uc29sZS5sb2coJ3Nob3cnKTtcbiAgICAvLyDnu6fnu63mkq3mlL7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGxheSgpO1xuICB9XG4gIG9uSGlkZSgpIHtcbiAgICBjb25zb2xlLmxvZygnaGlkZGVuJyk7XG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gIH1cblxuICAvLyDlvZPpobXpnaLliIfmjaLvvIjpmpDol4/vvInnmoTml7blgJlcbiAgb25VbmxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ3VubG9hZCcpO1xuICAgIC8vIOaaguWBnOiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG4gIC8vIOiuvue9ruWIhuS6q+WNoeeJh1xuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHRpbWVDaGVja05vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRpbWVOb3cgPSB0aW1lQ2hlY2tOb3cuZ2V0VGltZSgpO1xuICAgIHNlbGYudGltZU5vdyA9IHRpbWVOb3c7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgICBjb25zb2xlLmxvZyhgdGltZU5vdyAke3RpbWVOb3d9YCk7XG4gICAgY29uc29sZS5sb2codHlwZW9mIHRpbWVOb3cpO1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldCk7XG4gICAgfVxuICAgIC8vIOWNoeeJh+WGheWuuVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+aDheS6uuiKguW/q+S5kCcsXG4gICAgICBwYXRoOiBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvaWxvdmV5b3U/bXNnPSR7c2VsZi5tc2d9JnJlY29yZFVybD0ke1xuICAgICAgICBzZWxmLnJlY29yZFVybFxuICAgICAgfSZ0aW1lQ2hlY2tWYWw9JHtzZWxmLnRpbWVDaGVja1ZhbH0mdGltZU5vdz0ke3NlbGYudGltZU5vd31gLFxuICAgICAgLy8g5bCB6Z2i5Zu+XG4gICAgICBpbWFnZVVybDpcbiAgICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS83MTI0NDY3OWRhOTA1NGNjNTNlZTk4YmI1NGE4NzJiNjIuanBnJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgbGV0IGNhcmRfdGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+WtmOWCqOeahOeUqOaIt+S/oeaBr1xuICAgICAgICBsZXQgdXNlcmluZm8gPSB3eC5CYWFTLnN0b3JhZ2UuZ2V0KGB1c2VyaW5mb2ApO1xuICAgICAgICAvLyDorr7nva7lpLTlg4/lkozlkI3np7BcbiAgICAgICAgbGV0IHVzZXJfbmFtZSA9IHVzZXJpbmZvLm5pY2tOYW1lIHx8IGDmnKrnmbvlvZXmuLjlrqJgO1xuICAgICAgICBsZXQgdXNlcl9vcGVuaWQgPSB1c2VyaW5mby5vcGVuaWQgfHwgYOaXoG9wZW5pZGA7XG4gICAgICAgIGxldCB1c2VyX2dlbmRlciA9IHVzZXJpbmZvLmdlbmRlciB8fCBg5pegYDtcbiAgICAgICAgY29uc29sZS5sb2coYOi9rOWPkeaIkOWKn2AsIGNhcmRfdGltZSwgdXNlcl9uYW1lLCB1c2VyX29wZW5pZCwgdXNlcl9nZW5kZXIpO1xuICAgICAgICAvLyDoh6rlrprkuYnkuovku7bkuIrmiqXvvIjliIbkuqvkuovku7bvvIlcbiAgICAgICAgd3gucmVwb3J0QW5hbHl0aWNzKCdzaGFyZV9jYXJkJywge1xuICAgICAgICAgIGNhcmRfbmFtZTogYOS4g+WkleaDheS6uuiKgui0uuWNoWAsXG4gICAgICAgICAgdXNlcl9uYW1lLFxuICAgICAgICAgIGNhcmRfdGltZSxcbiAgICAgICAgICB1c2VyX29wZW5pZCxcbiAgICAgICAgICB1c2VyX2dlbmRlclxuICAgICAgICB9KTtcbiAgICAgICAgLy8g6K6+572u5qih5p2/5raI5oGv6YCa55+lXG4gICAgICAgIC8vIOWQkSB0YWJsZUlEIOS4uiAzOTAwNiDnmoTmlbDmja7ooajmj5LlhaXkuIDmnaHorrDlvZVcbiAgICAgICAgbGV0IHRhYmxlSUQgPSAzOTAwNjtcbiAgICAgICAgbGV0IFByb2R1Y3QgPSBuZXcgd3guQmFhUy5UYWJsZU9iamVjdCh0YWJsZUlEKTtcbiAgICAgICAgbGV0IHByb2R1Y3QgPSBQcm9kdWN0LmNyZWF0ZSgpO1xuXG4gICAgICAgIC8vIOiuvue9ruaWueW8j+S4gFxuICAgICAgICBsZXQgYXBwbGUgPSB7XG4gICAgICAgICAgc2VuZF9jYXJkOiAnRW1haWwnLFxuICAgICAgICAgIHJlY29yZFVybDogc2VsZi5yZWNvcmRVcmwsXG4gICAgICAgICAgdXNlcl9uYW1lLFxuICAgICAgICAgIHVzZXJfZ2VuZGVyLFxuICAgICAgICAgIHVzZXJfb3BlbmlkLFxuICAgICAgICAgIGNhcmRfdGltZSxcbiAgICAgICAgICBjYXJkX2NvbnRlbnQ6IHNlbGYubXNnLFxuICAgICAgICAgIGNhcmRfbmFtZTogJ+S4g+WkleaDheS6uuiKgui0uuWNoSdcbiAgICAgICAgfTtcblxuICAgICAgICBwcm9kdWN0XG4gICAgICAgICAgLnNldChhcHBsZSlcbiAgICAgICAgICAuc2F2ZSgpXG4gICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDliJvlu7rooajmiJDlip9gKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAvLyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HlpLHotKVcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=