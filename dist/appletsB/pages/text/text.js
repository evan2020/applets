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
      getMsg: function getMsg(e) {
        var self = this;

        // 保存输入框留言
        self.textarea.msg = e.detail.value;
        self.$apply();
        // console.log(e.detail.value);
      },
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
      self.$apply();
      console.log(options);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsB/pages/text/text'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ0ZXh0YXJlYSIsInR5cGUiLCJtc2ciLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwibWF4bGVuZ3RoIiwiZm9jdXMiLCJ0ZXh0Iiwicm91dGVyIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ2V0TXNnIiwiZSIsInNlbGYiLCJkZXRhaWwiLCJ2YWx1ZSIsIiRhcHBseSIsInNlbmRNc2ciLCJjb25zb2xlIiwibG9nIiwidXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwiZXZlbnRzIiwidGVzdEFyciIsInJlZyIsImluZGV4Iiwic3RhcnQiLCJleGVjIiwicHVzaCIsInN1YnN0cmluZyIsImxhc3RJbmRleCIsImxlbmd0aCIsIm9wdGlvbnMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsZ0JBRFEsRUFDRTtBQUNWQyxlQUZRLEVBRUM7QUFDVEMsdUJBSFEsRUFHUztBQUNqQkMsa0JBQVUsS0FKRixFQUlTO0FBQ2pCQyxtQkFBVyxHQUxILEVBS1E7QUFDaEJDLGVBQU8sS0FOQyxDQU1LO0FBTkwsT0FETDtBQVNMQyxZQUFNLEVBVEQsRUFTSztBQUNWQyxnQkFWSyxDQVVNO0FBVk4sSyxRQW9DUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLFlBRFEsa0JBQ0RDLENBREMsRUFDRTtBQUNSLFlBQUlDLE9BQU8sSUFBWDs7QUFFQTtBQUNBQSxhQUFLYixRQUFMLENBQWNFLEdBQWQsR0FBb0JVLEVBQUVFLE1BQUYsQ0FBU0MsS0FBN0I7QUFDQUYsYUFBS0csTUFBTDtBQUNBO0FBQ0QsT0FSTztBQVVSQyxhQVZRLHFCQVVFO0FBQ1IsWUFBSUosT0FBTyxJQUFYO0FBQ0EsWUFBSVgsTUFBTVcsS0FBS2IsUUFBTCxDQUFjRSxHQUF4QjtBQUNBZ0IsZ0JBQVFDLEdBQVIsQ0FBWU4sS0FBS04sSUFBakI7O0FBRUEsWUFBSWEsdURBQUo7QUFDQUMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGLGVBQVFQLEtBQUtMLE1BQWIsYUFBMkJZLEdBQTNCLGFBQXNDbEI7QUFEMUIsU0FBZDtBQUdEO0FBbkJPLEssUUFzQlZxQixNLEdBQVMsRTs7Ozs7OztBQS9DVDs2QkFDUztBQUNQTCxjQUFRQyxHQUFSO0FBQ0EsVUFBSU4sT0FBTyxJQUFYO0FBQ0EsVUFBSVgsTUFBTVcsS0FBS2IsUUFBTCxDQUFjRSxHQUF4QjtBQUNBLFVBQUlzQixVQUFVLEVBQWQ7QUFDQTtBQUNBLFVBQUlDLE1BQU0sc0JBQVY7QUFDQSxVQUFJQyxVQUFKO0FBQ0EsVUFBSUMsUUFBUSxDQUFaO0FBQ0EsYUFBUUQsUUFBUUQsSUFBSUcsSUFBSixDQUFTMUIsR0FBVCxLQUFpQixJQUFqQyxFQUF3QztBQUN0QztBQUNBc0IsZ0JBQVFLLElBQVIsQ0FBYTNCLElBQUk0QixTQUFKLENBQWNILEtBQWQsRUFBcUJGLElBQUlNLFNBQXpCLENBQWI7QUFDQTtBQUNBSixnQkFBUUYsSUFBSU0sU0FBWjtBQUNEO0FBQ0Q7QUFDQVAsY0FBUUssSUFBUixDQUFhM0IsSUFBSTRCLFNBQUosQ0FBY0gsS0FBZCxFQUFxQnpCLElBQUk4QixNQUF6QixDQUFiO0FBQ0FuQixXQUFLTixJQUFMLEdBQVlpQixPQUFaO0FBQ0FYLFdBQUtHLE1BQUw7QUFDQUUsY0FBUUMsR0FBUjtBQUNEOzs7MkJBNEJNYyxPLEVBQVM7QUFDZCxVQUFJcEIsT0FBTyxJQUFYO0FBQ0FBLFdBQUtaLElBQUwsR0FBWWdDLFFBQVFoQyxJQUFwQjtBQUNBWSxXQUFLTCxNQUFMLEdBQWN5QixRQUFRekIsTUFBdEI7QUFDQUssV0FBS0csTUFBTDtBQUNBRSxjQUFRQyxHQUFSLENBQVljLE9BQVo7QUFDRDs7OztFQTFFZ0MsZUFBS0MsSTs7a0JBQW5CdkMsSyIsImZpbGUiOiJ0ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eVmeiogCdcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgdGV4dGFyZWE6IHtcbiAgICAgIHR5cGU6IGBgLCAvL+WFpeWPo+mhtemdouihqOekulxuICAgICAgbXNnOiBgYCwgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICAgIHBsYWNlaG9sZGVyOiBgYCwgLy/ovpPlhaXmoYbkuLrnqbrml7bljaDkvY3nrKZcbiAgICAgIGRpc2FibGVkOiBmYWxzZSwgLy/mmK/lkKbnpoHnlKhcbiAgICAgIG1heGxlbmd0aDogMTAwLCAvL+acgOWkp+i+k+WFpemVv+W6pu+8jOiuvue9ruS4uiAtMSDnmoTml7blgJnkuI3pmZDliLbmnIDlpKfplb/luqZcbiAgICAgIGZvY3VzOiBmYWxzZSAvL+iOt+WPlueEpueCuVxuICAgIH0sXG4gICAgdGV4dDogW10sIC8v6L2s5YyW5ZCO55qE5paH5pysXG4gICAgcm91dGVyOiBgYCAvL+eVmeiogOS5i+WQjui3s+i9rOeahOmhtemdolxuICB9O1xuXG4gIC8vIOWkhOeQhuaWh+acrOS/oeaBr1xuICBSZWdNc2coKSB7XG4gICAgY29uc29sZS5sb2coYOaWh+acrOWkhOeQhnN0YXJ0YCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBtc2cgPSBzZWxmLnRleHRhcmVhLm1zZztcbiAgICBsZXQgdGVzdEFyciA9IFtdO1xuICAgIC8vIOmBh+WIsOS7peS4i+espuWPt+eri+WNs+aIquWPluWGheWuueWIhuautVxuICAgIGxldCByZWcgPSAvW++8jHwsfC5844CCfOOAgXzvvJ9877ybfDt8L10vZztcbiAgICBsZXQgaW5kZXggPSBgYDtcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIHdoaWxlICgoaW5kZXggPSByZWcuZXhlYyhtc2cpICE9IG51bGwpKSB7XG4gICAgICAvLyDmiKrlj5bkuKTkuKrnrKblkIjkuYvpl7TnmoTmloflrZfvvIzliIbmrrXmlL7lhaXmlbDnu4RcbiAgICAgIHRlc3RBcnIucHVzaChtc2cuc3Vic3RyaW5nKHN0YXJ0LCByZWcubGFzdEluZGV4KSk7XG4gICAgICAvLyDmo4DmtYvlubbmlLnlj5jlvZPliY3nrKblj7fntKLlvJVcbiAgICAgIHN0YXJ0ID0gcmVnLmxhc3RJbmRleDtcbiAgICB9XG4gICAgLy8g6I635Y+W5pyA5ZCO5LiA5q615paH5a2XXG4gICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIG1zZy5sZW5ndGgpKTtcbiAgICBzZWxmLnRleHQgPSB0ZXN0QXJyO1xuICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgY29uc29sZS5sb2coYOaWh+acrOWkhOeQhmVuZGApO1xuICB9XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIGdldE1zZyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIOS/neWtmOi+k+WFpeahhueVmeiogFxuICAgICAgc2VsZi50ZXh0YXJlYS5tc2cgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSk7XG4gICAgfSxcblxuICAgIHNlbmRNc2coKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBsZXQgbXNnID0gc2VsZi50ZXh0YXJlYS5tc2c7XG4gICAgICBjb25zb2xlLmxvZyhzZWxmLnRleHQpO1xuXG4gICAgICBsZXQgdXJsID0gYGh0dHBzOi8vc2hhbG91LnNtYWxsemhpeXVuLmNvbS9wcml6ZS9pbmRleC5odG1sYDtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAke3NlbGYucm91dGVyfT91cmw9JHt1cmx9Jm1zZz0ke21zZ31gXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi50eXBlID0gb3B0aW9ucy50eXBlO1xuICAgIHNlbGYucm91dGVyID0gb3B0aW9ucy5yb3V0ZXI7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgfVxufVxuIl19