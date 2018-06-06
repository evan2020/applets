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
      navigationBarTitleText: '端午'
    }, _this.components = {}, _this.data = {
      // 图片URl数据
      dataUrl: {
        // 背景图片
        bgImageUrl: 'https://om83cysj8.qnssl.com/fpic1467_Fotor.jpg',
        // 音频图标（播放录音）
        recordIconUrl: 'https://om83cysj8.qnssl.com/%E5%BD%95%E9%9F%B3%E6%9C%BA%20%281%29.png',
        // 音乐图标
        musicIconUrl: 'https://om83cysj8.qnssl.com/Note_de_musique_music_256px_525366_easyicon.net.png'
      },
      // 转发数据
      share: {
        // 转发标题
        title: '\u7AEF\u5348\u8282\u5FEB\u4E50',
        // 转发打开路径
        path: '/appletsA/pages/details/duanwu',
        // 封面图
        coverImageUrl: 'https://om83cysj8.qnssl.com/121F2NC-0.jpg'
      },
      // 用户数据
      userInfo: {
        // 用户名称
        user_name: '',
        // 用户性别
        user_gender: '',
        // 用户openid
        user_openid: ''
      },
      // 背景音乐数据
      bgMusicData: {
        // 专辑名
        epname: '',
        // 音乐名
        title: '\u5FC6\u7AEF\u5348',
        // 歌手
        singer: '\u7F57\u4E2D\u65ED',
        // 封面图
        coverImgUrl: 'https://om83cysj8.qnssl.com/fpic1467_Fotor.jpg',
        // 歌曲地址
        src: 'https://om83cysj8.qnssl.com/95173.mp3'
      },
      msg: '', //输入框的内容
      text: '', //格式化之后要展示的内容
      recordUrl: '', //录音云文件地址
      musicState: 'running', //音乐图片动画是否暂停
      windowHeight: '100%', //手机屏幕高度
      timeCheckVal: 'unlimited', //信件有效期
      timeNow: '', //转发的时间戳
      defaultMsg: '\u9001\u4F60\u4E2A\u7CBD\u5B50\uFF0C\u5E78\u8FD0\u94FA\u6EE1\u6E05\u65B0\u7684\u53F6\uFF0C\u5FEB\u4E50\u88F9\u6210\u7F8E\u5473\u7684\u9985\uFF0C\u95FB\u8D77\u6765\u662F\u6E29\u99A8\uFF0C\u5403\u8D77\u6765\u662F\u751C\u871C\uFF0C\u54BD\u4E0B\u53BB\u662F\u5E78\u798F\uFF0C\u56DE\u5473\u7740\u662F\u7F8E\u6EE1\uFF0C\u7AEF\u5348\u8282\u5FEB\u4E50\uFF01',
      noDataUrl: '/appletsB/pages/nodata/nodata' //收信限制提示页面
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
    key: 'getUserInfo',


    // 获取用户信息
    value: function getUserInfo() {
      console.log('\u83B7\u53D6\u7528\u6237\u4FE1\u606F');
      var self = this;
      // 获取用户存储的用户信息
      var userinfo = wx.BaaS.storage.get('userinfo');
      // 设置头像和名称
      self.userInfo.user_name = userinfo.nickName || '\u672A\u767B\u5F55\u6E38\u5BA2';
      self.userInfo.user_openid = userinfo.openid || '\u65E0openid';
      self.userInfo.user_gender = userinfo.gender || '\u65E0';
    }

    // 自定义数据上报

  }, {
    key: 'report',
    value: function report() {
      console.log('\u81EA\u5B9A\u4E49\u6570\u636E\u4E0A\u62A5');
      var self = this;
      var card_time = new Date();
      // 自定义事件上报（分享事件）
      wx.reportAnalytics('share_card', {
        card_name: self.share.title,
        user_name: self.userInfo.user_name,
        card_time: card_time,
        user_openid: self.userInfo.user_openid,
        user_gender: self.userInfo.user_gender
      });
    }

    // 分享成功邮件通知

  }, {
    key: 'shareEmailNotice',
    value: function shareEmailNotice() {
      console.log('\u5206\u4EAB\u6210\u529F\u90AE\u4EF6\u901A\u77E5');
      var self = this;

      // 获取当前时间
      var card_time = new Date();

      // 向 tableID 为 39006 的数据表插入一条记录
      var tableID = 39006;
      var Product = new wx.BaaS.TableObject(tableID);
      var product = Product.create();

      // 设置数据
      var apple = {
        send_card: 'Email',
        recordUrl: self.recordUrl,
        user_name: self.userInfo.user_name,
        user_gender: self.userInfo.user_gender,
        user_openid: self.userInfo.user_openid,
        card_time: card_time,
        card_content: self.msg,
        card_name: self.share.title
      };

      product.set(apple).save().then(function (res) {
        // success
        console.log('\u521B\u5EFA\u8868\u6210\u529F');
      }, function (err) {
        // err
      });
    }

    // 获取当前时间戳

  }, {
    key: 'getTimeNow',
    value: function getTimeNow() {
      console.log('\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u6233');
      var self = this;
      var timeCheckNow = new Date();
      var timeNow = timeCheckNow.getTime();
      self.timeNow = timeNow;
      self.$apply();
    }

    // 设置收信倒计时限制

  }, {
    key: 'countdown',
    value: function countdown(options) {
      console.log('\u8BBE\u5B9A\u5012\u8BA1\u65F6\u6536\u4FE1\u9650\u5236');
      var self = this;

      // 获取当前时间
      var timeCheckNow = new Date();
      var timeNow = timeCheckNow.getTime();

      // 如果有设定时间的数据
      if (options.timeNow) {
        // 格式化时间戳
        var nowTime = parseInt(options.timeNow);
        if (options.timeCheckVal == 'unlimited') {
          timeNow = 1;
        } else if (options.timeCheckVal == '30min') {
          nowTime = nowTime + 1000 * 60 * 30;
        } else if (options.timeCheckVal == '3hour') {
          nowTime = nowTime + 1000 * 60 * 60 * 3;
        } else if (options.timeCheckVal == '3day') {
          nowTime = nowTime + 1000 * 60 * 60 * 24 * 3;
        }
        // 如果信件在有效期内
        if (nowTime > timeNow) {
          // 设置背景音乐
          self.setBgMusic();
        } else {
          // 如果信件不在有效期内，就弹出过期提示，并隐藏信件内容
          wx.redirectTo({
            url: '' + self.noDataUrl
          });
        }
      } else {
        // 设置背景音乐
        self.setBgMusic();
      }

      self.$apply();
    }

    // 处理传递过来的信息

  }, {
    key: 'RegMsg',
    value: function RegMsg(options) {
      var self = this;

      // 如果有留言就同步留言，没有就设置默认留言
      if (options.msg) {
        self.msg = options.msg;
      } else {
        // 默认留言
        self.msg = self.defaultMsg;
      }

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

    // 设置背景音乐

  }, {
    key: 'setBgMusic',
    value: function setBgMusic() {
      console.log('\u8BBE\u7F6E\u80CC\u666F\u97F3\u4E50');
      var self = this;
      // 设置背景音乐
      var backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.title = self.bgMusicData.title;
      backgroundAudioManager.epname = self.bgMusicData.epname;
      backgroundAudioManager.singer = self.bgMusicData.singer;
      backgroundAudioManager.coverImgUrl = self.bgMusicData.coverImgUrl;
      backgroundAudioManager.src = self.bgMusicData.src;
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var self = this;

      // 打印当前页面参数
      console.log('\u6253\u5370\u5F53\u524D\u9875\u9762\u53C2\u6570', options);

      // 获取参数
      self.recordUrl = options.recordUrl;
      self.timeCheckVal = options.timeCheckVal;

      // 倒计时限制
      self.countdown(options);

      // 格式化留言数据
      self.RegMsg(options);

      // 脏检查数据
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

      // 获取当前时间戳
      self.getTimeNow();

      //  判断是否是点击按钮转发
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      // 卡片内容
      return {
        title: self.share.title,
        path: self.share.path + '?msg=' + self.msg + '&recordUrl=' + self.recordUrl + '&timeCheckVal=' + self.timeCheckVal + '&timeNow=' + self.timeNow,
        // 封面图
        imageUrl: self.share.coverImageUrl,

        // 转发成功
        success: function success(res) {
          // 获取用户信息
          self.getUserInfo();

          // 自定义事件上报
          self.report();

          // 分享成功邮件通知
          self.shareEmailNotice();
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/duanwu'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1YW53dS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImRhdGFVcmwiLCJiZ0ltYWdlVXJsIiwicmVjb3JkSWNvblVybCIsIm11c2ljSWNvblVybCIsInNoYXJlIiwidGl0bGUiLCJwYXRoIiwiY292ZXJJbWFnZVVybCIsInVzZXJJbmZvIiwidXNlcl9uYW1lIiwidXNlcl9nZW5kZXIiLCJ1c2VyX29wZW5pZCIsImJnTXVzaWNEYXRhIiwiZXBuYW1lIiwic2luZ2VyIiwiY292ZXJJbWdVcmwiLCJzcmMiLCJtc2ciLCJ0ZXh0IiwicmVjb3JkVXJsIiwibXVzaWNTdGF0ZSIsIndpbmRvd0hlaWdodCIsInRpbWVDaGVja1ZhbCIsInRpbWVOb3ciLCJkZWZhdWx0TXNnIiwibm9EYXRhVXJsIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJ3eCIsImdldEJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJwbGF5IiwicGF1c2UiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0b2dnbGVNdXNpYyIsInNlbGYiLCIkYXBwbHkiLCJyZWNvcmRQbGF5IiwiaW5uZXJBdWRpb0NvbnRleHQiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsImF1dG9wbGF5Iiwib25QbGF5Iiwib25FcnJvciIsInJlcyIsImVyck1zZyIsImVyckNvZGUiLCJldmVudHMiLCJ1c2VyaW5mbyIsIkJhYVMiLCJzdG9yYWdlIiwiZ2V0Iiwibmlja05hbWUiLCJvcGVuaWQiLCJnZW5kZXIiLCJjYXJkX3RpbWUiLCJEYXRlIiwicmVwb3J0QW5hbHl0aWNzIiwiY2FyZF9uYW1lIiwidGFibGVJRCIsIlByb2R1Y3QiLCJUYWJsZU9iamVjdCIsInByb2R1Y3QiLCJjcmVhdGUiLCJhcHBsZSIsInNlbmRfY2FyZCIsImNhcmRfY29udGVudCIsInNldCIsInNhdmUiLCJ0aGVuIiwidGltZUNoZWNrTm93IiwiZ2V0VGltZSIsIm9wdGlvbnMiLCJub3dUaW1lIiwicGFyc2VJbnQiLCJzZXRCZ011c2ljIiwicmVkaXJlY3RUbyIsInVybCIsInRlc3RBcnIiLCJyZWciLCJpbmRleCIsInN0YXJ0IiwiZXhlYyIsInB1c2giLCJzdWJzdHJpbmciLCJsYXN0SW5kZXgiLCJsZW5ndGgiLCJjb3VudGRvd24iLCJSZWdNc2ciLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJnZXRUaW1lTm93IiwiZnJvbSIsInRhcmdldCIsImltYWdlVXJsIiwiZ2V0VXNlckluZm8iLCJyZXBvcnQiLCJzaGFyZUVtYWlsTm90aWNlIiwiZmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMO0FBQ0FDLGVBQVM7QUFDUDtBQUNBQyxvRUFGTztBQUdQO0FBQ0FDLDhGQUpPO0FBS1A7QUFDQUM7QUFOTyxPQUZKO0FBVUw7QUFDQUMsYUFBTztBQUNMO0FBQ0FDLCtDQUZLO0FBR0w7QUFDQUMsOENBSks7QUFLTDtBQUNBQyx1QkFBZTtBQU5WLE9BWEY7QUFtQkw7QUFDQUMsZ0JBQVU7QUFDUjtBQUNBQyxxQkFGUTtBQUdSO0FBQ0FDLHVCQUpRO0FBS1I7QUFDQUM7QUFOUSxPQXBCTDtBQTRCTDtBQUNBQyxtQkFBYTtBQUNYO0FBQ0FDLGtCQUZXO0FBR1g7QUFDQVIsbUNBSlc7QUFLWDtBQUNBUyxvQ0FOVztBQU9YO0FBQ0FDLHFFQVJXO0FBU1g7QUFDQUM7QUFWVyxPQTdCUjtBQXlDTEMsYUF6Q0ssRUF5Q0k7QUFDVEMsY0ExQ0ssRUEwQ0s7QUFDVkMsbUJBM0NLLEVBMkNVO0FBQ2ZDLDJCQTVDSyxFQTRDa0I7QUFDdkJD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QUFtQkxDLGNBQU0sY0FBU3hELEdBQVQsRUFBYztBQUNsQjtBQUNBbEIsa0JBQVFDLEdBQVI7QUFDRDtBQXRCSSxPQUFQO0FBd0JEOzs7O0VBaldnQyxlQUFLMEUsSTs7a0JBQW5CN0csSyIsImZpbGUiOiJkdWFud3UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56uv5Y2IJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICAvLyDlm77niYdVUmzmlbDmja5cbiAgICBkYXRhVXJsOiB7XG4gICAgICAvLyDog4zmma/lm77niYdcbiAgICAgIGJnSW1hZ2VVcmw6IGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vZnBpYzE0NjdfRm90b3IuanBnYCxcbiAgICAgIC8vIOmfs+mikeWbvuagh++8iOaSreaUvuW9lemfs++8iVxuICAgICAgcmVjb3JkSWNvblVybDogYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8lRTUlQkQlOTUlRTklOUYlQjMlRTYlOUMlQkElMjAlMjgxJTI5LnBuZ2AsXG4gICAgICAvLyDpn7PkuZDlm77moIdcbiAgICAgIG11c2ljSWNvblVybDogYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS9Ob3RlX2RlX211c2lxdWVfbXVzaWNfMjU2cHhfNTI1MzY2X2Vhc3lpY29uLm5ldC5wbmdgXG4gICAgfSxcbiAgICAvLyDovazlj5HmlbDmja5cbiAgICBzaGFyZToge1xuICAgICAgLy8g6L2s5Y+R5qCH6aKYXG4gICAgICB0aXRsZTogYOerr+WNiOiKguW/q+S5kGAsXG4gICAgICAvLyDovazlj5HmiZPlvIDot6/lvoRcbiAgICAgIHBhdGg6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9kdWFud3VgLFxuICAgICAgLy8g5bCB6Z2i5Zu+XG4gICAgICBjb3ZlckltYWdlVXJsOiAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzEyMUYyTkMtMC5qcGcnXG4gICAgfSxcbiAgICAvLyDnlKjmiLfmlbDmja5cbiAgICB1c2VySW5mbzoge1xuICAgICAgLy8g55So5oi35ZCN56ewXG4gICAgICB1c2VyX25hbWU6IGBgLFxuICAgICAgLy8g55So5oi35oCn5YirXG4gICAgICB1c2VyX2dlbmRlcjogYGAsXG4gICAgICAvLyDnlKjmiLdvcGVuaWRcbiAgICAgIHVzZXJfb3BlbmlkOiBgYFxuICAgIH0sXG4gICAgLy8g6IOM5pmv6Z+z5LmQ5pWw5o2uXG4gICAgYmdNdXNpY0RhdGE6IHtcbiAgICAgIC8vIOS4k+i+keWQjVxuICAgICAgZXBuYW1lOiBgYCxcbiAgICAgIC8vIOmfs+S5kOWQjVxuICAgICAgdGl0bGU6IGDlv4bnq6/ljYhgLFxuICAgICAgLy8g5q2M5omLXG4gICAgICBzaW5nZXI6IGDnvZfkuK3ml61gLFxuICAgICAgLy8g5bCB6Z2i5Zu+XG4gICAgICBjb3ZlckltZ1VybDogYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS9mcGljMTQ2N19Gb3Rvci5qcGdgLFxuICAgICAgLy8g5q2M5puy5Zyw5Z2AXG4gICAgICBzcmM6IGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vOTUxNzMubXAzYFxuICAgIH0sXG4gICAgbXNnOiBgYCwgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICB0ZXh0OiBgYCwgLy/moLzlvI/ljJbkuYvlkI7opoHlsZXnpLrnmoTlhoXlrrlcbiAgICByZWNvcmRVcmw6IGBgLCAvL+W9lemfs+S6keaWh+S7tuWcsOWdgFxuICAgIG11c2ljU3RhdGU6IGBydW5uaW5nYCwgLy/pn7PkuZDlm77niYfliqjnlLvmmK/lkKbmmoLlgZxcbiAgICB3aW5kb3dIZWlnaHQ6ICcxMDAlJywgLy/miYvmnLrlsY/luZXpq5jluqZcbiAgICB0aW1lQ2hlY2tWYWw6ICd1bmxpbWl0ZWQnLCAvL+S/oeS7tuacieaViOacn1xuICAgIHRpbWVOb3c6IGBgLCAvL+i9rOWPkeeahOaXtumXtOaIs1xuICAgIGRlZmF1bHRNc2c6IGDpgIHkvaDkuKrnsr3lrZDvvIzlubjov5Dpk7rmu6HmuIXmlrDnmoTlj7bvvIzlv6vkuZDoo7nmiJDnvo7lkbPnmoTppoXvvIzpl7votbfmnaXmmK/muKnppqjvvIzlkIPotbfmnaXmmK/nlJzonJzvvIzlkr3kuIvljrvmmK/lubjnpo/vvIzlm57lkbPnnYDmmK/nvo7mu6HvvIznq6/ljYjoioLlv6vkuZDvvIFgLFxuICAgIG5vRGF0YVVybDpgL2FwcGxldHNCL3BhZ2VzL25vZGF0YS9ub2RhdGFgLC8v5pS25L+h6ZmQ5Yi25o+Q56S66aG16Z2iXG4gIH07XG5cbiAgd2F0Y2ggPSB7XG4gICAgLy8gIOaaguWBnC/mkq3mlL7pn7PkuZBcbiAgICBtdXNpY1N0YXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coYG11c2ljU3RhdGUgdmFsdWU6ICR7b2xkVmFsdWV9IC0+ICR7bmV3VmFsdWV9YCk7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgICAgaWYgKG5ld1ZhbHVlID09IGBydW5uaW5nYCkge1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBsYXkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIC8vIOWIh+aNoumfs+S5kOWbvuagh+aXi+i9rFxuICAgIHRvZ2dsZU11c2ljKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2coYHRvZ2dsZWApO1xuICAgICAgaWYgKHNlbGYubXVzaWNTdGF0ZSA9PSAncnVubmluZycpIHtcbiAgICAgICAgc2VsZi5tdXNpY1N0YXRlID0gYHBhdXNlZGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLm11c2ljU3RhdGUgPSBgcnVubmluZ2A7XG4gICAgICB9XG4gICAgICBzZWxmLiRhcHBseSgpO1xuICAgIH0sXG4gICAgLy8g5pKt5pS+5b2V6Z+zXG4gICAgcmVjb3JkUGxheSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGDmkq3mlL7lvZXpn7NgKTtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgY29uc3QgaW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gc2VsZi5yZWNvcmRVcmw7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vblBsYXkoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn5byA5aeL5pKt5pS+Jyk7XG4gICAgICB9KTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uRXJyb3IocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJDb2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgY29uc29sZS5sb2coYOiOt+WPlueUqOaIt+S/oeaBr2ApO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAvLyDojrflj5bnlKjmiLflrZjlgqjnmoTnlKjmiLfkv6Hmga9cbiAgICBsZXQgdXNlcmluZm8gPSB3eC5CYWFTLnN0b3JhZ2UuZ2V0KGB1c2VyaW5mb2ApO1xuICAgIC8vIOiuvue9ruWktOWDj+WSjOWQjeensFxuICAgIHNlbGYudXNlckluZm8udXNlcl9uYW1lID0gdXNlcmluZm8ubmlja05hbWUgfHwgYOacqueZu+W9lea4uOWuomA7XG4gICAgc2VsZi51c2VySW5mby51c2VyX29wZW5pZCA9IHVzZXJpbmZvLm9wZW5pZCB8fCBg5pegb3BlbmlkYDtcbiAgICBzZWxmLnVzZXJJbmZvLnVzZXJfZ2VuZGVyID0gdXNlcmluZm8uZ2VuZGVyIHx8IGDml6BgO1xuICB9XG5cbiAgLy8g6Ieq5a6a5LmJ5pWw5o2u5LiK5oqlXG4gIHJlcG9ydCgpIHtcbiAgICBjb25zb2xlLmxvZyhg6Ieq5a6a5LmJ5pWw5o2u5LiK5oqlYCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBjYXJkX3RpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIC8vIOiHquWumuS5ieS6i+S7tuS4iuaKpe+8iOWIhuS6q+S6i+S7tu+8iVxuICAgIHd4LnJlcG9ydEFuYWx5dGljcygnc2hhcmVfY2FyZCcsIHtcbiAgICAgIGNhcmRfbmFtZTogc2VsZi5zaGFyZS50aXRsZSxcbiAgICAgIHVzZXJfbmFtZTogc2VsZi51c2VySW5mby51c2VyX25hbWUsXG4gICAgICBjYXJkX3RpbWU6IGNhcmRfdGltZSxcbiAgICAgIHVzZXJfb3BlbmlkOiBzZWxmLnVzZXJJbmZvLnVzZXJfb3BlbmlkLFxuICAgICAgdXNlcl9nZW5kZXI6IHNlbGYudXNlckluZm8udXNlcl9nZW5kZXJcbiAgICB9KTtcbiAgfVxuXG4gIC8vIOWIhuS6q+aIkOWKn+mCruS7tumAmuefpVxuICBzaGFyZUVtYWlsTm90aWNlKCkge1xuICAgIGNvbnNvbGUubG9nKGDliIbkuqvmiJDlip/pgq7ku7bpgJrnn6VgKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyDojrflj5blvZPliY3ml7bpl7RcbiAgICBsZXQgY2FyZF90aW1lID0gbmV3IERhdGUoKTtcblxuICAgIC8vIOWQkSB0YWJsZUlEIOS4uiAzOTAwNiDnmoTmlbDmja7ooajmj5LlhaXkuIDmnaHorrDlvZVcbiAgICBsZXQgdGFibGVJRCA9IDM5MDA2O1xuICAgIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG4gICAgbGV0IHByb2R1Y3QgPSBQcm9kdWN0LmNyZWF0ZSgpO1xuXG4gICAgLy8g6K6+572u5pWw5o2uXG4gICAgbGV0IGFwcGxlID0ge1xuICAgICAgc2VuZF9jYXJkOiAnRW1haWwnLFxuICAgICAgcmVjb3JkVXJsOiBzZWxmLnJlY29yZFVybCxcbiAgICAgIHVzZXJfbmFtZTogc2VsZi51c2VySW5mby51c2VyX25hbWUsXG4gICAgICB1c2VyX2dlbmRlcjogc2VsZi51c2VySW5mby51c2VyX2dlbmRlcixcbiAgICAgIHVzZXJfb3BlbmlkOiBzZWxmLnVzZXJJbmZvLnVzZXJfb3BlbmlkLFxuICAgICAgY2FyZF90aW1lOiBjYXJkX3RpbWUsXG4gICAgICBjYXJkX2NvbnRlbnQ6IHNlbGYubXNnLFxuICAgICAgY2FyZF9uYW1lOiBzZWxmLnNoYXJlLnRpdGxlXG4gICAgfTtcblxuICAgIHByb2R1Y3RcbiAgICAgIC5zZXQoYXBwbGUpXG4gICAgICAuc2F2ZSgpXG4gICAgICAudGhlbihcbiAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgICAgY29uc29sZS5sb2coYOWIm+W7uuihqOaIkOWKn2ApO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIC8vIGVyclxuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgLy8g6I635Y+W5b2T5YmN5pe26Ze05oizXG4gIGdldFRpbWVOb3coKSB7XG4gICAgY29uc29sZS5sb2coYOiOt+WPluW9k+WJjeaXtumXtOaIs2ApO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgdGltZUNoZWNrTm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdGltZU5vdyA9IHRpbWVDaGVja05vdy5nZXRUaW1lKCk7XG4gICAgc2VsZi50aW1lTm93ID0gdGltZU5vdztcbiAgICBzZWxmLiRhcHBseSgpO1xuICB9XG5cbiAgLy8g6K6+572u5pS25L+h5YCS6K6h5pe26ZmQ5Yi2XG4gIGNvdW50ZG93bihvcHRpb25zKSB7XG4gICAgY29uc29sZS5sb2coYOiuvuWumuWAkuiuoeaXtuaUtuS/oemZkOWItmApO1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIC8vIOiOt+WPluW9k+WJjeaXtumXtFxuICAgIGxldCB0aW1lQ2hlY2tOb3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCB0aW1lTm93ID0gdGltZUNoZWNrTm93LmdldFRpbWUoKTtcblxuICAgIC8vIOWmguaenOacieiuvuWumuaXtumXtOeahOaVsOaNrlxuICAgIGlmIChvcHRpb25zLnRpbWVOb3cpIHtcbiAgICAgIC8vIOagvOW8j+WMluaXtumXtOaIs1xuICAgICAgbGV0IG5vd1RpbWUgPSBwYXJzZUludChvcHRpb25zLnRpbWVOb3cpO1xuICAgICAgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICd1bmxpbWl0ZWQnKSB7XG4gICAgICAgIHRpbWVOb3cgPSAxO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAnMzBtaW4nKSB7XG4gICAgICAgIG5vd1RpbWUgPSBub3dUaW1lICsgMTAwMCAqIDYwICogMzA7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICczaG91cicpIHtcbiAgICAgICAgbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogNjAgKiA2MCAqIDM7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICczZGF5Jykge1xuICAgICAgICBub3dUaW1lID0gbm93VGltZSArIDEwMDAgKiA2MCAqIDYwICogMjQgKiAzO1xuICAgICAgfVxuICAgICAgLy8g5aaC5p6c5L+h5Lu25Zyo5pyJ5pWI5pyf5YaFXG4gICAgICBpZiAobm93VGltZSA+IHRpbWVOb3cpIHtcbiAgICAgICAgLy8g6K6+572u6IOM5pmv6Z+z5LmQXG4gICAgICAgIHNlbGYuc2V0QmdNdXNpYygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g5aaC5p6c5L+h5Lu25LiN5Zyo5pyJ5pWI5pyf5YaF77yM5bCx5by55Ye66L+H5pyf5o+Q56S677yM5bm26ZqQ6JeP5L+h5Lu25YaF5a65XG4gICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgIHVybDogYCR7c2VsZi5ub0RhdGFVcmx9YFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6K6+572u6IOM5pmv6Z+z5LmQXG4gICAgICBzZWxmLnNldEJnTXVzaWMoKTtcbiAgICB9XG5cbiAgICBzZWxmLiRhcHBseSgpO1xuICB9XG5cbiAgLy8g5aSE55CG5Lyg6YCS6L+H5p2l55qE5L+h5oGvXG4gIFJlZ01zZyhvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8g5aaC5p6c5pyJ55WZ6KiA5bCx5ZCM5q2l55WZ6KiA77yM5rKh5pyJ5bCx6K6+572u6buY6K6k55WZ6KiAXG4gICAgaWYgKG9wdGlvbnMubXNnKSB7XG4gICAgICBzZWxmLm1zZyA9IG9wdGlvbnMubXNnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDpu5jorqTnlZnoqIBcbiAgICAgIHNlbGYubXNnID0gc2VsZi5kZWZhdWx0TXNnO1xuICAgIH1cblxuICAgIGxldCBtc2cgPSBzZWxmLm1zZztcbiAgICBsZXQgdGVzdEFyciA9IFtdO1xuICAgIC8vIOmBh+WIsOS7peS4i+espuWPt+eri+WNs+aIquWPluWGheWuueWIhuautVxuICAgIGxldCByZWcgPSAvW++8jHwsfC5844CCfOOAgXzvvJ9877ybfDt8L10vZztcbiAgICBsZXQgaW5kZXggPSBgYDtcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIHdoaWxlICgoaW5kZXggPSByZWcuZXhlYyhtc2cpICE9IG51bGwpKSB7XG4gICAgICAvLyDmiKrlj5bkuKTkuKrnrKblkIjkuYvpl7TnmoTmloflrZfvvIzliIbmrrXmlL7lhaXmlbDnu4RcbiAgICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCByZWcubGFzdEluZGV4KSk7XG4gICAgICAvLyDmo4DmtYvlubbmlLnlj5jlvZPliY3nrKblj7fntKLlvJVcbiAgICAgIHN0YXJ0ID0gcmVnLmxhc3RJbmRleDtcbiAgICB9XG4gICAgLy8g6I635Y+W5pyA5ZCO5LiA5q615paH5a2XXG4gICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIG1zZy5sZW5ndGgpKTtcbiAgICBzZWxmLnRleHQgPSB0ZXN0QXJyO1xuICAgIHNlbGYuJGFwcGx5KCk7XG4gIH1cblxuICAvLyDorr7nva7og4zmma/pn7PkuZBcbiAgc2V0QmdNdXNpYygpIHtcbiAgICBjb25zb2xlLmxvZyhg6K6+572u6IOM5pmv6Z+z5LmQYCk7XG4gICAgbGV0IHNlbGY9dGhpcztcbiAgICAvLyDorr7nva7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIudGl0bGUgPSBzZWxmLmJnTXVzaWNEYXRhLnRpdGxlO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuZXBuYW1lID0gc2VsZi5iZ011c2ljRGF0YS5lcG5hbWU7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zaW5nZXIgPSBzZWxmLmJnTXVzaWNEYXRhLnNpbmdlcjtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmNvdmVySW1nVXJsID0gc2VsZi5iZ011c2ljRGF0YS5jb3ZlckltZ1VybDtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNyYyA9IHNlbGYuYmdNdXNpY0RhdGEuc3JjO1xuICB9XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyDmiZPljbDlvZPliY3pobXpnaLlj4LmlbBcbiAgICBjb25zb2xlLmxvZyhg5omT5Y2w5b2T5YmN6aG16Z2i5Y+C5pWwYCwgb3B0aW9ucyk7XG5cbiAgICAvLyDojrflj5blj4LmlbBcbiAgICBzZWxmLnJlY29yZFVybCA9IG9wdGlvbnMucmVjb3JkVXJsO1xuICAgIHNlbGYudGltZUNoZWNrVmFsID0gb3B0aW9ucy50aW1lQ2hlY2tWYWw7XG5cbiAgICAvLyDlgJLorqHml7bpmZDliLZcbiAgICBzZWxmLmNvdW50ZG93bihvcHRpb25zKTtcblxuICAgIC8vIOagvOW8j+WMlueVmeiogOaVsOaNrlxuICAgIHNlbGYuUmVnTXNnKG9wdGlvbnMpO1xuXG4gICAgLy8g6ISP5qOA5p+l5pWw5o2uXG4gICAgc2VsZi4kYXBwbHkoKTtcblxuICAgIC8v5pi+56S66L2s5Y+RXG4gICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIOiOt+WPluaJi+acuuS/oeaBr1xuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIOW9k+mhtemdouaYvuekuueahOaXtuWAmVxuICBvblNob3coKSB7XG4gICAgY29uc29sZS5sb2coJ3Nob3cnKTtcbiAgICAvLyDnu6fnu63mkq3mlL7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGxheSgpO1xuICB9XG4gIG9uSGlkZSgpIHtcbiAgICBjb25zb2xlLmxvZygnaGlkZGVuJyk7XG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gIH1cblxuICAvLyDlvZPpobXpnaLliIfmjaLvvIjpmpDol4/vvInnmoTml7blgJlcbiAgb25VbmxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ3VubG9hZCcpO1xuICAgIC8vIOaaguWBnOiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG4gIC8vIOiuvue9ruWIhuS6q+WNoeeJh1xuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyDojrflj5blvZPliY3ml7bpl7TmiLNcbiAgICBzZWxmLmdldFRpbWVOb3coKTtcblxuICAgIC8vICDliKTmlq3mmK/lkKbmmK/ngrnlh7vmjInpkq7ovazlj5FcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpO1xuICAgIH1cbiAgICAvLyDljaHniYflhoXlrrlcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHNlbGYuc2hhcmUudGl0bGUsXG4gICAgICBwYXRoOiBgJHtzZWxmLnNoYXJlLnBhdGh9P21zZz0ke3NlbGYubXNnfSZyZWNvcmRVcmw9JHtcbiAgICAgICAgc2VsZi5yZWNvcmRVcmxcbiAgICAgIH0mdGltZUNoZWNrVmFsPSR7c2VsZi50aW1lQ2hlY2tWYWx9JnRpbWVOb3c9JHtzZWxmLnRpbWVOb3d9YCxcbiAgICAgIC8vIOWwgemdouWbvlxuICAgICAgaW1hZ2VVcmw6IHNlbGYuc2hhcmUuY292ZXJJbWFnZVVybCxcblxuICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgICAgIHNlbGYuZ2V0VXNlckluZm8oKTtcblxuICAgICAgICAvLyDoh6rlrprkuYnkuovku7bkuIrmiqVcbiAgICAgICAgc2VsZi5yZXBvcnQoKTtcblxuICAgICAgICAvLyDliIbkuqvmiJDlip/pgq7ku7bpgJrnn6VcbiAgICAgICAgc2VsZi5zaGFyZUVtYWlsTm90aWNlKCk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgICBjb25zb2xlLmxvZyhg6L2s5Y+R5aSx6LSlYCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19