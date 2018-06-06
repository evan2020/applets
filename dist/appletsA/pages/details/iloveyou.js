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
        bgImageUrl: 'https://om83cysj8.qnssl.com/123jjdln%20%28153%29_Fotor.jpg',
        // 音频图标（播放录音）
        recordIconUrl: 'https://om83cysj8.qnssl.com/%E5%BD%95%E9%9F%B3%E6%9C%BA%20%281%29.png',
        // 音乐图标
        musicIconUrl: 'https://om83cysj8.qnssl.com/Note_de_musique_music_256px_525366_easyicon.net.png'
      },
      // 转发数据
      share: {
        // 转发标题
        title: '\u60C5\u4EBA\u8282\u5FEB\u4E50',
        // 转发打开路径
        path: '/appletsA/pages/details/iloveyou',
        // 封面图
        coverImageUrl: 'https://om83cysj8.qnssl.com/71244679da9054cc53ee98bb54a872b62.jpg'
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
      defaultMsg: '\u4F60\u5FAE\u7B11\u5730\u770B\u7740\u6211\uFF0C\u4E0D\u8BF4\u4E00\u53E5\u8BDD\uFF0C\u800C\u6211\u77E5\u9053\uFF0C\u4E3A\u4E86\u8FD9\u4E2A\uFF0C\u6211\u5DF2\u7ECF\u7B49\u4E86\u5F88\u4E45\u4E86',
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/iloveyou'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlsb3ZleW91LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiZGF0YVVybCIsImJnSW1hZ2VVcmwiLCJyZWNvcmRJY29uVXJsIiwibXVzaWNJY29uVXJsIiwic2hhcmUiLCJ0aXRsZSIsInBhdGgiLCJjb3ZlckltYWdlVXJsIiwidXNlckluZm8iLCJ1c2VyX25hbWUiLCJ1c2VyX2dlbmRlciIsInVzZXJfb3BlbmlkIiwiYmdNdXNpY0RhdGEiLCJlcG5hbWUiLCJzaW5nZXIiLCJjb3ZlckltZ1VybCIsInNyYyIsIm1zZyIsInRleHQiLCJyZWNvcmRVcmwiLCJtdXNpY1N0YXRlIiwid2luZG93SGVpZ2h0IiwidGltZUNoZWNrVmFsIiwidGltZU5vdyIsImRlZmF1bHRNc2ciLCJub0RhdGFVcmwiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZEF1ZGlvTWFuYWdlciIsInd4IiwiZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlciIsInBsYXkiLCJwYXVzZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsInRvZ2dsZU11c2ljIiwic2VsZiIsIiRhcHBseSIsInJlY29yZFBsYXkiLCJpbm5lckF1ZGlvQ29udGV4dCIsImNyZWF0ZUlubmVyQXVkaW9Db250ZXh0IiwiYXV0b3BsYXkiLCJvblBsYXkiLCJvbkVycm9yIiwicmVzIiwiZXJyTXNnIiwiZXJyQ29kZSIsImV2ZW50cyIsInVzZXJpbmZvIiwiQmFhUyIsInN0b3JhZ2UiLCJnZXQiLCJuaWNrTmFtZSIsIm9wZW5pZCIsImdlbmRlciIsImNhcmRfdGltZSIsIkRhdGUiLCJyZXBvcnRBbmFseXRpY3MiLCJjYXJkX25hbWUiLCJ0YWJsZUlEIiwiUHJvZHVjdCIsIlRhYmxlT2JqZWN0IiwicHJvZHVjdCIsImNyZWF0ZSIsImFwcGxlIiwic2VuZF9jYXJkIiwiY2FyZF9jb250ZW50Iiwic2V0Iiwic2F2ZSIsInRoZW4iLCJ0aW1lQ2hlY2tOb3ciLCJnZXRUaW1lIiwib3B0aW9ucyIsIm5vd1RpbWUiLCJwYXJzZUludCIsInNldEJnTXVzaWMiLCJyZWRpcmVjdFRvIiwidXJsIiwidGVzdEFyciIsInJlZyIsImluZGV4Iiwic3RhcnQiLCJleGVjIiwicHVzaCIsInN1YnN0cmluZyIsImxhc3RJbmRleCIsImxlbmd0aCIsImNvdW50ZG93biIsIlJlZ01zZyIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsImdldFRpbWVOb3ciLCJmcm9tIiwidGFyZ2V0IiwiaW1hZ2VVcmwiLCJnZXRVc2VySW5mbyIsInJlcG9ydCIsInNoYXJlRW1haWxOb3RpY2UiLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0w7QUFDQUMsZUFBUztBQUNQO0FBQ0FDLGdGQUZPO0FBR1A7QUFDQUMsOEZBSk87QUFLUDtBQUNBQztBQU5PLE9BRko7QUFVTDtBQUNBQyxhQUFPO0FBQ0w7QUFDQUMsK0NBRks7QUFHTDtBQUNBQyxnREFKSztBQUtMO0FBQ0FDLHVCQUFlO0FBTlYsT0FYRjtBQW1CTDtBQUNBQyxnQkFBVTtBQUNSO0FBQ0FDLHFCQUZRO0FBR1I7QUFDQUMsdUJBSlE7QUFLUjtBQUNBQztBQU5RLE9BcEJMO0FBNEJMO0FBQ0FDLG1CQUFhO0FBQ1g7QUFDQUMsa0JBRlc7QUFHWDtBQUNBUix5Q0FKVztBQUtYO0FBQ0FTLDhCQU5XO0FBT1g7QUFDQUMsaUZBUlc7QUFTWDtBQUNBQztBQVZXLE9BN0JSO0FBeUNMQyxhQXpDSyxFQXlDSTtBQUNUQyxjQTFDSyxFQTBDSztBQUNWQyxtQkEzQ0ssRUEyQ1U7QUFDZkMsMkJBNUNLLEVBNENrQjtBQUN2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STtBQW1CTEMsY0FBTSxjQUFTeEQsR0FBVCxFQUFjO0FBQ2xCO0FBQ0FsQixrQkFBUUMsR0FBUjtBQUNEO0FBdEJJLE9BQVA7QUF3QkQ7Ozs7RUFqV2dDLGVBQUswRSxJOztrQkFBbkI3RyxLIiwiZmlsZSI6Imlsb3ZleW91LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+err+WNiCdcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgLy8g5Zu+54mHVVJs5pWw5o2uXG4gICAgZGF0YVVybDoge1xuICAgICAgLy8g6IOM5pmv5Zu+54mHXG4gICAgICBiZ0ltYWdlVXJsOiBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzEyM2pqZGxuJTIwJTI4MTUzJTI5X0ZvdG9yLmpwZ2AsXG4gICAgICAvLyDpn7PpopHlm77moIfvvIjmkq3mlL7lvZXpn7PvvIlcbiAgICAgIHJlY29yZEljb25Vcmw6IGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vJUU1JUJEJTk1JUU5JTlGJUIzJUU2JTlDJUJBJTIwJTI4MSUyOS5wbmdgLFxuICAgICAgLy8g6Z+z5LmQ5Zu+5qCHXG4gICAgICBtdXNpY0ljb25Vcmw6IGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vTm90ZV9kZV9tdXNpcXVlX211c2ljXzI1NnB4XzUyNTM2Nl9lYXN5aWNvbi5uZXQucG5nYFxuICAgIH0sXG4gICAgLy8g6L2s5Y+R5pWw5o2uXG4gICAgc2hhcmU6IHtcbiAgICAgIC8vIOi9rOWPkeagh+mimFxuICAgICAgdGl0bGU6IGDmg4XkurroioLlv6vkuZBgLFxuICAgICAgLy8g6L2s5Y+R5omT5byA6Lev5b6EXG4gICAgICBwYXRoOiBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvaWxvdmV5b3VgLFxuICAgICAgLy8g5bCB6Z2i5Zu+XG4gICAgICBjb3ZlckltYWdlVXJsOiAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzcxMjQ0Njc5ZGE5MDU0Y2M1M2VlOThiYjU0YTg3MmI2Mi5qcGcnXG4gICAgfSxcbiAgICAvLyDnlKjmiLfmlbDmja5cbiAgICB1c2VySW5mbzoge1xuICAgICAgLy8g55So5oi35ZCN56ewXG4gICAgICB1c2VyX25hbWU6IGBgLFxuICAgICAgLy8g55So5oi35oCn5YirXG4gICAgICB1c2VyX2dlbmRlcjogYGAsXG4gICAgICAvLyDnlKjmiLdvcGVuaWRcbiAgICAgIHVzZXJfb3BlbmlkOiBgYFxuICAgIH0sXG4gICAgLy8g6IOM5pmv6Z+z5LmQ5pWw5o2uXG4gICAgYmdNdXNpY0RhdGE6IHtcbiAgICAgIC8vIOS4k+i+keWQjVxuICAgICAgZXBuYW1lOiBgYCxcbiAgICAgIC8vIOmfs+S5kOWQjVxuICAgICAgdGl0bGU6IGDlsLHmmK/niLHkvaBgLFxuICAgICAgLy8g5q2M5omLXG4gICAgICBzaW5nZXI6IGDpmbblloZgLFxuICAgICAgLy8g5bCB6Z2i5Zu+XG4gICAgICBjb3ZlckltZ1VybDogYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8xMjNqamRsbiUyMCUyODE1MyUyOV9Gb3Rvci5qcGdgLFxuICAgICAgLy8g5q2M5puy5Zyw5Z2AXG4gICAgICBzcmM6IGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vNTUyLm1wM2BcbiAgICB9LFxuICAgIG1zZzogYGAsIC8v6L6T5YWl5qGG55qE5YaF5a65XG4gICAgdGV4dDogYGAsIC8v5qC85byP5YyW5LmL5ZCO6KaB5bGV56S655qE5YaF5a65XG4gICAgcmVjb3JkVXJsOiBgYCwgLy/lvZXpn7PkupHmlofku7blnLDlnYBcbiAgICBtdXNpY1N0YXRlOiBgcnVubmluZ2AsIC8v6Z+z5LmQ5Zu+54mH5Yqo55S75piv5ZCm5pqC5YGcXG4gICAgd2luZG93SGVpZ2h0OiAnMTAwJScsIC8v5omL5py65bGP5bmV6auY5bqmXG4gICAgdGltZUNoZWNrVmFsOiAndW5saW1pdGVkJywgLy/kv6Hku7bmnInmlYjmnJ9cbiAgICB0aW1lTm93OiBgYCwgLy/ovazlj5HnmoTml7bpl7TmiLNcbiAgICBkZWZhdWx0TXNnOiBg5L2g5b6u56yR5Zyw55yL552A5oiR77yM5LiN6K+05LiA5Y+l6K+d77yM6ICM5oiR55+l6YGT77yM5Li65LqG6L+Z5Liq77yM5oiR5bey57uP562J5LqG5b6I5LmF5LqGYCxcbiAgICBub0RhdGFVcmw6YC9hcHBsZXRzQi9wYWdlcy9ub2RhdGEvbm9kYXRhYCwvL+aUtuS/oemZkOWItuaPkOekuumhtemdolxuICB9O1xuXG4gIHdhdGNoID0ge1xuICAgIC8vICDmmoLlgZwv5pKt5pS+6Z+z5LmQXG4gICAgbXVzaWNTdGF0ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBtdXNpY1N0YXRlIHZhbHVlOiAke29sZFZhbHVlfSAtPiAke25ld1ZhbHVlfWApO1xuICAgICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICAgIGlmIChuZXdWYWx1ZSA9PSBgcnVubmluZ2ApIHtcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDliIfmjaLpn7PkuZDlm77moIfml4vovaxcbiAgICB0b2dnbGVNdXNpYygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKGB0b2dnbGVgKTtcbiAgICAgIGlmIChzZWxmLm11c2ljU3RhdGUgPT0gJ3J1bm5pbmcnKSB7XG4gICAgICAgIHNlbGYubXVzaWNTdGF0ZSA9IGBwYXVzZWRgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5tdXNpY1N0YXRlID0gYHJ1bm5pbmdgO1xuICAgICAgfVxuICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICB9LFxuICAgIC8vIOaSreaUvuW9lemfs1xuICAgIHJlY29yZFBsYXkoKSB7XG4gICAgICBjb25zb2xlLmxvZyhg5pKt5pS+5b2V6Z+zYCk7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGNvbnN0IGlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHNlbGYucmVjb3JkVXJsO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25QbGF5KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ+W8gOWni+aSreaUvicpO1xuICAgICAgfSk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyQ29kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGNvbnNvbGUubG9nKGDojrflj5bnlKjmiLfkv6Hmga9gKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgLy8g6I635Y+W55So5oi35a2Y5YKo55qE55So5oi35L+h5oGvXG4gICAgbGV0IHVzZXJpbmZvID0gd3guQmFhUy5zdG9yYWdlLmdldChgdXNlcmluZm9gKTtcbiAgICAvLyDorr7nva7lpLTlg4/lkozlkI3np7BcbiAgICBzZWxmLnVzZXJJbmZvLnVzZXJfbmFtZSA9IHVzZXJpbmZvLm5pY2tOYW1lIHx8IGDmnKrnmbvlvZXmuLjlrqJgO1xuICAgIHNlbGYudXNlckluZm8udXNlcl9vcGVuaWQgPSB1c2VyaW5mby5vcGVuaWQgfHwgYOaXoG9wZW5pZGA7XG4gICAgc2VsZi51c2VySW5mby51c2VyX2dlbmRlciA9IHVzZXJpbmZvLmdlbmRlciB8fCBg5pegYDtcbiAgfVxuXG4gIC8vIOiHquWumuS5ieaVsOaNruS4iuaKpVxuICByZXBvcnQoKSB7XG4gICAgY29uc29sZS5sb2coYOiHquWumuS5ieaVsOaNruS4iuaKpWApO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgY2FyZF90aW1lID0gbmV3IERhdGUoKTtcbiAgICAvLyDoh6rlrprkuYnkuovku7bkuIrmiqXvvIjliIbkuqvkuovku7bvvIlcbiAgICB3eC5yZXBvcnRBbmFseXRpY3MoJ3NoYXJlX2NhcmQnLCB7XG4gICAgICBjYXJkX25hbWU6IHNlbGYuc2hhcmUudGl0bGUsXG4gICAgICB1c2VyX25hbWU6IHNlbGYudXNlckluZm8udXNlcl9uYW1lLFxuICAgICAgY2FyZF90aW1lOiBjYXJkX3RpbWUsXG4gICAgICB1c2VyX29wZW5pZDogc2VsZi51c2VySW5mby51c2VyX29wZW5pZCxcbiAgICAgIHVzZXJfZ2VuZGVyOiBzZWxmLnVzZXJJbmZvLnVzZXJfZ2VuZGVyXG4gICAgfSk7XG4gIH1cblxuICAvLyDliIbkuqvmiJDlip/pgq7ku7bpgJrnn6VcbiAgc2hhcmVFbWFpbE5vdGljZSgpIHtcbiAgICBjb25zb2xlLmxvZyhg5YiG5Lqr5oiQ5Yqf6YKu5Lu26YCa55+lYCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8g6I635Y+W5b2T5YmN5pe26Ze0XG4gICAgbGV0IGNhcmRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAvLyDlkJEgdGFibGVJRCDkuLogMzkwMDYg55qE5pWw5o2u6KGo5o+S5YWl5LiA5p2h6K6w5b2VXG4gICAgbGV0IHRhYmxlSUQgPSAzOTAwNjtcbiAgICBsZXQgUHJvZHVjdCA9IG5ldyB3eC5CYWFTLlRhYmxlT2JqZWN0KHRhYmxlSUQpO1xuICAgIGxldCBwcm9kdWN0ID0gUHJvZHVjdC5jcmVhdGUoKTtcblxuICAgIC8vIOiuvue9ruaVsOaNrlxuICAgIGxldCBhcHBsZSA9IHtcbiAgICAgIHNlbmRfY2FyZDogJ0VtYWlsJyxcbiAgICAgIHJlY29yZFVybDogc2VsZi5yZWNvcmRVcmwsXG4gICAgICB1c2VyX25hbWU6IHNlbGYudXNlckluZm8udXNlcl9uYW1lLFxuICAgICAgdXNlcl9nZW5kZXI6IHNlbGYudXNlckluZm8udXNlcl9nZW5kZXIsXG4gICAgICB1c2VyX29wZW5pZDogc2VsZi51c2VySW5mby51c2VyX29wZW5pZCxcbiAgICAgIGNhcmRfdGltZTogY2FyZF90aW1lLFxuICAgICAgY2FyZF9jb250ZW50OiBzZWxmLm1zZyxcbiAgICAgIGNhcmRfbmFtZTogc2VsZi5zaGFyZS50aXRsZVxuICAgIH07XG5cbiAgICBwcm9kdWN0XG4gICAgICAuc2V0KGFwcGxlKVxuICAgICAgLnNhdmUoKVxuICAgICAgLnRoZW4oXG4gICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICAgIGNvbnNvbGUubG9nKGDliJvlu7rooajmiJDlip9gKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAvLyBlcnJcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIOiOt+WPluW9k+WJjeaXtumXtOaIs1xuICBnZXRUaW1lTm93KCkge1xuICAgIGNvbnNvbGUubG9nKGDojrflj5blvZPliY3ml7bpl7TmiLNgKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHRpbWVDaGVja05vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRpbWVOb3cgPSB0aW1lQ2hlY2tOb3cuZ2V0VGltZSgpO1xuICAgIHNlbGYudGltZU5vdyA9IHRpbWVOb3c7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgfVxuXG4gIC8vIOiuvue9ruaUtuS/oeWAkuiuoeaXtumZkOWItlxuICBjb3VudGRvd24ob3B0aW9ucykge1xuICAgIGNvbnNvbGUubG9nKGDorr7lrprlgJLorqHml7bmlLbkv6HpmZDliLZgKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyDojrflj5blvZPliY3ml7bpl7RcbiAgICBsZXQgdGltZUNoZWNrTm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdGltZU5vdyA9IHRpbWVDaGVja05vdy5nZXRUaW1lKCk7XG5cbiAgICAvLyDlpoLmnpzmnInorr7lrprml7bpl7TnmoTmlbDmja5cbiAgICBpZiAob3B0aW9ucy50aW1lTm93KSB7XG4gICAgICAvLyDmoLzlvI/ljJbml7bpl7TmiLNcbiAgICAgIGxldCBub3dUaW1lID0gcGFyc2VJbnQob3B0aW9ucy50aW1lTm93KTtcbiAgICAgIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAndW5saW1pdGVkJykge1xuICAgICAgICB0aW1lTm93ID0gMTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50aW1lQ2hlY2tWYWwgPT0gJzMwbWluJykge1xuICAgICAgICBub3dUaW1lID0gbm93VGltZSArIDEwMDAgKiA2MCAqIDMwO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAnM2hvdXInKSB7XG4gICAgICAgIG5vd1RpbWUgPSBub3dUaW1lICsgMTAwMCAqIDYwICogNjAgKiAzO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAnM2RheScpIHtcbiAgICAgICAgbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogNjAgKiA2MCAqIDI0ICogMztcbiAgICAgIH1cbiAgICAgIC8vIOWmguaenOS/oeS7tuWcqOacieaViOacn+WGhVxuICAgICAgaWYgKG5vd1RpbWUgPiB0aW1lTm93KSB7XG4gICAgICAgIC8vIOiuvue9ruiDjOaZr+mfs+S5kFxuICAgICAgICBzZWxmLnNldEJnTXVzaWMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWmguaenOS/oeS7tuS4jeWcqOacieaViOacn+WGhe+8jOWwseW8ueWHuui/h+acn+aPkOekuu+8jOW5tumakOiXj+S/oeS7tuWGheWuuVxuICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICB1cmw6IGAke3NlbGYubm9EYXRhVXJsfWBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOiuvue9ruiDjOaZr+mfs+S5kFxuICAgICAgc2VsZi5zZXRCZ011c2ljKCk7XG4gICAgfVxuXG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgfVxuXG4gIC8vIOWkhOeQhuS8oOmAkui/h+adpeeahOS/oeaBr1xuICBSZWdNc2cob3B0aW9ucykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIC8vIOWmguaenOacieeVmeiogOWwseWQjOatpeeVmeiogO+8jOayoeacieWwseiuvue9rum7mOiupOeVmeiogFxuICAgIGlmIChvcHRpb25zLm1zZykge1xuICAgICAgc2VsZi5tc2cgPSBvcHRpb25zLm1zZztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6buY6K6k55WZ6KiAXG4gICAgICBzZWxmLm1zZyA9IHNlbGYuZGVmYXVsdE1zZztcbiAgICB9XG5cbiAgICBsZXQgbXNnID0gc2VsZi5tc2c7XG4gICAgbGV0IHRlc3RBcnIgPSBbXTtcbiAgICAvLyDpgYfliLDku6XkuIvnrKblj7fnq4vljbPmiKrlj5blhoXlrrnliIbmrrVcbiAgICBsZXQgcmVnID0gL1vvvIx8LHwufOOAgnzjgIF877yffO+8m3w7fC9dL2c7XG4gICAgbGV0IGluZGV4ID0gYGA7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICB3aGlsZSAoKGluZGV4ID0gcmVnLmV4ZWMobXNnKSAhPSBudWxsKSkge1xuICAgICAgLy8g5oiq5Y+W5Lik5Liq56ym5ZCI5LmL6Ze055qE5paH5a2X77yM5YiG5q615pS+5YWl5pWw57uEXG4gICAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgcmVnLmxhc3RJbmRleCkpO1xuICAgICAgLy8g5qOA5rWL5bm25pS55Y+Y5b2T5YmN56ym5Y+357Si5byVXG4gICAgICBzdGFydCA9IHJlZy5sYXN0SW5kZXg7XG4gICAgfVxuICAgIC8vIOiOt+WPluacgOWQjuS4gOauteaWh+Wtl1xuICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCBtc2cubGVuZ3RoKSk7XG4gICAgc2VsZi50ZXh0ID0gdGVzdEFycjtcbiAgICBzZWxmLiRhcHBseSgpO1xuICB9XG5cbiAgLy8g6K6+572u6IOM5pmv6Z+z5LmQXG4gIHNldEJnTXVzaWMoKSB7XG4gICAgY29uc29sZS5sb2coYOiuvue9ruiDjOaZr+mfs+S5kGApO1xuICAgIGxldCBzZWxmPXRoaXM7XG4gICAgLy8g6K6+572u6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnRpdGxlID0gc2VsZi5iZ011c2ljRGF0YS50aXRsZTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmVwbmFtZSA9IHNlbGYuYmdNdXNpY0RhdGEuZXBuYW1lO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuc2luZ2VyID0gc2VsZi5iZ011c2ljRGF0YS5zaW5nZXI7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5jb3ZlckltZ1VybCA9IHNlbGYuYmdNdXNpY0RhdGEuY292ZXJJbWdVcmw7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zcmMgPSBzZWxmLmJnTXVzaWNEYXRhLnNyYztcbiAgfVxuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8g5omT5Y2w5b2T5YmN6aG16Z2i5Y+C5pWwXG4gICAgY29uc29sZS5sb2coYOaJk+WNsOW9k+WJjemhtemdouWPguaVsGAsIG9wdGlvbnMpO1xuXG4gICAgLy8g6I635Y+W5Y+C5pWwXG4gICAgc2VsZi5yZWNvcmRVcmwgPSBvcHRpb25zLnJlY29yZFVybDtcbiAgICBzZWxmLnRpbWVDaGVja1ZhbCA9IG9wdGlvbnMudGltZUNoZWNrVmFsO1xuXG4gICAgLy8g5YCS6K6h5pe26ZmQ5Yi2XG4gICAgc2VsZi5jb3VudGRvd24ob3B0aW9ucyk7XG5cbiAgICAvLyDmoLzlvI/ljJbnlZnoqIDmlbDmja5cbiAgICBzZWxmLlJlZ01zZyhvcHRpb25zKTtcblxuICAgIC8vIOiEj+ajgOafpeaVsOaNrlxuICAgIHNlbGYuJGFwcGx5KCk7XG5cbiAgICAvL+aYvuekuui9rOWPkVxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5bmiYvmnLrkv6Hmga9cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLndpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyDlvZPpobXpnaLmmL7npLrnmoTml7blgJlcbiAgb25TaG93KCkge1xuICAgIGNvbnNvbGUubG9nKCdzaG93Jyk7XG4gICAgLy8g57un57ut5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBsYXkoKTtcbiAgfVxuICBvbkhpZGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2hpZGRlbicpO1xuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG5cbiAgLy8g5b2T6aG16Z2i5YiH5o2i77yI6ZqQ6JeP77yJ55qE5pe25YCZXG4gIG9uVW5sb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCd1bmxvYWQnKTtcbiAgICAvLyDmmoLlgZzog4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgfVxuICAvLyDorr7nva7liIbkuqvljaHniYdcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8g6I635Y+W5b2T5YmN5pe26Ze05oizXG4gICAgc2VsZi5nZXRUaW1lTm93KCk7XG5cbiAgICAvLyAg5Yik5pat5piv5ZCm5piv54K55Ye75oyJ6ZKu6L2s5Y+RXG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KTtcbiAgICB9XG4gICAgLy8g5Y2h54mH5YaF5a65XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBzZWxmLnNoYXJlLnRpdGxlLFxuICAgICAgcGF0aDogYCR7c2VsZi5zaGFyZS5wYXRofT9tc2c9JHtzZWxmLm1zZ30mcmVjb3JkVXJsPSR7XG4gICAgICAgIHNlbGYucmVjb3JkVXJsXG4gICAgICB9JnRpbWVDaGVja1ZhbD0ke3NlbGYudGltZUNoZWNrVmFsfSZ0aW1lTm93PSR7c2VsZi50aW1lTm93fWAsXG4gICAgICAvLyDlsIHpnaLlm75cbiAgICAgIGltYWdlVXJsOiBzZWxmLnNoYXJlLmNvdmVySW1hZ2VVcmwsXG5cbiAgICAgIC8vIOi9rOWPkeaIkOWKn1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICBzZWxmLmdldFVzZXJJbmZvKCk7XG5cbiAgICAgICAgLy8g6Ieq5a6a5LmJ5LqL5Lu25LiK5oqlXG4gICAgICAgIHNlbGYucmVwb3J0KCk7XG5cbiAgICAgICAgLy8g5YiG5Lqr5oiQ5Yqf6YKu5Lu26YCa55+lXG4gICAgICAgIHNlbGYuc2hhcmVFbWFpbE5vdGljZSgpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HlpLHotKVcbiAgICAgICAgY29uc29sZS5sb2coYOi9rOWPkeWksei0pWApO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==