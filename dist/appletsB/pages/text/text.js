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
      timer: '', //定时器
      formId: '' //模板id
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

        setTimeout(function () {
          var url = 'https://shalou.smallzhiyun.com/prize/index.html';
          wx.navigateTo({
            url: self.router + '?url=' + url + '&msg=' + msg + '&recordUrl=' + self.recordPath + '&formId=' + self.formId
          });
        }, 300);
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
      },


      // 模板触发事件
      letterModule: function letterModule(e) {
        var self = this;
        console.log('\u6A21\u677F\u4E8B\u4EF6');
        console.log(e.detail.formId);
        self.formId = e.detail.formId;
        self.$apply();
        console.log(self.formId);
        // 先上报formId,然后创建表，触发Trigger
        wx.BaaS.wxReportTicket(e.detail.formId).then(function (res) {
          console.log('\u6D4B\u8BD5formid success\u56DE\u8C03');
          var card_time = new Date();

          // 设置模板消息通知
          // 向 tableID 为 39006 的数据表插入一条记录
          var tableID = 39006;
          var Product = new wx.BaaS.TableObject(tableID);
          var product = Product.create();

          // 设置方式一
          var apple = {
            // 信件已查收
            send_card: 'sendCard',
            card_name: '\u6BCD\u4EB2\u8282\u8D3A\u5361',
            state: '\u5DF2\u63A5\u6536',
            directions: '\u6C99\u6F0F\u7684\u65F6\u5149',
            note: 'card_time'
          };

          product.set(apple).save().then(function (res) {
            // success
            console.log('\u521B\u5EFA\u8868\u6210\u529F');
          }, function (err) {
            // err
          });
        }, function (err) {
          console.log('\u6D4B\u8BD5formid err\u56DE\u8C03');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ0ZXh0YXJlYSIsInR5cGUiLCJtc2ciLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwibWF4bGVuZ3RoIiwiZm9jdXMiLCJ0ZXh0Iiwicm91dGVyIiwicmVjb3JkU3RhdGUiLCJyZWNvcmRQYXRoIiwidGltZU51bSIsInRpbWVyIiwiZm9ybUlkIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJyZWNvcmRlck1hbmFnZXIiLCJ3eCIsImdldFJlY29yZGVyTWFuYWdlciIsIm9uU3RhcnQiLCJzZXRJbnRlcnZhbCIsIiRhcHBseSIsIm9uUGF1c2UiLCJvblN0b3AiLCJyZXMiLCJjbGVhckludGVydmFsIiwidGVtcEZpbGVQYXRoIiwic3RhcnQiLCJzdG9wIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ2V0TXNnIiwiZSIsImRldGFpbCIsInZhbHVlIiwic2VuZE1zZyIsInNldFRpbWVvdXQiLCJ1cmwiLCJuYXZpZ2F0ZVRvIiwicmVjb3JkU3RhcnQiLCJyZWNvcmRQbGF5IiwiaW5uZXJBdWRpb0NvbnRleHQiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsImF1dG9wbGF5Iiwic3JjIiwib25QbGF5Iiwib25FcnJvciIsImVyck1zZyIsImVyckNvZGUiLCJyZWNvcmREZWxldGUiLCJyZWNvcmRTYXZlIiwic3Vic3RyaW5nIiwiZmlsZVNhdmUiLCJsZXR0ZXJNb2R1bGUiLCJCYWFTIiwid3hSZXBvcnRUaWNrZXQiLCJ0aGVuIiwiY2FyZF90aW1lIiwiRGF0ZSIsInRhYmxlSUQiLCJQcm9kdWN0IiwiVGFibGVPYmplY3QiLCJwcm9kdWN0IiwiY3JlYXRlIiwiYXBwbGUiLCJzZW5kX2NhcmQiLCJjYXJkX25hbWUiLCJzdGF0ZSIsImRpcmVjdGlvbnMiLCJub3RlIiwic2V0Iiwic2F2ZSIsImV2ZW50cyIsInRlc3RBcnIiLCJyZWciLCJpbmRleCIsImV4ZWMiLCJwdXNoIiwibGFzdEluZGV4IiwibGVuZ3RoIiwiZmlsZVBhdGgiLCJjYXRlZ29yeU5hbWUiLCJNeUZpbGUiLCJGaWxlIiwiZmlsZVBhcmFtcyIsIm1ldGFEYXRhIiwidXBsb2FkIiwicGF0aCIsImVyciIsIm9wdGlvbnMiLCJSZWNvcmRGaWxlUGF0aCIsInBsYXlWb2ljZSIsImNvbXBsZXRlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGdCQURRLEVBQ0U7QUFDVkMsZUFGUSxFQUVDO0FBQ1RDLHVCQUhRLEVBR1M7QUFDakJDLGtCQUFVLEtBSkYsRUFJUztBQUNqQkMsbUJBQVcsR0FMSCxFQUtRO0FBQ2hCQyxlQUFPLEtBTkMsQ0FNSztBQU5MLE9BREw7QUFTTEMsWUFBTSxFQVRELEVBU0s7QUFDVkMsZ0JBVkssRUFVTztBQUNaQyxtQkFBYSxLQVhSLEVBV2U7QUFDcEJDLG9CQVpLLEVBWVc7QUFDaEJDLGVBQVMsQ0FiSixFQWFPO0FBQ1pDLGVBZEssRUFjTTtBQUNYQyxnQkFmSyxDQWVNO0FBZk4sSyxRQWtCUEMsSyxHQUFRO0FBQ05MLGlCQURNLHVCQUNNTSxRQUROLEVBQ2dCQyxRQURoQixFQUMwQjtBQUM5QixZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIseUJBQWtDSCxRQUFsQyxZQUFpREQsUUFBakQ7QUFDQSxZQUFNSyxrQkFBa0JDLEdBQUdDLGtCQUFILEVBQXhCO0FBQ0FGLHdCQUFnQkcsT0FBaEIsQ0FBd0IsWUFBTTtBQUM1Qkwsa0JBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBRixlQUFLTCxLQUFMLEdBQWFZLFlBQVksWUFBVztBQUNsQ1AsaUJBQUtOLE9BQUws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QUNEOzs7O0VBbFFnQyxlQUFLSSxJOztrQkFBbkJ0RyxLIiwiZmlsZSI6InRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55WZ6KiAJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICB0ZXh0YXJlYToge1xuICAgICAgdHlwZTogYGAsIC8v5YWl5Y+j6aG16Z2i6KGo56S6XG4gICAgICBtc2c6IGBgLCAvL+i+k+WFpeahhueahOWGheWuuVxuICAgICAgcGxhY2Vob2xkZXI6IGBgLCAvL+i+k+WFpeahhuS4uuepuuaXtuWNoOS9jeesplxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLCAvL+aYr+WQpuemgeeUqFxuICAgICAgbWF4bGVuZ3RoOiAxMDAsIC8v5pyA5aSn6L6T5YWl6ZW/5bqm77yM6K6+572u5Li6IC0xIOeahOaXtuWAmeS4jemZkOWItuacgOWkp+mVv+W6plxuICAgICAgZm9jdXM6IGZhbHNlIC8v6I635Y+W54Sm54K5XG4gICAgfSxcbiAgICB0ZXh0OiBbXSwgLy/ovazljJblkI7nmoTmlofmnKxcbiAgICByb3V0ZXI6IGBgLCAvL+eVmeiogOS5i+WQjui3s+i9rOeahOmhtemdolxuICAgIHJlY29yZFN0YXRlOiBmYWxzZSwgLy/lvZXpn7PnirbmgIFcbiAgICByZWNvcmRQYXRoOiBgYCwgLy/lvZXpn7PkuLTml7blnLDlnYBcbiAgICB0aW1lTnVtOiAwLCAvL+W9lemfs+aXtumVv1xuICAgIHRpbWVyOiBgYCwgLy/lrprml7blmahcbiAgICBmb3JtSWQ6IGBgIC8v5qih5p2/aWRcbiAgfTtcblxuICB3YXRjaCA9IHtcbiAgICByZWNvcmRTdGF0ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKGByZWNvcmRTdGF0ZSB2YWx1ZTogJHtvbGRWYWx1ZX0gLT4gJHtuZXdWYWx1ZX1gKTtcbiAgICAgIGNvbnN0IHJlY29yZGVyTWFuYWdlciA9IHd4LmdldFJlY29yZGVyTWFuYWdlcigpO1xuICAgICAgcmVjb3JkZXJNYW5hZ2VyLm9uU3RhcnQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVjb3JkZXIgc3RhcnQnKTtcbiAgICAgICAgc2VsZi50aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYudGltZU51bSA9IHNlbGYudGltZU51bSArIDE7XG4gICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9KTtcbiAgICAgIHJlY29yZGVyTWFuYWdlci5vblBhdXNlKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY29yZGVyIHBhdXNlJyk7XG4gICAgICB9KTtcbiAgICAgIHJlY29yZGVyTWFuYWdlci5vblN0b3AocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY29yZGVyIHN0b3AnLCByZXMpO1xuICAgICAgICBjbGVhckludGVydmFsKHNlbGYudGltZXIpO1xuICAgICAgICBjb25zdCB7IHRlbXBGaWxlUGF0aCB9ID0gcmVzO1xuICAgICAgICBzZWxmLnJlY29yZFBhdGggPSByZXMudGVtcEZpbGVQYXRoO1xuICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgfSk7XG4gICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgcmVjb3JkZXJNYW5hZ2VyLnN0YXJ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNvcmRlck1hbmFnZXIuc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyDlpITnkIbmlofmnKzkv6Hmga9cbiAgUmVnTXNnKCkge1xuICAgIGNvbnNvbGUubG9nKGDmlofmnKzlpITnkIZzdGFydGApO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgbXNnID0gc2VsZi50ZXh0YXJlYS5tc2c7XG4gICAgbGV0IHRlc3RBcnIgPSBbXTtcbiAgICAvLyDpgYfliLDku6XkuIvnrKblj7fnq4vljbPmiKrlj5blhoXlrrnliIbmrrVcbiAgICBsZXQgcmVnID0gL1vvvIx8LHwufOOAgnzjgIF877yffO+8m3w7fC9dL2c7XG4gICAgbGV0IGluZGV4ID0gYGA7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICB3aGlsZSAoKGluZGV4ID0gcmVnLmV4ZWMobXNnKSAhPSBudWxsKSkge1xuICAgICAgLy8g5oiq5Y+W5Lik5Liq56ym5ZCI5LmL6Ze055qE5paH5a2X77yM5YiG5q615pS+5YWl5pWw57uEXG4gICAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgcmVnLmxhc3RJbmRleCkpO1xuICAgICAgLy8g5qOA5rWL5bm25pS55Y+Y5b2T5YmN56ym5Y+357Si5byVXG4gICAgICBzdGFydCA9IHJlZy5sYXN0SW5kZXg7XG4gICAgfVxuICAgIC8vIOiOt+WPluacgOWQjuS4gOauteaWh+Wtl1xuICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCBtc2cubGVuZ3RoKSk7XG4gICAgc2VsZi50ZXh0ID0gdGVzdEFycjtcbiAgICBzZWxmLiRhcHBseSgpO1xuICAgIGNvbnNvbGUubG9nKGDmlofmnKzlpITnkIZlbmRgKTtcbiAgfVxuXG4gIC8vIOefpeaZk+S6keaWh+S7tuS/neWtmFxuICBmaWxlU2F2ZShmaWxlUGF0aCwgY2F0ZWdvcnlOYW1lKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBNeUZpbGUgPSBuZXcgd3guQmFhUy5GaWxlKCk7XG4gICAgbGV0IGZpbGVQYXJhbXMgPSB7IGZpbGVQYXRoIH07XG4gICAgbGV0IG1ldGFEYXRhID0geyBjYXRlZ29yeU5hbWUgfTtcblxuICAgIE15RmlsZS51cGxvYWQoZmlsZVBhcmFtcywgbWV0YURhdGEpLnRoZW4oXG4gICAgICByZXMgPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAvLyDkv53lrZjlvZXpn7PkupHmlofku7blnLDlnYBcbiAgICAgICAgc2VsZi5yZWNvcmRQYXRoID0gcmVzLmRhdGEucGF0aDtcbiAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi5yZWNvcmRQYXRoKTtcbiAgICAgICAgLy8g6Lez6L2s6aG16Z2iXG4gICAgICAgIHNlbGYuc2VuZE1zZygpO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8vIOWPkemAgea2iOaBr1xuICBzZW5kTXNnKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgbXNnID0gc2VsZi50ZXh0YXJlYS5tc2c7XG4gICAgY29uc29sZS5sb2coc2VsZi50ZXh0KTtcblxuICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9zaGFsb3Uuc21hbGx6aGl5dW4uY29tL3ByaXplL2luZGV4Lmh0bWxgO1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgJHtzZWxmLnJvdXRlcn0/dXJsPSR7dXJsfSZtc2c9JHttc2d9JnJlY29yZFVybD0ke3NlbGYucmVjb3JkUGF0aH1gXG4gICAgfSk7XG4gIH1cblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g5a2Y5YKo5raI5oGvXG4gICAgZ2V0TXNnKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgLy8g5L+d5a2Y6L6T5YWl5qGG55WZ6KiAXG4gICAgICBzZWxmLnRleHRhcmVhLm1zZyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKTtcbiAgICB9LFxuXG4gICAgLy8g5Y+R6YCB5raI5oGvXG4gICAgc2VuZE1zZygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGxldCBtc2cgPSBzZWxmLnRleHRhcmVhLm1zZztcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYudGV4dCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgdXJsID0gYGh0dHBzOi8vc2hhbG91LnNtYWxsemhpeXVuLmNvbS9wcml6ZS9pbmRleC5odG1sYDtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgJHtzZWxmLnJvdXRlcn0/dXJsPSR7dXJsfSZtc2c9JHttc2d9JnJlY29yZFVybD0ke1xuICAgICAgICAgICAgc2VsZi5yZWNvcmRQYXRoXG4gICAgICAgICAgfSZmb3JtSWQ9JHtzZWxmLmZvcm1JZH1gXG4gICAgICAgIH0pO1xuICAgICAgfSwgMzAwKTtcbiAgICB9LFxuXG4gICAgLy/lvIDlp4vlvZXpn7NcbiAgICByZWNvcmRTdGFydCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKCflvIDlp4vlvZXpn7MnKTtcbiAgICAgIHNlbGYucmVjb3JkU3RhdGUgPSAhc2VsZi5yZWNvcmRTdGF0ZTtcblxuICAgICAgLy8g5YiH5o2i5Zu+5qCHXG4gICAgfSxcblxuICAgIC8vIOivleWQrFxuICAgIHJlY29yZFBsYXkoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhg6K+V5ZCs5b2V6Z+zYCk7XG4gICAgICBjb25zdCBpbm5lckF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IHRydWU7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSBzZWxmLnJlY29yZFBhdGg7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vblBsYXkoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn5byA5aeL5pKt5pS+Jyk7XG4gICAgICB9KTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uRXJyb3IocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJDb2RlKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyDliKDpmaTlvZXpn7NcbiAgICByZWNvcmREZWxldGUoKSB7XG4gICAgICBjb25zb2xlLmxvZyhg5Yig6Zmk5b2V6Z+zYCk7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLnJlY29yZFBhdGggPSBgYDtcbiAgICAgIHNlbGYucmVjb3JkU3RhdGUgPSBmYWxzZTtcbiAgICAgIHNlbGYudGltZU51bSA9IDA7XG4gICAgfSxcblxuICAgIC8vIOS/neWtmOW9lemfs+WIsOacjeWKoeWZqFxuICAgIHJlY29yZFNhdmUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhzZWxmLnJlY29yZFBhdGguc3Vic3RyaW5nKDAsIDUpKTtcbiAgICAgIGlmIChzZWxmLnJlY29yZFBhdGguc3Vic3RyaW5nKDAsIDUpID09IGBodHRwOmApIHtcbiAgICAgICAgY29uc29sZS5sb2coYOS/neWtmOW9lemfs2ApO1xuICAgICAgICBzZWxmLmZpbGVTYXZlKHNlbGYucmVjb3JkUGF0aCwgYHJlY29yZGApO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLnJlY29yZFBhdGguc3Vic3RyaW5nKDAsIDUpID09IGB3eGZpbGApIHtcbiAgICAgICAgY29uc29sZS5sb2coYOS/neWtmOW9lemfs2ApO1xuICAgICAgICBzZWxmLmZpbGVTYXZlKHNlbGYucmVjb3JkUGF0aCwgYHJlY29yZGApO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLnJlY29yZFBhdGguc3Vic3RyaW5nKDAsIDUpID09IGBodHRwc2ApIHtcbiAgICAgICAgc2VsZi5zZW5kTXNnKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhg5rKh5pyJ5b2V6Z+zYCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIOaooeadv+inpuWPkeS6i+S7tlxuICAgIGxldHRlck1vZHVsZShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhg5qih5p2/5LqL5Lu2YCk7XG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC5mb3JtSWQpO1xuICAgICAgc2VsZi5mb3JtSWQgPSBlLmRldGFpbC5mb3JtSWQ7XG4gICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgY29uc29sZS5sb2coc2VsZi5mb3JtSWQpO1xuICAgICAgLy8g5YWI5LiK5oqlZm9ybUlkLOeEtuWQjuWIm+W7uuihqO+8jOinpuWPkVRyaWdnZXJcbiAgICAgIHd4LkJhYVMud3hSZXBvcnRUaWNrZXQoZS5kZXRhaWwuZm9ybUlkKS50aGVuKFxuICAgICAgICByZXMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGDmtYvor5Vmb3JtaWQgc3VjY2Vzc+Wbnuiwg2ApO1xuICAgICAgICAgIGxldCBjYXJkX3RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgLy8g6K6+572u5qih5p2/5raI5oGv6YCa55+lXG4gICAgICAgICAgLy8g5ZCRIHRhYmxlSUQg5Li6IDM5MDA2IOeahOaVsOaNruihqOaPkuWFpeS4gOadoeiusOW9lVxuICAgICAgICAgIGxldCB0YWJsZUlEID0gMzkwMDY7XG4gICAgICAgICAgbGV0IFByb2R1Y3QgPSBuZXcgd3guQmFhUy5UYWJsZU9iamVjdCh0YWJsZUlEKTtcbiAgICAgICAgICBsZXQgcHJvZHVjdCA9IFByb2R1Y3QuY3JlYXRlKCk7XG5cbiAgICAgICAgICAvLyDorr7nva7mlrnlvI/kuIBcbiAgICAgICAgICBsZXQgYXBwbGUgPSB7XG4gICAgICAgICAgICAvLyDkv6Hku7blt7Lmn6XmlLZcbiAgICAgICAgICAgIHNlbmRfY2FyZDogYHNlbmRDYXJkYCxcbiAgICAgICAgICAgIGNhcmRfbmFtZTogYOavjeS6suiKgui0uuWNoWAsXG4gICAgICAgICAgICBzdGF0ZTogYOW3suaOpeaUtmAsXG4gICAgICAgICAgICBkaXJlY3Rpb25zOiBg5rKZ5ryP55qE5pe25YWJYCxcbiAgICAgICAgICAgIG5vdGU6ICdjYXJkX3RpbWUnXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHByb2R1Y3RcbiAgICAgICAgICAgIC5zZXQoYXBwbGUpXG4gICAgICAgICAgICAuc2F2ZSgpXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOWIm+W7uuihqOaIkOWKn2ApO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGVyclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGDmtYvor5Vmb3JtaWQgZXJy5Zue6LCDYCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICBzZWxmLnJvdXRlciA9IG9wdGlvbnMucm91dGVyO1xuICAgIGlmIChvcHRpb25zLlJlY29yZEZpbGVQYXRoKSB7XG4gICAgICB3eC5wbGF5Vm9pY2Uoe1xuICAgICAgICBmaWxlUGF0aDogb3B0aW9ucy5SZWNvcmRGaWxlUGF0aCxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge31cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==