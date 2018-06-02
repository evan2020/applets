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
      navigationBarTitleText: '祝福'
    }, _this.components = {}, _this.data = {
      msg: '', //输入框的内容
      text: '', //格式化之后要展示的内容
      windowHeight: '100%' //手机屏幕高度
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
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

      if (options.msg) {
        self.msg = options.msg;
      } else {
        // 默认留言
        self.msg = '\u7236\u6BCD\u5728\uFF0C\u4E0D\u8FDC\u6E38\uFF0C\u4E0D\u5728\u4F60\u4EEC\u8EAB\u8FB9\u7684\u65F6\u5019\uFF0C\u5E0C\u671B\u4F60\u4EEC\u80FD\u7167\u987E\u597D\u81EA\u5DF1\uFF0C\u65E0\u8BBA\u7E41\u5FD9\u52B3\u788C\uFF0C\u8FD8\u662F\u6E38\u73A9\u4F11\u95F2\uFF0C\u613F\u8EAB\u4F53\u5065\u5EB7\uFF0C\u613F\u5FC3\u60F3\u4E8B\u6210\uFF0C\u5988\u5988\uFF0C\u5728\u8FD9\u4E2A\u7279\u6B8A\u7684\u65E5\u5B50\uFF0C\u795D\u4F60\u8282\u65E5\u5FEB\u4E50';
      }
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

      // 设置背景音乐
      var backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.title = '听妈妈的话';
      backgroundAudioManager.epname = '';
      backgroundAudioManager.singer = '周杰伦';
      backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000';
      backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/%E5%90%AC%E5%A6%88%E5%A6%88%E7%9A%84%E8%AF%9D_%E9%93%83%E5%A3%B0%E4%B9%8B%E5%AE%B6cnwav.mp3';
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
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      // 卡片内容
      return {
        title: '妈妈',
        path: '/pages/details/details?msg=' + self.msg,
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
          console.log('\u8F6C\u53D1\u6210\u529F', card_time, user_name, user_openid, user_gender);
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
            user_name: user_name,
            user_gender: user_gender,
            user_openid: user_openid,
            card_time: card_time,
            card_content: self.msg,
            card_name: '母亲节贺卡'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJtc2ciLCJ0ZXh0Iiwid2luZG93SGVpZ2h0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwic2VsZiIsInRlc3RBcnIiLCJyZWciLCJpbmRleCIsInN0YXJ0IiwiZXhlYyIsInB1c2giLCJzdWJzdHJpbmciLCJsYXN0SW5kZXgiLCJsZW5ndGgiLCIkYXBwbHkiLCJvcHRpb25zIiwiUmVnTXNnIiwid3giLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwibW9kZWwiLCJwaXhlbFJhdGlvIiwid2luZG93V2lkdGgiLCJsYW5ndWFnZSIsInZlcnNpb24iLCJwbGF0Zm9ybSIsImJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJnZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwidGl0bGUiLCJlcG5hbWUiLCJzaW5nZXIiLCJjb3ZlckltZ1VybCIsInNyYyIsInBsYXkiLCJwYXVzZSIsImZyb20iLCJ0YXJnZXQiLCJwYXRoIiwiaW1hZ2VVcmwiLCJjYXJkX3RpbWUiLCJEYXRlIiwidXNlcmluZm8iLCJCYWFTIiwic3RvcmFnZSIsImdldCIsInVzZXJfbmFtZSIsIm5pY2tOYW1lIiwidXNlcl9vcGVuaWQiLCJvcGVuaWQiLCJ1c2VyX2dlbmRlciIsImdlbmRlciIsInJlcG9ydEFuYWx5dGljcyIsImNhcmRfbmFtZSIsInRhYmxlSUQiLCJQcm9kdWN0IiwiVGFibGVPYmplY3QiLCJwcm9kdWN0IiwiY3JlYXRlIiwiYXBwbGUiLCJzZW5kX2NhcmQiLCJjYXJkX2NvbnRlbnQiLCJzZXQiLCJzYXZlIiwidGhlbiIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFC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RFAsRUFFR0ksSUFGSCxHQUdHQyxJQUhILENBSUksZUFBTztBQUNMO0FBQ0E3QyxvQkFBUUMsR0FBUjtBQUNELFdBUEwsRUFRSSxlQUFPO0FBQ0w7QUFDRCxXQVZMO0FBWUQsU0FyREk7QUFzREw2QyxjQUFNLGNBQVMvQyxHQUFULEVBQWM7QUFDbEI7QUFDRDtBQXhESSxPQUFQO0FBMEREOzs7O0VBdktnQyxlQUFLZ0QsSTs7a0JBQW5CN0UsSyIsImZpbGUiOiJkZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+elneemjydcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgbXNnOiBgYCwgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICB0ZXh0OiBgYCwgLy/moLzlvI/ljJbkuYvlkI7opoHlsZXnpLrnmoTlhoXlrrlcbiAgICB3aW5kb3dIZWlnaHQ6ICcxMDAlJyAvL+aJi+acuuWxj+W5lemrmOW6plxuICB9O1xuXG4gIC8vIOWkhOeQhuS8oOmAkui/h+adpeeahOS/oeaBr1xuICBSZWdNc2coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBtc2cgPSBzZWxmLm1zZztcbiAgICBsZXQgdGVzdEFyciA9IFtdO1xuICAgIC8vIOmBh+WIsOS7peS4i+espuWPt+eri+WNs+aIquWPluWGheWuueWIhuautVxuICAgIGxldCByZWcgPSAvW++8jHwsfC5844CCfOOAgXzvvJ9877ybfDt8L10vZztcbiAgICBsZXQgaW5kZXggPSBgYDtcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIHdoaWxlICgoaW5kZXggPSByZWcuZXhlYyhtc2cpICE9IG51bGwpKSB7XG4gICAgICAvLyDmiKrlj5bkuKTkuKrnrKblkIjkuYvpl7TnmoTmloflrZfvvIzliIbmrrXmlL7lhaXmlbDnu4RcbiAgICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCByZWcubGFzdEluZGV4KSk7XG4gICAgICAvLyDmo4DmtYvlubbmlLnlj5jlvZPliY3nrKblj7fntKLlvJVcbiAgICAgIHN0YXJ0ID0gcmVnLmxhc3RJbmRleDtcbiAgICB9XG4gICAgLy8g6I635Y+W5pyA5ZCO5LiA5q615paH5a2XXG4gICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIG1zZy5sZW5ndGgpKTtcbiAgICBzZWxmLnRleHQgPSB0ZXN0QXJyO1xuICAgIHNlbGYuJGFwcGx5KCk7XG4gIH1cblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7fTtcblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGlmIChvcHRpb25zLm1zZykge1xuICAgICAgc2VsZi5tc2cgPSBvcHRpb25zLm1zZztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6buY6K6k55WZ6KiAXG4gICAgICBzZWxmLm1zZyA9IGDniLbmr43lnKjvvIzkuI3ov5zmuLjvvIzkuI3lnKjkvaDku6zouqvovrnnmoTml7blgJnvvIzluIzmnJvkvaDku6zog73nhafpob7lpb3oh6rlt7HvvIzml6DorrrnuYHlv5nlirPnoozvvIzov5jmmK/muLjnjqnkvJHpl7LvvIzmhL/ouqvkvZPlgaXlurfvvIzmhL/lv4Pmg7PkuovmiJDvvIzlpojlpojvvIzlnKjov5nkuKrnibnmrornmoTml6XlrZDvvIznpZ3kvaDoioLml6Xlv6vkuZBgO1xuICAgIH1cbiAgICBzZWxmLlJlZ01zZygpO1xuICAgIHNlbGYuJGFwcGx5KCk7XG5cbiAgICAvL+aYvuekuui9rOWPkVxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5bmiYvmnLrkv6Hmga9cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMubW9kZWwpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMucGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy53aW5kb3dXaWR0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy53aW5kb3dIZWlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMubGFuZ3VhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudmVyc2lvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5wbGF0Zm9ybSk7XG4gICAgICAgIHNlbGYud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIOiuvue9ruiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci50aXRsZSA9ICflkKzlpojlpojnmoTor50nO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuZXBuYW1lID0gJyc7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zaW5nZXIgPSAn5ZGo5p2w5LymJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmNvdmVySW1nVXJsID1cbiAgICAgICdodHRwOi8veS5ndGltZy5jbi9tdXNpYy9waG90b19uZXcvVDAwMlIzMDB4MzAwTTAwMDAwM3JzS0Y0NEd5YVNrLmpwZz9tYXhfYWdlPTI1OTIwMDAnO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuc3JjID1cbiAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vJUU1JTkwJUFDJUU1JUE2JTg4JUU1JUE2JTg4JUU3JTlBJTg0JUU4JUFGJTlEXyVFOSU5MyU4MyVFNSVBMyVCMCVFNCVCOSU4QiVFNSVBRSVCNmNud2F2Lm1wMyc7XG4gIH1cblxuICAvLyDlvZPpobXpnaLmmL7npLrnmoTml7blgJlcbiAgb25TaG93KCkge1xuICAgIGNvbnNvbGUubG9nKCdzaG93Jyk7XG4gICAgLy8g57un57ut5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBsYXkoKTtcbiAgfVxuICBvbkhpZGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2hpZGRlbicpO1xuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG5cbiAgLy8g5b2T6aG16Z2i5YiH5o2i77yI6ZqQ6JeP77yJ55qE5pe25YCZXG4gIG9uVW5sb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCd1bmxvYWQnKTtcbiAgICAvLyDmmoLlgZzog4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgfVxuICAvLyDorr7nva7liIbkuqvljaHniYdcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldCk7XG4gICAgfVxuICAgIC8vIOWNoeeJh+WGheWuuVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+WmiOWmiCcsXG4gICAgICBwYXRoOiBgL3BhZ2VzL2RldGFpbHMvZGV0YWlscz9tc2c9JHtzZWxmLm1zZ31gLFxuICAgICAgLy8g5bCB6Z2i5Zu+XG4gICAgICBpbWFnZVVybDpcbiAgICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS9DaE1rSjFiS3hZV0lja0g0QUFGODZId0pWdllBQUxIWEFQOTZxSUFBWDBBMTYyLmpwZycsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgIGxldCBjYXJkX3RpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAvLyDojrflj5bnlKjmiLflrZjlgqjnmoTnlKjmiLfkv6Hmga9cbiAgICAgICAgbGV0IHVzZXJpbmZvID0gd3guQmFhUy5zdG9yYWdlLmdldChgdXNlcmluZm9gKTtcbiAgICAgICAgLy8g6K6+572u5aS05YOP5ZKM5ZCN56ewXG4gICAgICAgIGxldCB1c2VyX25hbWUgPSB1c2VyaW5mby5uaWNrTmFtZSB8fCBg5pyq55m75b2V5ri45a6iYDtcbiAgICAgICAgbGV0IHVzZXJfb3BlbmlkID0gdXNlcmluZm8ub3BlbmlkIHx8IGDml6BvcGVuaWRgO1xuICAgICAgICBsZXQgdXNlcl9nZW5kZXIgPSB1c2VyaW5mby5nZW5kZXIgfHwgYOaXoGA7XG4gICAgICAgIGNvbnNvbGUubG9nKGDovazlj5HmiJDlip9gLCBjYXJkX3RpbWUsIHVzZXJfbmFtZSwgdXNlcl9vcGVuaWQsIHVzZXJfZ2VuZGVyKTtcbiAgICAgICAgLy8g6Ieq5a6a5LmJ5LqL5Lu25LiK5oql77yI5YiG5Lqr5LqL5Lu277yJXG4gICAgICAgIHd4LnJlcG9ydEFuYWx5dGljcygnc2hhcmVfY2FyZCcsIHtcbiAgICAgICAgICBjYXJkX25hbWU6IGDmr43kurLoioLotLrljaFgLFxuICAgICAgICAgIHVzZXJfbmFtZSxcbiAgICAgICAgICBjYXJkX3RpbWUsXG4gICAgICAgICAgdXNlcl9vcGVuaWQsXG4gICAgICAgICAgdXNlcl9nZW5kZXIsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDorr7nva7mqKHmnb/mtojmga/pgJrnn6VcbiAgICAgICAgLy8g5ZCRIHRhYmxlSUQg5Li6IDM5MDA2IOeahOaVsOaNruihqOaPkuWFpeS4gOadoeiusOW9lVxuICAgICAgICBsZXQgdGFibGVJRCA9IDM5MDA2O1xuICAgICAgICBsZXQgUHJvZHVjdCA9IG5ldyB3eC5CYWFTLlRhYmxlT2JqZWN0KHRhYmxlSUQpO1xuICAgICAgICBsZXQgcHJvZHVjdCA9IFByb2R1Y3QuY3JlYXRlKCk7XG5cbiAgICAgICAgLy8g6K6+572u5pa55byP5LiAXG4gICAgICAgIGxldCBhcHBsZSA9IHtcbiAgICAgICAgICBzZW5kX2NhcmQ6ICdFbWFpbCcsXG4gICAgICAgICAgdXNlcl9uYW1lLFxuICAgICAgICAgIHVzZXJfZ2VuZGVyLFxuICAgICAgICAgIHVzZXJfb3BlbmlkLFxuICAgICAgICAgIGNhcmRfdGltZSxcbiAgICAgICAgICBjYXJkX2NvbnRlbnQ6c2VsZi5tc2csXG4gICAgICAgICAgY2FyZF9uYW1lOiAn5q+N5Lqy6IqC6LS65Y2hJyxcbiAgICAgICAgfTtcblxuICAgICAgICBwcm9kdWN0XG4gICAgICAgICAgLnNldChhcHBsZSlcbiAgICAgICAgICAuc2F2ZSgpXG4gICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDliJvlu7rooajmiJDlip9gKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==