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
        self.msg = '\u5C0F\u65F6\u5019\uFF0C\u7236\u4EB2\u5C31\u662F\u9897\u53C2\u5929\u5927\u6811\uFF0C\u4E3A\u6211\u4EEC\u906E\u98CE\u6321\u96E8\uFF0C\u957F\u5927\u4E86\uFF0C\u7236\u4EB2\u6210\u4E86\u672C\u767E\u79D1\u5168\u4E66\uFF0C\u4E3A\u6211\u4EEC\u7B54\u7591\u89E3\u60D1\uFF0C\u7236\u4EB2\uFF0C\u6C38\u8FDC\u662F\u6211\u4EEC\u7684\u652F\u67F1\uFF0C\u7238\u7238\uFF0C\u8282\u65E5\u5FEB\u4E50';
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
      backgroundAudioManager.title = '父亲';
      backgroundAudioManager.epname = '';
      backgroundAudioManager.singer = '筷子兄弟';
      backgroundAudioManager.coverImgUrl = 'https://om83cysj8.qnssl.com/a9d63448b881e12eab44fdfcdbd1cb7c_Fotor.png';
      backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/at20111229221940.mp3';
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
        title: '父亲节快乐',
        path: '/appletsA/pages/details/father?msg=' + self.msg,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdGhlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIm1zZyIsInRleHQiLCJ3aW5kb3dIZWlnaHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJzZWxmIiwidGVzdEFyciIsInJlZyIsImluZGV4Iiwic3RhcnQiLCJleGVjIiwicHVzaCIsInN1YnN0cmluZyIsImxhc3RJbmRleCIsImxlbmd0aCIsIiRhcHBseSIsIm9wdGlvbnMiLCJSZWdNc2ciLCJ3eCIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtb2RlbCIsInBpeGVsUmF0aW8iLCJ3aW5kb3dXaWR0aCIsImxhbmd1YWdlIiwidmVyc2lvbiIsInBsYXRmb3JtIiwiYmFja2dyb3VuZEF1ZGlvTWFuYWdlciIsImdldEJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJ0aXRsZSIsImVwbmFtZSIsInNpbmdlciIsImNvdmVySW1nVXJsIiwic3JjIiwicGxheSIsInBhdXNlIiwiZnJvbSIsInRhcmdldCIsInBhdGgiLCJpbWFnZVVybCIsImNhcmRfdGltZSIsIkRhdGUiLCJ1c2VyaW5mbyIsIkJhYVMiLCJzdG9yYWdlIiwiZ2V0IiwidXNlcl9uYW1lIiwibmlja05hbWUiLCJ1c2VyX29wZW5pZCIsIm9wZW5pZCIsInVzZXJfZ2VuZGVyIiwiZ2VuZGVyIiwicmVwb3J0QW5hbHl0aWNzIiwiY2FyZF9uYW1lIiwidGFibGVJRCIsIlByb2R1Y3QiLCJUYWJsZU9iamVjdCIsInByb2R1Y3QiLCJjcmVhdGUiLCJhcHBsZSIsInNlbmRfY2FyZCIsImNhcmRfY29udGVudCIsInNldCIsInNhdmUiLCJ0aGVuIiwiZmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJB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UCxFQUVHSSxJQUZILEdBR0dDLElBSEgsQ0FJSSxlQUFPO0FBQ0w7QUFDQTdDLG9CQUFRQyxHQUFSO0FBQ0QsV0FQTCxFQVFJLGVBQU87QUFDTDtBQUNELFdBVkw7QUFZRCxTQXJESTtBQXNETDZDLGNBQU0sY0FBUy9DLEdBQVQsRUFBYztBQUNsQjtBQUNEO0FBeERJLE9BQVA7QUEwREQ7Ozs7RUF2S2dDLGVBQUtnRCxJOztrQkFBbkI3RSxLIiwiZmlsZSI6ImZhdGhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfniLbkurLoioInXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIG1zZzogYGAsIC8v6L6T5YWl5qGG55qE5YaF5a65XG4gICAgdGV4dDogYGAsIC8v5qC85byP5YyW5LmL5ZCO6KaB5bGV56S655qE5YaF5a65XG4gICAgd2luZG93SGVpZ2h0OiAnMTAwJScgLy/miYvmnLrlsY/luZXpq5jluqZcbiAgfTtcblxuICAgIC8vIOWkhOeQhuS8oOmAkui/h+adpeeahOS/oeaBr1xuICBSZWdNc2coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBtc2cgPSBzZWxmLm1zZztcbiAgICBsZXQgdGVzdEFyciA9IFtdO1xuICAgIC8vIOmBh+WIsOS7peS4i+espuWPt+eri+WNs+aIquWPluWGheWuueWIhuautVxuICAgIGxldCByZWcgPSAvW++8jHwsfC5844CCfOOAgXzvvJ9877ybfDt8L10vZztcbiAgICBsZXQgaW5kZXggPSBgYDtcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIHdoaWxlICgoaW5kZXggPSByZWcuZXhlYyhtc2cpICE9IG51bGwpKSB7XG4gICAgICAvLyDmiKrlj5bkuKTkuKrnrKblkIjkuYvpl7TnmoTmloflrZfvvIzliIbmrrXmlL7lhaXmlbDnu4RcbiAgICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCByZWcubGFzdEluZGV4KSk7XG4gICAgICAvLyDmo4DmtYvlubbmlLnlj5jlvZPliY3nrKblj7fntKLlvJVcbiAgICAgIHN0YXJ0ID0gcmVnLmxhc3RJbmRleDtcbiAgICB9XG4gICAgLy8g6I635Y+W5pyA5ZCO5LiA5q615paH5a2XXG4gICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIG1zZy5sZW5ndGgpKTtcbiAgICBzZWxmLnRleHQgPSB0ZXN0QXJyO1xuICAgIHNlbGYuJGFwcGx5KCk7XG4gIH1cblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7fTtcblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGlmIChvcHRpb25zLm1zZykge1xuICAgICAgc2VsZi5tc2cgPSBvcHRpb25zLm1zZztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6buY6K6k55WZ6KiAXG4gICAgICBzZWxmLm1zZyA9IGDlsI/ml7blgJnvvIzniLbkurLlsLHmmK/popflj4LlpKnlpKfmoJHvvIzkuLrmiJHku6zpga7po47mjKHpm6jvvIzplb/lpKfkuobvvIzniLbkurLmiJDkuobmnKznmb7np5HlhajkuabvvIzkuLrmiJHku6znrZTnlpHop6Pmg5HvvIzniLbkurLvvIzmsLjov5zmmK/miJHku6znmoTmlK/mn7HvvIzniLjniLjvvIzoioLml6Xlv6vkuZBgO1xuICAgIH1cbiAgICBzZWxmLlJlZ01zZygpO1xuICAgIHNlbGYuJGFwcGx5KCk7XG5cbiAgICAvL+aYvuekuui9rOWPkVxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5bmiYvmnLrkv6Hmga9cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMubW9kZWwpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMucGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy53aW5kb3dXaWR0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy53aW5kb3dIZWlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMubGFuZ3VhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudmVyc2lvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5wbGF0Zm9ybSk7XG4gICAgICAgIHNlbGYud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIOiuvue9ruiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci50aXRsZSA9ICfniLbkurInO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuZXBuYW1lID0gJyc7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zaW5nZXIgPSAn56235a2Q5YWE5byfJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmNvdmVySW1nVXJsID1cbiAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vYTlkNjM0NDhiODgxZTEyZWFiNDRmZGZjZGJkMWNiN2NfRm90b3IucG5nJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNyYyA9XG4gICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL2F0MjAxMTEyMjkyMjE5NDAubXAzJztcbiAgfVxuXG4gIC8vIOW9k+mhtemdouaYvuekuueahOaXtuWAmVxuICBvblNob3coKSB7XG4gICAgY29uc29sZS5sb2coJ3Nob3cnKTtcbiAgICAvLyDnu6fnu63mkq3mlL7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGxheSgpO1xuICB9XG4gIG9uSGlkZSgpIHtcbiAgICBjb25zb2xlLmxvZygnaGlkZGVuJyk7XG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gIH1cblxuICAvLyDlvZPpobXpnaLliIfmjaLvvIjpmpDol4/vvInnmoTml7blgJlcbiAgb25VbmxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ3VubG9hZCcpO1xuICAgIC8vIOaaguWBnOiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG4gIC8vIOiuvue9ruWIhuS6q+WNoeeJh1xuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KTtcbiAgICB9XG4gICAgLy8g5Y2h54mH5YaF5a65XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn54i25Lqy6IqC5b+r5LmQJyxcbiAgICAgIHBhdGg6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9mYXRoZXI/bXNnPSR7c2VsZi5tc2d9YCxcbiAgICAgIC8vIOWwgemdouWbvlxuICAgICAgaW1hZ2VVcmw6XG4gICAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vJUU3JTg4JUI2JUU0JUJBJUIyJUU4JThBJTgyMTFfRm90b3IuanBnJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgbGV0IGNhcmRfdGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+WtmOWCqOeahOeUqOaIt+S/oeaBr1xuICAgICAgICBsZXQgdXNlcmluZm8gPSB3eC5CYWFTLnN0b3JhZ2UuZ2V0KGB1c2VyaW5mb2ApO1xuICAgICAgICAvLyDorr7nva7lpLTlg4/lkozlkI3np7BcbiAgICAgICAgbGV0IHVzZXJfbmFtZSA9IHVzZXJpbmZvLm5pY2tOYW1lIHx8IGDmnKrnmbvlvZXmuLjlrqJgO1xuICAgICAgICBsZXQgdXNlcl9vcGVuaWQgPSB1c2VyaW5mby5vcGVuaWQgfHwgYOaXoG9wZW5pZGA7XG4gICAgICAgIGxldCB1c2VyX2dlbmRlciA9IHVzZXJpbmZvLmdlbmRlciB8fCBg5pegYDtcbiAgICAgICAgY29uc29sZS5sb2coYOi9rOWPkeaIkOWKn2AsIGNhcmRfdGltZSwgdXNlcl9uYW1lLCB1c2VyX29wZW5pZCwgdXNlcl9nZW5kZXIpO1xuICAgICAgICAvLyDoh6rlrprkuYnkuovku7bkuIrmiqXvvIjliIbkuqvkuovku7bvvIlcbiAgICAgICAgd3gucmVwb3J0QW5hbHl0aWNzKCdzaGFyZV9jYXJkJywge1xuICAgICAgICAgIGNhcmRfbmFtZTogYOeItuS6suiKgui0uuWNoWAsXG4gICAgICAgICAgdXNlcl9uYW1lLFxuICAgICAgICAgIGNhcmRfdGltZSxcbiAgICAgICAgICB1c2VyX29wZW5pZCxcbiAgICAgICAgICB1c2VyX2dlbmRlcixcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOiuvue9ruaooeadv+a2iOaBr+mAmuefpVxuICAgICAgICAvLyDlkJEgdGFibGVJRCDkuLogMzkwMDYg55qE5pWw5o2u6KGo5o+S5YWl5LiA5p2h6K6w5b2VXG4gICAgICAgIGxldCB0YWJsZUlEID0gMzkwMDY7XG4gICAgICAgIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG4gICAgICAgIGxldCBwcm9kdWN0ID0gUHJvZHVjdC5jcmVhdGUoKTtcblxuICAgICAgICAvLyDorr7nva7mlrnlvI/kuIBcbiAgICAgICAgbGV0IGFwcGxlID0ge1xuICAgICAgICAgIHNlbmRfY2FyZDogJ0VtYWlsJyxcbiAgICAgICAgICB1c2VyX25hbWUsXG4gICAgICAgICAgdXNlcl9nZW5kZXIsXG4gICAgICAgICAgdXNlcl9vcGVuaWQsXG4gICAgICAgICAgY2FyZF90aW1lLFxuICAgICAgICAgIGNhcmRfY29udGVudDpzZWxmLm1zZyxcbiAgICAgICAgICBjYXJkX25hbWU6ICfniLbkurLoioLotLrljaEnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHByb2R1Y3RcbiAgICAgICAgICAuc2V0KGFwcGxlKVxuICAgICAgICAgIC5zYXZlKClcbiAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYOWIm+W7uuihqOaIkOWKn2ApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgLy8gZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19