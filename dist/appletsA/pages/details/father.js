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
      // 图片URl数据
      dataUrl: {
        // 背景图片
        bgImageUrl: 'https://om83cysj8.qnssl.com/900fd18aade063301b497fbf84662548.jpg',
        // 音频图标（播放录音）
        recordIconUrl: 'https://om83cysj8.qnssl.com/%E5%BD%95%E9%9F%B3%E6%9C%BA%20%281%29.png',
        // 音乐图标
        musicIconUrl: 'https://om83cysj8.qnssl.com/Note_de_musique_music_256px_525366_easyicon.net.png'
      },
      // 转发数据
      share: {
        // 转发标题
        title: '\u7236\u4EB2\u8282\u5FEB\u4E50',
        // 转发打开路径
        path: '/appletsA/pages/details/father',
        // 封面图
        coverImageUrl: 'https://om83cysj8.qnssl.com/%E7%88%B6%E4%BA%B2%E8%8A%8211_Fotor.jpg'
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
        title: '\u7236\u4EB2',
        // 歌手
        singer: '\u7B77\u5B50\u5144\u5F1F',
        // 封面图
        coverImgUrl: 'https://om83cysj8.qnssl.com/a9d63448b881e12eab44fdfcdbd1cb7c_Fotor.png',
        // 歌曲地址
        src: 'https://om83cysj8.qnssl.com/at20111229221940.mp3'
      },
      msg: '', //输入框的内容
      text: '', //格式化之后要展示的内容
      recordUrl: '', //录音云文件地址
      musicState: 'running', //音乐图片动画是否暂停
      windowHeight: '100%', //手机屏幕高度
      timeCheckVal: 'unlimited', //信件有效期
      timeNow: '', //转发的时间戳
      defaultMsg: '\u5C0F\u65F6\u5019\uFF0C\u7236\u4EB2\u5C31\u662F\u9897\u53C2\u5929\u5927\u6811\uFF0C\u4E3A\u6211\u4EEC\u906E\u98CE\u6321\u96E8\uFF0C\u957F\u5927\u4E86\uFF0C\u7236\u4EB2\u6210\u4E86\u672C\u767E\u79D1\u5168\u4E66\uFF0C\u4E3A\u6211\u4EEC\u7B54\u7591\u89E3\u60D1\uFF0C\u7236\u4EB2\uFF0C\u6C38\u8FDC\u662F\u6211\u4EEC\u7684\u652F\u67F1\uFF0C\u7238\u7238\uFF0C\u8282\u65E5\u5FEB\u4E50',
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/father'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdGhlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImRhdGFVcmwiLCJiZ0ltYWdlVXJsIiwicmVjb3JkSWNvblVybCIsIm11c2ljSWNvblVybCIsInNoYXJlIiwidGl0bGUiLCJwYXRoIiwiY292ZXJJbWFnZVVybCIsInVzZXJJbmZvIiwidXNlcl9uYW1lIiwidXNlcl9nZW5kZXIiLCJ1c2VyX29wZW5pZCIsImJnTXVzaWNEYXRhIiwiZXBuYW1lIiwic2luZ2VyIiwiY292ZXJJbWdVcmwiLCJzcmMiLCJtc2ciLCJ0ZXh0IiwicmVjb3JkVXJsIiwibXVzaWNTdGF0ZSIsIndpbmRvd0hlaWdodCIsInRpbWVDaGVja1ZhbCIsInRpbWVOb3ciLCJkZWZhdWx0TXNnIiwibm9EYXRhVXJsIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJ3eCIsImdldEJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJwbGF5IiwicGF1c2UiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0b2dnbGVNdXNpYyIsInNlbGYiLCIkYXBwbHkiLCJyZWNvcmRQbGF5IiwiaW5uZXJBdWRpb0NvbnRleHQiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsImF1dG9wbGF5Iiwib25QbGF5Iiwib25FcnJvciIsInJlcyIsImVyck1zZyIsImVyckNvZGUiLCJldmVudHMiLCJ1c2VyaW5mbyIsIkJhYVMiLCJzdG9yYWdlIiwiZ2V0Iiwibmlja05hbWUiLCJvcGVuaWQiLCJnZW5kZXIiLCJjYXJkX3RpbWUiLCJEYXRlIiwicmVwb3J0QW5hbHl0aWNzIiwiY2FyZF9uYW1lIiwidGFibGVJRCIsIlByb2R1Y3QiLCJUYWJsZU9iamVjdCIsInByb2R1Y3QiLCJjcmVhdGUiLCJhcHBsZSIsInNlbmRfY2FyZCIsImNhcmRfY29udGVudCIsInNldCIsInNhdmUiLCJ0aGVuIiwidGltZUNoZWNrTm93IiwiZ2V0VGltZSIsIm9wdGlvbnMiLCJub3dUaW1lIiwicGFyc2VJbnQiLCJzZXRCZ011c2ljIiwicmVkaXJlY3RUbyIsInVybCIsInRlc3RBcnIiLCJyZWciLCJpbmRleCIsInN0YXJ0IiwiZXhlYyIsInB1c2giLCJzdWJzdHJpbmciLCJsYXN0SW5kZXgiLCJsZW5ndGgiLCJjb3VudGRvd24iLCJSZWdNc2ciLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJnZXRUaW1lTm93IiwiZnJvbSIsInRhcmdldCIsImltYWdlVXJsIiwiZ2V0VXNlckluZm8iLCJyZXBvcnQiLCJzaGFyZUVtYWlsTm90aWNlIiwiZmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMO0FBQ0FDLGVBQVM7QUFDUDtBQUNBQyxzRkFGTztBQUdQO0FBQ0FDLDhGQUpPO0FBS1A7QUFDQUM7QUFOTyxPQUZKO0FBVUw7QUFDQUMsYUFBTztBQUNMO0FBQ0FDLCtDQUZLO0FBR0w7QUFDQUMsOENBSks7QUFLTDtBQUNBQyx1QkFBZTtBQU5WLE9BWEY7QUFtQkw7QUFDQUMsZ0JBQVU7QUFDUjtBQUNBQyxxQkFGUTtBQUdSO0FBQ0FDLHVCQUpRO0FBS1I7QUFDQUM7QUFOUSxPQXBCTDtBQTRCTDtBQUNBQyxtQkFBYTtBQUNYO0FBQ0FDLGtCQUZXO0FBR1g7QUFDQVIsNkJBSlc7QUFLWDtBQUNBUywwQ0FOVztBQU9YO0FBQ0FDLDZGQVJXO0FBU1g7QUFDQUM7QUFWVyxPQTdCUjtBQXlDTEMsYUF6Q0ssRUF5Q0k7QUFDVEMsY0ExQ0ssRUEwQ0s7QUFDVkMsbUJBM0NLLEVBMkNVO0FBQ2ZDLDJCQTVDSyxFQTRDa0I7QUFDdkJD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QUFtQkxDLGNBQU0sY0FBU3hELEdBQVQsRUFBYztBQUNsQjtBQUNBbEIsa0JBQVFDLEdBQVI7QUFDRDtBQXRCSSxPQUFQO0FBd0JEOzs7O0VBaldnQyxlQUFLMEUsSTs7a0JBQW5CN0csSyIsImZpbGUiOiJmYXRoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54i25Lqy6IqCJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICAvLyDlm77niYdVUmzmlbDmja5cbiAgICBkYXRhVXJsOiB7XG4gICAgICAvLyDog4zmma/lm77niYdcbiAgICAgIGJnSW1hZ2VVcmw6IGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vOTAwZmQxOGFhZGUwNjMzMDFiNDk3ZmJmODQ2NjI1NDguanBnYCxcbiAgICAgIC8vIOmfs+mikeWbvuagh++8iOaSreaUvuW9lemfs++8iVxuICAgICAgcmVjb3JkSWNvblVybDogYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8lRTUlQkQlOTUlRTklOUYlQjMlRTYlOUMlQkElMjAlMjgxJTI5LnBuZ2AsXG4gICAgICAvLyDpn7PkuZDlm77moIdcbiAgICAgIG11c2ljSWNvblVybDogYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS9Ob3RlX2RlX211c2lxdWVfbXVzaWNfMjU2cHhfNTI1MzY2X2Vhc3lpY29uLm5ldC5wbmdgXG4gICAgfSxcbiAgICAvLyDovazlj5HmlbDmja5cbiAgICBzaGFyZToge1xuICAgICAgLy8g6L2s5Y+R5qCH6aKYXG4gICAgICB0aXRsZTogYOeItuS6suiKguW/q+S5kGAsXG4gICAgICAvLyDovazlj5HmiZPlvIDot6/lvoRcbiAgICAgIHBhdGg6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9mYXRoZXJgLFxuICAgICAgLy8g5bCB6Z2i5Zu+XG4gICAgICBjb3ZlckltYWdlVXJsOiAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLyVFNyU4OCVCNiVFNCVCQSVCMiVFOCU4QSU4MjExX0ZvdG9yLmpwZydcbiAgICB9LFxuICAgIC8vIOeUqOaIt+aVsOaNrlxuICAgIHVzZXJJbmZvOiB7XG4gICAgICAvLyDnlKjmiLflkI3np7BcbiAgICAgIHVzZXJfbmFtZTogYGAsXG4gICAgICAvLyDnlKjmiLfmgKfliKtcbiAgICAgIHVzZXJfZ2VuZGVyOiBgYCxcbiAgICAgIC8vIOeUqOaIt29wZW5pZFxuICAgICAgdXNlcl9vcGVuaWQ6IGBgXG4gICAgfSxcbiAgICAvLyDog4zmma/pn7PkuZDmlbDmja5cbiAgICBiZ011c2ljRGF0YToge1xuICAgICAgLy8g5LiT6L6R5ZCNXG4gICAgICBlcG5hbWU6IGBgLFxuICAgICAgLy8g6Z+z5LmQ5ZCNXG4gICAgICB0aXRsZTogYOeItuS6smAsXG4gICAgICAvLyDmrYzmiYtcbiAgICAgIHNpbmdlcjogYOett+WtkOWFhOW8n2AsXG4gICAgICAvLyDlsIHpnaLlm75cbiAgICAgIGNvdmVySW1nVXJsOiBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL2E5ZDYzNDQ4Yjg4MWUxMmVhYjQ0ZmRmY2RiZDFjYjdjX0ZvdG9yLnBuZ2AsXG4gICAgICAvLyDmrYzmm7LlnLDlnYBcbiAgICAgIHNyYzogYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS9hdDIwMTExMjI5MjIxOTQwLm1wM2BcbiAgICB9LFxuICAgIG1zZzogYGAsIC8v6L6T5YWl5qGG55qE5YaF5a65XG4gICAgdGV4dDogYGAsIC8v5qC85byP5YyW5LmL5ZCO6KaB5bGV56S655qE5YaF5a65XG4gICAgcmVjb3JkVXJsOiBgYCwgLy/lvZXpn7PkupHmlofku7blnLDlnYBcbiAgICBtdXNpY1N0YXRlOiBgcnVubmluZ2AsIC8v6Z+z5LmQ5Zu+54mH5Yqo55S75piv5ZCm5pqC5YGcXG4gICAgd2luZG93SGVpZ2h0OiAnMTAwJScsIC8v5omL5py65bGP5bmV6auY5bqmXG4gICAgdGltZUNoZWNrVmFsOiAndW5saW1pdGVkJywgLy/kv6Hku7bmnInmlYjmnJ9cbiAgICB0aW1lTm93OiBgYCwgLy/ovazlj5HnmoTml7bpl7TmiLNcbiAgICBkZWZhdWx0TXNnOiBg5bCP5pe25YCZ77yM54i25Lqy5bCx5piv6aKX5Y+C5aSp5aSn5qCR77yM5Li65oiR5Lus6YGu6aOO5oyh6Zuo77yM6ZW/5aSn5LqG77yM54i25Lqy5oiQ5LqG5pys55m+56eR5YWo5Lmm77yM5Li65oiR5Lus562U55aR6Kej5oOR77yM54i25Lqy77yM5rC46L+c5piv5oiR5Lus55qE5pSv5p+x77yM54i454i477yM6IqC5pel5b+r5LmQYCxcbiAgICBub0RhdGFVcmw6YC9hcHBsZXRzQi9wYWdlcy9ub2RhdGEvbm9kYXRhYCwvL+aUtuS/oemZkOWItuaPkOekuumhtemdolxuICB9O1xuXG4gIHdhdGNoID0ge1xuICAgIC8vICDmmoLlgZwv5pKt5pS+6Z+z5LmQXG4gICAgbXVzaWNTdGF0ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBtdXNpY1N0YXRlIHZhbHVlOiAke29sZFZhbHVlfSAtPiAke25ld1ZhbHVlfWApO1xuICAgICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICAgIGlmIChuZXdWYWx1ZSA9PSBgcnVubmluZ2ApIHtcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDliIfmjaLpn7PkuZDlm77moIfml4vovaxcbiAgICB0b2dnbGVNdXNpYygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKGB0b2dnbGVgKTtcbiAgICAgIGlmIChzZWxmLm11c2ljU3RhdGUgPT0gJ3J1bm5pbmcnKSB7XG4gICAgICAgIHNlbGYubXVzaWNTdGF0ZSA9IGBwYXVzZWRgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5tdXNpY1N0YXRlID0gYHJ1bm5pbmdgO1xuICAgICAgfVxuICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICB9LFxuICAgIC8vIOaSreaUvuW9lemfs1xuICAgIHJlY29yZFBsYXkoKSB7XG4gICAgICBjb25zb2xlLmxvZyhg5pKt5pS+5b2V6Z+zYCk7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGNvbnN0IGlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHNlbGYucmVjb3JkVXJsO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25QbGF5KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ+W8gOWni+aSreaUvicpO1xuICAgICAgfSk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyQ29kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGNvbnNvbGUubG9nKGDojrflj5bnlKjmiLfkv6Hmga9gKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgLy8g6I635Y+W55So5oi35a2Y5YKo55qE55So5oi35L+h5oGvXG4gICAgbGV0IHVzZXJpbmZvID0gd3guQmFhUy5zdG9yYWdlLmdldChgdXNlcmluZm9gKTtcbiAgICAvLyDorr7nva7lpLTlg4/lkozlkI3np7BcbiAgICBzZWxmLnVzZXJJbmZvLnVzZXJfbmFtZSA9IHVzZXJpbmZvLm5pY2tOYW1lIHx8IGDmnKrnmbvlvZXmuLjlrqJgO1xuICAgIHNlbGYudXNlckluZm8udXNlcl9vcGVuaWQgPSB1c2VyaW5mby5vcGVuaWQgfHwgYOaXoG9wZW5pZGA7XG4gICAgc2VsZi51c2VySW5mby51c2VyX2dlbmRlciA9IHVzZXJpbmZvLmdlbmRlciB8fCBg5pegYDtcbiAgfVxuXG4gIC8vIOiHquWumuS5ieaVsOaNruS4iuaKpVxuICByZXBvcnQoKSB7XG4gICAgY29uc29sZS5sb2coYOiHquWumuS5ieaVsOaNruS4iuaKpWApO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgY2FyZF90aW1lID0gbmV3IERhdGUoKTtcbiAgICAvLyDoh6rlrprkuYnkuovku7bkuIrmiqXvvIjliIbkuqvkuovku7bvvIlcbiAgICB3eC5yZXBvcnRBbmFseXRpY3MoJ3NoYXJlX2NhcmQnLCB7XG4gICAgICBjYXJkX25hbWU6IHNlbGYuc2hhcmUudGl0bGUsXG4gICAgICB1c2VyX25hbWU6IHNlbGYudXNlckluZm8udXNlcl9uYW1lLFxuICAgICAgY2FyZF90aW1lOiBjYXJkX3RpbWUsXG4gICAgICB1c2VyX29wZW5pZDogc2VsZi51c2VySW5mby51c2VyX29wZW5pZCxcbiAgICAgIHVzZXJfZ2VuZGVyOiBzZWxmLnVzZXJJbmZvLnVzZXJfZ2VuZGVyXG4gICAgfSk7XG4gIH1cblxuICAvLyDliIbkuqvmiJDlip/pgq7ku7bpgJrnn6VcbiAgc2hhcmVFbWFpbE5vdGljZSgpIHtcbiAgICBjb25zb2xlLmxvZyhg5YiG5Lqr5oiQ5Yqf6YKu5Lu26YCa55+lYCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8g6I635Y+W5b2T5YmN5pe26Ze0XG4gICAgbGV0IGNhcmRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAvLyDlkJEgdGFibGVJRCDkuLogMzkwMDYg55qE5pWw5o2u6KGo5o+S5YWl5LiA5p2h6K6w5b2VXG4gICAgbGV0IHRhYmxlSUQgPSAzOTAwNjtcbiAgICBsZXQgUHJvZHVjdCA9IG5ldyB3eC5CYWFTLlRhYmxlT2JqZWN0KHRhYmxlSUQpO1xuICAgIGxldCBwcm9kdWN0ID0gUHJvZHVjdC5jcmVhdGUoKTtcblxuICAgIC8vIOiuvue9ruaVsOaNrlxuICAgIGxldCBhcHBsZSA9IHtcbiAgICAgIHNlbmRfY2FyZDogJ0VtYWlsJyxcbiAgICAgIHJlY29yZFVybDogc2VsZi5yZWNvcmRVcmwsXG4gICAgICB1c2VyX25hbWU6IHNlbGYudXNlckluZm8udXNlcl9uYW1lLFxuICAgICAgdXNlcl9nZW5kZXI6IHNlbGYudXNlckluZm8udXNlcl9nZW5kZXIsXG4gICAgICB1c2VyX29wZW5pZDogc2VsZi51c2VySW5mby51c2VyX29wZW5pZCxcbiAgICAgIGNhcmRfdGltZTogY2FyZF90aW1lLFxuICAgICAgY2FyZF9jb250ZW50OiBzZWxmLm1zZyxcbiAgICAgIGNhcmRfbmFtZTogc2VsZi5zaGFyZS50aXRsZVxuICAgIH07XG5cbiAgICBwcm9kdWN0XG4gICAgICAuc2V0KGFwcGxlKVxuICAgICAgLnNhdmUoKVxuICAgICAgLnRoZW4oXG4gICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICAgIGNvbnNvbGUubG9nKGDliJvlu7rooajmiJDlip9gKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAvLyBlcnJcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIOiOt+WPluW9k+WJjeaXtumXtOaIs1xuICBnZXRUaW1lTm93KCkge1xuICAgIGNvbnNvbGUubG9nKGDojrflj5blvZPliY3ml7bpl7TmiLNgKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHRpbWVDaGVja05vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRpbWVOb3cgPSB0aW1lQ2hlY2tOb3cuZ2V0VGltZSgpO1xuICAgIHNlbGYudGltZU5vdyA9IHRpbWVOb3c7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgfVxuXG4gIC8vIOiuvue9ruaUtuS/oeWAkuiuoeaXtumZkOWItlxuICBjb3VudGRvd24ob3B0aW9ucykge1xuICAgIGNvbnNvbGUubG9nKGDorr7lrprlgJLorqHml7bmlLbkv6HpmZDliLZgKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyDojrflj5blvZPliY3ml7bpl7RcbiAgICBsZXQgdGltZUNoZWNrTm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdGltZU5vdyA9IHRpbWVDaGVja05vdy5nZXRUaW1lKCk7XG5cbiAgICAvLyDlpoLmnpzmnInorr7lrprml7bpl7TnmoTmlbDmja5cbiAgICBpZiAob3B0aW9ucy50aW1lTm93KSB7XG4gICAgICAvLyDmoLzlvI/ljJbml7bpl7TmiLNcbiAgICAgIGxldCBub3dUaW1lID0gcGFyc2VJbnQob3B0aW9ucy50aW1lTm93KTtcbiAgICAgIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAndW5saW1pdGVkJykge1xuICAgICAgICB0aW1lTm93ID0gMTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50aW1lQ2hlY2tWYWwgPT0gJzMwbWluJykge1xuICAgICAgICBub3dUaW1lID0gbm93VGltZSArIDEwMDAgKiA2MCAqIDMwO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAnM2hvdXInKSB7XG4gICAgICAgIG5vd1RpbWUgPSBub3dUaW1lICsgMTAwMCAqIDYwICogNjAgKiAzO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAnM2RheScpIHtcbiAgICAgICAgbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogNjAgKiA2MCAqIDI0ICogMztcbiAgICAgIH1cbiAgICAgIC8vIOWmguaenOS/oeS7tuWcqOacieaViOacn+WGhVxuICAgICAgaWYgKG5vd1RpbWUgPiB0aW1lTm93KSB7XG4gICAgICAgIC8vIOiuvue9ruiDjOaZr+mfs+S5kFxuICAgICAgICBzZWxmLnNldEJnTXVzaWMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWmguaenOS/oeS7tuS4jeWcqOacieaViOacn+WGhe+8jOWwseW8ueWHuui/h+acn+aPkOekuu+8jOW5tumakOiXj+S/oeS7tuWGheWuuVxuICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICB1cmw6IGAke3NlbGYubm9EYXRhVXJsfWBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOiuvue9ruiDjOaZr+mfs+S5kFxuICAgICAgc2VsZi5zZXRCZ011c2ljKCk7XG4gICAgfVxuXG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgfVxuXG4gIC8vIOWkhOeQhuS8oOmAkui/h+adpeeahOS/oeaBr1xuICBSZWdNc2cob3B0aW9ucykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIC8vIOWmguaenOacieeVmeiogOWwseWQjOatpeeVmeiogO+8jOayoeacieWwseiuvue9rum7mOiupOeVmeiogFxuICAgIGlmIChvcHRpb25zLm1zZykge1xuICAgICAgc2VsZi5tc2cgPSBvcHRpb25zLm1zZztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6buY6K6k55WZ6KiAXG4gICAgICBzZWxmLm1zZyA9IHNlbGYuZGVmYXVsdE1zZztcbiAgICB9XG5cbiAgICBsZXQgbXNnID0gc2VsZi5tc2c7XG4gICAgbGV0IHRlc3RBcnIgPSBbXTtcbiAgICAvLyDpgYfliLDku6XkuIvnrKblj7fnq4vljbPmiKrlj5blhoXlrrnliIbmrrVcbiAgICBsZXQgcmVnID0gL1vvvIx8LHwufOOAgnzjgIF877yffO+8m3w7fC9dL2c7XG4gICAgbGV0IGluZGV4ID0gYGA7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICB3aGlsZSAoKGluZGV4ID0gcmVnLmV4ZWMobXNnKSAhPSBudWxsKSkge1xuICAgICAgLy8g5oiq5Y+W5Lik5Liq56ym5ZCI5LmL6Ze055qE5paH5a2X77yM5YiG5q615pS+5YWl5pWw57uEXG4gICAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgcmVnLmxhc3RJbmRleCkpO1xuICAgICAgLy8g5qOA5rWL5bm25pS55Y+Y5b2T5YmN56ym5Y+357Si5byVXG4gICAgICBzdGFydCA9IHJlZy5sYXN0SW5kZXg7XG4gICAgfVxuICAgIC8vIOiOt+WPluacgOWQjuS4gOauteaWh+Wtl1xuICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCBtc2cubGVuZ3RoKSk7XG4gICAgc2VsZi50ZXh0ID0gdGVzdEFycjtcbiAgICBzZWxmLiRhcHBseSgpO1xuICB9XG5cbiAgLy8g6K6+572u6IOM5pmv6Z+z5LmQXG4gIHNldEJnTXVzaWMoKSB7XG4gICAgY29uc29sZS5sb2coYOiuvue9ruiDjOaZr+mfs+S5kGApO1xuICAgIGxldCBzZWxmPXRoaXM7XG4gICAgLy8g6K6+572u6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnRpdGxlID0gc2VsZi5iZ011c2ljRGF0YS50aXRsZTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmVwbmFtZSA9IHNlbGYuYmdNdXNpY0RhdGEuZXBuYW1lO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuc2luZ2VyID0gc2VsZi5iZ011c2ljRGF0YS5zaW5nZXI7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5jb3ZlckltZ1VybCA9IHNlbGYuYmdNdXNpY0RhdGEuY292ZXJJbWdVcmw7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zcmMgPSBzZWxmLmJnTXVzaWNEYXRhLnNyYztcbiAgfVxuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8g5omT5Y2w5b2T5YmN6aG16Z2i5Y+C5pWwXG4gICAgY29uc29sZS5sb2coYOaJk+WNsOW9k+WJjemhtemdouWPguaVsGAsIG9wdGlvbnMpO1xuXG4gICAgLy8g6I635Y+W5Y+C5pWwXG4gICAgc2VsZi5yZWNvcmRVcmwgPSBvcHRpb25zLnJlY29yZFVybDtcbiAgICBzZWxmLnRpbWVDaGVja1ZhbCA9IG9wdGlvbnMudGltZUNoZWNrVmFsO1xuXG4gICAgLy8g5YCS6K6h5pe26ZmQ5Yi2XG4gICAgc2VsZi5jb3VudGRvd24ob3B0aW9ucyk7XG5cbiAgICAvLyDmoLzlvI/ljJbnlZnoqIDmlbDmja5cbiAgICBzZWxmLlJlZ01zZyhvcHRpb25zKTtcblxuICAgIC8vIOiEj+ajgOafpeaVsOaNrlxuICAgIHNlbGYuJGFwcGx5KCk7XG5cbiAgICAvL+aYvuekuui9rOWPkVxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5bmiYvmnLrkv6Hmga9cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLndpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyDlvZPpobXpnaLmmL7npLrnmoTml7blgJlcbiAgb25TaG93KCkge1xuICAgIGNvbnNvbGUubG9nKCdzaG93Jyk7XG4gICAgLy8g57un57ut5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBsYXkoKTtcbiAgfVxuICBvbkhpZGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2hpZGRlbicpO1xuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG5cbiAgLy8g5b2T6aG16Z2i5YiH5o2i77yI6ZqQ6JeP77yJ55qE5pe25YCZXG4gIG9uVW5sb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCd1bmxvYWQnKTtcbiAgICAvLyDmmoLlgZzog4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgfVxuICAvLyDorr7nva7liIbkuqvljaHniYdcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8g6I635Y+W5b2T5YmN5pe26Ze05oizXG4gICAgc2VsZi5nZXRUaW1lTm93KCk7XG5cbiAgICAvLyAg5Yik5pat5piv5ZCm5piv54K55Ye75oyJ6ZKu6L2s5Y+RXG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KTtcbiAgICB9XG4gICAgLy8g5Y2h54mH5YaF5a65XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBzZWxmLnNoYXJlLnRpdGxlLFxuICAgICAgcGF0aDogYCR7c2VsZi5zaGFyZS5wYXRofT9tc2c9JHtzZWxmLm1zZ30mcmVjb3JkVXJsPSR7XG4gICAgICAgIHNlbGYucmVjb3JkVXJsXG4gICAgICB9JnRpbWVDaGVja1ZhbD0ke3NlbGYudGltZUNoZWNrVmFsfSZ0aW1lTm93PSR7c2VsZi50aW1lTm93fWAsXG4gICAgICAvLyDlsIHpnaLlm75cbiAgICAgIGltYWdlVXJsOiBzZWxmLnNoYXJlLmNvdmVySW1hZ2VVcmwsXG5cbiAgICAgIC8vIOi9rOWPkeaIkOWKn1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICBzZWxmLmdldFVzZXJJbmZvKCk7XG5cbiAgICAgICAgLy8g6Ieq5a6a5LmJ5LqL5Lu25LiK5oqlXG4gICAgICAgIHNlbGYucmVwb3J0KCk7XG5cbiAgICAgICAgLy8g5YiG5Lqr5oiQ5Yqf6YKu5Lu26YCa55+lXG4gICAgICAgIHNlbGYuc2hhcmVFbWFpbE5vdGljZSgpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HlpLHotKVcbiAgICAgICAgY29uc29sZS5sb2coYOi9rOWPkeWksei0pWApO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==