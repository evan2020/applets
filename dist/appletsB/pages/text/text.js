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
      navigationBarTitleText: '留言'
    }, _this.components = {}, _this.data = {
      textarea: {
        type: '', //入口页面表示
        msg: '', //输入框的内容
        placeholder: '', //输入框为空时占位符

        disabled: false, //是否禁用
        maxlength: 100, //最大输入长度，设置为 -1 的时候不限制最大长度
        focus: false //获取焦点
      },
      text: [], //转化后的文本
      router: '', //留言之后跳转的页面
      recordState: false, //录音状态
      recordPath: '' //录音临时地址
    }, _this.watch = {
      recordState: function recordState(newValue, oldValue) {
        var self = this;
        console.log('recordState value: ' + oldValue + ' -> ' + newValue);
        var recorderManager = wx.getRecorderManager();
        recorderManager.onStart(function () {
          console.log('recorder start');
        });
        recorderManager.onPause(function () {
          console.log('recorder pause');
        });
        recorderManager.onStop(function (res) {
          console.log('recorder stop', res);
          var tempFilePath = res.tempFilePath;

          self.recordPath = res.tempFilePath;
        });
        if (newValue) {
          recorderManager.start();
        } else {
          recorderManager.stop();
        }
      }
    }, _this.computed = {}, _this.methods = {
      // 存储消息
      getMsg: function getMsg(e) {
        var self = this;

        // 保存输入框留言
        self.textarea.msg = e.detail.value;
        self.$apply();
        // console.log(e.detail.value);
      },


      // 发送消息
      sendMsg: function sendMsg() {
        var self = this;
        var msg = self.textarea.msg;
        console.log(self.text);

        var url = 'https://shalou.smallzhiyun.com/prize/index.html';
        wx.navigateTo({
          url: self.router + '?url=' + url + '&msg=' + msg
        });
      },


      //开始录音
      recordStart: function recordStart() {
        var self = this;
        console.log('开始录音');
        self.recordState = !self.recordState;

        // 切换图标
      },


      // 试听
      recordPlay: function recordPlay() {
        var self = this;
        console.log('\u8BD5\u542C\u5F55\u97F3');
        var innerAudioContext = wx.createInnerAudioContext();
        innerAudioContext.autoplay = true;
        innerAudioContext.src = self.recordPath;
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


    // 处理文本信息
    value: function RegMsg() {
      console.log('\u6587\u672C\u5904\u7406start');
      var self = this;
      var msg = self.textarea.msg;
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
      console.log('\u6587\u672C\u5904\u7406end');
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var self = this;
      self.type = options.type;
      self.router = options.router;
      if (options.RecordFilePath) {
        wx.playVoice({
          filePath: options.RecordFilePath,
          complete: function complete() {}
        });
      }

      self.$apply();
      console.log(options);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsB/pages/text/text'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ0ZXh0YXJlYSIsInR5cGUiLCJtc2ciLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwibWF4bGVuZ3RoIiwiZm9jdXMiLCJ0ZXh0Iiwicm91dGVyIiwicmVjb3JkU3RhdGUiLCJyZWNvcmRQYXRoIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJyZWNvcmRlck1hbmFnZXIiLCJ3eCIsImdldFJlY29yZGVyTWFuYWdlciIsIm9uU3RhcnQiLCJvblBhdXNlIiwib25TdG9wIiwicmVzIiwidGVtcEZpbGVQYXRoIiwic3RhcnQiLCJzdG9wIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ2V0TXNnIiwiZSIsImRldGFpbCIsInZhbHVlIiwiJGFwcGx5Iiwic2VuZE1zZyIsInVybCIsIm5hdmlnYXRlVG8iLCJyZWNvcmRTdGFydCIsInJlY29yZFBsYXkiLCJpbm5lckF1ZGlvQ29udGV4dCIsImNyZWF0ZUlubmVyQXVkaW9Db250ZXh0IiwiYXV0b3BsYXkiLCJzcmMiLCJvblBsYXkiLCJvbkVycm9yIiwiZXJyTXNnIiwiZXJyQ29kZSIsImV2ZW50cyIsInRlc3RBcnIiLCJyZWciLCJpbmRleCIsImV4ZWMiLCJwdXNoIiwic3Vic3RyaW5nIiwibGFzdEluZGV4IiwibGVuZ3RoIiwib3B0aW9ucyIsIlJlY29yZEZpbGVQYXRoIiwicGxheVZvaWNlIiwiZmlsZVBhdGgiLCJjb21wbGV0ZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxnQkFEUSxFQUNFO0FB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LEdBQXhCO0FBQ0EsVUFBSThDLFVBQVUsRUFBZDtBQUNBO0FBQ0EsVUFBSUMsTUFBTSxzQkFBVjtBQUNBLFVBQUlDLFVBQUo7QUFDQSxVQUFJekIsUUFBUSxDQUFaO0FBQ0EsYUFBUXlCLFFBQVFELElBQUlFLElBQUosQ0FBU2pELEdBQVQsS0FBaUIsSUFBakMsRUFBd0M7QUFDdEM7QUFDQThDLGdCQUFRSSxJQUFSLENBQWFsRCxJQUFJbUQsU0FBSixDQUFjNUIsS0FBZCxFQUFxQndCLElBQUlLLFNBQXpCLENBQWI7QUFDQTtBQUNBN0IsZ0JBQVF3QixJQUFJSyxTQUFaO0FBQ0Q7QUFDRDtBQUNBTixjQUFRSSxJQUFSLENBQWFsRCxJQUFJbUQsU0FBSixDQUFjNUIsS0FBZCxFQUFxQnZCLElBQUlxRCxNQUF6QixDQUFiO0FBQ0F6QyxXQUFLUCxJQUFMLEdBQVl5QyxPQUFaO0FBQ0FsQyxXQUFLbUIsTUFBTDtBQUNBbEIsY0FBUUMsR0FBUjtBQUNEOzs7MkJBdURNd0MsTyxFQUFTO0FBQ2QsVUFBSTFDLE9BQU8sSUFBWDtBQUNBQSxXQUFLYixJQUFMLEdBQVl1RCxRQUFRdkQsSUFBcEI7QUFDQWEsV0FBS04sTUFBTCxHQUFjZ0QsUUFBUWhELE1BQXRCO0FBQ0EsVUFBSWdELFFBQVFDLGNBQVosRUFBNEI7QUFDMUJ2QyxXQUFHd0MsU0FBSCxDQUFhO0FBQ1hDLG9CQUFVSCxRQUFRQyxjQURQO0FBRVhHLG9CQUFVLG9CQUFXLENBQUU7QUFGWixTQUFiO0FBSUQ7O0FBRUQ5QyxXQUFLbUIsTUFBTDtBQUNBbEIsY0FBUUMsR0FBUixDQUFZd0MsT0FBWjtBQUNEOzs7O0VBdklnQyxlQUFLSyxJOztrQkFBbkJsRSxLIiwiZmlsZSI6InRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55WZ6KiAJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICB0ZXh0YXJlYToge1xuICAgICAgdHlwZTogYGAsIC8v5YWl5Y+j6aG16Z2i6KGo56S6XG4gICAgICBtc2c6IGBgLCAvL+i+k+WFpeahhueahOWGheWuuVxuICAgICAgcGxhY2Vob2xkZXI6IGBgLCAvL+i+k+WFpeahhuS4uuepuuaXtuWNoOS9jeesplxuXG4gICAgICBkaXNhYmxlZDogZmFsc2UsIC8v5piv5ZCm56aB55SoXG4gICAgICBtYXhsZW5ndGg6IDEwMCwgLy/mnIDlpKfovpPlhaXplb/luqbvvIzorr7nva7kuLogLTEg55qE5pe25YCZ5LiN6ZmQ5Yi25pyA5aSn6ZW/5bqmXG4gICAgICBmb2N1czogZmFsc2UgLy/ojrflj5bnhKbngrlcbiAgICB9LFxuICAgIHRleHQ6IFtdLCAvL+i9rOWMluWQjueahOaWh+acrFxuICAgIHJvdXRlcjogYGAsIC8v55WZ6KiA5LmL5ZCO6Lez6L2s55qE6aG16Z2iXG4gICAgcmVjb3JkU3RhdGU6IGZhbHNlLCAvL+W9lemfs+eKtuaAgVxuICAgIHJlY29yZFBhdGg6IGBgIC8v5b2V6Z+z5Li05pe25Zyw5Z2AXG4gIH07XG5cbiAgd2F0Y2ggPSB7XG4gICAgcmVjb3JkU3RhdGUobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhgcmVjb3JkU3RhdGUgdmFsdWU6ICR7b2xkVmFsdWV9IC0+ICR7bmV3VmFsdWV9YCk7XG4gICAgICBjb25zdCByZWNvcmRlck1hbmFnZXIgPSB3eC5nZXRSZWNvcmRlck1hbmFnZXIoKTtcbiAgICAgIHJlY29yZGVyTWFuYWdlci5vblN0YXJ0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY29yZGVyIHN0YXJ0Jyk7XG4gICAgICB9KTtcbiAgICAgIHJlY29yZGVyTWFuYWdlci5vblBhdXNlKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY29yZGVyIHBhdXNlJyk7XG4gICAgICB9KTtcbiAgICAgIHJlY29yZGVyTWFuYWdlci5vblN0b3AocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY29yZGVyIHN0b3AnLCByZXMpO1xuICAgICAgICBjb25zdCB7IHRlbXBGaWxlUGF0aCB9ID0gcmVzO1xuICAgICAgICBzZWxmLnJlY29yZFBhdGggPSByZXMudGVtcEZpbGVQYXRoO1xuICAgICAgfSk7XG4gICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgcmVjb3JkZXJNYW5hZ2VyLnN0YXJ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNvcmRlck1hbmFnZXIuc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyDlpITnkIbmlofmnKzkv6Hmga9cbiAgUmVnTXNnKCkge1xuICAgIGNvbnNvbGUubG9nKGDmlofmnKzlpITnkIZzdGFydGApO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgbXNnID0gc2VsZi50ZXh0YXJlYS5tc2c7XG4gICAgbGV0IHRlc3RBcnIgPSBbXTtcbiAgICAvLyDpgYfliLDku6XkuIvnrKblj7fnq4vljbPmiKrlj5blhoXlrrnliIbmrrVcbiAgICBsZXQgcmVnID0gL1vvvIx8LHwufOOAgnzjgIF877yffO+8m3w7fC9dL2c7XG4gICAgbGV0IGluZGV4ID0gYGA7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICB3aGlsZSAoKGluZGV4ID0gcmVnLmV4ZWMobXNnKSAhPSBudWxsKSkge1xuICAgICAgLy8g5oiq5Y+W5Lik5Liq56ym5ZCI5LmL6Ze055qE5paH5a2X77yM5YiG5q615pS+5YWl5pWw57uEXG4gICAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgcmVnLmxhc3RJbmRleCkpO1xuICAgICAgLy8g5qOA5rWL5bm25pS55Y+Y5b2T5YmN56ym5Y+357Si5byVXG4gICAgICBzdGFydCA9IHJlZy5sYXN0SW5kZXg7XG4gICAgfVxuICAgIC8vIOiOt+WPluacgOWQjuS4gOauteaWh+Wtl1xuICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCBtc2cubGVuZ3RoKSk7XG4gICAgc2VsZi50ZXh0ID0gdGVzdEFycjtcbiAgICBzZWxmLiRhcHBseSgpO1xuICAgIGNvbnNvbGUubG9nKGDmlofmnKzlpITnkIZlbmRgKTtcbiAgfVxuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDlrZjlgqjmtojmga9cbiAgICBnZXRNc2coZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyDkv53lrZjovpPlhaXmoYbnlZnoqIBcbiAgICAgIHNlbGYudGV4dGFyZWEubXNnID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xuICAgIH0sXG5cbiAgICAvLyDlj5HpgIHmtojmga9cbiAgICBzZW5kTXNnKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IG1zZyA9IHNlbGYudGV4dGFyZWEubXNnO1xuICAgICAgY29uc29sZS5sb2coc2VsZi50ZXh0KTtcblxuICAgICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vcHJpemUvaW5kZXguaHRtbGA7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgJHtzZWxmLnJvdXRlcn0/dXJsPSR7dXJsfSZtc2c9JHttc2d9YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v5byA5aeL5b2V6Z+zXG4gICAgcmVjb3JkU3RhcnQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZygn5byA5aeL5b2V6Z+zJyk7XG4gICAgICBzZWxmLnJlY29yZFN0YXRlID0gIXNlbGYucmVjb3JkU3RhdGU7XG5cbiAgICAgIC8vIOWIh+aNouWbvuagh1xuICAgIH0sXG5cbiAgICAvLyDor5XlkKxcbiAgICByZWNvcmRQbGF5KCkge1xuICAgICAgbGV0IHNlbGY9dGhpcztcbiAgICAgIGNvbnNvbGUubG9nKGDor5XlkKzlvZXpn7NgKTtcbiAgICAgIGNvbnN0IGlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHNlbGYucmVjb3JkUGF0aDtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uUGxheSgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCflvIDlp4vmkq3mlL4nKTtcbiAgICAgIH0pO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FcnJvcihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyckNvZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICBzZWxmLnJvdXRlciA9IG9wdGlvbnMucm91dGVyO1xuICAgIGlmIChvcHRpb25zLlJlY29yZEZpbGVQYXRoKSB7XG4gICAgICB3eC5wbGF5Vm9pY2Uoe1xuICAgICAgICBmaWxlUGF0aDogb3B0aW9ucy5SZWNvcmRGaWxlUGF0aCxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge31cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==