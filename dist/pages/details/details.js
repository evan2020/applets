'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
      console.log(options);

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
          backgroundAudioManager.title = '听妈妈的话';
          backgroundAudioManager.epname = '';
          backgroundAudioManager.singer = '周杰伦';
          backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000';
          backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/%E5%90%AC%E5%A6%88%E5%A6%88%E7%9A%84%E8%AF%9D_%E9%93%83%E5%A3%B0%E4%B9%8B%E5%AE%B6cnwav.mp3';
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
        self.msg = '\u7236\u6BCD\u5728\uFF0C\u4E0D\u8FDC\u6E38\uFF0C\u4E0D\u5728\u4F60\u4EEC\u8EAB\u8FB9\u7684\u65F6\u5019\uFF0C\u5E0C\u671B\u4F60\u4EEC\u80FD\u7167\u987E\u597D\u81EA\u5DF1\uFF0C\u65E0\u8BBA\u7E41\u5FD9\u52B3\u788C\uFF0C\u8FD8\u662F\u6E38\u73A9\u4F11\u95F2\uFF0C\u613F\u8EAB\u4F53\u5065\u5EB7\uFF0C\u613F\u5FC3\u60F3\u4E8B\u6210\uFF0C\u5988\u5988\uFF0C\u5728\u8FD9\u4E2A\u7279\u6B8A\u7684\u65E5\u5B50\uFF0C\u795D\u4F60\u8282\u65E5\u5FEB\u4E50';
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
        console.log('res.target', res.target);
      }
      // 卡片内容
      return {
        title: '妈妈',
        path: '/pages/details/details?msg=' + self.msg + '&recordUrl=' + self.recordUrl + '&timeCheckVal=' + self.timeCheckVal + '&timeNow=' + self.timeNow,
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/ChMkJ1bKxYWIckH4AAF86HwJVvYAALHXAP96qIAAX0A162.jpg',
        success: function success(res) {
          // 转发成功
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJtc2ciLCJ0ZXh0IiwicmVjb3JkVXJsIiwibXVzaWNTdGF0ZSIsIndpbmRvd0hlaWdodCIsInRpbWVDaGVja1ZhbCIsInRpbWVOb3ciLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZEF1ZGlvTWFuYWdlciIsInd4IiwiZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlciIsInBsYXkiLCJwYXVzZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsInRvZ2dsZU11c2ljIiwic2VsZiIsIiRhcHBseSIsInJlY29yZFBsYXkiLCJpbm5lckF1ZGlvQ29udGV4dCIsImNyZWF0ZUlubmVyQXVkaW9Db250ZXh0IiwiYXV0b3BsYXkiLCJzcmMiLCJvblBsYXkiLCJvbkVycm9yIiwicmVzIiwiZXJyTXNnIiwiZXJyQ29kZSIsImV2ZW50cyIsInRlc3RBcnIiLCJyZWciLCJpbmRleCIsInN0YXJ0IiwiZXhlYyIsInB1c2giLCJzdWJzdHJpbmciLCJsYXN0SW5kZXgiLCJsZW5ndGgiLCJvcHRpb25zIiwidGltZUNoZWNrTm93IiwiRGF0ZSIsImdldFRpbWUiLCJub3dUaW1lIiwicGFyc2VJbnQiLCJ0aXRsZSIsImVwbmFtZSIsInNpbmdlciIsImNvdmVySW1nVXJsIiwicmVkaXJlY3RUbyIsInVybCIsIlJlZ01zZyIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsIm1vZGVsIiwicGl4ZWxSYXRpbyIsIndpbmRvd1dpZHRoIiwibGFuZ3VhZ2UiLCJ2ZXJzaW9uIiwicGxhdGZvcm0iLCJmcm9tIiwidGFyZ2V0IiwicGF0aCIsImltYWdlVXJsIiwiY2FyZF90aW1lIiwidXNlcmluZm8iLCJCYWFTIiwic3RvcmFnZSIsImdldCIsInVzZXJfbmFtZSIsIm5pY2tOYW1lIiwidXNlcl9vcGVuaWQiLCJvcGVuaWQiLCJ1c2VyX2dlbmRlciIsImdlbmRlciIsInJlcG9ydEFuYWx5dGljcyIsImNhcmRfbmFtZSIsInRhYmxlSUQiLCJQcm9kdWN0IiwiVGFibGVPYmplY3QiLCJwcm9kdWN0IiwiY3JlYXRlIiwiYXBwbGUiLCJzZW5kX2NhcmQiLCJjYXJkX2NvbnRlbnQiLCJzZXQiLCJzYXZlIiwidGhlbiIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxhQURLLEVBQ0k7QUFDVEMsY0FGSyxFQUVLO0FBQ1ZDLG1CQUhLLEVBR1U7QUFDZkMsMkJBSkssRUFJa0I7QUFDdkJDLG9CQUFjLE1BTFQsRUFLaUI7QUFDdEJDLG9CQUFjLFdBTlQsRUFNc0I7QUFDM0JDLGVBQVMsRUFQSixDQU9PO0FBUFAsSyxRQVVQQyxLLEdBQVE7QUFDTjtBQUNBSixnQkFGTSxzQkFFS0ssUUFGTCxFQUVlQyxRQUZmLEVBRXlCO0FBQzdCQyxnQkFBUUMsR0FBUix3QkFBaUNGLFFBQWpDLFlBQWdERCxRQUFoRDtBQUNBLFlBQU1JLHlCQUF5QkMsR0FBR0MseUJBQUgsRUFBL0I7QUFDQSxZQUFJTixxQkFBSixFQUEyQjtBQUN6QkksaUNBQXVCRyxJQUF2QjtBQUNELFNBRkQsTUFFTztBQUNMSCxpQ0FBdUJJLEtBQXZCO0FBQ0Q7QUFDRjtBQVZLLEssUUFrQ1JDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSO0FBQ0FDLGlCQUZRLHlCQUVNO0FBQ1osWUFBSUMsT0FBTyxJQUFYO0FBQ0FWLGdCQUFRQyxHQUFSO0FBQ0EsWUFBSVMsS0FBS2pCLFVBQUwsSUFBbUIsU0FBdkIsRUFBa0M7QUFDaENpQixlQUFLakIsVUFBTDtBQUNELFNBRkQsTUFFTztB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bSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnpZ3npo8nXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIG1zZzogYGAsIC8v6L6T5YWl5qGG55qE5YaF5a65XG4gICAgdGV4dDogYGAsIC8v5qC85byP5YyW5LmL5ZCO6KaB5bGV56S655qE5YaF5a65XG4gICAgcmVjb3JkVXJsOiBgYCwgLy/lvZXpn7PkupHmlofku7blnLDlnYBcbiAgICBtdXNpY1N0YXRlOiBgcnVubmluZ2AsIC8v6Z+z5LmQ5Zu+54mH5Yqo55S75piv5ZCm5pqC5YGcXG4gICAgd2luZG93SGVpZ2h0OiAnMTAwJScsIC8v5omL5py65bGP5bmV6auY5bqmXG4gICAgdGltZUNoZWNrVmFsOiAndW5saW1pdGVkJywgLy/kv6Hku7bmnInmlYjmnJ9cbiAgICB0aW1lTm93OiAnJyAvL+i9rOWPkeeahOaXtumXtOaIs1xuICB9O1xuXG4gIHdhdGNoID0ge1xuICAgIC8vICDmmoLlgZwv5pKt5pS+6Z+z5LmQXG4gICAgbXVzaWNTdGF0ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBtdXNpY1N0YXRlIHZhbHVlOiAke29sZFZhbHVlfSAtPiAke25ld1ZhbHVlfWApO1xuICAgICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICAgIGlmIChuZXdWYWx1ZSA9PSBgcnVubmluZ2ApIHtcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIOWkhOeQhuS8oOmAkui/h+adpeeahOS/oeaBr1xuICBSZWdNc2coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBtc2cgPSBzZWxmLm1zZztcbiAgICBsZXQgdGVzdEFyciA9IFtdO1xuICAgIC8vIOmBh+WIsOS7peS4i+espuWPt+eri+WNs+aIquWPluWGheWuueWIhuautVxuICAgIGxldCByZWcgPSAvW++8jHwsfC5844CCfOOAgXzvvJ9877ybfDt8L10vZztcbiAgICBsZXQgaW5kZXggPSBgYDtcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIHdoaWxlICgoaW5kZXggPSByZWcuZXhlYyhtc2cpICE9IG51bGwpKSB7XG4gICAgICAvLyDmiKrlj5bkuKTkuKrnrKblkIjkuYvpl7TnmoTmloflrZfvvIzliIbmrrXmlL7lhaXmlbDnu4RcbiAgICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCByZWcubGFzdEluZGV4KSk7XG4gICAgICAvLyDmo4DmtYvlubbmlLnlj5jlvZPliY3nrKblj7fntKLlvJVcbiAgICAgIHN0YXJ0ID0gcmVnLmxhc3RJbmRleDtcbiAgICB9XG4gICAgLy8g6I635Y+W5pyA5ZCO5LiA5q615paH5a2XXG4gICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIG1zZy5sZW5ndGgpKTtcbiAgICBzZWxmLnRleHQgPSB0ZXN0QXJyO1xuICAgIHNlbGYuJGFwcGx5KCk7XG4gIH1cblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g5YiH5o2i6Z+z5LmQ5Zu+5qCH5peL6L2sXG4gICAgdG9nZ2xlTXVzaWMoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhgdG9nZ2xlYCk7XG4gICAgICBpZiAoc2VsZi5tdXNpY1N0YXRlID09ICdydW5uaW5nJykge1xuICAgICAgICBzZWxmLm11c2ljU3RhdGUgPSBgcGF1c2VkYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubXVzaWNTdGF0ZSA9IGBydW5uaW5nYDtcbiAgICAgIH1cbiAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgfSxcbiAgICAvLyDmkq3mlL7lvZXpn7NcbiAgICByZWNvcmRQbGF5KCkge1xuICAgICAgY29uc29sZS5sb2coYOaSreaUvuW9lemfs2ApO1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICBjb25zdCBpbm5lckF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IHRydWU7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSBzZWxmLnJlY29yZFVybDtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uUGxheSgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCflvIDlp4vmkq3mlL4nKTtcbiAgICAgIH0pO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FcnJvcihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyckNvZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuXG4gICAgbGV0IHRpbWVDaGVja05vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRpbWVOb3cgPSB0aW1lQ2hlY2tOb3cuZ2V0VGltZSgpO1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgIGlmIChvcHRpb25zLnRpbWVOb3cpIHtcbiAgICAgIGxldCBub3dUaW1lID0gcGFyc2VJbnQob3B0aW9ucy50aW1lTm93KTtcbiAgICAgIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAndW5saW1pdGVkJykge1xuICAgICAgICB0aW1lTm93ID0gMTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50aW1lQ2hlY2tWYWwgPT0gJzMwbWluJykge1xuICAgICAgICBjb25zb2xlLmxvZygnbm93VGltZScsIG5vd1RpbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2Ygbm93VGltZSk7XG4gICAgICAgIG5vd1RpbWUgPSBub3dUaW1lICsgMTAwMCAqIDYwICogMzA7XG4gICAgICAgIC8vIG5vd1RpbWUgPSBub3dUaW1lICsgMTAwMCAqIDMwO1xuICAgICAgICBjb25zb2xlLmxvZygnbm93VGltZScsIG5vd1RpbWUpO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAnM2hvdXInKSB7XG4gICAgICAgIG5vd1RpbWUgPSBub3dUaW1lICsgMTAwMCAqIDYwICogNjAgKiAzO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAnM2RheScpIHtcbiAgICAgICAgbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogNjAgKiA2MCAqIDI0ICogMztcbiAgICAgIH1cbiAgICAgIC8vIOWmguaenOS/oeS7tuWcqOacieaViOacn+WGhVxuICAgICAgaWYgKG5vd1RpbWUgPiB0aW1lTm93KSB7XG4gICAgICAgIC8vIOiuvue9ruiDjOaZr+mfs+S5kFxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnRpdGxlID0gJ+WQrOWmiOWmiOeahOivnSc7XG4gICAgICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuZXBuYW1lID0gJyc7XG4gICAgICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuc2luZ2VyID0gJ+WRqOadsOS8pic7XG4gICAgICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuY292ZXJJbWdVcmwgPVxuICAgICAgICAgICdodHRwOi8veS5ndGltZy5jbi9tdXNpYy9waG90b19uZXcvVDAwMlIzMDB4MzAwTTAwMDAwM3JzS0Y0NEd5YVNrLmpwZz9tYXhfYWdlPTI1OTIwMDAnO1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNyYyA9XG4gICAgICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8lRTUlOTAlQUMlRTUlQTYlODglRTUlQTYlODglRTclOUElODQlRTglQUYlOURfJUU5JTkzJTgzJUU1JUEzJUIwJUU0JUI5JThCJUU1JUFFJUI2Y253YXYubXAzJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWmguaenOS/oeS7tuS4jeWcqOacieaViOacn+WGhe+8jOWwseW8ueWHuui/h+acn+aPkOekuu+8jOW5tumakOiXj+S/oeS7tuWGheWuuVxuICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICB1cmw6IGAvYXBwbGV0c0IvcGFnZXMvbm9kYXRhL25vZGF0YWBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5tc2cpIHtcbiAgICAgIHNlbGYubXNnID0gb3B0aW9ucy5tc2c7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOm7mOiupOeVmeiogFxuICAgICAgc2VsZi5tc2cgPSBg54i25q+N5Zyo77yM5LiN6L+c5ri477yM5LiN5Zyo5L2g5Lus6Lqr6L6555qE5pe25YCZ77yM5biM5pyb5L2g5Lus6IO954Wn6aG+5aW96Ieq5bex77yM5peg6K6657mB5b+Z5Yqz56KM77yM6L+Y5piv5ri4546p5LyR6Zey77yM5oS/6Lqr5L2T5YGl5bq377yM5oS/5b+D5oOz5LqL5oiQ77yM5aaI5aaI77yM5Zyo6L+Z5Liq54m55q6K55qE5pel5a2Q77yM56Wd5L2g6IqC5pel5b+r5LmQYDtcbiAgICB9XG4gICAgc2VsZi5yZWNvcmRVcmwgPSBvcHRpb25zLnJlY29yZFVybDtcbiAgICBzZWxmLnRpbWVDaGVja1ZhbCA9IG9wdGlvbnMudGltZUNoZWNrVmFsO1xuICAgIHNlbGYuUmVnTXNnKCk7XG4gICAgc2VsZi4kYXBwbHkoKTtcblxuICAgIC8v5pi+56S66L2s5Y+RXG4gICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIOiOt+WPluaJi+acuuS/oeaBr1xuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5tb2RlbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5waXhlbFJhdGlvKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLndpbmRvd1dpZHRoKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLndpbmRvd0hlaWdodCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5sYW5ndWFnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy52ZXJzaW9uKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnBsYXRmb3JtKTtcbiAgICAgICAgc2VsZi53aW5kb3dIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8g5b2T6aG16Z2i5pi+56S655qE5pe25YCZXG4gIG9uU2hvdygpIHtcbiAgICBjb25zb2xlLmxvZygnc2hvdycpO1xuICAgIC8vIOe7p+e7reaSreaUvuiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wbGF5KCk7XG4gIH1cbiAgb25IaWRlKCkge1xuICAgIGNvbnNvbGUubG9nKCdoaWRkZW4nKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgfVxuXG4gIC8vIOW9k+mhtemdouWIh+aNou+8iOmakOiXj++8ieeahOaXtuWAmVxuICBvblVubG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygndW5sb2FkJyk7XG4gICAgLy8g5pqC5YGc6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gIH1cbiAgLy8g6K6+572u5YiG5Lqr5Y2h54mHXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgdGltZUNoZWNrTm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdGltZU5vdyA9IHRpbWVDaGVja05vdy5nZXRUaW1lKCk7XG4gICAgc2VsZi50aW1lTm93ID0gdGltZU5vdztcbiAgICBzZWxmLiRhcHBseSgpO1xuICAgIGNvbnNvbGUubG9nKGB0aW1lTm93ICR7dGltZU5vd31gKTtcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGltZU5vdyk7XG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICBjb25zb2xlLmxvZygncmVzLnRhcmdldCcsIHJlcy50YXJnZXQpO1xuICAgIH1cbiAgICAvLyDljaHniYflhoXlrrlcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICflpojlpognLFxuICAgICAgcGF0aDogYC9wYWdlcy9kZXRhaWxzL2RldGFpbHM/bXNnPSR7c2VsZi5tc2d9JnJlY29yZFVybD0ke1xuICAgICAgICBzZWxmLnJlY29yZFVybFxuICAgICAgfSZ0aW1lQ2hlY2tWYWw9JHtzZWxmLnRpbWVDaGVja1ZhbH0mdGltZU5vdz0ke3NlbGYudGltZU5vd31gLFxuICAgICAgLy8g5bCB6Z2i5Zu+XG4gICAgICBpbWFnZVVybDpcbiAgICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS9DaE1rSjFiS3hZV0lja0g0QUFGODZId0pWdllBQUxIWEFQOTZxSUFBWDBBMTYyLmpwZycsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgIGxldCBjYXJkX3RpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAvLyDojrflj5bnlKjmiLflrZjlgqjnmoTnlKjmiLfkv6Hmga9cbiAgICAgICAgbGV0IHVzZXJpbmZvID0gd3guQmFhUy5zdG9yYWdlLmdldChgdXNlcmluZm9gKTtcbiAgICAgICAgLy8g6K6+572u5aS05YOP5ZKM5ZCN56ewXG4gICAgICAgIGxldCB1c2VyX25hbWUgPSB1c2VyaW5mby5uaWNrTmFtZSB8fCBg5pyq55m75b2V5ri45a6iYDtcbiAgICAgICAgbGV0IHVzZXJfb3BlbmlkID0gdXNlcmluZm8ub3BlbmlkIHx8IGDml6BvcGVuaWRgO1xuICAgICAgICBsZXQgdXNlcl9nZW5kZXIgPSB1c2VyaW5mby5nZW5kZXIgfHwgYOaXoGA7XG5cbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgYOi9rOWPkeaIkOWKn2AsXG4gICAgICAgICAgY2FyZF90aW1lLFxuICAgICAgICAgIHVzZXJfbmFtZSxcbiAgICAgICAgICB1c2VyX29wZW5pZCxcbiAgICAgICAgICB1c2VyX2dlbmRlcixcbiAgICAgICAgICBzZWxmLnJlY29yZFVybFxuICAgICAgICApO1xuICAgICAgICAvLyDoh6rlrprkuYnkuovku7bkuIrmiqXvvIjliIbkuqvkuovku7bvvIlcbiAgICAgICAgd3gucmVwb3J0QW5hbHl0aWNzKCdzaGFyZV9jYXJkJywge1xuICAgICAgICAgIGNhcmRfbmFtZTogYOavjeS6suiKgui0uuWNoWAsXG4gICAgICAgICAgdXNlcl9uYW1lLFxuICAgICAgICAgIGNhcmRfdGltZSxcbiAgICAgICAgICB1c2VyX29wZW5pZCxcbiAgICAgICAgICB1c2VyX2dlbmRlclxuICAgICAgICB9KTtcbiAgICAgICAgLy8g6K6+572u5qih5p2/5raI5oGv6YCa55+lXG4gICAgICAgIC8vIOWQkSB0YWJsZUlEIOS4uiAzOTAwNiDnmoTmlbDmja7ooajmj5LlhaXkuIDmnaHorrDlvZVcbiAgICAgICAgbGV0IHRhYmxlSUQgPSAzOTAwNjtcbiAgICAgICAgbGV0IFByb2R1Y3QgPSBuZXcgd3guQmFhUy5UYWJsZU9iamVjdCh0YWJsZUlEKTtcbiAgICAgICAgbGV0IHByb2R1Y3QgPSBQcm9kdWN0LmNyZWF0ZSgpO1xuXG4gICAgICAgIC8vIOiuvue9ruaWueW8j+S4gFxuICAgICAgICBsZXQgYXBwbGUgPSB7XG4gICAgICAgICAgc2VuZF9jYXJkOiAnRW1haWwnLFxuICAgICAgICAgIHJlY29yZFVybDogc2VsZi5yZWNvcmRVcmwsXG4gICAgICAgICAgdXNlcl9uYW1lLFxuICAgICAgICAgIHVzZXJfZ2VuZGVyLFxuICAgICAgICAgIHVzZXJfb3BlbmlkLFxuICAgICAgICAgIGNhcmRfdGltZSxcbiAgICAgICAgICBjYXJkX2NvbnRlbnQ6IHNlbGYubXNnLFxuICAgICAgICAgIGNhcmRfbmFtZTogJ+avjeS6suiKgui0uuWNoSdcblxuICAgICAgICAgIC8vIOS/oeS7tuW3suafpeaUtlxuICAgICAgICAgIC8vIHNlbmRfY2FyZDogYHNlbmRDYXJkYCxcbiAgICAgICAgICAvLyBzdGF0ZTogYOW3suaOpeaUtmAsXG4gICAgICAgICAgLy8gZGlyZWN0aW9uczogYOaymea8j+eahOaXtuWFiWAsXG4gICAgICAgICAgLy8gbm90ZTogYOeCueWHu+afpeeci+WPkemAgeWGheWuuWBcbiAgICAgICAgfTtcblxuICAgICAgICBwcm9kdWN0XG4gICAgICAgICAgLnNldChhcHBsZSlcbiAgICAgICAgICAuc2F2ZSgpXG4gICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDliJvlu7rooajmiJDlip9gKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAvLyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HlpLHotKVcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=