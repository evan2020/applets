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
      text: [] //转化后的文本
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

        // 如果标识为刮刮乐，则跳转刮刮乐留言页面
        if (self.type == 'prize') {
          var url = 'https://shalou.smallzhiyun.com/prize/index.html';
          wx.navigateTo({
            url: '/appletsA/pages/web/hello?url=' + url + '&msg=' + msg
          });
        } else if (self.type == 'CardDw') {
          // 如果表示为端午卡片，跳转端午贺卡页面
          wx.navigateTo({
            url: '/appletsA/pages/details/duanwu?msg=' + msg
          });
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
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var self = this;
      self.type = options.type;
      self.$apply();
      console.log(options);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsB/pages/text/text'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ0ZXh0YXJlYSIsInR5cGUiLCJtc2ciLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwibWF4bGVuZ3RoIiwiZm9jdXMiLCJ0ZXh0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ2V0TXNnIiwiZSIsInNlbGYiLCJkZXRhaWwiLCJ2YWx1ZSIsIiRhcHBseSIsInNlbmRNc2ciLCJjb25zb2xlIiwibG9nIiwidXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwiZXZlbnRzIiwidGVzdEFyciIsInJlZyIsImluZGV4Iiwic3RhcnQiLCJleGVjIiwicHVzaCIsInN1YnN0cmluZyIsImxhc3RJbmRleCIsImxlbmd0aCIsIm9wdGlvbnMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsZ0JBRFEsRUFDRTtBQUNWQyxlQUZRLEVBRUM7QUFDVEMsdUJBSFEsRUFHUztBQUNqQkMsa0JBQVUsS0FKRixFQUlTO0FBQ2pCQyxtQkFBVyxHQUxILEVBS1E7QUFDaEJDLGVBQU8sS0FOQyxDQU1LO0FBTkwsT0FETDtBQVNMQyxZQUFLLEVBVEEsQ0FTRztBQVRILEssUUFtQ1BDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxDQURDLEVBQ0U7QUFDUixZQUFJQyxPQUFPLElBQVg7O0FBRUE7QUFDQUEsYUFBS1osUUFBTCxDQUFjRSxHQUFkLEdBQW9CUyxFQUFFRSxNQUFGLENBQVNDLEtBQTdCO0FBQ0FGLGFBQUtHLE1BQUw7QUFDQTtBQUNELE9BUk87QUFVUkMsYUFWUSxxQkFVRTtBQUNSLFlBQUlKLE9BQU8sSUFBWDtBQUNBLFlBQUlWLE1BQU1VLEtBQUtaLFFBQUwsQ0FBY0UsR0FBeEI7QUFDQWUsZ0JBQVFDLEdBQVIsQ0FBWU4sS0FBS0wsSUFBakI7O0FBRUE7QUFDQSxZQUFJSyxLQUFLWCxJQUFMLFdBQUosRUFBMEI7QUFDeEIsY0FBSWtCLHVEQUFKO0FBQ0FDLGFBQUdDLFVBQUgsQ0FBYztBQUNaRixvREFBc0NBLEdBQXRDLGFBQWlEakI7QUFEckMsV0FBZDtBQUdELFNBTEQsTUFLTyxJQUFJVSxLQUFLWCxJQUFMLFlBQUosRUFBMkI7QUFDaEM7QUFDQW1CLGFBQUdDLFVBQUgsQ0FBYztBQUNaRix5REFBMkNqQjtBQUQvQixXQUFkO0FBR0Q7QUFDRjtBQTNCTyxLLFFBOEJWb0IsTSxHQUFTLEU7Ozs7Ozs7QUF2RFQ7NkJBQ1M7QUFDUEwsY0FBUUMsR0FBUjtBQUNBLFVBQUlOLE9BQU8sSUFBWDtBQUNBLFVBQUlWLE1BQU1VLEtBQUtaLFFBQUwsQ0FBY0UsR0FBeEI7QUFDQSxVQUFJcUIsVUFBVSxFQUFkO0FBQ0E7QUFDQSxVQUFJQyxNQUFNLHNCQUFWO0FBQ0EsVUFBSUMsVUFBSjtBQUNBLFVBQUlDLFFBQVEsQ0FBWjtBQUNBLGFBQVFELFFBQVFELElBQUlHLElBQUosQ0FBU3pCLEdBQVQsS0FBaUIsSUFBakMsRUFBd0M7QUFDdEM7QUFDQXFCLGdCQUFRSyxJQUFSLENBQWExQixJQUFJMkIsU0FBSixDQUFjSCxLQUFkLEVBQXFCRixJQUFJTSxTQUF6QixDQUFiO0FBQ0E7QUFDQUosZ0JBQVFGLElBQUlNLFNBQVo7QUFDRDtBQUNEO0FBQ0FQLGNBQVFLLElBQVIsQ0FBYTFCLElBQUkyQixTQUFKLENBQWNILEtBQWQsRUFBcUJ4QixJQUFJNkIsTUFBekIsQ0FBYjtBQUNBbkIsV0FBS0wsSUFBTCxHQUFZZ0IsT0FBWjtBQUNBWCxXQUFLRyxNQUFMO0FBQ0FFLGNBQVFDLEdBQVI7QUFDRDs7OzJCQW9DTWMsTyxFQUFTO0FBQ2QsVUFBSXBCLE9BQU8sSUFBWDtBQUNBQSxXQUFLWCxJQUFMLEdBQVkrQixRQUFRL0IsSUFBcEI7QUFDQVcsV0FBS0csTUFBTDtBQUNBRSxjQUFRQyxHQUFSLENBQVljLE9BQVo7QUFDRDs7OztFQWhGZ0MsZUFBS0MsSTs7a0JBQW5CdEMsSyIsImZpbGUiOiJ0ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eVmeiogCdcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgdGV4dGFyZWE6IHtcbiAgICAgIHR5cGU6IGBgLCAvL+WFpeWPo+mhtemdouihqOekulxuICAgICAgbXNnOiBgYCwgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICAgIHBsYWNlaG9sZGVyOiBgYCwgLy/ovpPlhaXmoYbkuLrnqbrml7bljaDkvY3nrKZcbiAgICAgIGRpc2FibGVkOiBmYWxzZSwgLy/mmK/lkKbnpoHnlKhcbiAgICAgIG1heGxlbmd0aDogMTAwLCAvL+acgOWkp+i+k+WFpemVv+W6pu+8jOiuvue9ruS4uiAtMSDnmoTml7blgJnkuI3pmZDliLbmnIDlpKfplb/luqZcbiAgICAgIGZvY3VzOiBmYWxzZSAvL+iOt+WPlueEpueCuVxuICAgIH0sXG4gICAgdGV4dDpbXSwvL+i9rOWMluWQjueahOaWh+acrFxuICB9O1xuXG4gIC8vIOWkhOeQhuaWh+acrOS/oeaBr1xuICBSZWdNc2coKSB7XG4gICAgY29uc29sZS5sb2coYOaWh+acrOWkhOeQhnN0YXJ0YClcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IG1zZyA9IHNlbGYudGV4dGFyZWEubXNnO1xuICAgIGxldCB0ZXN0QXJyID0gW107XG4gICAgLy8g6YGH5Yiw5Lul5LiL56ym5Y+356uL5Y2z5oiq5Y+W5YaF5a655YiG5q61XG4gICAgbGV0IHJlZyA9IC9b77yMfCx8LnzjgIJ844CBfO+8n3zvvJt8O3wvXS9nO1xuICAgIGxldCBpbmRleCA9IGBgO1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgd2hpbGUgKChpbmRleCA9IHJlZy5leGVjKG1zZykgIT0gbnVsbCkpIHtcbiAgICAgIC8vIOaIquWPluS4pOS4quespuWQiOS5i+mXtOeahOaWh+Wtl++8jOWIhuauteaUvuWFpeaVsOe7hFxuICAgICAgdGVzdEFyci5wdXNoKG1zZy5zdWJzdHJpbmcoc3RhcnQsIHJlZy5sYXN0SW5kZXgpKTtcbiAgICAgIC8vIOajgOa1i+W5tuaUueWPmOW9k+WJjeespuWPt+e0ouW8lVxuICAgICAgc3RhcnQgPSByZWcubGFzdEluZGV4O1xuICAgIH1cbiAgICAvLyDojrflj5bmnIDlkI7kuIDmrrXmloflrZdcbiAgICB0ZXN0QXJyLnB1c2gobXNnLnN1YnN0cmluZyhzdGFydCwgbXNnLmxlbmd0aCkpO1xuICAgIHNlbGYudGV4dCA9IHRlc3RBcnI7XG4gICAgc2VsZi4kYXBwbHkoKTtcbiAgICBjb25zb2xlLmxvZyhg5paH5pys5aSE55CGZW5kYClcbiAgfVxuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBnZXRNc2coZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyDkv53lrZjovpPlhaXmoYbnlZnoqIBcbiAgICAgIHNlbGYudGV4dGFyZWEubXNnID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xuICAgIH0sXG5cbiAgICBzZW5kTXNnKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IG1zZyA9IHNlbGYudGV4dGFyZWEubXNnO1xuICAgICAgY29uc29sZS5sb2coc2VsZi50ZXh0KTtcblxuICAgICAgLy8g5aaC5p6c5qCH6K+G5Li65Yiu5Yiu5LmQ77yM5YiZ6Lez6L2s5Yiu5Yiu5LmQ55WZ6KiA6aG16Z2iXG4gICAgICBpZiAoc2VsZi50eXBlID09IGBwcml6ZWApIHtcbiAgICAgICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vcHJpemUvaW5kZXguaHRtbGA7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy93ZWIvaGVsbG8/dXJsPSR7dXJsfSZtc2c9JHttc2d9YFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi50eXBlID09IGBDYXJkRHdgKSB7XG4gICAgICAgIC8vIOWmguaenOihqOekuuS4uuerr+WNiOWNoeeJh++8jOi3s+i9rOerr+WNiOi0uuWNoemhtemdolxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9kdWFud3U/bXNnPSR7bXNnfWBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICBzZWxmLiRhcHBseSgpO1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICB9XG59XG4iXX0=