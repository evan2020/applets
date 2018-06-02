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
      navigationBarTitleText: '生日快乐'
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
        self.msg = '\u65F6\u5149\u8F6E\u8F6C\uFF0C\u53C8\u957F\u5927\u4E00\u5C81\uFF0C\u53BB\u5E74\u6211\u5728\uFF0C\u4ECA\u5929\u6211\u5728\uFF0C\u4EE5\u540E\u6211\u90FD\u5728\uFF0C\u795D\u4F60\u751F\u65E5\u5FEB\u4E50';
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
      backgroundAudioManager.title = '祝我生日快乐';
      backgroundAudioManager.epname = '';
      backgroundAudioManager.singer = '温岚';
      backgroundAudioManager.coverImgUrl = 'https://om83cysj8.qnssl.com/123jjdln%20%28153%29_Fotor.jpg';
      backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/321204083241074.mp3';
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
        title: '生日快乐',
        path: '/appletsA/pages/details/birthday?msg=' + self.msg,
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/a58b9673c02849baaaa007d85de86aaf.jpeg',
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
            card_name: '\u751F\u65E5\u8D3A\u5361',
            user_name: user_name,
            card_time: card_time,
            user_openid: user_openid,
            user_gender: user_gender
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/birthday'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpcnRoZGF5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwibXNnIiwidGV4dCIsIndpbmRvd0hlaWdodCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInNlbGYiLCJ0ZXN0QXJyIiwicmVnIiwiaW5kZXgiLCJzdGFydCIsImV4ZWMiLCJwdXNoIiwic3Vic3RyaW5nIiwibGFzdEluZGV4IiwibGVuZ3RoIiwiJGFwcGx5Iiwib3B0aW9ucyIsIlJlZ01zZyIsInd4Iiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1vZGVsIiwicGl4ZWxSYXRpbyIsIndpbmRvd1dpZHRoIiwibGFuZ3VhZ2UiLCJ2ZXJzaW9uIiwicGxhdGZvcm0iLCJiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwiZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlciIsInRpdGxlIiwiZXBuYW1lIiwic2luZ2VyIiwiY292ZXJJbWdVcmwiLCJzcmMiLCJwbGF5IiwicGF1c2UiLCJmcm9tIiwidGFyZ2V0IiwicGF0aCIsImltYWdlVXJsIiwiY2FyZF90aW1lIiwiRGF0ZSIsInVzZXJpbmZvIiwiQmFhUyIsInN0b3JhZ2UiLCJnZXQiLCJ1c2VyX25hbWUiLCJuaWNrTmFtZSIsInVzZXJfb3BlbmlkIiwib3BlbmlkIiwidXNlcl9nZW5kZXIiLCJnZW5kZXIiLCJyZXBvcnRBbmFseXRpY3MiLCJjYXJkX25hbWUiLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGFBREssRUFDSTtBQUNUQyxjQUZL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TztBQUNMUixlQUFPLE1BREY7QUFFTFMsd0RBQThDdEMsS0FBS04sR0FGOUM7QUFHTDtBQUNBNkMsa0JBQ0UsbUVBTEc7QUFNTHRCLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckI7QUFDQSxjQUFJc0IsWUFBWSxJQUFJQyxJQUFKLEVBQWhCO0FBQ0E7QUFDQSxjQUFJQyxXQUFXN0IsR0FBRzhCLElBQUgsQ0FBUUMsT0FBUixDQUFnQkMsR0FBaEIsWUFBZjtBQUNBO0FBQ0EsY0FBSUMsWUFBWUosU0FBU0ssUUFBVCxvQ0FBaEI7QUFDQSxjQUFJQyxjQUFjTixTQUFTTyxNQUFULGtCQUFsQjtBQUNBLGNBQUlDLGNBQWNSLFNBQVNTLE1BQVQsWUFBbEI7QUFDQWhDLGtCQUFRQyxHQUFSLDZCQUFvQm9CLFNBQXBCLEVBQStCTSxTQUEvQixFQUEwQ0UsV0FBMUMsRUFBdURFLFdBQXZEO0FBQ0E7QUFDQXJDLGFBQUd1QyxlQUFILENBQW1CLFlBQW5CLEVBQWlDO0FBQy9CQyxpREFEK0I7QUFFL0JQLGdDQUYrQjtBQUcvQk4sZ0NBSCtCO0FBSS9CUSxvQ0FKK0I7QUFLL0JFO0FBTCtCLFdBQWpDO0FBT0QsU0F4Qkk7QUF5QkxJLGNBQU0sY0FBU3BDLEdBQVQsRUFBYztBQUNsQjtBQUNEO0FBM0JJLE9BQVA7QUE2QkQ7Ozs7RUExSWdDLGVBQUtxQyxJOztrQkFBbkJsRSxLIiwiZmlsZSI6ImJpcnRoZGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eUn+aXpeW/q+S5kCdcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgbXNnOiBgYCwgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICB0ZXh0OiBgYCwgLy/moLzlvI/ljJbkuYvlkI7opoHlsZXnpLrnmoTlhoXlrrlcbiAgICB3aW5kb3dIZWlnaHQ6ICcxMDAlJyAvL+aJi+acuuWxj+W5lemrmOW6plxuICB9O1xuXG4gICAgLy8g5aSE55CG5Lyg6YCS6L+H5p2l55qE5L+h5oGvXG4gIFJlZ01zZygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IG1zZyA9IHNlbGYubXNnO1xuICAgIGxldCB0ZXN0QXJyID0gW107XG4gICAgLy8g6YGH5Yiw5Lul5LiL56ym5Y+356uL5Y2z5oiq5Y+W5YaF5a655YiG5q61XG4gICAgbGV0IHJlZyA9IC9b77yMfCx8LnzjgIJ844CBfO+8n3zvvJt8O3wvXS9nO1xuICAgIGxldCBpbmRleCA9IGBgO1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgd2hpbGUgKChpbmRleCA9IHJlZy5leGVjKG1zZykgIT0gbnVsbCkpIHtcbiAgICAgIC8vIOaIquWPluS4pOS4quespuWQiOS5i+mXtOeahOaWh+Wtl++8jOWIhuauteaUvuWFpeaVsOe7hFxuICAgICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIHJlZy5sYXN0SW5kZXgpKTtcbiAgICAgIC8vIOajgOa1i+W5tuaUueWPmOW9k+WJjeespuWPt+e0ouW8lVxuICAgICAgc3RhcnQgPSByZWcubGFzdEluZGV4O1xuICAgIH1cbiAgICAvLyDojrflj5bmnIDlkI7kuIDmrrXmloflrZdcbiAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgbXNnLmxlbmd0aCkpO1xuICAgIHNlbGYudGV4dCA9IHRlc3RBcnI7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgfVxuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHt9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKG9wdGlvbnMubXNnKSB7XG4gICAgICBzZWxmLm1zZyA9IG9wdGlvbnMubXNnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDpu5jorqTnlZnoqIBcbiAgICAgIHNlbGYubXNnID0gYOaXtuWFiei9rui9rO+8jOWPiOmVv+Wkp+S4gOWyge+8jOWOu+W5tOaIkeWcqO+8jOS7iuWkqeaIkeWcqO+8jOS7peWQjuaIkemDveWcqO+8jOelneS9oOeUn+aXpeW/q+S5kGA7XG4gICAgfVxuICAgIHNlbGYuUmVnTXNnKCk7XG4gICAgc2VsZi4kYXBwbHkoKTtcblxuICAgIC8v5pi+56S66L2s5Y+RXG4gICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIOiOt+WPluaJi+acuuS/oeaBr1xuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5tb2RlbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5waXhlbFJhdGlvKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLndpbmRvd1dpZHRoKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLndpbmRvd0hlaWdodCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5sYW5ndWFnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy52ZXJzaW9uKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnBsYXRmb3JtKTtcbiAgICAgICAgc2VsZi53aW5kb3dIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8g6K6+572u6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnRpdGxlID0gJ+elneaIkeeUn+aXpeW/q+S5kCc7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5lcG5hbWUgPSAnJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNpbmdlciA9ICfmuKnlsponO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuY292ZXJJbWdVcmwgPVxuICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8xMjNqamRsbiUyMCUyODE1MyUyOV9Gb3Rvci5qcGcnO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuc3JjID1cbiAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMzIxMjA0MDgzMjQxMDc0Lm1wMyc7XG4gIH1cblxuICAvLyDlvZPpobXpnaLmmL7npLrnmoTml7blgJlcbiAgb25TaG93KCkge1xuICAgIGNvbnNvbGUubG9nKCdzaG93Jyk7XG4gICAgLy8g57un57ut5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBsYXkoKTtcbiAgfVxuICBvbkhpZGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2hpZGRlbicpO1xuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG5cbiAgLy8g5b2T6aG16Z2i5YiH5o2i77yI6ZqQ6JeP77yJ55qE5pe25YCZXG4gIG9uVW5sb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCd1bmxvYWQnKTtcbiAgICAvLyDmmoLlgZzog4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgfVxuICAvLyDorr7nva7liIbkuqvljaHniYdcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldCk7XG4gICAgfVxuICAgIC8vIOWNoeeJh+WGheWuuVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+eUn+aXpeW/q+S5kCcsXG4gICAgICBwYXRoOiBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvYmlydGhkYXk/bXNnPSR7c2VsZi5tc2d9YCxcbiAgICAgIC8vIOWwgemdouWbvlxuICAgICAgaW1hZ2VVcmw6XG4gICAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vYTU4Yjk2NzNjMDI4NDliYWFhYTAwN2Q4NWRlODZhYWYuanBlZycsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgIGxldCBjYXJkX3RpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAvLyDojrflj5bnlKjmiLflrZjlgqjnmoTnlKjmiLfkv6Hmga9cbiAgICAgICAgbGV0IHVzZXJpbmZvID0gd3guQmFhUy5zdG9yYWdlLmdldChgdXNlcmluZm9gKTtcbiAgICAgICAgLy8g6K6+572u5aS05YOP5ZKM5ZCN56ewXG4gICAgICAgIGxldCB1c2VyX25hbWUgPSB1c2VyaW5mby5uaWNrTmFtZSB8fCBg5pyq55m75b2V5ri45a6iYDtcbiAgICAgICAgbGV0IHVzZXJfb3BlbmlkID0gdXNlcmluZm8ub3BlbmlkIHx8IGDml6BvcGVuaWRgO1xuICAgICAgICBsZXQgdXNlcl9nZW5kZXIgPSB1c2VyaW5mby5nZW5kZXIgfHwgYOaXoGA7XG4gICAgICAgIGNvbnNvbGUubG9nKGDovazlj5HmiJDlip9gLCBjYXJkX3RpbWUsIHVzZXJfbmFtZSwgdXNlcl9vcGVuaWQsIHVzZXJfZ2VuZGVyKTtcbiAgICAgICAgLy8g6Ieq5a6a5LmJ5LqL5Lu25LiK5oql77yI5YiG5Lqr5LqL5Lu277yJXG4gICAgICAgIHd4LnJlcG9ydEFuYWx5dGljcygnc2hhcmVfY2FyZCcsIHtcbiAgICAgICAgICBjYXJkX25hbWU6IGDnlJ/ml6XotLrljaFgLFxuICAgICAgICAgIHVzZXJfbmFtZSxcbiAgICAgICAgICBjYXJkX3RpbWUsXG4gICAgICAgICAgdXNlcl9vcGVuaWQsXG4gICAgICAgICAgdXNlcl9nZW5kZXIsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HlpLHotKVcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=