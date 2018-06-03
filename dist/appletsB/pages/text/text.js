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
      recordPath: '', //录音临时地址
      timeNum: 0, //录音时长
      timer: '' //定时器
    }, _this.watch = {
      recordState: function recordState(newValue, oldValue) {
        var self = this;
        console.log('recordState value: ' + oldValue + ' -> ' + newValue);
        var recorderManager = wx.getRecorderManager();
        recorderManager.onStart(function () {
          console.log('recorder start');
          self.timer = setInterval(function () {
            self.timeNum = self.timeNum + 1;
            self.$apply();
          }, 1000);
        });
        recorderManager.onPause(function () {
          console.log('recorder pause');
        });
        recorderManager.onStop(function (res) {
          console.log('recorder stop', res);
          clearInterval(self.timer);
          var tempFilePath = res.tempFilePath;

          self.recordPath = res.tempFilePath;
          self.$apply();
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
          url: self.router + '?url=' + url + '&msg=' + msg + '&recordUrl=' + self.recordPath
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
      },


      // 删除录音
      recordDelete: function recordDelete() {
        console.log('\u5220\u9664\u5F55\u97F3');
        var self = this;
        self.recordPath = '';
        self.recordState = false;
        self.timeNum = 0;
      },


      // 保存录音到服务器
      recordSave: function recordSave() {
        var self = this;
        console.log(self.recordPath.substring(0, 5));
        if (self.recordPath.substring(0, 5) == 'http:') {
          console.log('\u4FDD\u5B58\u5F55\u97F3');
          self.fileSave(self.recordPath, 'record');
        } else if (self.recordPath.substring(0, 5) == 'wxfil') {
          console.log('\u4FDD\u5B58\u5F55\u97F3');
          self.fileSave(self.recordPath, 'record');
        } else if (self.recordPath.substring(0, 5) == 'https') {
          self.sendMsg();
        } else {
          console.log('\u6CA1\u6709\u5F55\u97F3');
        }
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

    // 知晓云文件保存

  }, {
    key: 'fileSave',
    value: function fileSave(filePath, categoryName) {
      var self = this;
      var MyFile = new wx.BaaS.File();
      var fileParams = { filePath: filePath };
      var metaData = { categoryName: categoryName };

      MyFile.upload(fileParams, metaData).then(function (res) {
        var data = res.data;
        console.log(res);
        // 保存录音云文件地址
        self.recordPath = res.data.path;
        self.$apply();
        console.log(self.recordPath);
        // 跳转页面
        self.sendMsg();
      }, function (err) {
        console.log(err);
      });
    }

    // 发送消息

  }, {
    key: 'sendMsg',
    value: function sendMsg() {
      var self = this;
      var msg = self.textarea.msg;
      console.log(self.text);

      var url = 'https://shalou.smallzhiyun.com/prize/index.html';
      wx.navigateTo({
        url: self.router + '?url=' + url + '&msg=' + msg + '&recordUrl=' + self.recordPath
      });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ0ZXh0YXJlYSIsInR5cGUiLCJtc2ciLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwibWF4bGVuZ3RoIiwiZm9jdXMiLCJ0ZXh0Iiwicm91dGVyIiwicmVjb3JkU3RhdGUiLCJyZWNvcmRQYXRoIiwidGltZU51bSIsInRpbWVyIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJyZWNvcmRlck1hbmFnZXIiLCJ3eCIsImdldFJlY29yZGVyTWFuYWdlciIsIm9uU3RhcnQiLCJzZXRJbnRlcnZhbCIsIiRhcHBseSIsIm9uUGF1c2UiLCJvblN0b3AiLCJyZXMiLCJjbGVhckludGVydmFsIiwidGVtcEZpbGVQYXRoIiwic3RhcnQiLCJzdG9wIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ2V0TXNnIiwiZSIsImRldGFpbCIsInZhbHVlIiwic2VuZE1zZyIsInVybCIsIm5hdmlnYXRlVG8iLCJyZWNvcmRTdGFydCIsInJlY29yZFBsYXkiLCJpbm5lckF1ZGlvQ29udGV4dCIsImNyZWF0ZUlubmVyQXVkaW9Db250ZXh0IiwiYXV0b3BsYXkiLCJzcmMiLCJvblBsYXkiLCJvbkVycm9yIiwiZXJyTXNnIiwiZXJyQ29kZSIsInJlY29yZERlbGV0ZSIsInJlY29yZFNhdmUiLCJzdWJzdHJpbmciLCJmaWxlU2F2ZSIsImV2ZW50cyIsInRlc3RBcnIiLCJyZWciLCJpbmRleCIsImV4ZWMiLCJwdXNoIiwibGFzdEluZGV4IiwibGVuZ3RoIiwiZmlsZVBhdGgiLCJjYXRlZ29yeU5hbWUiLCJNeUZpbGUiLCJCYWFTIiwiRmlsZSIsImZpbGVQYXJhbXMiLCJtZXRhRGF0YSIsInVwbG9hZCIsInRoZW4iLCJwYXRoIiwiZXJyIiwib3B0aW9ucyIsIlJlY29yZEZpbGVQYXRoIiwicGxheVZv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Z0JBQVFDLEdBQVIsQ0FBWVMsR0FBWjtBQUNBO0FBQ0FYLGFBQUtOLFVBQUwsR0FBa0JpQixJQUFJNUIsSUFBSixDQUFTeUUsSUFBM0I7QUFDQXhELGFBQUtRLE1BQUw7QUFDQVAsZ0JBQVFDLEdBQVIsQ0FBWUYsS0FBS04sVUFBakI7QUFDQTtBQUNBTSxhQUFLc0IsT0FBTDtBQUNELE9BVkgsRUFXRSxlQUFPO0FBQ0xyQixnQkFBUUMsR0FBUixDQUFZdUQsR0FBWjtBQUNELE9BYkg7QUFlRDs7QUFFRDs7Ozs4QkFDVTtBQUNSLFVBQUl6RCxPQUFPLElBQVg7QUFDQSxVQUFJZCxNQUFNYyxLQUFLaEIsUUFBTCxDQUFjRSxHQUF4QjtBQUNBZSxjQUFRQyxHQUFSLENBQVlGLEtBQUtULElBQWpCOztBQUVBLFVBQUlnQyx1REFBSjtBQUNBbkIsU0FBR29CLFVBQUgsQ0FBYztBQUNaRCxhQUFRdkIsS0FBS1IsTUFBYixhQUEyQitCLEdBQTNCLGFBQXNDckMsR0FBdEMsbUJBQXVEYyxLQUFLTjtBQURoRCxPQUFkO0FBR0Q7OzsyQkFpRk1nRSxPLEVBQVM7QUFDZCxVQUFJMUQsT0FBTyxJQUFYO0FBQ0FBLFdBQUtmLElBQUwsR0FBWXlFLFFBQVF6RSxJQUFwQjtBQUNBZSxXQUFLUixNQUFMLEdBQWNrRSxRQUFRbEUsTUFBdEI7QUFDQSxVQUFJa0UsUUFBUUMsY0FBWixFQUE0QjtBQUMxQnZELFdBQUd3RCxTQUFILENBQWE7QUFDWGIsb0JBQVVXLFFBQVFDLGNBRFA7QUFFWEUsb0JBQVUsb0JBQVcsQ0FBRTtBQUZaLFNBQWI7QUFJRDs7QUFFRDdELFdBQUtRLE1BQUw7QUFDQVAsY0FBUUMsR0FBUixDQUFZd0QsT0FBWjtBQUNEOzs7O0VBNU1nQyxlQUFLSSxJOztrQkFBbkJuRixLIiwiZmlsZSI6InRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55WZ6KiAJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICB0ZXh0YXJlYToge1xuICAgICAgdHlwZTogYGAsIC8v5YWl5Y+j6aG16Z2i6KGo56S6XG4gICAgICBtc2c6IGBgLCAvL+i+k+WFpeahhueahOWGheWuuVxuICAgICAgcGxhY2Vob2xkZXI6IGBgLCAvL+i+k+WFpeahhuS4uuepuuaXtuWNoOS9jeesplxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLCAvL+aYr+WQpuemgeeUqFxuICAgICAgbWF4bGVuZ3RoOiAxMDAsIC8v5pyA5aSn6L6T5YWl6ZW/5bqm77yM6K6+572u5Li6IC0xIOeahOaXtuWAmeS4jemZkOWItuacgOWkp+mVv+W6plxuICAgICAgZm9jdXM6IGZhbHNlIC8v6I635Y+W54Sm54K5XG4gICAgfSxcbiAgICB0ZXh0OiBbXSwgLy/ovazljJblkI7nmoTmlofmnKxcbiAgICByb3V0ZXI6IGBgLCAvL+eVmeiogOS5i+WQjui3s+i9rOeahOmhtemdolxuICAgIHJlY29yZFN0YXRlOiBmYWxzZSwgLy/lvZXpn7PnirbmgIFcbiAgICByZWNvcmRQYXRoOiBgYCwgLy/lvZXpn7PkuLTml7blnLDlnYBcbiAgICB0aW1lTnVtOiAwLCAvL+W9lemfs+aXtumVv1xuICAgIHRpbWVyOiBgYCAvL+WumuaXtuWZqFxuICB9O1xuXG4gIHdhdGNoID0ge1xuICAgIHJlY29yZFN0YXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2coYHJlY29yZFN0YXRlIHZhbHVlOiAke29sZFZhbHVlfSAtPiAke25ld1ZhbHVlfWApO1xuICAgICAgY29uc3QgcmVjb3JkZXJNYW5hZ2VyID0gd3guZ2V0UmVjb3JkZXJNYW5hZ2VyKCk7XG4gICAgICByZWNvcmRlck1hbmFnZXIub25TdGFydCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWNvcmRlciBzdGFydCcpO1xuICAgICAgICBzZWxmLnRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi50aW1lTnVtID0gc2VsZi50aW1lTnVtICsgMTtcbiAgICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgICAgcmVjb3JkZXJNYW5hZ2VyLm9uUGF1c2UoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVjb3JkZXIgcGF1c2UnKTtcbiAgICAgIH0pO1xuICAgICAgcmVjb3JkZXJNYW5hZ2VyLm9uU3RvcChyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVjb3JkZXIgc3RvcCcsIHJlcyk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc2VsZi50aW1lcik7XG4gICAgICAgIGNvbnN0IHsgdGVtcEZpbGVQYXRoIH0gPSByZXM7XG4gICAgICAgIHNlbGYucmVjb3JkUGF0aCA9IHJlcy50ZW1wRmlsZVBhdGg7XG4gICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICByZWNvcmRlck1hbmFnZXIuc3RhcnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlY29yZGVyTWFuYWdlci5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIOWkhOeQhuaWh+acrOS/oeaBr1xuICBSZWdNc2coKSB7XG4gICAgY29uc29sZS5sb2coYOaWh+acrOWkhOeQhnN0YXJ0YCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBtc2cgPSBzZWxmLnRleHRhcmVhLm1zZztcbiAgICBsZXQgdGVzdEFyciA9IFtdO1xuICAgIC8vIOmBh+WIsOS7peS4i+espuWPt+eri+WNs+aIquWPluWGheWuueWIhuautVxuICAgIGxldCByZWcgPSAvW++8jHwsfC5844CCfOOAgXzvvJ9877ybfDt8L10vZztcbiAgICBsZXQgaW5kZXggPSBgYDtcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIHdoaWxlICgoaW5kZXggPSByZWcuZXhlYyhtc2cpICE9IG51bGwpKSB7XG4gICAgICAvLyDmiKrlj5bkuKTkuKrnrKblkIjkuYvpl7TnmoTmloflrZfvvIzliIbmrrXmlL7lhaXmlbDnu4RcbiAgICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCByZWcubGFzdEluZGV4KSk7XG4gICAgICAvLyDmo4DmtYvlubbmlLnlj5jlvZPliY3nrKblj7fntKLlvJVcbiAgICAgIHN0YXJ0ID0gcmVnLmxhc3RJbmRleDtcbiAgICB9XG4gICAgLy8g6I635Y+W5pyA5ZCO5LiA5q615paH5a2XXG4gICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIG1zZy5sZW5ndGgpKTtcbiAgICBzZWxmLnRleHQgPSB0ZXN0QXJyO1xuICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgY29uc29sZS5sb2coYOaWh+acrOWkhOeQhmVuZGApO1xuICB9XG5cbiAgLy8g55+l5pmT5LqR5paH5Lu25L+d5a2YXG4gIGZpbGVTYXZlKGZpbGVQYXRoLCBjYXRlZ29yeU5hbWUpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IE15RmlsZSA9IG5ldyB3eC5CYWFTLkZpbGUoKTtcbiAgICBsZXQgZmlsZVBhcmFtcyA9IHsgZmlsZVBhdGggfTtcbiAgICBsZXQgbWV0YURhdGEgPSB7IGNhdGVnb3J5TmFtZSB9O1xuXG4gICAgTXlGaWxlLnVwbG9hZChmaWxlUGFyYW1zLCBtZXRhRGF0YSkudGhlbihcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIC8vIOS/neWtmOW9lemfs+S6keaWh+S7tuWcsOWdgFxuICAgICAgICBzZWxmLnJlY29yZFBhdGggPSByZXMuZGF0YS5wYXRoO1xuICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnJlY29yZFBhdGgpO1xuICAgICAgICAvLyDot7PovazpobXpnaJcbiAgICAgICAgc2VsZi5zZW5kTXNnKCk7XG4gICAgICB9LFxuICAgICAgZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLy8g5Y+R6YCB5raI5oGvXG4gIHNlbmRNc2coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBtc2cgPSBzZWxmLnRleHRhcmVhLm1zZztcbiAgICBjb25zb2xlLmxvZyhzZWxmLnRleHQpO1xuXG4gICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vcHJpemUvaW5kZXguaHRtbGA7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAke3NlbGYucm91dGVyfT91cmw9JHt1cmx9Jm1zZz0ke21zZ30mcmVjb3JkVXJsPSR7c2VsZi5yZWNvcmRQYXRofWBcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDlrZjlgqjmtojmga9cbiAgICBnZXRNc2coZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyDkv53lrZjovpPlhaXmoYbnlZnoqIBcbiAgICAgIHNlbGYudGV4dGFyZWEubXNnID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xuICAgIH0sXG5cbiAgICAvLyDlj5HpgIHmtojmga9cbiAgICBzZW5kTXNnKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IG1zZyA9IHNlbGYudGV4dGFyZWEubXNnO1xuICAgICAgY29uc29sZS5sb2coc2VsZi50ZXh0KTtcblxuICAgICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vcHJpemUvaW5kZXguaHRtbGA7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgJHtzZWxmLnJvdXRlcn0/dXJsPSR7dXJsfSZtc2c9JHttc2d9JnJlY29yZFVybD0ke3NlbGYucmVjb3JkUGF0aH1gXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/lvIDlp4vlvZXpn7NcbiAgICByZWNvcmRTdGFydCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKCflvIDlp4vlvZXpn7MnKTtcbiAgICAgIHNlbGYucmVjb3JkU3RhdGUgPSAhc2VsZi5yZWNvcmRTdGF0ZTtcblxuICAgICAgLy8g5YiH5o2i5Zu+5qCHXG4gICAgfSxcblxuICAgIC8vIOivleWQrFxuICAgIHJlY29yZFBsYXkoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhg6K+V5ZCs5b2V6Z+zYCk7XG4gICAgICBjb25zdCBpbm5lckF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IHRydWU7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSBzZWxmLnJlY29yZFBhdGg7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vblBsYXkoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn5byA5aeL5pKt5pS+Jyk7XG4gICAgICB9KTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uRXJyb3IocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJDb2RlKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyDliKDpmaTlvZXpn7NcbiAgICByZWNvcmREZWxldGUoKSB7XG4gICAgICBjb25zb2xlLmxvZyhg5Yig6Zmk5b2V6Z+zYCk7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLnJlY29yZFBhdGggPSBgYDtcbiAgICAgIHNlbGYucmVjb3JkU3RhdGUgPSBmYWxzZTtcbiAgICAgIHNlbGYudGltZU51bSA9IDA7XG4gICAgfSxcblxuICAgIC8vIOS/neWtmOW9lemfs+WIsOacjeWKoeWZqFxuICAgIHJlY29yZFNhdmUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhzZWxmLnJlY29yZFBhdGguc3Vic3RyaW5nKDAsIDUpKTtcbiAgICAgIGlmIChzZWxmLnJlY29yZFBhdGguc3Vic3RyaW5nKDAsIDUpID09IGBodHRwOmApIHtcbiAgICAgICAgY29uc29sZS5sb2coYOS/neWtmOW9lemfs2ApO1xuICAgICAgICBzZWxmLmZpbGVTYXZlKHNlbGYucmVjb3JkUGF0aCwgYHJlY29yZGApO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLnJlY29yZFBhdGguc3Vic3RyaW5nKDAsIDUpID09IGB3eGZpbGApIHtcbiAgICAgICAgY29uc29sZS5sb2coYOS/neWtmOW9lemfs2ApO1xuICAgICAgICBzZWxmLmZpbGVTYXZlKHNlbGYucmVjb3JkUGF0aCwgYHJlY29yZGApO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLnJlY29yZFBhdGguc3Vic3RyaW5nKDAsIDUpID09IGBodHRwc2ApIHtcbiAgICAgICAgc2VsZi5zZW5kTXNnKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhg5rKh5pyJ5b2V6Z+zYCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICBzZWxmLnJvdXRlciA9IG9wdGlvbnMucm91dGVyO1xuICAgIGlmIChvcHRpb25zLlJlY29yZEZpbGVQYXRoKSB7XG4gICAgICB3eC5wbGF5Vm9pY2Uoe1xuICAgICAgICBmaWxlUGF0aDogb3B0aW9ucy5SZWNvcmRGaWxlUGF0aCxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge31cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==