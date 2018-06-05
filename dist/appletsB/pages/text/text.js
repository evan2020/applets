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
            note: "card_time"
          };

          product.set(apple).save().then(function (res) {
            // success
            console.log('\u521B\u5EFA\u8868\u6210\u529F');
            // console.log(res);
            console.log(e.detail.formId);
            // wx.BaaS.wxReportTicket(e.detail.formId);
            // console.log("提交formId");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ0ZXh0YXJlYSIsInR5cGUiLCJtc2ciLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwibWF4bGVuZ3RoIiwiZm9jdXMiLCJ0ZXh0Iiwicm91dGVyIiwicmVjb3JkU3RhdGUiLCJyZWNvcmRQYXRoIiwidGltZU51bSIsInRpbWVyIiwiZm9ybUlkIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJyZWNvcmRlck1hbmFnZXIiLCJ3eCIsImdldFJlY29yZGVyTWFuYWdlciIsIm9uU3RhcnQiLCJzZXRJbnRlcnZhbCIsIiRhcHBseSIsIm9uUGF1c2UiLCJvblN0b3AiLCJyZXMiLCJjbGVhckludGVydmFsIiwidGVtcEZpbGVQYXRoIiwic3RhcnQiLCJzdG9wIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ2V0TXNnIiwiZSIsImRldGFpbCIsInZhbHVlIiwic2VuZE1zZyIsInNldFRpbWVvdXQiLCJ1cmwiLCJuYXZpZ2F0ZVRvIiwicmVjb3JkU3RhcnQiLCJyZWNvcmRQbGF5IiwiaW5uZXJBdWRpb0NvbnRleHQiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsImF1dG9wbGF5Iiwic3JjIiwib25QbGF5Iiwib25FcnJvciIsImVyck1zZyIsImVyckNvZGUiLCJyZWNvcmREZWxldGUiLCJyZWNvcmRTYXZlIiwic3Vic3RyaW5nIiwiZmlsZVNhdmUiLCJsZXR0ZXJNb2R1bGUiLCJCYWFTIiwid3hSZXBvcnRUaWNrZXQiLCJ0aGVuIiwiY2FyZF90aW1lIiwiRGF0ZSIsInRhYmxlSUQiLCJQcm9kdWN0IiwiVGFibGVPYmplY3QiLCJwcm9kdWN0IiwiY3JlYXRlIiwiYXBwbGUiLCJzZW5kX2NhcmQiLCJjYXJkX25hbWUiLCJzdGF0ZSIsImRpcmVjdGlvbnMiLCJub3RlIiwic2V0Iiwic2F2ZSIsImV2ZW50cyIsInRlc3RBcnIiLCJyZWciLCJpbmRleCIsImV4ZWMiLCJwdXNoIiwibGFzdEluZGV4IiwibGVuZ3RoIiwiZmlsZVBhdGgiLCJjYXRlZ29yeU5hbWUiLCJNeUZpbGUiLCJGaWxlIiwiZmlsZVBhcmFtcyIsIm1ldGFEYXRhIiwidXBsb2FkIiwicGF0aCIsImVyciIsIm9wdGlvbnMiLCJSZWNvcmRGaWxlUGF0aCIsInBsYXlWb2ljZSIsImNvbXBsZXRlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGdCQURRLEVBQ0U7QUFDVkMsZUFGUSxFQUVDO0FBQ1RDLHVCQUhRLEVBR1M7QUFDakJDLGtCQUFVLEtBSkYsRUFJUztBQUNqQkMsbUJBQVcsR0FMSCxFQUtRO0FBQ2hCQyxlQUFPLEtBTkMsQ0FNSztBQU5MLE9BREw7QUFTTEMsWUFBTSxFQVRELEVBU0s7QUFDVkMsZ0JBVkssRUFVTztBQUNaQyxtQkFBYSxLQVhSLEVBV2U7QUFDcEJDLG9CQVpLLEVBWVc7QUFDaEJDLGVBQVMsQ0FiSixFQWFPO0FBQ1pDLGVBZEssRUFjTTtBQUNYQyxnQkFmSyxDQWVNO0FBZk4sSyxRQWtCUEMsSyxHQUFRO0FBQ05MLGlCQURNLHVCQUNNTSxRQUROLEVBQ2dCQyxRQURoQixFQUMwQjtBQUM5QixZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIseUJBQWtDSCxRQUFsQyxZQUFpREQsUUFBakQ7QUFDQSxZQUFNSyxrQkFBa0JDLEdBQUdDLGtCQUFILEVBQXhCO0FBQ0FGLHdCQUFnQkcsT0FBaEIsQ0FBd0IsWUFBTTtBQUM1Qkwsa0JBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBRixlQUFLTCxLQUFMLEdBQWFZLFlBQVksWUFBVztBQUNsQ1AsaUJBQUtOLE9BQUws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QUU7QUFGWixTQUFiO0FBSUQ7O0FBRUQvRSxXQUFLUSxNQUFMO0FBQ0FQLGNBQVFDLEdBQVIsQ0FBWTBFLE9BQVo7QUFDRDs7OztFQXRRZ0MsZUFBS0ksSTs7a0JBQW5CdEcsSyIsImZpbGUiOiJ0ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eVmeiogCdcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgdGV4dGFyZWE6IHtcbiAgICAgIHR5cGU6IGBgLCAvL+WFpeWPo+mhtemdouihqOekulxuICAgICAgbXNnOiBgYCwgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICAgIHBsYWNlaG9sZGVyOiBgYCwgLy/ovpPlhaXmoYbkuLrnqbrml7bljaDkvY3nrKZcbiAgICAgIGRpc2FibGVkOiBmYWxzZSwgLy/mmK/lkKbnpoHnlKhcbiAgICAgIG1heGxlbmd0aDogMTAwLCAvL+acgOWkp+i+k+WFpemVv+W6pu+8jOiuvue9ruS4uiAtMSDnmoTml7blgJnkuI3pmZDliLbmnIDlpKfplb/luqZcbiAgICAgIGZvY3VzOiBmYWxzZSAvL+iOt+WPlueEpueCuVxuICAgIH0sXG4gICAgdGV4dDogW10sIC8v6L2s5YyW5ZCO55qE5paH5pysXG4gICAgcm91dGVyOiBgYCwgLy/nlZnoqIDkuYvlkI7ot7PovaznmoTpobXpnaJcbiAgICByZWNvcmRTdGF0ZTogZmFsc2UsIC8v5b2V6Z+z54q25oCBXG4gICAgcmVjb3JkUGF0aDogYGAsIC8v5b2V6Z+z5Li05pe25Zyw5Z2AXG4gICAgdGltZU51bTogMCwgLy/lvZXpn7Pml7bplb9cbiAgICB0aW1lcjogYGAsIC8v5a6a5pe25ZmoXG4gICAgZm9ybUlkOiBgYCAvL+aooeadv2lkXG4gIH07XG5cbiAgd2F0Y2ggPSB7XG4gICAgcmVjb3JkU3RhdGUobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhgcmVjb3JkU3RhdGUgdmFsdWU6ICR7b2xkVmFsdWV9IC0+ICR7bmV3VmFsdWV9YCk7XG4gICAgICBjb25zdCByZWNvcmRlck1hbmFnZXIgPSB3eC5nZXRSZWNvcmRlck1hbmFnZXIoKTtcbiAgICAgIHJlY29yZGVyTWFuYWdlci5vblN0YXJ0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY29yZGVyIHN0YXJ0Jyk7XG4gICAgICAgIHNlbGYudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLnRpbWVOdW0gPSBzZWxmLnRpbWVOdW0gKyAxO1xuICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSk7XG4gICAgICByZWNvcmRlck1hbmFnZXIub25QYXVzZSgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWNvcmRlciBwYXVzZScpO1xuICAgICAgfSk7XG4gICAgICByZWNvcmRlck1hbmFnZXIub25TdG9wKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWNvcmRlciBzdG9wJywgcmVzKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzZWxmLnRpbWVyKTtcbiAgICAgICAgY29uc3QgeyB0ZW1wRmlsZVBhdGggfSA9IHJlcztcbiAgICAgICAgc2VsZi5yZWNvcmRQYXRoID0gcmVzLnRlbXBGaWxlUGF0aDtcbiAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgIHJlY29yZGVyTWFuYWdlci5zdGFydCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVjb3JkZXJNYW5hZ2VyLnN0b3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8g5aSE55CG5paH5pys5L+h5oGvXG4gIFJlZ01zZygpIHtcbiAgICBjb25zb2xlLmxvZyhg5paH5pys5aSE55CGc3RhcnRgKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IG1zZyA9IHNlbGYudGV4dGFyZWEubXNnO1xuICAgIGxldCB0ZXN0QXJyID0gW107XG4gICAgLy8g6YGH5Yiw5Lul5LiL56ym5Y+356uL5Y2z5oiq5Y+W5YaF5a655YiG5q61XG4gICAgbGV0IHJlZyA9IC9b77yMfCx8LnzjgIJ844CBfO+8n3zvvJt8O3wvXS9nO1xuICAgIGxldCBpbmRleCA9IGBgO1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgd2hpbGUgKChpbmRleCA9IHJlZy5leGVjKG1zZykgIT0gbnVsbCkpIHtcbiAgICAgIC8vIOaIquWPluS4pOS4quespuWQiOS5i+mXtOeahOaWh+Wtl++8jOWIhuauteaUvuWFpeaVsOe7hFxuICAgICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIHJlZy5sYXN0SW5kZXgpKTtcbiAgICAgIC8vIOajgOa1i+W5tuaUueWPmOW9k+WJjeespuWPt+e0ouW8lVxuICAgICAgc3RhcnQgPSByZWcubGFzdEluZGV4O1xuICAgIH1cbiAgICAvLyDojrflj5bmnIDlkI7kuIDmrrXmloflrZdcbiAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgbXNnLmxlbmd0aCkpO1xuICAgIHNlbGYudGV4dCA9IHRlc3RBcnI7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgICBjb25zb2xlLmxvZyhg5paH5pys5aSE55CGZW5kYCk7XG4gIH1cblxuICAvLyDnn6XmmZPkupHmlofku7bkv53lrZhcbiAgZmlsZVNhdmUoZmlsZVBhdGgsIGNhdGVnb3J5TmFtZSkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgTXlGaWxlID0gbmV3IHd4LkJhYVMuRmlsZSgpO1xuICAgIGxldCBmaWxlUGFyYW1zID0geyBmaWxlUGF0aCB9O1xuICAgIGxldCBtZXRhRGF0YSA9IHsgY2F0ZWdvcnlOYW1lIH07XG5cbiAgICBNeUZpbGUudXBsb2FkKGZpbGVQYXJhbXMsIG1ldGFEYXRhKS50aGVuKFxuICAgICAgcmVzID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgLy8g5L+d5a2Y5b2V6Z+z5LqR5paH5Lu25Zyw5Z2AXG4gICAgICAgIHNlbGYucmVjb3JkUGF0aCA9IHJlcy5kYXRhLnBhdGg7XG4gICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGYucmVjb3JkUGF0aCk7XG4gICAgICAgIC8vIOi3s+i9rOmhtemdolxuICAgICAgICBzZWxmLnNlbmRNc2coKTtcbiAgICAgIH0sXG4gICAgICBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvLyDlj5HpgIHmtojmga9cbiAgc2VuZE1zZygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IG1zZyA9IHNlbGYudGV4dGFyZWEubXNnO1xuICAgIGNvbnNvbGUubG9nKHNlbGYudGV4dCk7XG5cbiAgICBsZXQgdXJsID0gYGh0dHBzOi8vc2hhbG91LnNtYWxsemhpeXVuLmNvbS9wcml6ZS9pbmRleC5odG1sYDtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYCR7c2VsZi5yb3V0ZXJ9P3VybD0ke3VybH0mbXNnPSR7bXNnfSZyZWNvcmRVcmw9JHtzZWxmLnJlY29yZFBhdGh9YFxuICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIC8vIOWtmOWCqOa2iOaBr1xuICAgIGdldE1zZyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIOS/neWtmOi+k+WFpeahhueVmeiogFxuICAgICAgc2VsZi50ZXh0YXJlYS5tc2cgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSk7XG4gICAgfSxcblxuICAgIC8vIOWPkemAgea2iOaBr1xuICAgIHNlbmRNc2coKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBsZXQgbXNnID0gc2VsZi50ZXh0YXJlYS5tc2c7XG4gICAgICBjb25zb2xlLmxvZyhzZWxmLnRleHQpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vcHJpemUvaW5kZXguaHRtbGA7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYCR7c2VsZi5yb3V0ZXJ9P3VybD0ke3VybH0mbXNnPSR7bXNnfSZyZWNvcmRVcmw9JHtcbiAgICAgICAgICAgIHNlbGYucmVjb3JkUGF0aFxuICAgICAgICAgIH0mZm9ybUlkPSR7c2VsZi5mb3JtSWR9YFxuICAgICAgICB9KTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfSxcblxuICAgIC8v5byA5aeL5b2V6Z+zXG4gICAgcmVjb3JkU3RhcnQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZygn5byA5aeL5b2V6Z+zJyk7XG4gICAgICBzZWxmLnJlY29yZFN0YXRlID0gIXNlbGYucmVjb3JkU3RhdGU7XG5cbiAgICAgIC8vIOWIh+aNouWbvuagh1xuICAgIH0sXG5cbiAgICAvLyDor5XlkKxcbiAgICByZWNvcmRQbGF5KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2coYOivleWQrOW9lemfs2ApO1xuICAgICAgY29uc3QgaW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gc2VsZi5yZWNvcmRQYXRoO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25QbGF5KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ+W8gOWni+aSreaUvicpO1xuICAgICAgfSk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyQ29kZSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8g5Yig6Zmk5b2V6Z+zXG4gICAgcmVjb3JkRGVsZXRlKCkge1xuICAgICAgY29uc29sZS5sb2coYOWIoOmZpOW9lemfs2ApO1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi5yZWNvcmRQYXRoID0gYGA7XG4gICAgICBzZWxmLnJlY29yZFN0YXRlID0gZmFsc2U7XG4gICAgICBzZWxmLnRpbWVOdW0gPSAwO1xuICAgIH0sXG5cbiAgICAvLyDkv53lrZjlvZXpn7PliLDmnI3liqHlmahcbiAgICByZWNvcmRTYXZlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2coc2VsZi5yZWNvcmRQYXRoLnN1YnN0cmluZygwLCA1KSk7XG4gICAgICBpZiAoc2VsZi5yZWNvcmRQYXRoLnN1YnN0cmluZygwLCA1KSA9PSBgaHR0cDpgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDkv53lrZjlvZXpn7NgKTtcbiAgICAgICAgc2VsZi5maWxlU2F2ZShzZWxmLnJlY29yZFBhdGgsIGByZWNvcmRgKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5yZWNvcmRQYXRoLnN1YnN0cmluZygwLCA1KSA9PSBgd3hmaWxgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDkv53lrZjlvZXpn7NgKTtcbiAgICAgICAgc2VsZi5maWxlU2F2ZShzZWxmLnJlY29yZFBhdGgsIGByZWNvcmRgKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5yZWNvcmRQYXRoLnN1YnN0cmluZygwLCA1KSA9PSBgaHR0cHNgKSB7XG4gICAgICAgIHNlbGYuc2VuZE1zZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYOayoeacieW9lemfs2ApO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyDmqKHmnb/op6blj5Hkuovku7ZcbiAgICBsZXR0ZXJNb2R1bGUoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2coYOaooeadv+S6i+S7tmApO1xuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwuZm9ybUlkKTtcbiAgICAgIHNlbGYuZm9ybUlkID0gZS5kZXRhaWwuZm9ybUlkO1xuICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuZm9ybUlkKTtcbiAgICAgIC8vIOWFiOS4iuaKpWZvcm1JZCznhLblkI7liJvlu7rooajvvIzop6blj5FUcmlnZ2VyXG4gICAgICB3eC5CYWFTLnd4UmVwb3J0VGlja2V0KGUuZGV0YWlsLmZvcm1JZCkudGhlbihyZXM9PntcbiAgICAgICAgY29uc29sZS5sb2coYOa1i+ivlWZvcm1pZCBzdWNjZXNz5Zue6LCDYClcbiAgICAgICAgbGV0IGNhcmRfdGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICBcbiAgICAgIC8vIOiuvue9ruaooeadv+a2iOaBr+mAmuefpVxuICAgICAgLy8g5ZCRIHRhYmxlSUQg5Li6IDM5MDA2IOeahOaVsOaNruihqOaPkuWFpeS4gOadoeiusOW9lVxuICAgICAgbGV0IHRhYmxlSUQgPSAzOTAwNjtcbiAgICAgIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG4gICAgICBsZXQgcHJvZHVjdCA9IFByb2R1Y3QuY3JlYXRlKCk7XG5cbiAgICAgIC8vIOiuvue9ruaWueW8j+S4gFxuICAgICAgbGV0IGFwcGxlID0ge1xuICAgICAgICAvLyDkv6Hku7blt7Lmn6XmlLZcbiAgICAgICAgc2VuZF9jYXJkOiBgc2VuZENhcmRgLFxuICAgICAgICBjYXJkX25hbWU6IGDmr43kurLoioLotLrljaFgLFxuICAgICAgICBzdGF0ZTogYOW3suaOpeaUtmAsXG4gICAgICAgIGRpcmVjdGlvbnM6IGDmspnmvI/nmoTml7blhYlgLFxuICAgICAgICBub3RlOiBcImNhcmRfdGltZVwiXG4gICAgICB9O1xuXG4gICAgICBwcm9kdWN0XG4gICAgICAgIC5zZXQoYXBwbGUpXG4gICAgICAgIC5zYXZlKClcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDliJvlu7rooajmiJDlip9gKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC5mb3JtSWQpO1xuICAgICAgICAgICAgLy8gd3guQmFhUy53eFJlcG9ydFRpY2tldChlLmRldGFpbC5mb3JtSWQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmj5DkuqRmb3JtSWRcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgLy8gZXJyXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSxlcnI9PntcbiAgICAgICAgY29uc29sZS5sb2coYOa1i+ivlWZvcm1pZCBlcnLlm57osINgKVxuICAgICAgICBcbiAgICAgIH0pO1xuXG4gICAgICBcbiAgICB9XG4gIH07XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi50eXBlID0gb3B0aW9ucy50eXBlO1xuICAgIHNlbGYucm91dGVyID0gb3B0aW9ucy5yb3V0ZXI7XG4gICAgaWYgKG9wdGlvbnMuUmVjb3JkRmlsZVBhdGgpIHtcbiAgICAgIHd4LnBsYXlWb2ljZSh7XG4gICAgICAgIGZpbGVQYXRoOiBvcHRpb25zLlJlY29yZEZpbGVQYXRoLFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7fVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgfVxufVxuIl19