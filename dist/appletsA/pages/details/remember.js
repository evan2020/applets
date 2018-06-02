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
      navigationBarTitleText: '纪念日'
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
        self.msg = '\u4EB2\u7231\u7684\uFF0C\u53BB\u5E74\u7684\u4ECA\u5929\uFF0C\u6211\u4EEC\u76F8\u9047\u4E86\uFF0C\u4E00\u8DEF\u8D70\u5230\u4ECA\u5929\uFF0C\u8C22\u8C22\u6709\u4F60\u7684\u966A\u4F34';
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
      backgroundAudioManager.title = '123我爱你';
      backgroundAudioManager.epname = '';
      backgroundAudioManager.singer = '新乐尘符';
      backgroundAudioManager.coverImgUrl = 'https://om83cysj8.qnssl.com/123jjdln%20%28153%29_Fotor.jpg';
      backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/-%20123%E6%88%91%E7%88%B1%E4%BD%A0%E8%B6%85%E7%94%9C%E7%9A%84%E4%B8%80%E9%A6%96%E6%AD%8C_%E9%93%83%E5%A3%B0%E4%B9%8B%E5%AE%B6cnwav.aac';
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
        title: '我们的纪念',
        path: '/appletsA/pages/details/remember?msg=' + self.msg,
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/f4252994162b7a1dd672cd585da901b9.jpg',
        success: function success(res) {
          // 转发成功
        },
        fail: function fail(res) {
          // 转发失败
        }
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/remember'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbWVtYmVyLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwibXNnIiwidGV4dCIsIndpbmRvd0hlaWdodCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInNlbGYiLCJ0ZXN0QXJyIiwicmVnIiwiaW5kZXgiLCJzdGFydCIsImV4ZWMiLCJwdXNoIiwic3Vic3RyaW5nIiwibGFzdEluZGV4IiwibGVuZ3RoIiwiJGFwcGx5Iiwib3B0aW9ucyIsIlJlZ01zZyIsInd4Iiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1vZGVsIiwicGl4ZWxSYXRpbyIsIndpbmRvd1dpZHRoIiwibGFuZ3VhZ2UiLCJ2ZXJzaW9uIiwicGxhdGZvcm0iLCJiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwiZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlciIsInRpdGxlIiwiZXBuYW1lIiwic2luZ2VyIiwiY292ZXJJbWdVcmwiLCJzcmMiLCJwbGF5IiwicGF1c2UiLCJmcm9tIiwidGFyZ2V0IiwicGF0aCIsImltYWdlVXJsIiwiZmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxhQURLLEVBQ0k7QUFDVEMsY0FGSyxFQUVLO0FBQ1ZDLG9CQUFjLE1BSFQsQ0FHZ0I7QUFIaEIsSyxRQTJCUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7Ozs7QUF6QlA7NkJBQ087QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJTixNQUFNTSxLQUFLTixHQUFmO0FB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Q0Q7QUFYSSxPQUFQO0FBYUQ7Ozs7RUExSGdDLGVBQUt1QixJOztrQkFBbkJwRCxLIiwiZmlsZSI6InJlbWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e6quW/teaXpSdcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgbXNnOiBgYCwgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICB0ZXh0OiBgYCwgLy/moLzlvI/ljJbkuYvlkI7opoHlsZXnpLrnmoTlhoXlrrlcbiAgICB3aW5kb3dIZWlnaHQ6ICcxMDAlJyAvL+aJi+acuuWxj+W5lemrmOW6plxuICB9O1xuXG4gICAgLy8g5aSE55CG5Lyg6YCS6L+H5p2l55qE5L+h5oGvXG4gIFJlZ01zZygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IG1zZyA9IHNlbGYubXNnO1xuICAgIGxldCB0ZXN0QXJyID0gW107XG4gICAgLy8g6YGH5Yiw5Lul5LiL56ym5Y+356uL5Y2z5oiq5Y+W5YaF5a655YiG5q61XG4gICAgbGV0IHJlZyA9IC9b77yMfCx8LnzjgIJ844CBfO+8n3zvvJt8O3wvXS9nO1xuICAgIGxldCBpbmRleCA9IGBgO1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgd2hpbGUgKChpbmRleCA9IHJlZy5leGVjKG1zZykgIT0gbnVsbCkpIHtcbiAgICAgIC8vIOaIquWPluS4pOS4quespuWQiOS5i+mXtOeahOaWh+Wtl++8jOWIhuauteaUvuWFpeaVsOe7hFxuICAgICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIHJlZy5sYXN0SW5kZXgpKTtcbiAgICAgIC8vIOajgOa1i+W5tuaUueWPmOW9k+WJjeespuWPt+e0ouW8lVxuICAgICAgc3RhcnQgPSByZWcubGFzdEluZGV4O1xuICAgIH1cbiAgICAvLyDojrflj5bmnIDlkI7kuIDmrrXmloflrZdcbiAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgbXNnLmxlbmd0aCkpO1xuICAgIHNlbGYudGV4dCA9IHRlc3RBcnI7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgfVxuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHt9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKG9wdGlvbnMubXNnKSB7XG4gICAgICBzZWxmLm1zZyA9IG9wdGlvbnMubXNnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDpu5jorqTnlZnoqIBcbiAgICAgIHNlbGYubXNnID0gYOS6sueIseeahO+8jOWOu+W5tOeahOS7iuWkqe+8jOaIkeS7rOebuOmBh+S6hu+8jOS4gOi3r+i1sOWIsOS7iuWkqe+8jOiwouiwouacieS9oOeahOmZquS8tGA7XG4gICAgfVxuICAgIHNlbGYuUmVnTXNnKCk7XG4gICAgc2VsZi4kYXBwbHkoKTtcblxuICAgIC8v5pi+56S66L2s5Y+RXG4gICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIOiOt+WPluaJi+acuuS/oeaBr1xuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5tb2RlbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5waXhlbFJhdGlvKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLndpbmRvd1dpZHRoKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLndpbmRvd0hlaWdodCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5sYW5ndWFnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy52ZXJzaW9uKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnBsYXRmb3JtKTtcbiAgICAgICAgc2VsZi53aW5kb3dIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8g6K6+572u6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnRpdGxlID0gJzEyM+aIkeeIseS9oCc7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5lcG5hbWUgPSAnJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNpbmdlciA9ICfmlrDkuZDlsJjnrKYnO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuY292ZXJJbWdVcmwgPVxuICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8xMjNqamRsbiUyMCUyODE1MyUyOV9Gb3Rvci5qcGcnO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuc3JjID1cbiAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vLSUyMDEyMyVFNiU4OCU5MSVFNyU4OCVCMSVFNCVCRCVBMCVFOCVCNiU4NSVFNyU5NCU5QyVFNyU5QSU4NCVFNCVCOCU4MCVFOSVBNiU5NiVFNiVBRCU4Q18lRTklOTMlODMlRTUlQTMlQjAlRTQlQjklOEIlRTUlQUUlQjZjbndhdi5hYWMnO1xuICB9XG5cbiAgLy8g5b2T6aG16Z2i5pi+56S655qE5pe25YCZXG4gIG9uU2hvdygpIHtcbiAgICBjb25zb2xlLmxvZygnc2hvdycpO1xuICAgIC8vIOe7p+e7reaSreaUvuiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wbGF5KCk7XG4gIH1cbiAgb25IaWRlKCkge1xuICAgIGNvbnNvbGUubG9nKCdoaWRkZW4nKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcbiAgfVxuXG4gIC8vIOW9k+mhtemdouWIh+aNou+8iOmakOiXj++8ieeahOaXtuWAmVxuICBvblVubG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygndW5sb2FkJyk7XG4gICAgLy8g5pqC5YGc6IOM5pmv6Z+z5LmQXG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gIH1cbiAgLy8g6K6+572u5YiG5Lqr5Y2h54mHXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpO1xuICAgIH1cbiAgICAvLyDljaHniYflhoXlrrlcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfmiJHku6znmoTnuqrlv7UnLFxuICAgICAgcGF0aDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL3JlbWVtYmVyP21zZz0ke3NlbGYubXNnfWAsXG4gICAgICAvLyDlsIHpnaLlm75cbiAgICAgIGltYWdlVXJsOlxuICAgICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL2Y0MjUyOTk0MTYyYjdhMWRkNjcyY2Q1ODVkYTkwMWI5LmpwZycsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==