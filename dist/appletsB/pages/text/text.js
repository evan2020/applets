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
      router: '' //留言之后跳转的页面
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ0ZXh0YXJlYSIsInR5cGUiLCJtc2ciLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwibWF4bGVuZ3RoIiwiZm9jdXMiLCJ0ZXh0Iiwicm91dGVyIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ2V0TXNnIiwiZSIsInNlbGYiLCJkZXRhaWwiLCJ2YWx1ZSIsIiRhcHBseSIsInNlbmRNc2ciLCJjb25zb2xlIiwibG9nIiwidXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwiZXZlbnRzIiwidGVzdEFyciIsInJlZyIsImluZGV4Iiwic3RhcnQiLCJleGVjIiwicHVzaCIsInN1YnN0cmluZyIsImxhc3RJbmRleCIsImxlbmd0aCIsIm9wdGlvbnMiLCJSZWNvcmRGaWxlUGF0aCIsInBsYXlWb2ljZSIsImZpbGVQYXRoIiwiY29tcGxldGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsZ0JBRFEsRUFDRTtBQUNWQyxlQUZRLEVBRUM7QUFDVEMsdUJBSFEsRUFHUztBQUNqQkMsa0JBQVUsS0FKRixFQUlTO0FBQ2pCQyxtQkFBVyxHQUxILEVBS1E7QUFDaEJDLGVBQU8sS0FOQyxDQU1LO0FBTkwsT0FETDtBQVNMQyxZQUFNLEVBVEQsRUFTSztBQUNWQyxnQkFWSyxDQVVNO0FBVk4sSyxRQW9DUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1I7QUFDQUMsWUFGUSxrQkFFREMsQ0FGQyxFQUVFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYOztBQUVBO0FBQ0FBLGFBQUtiLFFBQUwsQ0FBY0UsR0FBZCxHQUFvQlUsRUFBRUUsTUFBRixDQUFTQyxLQUE3QjtBQUNBRixhQUFLRyxNQUFMO0FBQ0E7QUFDRCxPQVRPOzs7QUFXUjtBQUNBQyxhQVpRLHFCQVlFO0FBQ1IsWUFBSUosT0FBTyxJQUFYO0FBQ0EsWUFBSVgsTUFBTVcsS0FBS2IsUUFBTCxDQUFjRSxHQUF4QjtBQUNBZ0IsZ0JBQVFDLEdBQVIsQ0FBWU4sS0FBS04sSUFBakI7O0FBRUEsWUFBSWEsdURBQUo7QUFDQUMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGLGVBQVFQLEtBQUtMLE1BQWIsYUFBMkJZLEdBQTNCLGFBQXNDbEI7QUFEMUIsU0FBZDtBQUdEO0FBckJPLEssUUF3QlZxQixNLEdBQVMsRTs7Ozs7OztBQWpEVDs2QkFDUztBQUNQTCxjQUFRQyxHQUFSO0FBQ0EsVUFBSU4sT0FBTyxJQUFYO0FBQ0EsVUFBSVgsTUFBTVcsS0FBS2IsUUFBTCxDQUFjRSxHQUF4QjtBQUNBLFVBQUlzQixVQUFVLEVBQWQ7QUFDQTtBQUNBLFVBQUlDLE1BQU0sc0JBQVY7QUFDQSxVQUFJQyxVQUFKO0FBQ0EsVUFBSUMsUUFBUSxDQUFaO0FBQ0EsYUFBUUQsUUFBUUQsSUFBSUcsSUFBSixDQUFTMUIsR0FBVCxLQUFpQixJQUFqQyxFQUF3QztBQUN0QztBQUNBc0IsZ0JBQVFLLElBQVIsQ0FBYTNCLElBQUk0QixTQUFKLENBQWNILEtBQWQsRUFBcUJGLElBQUlNLFNBQXpCLENBQWI7QUFDQTtBQUNBSixnQkFBUUYsSUFBSU0sU0FBWjtBQUNEO0FBQ0Q7QUFDQVAsY0FBUUssSUFBUixDQUFhM0IsSUFBSTRCLFNBQUosQ0FBY0gsS0FBZCxFQUFxQnpCLElBQUk4QixNQUF6QixDQUFiO0FBQ0FuQixXQUFLTixJQUFMLEdBQVlpQixPQUFaO0FBQ0FYLFdBQUtHLE1BQUw7QUFDQUUsY0FBUUMsR0FBUjtBQUNEOzs7MkJBOEJNYyxPLEVBQVM7QUFDZCxVQUFJcEIsT0FBTyxJQUFYO0FBQ0FBLFdBQUtaLElBQUwsR0FBWWdDLFFBQVFoQyxJQUFwQjtBQUNBWSxXQUFLTCxNQUFMLEdBQWN5QixRQUFRekIsTUFBdEI7QUFDQSxVQUFJeUIsUUFBUUMsY0FBWixFQUE0QjtBQUMxQmIsV0FBR2MsU0FBSCxDQUFhO0FBQ1hDLG9CQUFVSCxRQUFRQyxjQURQO0FBRVhHLG9CQUFVLG9CQUFXLENBQUU7QUFGWixTQUFiO0FBSUQ7O0FBRUR4QixXQUFLRyxNQUFMO0FBQ0FFLGNBQVFDLEdBQVIsQ0FBWWMsT0FBWjtBQUNEOzs7O0VBbkZnQyxlQUFLSyxJOztrQkFBbkIzQyxLIiwiZmlsZSI6InRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55WZ6KiAJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICB0ZXh0YXJlYToge1xuICAgICAgdHlwZTogYGAsIC8v5YWl5Y+j6aG16Z2i6KGo56S6XG4gICAgICBtc2c6IGBgLCAvL+i+k+WFpeahhueahOWGheWuuVxuICAgICAgcGxhY2Vob2xkZXI6IGBgLCAvL+i+k+WFpeahhuS4uuepuuaXtuWNoOS9jeesplxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLCAvL+aYr+WQpuemgeeUqFxuICAgICAgbWF4bGVuZ3RoOiAxMDAsIC8v5pyA5aSn6L6T5YWl6ZW/5bqm77yM6K6+572u5Li6IC0xIOeahOaXtuWAmeS4jemZkOWItuacgOWkp+mVv+W6plxuICAgICAgZm9jdXM6IGZhbHNlIC8v6I635Y+W54Sm54K5XG4gICAgfSxcbiAgICB0ZXh0OiBbXSwgLy/ovazljJblkI7nmoTmlofmnKxcbiAgICByb3V0ZXI6IGBgIC8v55WZ6KiA5LmL5ZCO6Lez6L2s55qE6aG16Z2iXG4gIH07XG5cbiAgLy8g5aSE55CG5paH5pys5L+h5oGvXG4gIFJlZ01zZygpIHtcbiAgICBjb25zb2xlLmxvZyhg5paH5pys5aSE55CGc3RhcnRgKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IG1zZyA9IHNlbGYudGV4dGFyZWEubXNnO1xuICAgIGxldCB0ZXN0QXJyID0gW107XG4gICAgLy8g6YGH5Yiw5Lul5LiL56ym5Y+356uL5Y2z5oiq5Y+W5YaF5a655YiG5q61XG4gICAgbGV0IHJlZyA9IC9b77yMfCx8LnzjgIJ844CBfO+8n3zvvJt8O3wvXS9nO1xuICAgIGxldCBpbmRleCA9IGBgO1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgd2hpbGUgKChpbmRleCA9IHJlZy5leGVjKG1zZykgIT0gbnVsbCkpIHtcbiAgICAgIC8vIOaIquWPluS4pOS4quespuWQiOS5i+mXtOeahOaWh+Wtl++8jOWIhuauteaUvuWFpeaVsOe7hFxuICAgICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIHJlZy5sYXN0SW5kZXgpKTtcbiAgICAgIC8vIOajgOa1i+W5tuaUueWPmOW9k+WJjeespuWPt+e0ouW8lVxuICAgICAgc3RhcnQgPSByZWcubGFzdEluZGV4O1xuICAgIH1cbiAgICAvLyDojrflj5bmnIDlkI7kuIDmrrXmloflrZdcbiAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgbXNnLmxlbmd0aCkpO1xuICAgIHNlbGYudGV4dCA9IHRlc3RBcnI7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgICBjb25zb2xlLmxvZyhg5paH5pys5aSE55CGZW5kYCk7XG4gIH1cblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g5a2Y5YKo5raI5oGvXG4gICAgZ2V0TXNnKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgLy8g5L+d5a2Y6L6T5YWl5qGG55WZ6KiAXG4gICAgICBzZWxmLnRleHRhcmVhLm1zZyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKTtcbiAgICB9LFxuXG4gICAgLy8g5Y+R6YCB5raI5oGvXG4gICAgc2VuZE1zZygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGxldCBtc2cgPSBzZWxmLnRleHRhcmVhLm1zZztcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYudGV4dCk7XG5cbiAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9zaGFsb3Uuc21hbGx6aGl5dW4uY29tL3ByaXplL2luZGV4Lmh0bWxgO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYCR7c2VsZi5yb3V0ZXJ9P3VybD0ke3VybH0mbXNnPSR7bXNnfWBcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBzZWxmLnR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgc2VsZi5yb3V0ZXIgPSBvcHRpb25zLnJvdXRlcjtcbiAgICBpZiAob3B0aW9ucy5SZWNvcmRGaWxlUGF0aCkge1xuICAgICAgd3gucGxheVZvaWNlKHtcbiAgICAgICAgZmlsZVBhdGg6IG9wdGlvbnMuUmVjb3JkRmlsZVBhdGgsXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHt9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZWxmLiRhcHBseSgpO1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICB9XG59XG4iXX0=