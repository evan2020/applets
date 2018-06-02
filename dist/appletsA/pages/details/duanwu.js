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
      navigationBarTitleText: '端午'
    }, _this.components = {}, _this.data = {
      type: '', //上一级页面类型
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
      self.type = options.type;

      if (options.msg) {
        self.msg = options.msg;
      } else {
        // 默认留言
        self.msg = '\u9001\u4F60\u4E2A\u7CBD\u5B50\uFF0C\u5E78\u8FD0\u94FA\u6EE1\u6E05\u65B0\u7684\u53F6\uFF0C\u5FEB\u4E50\u88F9\u6210\u7F8E\u5473\u7684\u9985\uFF0C\u95FB\u8D77\u6765\u662F\u6E29\u99A8\uFF0C\u5403\u8D77\u6765\u662F\u751C\u871C\uFF0C\u54BD\u4E0B\u53BB\u662F\u5E78\u798F\uFF0C\u56DE\u5473\u7740\u662F\u7F8E\u6EE1\uFF0C\u7AEF\u5348\u8282\u5FEB\u4E50\uFF01';
      }
      self.RegMsg();
      self.$apply();
      console.log('type', _typeof(options.text));

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
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      // 卡片内容
      return {
        title: '端午节快乐',
        path: '/appletsA/pages/details/duanwu',
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/121F2NC-0.jpg',
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/duanwu'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1YW53dS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsInR5cGUiLCJtc2ciLCJ0ZXh0Iiwid2luZG93SGVpZ2h0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwic2VsZiIsInRlc3RBcnIiLCJyZWciLCJpbmRleCIsInN0YXJ0IiwiZXhlYyIsInB1c2giLCJzdWJzdHJpbmciLCJsYXN0SW5kZXgiLCJsZW5ndGgiLCIkYXBwbHkiLCJvcHRpb25zIiwiUmVnTXNnIiwiY29uc29sZSIsImxvZyIsInd4Iiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwiYmFja2dyb3VuZEF1ZGlvTWFuYWdlciIsImdldEJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJ0aXRsZSIsImVwbmFtZSIsInNpbmdlciIsImNvdmVySW1nVXJsIiwic3JjIiwicGxheSIsInBhdXNlIiwiZnJvbSIsInRhcmdldCIsInBhdGgiLCJpbWFnZVVybCIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxjQURLLEVBQ0s7QUFDVkMsYUFGSyxFQUVJO0FBQ1RDLGNBSEssRUFHSztBQUNWQyxvQkFBYyxNQUpULENBSWdCO0FBSmhCLEssUUFPUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEUsUUF1QlZDLE0sR0FBUyxFOzs7Ozs7O0FBckJUOzZCQUNTO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSU4sTUFBTU0sS0FBS04sR0FBZjtBQUNBLFVBQUlPLFVBQVUsRUFBZDtBQUNBO0FBQ0EsVUFBSUMsTUFBTSxzQkFBVjtBQUNBLFVBQUlDLFVBQUo7QUFDQSxVQUFJQyxRQUFRLENBQVo7QUFDQSxhQUFRRCxRQUFRRCxJQUFJRyxJQUFKLENBQVNYLEdBQVQsS0FBaUIsSUFBakMsRUFBd0M7QUFDdEM7QUFDQU8sZ0JBQVFLLElBQVIsQ0FBYVosSUFBSWEsU0FBSixDQUFjSCxLQUFkLEVBQXFCRixJQUFJTSxTQUF6QixDQUFiO0FBQ0E7QUFDQUosZ0JBQVFGLElBQUlNLFNBQVo7QUFDRDtBQUNEO0FBQ0FQLGNBQVFLLElBQVIsQ0FBYVosSUFBSWEsU0FBSixDQUFjSCxLQUFkLEVBQXFCVixJQUFJZSxNQUF6QixDQUFiO0FBQ0FULFdBQUtMLElBQUwsR0FBWU0sT0FBWjtBQUNBRCxXQUFLVSxNQUFMO0FBQ0Q7OzsyQkFJTUMsTyxFQUFTO0FBQ2QsVUFBSVgsT0FBTyxJQUFYO0FBQ0FBLFdBQUtQLElBQUwsR0FBWWtCLFFBQVFsQixJQUFwQjs7QUFFQSxVQUFJa0IsUUFBUWpCLEdBQVosRUFBaUI7QUFDZk0sYUFBS04sR0FBTCxHQUFXaUIsUUFBUWpCLEdBQW5CO0FBQ0QsT0FGRCxNQUVPO0FBQ0w7QUFDQU0sYUFBS04sR0FBTDtBQUNEO0FBQ0RNLFdBQUtZLE1BQUw7QUFDQVosV0FBS1UsTUFBTDtBQUNBRyxjQUFRQyxHQUFSLGlCQUEyQkgsUUFBUWhCLElBQW5DOztBQUVBO0FBQ0FvQixTQUFHQyxhQUFILENBQWlCO0FBQ2ZDLHlCQUFpQjtBQURGLE9BQWpCOztBQUlBO0FBQ0FGLFNBQUdHLGFBQUgsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQnBCLGVBQUtKLFlBQUwsR0FBb0J3QixJQUFJeEIsWUFBeEI7QUFDRDtBQUhjLE9BQWpCOztBQU1BO0FBQ0EsVUFBTXlCLHlCQUF5Qk4sR0FBR08seUJBQUgsRUFBL0I7QUFDQUQsNkJBQXVCRSxLQUF2QixHQUErQixLQUEvQjtBQUNBRiw2QkFBdUJHLE1BQXZCLEdBQWdDLEVBQWhDO0FBQ0FILDZCQUF1QkksTUFBdkIsR0FBZ0MsS0FBaEM7QUFDQUosNkJBQXVCSyxXQUF2QixHQUNFLGdEQURGO0FBRUFMLDZCQUF1Qk0sR0FBdkIsR0FBNkIsdUNBQTdCO0FBQ0Q7O0FBRUQ7Ozs7NkJBQ1M7QUFDUGQsY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDQTtBQUNBLFVBQU1PLHlCQUF5Qk4sR0FBR08seUJBQUgsRUFBL0I7QUFDQUQsNkJBQXVCTyxJQUF2QjtBQUNEOzs7NkJBQ1E7QUFDUGYsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSxVQUFNTyx5QkFBeUJOLEdBQUdPLHlCQUFILEVBQS9CO0FBQ0FELDZCQUF1QlEsS0FBdkI7QUFDRDs7QUFFRDs7OzsrQkFDVztBQUNUaEIsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDQTtBQUNBLFVBQU1PLHlCQUF5Qk4sR0FBR08seUJBQUgsRUFBL0I7QUFDQUQsNkJBQXVCUSxLQUF2QjtBQUNEO0FBQ0Q7Ozs7c0NBQ2tCVCxHLEVBQUs7QUFDckIsVUFBSUEsSUFBSVUsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCO0FBQ0FqQixnQkFBUUMsR0FBUixDQUFZTSxJQUFJVyxNQUFoQjtBQUNEO0FBQ0Q7QUFDQSxhQUFPO0FBQ0xSLGVBQU8sT0FERjtBQUVMUyxjQUFNLGdDQUZEO0FBR0w7QUFDQUMsa0JBQVUsMkNBSkw7QUFLTGQsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQjtBQUNELFNBUEk7QUFRTGMsY0FBTSxjQUFTZCxHQUFULEVBQWM7QUFDbEI7QUFDRDtBQVZJLE9BQVA7QUFZRDs7OztFQW5IZ0MsZUFBS2UsSTs7a0JBQW5CL0MsSyIsImZpbGUiOiJkdWFud3UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56uv5Y2IJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICB0eXBlOiBgYCwgLy/kuIrkuIDnuqfpobXpnaLnsbvlnotcbiAgICBtc2c6IGBgLCAvL+i+k+WFpeahhueahOWGheWuuVxuICAgIHRleHQ6IGBgLCAvL+agvOW8j+WMluS5i+WQjuimgeWxleekuueahOWGheWuuVxuICAgIHdpbmRvd0hlaWdodDogJzEwMCUnIC8v5omL5py65bGP5bmV6auY5bqmXG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge307XG5cbiAgLy8g5aSE55CG5Lyg6YCS6L+H5p2l55qE5L+h5oGvXG4gIFJlZ01zZygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IG1zZyA9IHNlbGYubXNnO1xuICAgIGxldCB0ZXN0QXJyID0gW107XG4gICAgLy8g6YGH5Yiw5Lul5LiL56ym5Y+356uL5Y2z5oiq5Y+W5YaF5a655YiG5q61XG4gICAgbGV0IHJlZyA9IC9b77yMfCx8LnzjgIJ844CBfO+8n3zvvJt8O3wvXS9nO1xuICAgIGxldCBpbmRleCA9IGBgO1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgd2hpbGUgKChpbmRleCA9IHJlZy5leGVjKG1zZykgIT0gbnVsbCkpIHtcbiAgICAgIC8vIOaIquWPluS4pOS4quespuWQiOS5i+mXtOeahOaWh+Wtl++8jOWIhuauteaUvuWFpeaVsOe7hFxuICAgICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIHJlZy5sYXN0SW5kZXgpKTtcbiAgICAgIC8vIOajgOa1i+W5tuaUueWPmOW9k+WJjeespuWPt+e0ouW8lVxuICAgICAgc3RhcnQgPSByZWcubGFzdEluZGV4O1xuICAgIH1cbiAgICAvLyDojrflj5bmnIDlkI7kuIDmrrXmloflrZdcbiAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgbXNnLmxlbmd0aCkpO1xuICAgIHNlbGYudGV4dCA9IHRlc3RBcnI7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgfVxuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYudHlwZSA9IG9wdGlvbnMudHlwZTtcblxuICAgIGlmIChvcHRpb25zLm1zZykge1xuICAgICAgc2VsZi5tc2cgPSBvcHRpb25zLm1zZztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6buY6K6k55WZ6KiAXG4gICAgICBzZWxmLm1zZyA9IGDpgIHkvaDkuKrnsr3lrZDvvIzlubjov5Dpk7rmu6HmuIXmlrDnmoTlj7bvvIzlv6vkuZDoo7nmiJDnvo7lkbPnmoTppoXvvIzpl7votbfmnaXmmK/muKnppqjvvIzlkIPotbfmnaXmmK/nlJzonJzvvIzlkr3kuIvljrvmmK/lubjnpo/vvIzlm57lkbPnnYDmmK/nvo7mu6HvvIznq6/ljYjoioLlv6vkuZDvvIFgO1xuICAgIH1cbiAgICBzZWxmLlJlZ01zZygpO1xuICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgY29uc29sZS5sb2coYHR5cGVgLCB0eXBlb2Ygb3B0aW9ucy50ZXh0KTtcblxuICAgIC8v5pi+56S66L2s5Y+RXG4gICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIOiOt+WPluaJi+acuuS/oeaBr1xuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIOiuvue9ruiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci50aXRsZSA9ICflv4bnq6/ljYgnO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuZXBuYW1lID0gJyc7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zaW5nZXIgPSAn572X5Lit5petJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmNvdmVySW1nVXJsID1cbiAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vZnBpYzE0NjdfRm90b3IuanBnJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNyYyA9ICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vOTUxNzMubXAzJztcbiAgfVxuXG4gIC8vIOW9k+mhtemdouaYvuekuueahOaXtuWAmVxuICBvblNob3coKSB7XG4gICAgY29uc29sZS5sb2coJ3Nob3cnKTtcbiAgICAvLyDnu6fnu63mkq3mlL7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGxheSgpO1xuICB9XG4gIG9uSGlkZSgpIHtcbiAgICBjb25zb2xlLmxvZygnaGlkZGVuJyk7XG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gIH1cblxuICAvLyDlvZPpobXpnaLliIfmjaLvvIjpmpDol4/vvInnmoTml7blgJlcbiAgb25VbmxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ3VubG9hZCcpO1xuICAgIC8vIOaaguWBnOiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG4gIC8vIOiuvue9ruWIhuS6q+WNoeeJh1xuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpO1xuICAgIH1cbiAgICAvLyDljaHniYflhoXlrrlcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfnq6/ljYjoioLlv6vkuZAnLFxuICAgICAgcGF0aDogJy9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2R1YW53dScsXG4gICAgICAvLyDlsIHpnaLlm75cbiAgICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzEyMUYyTkMtMC5qcGcnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeaIkOWKn1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HlpLHotKVcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=