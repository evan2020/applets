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
        self.msg = '\u9001\u4F60\u4E2A\u7CBD\u5B50\uFF0C\u5E78\u8FD0\u94FA\u6EE1\u6E05\u65B0\u7684\u53F6\uFF0C\u5FEB\u4E50\u88F9\u6210\u7F8E\u5473\u7684\u9985\uFF0C\u95FB\u8D77\u6765\u662F\u6E29\u99A8\uFF0C\u5403\u8D77\u6765\u662F\u751C\u871C\uFF0C\u54BD\u4E0B\u53BB\u662F\u5E78\u798F\uFF0C\u56DE\u5473\u7740\u662F\u7F8E\u6EE1\uFF0C\u7AEF\u5348\u8282\u5FEB\u4E50\uFF01';
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
          self.windowHeight = res.windowHeight;
        }
      });

      // 设置背景音乐
      var backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.title = '忆端午';
      backgroundAudioManager.epname = '';
      backgroundAudioManager.singer = '罗中旭';
      backgroundAudioManager.coverImgUrl = 'https://om83cysj8.qnssl.com/fpic1467_Fotor.jpg';
      backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/95173.mp3';
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
        title: '端午节快乐',
        path: '/appletsA/pages/details/duanwu?msg=' + self.msg,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1YW53dS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIm1zZyIsInRleHQiLCJ3aW5kb3dIZWlnaHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJzZWxmIiwidGVzdEFyciIsInJlZyIsImluZGV4Iiwic3RhcnQiLCJleGVjIiwicHVzaCIsInN1YnN0cmluZyIsImxhc3RJbmRleCIsImxlbmd0aCIsIiRhcHBseSIsIm9wdGlvbnMiLCJSZWdNc2ciLCJ3eCIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsImJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJnZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwidGl0bGUiLCJlcG5hbWUiLCJzaW5nZXIiLCJjb3ZlckltZ1VybCIsInNyYyIsImNvbnNvbGUiLCJsb2ciLCJwbGF5IiwicGF1c2UiLCJmcm9tIiwidGFyZ2V0IiwicGF0aCIsImltYWdlVXJsIiwiY2FyZF90aW1lIiwiRGF0ZSIsInVzZXJpbmZvIiwiQmFhUyIsInN0b3JhZ2UiLCJnZXQiLCJ1c2VyX25hbWUiLCJuaWNrTmFtZSIsInVzZXJfb3BlbmlkIiwib3BlbmlkIiwidXNlcl9nZW5kZXIiLCJnZW5kZXIiLCJyZXBvcnRBbmFseXRpY3MiLCJjYXJkX25hbWUiLCJ0YWJsZUlEIiwiUHJvZHVjdCIsIlRhYmxlT2JqZWN0IiwicHJvZHVjdCIsImNyZWF0ZSIsImFwcGxlIiwic2VuZF9jYXJkIiwiY2FyZF9jb250ZW50Iiwic2V0Iiwic2F2ZSIsInRoZW4iLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUs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LFlBQVlKLFNBQVNLLFFBQVQsb0NBQWhCO0FBQ0EsY0FBSUMsY0FBY04sU0FBU08sTUFBVCxrQkFBbEI7QUFDQSxjQUFJQyxjQUFjUixTQUFTUyxNQUFULFlBQWxCO0FBQ0FuQixrQkFBUUMsR0FBUiw2QkFBb0JPLFNBQXBCLEVBQStCTSxTQUEvQixFQUEwQ0UsV0FBMUMsRUFBdURFLFdBQXZEO0FBQ0E7QUFDQS9CLGFBQUdpQyxlQUFILENBQW1CLFlBQW5CLEVBQWlDO0FBQy9CQyx1REFEK0I7QUFFL0JQLGdDQUYrQjtBQUcvQk4sZ0NBSCtCO0FBSS9CUSxvQ0FKK0I7QUFLL0JFO0FBTCtCLFdBQWpDO0FBT0E7QUFDQTtBQUNBLGNBQUlJLFVBQVUsS0FBZDtBQUNBLGNBQUlDLFVBQVUsSUFBSXBDLEdBQUd3QixJQUFILENBQVFhLFdBQVosQ0FBd0JGLE9BQXhCLENBQWQ7QUFDQSxjQUFJRyxVQUFVRixRQUFRRyxNQUFSLEVBQWQ7O0FBRUE7QUFDQSxjQUFJQyxRQUFRO0FBQ1ZDLHVCQUFXLE9BREQ7QUFFVmQsZ0NBRlU7QUFHVkksb0NBSFU7QUFJVkYsb0NBSlU7QUFLVlIsZ0NBTFU7QUFNVnFCLDBCQUFhdkQsS0FBS04sR0FOUjtBQU9WcUQsdUJBQVc7QUFQRCxXQUFaOztBQVVBSSxrQkFDR0ssR0FESCxDQUNPSCxLQURQLEVBRUdJLElBRkgsR0FHR0MsSUFISCxDQUlJLGVBQU87QUFDTDtBQUNBaEMsb0JBQVFDLEdBQVI7QUFDRCxXQVBMLEVBUUksZUFBTztBQUNMO0FBQ0QsV0FWTDtBQVlELFNBcERJO0FBcURMZ0MsY0FBTSxjQUFTekMsR0FBVCxFQUFjO0FBQ2xCO0FBQ0Q7QUF2REksT0FBUDtBQXlERDs7OztFQTlKZ0MsZUFBSzBDLEk7O2tCQUFuQnZFLEsiLCJmaWxlIjoiZHVhbnd1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+err+WNiCdcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgbXNnOiBgYCwgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICB0ZXh0OiBgYCwgLy/moLzlvI/ljJbkuYvlkI7opoHlsZXnpLrnmoTlhoXlrrlcbiAgICB3aW5kb3dIZWlnaHQ6ICcxMDAlJyAvL+aJi+acuuWxj+W5lemrmOW6plxuICB9O1xuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHt9O1xuXG4gIC8vIOWkhOeQhuS8oOmAkui/h+adpeeahOS/oeaBr1xuICBSZWdNc2coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBtc2cgPSBzZWxmLm1zZztcbiAgICBsZXQgdGVzdEFyciA9IFtdO1xuICAgIC8vIOmBh+WIsOS7peS4i+espuWPt+eri+WNs+aIquWPluWGheWuueWIhuautVxuICAgIGxldCByZWcgPSAvW++8jHwsfC5844CCfOOAgXzvvJ9877ybfDt8L10vZztcbiAgICBsZXQgaW5kZXggPSBgYDtcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIHdoaWxlICgoaW5kZXggPSByZWcuZXhlYyhtc2cpICE9IG51bGwpKSB7XG4gICAgICAvLyDmiKrlj5bkuKTkuKrnrKblkIjkuYvpl7TnmoTmloflrZfvvIzliIbmrrXmlL7lhaXmlbDnu4RcbiAgICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCByZWcubGFzdEluZGV4KSk7XG4gICAgICAvLyDmo4DmtYvlubbmlLnlj5jlvZPliY3nrKblj7fntKLlvJVcbiAgICAgIHN0YXJ0ID0gcmVnLmxhc3RJbmRleDtcbiAgICB9XG4gICAgLy8g6I635Y+W5pyA5ZCO5LiA5q615paH5a2XXG4gICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIG1zZy5sZW5ndGgpKTtcbiAgICBzZWxmLnRleHQgPSB0ZXN0QXJyO1xuICAgIHNlbGYuJGFwcGx5KCk7XG4gIH1cblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGlmIChvcHRpb25zLm1zZykge1xuICAgICAgc2VsZi5tc2cgPSBvcHRpb25zLm1zZztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6buY6K6k55WZ6KiAXG4gICAgICBzZWxmLm1zZyA9IGDpgIHkvaDkuKrnsr3lrZDvvIzlubjov5Dpk7rmu6HmuIXmlrDnmoTlj7bvvIzlv6vkuZDoo7nmiJDnvo7lkbPnmoTppoXvvIzpl7votbfmnaXmmK/muKnppqjvvIzlkIPotbfmnaXmmK/nlJzonJzvvIzlkr3kuIvljrvmmK/lubjnpo/vvIzlm57lkbPnnYDmmK/nvo7mu6HvvIznq6/ljYjoioLlv6vkuZDvvIFgO1xuICAgIH1cbiAgICBzZWxmLlJlZ01zZygpO1xuICAgIHNlbGYuJGFwcGx5KCk7XG5cbiAgICAvL+aYvuekuui9rOWPkVxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5bmiYvmnLrkv6Hmga9cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLndpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyDorr7nva7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIudGl0bGUgPSAn5b+G56uv5Y2IJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmVwbmFtZSA9ICcnO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuc2luZ2VyID0gJ+e9l+S4reaXrSc7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5jb3ZlckltZ1VybCA9XG4gICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL2ZwaWMxNDY3X0ZvdG9yLmpwZyc7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zcmMgPSAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzk1MTczLm1wMyc7XG4gIH1cblxuICAvLyDlvZPpobXpnaLmmL7npLrnmoTml7blgJlcbiAgb25TaG93KCkge1xuICAgIGNvbnNvbGUubG9nKCdzaG93Jyk7XG4gICAgLy8g57un57ut5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBsYXkoKTtcbiAgfVxuICBvbkhpZGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2hpZGRlbicpO1xuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG5cbiAgLy8g5b2T6aG16Z2i5YiH5o2i77yI6ZqQ6JeP77yJ55qE5pe25YCZXG4gIG9uVW5sb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCd1bmxvYWQnKTtcbiAgICAvLyDmmoLlgZzog4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgfVxuICAvLyDorr7nva7liIbkuqvljaHniYdcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldCk7XG4gICAgfVxuICAgIC8vIOWNoeeJh+WGheWuuVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+err+WNiOiKguW/q+S5kCcsXG4gICAgICBwYXRoOiBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvZHVhbnd1P21zZz0ke3NlbGYubXNnfWAsXG4gICAgICAvLyDlsIHpnaLlm75cbiAgICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzEyMUYyTkMtMC5qcGcnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeaIkOWKn1xuICAgICAgICBsZXQgY2FyZF90aW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgLy8g6I635Y+W55So5oi35a2Y5YKo55qE55So5oi35L+h5oGvXG4gICAgICAgIGxldCB1c2VyaW5mbyA9IHd4LkJhYVMuc3RvcmFnZS5nZXQoYHVzZXJpbmZvYCk7XG4gICAgICAgIC8vIOiuvue9ruWktOWDj+WSjOWQjeensFxuICAgICAgICBsZXQgdXNlcl9uYW1lID0gdXNlcmluZm8ubmlja05hbWUgfHwgYOacqueZu+W9lea4uOWuomA7XG4gICAgICAgIGxldCB1c2VyX29wZW5pZCA9IHVzZXJpbmZvLm9wZW5pZCB8fCBg5pegb3BlbmlkYDtcbiAgICAgICAgbGV0IHVzZXJfZ2VuZGVyID0gdXNlcmluZm8uZ2VuZGVyIHx8IGDml6BgO1xuICAgICAgICBjb25zb2xlLmxvZyhg6L2s5Y+R5oiQ5YqfYCwgY2FyZF90aW1lLCB1c2VyX25hbWUsIHVzZXJfb3BlbmlkLCB1c2VyX2dlbmRlcik7XG4gICAgICAgIC8vIOiHquWumuS5ieS6i+S7tuS4iuaKpe+8iOWIhuS6q+S6i+S7tu+8iVxuICAgICAgICB3eC5yZXBvcnRBbmFseXRpY3MoJ3NoYXJlX2NhcmQnLCB7XG4gICAgICAgICAgY2FyZF9uYW1lOiBg56uv5Y2I6IqC6LS65Y2hYCxcbiAgICAgICAgICB1c2VyX25hbWUsXG4gICAgICAgICAgY2FyZF90aW1lLFxuICAgICAgICAgIHVzZXJfb3BlbmlkLFxuICAgICAgICAgIHVzZXJfZ2VuZGVyLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8g6K6+572u5qih5p2/5raI5oGv6YCa55+lXG4gICAgICAgIC8vIOWQkSB0YWJsZUlEIOS4uiAzOTAwNiDnmoTmlbDmja7ooajmj5LlhaXkuIDmnaHorrDlvZVcbiAgICAgICAgbGV0IHRhYmxlSUQgPSAzOTAwNjtcbiAgICAgICAgbGV0IFByb2R1Y3QgPSBuZXcgd3guQmFhUy5UYWJsZU9iamVjdCh0YWJsZUlEKTtcbiAgICAgICAgbGV0IHByb2R1Y3QgPSBQcm9kdWN0LmNyZWF0ZSgpO1xuXG4gICAgICAgIC8vIOiuvue9ruaWueW8j+S4gFxuICAgICAgICBsZXQgYXBwbGUgPSB7XG4gICAgICAgICAgc2VuZF9jYXJkOiAnRW1haWwnLFxuICAgICAgICAgIHVzZXJfbmFtZSxcbiAgICAgICAgICB1c2VyX2dlbmRlcixcbiAgICAgICAgICB1c2VyX29wZW5pZCxcbiAgICAgICAgICBjYXJkX3RpbWUsXG4gICAgICAgICAgY2FyZF9jb250ZW50OnNlbGYubXNnLFxuICAgICAgICAgIGNhcmRfbmFtZTogJ+err+WNiOiKgui0uuWNoScsXG4gICAgICAgIH07XG5cbiAgICAgICAgcHJvZHVjdFxuICAgICAgICAgIC5zZXQoYXBwbGUpXG4gICAgICAgICAgLnNhdmUoKVxuICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg5Yib5bu66KGo5oiQ5YqfYClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAvLyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HlpLHotKVcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=