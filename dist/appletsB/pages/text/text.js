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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ0ZXh0YXJlYSIsInR5cGUiLCJtc2ciLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwibWF4bGVuZ3RoIiwiZm9jdXMiLCJ0ZXh0Iiwicm91dGVyIiwicmVjb3JkU3RhdGUiLCJyZWNvcmRQYXRoIiwidGltZU51bSIsInRpbWVyIiwiZm9ybUlkIiwidGltZUNoZWNrVmFsIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJyZWNvcmRlck1hbmFnZXIiLCJ3eCIsImdldFJlY29yZGVyTWFuYWdlciIsIm9uU3RhcnQiLCJzZXRJbnRlcnZhbCIsIiRhcHBseSIsIm9uUGF1c2UiLCJvblN0b3AiLCJyZXMiLCJjbGVhckludGVydmFsIiwidGVtcEZpbGVQYXRoIiwic3RhcnQiLCJzdG9wIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ2V0TXNnIiwiZSIsImRldGFpbCIsInZhbHVlIiwic2VuZE1zZyIsInNldFRpbWVvdXQiLCJ1cmwiLCJuYXZpZ2F0ZVRvIiwicmVjb3JkU3RhcnQiLCJyZWNvcmRQbGF5IiwiaW5uZXJBdWRpb0NvbnRleHQiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsImF1dG9wbGF5Iiwic3JjIiwib25QbGF5Iiwib25FcnJvciIsImVyck1zZyIsImVyckNvZGUiLCJyZWNvcmREZWxldGUiLCJyZWNvcmRTYXZlIiwic3Vic3RyaW5nIiwiZmlsZVNhdmUiLCJsZXR0ZXJNb2R1bGUiLCJCYWFTIiwid3hSZXBvcnRUaWNrZXQiLCJ0aGVuIiwiY2FyZF90aW1lIiwiRGF0ZSIsInRhYmxlSUQiLCJQcm9kdWN0IiwiVGFibGVPYmplY3QiLCJwcm9kdWN0IiwiY3JlYXRlIiwiYXBwbGUiLCJzZW5kX2NhcmQiLCJjYXJkX25hbWUiLCJzdGF0ZSIsImRpcmVjdGlvbnMiLCJub3RlIiwic2V0Iiwic2F2ZSIsInRpbWVDaGVjayIsImV2ZW50cyIsInRlc3RBcnIiLCJyZWciLCJpbmRleCIsImV4ZWMiLCJwdXNoIiwibGFzdEluZGV4IiwibGVuZ3RoIiwiZmlsZVBhdGgiLCJjYXRlZ29yeU5hbWUiLCJNeUZpbGUiLCJGaWxlIiwiZmlsZVBhcmFtcyIsIm1ldGFEYXRhIiwidXBsb2FkIiwicGF0aCIsImVyciIsIm9wdGlvbnMiLCJSZWNvcmRGaWxlUGF0aCIsInBsYXlWb2ljZSIsImNvbXBsZXRlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGdCQURRLEVBQ0U7QUFDVkMsZUFGUSxFQUVDO0FBQ1RDLHVCQUhRLEVBR1M7QUFDakJDLGtCQUFVLEtBSkYsRUFJUztBQUNqQkMsbUJBQVcsR0FMSCxFQUtRO0FBQ2hCQyxlQUFPLEtBTkMsQ0FNSztBQU5MLE9BREw7QUFTTEMsWUFBTSxFQVRELEVBU0s7QUFDVkMsZ0JBVkssRUFVTztBQUNaQyxtQkFBYSxLQVhSLEVBV2U7QUFDcEJDLG9CQVpLLEVBWVc7QUFDaEJDLGVBQVMsQ0FiSixFQWFPO0FBQ1pDLGVBZEssRUFjTTtBQUNYQyxnQkFmSyxFQWVPO0FBQ1pDLCtCQWhCSyxDQWdCcUI7QUFoQnJCLEssUUFtQlBDLEssR0FBUTtBQUNOTixpQkFETSx1QkFDTU8sUUFETixFQUNnQkMsUUFEaEIsRUFDMEI7QUFDOUIsWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLHlCQUFrQ0gsUUFBbEMsWUFBaURELFFBQWpEO0FBQ0EsWUFBTUssa0JBQWtCQyxHQUFHQyxrQkFBSCxFQUF4QjtBQUNBRix3QkFBZ0JHLE9BQWhCLENBQXdCLFlBQU07QUFDNUJMLGtCQUFRQyxHQUFSLENBQVksZ0JBQVo7QUFD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QUFHRDs7OzJCQStJTXFGLE8sRUFBUztBQUNkLFVBQUk3RSxPQUFPLElBQVg7QUFDQUEsV0FBS2pCLElBQUwsR0FBWThGLFFBQVE5RixJQUFwQjtBQUNBaUIsV0FBS1YsTUFBTCxHQUFjdUYsUUFBUXZGLE1BQXRCO0FBQ0EsVUFBSXVGLFFBQVFDLGNBQVosRUFBNEI7QUFDMUIxRSxXQUFHMkUsU0FBSCxDQUFhO0FBQ1hYLG9CQUFVUyxRQUFRQyxjQURQO0FBRVhFLG9CQUFVLG9CQUFXLENBQUU7QUFGWixTQUFiO0FBSUQ7O0FBRURoRixXQUFLUSxNQUFMO0FBQ0FQLGNBQVFDLEdBQVIsQ0FBWTJFLE9BQVo7QUFDRDs7OztFQTVRZ0MsZUFBS0ksSTs7a0JBQW5CeEcsSyIsImZpbGUiOiJ0ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eVmeiogCdcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgdGV4dGFyZWE6IHtcbiAgICAgIHR5cGU6IGBgLCAvL+WFpeWPo+mhtemdouihqOekulxuICAgICAgbXNnOiBgYCwgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICAgIHBsYWNlaG9sZGVyOiBgYCwgLy/ovpPlhaXmoYbkuLrnqbrml7bljaDkvY3nrKZcbiAgICAgIGRpc2FibGVkOiBmYWxzZSwgLy/mmK/lkKbnpoHnlKhcbiAgICAgIG1heGxlbmd0aDogMTAwLCAvL+acgOWkp+i+k+WFpemVv+W6pu+8jOiuvue9ruS4uiAtMSDnmoTml7blgJnkuI3pmZDliLbmnIDlpKfplb/luqZcbiAgICAgIGZvY3VzOiBmYWxzZSAvL+iOt+WPlueEpueCuVxuICAgIH0sXG4gICAgdGV4dDogW10sIC8v6L2s5YyW5ZCO55qE5paH5pysXG4gICAgcm91dGVyOiBgYCwgLy/nlZnoqIDkuYvlkI7ot7PovaznmoTpobXpnaJcbiAgICByZWNvcmRTdGF0ZTogZmFsc2UsIC8v5b2V6Z+z54q25oCBXG4gICAgcmVjb3JkUGF0aDogYGAsIC8v5b2V6Z+z5Li05pe25Zyw5Z2AXG4gICAgdGltZU51bTogMCwgLy/lvZXpn7Pml7bplb9cbiAgICB0aW1lcjogYGAsIC8v5a6a5pe25ZmoXG4gICAgZm9ybUlkOiBgYCwgLy/mqKHmnb9pZFxuICAgIHRpbWVDaGVja1ZhbDogYHVubGltaXRlZGAgLy/pgInmi6nkv6Hku7bmnInmlYjmnJ8o6buY6K6k5peg6ZmQ5Yi2KVxuICB9O1xuXG4gIHdhdGNoID0ge1xuICAgIHJlY29yZFN0YXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2coYHJlY29yZFN0YXRlIHZhbHVlOiAke29sZFZhbHVlfSAtPiAke25ld1ZhbHVlfWApO1xuICAgICAgY29uc3QgcmVjb3JkZXJNYW5hZ2VyID0gd3guZ2V0UmVjb3JkZXJNYW5hZ2VyKCk7XG4gICAgICByZWNvcmRlck1hbmFnZXIub25TdGFydCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWNvcmRlciBzdGFydCcpO1xuICAgICAgICBzZWxmLnRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi50aW1lTnVtID0gc2VsZi50aW1lTnVtICsgMTtcbiAgICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgICAgcmVjb3JkZXJNYW5hZ2VyLm9uUGF1c2UoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVjb3JkZXIgcGF1c2UnKTtcbiAgICAgIH0pO1xuICAgICAgcmVjb3JkZXJNYW5hZ2VyLm9uU3RvcChyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVjb3JkZXIgc3RvcCcsIHJlcyk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc2VsZi50aW1lcik7XG4gICAgICAgIGNvbnN0IHsgdGVtcEZpbGVQYXRoIH0gPSByZXM7XG4gICAgICAgIHNlbGYucmVjb3JkUGF0aCA9IHJlcy50ZW1wRmlsZVBhdGg7XG4gICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICByZWNvcmRlck1hbmFnZXIuc3RhcnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlY29yZGVyTWFuYWdlci5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIOWkhOeQhuaWh+acrOS/oeaBr1xuICBSZWdNc2coKSB7XG4gICAgY29uc29sZS5sb2coYOaWh+acrOWkhOeQhnN0YXJ0YCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBtc2cgPSBzZWxmLnRleHRhcmVhLm1zZztcbiAgICBsZXQgdGVzdEFyciA9IFtdO1xuICAgIC8vIOmBh+WIsOS7peS4i+espuWPt+eri+WNs+aIquWPluWGheWuueWIhuautVxuICAgIGxldCByZWcgPSAvW++8jHwsfC5844CCfOOAgXzvvJ9877ybfDt8L10vZztcbiAgICBsZXQgaW5kZXggPSBgYDtcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIHdoaWxlICgoaW5kZXggPSByZWcuZXhlYyhtc2cpICE9IG51bGwpKSB7XG4gICAgICAvLyDmiKrlj5bkuKTkuKrnrKblkIjkuYvpl7TnmoTmloflrZfvvIzliIbmrrXmlL7lhaXmlbDnu4RcbiAgICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCByZWcubGFzdEluZGV4KSk7XG4gICAgICAvLyDmo4DmtYvlubbmlLnlj5jlvZPliY3nrKblj7fntKLlvJVcbiAgICAgIHN0YXJ0ID0gcmVnLmxhc3RJbmRleDtcbiAgICB9XG4gICAgLy8g6I635Y+W5pyA5ZCO5LiA5q615paH5a2XXG4gICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIG1zZy5sZW5ndGgpKTtcbiAgICBzZWxmLnRleHQgPSB0ZXN0QXJyO1xuICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgY29uc29sZS5sb2coYOaWh+acrOWkhOeQhmVuZGApO1xuICB9XG5cbiAgLy8g55+l5pmT5LqR5paH5Lu25L+d5a2YXG4gIGZpbGVTYXZlKGZpbGVQYXRoLCBjYXRlZ29yeU5hbWUpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IE15RmlsZSA9IG5ldyB3eC5CYWFTLkZpbGUoKTtcbiAgICBsZXQgZmlsZVBhcmFtcyA9IHsgZmlsZVBhdGggfTtcbiAgICBsZXQgbWV0YURhdGEgPSB7IGNhdGVnb3J5TmFtZSB9O1xuXG4gICAgTXlGaWxlLnVwbG9hZChmaWxlUGFyYW1zLCBtZXRhRGF0YSkudGhlbihcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIC8vIOS/neWtmOW9lemfs+S6keaWh+S7tuWcsOWdgFxuICAgICAgICBzZWxmLnJlY29yZFBhdGggPSByZXMuZGF0YS5wYXRoO1xuICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnJlY29yZFBhdGgpO1xuICAgICAgICAvLyDot7PovazpobXpnaJcbiAgICAgICAgc2VsZi5zZW5kTXNnKCk7XG4gICAgICB9LFxuICAgICAgZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLy8g5Y+R6YCB5raI5oGvXG4gIHNlbmRNc2coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBtc2cgPSBzZWxmLnRleHRhcmVhLm1zZztcbiAgICBjb25zb2xlLmxvZyhzZWxmLnRleHQpO1xuXG4gICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vcHJpemUvaW5kZXguaHRtbGA7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAke3NlbGYucm91dGVyfT91cmw9JHt1cmx9Jm1zZz0ke21zZ30mcmVjb3JkVXJsPSR7c2VsZi5yZWNvcmRQYXRofWBcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDlrZjlgqjmtojmga9cbiAgICBnZXRNc2coZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyDkv53lrZjovpPlhaXmoYbnlZnoqIBcbiAgICAgIHNlbGYudGV4dGFyZWEubXNnID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xuICAgIH0sXG5cbiAgICAvLyDlj5HpgIHmtojmga9cbiAgICBzZW5kTXNnKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IG1zZyA9IHNlbGYudGV4dGFyZWEubXNnO1xuICAgICAgY29uc29sZS5sb2coc2VsZi50ZXh0KTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9zaGFsb3Uuc21hbGx6aGl5dW4uY29tL3ByaXplL2luZGV4Lmh0bWxgO1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IGAke3NlbGYucm91dGVyfT91cmw9JHt1cmx9Jm1zZz0ke21zZ30mcmVjb3JkVXJsPSR7XG4gICAgICAgICAgICBzZWxmLnJlY29yZFBhdGhcbiAgICAgICAgICB9JmZvcm1JZD0ke3NlbGYuZm9ybUlkfSZ0aW1lQ2hlY2tWYWw9JHtzZWxmLnRpbWVDaGVja1ZhbH1gXG4gICAgICAgIH0pO1xuICAgICAgfSwgMzAwKTtcbiAgICB9LFxuXG4gICAgLy/lvIDlp4vlvZXpn7NcbiAgICByZWNvcmRTdGFydCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKCflvIDlp4vlvZXpn7MnKTtcbiAgICAgIHNlbGYucmVjb3JkU3RhdGUgPSAhc2VsZi5yZWNvcmRTdGF0ZTtcblxuICAgICAgLy8g5YiH5o2i5Zu+5qCHXG4gICAgfSxcblxuICAgIC8vIOivleWQrFxuICAgIHJlY29yZFBsYXkoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhg6K+V5ZCs5b2V6Z+zYCk7XG4gICAgICBjb25zdCBpbm5lckF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IHRydWU7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSBzZWxmLnJlY29yZFBhdGg7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vblBsYXkoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn5byA5aeL5pKt5pS+Jyk7XG4gICAgICB9KTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uRXJyb3IocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJDb2RlKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyDliKDpmaTlvZXpn7NcbiAgICByZWNvcmREZWxldGUoKSB7XG4gICAgICBjb25zb2xlLmxvZyhg5Yig6Zmk5b2V6Z+zYCk7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLnJlY29yZFBhdGggPSBgYDtcbiAgICAgIHNlbGYucmVjb3JkU3RhdGUgPSBmYWxzZTtcbiAgICAgIHNlbGYudGltZU51bSA9IDA7XG4gICAgfSxcblxuICAgIC8vIOS/neWtmOW9lemfs+WIsOacjeWKoeWZqFxuICAgIHJlY29yZFNhdmUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhzZWxmLnJlY29yZFBhdGguc3Vic3RyaW5nKDAsIDUpKTtcbiAgICAgIGlmIChzZWxmLnJlY29yZFBhdGguc3Vic3RyaW5nKDAsIDUpID09IGBodHRwOmApIHtcbiAgICAgICAgY29uc29sZS5sb2coYOS/neWtmOW9lemfs2ApO1xuICAgICAgICBzZWxmLmZpbGVTYXZlKHNlbGYucmVjb3JkUGF0aCwgYHJlY29yZGApO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLnJlY29yZFBhdGguc3Vic3RyaW5nKDAsIDUpID09IGB3eGZpbGApIHtcbiAgICAgICAgY29uc29sZS5sb2coYOS/neWtmOW9lemfs2ApO1xuICAgICAgICBzZWxmLmZpbGVTYXZlKHNlbGYucmVjb3JkUGF0aCwgYHJlY29yZGApO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLnJlY29yZFBhdGguc3Vic3RyaW5nKDAsIDUpID09IGBodHRwc2ApIHtcbiAgICAgICAgc2VsZi5zZW5kTXNnKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhg5rKh5pyJ5b2V6Z+zYCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIOaooeadv+inpuWPkeS6i+S7tlxuICAgIGxldHRlck1vZHVsZShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhg5qih5p2/5LqL5Lu2YCk7XG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC5mb3JtSWQpO1xuICAgICAgc2VsZi5mb3JtSWQgPSBlLmRldGFpbC5mb3JtSWQ7XG4gICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgY29uc29sZS5sb2coc2VsZi5mb3JtSWQpO1xuICAgICAgLy8g5YWI5LiK5oqlZm9ybUlkLOeEtuWQjuWIm+W7uuihqO+8jOinpuWPkVRyaWdnZXJcbiAgICAgIHd4LkJhYVMud3hSZXBvcnRUaWNrZXQoZS5kZXRhaWwuZm9ybUlkKS50aGVuKFxuICAgICAgICByZXMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGDmtYvor5Vmb3JtaWQgc3VjY2Vzc+Wbnuiwg2ApO1xuICAgICAgICAgIGxldCBjYXJkX3RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgLy8g6K6+572u5qih5p2/5raI5oGv6YCa55+lXG4gICAgICAgICAgLy8g5ZCRIHRhYmxlSUQg5Li6IDM5MDA2IOeahOaVsOaNruihqOaPkuWFpeS4gOadoeiusOW9lVxuICAgICAgICAgIGxldCB0YWJsZUlEID0gMzkwMDY7XG4gICAgICAgICAgbGV0IFByb2R1Y3QgPSBuZXcgd3guQmFhUy5UYWJsZU9iamVjdCh0YWJsZUlEKTtcbiAgICAgICAgICBsZXQgcHJvZHVjdCA9IFByb2R1Y3QuY3JlYXRlKCk7XG5cbiAgICAgICAgICAvLyDorr7nva7mlrnlvI/kuIBcbiAgICAgICAgICBsZXQgYXBwbGUgPSB7XG4gICAgICAgICAgICAvLyDkv6Hku7blt7Lmn6XmlLZcbiAgICAgICAgICAgIHNlbmRfY2FyZDogYHNlbmRDYXJkYCxcbiAgICAgICAgICAgIGNhcmRfbmFtZTogYOavjeS6suiKgui0uuWNoWAsXG4gICAgICAgICAgICBzdGF0ZTogYOW3suaOpeaUtmAsXG4gICAgICAgICAgICBkaXJlY3Rpb25zOiBg5rKZ5ryP55qE5pe25YWJYCxcbiAgICAgICAgICAgIG5vdGU6ICdjYXJkX3RpbWUnXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHByb2R1Y3RcbiAgICAgICAgICAgIC5zZXQoYXBwbGUpXG4gICAgICAgICAgICAuc2F2ZSgpXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOWIm+W7uuihqOaIkOWKn2ApO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGVyclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGDmtYvor5Vmb3JtaWQgZXJy5Zue6LCDYCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSxcblxuICAgIC8vIOmAieaLqeS/oeS7tuacieaViOacn1xuICAgIHRpbWVDaGVjayhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhg6YCJ5oup5L+h5Lu25pyJ5pWI5pyfYCk7XG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSk7XG4gICAgICBzZWxmLnRpbWVDaGVja1ZhbCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICB9XG4gIH07XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi50eXBlID0gb3B0aW9ucy50eXBlO1xuICAgIHNlbGYucm91dGVyID0gb3B0aW9ucy5yb3V0ZXI7XG4gICAgaWYgKG9wdGlvbnMuUmVjb3JkRmlsZVBhdGgpIHtcbiAgICAgIHd4LnBsYXlWb2ljZSh7XG4gICAgICAgIGZpbGVQYXRoOiBvcHRpb25zLlJlY29yZEZpbGVQYXRoLFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7fVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgfVxufVxuIl19