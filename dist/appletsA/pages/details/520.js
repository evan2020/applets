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
        bgImageUrl: 'https://om83cysj8.qnssl.com/36f3d726bc9d628873dedd475c92dfe5cd133bf4131c8-laAYJl_fw658.jpeg',
        // 音频图标（播放录音）
        recordIconUrl: 'https://om83cysj8.qnssl.com/%E5%BD%95%E9%9F%B3%E6%9C%BA%20%281%29.png',
        // 音乐图标
        musicIconUrl: 'https://om83cysj8.qnssl.com/Note_de_musique_music_256px_525366_easyicon.net.png'
      },
      // 转发数据
      share: {
        // 转发标题
        title: '\u6211\u7231\u4F60',
        // 转发打开路径
        path: '/appletsA/pages/details/520',
        // 封面图
        coverImageUrl: 'https://om83cysj8.qnssl.com/33809_2014021217065921537600.jpg'
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
        title: '\u5C31\u662F\u7231\u4F60',
        // 歌手
        singer: '\u9676\u5586',
        // 封面图
        coverImgUrl: 'https://om83cysj8.qnssl.com/123jjdln%20%28153%29_Fotor.jpg',
        // 歌曲地址
        src: 'https://om83cysj8.qnssl.com/552.mp3'
      },
      msg: '', //输入框的内容
      text: '', //格式化之后要展示的内容
      recordUrl: '', //录音云文件地址
      musicState: 'running', //音乐图片动画是否暂停
      windowHeight: '100%', //手机屏幕高度
      timeCheckVal: 'unlimited', //信件有效期
      timeNow: '', //转发的时间戳
      defaultMsg: '\u4ED6\u4EEC\u8BF4\uFF0C\u8FD9\u4E2A\u4E16\u754C\u4E0A\uFF0C\u6D77\u6700\u6DF1\u9083\uFF0C\u5E72\u51C0\u53C8\u900F\u660E\uFF0C\u6211\u60F3\uFF0C\u90A3\u662F\u4ED6\u4EEC\u6CA1\u89C1\u8FC7\u4F60\u7684\u773C\u775B',
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/520'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjUyMC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImRhdGFVcmwiLCJiZ0ltYWdlVXJsIiwicmVjb3JkSWNvblVybCIsIm11c2ljSWNvblVybCIsInNoYXJlIiwidGl0bGUiLCJwYXRoIiwiY292ZXJJbWFnZVVybCIsInVzZXJJbmZvIiwidXNlcl9uYW1lIiwidXNlcl9nZW5kZXIiLCJ1c2VyX29wZW5pZCIsImJnTXVzaWNEYXRhIiwiZXBuYW1lIiwic2luZ2VyIiwiY292ZXJJbWdVcmwiLCJzcmMiLCJtc2ciLCJ0ZXh0IiwicmVjb3JkVXJsIiwibXVzaWNTdGF0ZSIsIndpbmRvd0hlaWdodCIsInRpbWVDaGVja1ZhbCIsInRpbWVOb3ciLCJkZWZhdWx0TXNnIiwibm9EYXRhVXJsIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJ3eCIsImdldEJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJwbGF5IiwicGF1c2UiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0b2dnbGVNdXNpYyIsInNlbGYiLCIkYXBwbHkiLCJyZWNvcmRQbGF5IiwiaW5uZXJBdWRpb0NvbnRleHQiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsImF1dG9wbGF5Iiwib25QbGF5Iiwib25FcnJvciIsInJlcyIsImVyck1zZyIsImVyckNvZGUiLCJldmVudHMiLCJ1c2VyaW5mbyIsIkJhYVMiLCJzdG9yYWdlIiwiZ2V0Iiwibmlja05hbWUiLCJvcGVuaWQiLCJnZW5kZXIiLCJjYXJkX3RpbWUiLCJEYXRlIiwicmVwb3J0QW5hbHl0aWNzIiwiY2FyZF9uYW1lIiwidGFibGVJRCIsIlByb2R1Y3QiLCJUYWJsZU9iamVjdCIsInByb2R1Y3QiLCJjcmVhdGUiLCJhcHBsZSIsInNlbmRfY2FyZCIsImNhcmRfY29udGVudCIsInNldCIsInNhdmUiLCJ0aGVuIiwidGltZUNoZWNrTm93IiwiZ2V0VGltZSIsIm9wdGlvbnMiLCJub3dUaW1lIiwicGFyc2VJbnQiLCJzZXRCZ011c2ljIiwicmVkaXJlY3RUbyIsInVybCIsInRlc3RBcnIiLCJyZWciLCJpbmRleCIsInN0YXJ0IiwiZXhlYyIsInB1c2giLCJzdWJzdHJpbmciLCJsYXN0SW5kZXgiLCJsZW5ndGgiLCJjb3VudGRvd24iLCJSZWdNc2ciLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJnZXRUaW1lTm93IiwiZnJvbSIsInRhcmdldCIsImltYWdlVXJsIiwiZ2V0VXNlckluZm8iLCJyZXBvcnQiLCJzaGFyZUVtYWlsTm90aWNlIiwiZmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMO0FBQ0FDLGVBQVM7QUFDUDtBQUNBQyxpSEFGTztBQUdQO0FBQ0FDLDhGQUpPO0FBS1A7QUFDQUM7QUFOTyxPQUZKO0FBVUw7QUFDQUMsYUFBTztBQUNMO0FBQ0FDLG1DQUZLO0FBR0w7QUFDQUMsMkNBSks7QUFLTDtBQUNBQyx1QkFBZTtBQU5WLE9BWEY7QUFtQkw7QUFDQUMsZ0JBQVU7QUFDUjtBQUNBQyxxQkFGUTtBQUdSO0FBQ0FDLHVCQUpRO0FBS1I7QUFDQUM7QUFOUSxPQXBCTDtBQTRCTDtBQUNBQyxtQkFBYTtBQUNYO0FBQ0FDLGtCQUZXO0FBR1g7QUFDQVIseUNBSlc7QUFLWDtBQUNBUyw4QkFOVztBQU9YO0FBQ0FDLGlGQVJXO0FBU1g7QUFDQUM7QUFWVyxPQTdCUjtBQXlDTEMsYUF6Q0ssRUF5Q0k7QUFDVEMsY0ExQ0ssRUEwQ0s7QUFDVkMsbUJBM0NLLEVBMkNVO0FBQ2ZDLDJCQTVDSyxFQTRDa0I7QUFDdkJDLG9C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QkxDLGNBQU0sY0FBU3hELEdBQVQsRUFBYztBQUNsQjtBQUNBbEIsa0JBQVFDLEdBQVI7QUFDRDtBQXRCSSxPQUFQO0FBd0JEOzs7O0VBaldnQyxlQUFLMEUsSTs7a0JBQW5CN0csSyIsImZpbGUiOiI1MjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56uv5Y2IJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICAvLyDlm77niYdVUmzmlbDmja5cbiAgICBkYXRhVXJsOiB7XG4gICAgICAvLyDog4zmma/lm77niYdcbiAgICAgIGJnSW1hZ2VVcmw6IGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMzZmM2Q3MjZiYzlkNjI4ODczZGVkZDQ3NWM5MmRmZTVjZDEzM2JmNDEzMWM4LWxhQVlKbF9mdzY1OC5qcGVnYCxcbiAgICAgIC8vIOmfs+mikeWbvuagh++8iOaSreaUvuW9lemfs++8iVxuICAgICAgcmVjb3JkSWNvblVybDogYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8lRTUlQkQlOTUlRTklOUYlQjMlRTYlOUMlQkElMjAlMjgxJTI5LnBuZ2AsXG4gICAgICAvLyDpn7PkuZDlm77moIdcbiAgICAgIG11c2ljSWNvblVybDogYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS9Ob3RlX2RlX211c2lxdWVfbXVzaWNfMjU2cHhfNTI1MzY2X2Vhc3lpY29uLm5ldC5wbmdgXG4gICAgfSxcbiAgICAvLyDovazlj5HmlbDmja5cbiAgICBzaGFyZToge1xuICAgICAgLy8g6L2s5Y+R5qCH6aKYXG4gICAgICB0aXRsZTogYOaIkeeIseS9oGAsXG4gICAgICAvLyDovazlj5HmiZPlvIDot6/lvoRcbiAgICAgIHBhdGg6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy81MjBgLFxuICAgICAgLy8g5bCB6Z2i5Zu+XG4gICAgICBjb3ZlckltYWdlVXJsOiAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzMzODA5XzIwMTQwMjEyMTcwNjU5MjE1Mzc2MDAuanBnJ1xuICAgIH0sXG4gICAgLy8g55So5oi35pWw5o2uXG4gICAgdXNlckluZm86IHtcbiAgICAgIC8vIOeUqOaIt+WQjeensFxuICAgICAgdXNlcl9uYW1lOiBgYCxcbiAgICAgIC8vIOeUqOaIt+aAp+WIq1xuICAgICAgdXNlcl9nZW5kZXI6IGBgLFxuICAgICAgLy8g55So5oi3b3BlbmlkXG4gICAgICB1c2VyX29wZW5pZDogYGBcbiAgICB9LFxuICAgIC8vIOiDjOaZr+mfs+S5kOaVsOaNrlxuICAgIGJnTXVzaWNEYXRhOiB7XG4gICAgICAvLyDkuJPovpHlkI1cbiAgICAgIGVwbmFtZTogYGAsXG4gICAgICAvLyDpn7PkuZDlkI1cbiAgICAgIHRpdGxlOiBg5bCx5piv54ix5L2gYCxcbiAgICAgIC8vIOatjOaJi1xuICAgICAgc2luZ2VyOiBg6Zm25ZaGYCxcbiAgICAgIC8vIOWwgemdouWbvlxuICAgICAgY292ZXJJbWdVcmw6IGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMTIzampkbG4lMjAlMjgxNTMlMjlfRm90b3IuanBnYCxcbiAgICAgIC8vIOatjOabsuWcsOWdgFxuICAgICAgc3JjOiBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzU1Mi5tcDNgXG4gICAgfSxcbiAgICBtc2c6IGBgLCAvL+i+k+WFpeahhueahOWGheWuuVxuICAgIHRleHQ6IGBgLCAvL+agvOW8j+WMluS5i+WQjuimgeWxleekuueahOWGheWuuVxuICAgIHJlY29yZFVybDogYGAsIC8v5b2V6Z+z5LqR5paH5Lu25Zyw5Z2AXG4gICAgbXVzaWNTdGF0ZTogYHJ1bm5pbmdgLCAvL+mfs+S5kOWbvueJh+WKqOeUu+aYr+WQpuaaguWBnFxuICAgIHdpbmRvd0hlaWdodDogJzEwMCUnLCAvL+aJi+acuuWxj+W5lemrmOW6plxuICAgIHRpbWVDaGVja1ZhbDogJ3VubGltaXRlZCcsIC8v5L+h5Lu25pyJ5pWI5pyfXG4gICAgdGltZU5vdzogYGAsIC8v6L2s5Y+R55qE5pe26Ze05oizXG4gICAgZGVmYXVsdE1zZzogYOS7luS7rOivtO+8jOi/meS4quS4lueVjOS4iu+8jOa1t+acgOa3semCg++8jOW5suWHgOWPiOmAj+aYju+8jOaIkeaDs++8jOmCo+aYr+S7luS7rOayoeingei/h+S9oOeahOecvOedm2AsXG4gICAgbm9EYXRhVXJsOmAvYXBwbGV0c0IvcGFnZXMvbm9kYXRhL25vZGF0YWAsLy/mlLbkv6HpmZDliLbmj5DnpLrpobXpnaJcbiAgfTtcblxuICB3YXRjaCA9IHtcbiAgICAvLyAg5pqC5YGcL+aSreaUvumfs+S5kFxuICAgIG11c2ljU3RhdGUobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgbXVzaWNTdGF0ZSB2YWx1ZTogJHtvbGRWYWx1ZX0gLT4gJHtuZXdWYWx1ZX1gKTtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgICBpZiAobmV3VmFsdWUgPT0gYHJ1bm5pbmdgKSB7XG4gICAgICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGxheSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g5YiH5o2i6Z+z5LmQ5Zu+5qCH5peL6L2sXG4gICAgdG9nZ2xlTXVzaWMoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhgdG9nZ2xlYCk7XG4gICAgICBpZiAoc2VsZi5tdXNpY1N0YXRlID09ICdydW5uaW5nJykge1xuICAgICAgICBzZWxmLm11c2ljU3RhdGUgPSBgcGF1c2VkYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubXVzaWNTdGF0ZSA9IGBydW5uaW5nYDtcbiAgICAgIH1cbiAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgfSxcbiAgICAvLyDmkq3mlL7lvZXpn7NcbiAgICByZWNvcmRQbGF5KCkge1xuICAgICAgY29uc29sZS5sb2coYOaSreaUvuW9lemfs2ApO1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICBjb25zdCBpbm5lckF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IHRydWU7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSBzZWxmLnJlY29yZFVybDtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uUGxheSgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCflvIDlp4vmkq3mlL4nKTtcbiAgICAgIH0pO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FcnJvcihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyckNvZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICBnZXRVc2VySW5mbygpIHtcbiAgICBjb25zb2xlLmxvZyhg6I635Y+W55So5oi35L+h5oGvYCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIC8vIOiOt+WPlueUqOaIt+WtmOWCqOeahOeUqOaIt+S/oeaBr1xuICAgIGxldCB1c2VyaW5mbyA9IHd4LkJhYVMuc3RvcmFnZS5nZXQoYHVzZXJpbmZvYCk7XG4gICAgLy8g6K6+572u5aS05YOP5ZKM5ZCN56ewXG4gICAgc2VsZi51c2VySW5mby51c2VyX25hbWUgPSB1c2VyaW5mby5uaWNrTmFtZSB8fCBg5pyq55m75b2V5ri45a6iYDtcbiAgICBzZWxmLnVzZXJJbmZvLnVzZXJfb3BlbmlkID0gdXNlcmluZm8ub3BlbmlkIHx8IGDml6BvcGVuaWRgO1xuICAgIHNlbGYudXNlckluZm8udXNlcl9nZW5kZXIgPSB1c2VyaW5mby5nZW5kZXIgfHwgYOaXoGA7XG4gIH1cblxuICAvLyDoh6rlrprkuYnmlbDmja7kuIrmiqVcbiAgcmVwb3J0KCkge1xuICAgIGNvbnNvbGUubG9nKGDoh6rlrprkuYnmlbDmja7kuIrmiqVgKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGNhcmRfdGltZSA9IG5ldyBEYXRlKCk7XG4gICAgLy8g6Ieq5a6a5LmJ5LqL5Lu25LiK5oql77yI5YiG5Lqr5LqL5Lu277yJXG4gICAgd3gucmVwb3J0QW5hbHl0aWNzKCdzaGFyZV9jYXJkJywge1xuICAgICAgY2FyZF9uYW1lOiBzZWxmLnNoYXJlLnRpdGxlLFxuICAgICAgdXNlcl9uYW1lOiBzZWxmLnVzZXJJbmZvLnVzZXJfbmFtZSxcbiAgICAgIGNhcmRfdGltZTogY2FyZF90aW1lLFxuICAgICAgdXNlcl9vcGVuaWQ6IHNlbGYudXNlckluZm8udXNlcl9vcGVuaWQsXG4gICAgICB1c2VyX2dlbmRlcjogc2VsZi51c2VySW5mby51c2VyX2dlbmRlclxuICAgIH0pO1xuICB9XG5cbiAgLy8g5YiG5Lqr5oiQ5Yqf6YKu5Lu26YCa55+lXG4gIHNoYXJlRW1haWxOb3RpY2UoKSB7XG4gICAgY29uc29sZS5sb2coYOWIhuS6q+aIkOWKn+mCruS7tumAmuefpWApO1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIC8vIOiOt+WPluW9k+WJjeaXtumXtFxuICAgIGxldCBjYXJkX3RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLy8g5ZCRIHRhYmxlSUQg5Li6IDM5MDA2IOeahOaVsOaNruihqOaPkuWFpeS4gOadoeiusOW9lVxuICAgIGxldCB0YWJsZUlEID0gMzkwMDY7XG4gICAgbGV0IFByb2R1Y3QgPSBuZXcgd3guQmFhUy5UYWJsZU9iamVjdCh0YWJsZUlEKTtcbiAgICBsZXQgcHJvZHVjdCA9IFByb2R1Y3QuY3JlYXRlKCk7XG5cbiAgICAvLyDorr7nva7mlbDmja5cbiAgICBsZXQgYXBwbGUgPSB7XG4gICAgICBzZW5kX2NhcmQ6ICdFbWFpbCcsXG4gICAgICByZWNvcmRVcmw6IHNlbGYucmVjb3JkVXJsLFxuICAgICAgdXNlcl9uYW1lOiBzZWxmLnVzZXJJbmZvLnVzZXJfbmFtZSxcbiAgICAgIHVzZXJfZ2VuZGVyOiBzZWxmLnVzZXJJbmZvLnVzZXJfZ2VuZGVyLFxuICAgICAgdXNlcl9vcGVuaWQ6IHNlbGYudXNlckluZm8udXNlcl9vcGVuaWQsXG4gICAgICBjYXJkX3RpbWU6IGNhcmRfdGltZSxcbiAgICAgIGNhcmRfY29udGVudDogc2VsZi5tc2csXG4gICAgICBjYXJkX25hbWU6IHNlbGYuc2hhcmUudGl0bGVcbiAgICB9O1xuXG4gICAgcHJvZHVjdFxuICAgICAgLnNldChhcHBsZSlcbiAgICAgIC5zYXZlKClcbiAgICAgIC50aGVuKFxuICAgICAgICByZXMgPT4ge1xuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgICBjb25zb2xlLmxvZyhg5Yib5bu66KGo5oiQ5YqfYCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgLy8gZXJyXG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICAvLyDojrflj5blvZPliY3ml7bpl7TmiLNcbiAgZ2V0VGltZU5vdygpIHtcbiAgICBjb25zb2xlLmxvZyhg6I635Y+W5b2T5YmN5pe26Ze05oizYCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCB0aW1lQ2hlY2tOb3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCB0aW1lTm93ID0gdGltZUNoZWNrTm93LmdldFRpbWUoKTtcbiAgICBzZWxmLnRpbWVOb3cgPSB0aW1lTm93O1xuICAgIHNlbGYuJGFwcGx5KCk7XG4gIH1cblxuICAvLyDorr7nva7mlLbkv6HlgJLorqHml7bpmZDliLZcbiAgY291bnRkb3duKG9wdGlvbnMpIHtcbiAgICBjb25zb2xlLmxvZyhg6K6+5a6a5YCS6K6h5pe25pS25L+h6ZmQ5Yi2YCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8g6I635Y+W5b2T5YmN5pe26Ze0XG4gICAgbGV0IHRpbWVDaGVja05vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRpbWVOb3cgPSB0aW1lQ2hlY2tOb3cuZ2V0VGltZSgpO1xuXG4gICAgLy8g5aaC5p6c5pyJ6K6+5a6a5pe26Ze055qE5pWw5o2uXG4gICAgaWYgKG9wdGlvbnMudGltZU5vdykge1xuICAgICAgLy8g5qC85byP5YyW5pe26Ze05oizXG4gICAgICBsZXQgbm93VGltZSA9IHBhcnNlSW50KG9wdGlvbnMudGltZU5vdyk7XG4gICAgICBpZiAob3B0aW9ucy50aW1lQ2hlY2tWYWwgPT0gJ3VubGltaXRlZCcpIHtcbiAgICAgICAgdGltZU5vdyA9IDE7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICczMG1pbicpIHtcbiAgICAgICAgbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogNjAgKiAzMDtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50aW1lQ2hlY2tWYWwgPT0gJzNob3VyJykge1xuICAgICAgICBub3dUaW1lID0gbm93VGltZSArIDEwMDAgKiA2MCAqIDYwICogMztcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50aW1lQ2hlY2tWYWwgPT0gJzNkYXknKSB7XG4gICAgICAgIG5vd1RpbWUgPSBub3dUaW1lICsgMTAwMCAqIDYwICogNjAgKiAyNCAqIDM7XG4gICAgICB9XG4gICAgICAvLyDlpoLmnpzkv6Hku7blnKjmnInmlYjmnJ/lhoVcbiAgICAgIGlmIChub3dUaW1lID4gdGltZU5vdykge1xuICAgICAgICAvLyDorr7nva7og4zmma/pn7PkuZBcbiAgICAgICAgc2VsZi5zZXRCZ011c2ljKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlpoLmnpzkv6Hku7bkuI3lnKjmnInmlYjmnJ/lhoXvvIzlsLHlvLnlh7rov4fmnJ/mj5DnpLrvvIzlubbpmpDol4/kv6Hku7blhoXlrrlcbiAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgdXJsOiBgJHtzZWxmLm5vRGF0YVVybH1gXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDorr7nva7og4zmma/pn7PkuZBcbiAgICAgIHNlbGYuc2V0QmdNdXNpYygpO1xuICAgIH1cblxuICAgIHNlbGYuJGFwcGx5KCk7XG4gIH1cblxuICAvLyDlpITnkIbkvKDpgJLov4fmnaXnmoTkv6Hmga9cbiAgUmVnTXNnKG9wdGlvbnMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyDlpoLmnpzmnInnlZnoqIDlsLHlkIzmraXnlZnoqIDvvIzmsqHmnInlsLHorr7nva7pu5jorqTnlZnoqIBcbiAgICBpZiAob3B0aW9ucy5tc2cpIHtcbiAgICAgIHNlbGYubXNnID0gb3B0aW9ucy5tc2c7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOm7mOiupOeVmeiogFxuICAgICAgc2VsZi5tc2cgPSBzZWxmLmRlZmF1bHRNc2c7XG4gICAgfVxuXG4gICAgbGV0IG1zZyA9IHNlbGYubXNnO1xuICAgIGxldCB0ZXN0QXJyID0gW107XG4gICAgLy8g6YGH5Yiw5Lul5LiL56ym5Y+356uL5Y2z5oiq5Y+W5YaF5a655YiG5q61XG4gICAgbGV0IHJlZyA9IC9b77yMfCx8LnzjgIJ844CBfO+8n3zvvJt8O3wvXS9nO1xuICAgIGxldCBpbmRleCA9IGBgO1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgd2hpbGUgKChpbmRleCA9IHJlZy5leGVjKG1zZykgIT0gbnVsbCkpIHtcbiAgICAgIC8vIOaIquWPluS4pOS4quespuWQiOS5i+mXtOeahOaWh+Wtl++8jOWIhuauteaUvuWFpeaVsOe7hFxuICAgICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIHJlZy5sYXN0SW5kZXgpKTtcbiAgICAgIC8vIOajgOa1i+W5tuaUueWPmOW9k+WJjeespuWPt+e0ouW8lVxuICAgICAgc3RhcnQgPSByZWcubGFzdEluZGV4O1xuICAgIH1cbiAgICAvLyDojrflj5bmnIDlkI7kuIDmrrXmloflrZdcbiAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgbXNnLmxlbmd0aCkpO1xuICAgIHNlbGYudGV4dCA9IHRlc3RBcnI7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgfVxuXG4gIC8vIOiuvue9ruiDjOaZr+mfs+S5kFxuICBzZXRCZ011c2ljKCkge1xuICAgIGNvbnNvbGUubG9nKGDorr7nva7og4zmma/pn7PkuZBgKTtcbiAgICBsZXQgc2VsZj10aGlzO1xuICAgIC8vIOiuvue9ruiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci50aXRsZSA9IHNlbGYuYmdNdXNpY0RhdGEudGl0bGU7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5lcG5hbWUgPSBzZWxmLmJnTXVzaWNEYXRhLmVwbmFtZTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNpbmdlciA9IHNlbGYuYmdNdXNpY0RhdGEuc2luZ2VyO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuY292ZXJJbWdVcmwgPSBzZWxmLmJnTXVzaWNEYXRhLmNvdmVySW1nVXJsO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuc3JjID0gc2VsZi5iZ011c2ljRGF0YS5zcmM7XG4gIH1cblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIC8vIOaJk+WNsOW9k+WJjemhtemdouWPguaVsFxuICAgIGNvbnNvbGUubG9nKGDmiZPljbDlvZPliY3pobXpnaLlj4LmlbBgLCBvcHRpb25zKTtcblxuICAgIC8vIOiOt+WPluWPguaVsFxuICAgIHNlbGYucmVjb3JkVXJsID0gb3B0aW9ucy5yZWNvcmRVcmw7XG4gICAgc2VsZi50aW1lQ2hlY2tWYWwgPSBvcHRpb25zLnRpbWVDaGVja1ZhbDtcblxuICAgIC8vIOWAkuiuoeaXtumZkOWItlxuICAgIHNlbGYuY291bnRkb3duKG9wdGlvbnMpO1xuXG4gICAgLy8g5qC85byP5YyW55WZ6KiA5pWw5o2uXG4gICAgc2VsZi5SZWdNc2cob3B0aW9ucyk7XG5cbiAgICAvLyDohI/mo4Dmn6XmlbDmja5cbiAgICBzZWxmLiRhcHBseSgpO1xuXG4gICAgLy/mmL7npLrovazlj5FcbiAgICB3eC5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8g6I635Y+W5omL5py65L+h5oGvXG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi53aW5kb3dIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8g5b2T6aG16Z2i5pi+56S655qE5pe25YCZXG4gIG9uU2hvdygpIHtcbiAgICBjb25zb2xlLmxvZygnc2hvdycpO1xuICAgIC8vIOe7p+e7reaSreaUvuiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wbGF5KCk7XG4gIH1cbiAgb25IaWRlKCkge1xuICAgIGNvbnNvbGUubG9nKCdoaWRkZW4nKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgfVxuXG4gIC8vIOW9k+mhtemdouWIh+aNou+8iOmakOiXj++8ieeahOaXtuWAmVxuICBvblVubG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygndW5sb2FkJyk7XG4gICAgLy8g5pqC5YGc6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gIH1cbiAgLy8g6K6+572u5YiG5Lqr5Y2h54mHXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIC8vIOiOt+WPluW9k+WJjeaXtumXtOaIs1xuICAgIHNlbGYuZ2V0VGltZU5vdygpO1xuXG4gICAgLy8gIOWIpOaWreaYr+WQpuaYr+eCueWHu+aMiemSrui9rOWPkVxuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldCk7XG4gICAgfVxuICAgIC8vIOWNoeeJh+WGheWuuVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogc2VsZi5zaGFyZS50aXRsZSxcbiAgICAgIHBhdGg6IGAke3NlbGYuc2hhcmUucGF0aH0/bXNnPSR7c2VsZi5tc2d9JnJlY29yZFVybD0ke1xuICAgICAgICBzZWxmLnJlY29yZFVybFxuICAgICAgfSZ0aW1lQ2hlY2tWYWw9JHtzZWxmLnRpbWVDaGVja1ZhbH0mdGltZU5vdz0ke3NlbGYudGltZU5vd31gLFxuICAgICAgLy8g5bCB6Z2i5Zu+XG4gICAgICBpbWFnZVVybDogc2VsZi5zaGFyZS5jb3ZlckltYWdlVXJsLFxuXG4gICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgICAgc2VsZi5nZXRVc2VySW5mbygpO1xuXG4gICAgICAgIC8vIOiHquWumuS5ieS6i+S7tuS4iuaKpVxuICAgICAgICBzZWxmLnJlcG9ydCgpO1xuXG4gICAgICAgIC8vIOWIhuS6q+aIkOWKn+mCruS7tumAmuefpVxuICAgICAgICBzZWxmLnNoYXJlRW1haWxOb3RpY2UoKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICAgIGNvbnNvbGUubG9nKGDovazlj5HlpLHotKVgKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=