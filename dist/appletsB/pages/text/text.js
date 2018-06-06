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
      formId: '', //模板id
      timeCheckVal: 'unlimited' //选择信件有效期(默认无限制)
    }, _this.watch = {
      // 监听录音状态
      recordState: function recordState(newValue, oldValue) {
        var self = this;
        console.log('recordState value: ' + oldValue + ' -> ' + newValue);
        // 获取音频设置
        var recorderManager = wx.getRecorderManager();

        // 当录音开始
        recorderManager.onStart(function () {
          console.log('recorder start');
          self.timer = setInterval(function () {
            self.timeNum = self.timeNum + 1;
            self.$apply();
          }, 1000);
        });

        // 当录音暂停
        recorderManager.onPause(function () {
          console.log('recorder pause');
        });

        // 当录音结束
        recorderManager.onStop(function (res) {
          console.log('recorder stop', res);
          clearInterval(self.timer);
          var tempFilePath = res.tempFilePath;

          self.recordPath = res.tempFilePath;
          self.$apply();
        });

        // 设置录音开始和结束
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
            url: self.router + '?url=' + url + '&msg=' + msg + '&recordUrl=' + self.recordPath + '&formId=' + self.formId + '&timeCheckVal=' + self.timeCheckVal
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
      },


      // 选择信件有效期
      timeCheck: function timeCheck(e) {
        var self = this;
        console.log('\u9009\u62E9\u4FE1\u4EF6\u6709\u6548\u671F');
        console.log(e.detail.value);
        self.timeCheckVal = e.detail.value;
        self.$apply();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ0ZXh0YXJlYSIsInR5cGUiLCJtc2ciLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwibWF4bGVuZ3RoIiwiZm9jdXMiLCJ0ZXh0Iiwicm91dGVyIiwicmVjb3JkU3RhdGUiLCJyZWNvcmRQYXRoIiwidGltZU51bSIsInRpbWVyIiwiZm9ybUlkIiwidGltZUNoZWNrVmFsIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJyZWNvcmRlck1hbmFnZXIiLCJ3eCIsImdldFJlY29yZGVyTWFuYWdlciIsIm9uU3RhcnQiLCJzZXRJbnRlcnZhbCIsIiRhcHBseSIsIm9uUGF1c2UiLCJvblN0b3AiLCJyZXMiLCJjbGVhckludGVydmFsIiwidGVtcEZpbGVQYXRoIiwic3RhcnQiLCJzdG9wIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ2V0TXNnIiwiZSIsImRldGFpbCIsInZhbHVlIiwic2VuZE1zZyIsInNldFRpbWVvdXQiLCJ1cmwiLCJuYXZpZ2F0ZVRvIiwicmVjb3JkU3RhcnQiLCJyZWNvcmRQbGF5IiwiaW5uZXJBdWRpb0NvbnRleHQiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsImF1dG9wbGF5Iiwic3JjIiwib25QbGF5Iiwib25FcnJvciIsImVyck1zZyIsImVyckNvZGUiLCJyZWNvcmREZWxldGUiLCJyZWNvcmRTYXZlIiwic3Vic3RyaW5nIiwiZmlsZVNhdmUiLCJsZXR0ZXJNb2R1bGUiLCJCYWFTIiwid3hSZXBvcnRUaWNrZXQiLCJ0aGVuIiwiY2FyZF90aW1lIiwiRGF0ZSIsInRhYmxlSUQiLCJQcm9kdWN0IiwiVGFibGVPYmplY3QiLCJwcm9kdWN0IiwiY3JlYXRlIiwiYXBwbGUiLCJzZW5kX2NhcmQiLCJjYXJkX25hbWUiLCJzdGF0ZSIsImRpcmVjdGlvbnMiLCJub3RlIiwic2V0Iiwic2F2ZSIsInRpbWVDaGVjayIsImV2ZW50cyIsInRlc3RBcnIiLCJyZWciLCJpbmRleCIsImV4ZWMiLCJwdXNoIiwibGFzdEluZGV4IiwibGVuZ3RoIiwiZmlsZVBhdGgiLCJjYXRlZ29yeU5hbWUiLCJNeUZpbGUiLCJGaWxlIiwiZmlsZVBhcmFtcyIsIm1ldGFEYXRhIiwidXBsb2FkIiwicGF0aCIsImVyciIsIm9wdGlvbnMiLCJSZWNvcmRGaWxlUGF0aCIsInBsYXlWb2ljZSIsImNvbXBsZXRlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGdCQURRLEVBQ0U7QUFDVkMsZUFGUSxFQUVDO0FBQ1RDLHVCQUhRLEVBR1M7QUFDakJDLGtCQUFVLEtBSkYsRUFJUztBQUNqQkMsbUJBQVcsR0FMSCxFQUtRO0FBQ2hCQyxlQUFPLEtBTkMsQ0FNSztBQU5MLE9BREw7QUFTTEMsWUFBTSxFQVRELEVBU0s7QUFDVkMsZ0JBVkssRUFVTztBQUNaQyxtQkFBYSxLQVhSLEVBV2U7QUFDcEJDLG9CQVpLLEVBWVc7QUFDaEJDLGVBQVMsQ0FiSixFQWFPO0FBQ1pDLGVBZEssRUFjTTtBQUNYQyxnQkFmSyxFQWVPO0FBQ1pDLCtCQWhCSyxDQWdCcUI7QUFoQnJCLEssUUFtQlBDLEssR0FBUTtBQUNOO0FBQ0FOLGlCQUZNLHVCQUVNTyxRQUZOLEVBRWdCQyxRQUZoQixFQUUwQjtBQUM5QixZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIseUJBQWtDSCxRQUFsQyxZQUFpREQsUUFBakQ7QUFDQTtBQUNBLFlBQU1LLGtCQUFrQkMsR0FBR0Msa0JBQUgsRUFBeEI7O0FBRUE7QUFDQUYsd0JBQWdCRyxPQUFoQixDQUF3QixZQUFNO0FBQzVCTCxrQkFBUUMsR0FB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QyxHQUF0QyxtQkFBdURnQixLQUFLUjtBQURoRCxPQUFkO0FBR0Q7OzsyQkErSU1xRixPLEVBQVM7QUFDZCxVQUFJN0UsT0FBTyxJQUFYO0FBQ0FBLFdBQUtqQixJQUFMLEdBQVk4RixRQUFROUYsSUFBcEI7QUFDQWlCLFdBQUtWLE1BQUwsR0FBY3VGLFFBQVF2RixNQUF0QjtBQUNBLFVBQUl1RixRQUFRQyxjQUFaLEVBQTRCO0FBQzFCMUUsV0FBRzJFLFNBQUgsQ0FBYTtBQUNYWCxvQkFBVVMsUUFBUUMsY0FEUDtBQUVYRSxvQkFBVSxvQkFBVyxDQUFFO0FBRlosU0FBYjtBQUlEOztBQUVEaEYsV0FBS1EsTUFBTDtBQUNBUCxjQUFRQyxHQUFSLENBQVkyRSxPQUFaO0FBQ0Q7Ozs7RUF0UmdDLGVBQUtJLEk7O2tCQUFuQnhHLEsiLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnlZnoqIAnXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIHRleHRhcmVhOiB7XG4gICAgICB0eXBlOiBgYCwgLy/lhaXlj6PpobXpnaLooajnpLpcbiAgICAgIG1zZzogYGAsIC8v6L6T5YWl5qGG55qE5YaF5a65XG4gICAgICBwbGFjZWhvbGRlcjogYGAsIC8v6L6T5YWl5qGG5Li656m65pe25Y2g5L2N56ymXG4gICAgICBkaXNhYmxlZDogZmFsc2UsIC8v5piv5ZCm56aB55SoXG4gICAgICBtYXhsZW5ndGg6IDEwMCwgLy/mnIDlpKfovpPlhaXplb/luqbvvIzorr7nva7kuLogLTEg55qE5pe25YCZ5LiN6ZmQ5Yi25pyA5aSn6ZW/5bqmXG4gICAgICBmb2N1czogZmFsc2UgLy/ojrflj5bnhKbngrlcbiAgICB9LFxuICAgIHRleHQ6IFtdLCAvL+i9rOWMluWQjueahOaWh+acrFxuICAgIHJvdXRlcjogYGAsIC8v55WZ6KiA5LmL5ZCO6Lez6L2s55qE6aG16Z2iXG4gICAgcmVjb3JkU3RhdGU6IGZhbHNlLCAvL+W9lemfs+eKtuaAgVxuICAgIHJlY29yZFBhdGg6IGBgLCAvL+W9lemfs+S4tOaXtuWcsOWdgFxuICAgIHRpbWVOdW06IDAsIC8v5b2V6Z+z5pe26ZW/XG4gICAgdGltZXI6IGBgLCAvL+WumuaXtuWZqFxuICAgIGZvcm1JZDogYGAsIC8v5qih5p2/aWRcbiAgICB0aW1lQ2hlY2tWYWw6IGB1bmxpbWl0ZWRgIC8v6YCJ5oup5L+h5Lu25pyJ5pWI5pyfKOm7mOiupOaXoOmZkOWItilcbiAgfTtcblxuICB3YXRjaCA9IHtcbiAgICAvLyDnm5HlkKzlvZXpn7PnirbmgIFcbiAgICByZWNvcmRTdGF0ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKGByZWNvcmRTdGF0ZSB2YWx1ZTogJHtvbGRWYWx1ZX0gLT4gJHtuZXdWYWx1ZX1gKTtcbiAgICAgIC8vIOiOt+WPlumfs+mikeiuvue9rlxuICAgICAgY29uc3QgcmVjb3JkZXJNYW5hZ2VyID0gd3guZ2V0UmVjb3JkZXJNYW5hZ2VyKCk7XG5cbiAgICAgIC8vIOW9k+W9lemfs+W8gOWni1xuICAgICAgcmVjb3JkZXJNYW5hZ2VyLm9uU3RhcnQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVjb3JkZXIgc3RhcnQnKTtcbiAgICAgICAgc2VsZi50aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYudGltZU51bSA9IHNlbGYudGltZU51bSArIDE7XG4gICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9KTtcblxuICAgICAgLy8g5b2T5b2V6Z+z5pqC5YGcXG4gICAgICByZWNvcmRlck1hbmFnZXIub25QYXVzZSgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWNvcmRlciBwYXVzZScpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIOW9k+W9lemfs+e7k+adn1xuICAgICAgcmVjb3JkZXJNYW5hZ2VyLm9uU3RvcChyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVjb3JkZXIgc3RvcCcsIHJlcyk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc2VsZi50aW1lcik7XG4gICAgICAgIGNvbnN0IHsgdGVtcEZpbGVQYXRoIH0gPSByZXM7XG4gICAgICAgIHNlbGYucmVjb3JkUGF0aCA9IHJlcy50ZW1wRmlsZVBhdGg7XG4gICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICB9KTtcblxuICAgICAgLy8g6K6+572u5b2V6Z+z5byA5aeL5ZKM57uT5p2fXG4gICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgcmVjb3JkZXJNYW5hZ2VyLnN0YXJ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNvcmRlck1hbmFnZXIuc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyDlpITnkIbmlofmnKzkv6Hmga9cbiAgUmVnTXNnKCkge1xuICAgIGNvbnNvbGUubG9nKGDmlofmnKzlpITnkIZzdGFydGApO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgbXNnID0gc2VsZi50ZXh0YXJlYS5tc2c7XG4gICAgbGV0IHRlc3RBcnIgPSBbXTtcbiAgICAvLyDpgYfliLDku6XkuIvnrKblj7fnq4vljbPmiKrlj5blhoXlrrnliIbmrrVcbiAgICBsZXQgcmVnID0gL1vvvIx8LHwufOOAgnzjgIF877yffO+8m3w7fC9dL2c7XG4gICAgbGV0IGluZGV4ID0gYGA7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICB3aGlsZSAoKGluZGV4ID0gcmVnLmV4ZWMobXNnKSAhPSBudWxsKSkge1xuICAgICAgLy8g5oiq5Y+W5Lik5Liq56ym5ZCI5LmL6Ze055qE5paH5a2X77yM5YiG5q615pS+5YWl5pWw57uEXG4gICAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgcmVnLmxhc3RJbmRleCkpO1xuICAgICAgLy8g5qOA5rWL5bm25pS55Y+Y5b2T5YmN56ym5Y+357Si5byVXG4gICAgICBzdGFydCA9IHJlZy5sYXN0SW5kZXg7XG4gICAgfVxuICAgIC8vIOiOt+WPluacgOWQjuS4gOauteaWh+Wtl1xuICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCBtc2cubGVuZ3RoKSk7XG4gICAgc2VsZi50ZXh0ID0gdGVzdEFycjtcbiAgICBzZWxmLiRhcHBseSgpO1xuICAgIGNvbnNvbGUubG9nKGDmlofmnKzlpITnkIZlbmRgKTtcbiAgfVxuXG4gIC8vIOefpeaZk+S6keaWh+S7tuS/neWtmFxuICBmaWxlU2F2ZShmaWxlUGF0aCwgY2F0ZWdvcnlOYW1lKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBNeUZpbGUgPSBuZXcgd3guQmFhUy5GaWxlKCk7XG4gICAgbGV0IGZpbGVQYXJhbXMgPSB7IGZpbGVQYXRoIH07XG4gICAgbGV0IG1ldGFEYXRhID0geyBjYXRlZ29yeU5hbWUgfTtcblxuICAgIE15RmlsZS51cGxvYWQoZmlsZVBhcmFtcywgbWV0YURhdGEpLnRoZW4oXG4gICAgICByZXMgPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAvLyDkv53lrZjlvZXpn7PkupHmlofku7blnLDlnYBcbiAgICAgICAgc2VsZi5yZWNvcmRQYXRoID0gcmVzLmRhdGEucGF0aDtcbiAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi5yZWNvcmRQYXRoKTtcbiAgICAgICAgLy8g6Lez6L2s6aG16Z2iXG4gICAgICAgIHNlbGYuc2VuZE1zZygpO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8vIOWPkemAgea2iOaBr1xuICBzZW5kTXNnKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgbXNnID0gc2VsZi50ZXh0YXJlYS5tc2c7XG4gICAgY29uc29sZS5sb2coc2VsZi50ZXh0KTtcblxuICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9zaGFsb3Uuc21hbGx6aGl5dW4uY29tL3ByaXplL2luZGV4Lmh0bWxgO1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgJHtzZWxmLnJvdXRlcn0/dXJsPSR7dXJsfSZtc2c9JHttc2d9JnJlY29yZFVybD0ke3NlbGYucmVjb3JkUGF0aH1gXG4gICAgfSk7XG4gIH1cblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g5a2Y5YKo5raI5oGvXG4gICAgZ2V0TXNnKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgLy8g5L+d5a2Y6L6T5YWl5qGG55WZ6KiAXG4gICAgICBzZWxmLnRleHRhcmVhLm1zZyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKTtcbiAgICB9LFxuXG4gICAgLy8g5Y+R6YCB5raI5oGvXG4gICAgc2VuZE1zZygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGxldCBtc2cgPSBzZWxmLnRleHRhcmVhLm1zZztcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYudGV4dCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgdXJsID0gYGh0dHBzOi8vc2hhbG91LnNtYWxsemhpeXVuLmNvbS9wcml6ZS9pbmRleC5odG1sYDtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgJHtzZWxmLnJvdXRlcn0/dXJsPSR7dXJsfSZtc2c9JHttc2d9JnJlY29yZFVybD0ke1xuICAgICAgICAgICAgc2VsZi5yZWNvcmRQYXRoXG4gICAgICAgICAgfSZmb3JtSWQ9JHtzZWxmLmZvcm1JZH0mdGltZUNoZWNrVmFsPSR7c2VsZi50aW1lQ2hlY2tWYWx9YFxuICAgICAgICB9KTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfSxcblxuICAgIC8v5byA5aeL5b2V6Z+zXG4gICAgcmVjb3JkU3RhcnQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZygn5byA5aeL5b2V6Z+zJyk7XG4gICAgICBzZWxmLnJlY29yZFN0YXRlID0gIXNlbGYucmVjb3JkU3RhdGU7XG5cbiAgICAgIC8vIOWIh+aNouWbvuagh1xuICAgIH0sXG5cbiAgICAvLyDor5XlkKxcbiAgICByZWNvcmRQbGF5KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2coYOivleWQrOW9lemfs2ApO1xuICAgICAgY29uc3QgaW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gc2VsZi5yZWNvcmRQYXRoO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25QbGF5KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ+W8gOWni+aSreaUvicpO1xuICAgICAgfSk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyQ29kZSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8g5Yig6Zmk5b2V6Z+zXG4gICAgcmVjb3JkRGVsZXRlKCkge1xuICAgICAgY29uc29sZS5sb2coYOWIoOmZpOW9lemfs2ApO1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi5yZWNvcmRQYXRoID0gYGA7XG4gICAgICBzZWxmLnJlY29yZFN0YXRlID0gZmFsc2U7XG4gICAgICBzZWxmLnRpbWVOdW0gPSAwO1xuICAgIH0sXG5cbiAgICAvLyDkv53lrZjlvZXpn7PliLDmnI3liqHlmahcbiAgICByZWNvcmRTYXZlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2coc2VsZi5yZWNvcmRQYXRoLnN1YnN0cmluZygwLCA1KSk7XG4gICAgICBpZiAoc2VsZi5yZWNvcmRQYXRoLnN1YnN0cmluZygwLCA1KSA9PSBgaHR0cDpgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDkv53lrZjlvZXpn7NgKTtcbiAgICAgICAgc2VsZi5maWxlU2F2ZShzZWxmLnJlY29yZFBhdGgsIGByZWNvcmRgKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5yZWNvcmRQYXRoLnN1YnN0cmluZygwLCA1KSA9PSBgd3hmaWxgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDkv53lrZjlvZXpn7NgKTtcbiAgICAgICAgc2VsZi5maWxlU2F2ZShzZWxmLnJlY29yZFBhdGgsIGByZWNvcmRgKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5yZWNvcmRQYXRoLnN1YnN0cmluZygwLCA1KSA9PSBgaHR0cHNgKSB7XG4gICAgICAgIHNlbGYuc2VuZE1zZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYOayoeacieW9lemfs2ApO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyDmqKHmnb/op6blj5Hkuovku7ZcbiAgICBsZXR0ZXJNb2R1bGUoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2coYOaooeadv+S6i+S7tmApO1xuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwuZm9ybUlkKTtcbiAgICAgIHNlbGYuZm9ybUlkID0gZS5kZXRhaWwuZm9ybUlkO1xuICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuZm9ybUlkKTtcbiAgICAgIC8vIOWFiOS4iuaKpWZvcm1JZCznhLblkI7liJvlu7rooajvvIzop6blj5FUcmlnZ2VyXG4gICAgICB3eC5CYWFTLnd4UmVwb3J0VGlja2V0KGUuZGV0YWlsLmZvcm1JZCkudGhlbihcbiAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhg5rWL6K+VZm9ybWlkIHN1Y2Nlc3Plm57osINgKTtcbiAgICAgICAgICBsZXQgY2FyZF90aW1lID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgIC8vIOiuvue9ruaooeadv+a2iOaBr+mAmuefpVxuICAgICAgICAgIC8vIOWQkSB0YWJsZUlEIOS4uiAzOTAwNiDnmoTmlbDmja7ooajmj5LlhaXkuIDmnaHorrDlvZVcbiAgICAgICAgICBsZXQgdGFibGVJRCA9IDM5MDA2O1xuICAgICAgICAgIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG4gICAgICAgICAgbGV0IHByb2R1Y3QgPSBQcm9kdWN0LmNyZWF0ZSgpO1xuXG4gICAgICAgICAgLy8g6K6+572u5pa55byP5LiAXG4gICAgICAgICAgbGV0IGFwcGxlID0ge1xuICAgICAgICAgICAgLy8g5L+h5Lu25bey5p+l5pS2XG4gICAgICAgICAgICBzZW5kX2NhcmQ6IGBzZW5kQ2FyZGAsXG4gICAgICAgICAgICBjYXJkX25hbWU6IGDmr43kurLoioLotLrljaFgLFxuICAgICAgICAgICAgc3RhdGU6IGDlt7LmjqXmlLZgLFxuICAgICAgICAgICAgZGlyZWN0aW9uczogYOaymea8j+eahOaXtuWFiWAsXG4gICAgICAgICAgICBub3RlOiAnY2FyZF90aW1lJ1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBwcm9kdWN0XG4gICAgICAgICAgICAuc2V0KGFwcGxlKVxuICAgICAgICAgICAgLnNhdmUoKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDliJvlu7rooajmiJDlip9gKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAvLyBlcnJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhg5rWL6K+VZm9ybWlkIGVycuWbnuiwg2ApO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0sXG5cbiAgICAvLyDpgInmi6nkv6Hku7bmnInmlYjmnJ9cbiAgICB0aW1lQ2hlY2soZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2coYOmAieaLqeS/oeS7tuacieaViOacn2ApO1xuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xuICAgICAgc2VsZi50aW1lQ2hlY2tWYWwgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICBzZWxmLnJvdXRlciA9IG9wdGlvbnMucm91dGVyO1xuICAgIGlmIChvcHRpb25zLlJlY29yZEZpbGVQYXRoKSB7XG4gICAgICB3eC5wbGF5Vm9pY2Uoe1xuICAgICAgICBmaWxlUGF0aDogb3B0aW9ucy5SZWNvcmRGaWxlUGF0aCxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge31cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==