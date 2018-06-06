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
      navigationBarTitleText: '端午'
    }, _this.components = {}, _this.data = {
      // 图片URl数据
      dataUrl: {
        // 背景图片
        bgImageUrl: 'https://om83cysj8.qnssl.com/11_Fotor.jpg',
        // 音频图标（播放录音）
        recordIconUrl: 'https://om83cysj8.qnssl.com/%E5%BD%95%E9%9F%B3%E6%9C%BA%20%281%29.png',
        // 音乐图标
        musicIconUrl: 'https://om83cysj8.qnssl.com/Note_de_musique_music_256px_525366_easyicon.net.png'
      },
      // 转发数据
      share: {
        // 转发标题
        title: '\u5988\u5988',
        // 转发打开路径
        path: '/pages/details/details',
        // 封面图
        coverImageUrl: 'https://om83cysj8.qnssl.com/ChMkJ1bKxYWIckH4AAF86HwJVvYAALHXAP96qIAAX0A162.jpg'
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
        title: '\u542C\u5988\u5988\u7684\u8BDD',
        // 歌手
        singer: '\u5468\u6770\u4F26',
        // 封面图
        coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        // 歌曲地址
        src: 'https://om83cysj8.qnssl.com/%E5%90%AC%E5%A6%88%E5%A6%88%E7%9A%84%E8%AF%9D_%E9%93%83%E5%A3%B0%E4%B9%8B%E5%AE%B6cnwav.mp3'
      },
      msg: '', //输入框的内容
      text: '', //格式化之后要展示的内容
      recordUrl: '', //录音云文件地址
      musicState: 'running', //音乐图片动画是否暂停
      windowHeight: '100%', //手机屏幕高度
      timeCheckVal: 'unlimited', //信件有效期
      timeNow: '', //转发的时间戳
      defaultMsg: '\u7236\u6BCD\u5728\uFF0C\u4E0D\u8FDC\u6E38\uFF0C\u4E0D\u5728\u4F60\u4EEC\u8EAB\u8FB9\u7684\u65F6\u5019\uFF0C\u5E0C\u671B\u4F60\u4EEC\u80FD\u7167\u987E\u597D\u81EA\u5DF1\uFF0C\u65E0\u8BBA\u7E41\u5FD9\u52B3\u788C\uFF0C\u8FD8\u662F\u6E38\u73A9\u4F11\u95F2\uFF0C\u613F\u8EAB\u4F53\u5065\u5EB7\uFF0C\u613F\u5FC3\u60F3\u4E8B\u6210\uFF0C\u5988\u5988\uFF0C\u5728\u8FD9\u4E2A\u7279\u6B8A\u7684\u65E5\u5B50\uFF0C\u795D\u4F60\u8282\u65E5\u5FEB\u4E50',
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/details/details'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJkYXRhVXJsIiwiYmdJbWFnZVVybCIsInJlY29yZEljb25VcmwiLCJtdXNpY0ljb25VcmwiLCJzaGFyZSIsInRpdGxlIiwicGF0aCIsImNvdmVySW1hZ2VVcmwiLCJ1c2VySW5mbyIsInVzZXJfbmFtZSIsInVzZXJfZ2VuZGVyIiwidXNlcl9vcGVuaWQiLCJiZ011c2ljRGF0YSIsImVwbmFtZSIsInNpbmdlciIsImNvdmVySW1nVXJsIiwic3JjIiwibXNnIiwidGV4dCIsInJlY29yZFVybCIsIm11c2ljU3RhdGUiLCJ3aW5kb3dIZWlnaHQiLCJ0aW1lQ2hlY2tWYWwiLCJ0aW1lTm93IiwiZGVmYXVsdE1zZyIsIm5vRGF0YVVybCIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwid3giLCJnZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwicGxheSIsInBhdXNlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidG9nZ2xlTXVzaWMiLCJzZWxmIiwiJGFwcGx5IiwicmVjb3JkUGxheSIsImlubmVyQXVkaW9Db250ZXh0IiwiY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQiLCJhdXRvcGxheSIsIm9uUGxheSIsIm9uRXJyb3IiLCJyZXMiLCJlcnJNc2ciLCJlcnJDb2RlIiwiZXZlbnRzIiwidXNlcmluZm8iLCJCYWFTIiwic3RvcmFnZSIsImdldCIsIm5pY2tOYW1lIiwib3BlbmlkIiwiZ2VuZGVyIiwiY2FyZF90aW1lIiwiRGF0ZSIsInJlcG9ydEFuYWx5dGljcyIsImNhcmRfbmFtZSIsInRhYmxlSUQiLCJQcm9kdWN0IiwiVGFibGVPYmplY3QiLCJwcm9kdWN0IiwiY3JlYXRlIiwiYXBwbGUiLCJzZW5kX2NhcmQiLCJjYXJkX2NvbnRlbnQiLCJzZXQiLCJzYXZlIiwidGhlbiIsInRpbWVDaGVja05vdyIsImdldFRpbWUiLCJvcHRpb25zIiwibm93VGltZSIsInBhcnNlSW50Iiwic2V0QmdNdXNpYyIsInJlZGlyZWN0VG8iLCJ1cmwiLCJ0ZXN0QXJyIiwicmVnIiwiaW5kZXgiLCJzdGFydCIsImV4ZWMiLCJwdXNoIiwic3Vic3RyaW5nIiwibGFzdEluZGV4IiwibGVuZ3RoIiwiY291bnRkb3duIiwiUmVnTXNnIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwiZ2V0VGltZU5vdyIsImZyb20iLCJ0YXJnZXQiLCJpbWFnZVVybCIsImdldFVzZXJJbmZvIiwicmVwb3J0Iiwic2hhcmVFbWFpbE5vdGljZSIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTDtBQUNBQyxlQUFTO0FBQ1A7QUFDQUMsOERBRk87QUFHUDtBQUNBQyw4RkFKTztBQUtQO0FBQ0FDO0FBTk8sT0FGSjtBQVVMO0FBQ0FDLGFBQU87QUFDTDtBQUNBQyw2QkFGSztBQUdMO0FBQ0FDLHNDQUpLO0FBS0w7QUFDQUMsdUJBQWU7QUFOVixPQVhGO0FBbUJMO0FBQ0FDLGdCQUFVO0FBQ1I7QUFDQUMscUJBRlE7QUFHUjtBQUNBQyx1QkFKUTtBQUtSO0FBQ0FDO0FBTlEsT0FwQkw7QUE0Qkw7QUFDQUMsbUJBQWE7QUFDWDtBQUNBQyxrQkFGVztBQUdYO0FBQ0FSLCtDQUpXO0FBS1g7QUFDQVMsb0NBTlc7QUFPWDtBQUNBQywyR0FSVztBQVNYO0FBQ0FDO0FBVlcsT0E3QlI7QUF5Q0xDLGFBekNLLEVBeUNJO0FBQ1RDLGNBMUNLLEVBMENLO0FBQ1ZDLG1CQTNDSyxFQTJDVTtBQUNmQywyQkE1Q0ssRUE0Q2tCO0FBQ3ZC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O0FBbUJMQyxjQUFNLGNBQVN4RCxHQUFULEVBQWM7QUFDbEI7QUFDQWxCLGtCQUFRQyxHQUFSO0FBQ0Q7QUF0QkksT0FBUDtBQXdCRDs7OztFQWpXZ0MsZUFBSzBFLEk7O2tCQUFuQjdHLEsiLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnq6/ljYgnXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIC8vIOWbvueJh1VSbOaVsOaNrlxuICAgIGRhdGFVcmw6IHtcbiAgICAgIC8vIOiDjOaZr+WbvueJh1xuICAgICAgYmdJbWFnZVVybDogYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8xMV9Gb3Rvci5qcGdgLFxuICAgICAgLy8g6Z+z6aKR5Zu+5qCH77yI5pKt5pS+5b2V6Z+z77yJXG4gICAgICByZWNvcmRJY29uVXJsOiBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLyVFNSVCRCU5NSVFOSU5RiVCMyVFNiU5QyVCQSUyMCUyODElMjkucG5nYCxcbiAgICAgIC8vIOmfs+S5kOWbvuagh1xuICAgICAgbXVzaWNJY29uVXJsOiBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL05vdGVfZGVfbXVzaXF1ZV9tdXNpY18yNTZweF81MjUzNjZfZWFzeWljb24ubmV0LnBuZ2BcbiAgICB9LFxuICAgIC8vIOi9rOWPkeaVsOaNrlxuICAgIHNoYXJlOiB7XG4gICAgICAvLyDovazlj5HmoIfpophcbiAgICAgIHRpdGxlOiBg5aaI5aaIYCxcbiAgICAgIC8vIOi9rOWPkeaJk+W8gOi3r+W+hFxuICAgICAgcGF0aDogYC9wYWdlcy9kZXRhaWxzL2RldGFpbHNgLFxuICAgICAgLy8g5bCB6Z2i5Zu+XG4gICAgICBjb3ZlckltYWdlVXJsOiAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL0NoTWtKMWJLeFlXSWNrSDRBQUY4Nkh3SlZ2WUFBTEhYQVA5NnFJQUFYMEExNjIuanBnJ1xuICAgIH0sXG4gICAgLy8g55So5oi35pWw5o2uXG4gICAgdXNlckluZm86IHtcbiAgICAgIC8vIOeUqOaIt+WQjeensFxuICAgICAgdXNlcl9uYW1lOiBgYCxcbiAgICAgIC8vIOeUqOaIt+aAp+WIq1xuICAgICAgdXNlcl9nZW5kZXI6IGBgLFxuICAgICAgLy8g55So5oi3b3BlbmlkXG4gICAgICB1c2VyX29wZW5pZDogYGBcbiAgICB9LFxuICAgIC8vIOiDjOaZr+mfs+S5kOaVsOaNrlxuICAgIGJnTXVzaWNEYXRhOiB7XG4gICAgICAvLyDkuJPovpHlkI1cbiAgICAgIGVwbmFtZTogYGAsXG4gICAgICAvLyDpn7PkuZDlkI1cbiAgICAgIHRpdGxlOiBg5ZCs5aaI5aaI55qE6K+dYCxcbiAgICAgIC8vIOatjOaJi1xuICAgICAgc2luZ2VyOiBg5ZGo5p2w5LymYCxcbiAgICAgIC8vIOWwgemdouWbvlxuICAgICAgY292ZXJJbWdVcmw6IGBodHRwOi8veS5ndGltZy5jbi9tdXNpYy9waG90b19uZXcvVDAwMlIzMDB4MzAwTTAwMDAwM3JzS0Y0NEd5YVNrLmpwZz9tYXhfYWdlPTI1OTIwMDBgLFxuICAgICAgLy8g5q2M5puy5Zyw5Z2AXG4gICAgICBzcmM6IGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vJUU1JTkwJUFDJUU1JUE2JTg4JUU1JUE2JTg4JUU3JTlBJTg0JUU4JUFGJTlEXyVFOSU5MyU4MyVFNSVBMyVCMCVFNCVCOSU4QiVFNSVBRSVCNmNud2F2Lm1wM2BcbiAgICB9LFxuICAgIG1zZzogYGAsIC8v6L6T5YWl5qGG55qE5YaF5a65XG4gICAgdGV4dDogYGAsIC8v5qC85byP5YyW5LmL5ZCO6KaB5bGV56S655qE5YaF5a65XG4gICAgcmVjb3JkVXJsOiBgYCwgLy/lvZXpn7PkupHmlofku7blnLDlnYBcbiAgICBtdXNpY1N0YXRlOiBgcnVubmluZ2AsIC8v6Z+z5LmQ5Zu+54mH5Yqo55S75piv5ZCm5pqC5YGcXG4gICAgd2luZG93SGVpZ2h0OiAnMTAwJScsIC8v5omL5py65bGP5bmV6auY5bqmXG4gICAgdGltZUNoZWNrVmFsOiAndW5saW1pdGVkJywgLy/kv6Hku7bmnInmlYjmnJ9cbiAgICB0aW1lTm93OiBgYCwgLy/ovazlj5HnmoTml7bpl7TmiLNcbiAgICBkZWZhdWx0TXNnOiBg54i25q+N5Zyo77yM5LiN6L+c5ri477yM5LiN5Zyo5L2g5Lus6Lqr6L6555qE5pe25YCZ77yM5biM5pyb5L2g5Lus6IO954Wn6aG+5aW96Ieq5bex77yM5peg6K6657mB5b+Z5Yqz56KM77yM6L+Y5piv5ri4546p5LyR6Zey77yM5oS/6Lqr5L2T5YGl5bq377yM5oS/5b+D5oOz5LqL5oiQ77yM5aaI5aaI77yM5Zyo6L+Z5Liq54m55q6K55qE5pel5a2Q77yM56Wd5L2g6IqC5pel5b+r5LmQYCxcbiAgICBub0RhdGFVcmw6YC9hcHBsZXRzQi9wYWdlcy9ub2RhdGEvbm9kYXRhYCwvL+aUtuS/oemZkOWItuaPkOekuumhtemdolxuICB9O1xuXG4gIHdhdGNoID0ge1xuICAgIC8vICDmmoLlgZwv5pKt5pS+6Z+z5LmQXG4gICAgbXVzaWNTdGF0ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBtdXNpY1N0YXRlIHZhbHVlOiAke29sZFZhbHVlfSAtPiAke25ld1ZhbHVlfWApO1xuICAgICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICAgIGlmIChuZXdWYWx1ZSA9PSBgcnVubmluZ2ApIHtcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDliIfmjaLpn7PkuZDlm77moIfml4vovaxcbiAgICB0b2dnbGVNdXNpYygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKGB0b2dnbGVgKTtcbiAgICAgIGlmIChzZWxmLm11c2ljU3RhdGUgPT0gJ3J1bm5pbmcnKSB7XG4gICAgICAgIHNlbGYubXVzaWNTdGF0ZSA9IGBwYXVzZWRgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5tdXNpY1N0YXRlID0gYHJ1bm5pbmdgO1xuICAgICAgfVxuICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICB9LFxuICAgIC8vIOaSreaUvuW9lemfs1xuICAgIHJlY29yZFBsYXkoKSB7XG4gICAgICBjb25zb2xlLmxvZyhg5pKt5pS+5b2V6Z+zYCk7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGNvbnN0IGlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHNlbGYucmVjb3JkVXJsO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25QbGF5KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ+W8gOWni+aSreaUvicpO1xuICAgICAgfSk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyQ29kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGNvbnNvbGUubG9nKGDojrflj5bnlKjmiLfkv6Hmga9gKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgLy8g6I635Y+W55So5oi35a2Y5YKo55qE55So5oi35L+h5oGvXG4gICAgbGV0IHVzZXJpbmZvID0gd3guQmFhUy5zdG9yYWdlLmdldChgdXNlcmluZm9gKTtcbiAgICAvLyDorr7nva7lpLTlg4/lkozlkI3np7BcbiAgICBzZWxmLnVzZXJJbmZvLnVzZXJfbmFtZSA9IHVzZXJpbmZvLm5pY2tOYW1lIHx8IGDmnKrnmbvlvZXmuLjlrqJgO1xuICAgIHNlbGYudXNlckluZm8udXNlcl9vcGVuaWQgPSB1c2VyaW5mby5vcGVuaWQgfHwgYOaXoG9wZW5pZGA7XG4gICAgc2VsZi51c2VySW5mby51c2VyX2dlbmRlciA9IHVzZXJpbmZvLmdlbmRlciB8fCBg5pegYDtcbiAgfVxuXG4gIC8vIOiHquWumuS5ieaVsOaNruS4iuaKpVxuICByZXBvcnQoKSB7XG4gICAgY29uc29sZS5sb2coYOiHquWumuS5ieaVsOaNruS4iuaKpWApO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgY2FyZF90aW1lID0gbmV3IERhdGUoKTtcbiAgICAvLyDoh6rlrprkuYnkuovku7bkuIrmiqXvvIjliIbkuqvkuovku7bvvIlcbiAgICB3eC5yZXBvcnRBbmFseXRpY3MoJ3NoYXJlX2NhcmQnLCB7XG4gICAgICBjYXJkX25hbWU6IHNlbGYuc2hhcmUudGl0bGUsXG4gICAgICB1c2VyX25hbWU6IHNlbGYudXNlckluZm8udXNlcl9uYW1lLFxuICAgICAgY2FyZF90aW1lOiBjYXJkX3RpbWUsXG4gICAgICB1c2VyX29wZW5pZDogc2VsZi51c2VySW5mby51c2VyX29wZW5pZCxcbiAgICAgIHVzZXJfZ2VuZGVyOiBzZWxmLnVzZXJJbmZvLnVzZXJfZ2VuZGVyXG4gICAgfSk7XG4gIH1cblxuICAvLyDliIbkuqvmiJDlip/pgq7ku7bpgJrnn6VcbiAgc2hhcmVFbWFpbE5vdGljZSgpIHtcbiAgICBjb25zb2xlLmxvZyhg5YiG5Lqr5oiQ5Yqf6YKu5Lu26YCa55+lYCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8g6I635Y+W5b2T5YmN5pe26Ze0XG4gICAgbGV0IGNhcmRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAvLyDlkJEgdGFibGVJRCDkuLogMzkwMDYg55qE5pWw5o2u6KGo5o+S5YWl5LiA5p2h6K6w5b2VXG4gICAgbGV0IHRhYmxlSUQgPSAzOTAwNjtcbiAgICBsZXQgUHJvZHVjdCA9IG5ldyB3eC5CYWFTLlRhYmxlT2JqZWN0KHRhYmxlSUQpO1xuICAgIGxldCBwcm9kdWN0ID0gUHJvZHVjdC5jcmVhdGUoKTtcblxuICAgIC8vIOiuvue9ruaVsOaNrlxuICAgIGxldCBhcHBsZSA9IHtcbiAgICAgIHNlbmRfY2FyZDogJ0VtYWlsJyxcbiAgICAgIHJlY29yZFVybDogc2VsZi5yZWNvcmRVcmwsXG4gICAgICB1c2VyX25hbWU6IHNlbGYudXNlckluZm8udXNlcl9uYW1lLFxuICAgICAgdXNlcl9nZW5kZXI6IHNlbGYudXNlckluZm8udXNlcl9nZW5kZXIsXG4gICAgICB1c2VyX29wZW5pZDogc2VsZi51c2VySW5mby51c2VyX29wZW5pZCxcbiAgICAgIGNhcmRfdGltZTogY2FyZF90aW1lLFxuICAgICAgY2FyZF9jb250ZW50OiBzZWxmLm1zZyxcbiAgICAgIGNhcmRfbmFtZTogc2VsZi5zaGFyZS50aXRsZVxuICAgIH07XG5cbiAgICBwcm9kdWN0XG4gICAgICAuc2V0KGFwcGxlKVxuICAgICAgLnNhdmUoKVxuICAgICAgLnRoZW4oXG4gICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICAgIGNvbnNvbGUubG9nKGDliJvlu7rooajmiJDlip9gKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAvLyBlcnJcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIOiOt+WPluW9k+WJjeaXtumXtOaIs1xuICBnZXRUaW1lTm93KCkge1xuICAgIGNvbnNvbGUubG9nKGDojrflj5blvZPliY3ml7bpl7TmiLNgKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHRpbWVDaGVja05vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRpbWVOb3cgPSB0aW1lQ2hlY2tOb3cuZ2V0VGltZSgpO1xuICAgIHNlbGYudGltZU5vdyA9IHRpbWVOb3c7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgfVxuXG4gIC8vIOiuvue9ruaUtuS/oeWAkuiuoeaXtumZkOWItlxuICBjb3VudGRvd24ob3B0aW9ucykge1xuICAgIGNvbnNvbGUubG9nKGDorr7lrprlgJLorqHml7bmlLbkv6HpmZDliLZgKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyDojrflj5blvZPliY3ml7bpl7RcbiAgICBsZXQgdGltZUNoZWNrTm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdGltZU5vdyA9IHRpbWVDaGVja05vdy5nZXRUaW1lKCk7XG5cbiAgICAvLyDlpoLmnpzmnInorr7lrprml7bpl7TnmoTmlbDmja5cbiAgICBpZiAob3B0aW9ucy50aW1lTm93KSB7XG4gICAgICAvLyDmoLzlvI/ljJbml7bpl7TmiLNcbiAgICAgIGxldCBub3dUaW1lID0gcGFyc2VJbnQob3B0aW9ucy50aW1lTm93KTtcbiAgICAgIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAndW5saW1pdGVkJykge1xuICAgICAgICB0aW1lTm93ID0gMTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50aW1lQ2hlY2tWYWwgPT0gJzMwbWluJykge1xuICAgICAgICBub3dUaW1lID0gbm93VGltZSArIDEwMDAgKiA2MCAqIDMwO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAnM2hvdXInKSB7XG4gICAgICAgIG5vd1RpbWUgPSBub3dUaW1lICsgMTAwMCAqIDYwICogNjAgKiAzO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAnM2RheScpIHtcbiAgICAgICAgbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogNjAgKiA2MCAqIDI0ICogMztcbiAgICAgIH1cbiAgICAgIC8vIOWmguaenOS/oeS7tuWcqOacieaViOacn+WGhVxuICAgICAgaWYgKG5vd1RpbWUgPiB0aW1lTm93KSB7XG4gICAgICAgIC8vIOiuvue9ruiDjOaZr+mfs+S5kFxuICAgICAgICBzZWxmLnNldEJnTXVzaWMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWmguaenOS/oeS7tuS4jeWcqOacieaViOacn+WGhe+8jOWwseW8ueWHuui/h+acn+aPkOekuu+8jOW5tumakOiXj+S/oeS7tuWGheWuuVxuICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICB1cmw6IGAke3NlbGYubm9EYXRhVXJsfWBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOiuvue9ruiDjOaZr+mfs+S5kFxuICAgICAgc2VsZi5zZXRCZ011c2ljKCk7XG4gICAgfVxuXG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgfVxuXG4gIC8vIOWkhOeQhuS8oOmAkui/h+adpeeahOS/oeaBr1xuICBSZWdNc2cob3B0aW9ucykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIC8vIOWmguaenOacieeVmeiogOWwseWQjOatpeeVmeiogO+8jOayoeacieWwseiuvue9rum7mOiupOeVmeiogFxuICAgIGlmIChvcHRpb25zLm1zZykge1xuICAgICAgc2VsZi5tc2cgPSBvcHRpb25zLm1zZztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6buY6K6k55WZ6KiAXG4gICAgICBzZWxmLm1zZyA9IHNlbGYuZGVmYXVsdE1zZztcbiAgICB9XG5cbiAgICBsZXQgbXNnID0gc2VsZi5tc2c7XG4gICAgbGV0IHRlc3RBcnIgPSBbXTtcbiAgICAvLyDpgYfliLDku6XkuIvnrKblj7fnq4vljbPmiKrlj5blhoXlrrnliIbmrrVcbiAgICBsZXQgcmVnID0gL1vvvIx8LHwufOOAgnzjgIF877yffO+8m3w7fC9dL2c7XG4gICAgbGV0IGluZGV4ID0gYGA7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICB3aGlsZSAoKGluZGV4ID0gcmVnLmV4ZWMobXNnKSAhPSBudWxsKSkge1xuICAgICAgLy8g5oiq5Y+W5Lik5Liq56ym5ZCI5LmL6Ze055qE5paH5a2X77yM5YiG5q615pS+5YWl5pWw57uEXG4gICAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgcmVnLmxhc3RJbmRleCkpO1xuICAgICAgLy8g5qOA5rWL5bm25pS55Y+Y5b2T5YmN56ym5Y+357Si5byVXG4gICAgICBzdGFydCA9IHJlZy5sYXN0SW5kZXg7XG4gICAgfVxuICAgIC8vIOiOt+WPluacgOWQjuS4gOauteaWh+Wtl1xuICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCBtc2cubGVuZ3RoKSk7XG4gICAgc2VsZi50ZXh0ID0gdGVzdEFycjtcbiAgICBzZWxmLiRhcHBseSgpO1xuICB9XG5cbiAgLy8g6K6+572u6IOM5pmv6Z+z5LmQXG4gIHNldEJnTXVzaWMoKSB7XG4gICAgY29uc29sZS5sb2coYOiuvue9ruiDjOaZr+mfs+S5kGApO1xuICAgIGxldCBzZWxmPXRoaXM7XG4gICAgLy8g6K6+572u6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnRpdGxlID0gc2VsZi5iZ011c2ljRGF0YS50aXRsZTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmVwbmFtZSA9IHNlbGYuYmdNdXNpY0RhdGEuZXBuYW1lO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuc2luZ2VyID0gc2VsZi5iZ011c2ljRGF0YS5zaW5nZXI7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5jb3ZlckltZ1VybCA9IHNlbGYuYmdNdXNpY0RhdGEuY292ZXJJbWdVcmw7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zcmMgPSBzZWxmLmJnTXVzaWNEYXRhLnNyYztcbiAgfVxuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8g5omT5Y2w5b2T5YmN6aG16Z2i5Y+C5pWwXG4gICAgY29uc29sZS5sb2coYOaJk+WNsOW9k+WJjemhtemdouWPguaVsGAsIG9wdGlvbnMpO1xuXG4gICAgLy8g6I635Y+W5Y+C5pWwXG4gICAgc2VsZi5yZWNvcmRVcmwgPSBvcHRpb25zLnJlY29yZFVybDtcbiAgICBzZWxmLnRpbWVDaGVja1ZhbCA9IG9wdGlvbnMudGltZUNoZWNrVmFsO1xuXG4gICAgLy8g5YCS6K6h5pe26ZmQ5Yi2XG4gICAgc2VsZi5jb3VudGRvd24ob3B0aW9ucyk7XG5cbiAgICAvLyDmoLzlvI/ljJbnlZnoqIDmlbDmja5cbiAgICBzZWxmLlJlZ01zZyhvcHRpb25zKTtcblxuICAgIC8vIOiEj+ajgOafpeaVsOaNrlxuICAgIHNlbGYuJGFwcGx5KCk7XG5cbiAgICAvL+aYvuekuui9rOWPkVxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5bmiYvmnLrkv6Hmga9cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLndpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyDlvZPpobXpnaLmmL7npLrnmoTml7blgJlcbiAgb25TaG93KCkge1xuICAgIGNvbnNvbGUubG9nKCdzaG93Jyk7XG4gICAgLy8g57un57ut5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBsYXkoKTtcbiAgfVxuICBvbkhpZGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2hpZGRlbicpO1xuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG5cbiAgLy8g5b2T6aG16Z2i5YiH5o2i77yI6ZqQ6JeP77yJ55qE5pe25YCZXG4gIG9uVW5sb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCd1bmxvYWQnKTtcbiAgICAvLyDmmoLlgZzog4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgfVxuICAvLyDorr7nva7liIbkuqvljaHniYdcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8g6I635Y+W5b2T5YmN5pe26Ze05oizXG4gICAgc2VsZi5nZXRUaW1lTm93KCk7XG5cbiAgICAvLyAg5Yik5pat5piv5ZCm5piv54K55Ye75oyJ6ZKu6L2s5Y+RXG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KTtcbiAgICB9XG4gICAgLy8g5Y2h54mH5YaF5a65XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBzZWxmLnNoYXJlLnRpdGxlLFxuICAgICAgcGF0aDogYCR7c2VsZi5zaGFyZS5wYXRofT9tc2c9JHtzZWxmLm1zZ30mcmVjb3JkVXJsPSR7XG4gICAgICAgIHNlbGYucmVjb3JkVXJsXG4gICAgICB9JnRpbWVDaGVja1ZhbD0ke3NlbGYudGltZUNoZWNrVmFsfSZ0aW1lTm93PSR7c2VsZi50aW1lTm93fWAsXG4gICAgICAvLyDlsIHpnaLlm75cbiAgICAgIGltYWdlVXJsOiBzZWxmLnNoYXJlLmNvdmVySW1hZ2VVcmwsXG5cbiAgICAgIC8vIOi9rOWPkeaIkOWKn1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICBzZWxmLmdldFVzZXJJbmZvKCk7XG5cbiAgICAgICAgLy8g6Ieq5a6a5LmJ5LqL5Lu25LiK5oqlXG4gICAgICAgIHNlbGYucmVwb3J0KCk7XG5cbiAgICAgICAgLy8g5YiG5Lqr5oiQ5Yqf6YKu5Lu26YCa55+lXG4gICAgICAgIHNlbGYuc2hhcmVFbWFpbE5vdGljZSgpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HlpLHotKVcbiAgICAgICAgY29uc29sZS5sb2coYOi9rOWPkeWksei0pWApO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==