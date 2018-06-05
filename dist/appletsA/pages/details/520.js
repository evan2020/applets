'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
      navigationBarTitleText: '520'
    }, _this.components = {}, _this.data = {
      msg: '', //输入框的内容
      text: '', //格式化之后要展示的内容
      recordUrl: '', //录音云文件地址
      musicState: 'running', //音乐图片动画是否暂停
      windowHeight: '100%', //手机屏幕高度
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
          backgroundAudioManager.title = '就是爱你';
          backgroundAudioManager.epname = '';
          backgroundAudioManager.singer = '陶喆';
          backgroundAudioManager.coverImgUrl = 'https://om83cysj8.qnssl.com/123jjdln%20%28153%29_Fotor.jpg';
          backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/552.mp3';
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
        self.msg = '\u4ED6\u4EEC\u8BF4\uFF0C\u8FD9\u4E2A\u4E16\u754C\u4E0A\uFF0C\u6D77\u6700\u6DF1\u9083\uFF0C\u5E72\u51C0\u53C8\u900F\u660E\uFF0C\u6211\u60F3\uFF0C\u90A3\u662F\u4ED6\u4EEC\u6CA1\u89C1\u8FC7\u4F60\u7684\u773C\u775B';
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
        console.log(res.target);
      }
      // 卡片内容
      return {
        title: '我爱你',
        path: '/appletsA/pages/details/520?msg=' + self.msg + '&recordUrl=' + self.recordUrl + '&timeCheckVal=' + self.timeCheckVal + '&timeNow=' + self.timeNow,
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/33809_2014021217065921537600.jpg',
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
            card_name: '520',
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
            card_name: '520'
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/520'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjUyMC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIm1zZyIsInRleHQiLCJyZWNvcmRVcmwiLCJtdXNpY1N0YXRlIiwid2luZG93SGVpZ2h0IiwidGltZU5vdyIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwid3giLCJnZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwicGxheSIsInBhdXNlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidG9nZ2xlTXVzaWMiLCJzZWxmIiwiJGFwcGx5IiwicmVjb3JkUGxheSIsImlubmVyQXVkaW9Db250ZXh0IiwiY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQiLCJhdXRvcGxheSIsInNyYyIsIm9uUGxheSIsIm9uRXJyb3IiLCJyZXMiLCJlcnJNc2ciLCJlcnJDb2RlIiwiZXZlbnRzIiwidGVzdEFyciIsInJlZyIsImluZGV4Iiwic3RhcnQiLCJleGVjIiwicHVzaCIsInN1YnN0cmluZyIsImxhc3RJbmRleCIsImxlbmd0aCIsIm9wdGlvbnMiLCJ0aW1lQ2hlY2tOb3ciLCJEYXRlIiwiZ2V0VGltZSIsIm5vd1RpbWUiLCJwYXJzZUludCIsInRpbWVDaGVja1ZhbCIsInRpdGxlIiwiZXBuYW1lIiwic2luZ2VyIiwiY292ZXJJbWdVcmwiLCJyZWRpcmVjdFRvIiwidXJsIiwiUmVnTXNnIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwibW9kZWwiLCJwaXhlbFJhdGlvIiwid2luZG93V2lkdGgiLCJsYW5ndWFnZSIsInZlcnNpb24iLCJwbGF0Zm9ybSIsImZyb20iLCJ0YXJnZXQiLCJwYXRoIiwiaW1hZ2VVcmwiLCJjYXJkX3RpbWUiLCJ1c2VyaW5mbyIsIkJhYVMiLCJzdG9yYWdlIiwiZ2V0IiwidXNlcl9uYW1lIiwibmlja05hbWUiLCJ1c2VyX29wZW5pZCIsIm9wZW5pZCIsInVzZXJfZ2VuZGVyIiwiZ2VuZGVyIiwicmVwb3J0QW5hbHl0aWNzIiwiY2FyZF9uYW1lIiwidGFibGVJRCIsIlByb2R1Y3QiLCJUYWJsZU9iamVjdCIsInByb2R1Y3QiLCJjcmVhdGUiLCJhcHBsZSIsInNlbmRfY2FyZCIsImNhcmRfY29udGVudCIsInNldCIsInNhdmUiLCJ0aGVuIiwiZmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGFBREssRUFDSTtBQUNUQyxjQUZLLEVBRUs7QUFDVkMsbUJBSEssRUFHVTtBQUNmQywyQkFKSyxFQUlrQjtBQUN2QkMsb0JBQWMsTUFMVCxFQUtpQjtBQUN0QkMsZUFBUyxFQU5KLENBTU87QUFOUCxLLFFBU1BDLEssR0FBUTtBQUNOO0FBQ0FILGdCQUZNLHNCQUVLSSxRQUZMLEVBRWVDLFFBRmYsRUFFeUI7QUFDN0JDLGdCQUFRQyxHQUFSLHdCQUFpQ0YsUUFBakMsWUFBZ0RELFFBQWhEO0FBQ0EsWUFBTUkseUJBQXlCQyxHQUFHQyx5QkFBSCxFQUEvQjtBQUNBLFlBQUlOLHFCQUFKLEVBQTJCO0FBQ3pCSSxpQ0FBdUJHLElBQXZCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xILGlDQUF1QkksS0FBdkI7QUFDRDtBQUNGO0FBVkssSyxRQWtDUkMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1I7QUFDQUMsaUJBRlEseUJBRU07QUFDWixZQUFJQyxPQUFPLElBQVg7QUFDQVYsZ0JBQVFDLEdBQVI7QUFDQSxZQUFJUyxLQUFLaEIsVUFBTCxJQUFtQixTQUF2QixFQUFrQztBQUNoQ2dCLGVBQUtoQixVQUFMO0FBQ0QsU0FGRCxNQUVPO0FBQ0xnQixlQUFLaEIsVUFBTDtBQUNEO0FBQ0RnQixhQUFLQyxNQUFMO0FBQ0QsT0FYTzs7O0FBYVI7QUFDQUMsZ0JBZFEsd0JBY0s7QUFDWFosZ0JBQVFDLEdBQVI7QUFDQSxZQUFJUyxPQUFPLElBQVg7O0FBRUEsWUFBTUcsb0JBQW9CVixHQUFHVyx1QkFBSCxFQUExQjtBQUNBRCwwQkFBa0JFLFFBQWxCLEdBQTZCLElBQTdCO0FBQ0FGLDBCQUFrQkcsR0FBbEIsR0FBd0JOLEtBQUtqQixTQUE3QjtBQUNBb0IsMEJBQWtCSSxNQUFsQixDQUF5QixZQUFNO0FBQzdCakIsa0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0QsU0FGRDtBQUdBWSwwQkFBa0JLLE9BQWxCLENBQTBCLGVBQU87QUFDL0JsQixrQkFBUUMsR0FBUixDQUFZa0IsSUFBSUMsTUFBaEI7QUFDQXBCLGtCQUFRQyxHQUFSLENBQVlrQixJQUFJRSxPQUFoQjtBQUNELFNBSEQ7QUFJRDtBQTVCTyxLLFFBK0JWQyxNLEdBQVMsRTs7Ozs7OztBQXREVDs2QkFDUztBQUNQLFVBQUlaLE9BQU8sSUFBWDtBQUNBLFVBQUluQixNQUFNbUIsS0FBS25CLEdBQWY7QUFDQSxVQUFJZ0MsVUFBVSxFQUFkO0FBQ0E7QUFDQSxVQUFJQyxNQUFNLHNCQUFWO0FBQ0EsVUFBSUMsVUFBSjtBQUNBLFVBQUlDLFFBQVEsQ0FBWjtBQUNBLGFBQVFELFFBQVFELElBQUlHLElBQUosQ0FBU3BDLEdBQVQsS0FBaUIsSUFBakMsRUFBd0M7QUFDdEM7QUFDQWdDLGdCQUFRSyxJQUFSLENBQWFyQyxJQUFJc0MsU0FBSixDQUFjSCxLQUFkLEVBQXFCRixJQUFJTSxTQUF6QixDQUFiO0FBQ0E7QUFDQUosZ0JBQVFGLElBQUlNLFNBQVo7QUFDRDtBQUNEO0FBQ0FQLGNBQVFLLElBQVIsQ0FBYXJDLElBQUlzQyxTQUFKLENBQWNILEtBQWQsRUFBcUJuQyxJQUFJd0MsTUFBekIsQ0FBYjtBQUNBckIsV0FBS2xCLElBQUwsR0FBWStCLE9BQVo7QUFDQWIsV0FBS0MsTUFBTDtBQUNEOzs7MkJBcUNNcUIsTyxFQUFTO0FBQ2QsVUFBSXRCLE9BQU8sSUFBWDs7QUFFQSxVQUFJdUIsZUFBZSxJQUFJQyxJQUFKLEVBQW5CO0FBQ0EsVUFBSXRDLFVBQVVxQyxhQUFhRSxPQUFiLEVBQWQ7QUFDQW5DLGNBQVFDLEdBQVIsQ0FBWStCLE9BQVo7QUFDQSxVQUFJQSxRQUFRcEMsT0FBWixFQUFxQjtBQUNuQixZQUFJd0MsVUFBVUMsU0FBU0wsUUFBUXBDLE9BQWpCLENBQWQ7QUFDQSxZQUFJb0MsUUFBUU0sWUFBUixJQUF3QixXQUE1QixFQUF5QztBQUN2QzFDLG9CQUFVLENBQVY7QUFDRCxTQUZELE1BRU8sSUFBSW9DLFFBQVFNLFlBQVIsSUFBd0IsT0FBNUIsRUFBcUM7QUFDMUN0QyxrQkFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJtQyxPQUF2QjtBQUNBcEMsa0JBQVFDLEdBQVIsUUFBbUJtQyxPQUFuQix5Q0FBbUJBLE9BQW5CO0FBQ0FBLG9CQUFVQSxVQUFVLE9BQU8sRUFBUCxHQUFZLEVBQWhDO0FBQ0E7QUFDQXBDLGtCQUFRQyxHQUFSLENBQVksU0FBWixFQUF1Qm1DLE9BQXZCO0FBQ0QsU0FOTSxNQU1BLElBQUlKLFFBQVFNLFlBQVIsSUFBd0IsT0FBNUIsRUFBcUM7QUFDMUNGLG9CQUFVQSxVQUFVLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsQ0FBckM7QUFDRCxTQUZNLE1BRUEsSUFBSUosUUFBUU0sWUFBUixJQUF3QixNQUE1QixFQUFvQztBQUN6Q0Ysb0JBQVVBLFVBQVUsT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFqQixHQUFzQixDQUExQztBQUNEO0FBQ0Q7QUFDQSxZQUFJQSxVQUFVeEMsT0FBZCxFQUF1QjtBQUNyQjtBQUNBLGNBQU1NLHlCQUF5QkMsR0FBR0MseUJBQUgsRUFBL0I7QUFDQUYsaUNBQXVCcUMsS0FBdkIsR0FBK0IsTUFBL0I7QUFDQXJDLGlDQUF1QnNDLE1BQXZCLEdBQWdDLEVBQWhDO0FBQ0F0QyxpQ0FBdUJ1QyxNQUF2QixHQUFnQyxJQUFoQztBQUNBdkMsaUNBQXVCd0MsV0FBdkIsR0FDRSw0REFERjtBQUVBeEMsaUNBQXVCYyxHQUF2QixHQUE2QixxQ0FBN0I7QUFDRCxTQVRELE1BU087QUFDTDtBQUNBYixhQUFHd0MsVUFBSCxDQUFjO0FBQ1pDO0FBRFksV0FBZDtBQUdEO0FBQ0YsT0EvQkQsTUErQk8sQ0FDTjs7QUFFRCxVQUFJWixRQUFRekMsR0FBWixFQUFpQjtBQUNmbUIsYUFBS25CLEdBQUwsR0FBV3lDLFFBQVF6QyxHQUFuQjtBQUNELE9BRkQsTUFFTztBQUNMO0FBQ0FtQixhQUFLbkIsR0FBTDtBQUNEO0FBQ0RtQixXQUFLakIsU0FBTCxHQUFpQnVDLFFBQVF2QyxTQUF6QjtBQUNBaUIsV0FBSzRCLFlBQUwsR0FBb0JOLFFBQVFNLFlBQTVCO0FBQ0E1QixXQUFLbUMsTUFBTDtBQUNBbkMsV0FBS0MsTUFBTDs7QUFFQTtBQUNBUixTQUFHMkMsYUFBSCxDQUFpQjtBQUNmQyx5QkFBaUI7QUFERixPQUFqQjs7QUFJQTtBQUNBNUMsU0FBRzZDLGFBQUgsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQVM5QixHQUFULEVBQWM7QUFDckJuQixrQkFBUUMsR0FBUixDQUFZa0IsSUFBSStCLEtBQWhCO0FBQ0FsRCxrQkFBUUMsR0FBUixDQUFZa0IsSUFBSWdDLFVBQWhCO0FBQ0FuRCxrQkFBUUMsR0FBUixDQUFZa0IsSUFBSWlDLFdBQWhCO0FBQ0FwRCxrQkFBUUMsR0FBUixDQUFZa0IsSUFBSXhCLFlBQWhCO0FBQ0FLLGtCQUFRQyxHQUFSLENBQVlrQixJQUFJa0MsUUFBaEI7QUFDQXJELGtCQUFRQyxHQUFSLENBQVlrQixJQUFJbUMsT0FBaEI7QUFDQXRELGtCQUFRQyxHQUFSLENBQVlrQixJQUFJb0MsUUFBaEI7QUFDQTdDLGVBQUtmLFlBQUwsR0FBb0J3QixJQUFJeEIsWUFBeEI7QUFDRDtBQVZjLE9BQWpCO0FBWUQ7O0FBRUQ7Ozs7NkJBQ1M7QUFDUEssY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDQTtBQUNBLFVBQU1DLHlCQUF5QkMsR0FBR0MseUJBQUgsRUFBL0I7QUFDQUYsNkJBQXVCRyxJQUF2QjtBQUNEOzs7NkJBQ1E7QUFDUEwsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSxVQUFNQyx5QkFBeUJDLEdBQUdDLHlCQUFILEVBQS9CO0FBQ0FGLDZCQUF1QkksS0FBdkI7QUFDRDs7QUFFRDs7OzsrQkFDVztBQUNUTixjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBO0FBQ0EsVUFBTUMseUJBQXlCQyxHQUFHQyx5QkFBSCxFQUEvQjtBQUNBRiw2QkFBdUJJLEtBQXZCO0FBQ0Q7QUFDRDs7OztzQ0FDa0JhLEcsRUFBSztBQUNyQixVQUFJVCxPQUFPLElBQVg7QUFDQSxVQUFJdUIsZUFBZSxJQUFJQyxJQUFKLEVBQW5CO0FBQ0EsVUFBSXRDLFVBQVVxQyxhQUFhRSxPQUFiLEVBQWQ7QUFDQXpCLFdBQUtkLE9BQUwsR0FBZUEsT0FBZjtBQUNBYyxXQUFLQyxNQUFMO0FBQ0FYLGNBQVFDLEdBQVIsY0FBdUJMLE9BQXZCO0FBQ0FJLGNBQVFDLEdBQVIsUUFBbUJMLE9BQW5CLHlDQUFtQkEsT0FBbkI7QUFDQSxVQUFJdUIsSUFBSXFDLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QjtBQUNBeEQsZ0JBQVFDLEdBQVIsQ0FBWWtCLElBQUlzQyxNQUFoQjtBQUNEO0FBQ0Q7QUFDQSxhQUFPO0FBQ0xsQixlQUFPLEtBREY7QUFFTG1CLG1EQUF5Q2hELEtBQUtuQixHQUE5QyxtQkFDRW1CLEtBQUtqQixTQURQLHNCQUVpQmlCLEtBQUs0QixZQUZ0QixpQkFFOEM1QixLQUFLZCxPQUo5QztBQUtMO0FBQ0ErRCxrQkFBVSw4REFOTDtBQU9MVixpQkFBUyxpQkFBUzlCLEdBQVQsRUFBYztBQUNyQjtBQUNBLGNBQUl5QyxZQUFZLElBQUkxQixJQUFKLEVBQWhCO0FBQ0E7QUFDQSxjQUFJMkIsV0FBVzFELEdBQUcyRCxJQUFILENBQVFDLE9BQVIsQ0FBZ0JDLEdBQWhCLFlBQWY7QUFDQTtBQUNBLGNBQUlDLFlBQVlKLFNBQVNLLFFBQVQsb0NBQWhCO0FBQ0EsY0FBSUMsY0FBY04sU0FBU08sTUFBVCxrQkFBbEI7QUFDQSxjQUFJQyxjQUFjUixTQUFTUyxNQUFULFlBQWxCO0FBQ0F0RSxrQkFBUUMsR0FBUiw2QkFBb0IyRCxTQUFwQixFQUErQkssU0FBL0IsRUFBMENFLFdBQTFDLEVBQXVERSxXQUF2RDtBQUNBO0FBQ0FsRSxhQUFHb0UsZUFBSCxDQUFtQixZQUFuQixFQUFpQztBQUMvQkMsNEJBRCtCO0FBRS9CUCxnQ0FGK0I7QUFHL0JMLGdDQUgrQjtBQUkvQk8sb0NBSitCO0FBSy9CRTtBQUwrQixXQUFqQztBQU9BO0FBQ0E7QUFDQSxjQUFJSSxVQUFVLEtBQWQ7QUFDQSxjQUFJQyxVQUFVLElBQUl2RSxHQUFHMkQsSUFBSCxDQUFRYSxXQUFaLENBQXdCRixPQUF4QixDQUFkO0FBQ0EsY0FBSUcsVUFBVUYsUUFBUUcsTUFBUixFQUFkOztBQUVBO0FBQ0EsY0FBSUMsUUFBUTtBQUNWQyx1QkFBVyxPQUREO0FBRVZ0Rix1QkFBV2lCLEtBQUtqQixTQUZOO0FBR1Z3RSxnQ0FIVTtBQUlWSSxvQ0FKVTtBQUtWRixvQ0FMVTtBQU1WUCxnQ0FOVTtBQU9Wb0IsMEJBQWN0RSxLQUFLbkIsR0FQVDtBQVFWaUYsdUJBQVc7QUFSRCxXQUFaOztBQVdBSSxrQkFDR0ssR0FESCxDQUNPSCxLQURQLEVBRUdJLElBRkgsR0FHR0MsSUFISCxDQUlJLGVBQU87QUFDTDtBQUNBbkYsb0JBQVFDLEdBQVI7QUFDRCxXQVBMLEVBUUksZUFBTztBQUNMO0FBQ0QsV0FWTDtBQVlELFNBdkRJO0FBd0RMbUYsY0FBTSxjQUFTakUsR0FBVCxFQUFjO0FBQ2xCO0FBQ0Q7QUExREksT0FBUDtBQTRERDs7OztFQXpQZ0MsZUFBS2tFLEk7O2tCQUFuQm5HLEsiLCJmaWxlIjoiNTIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJzUyMCdcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgbXNnOiBgYCwgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICB0ZXh0OiBgYCwgLy/moLzlvI/ljJbkuYvlkI7opoHlsZXnpLrnmoTlhoXlrrlcbiAgICByZWNvcmRVcmw6IGBgLCAvL+W9lemfs+S6keaWh+S7tuWcsOWdgFxuICAgIG11c2ljU3RhdGU6IGBydW5uaW5nYCwgLy/pn7PkuZDlm77niYfliqjnlLvmmK/lkKbmmoLlgZxcbiAgICB3aW5kb3dIZWlnaHQ6ICcxMDAlJywgLy/miYvmnLrlsY/luZXpq5jluqZcbiAgICB0aW1lTm93OiAnJyAvL+i9rOWPkeeahOaXtumXtOaIs1xuICB9O1xuXG4gIHdhdGNoID0ge1xuICAgIC8vICDmmoLlgZwv5pKt5pS+6Z+z5LmQXG4gICAgbXVzaWNTdGF0ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBtdXNpY1N0YXRlIHZhbHVlOiAke29sZFZhbHVlfSAtPiAke25ld1ZhbHVlfWApO1xuICAgICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICAgIGlmIChuZXdWYWx1ZSA9PSBgcnVubmluZ2ApIHtcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIOWkhOeQhuS8oOmAkui/h+adpeeahOS/oeaBr1xuICBSZWdNc2coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBtc2cgPSBzZWxmLm1zZztcbiAgICBsZXQgdGVzdEFyciA9IFtdO1xuICAgIC8vIOmBh+WIsOS7peS4i+espuWPt+eri+WNs+aIquWPluWGheWuueWIhuautVxuICAgIGxldCByZWcgPSAvW++8jHwsfC5844CCfOOAgXzvvJ9877ybfDt8L10vZztcbiAgICBsZXQgaW5kZXggPSBgYDtcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIHdoaWxlICgoaW5kZXggPSByZWcuZXhlYyhtc2cpICE9IG51bGwpKSB7XG4gICAgICAvLyDmiKrlj5bkuKTkuKrnrKblkIjkuYvpl7TnmoTmloflrZfvvIzliIbmrrXmlL7lhaXmlbDnu4RcbiAgICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCByZWcubGFzdEluZGV4KSk7XG4gICAgICAvLyDmo4DmtYvlubbmlLnlj5jlvZPliY3nrKblj7fntKLlvJVcbiAgICAgIHN0YXJ0ID0gcmVnLmxhc3RJbmRleDtcbiAgICB9XG4gICAgLy8g6I635Y+W5pyA5ZCO5LiA5q615paH5a2XXG4gICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIG1zZy5sZW5ndGgpKTtcbiAgICBzZWxmLnRleHQgPSB0ZXN0QXJyO1xuICAgIHNlbGYuJGFwcGx5KCk7XG4gIH1cblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g5YiH5o2i6Z+z5LmQ5Zu+5qCH5peL6L2sXG4gICAgdG9nZ2xlTXVzaWMoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhgdG9nZ2xlYCk7XG4gICAgICBpZiAoc2VsZi5tdXNpY1N0YXRlID09ICdydW5uaW5nJykge1xuICAgICAgICBzZWxmLm11c2ljU3RhdGUgPSBgcGF1c2VkYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubXVzaWNTdGF0ZSA9IGBydW5uaW5nYDtcbiAgICAgIH1cbiAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgfSxcblxuICAgIC8vIOaSreaUvuW9lemfs1xuICAgIHJlY29yZFBsYXkoKSB7XG4gICAgICBjb25zb2xlLmxvZyhg5pKt5pS+5b2V6Z+zYCk7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGNvbnN0IGlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHNlbGYucmVjb3JkVXJsO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25QbGF5KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ+W8gOWni+aSreaUvicpO1xuICAgICAgfSk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyQ29kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBsZXQgdGltZUNoZWNrTm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdGltZU5vdyA9IHRpbWVDaGVja05vdy5nZXRUaW1lKCk7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMudGltZU5vdykge1xuICAgICAgbGV0IG5vd1RpbWUgPSBwYXJzZUludChvcHRpb25zLnRpbWVOb3cpO1xuICAgICAgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICd1bmxpbWl0ZWQnKSB7XG4gICAgICAgIHRpbWVOb3cgPSAxO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnRpbWVDaGVja1ZhbCA9PSAnMzBtaW4nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub3dUaW1lJywgbm93VGltZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBub3dUaW1lKTtcbiAgICAgICAgbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogNjAgKiAzMDtcbiAgICAgICAgLy8gbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogMzA7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub3dUaW1lJywgbm93VGltZSk7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICczaG91cicpIHtcbiAgICAgICAgbm93VGltZSA9IG5vd1RpbWUgKyAxMDAwICogNjAgKiA2MCAqIDM7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudGltZUNoZWNrVmFsID09ICczZGF5Jykge1xuICAgICAgICBub3dUaW1lID0gbm93VGltZSArIDEwMDAgKiA2MCAqIDYwICogMjQgKiAzO1xuICAgICAgfVxuICAgICAgLy8g5aaC5p6c5L+h5Lu25Zyo5pyJ5pWI5pyf5YaFXG4gICAgICBpZiAobm93VGltZSA+IHRpbWVOb3cpIHtcbiAgICAgICAgLy8g6K6+572u6IOM5pmv6Z+z5LmQXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIudGl0bGUgPSAn5bCx5piv54ix5L2gJztcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5lcG5hbWUgPSAnJztcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zaW5nZXIgPSAn6Zm25ZaGJztcbiAgICAgICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5jb3ZlckltZ1VybCA9XG4gICAgICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8xMjNqamRsbiUyMCUyODE1MyUyOV9Gb3Rvci5qcGcnO1xuICAgICAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNyYyA9ICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vNTUyLm1wMyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlpoLmnpzkv6Hku7bkuI3lnKjmnInmlYjmnJ/lhoXvvIzlsLHlvLnlh7rov4fmnJ/mj5DnpLrvvIzlubbpmpDol4/kv6Hku7blhoXlrrlcbiAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgdXJsOiBgL2FwcGxldHNCL3BhZ2VzL25vZGF0YS9ub2RhdGFgXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubXNnKSB7XG4gICAgICBzZWxmLm1zZyA9IG9wdGlvbnMubXNnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDpu5jorqTnlZnoqIBcbiAgICAgIHNlbGYubXNnID0gYOS7luS7rOivtO+8jOi/meS4quS4lueVjOS4iu+8jOa1t+acgOa3semCg++8jOW5suWHgOWPiOmAj+aYju+8jOaIkeaDs++8jOmCo+aYr+S7luS7rOayoeingei/h+S9oOeahOecvOedm2A7XG4gICAgfVxuICAgIHNlbGYucmVjb3JkVXJsID0gb3B0aW9ucy5yZWNvcmRVcmw7XG4gICAgc2VsZi50aW1lQ2hlY2tWYWwgPSBvcHRpb25zLnRpbWVDaGVja1ZhbDtcbiAgICBzZWxmLlJlZ01zZygpO1xuICAgIHNlbGYuJGFwcGx5KCk7XG5cbiAgICAvL+aYvuekuui9rOWPkVxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5bmiYvmnLrkv6Hmga9cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMubW9kZWwpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMucGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy53aW5kb3dXaWR0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy53aW5kb3dIZWlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMubGFuZ3VhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudmVyc2lvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5wbGF0Zm9ybSk7XG4gICAgICAgIHNlbGYud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIOW9k+mhtemdouaYvuekuueahOaXtuWAmVxuICBvblNob3coKSB7XG4gICAgY29uc29sZS5sb2coJ3Nob3cnKTtcbiAgICAvLyDnu6fnu63mkq3mlL7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGxheSgpO1xuICB9XG4gIG9uSGlkZSgpIHtcbiAgICBjb25zb2xlLmxvZygnaGlkZGVuJyk7XG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gIH1cblxuICAvLyDlvZPpobXpnaLliIfmjaLvvIjpmpDol4/vvInnmoTml7blgJlcbiAgb25VbmxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ3VubG9hZCcpO1xuICAgIC8vIOaaguWBnOiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG4gIC8vIOiuvue9ruWIhuS6q+WNoeeJh1xuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHRpbWVDaGVja05vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRpbWVOb3cgPSB0aW1lQ2hlY2tOb3cuZ2V0VGltZSgpO1xuICAgIHNlbGYudGltZU5vdyA9IHRpbWVOb3c7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgICBjb25zb2xlLmxvZyhgdGltZU5vdyAke3RpbWVOb3d9YCk7XG4gICAgY29uc29sZS5sb2codHlwZW9mIHRpbWVOb3cpO1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldCk7XG4gICAgfVxuICAgIC8vIOWNoeeJh+WGheWuuVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+aIkeeIseS9oCcsXG4gICAgICBwYXRoOiBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvNTIwP21zZz0ke3NlbGYubXNnfSZyZWNvcmRVcmw9JHtcbiAgICAgICAgc2VsZi5yZWNvcmRVcmxcbiAgICAgIH0mdGltZUNoZWNrVmFsPSR7c2VsZi50aW1lQ2hlY2tWYWx9JnRpbWVOb3c9JHtzZWxmLnRpbWVOb3d9YCxcbiAgICAgIC8vIOWwgemdouWbvlxuICAgICAgaW1hZ2VVcmw6ICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMzM4MDlfMjAxNDAyMTIxNzA2NTkyMTUzNzYwMC5qcGcnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeaIkOWKn1xuICAgICAgICBsZXQgY2FyZF90aW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgLy8g6I635Y+W55So5oi35a2Y5YKo55qE55So5oi35L+h5oGvXG4gICAgICAgIGxldCB1c2VyaW5mbyA9IHd4LkJhYVMuc3RvcmFnZS5nZXQoYHVzZXJpbmZvYCk7XG4gICAgICAgIC8vIOiuvue9ruWktOWDj+WSjOWQjeensFxuICAgICAgICBsZXQgdXNlcl9uYW1lID0gdXNlcmluZm8ubmlja05hbWUgfHwgYOacqueZu+W9lea4uOWuomA7XG4gICAgICAgIGxldCB1c2VyX29wZW5pZCA9IHVzZXJpbmZvLm9wZW5pZCB8fCBg5pegb3BlbmlkYDtcbiAgICAgICAgbGV0IHVzZXJfZ2VuZGVyID0gdXNlcmluZm8uZ2VuZGVyIHx8IGDml6BgO1xuICAgICAgICBjb25zb2xlLmxvZyhg6L2s5Y+R5oiQ5YqfYCwgY2FyZF90aW1lLCB1c2VyX25hbWUsIHVzZXJfb3BlbmlkLCB1c2VyX2dlbmRlcik7XG4gICAgICAgIC8vIOiHquWumuS5ieS6i+S7tuS4iuaKpe+8iOWIhuS6q+S6i+S7tu+8iVxuICAgICAgICB3eC5yZXBvcnRBbmFseXRpY3MoJ3NoYXJlX2NhcmQnLCB7XG4gICAgICAgICAgY2FyZF9uYW1lOiBgNTIwYCxcbiAgICAgICAgICB1c2VyX25hbWUsXG4gICAgICAgICAgY2FyZF90aW1lLFxuICAgICAgICAgIHVzZXJfb3BlbmlkLFxuICAgICAgICAgIHVzZXJfZ2VuZGVyXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDorr7nva7mqKHmnb/mtojmga/pgJrnn6VcbiAgICAgICAgLy8g5ZCRIHRhYmxlSUQg5Li6IDM5MDA2IOeahOaVsOaNruihqOaPkuWFpeS4gOadoeiusOW9lVxuICAgICAgICBsZXQgdGFibGVJRCA9IDM5MDA2O1xuICAgICAgICBsZXQgUHJvZHVjdCA9IG5ldyB3eC5CYWFTLlRhYmxlT2JqZWN0KHRhYmxlSUQpO1xuICAgICAgICBsZXQgcHJvZHVjdCA9IFByb2R1Y3QuY3JlYXRlKCk7XG5cbiAgICAgICAgLy8g6K6+572u5pa55byP5LiAXG4gICAgICAgIGxldCBhcHBsZSA9IHtcbiAgICAgICAgICBzZW5kX2NhcmQ6ICdFbWFpbCcsXG4gICAgICAgICAgcmVjb3JkVXJsOiBzZWxmLnJlY29yZFVybCxcbiAgICAgICAgICB1c2VyX25hbWUsXG4gICAgICAgICAgdXNlcl9nZW5kZXIsXG4gICAgICAgICAgdXNlcl9vcGVuaWQsXG4gICAgICAgICAgY2FyZF90aW1lLFxuICAgICAgICAgIGNhcmRfY29udGVudDogc2VsZi5tc2csXG4gICAgICAgICAgY2FyZF9uYW1lOiAnNTIwJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHByb2R1Y3RcbiAgICAgICAgICAuc2V0KGFwcGxlKVxuICAgICAgICAgIC5zYXZlKClcbiAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYOWIm+W7uuihqOaIkOWKn2ApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==