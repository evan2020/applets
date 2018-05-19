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
        msg: '', //输入框的内容
        placeholder: '', //输入框为空时占位符
        disabled: false, //是否禁用
        maxlength: 10, //最大输入长度，设置为 -1 的时候不限制最大长度
        focus: false //获取焦点
      }
    }, _this.computed = {}, _this.methods = {
      getMsg: function getMsg(e) {
        var self = this;

        // 保存输入框留言
        self.textarea.msg = e.detail.value;
        self.$apply();
        console.log(e.detail.value);
      },
      sendMsg: function sendMsg() {
        var self = this;
        var url = 'https://shalou.smallzhiyun.com/prize/index.html';
        var msg = self.textarea.msg;
        console.log(msg);
        wx.navigateTo({
          url: '/appletsA/pages/web/hello?url=' + url + '&msg=' + msg
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsB/pages/text/text'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ0ZXh0YXJlYSIsIm1zZyIsInBsYWNlaG9sZGVyIiwiZGlzYWJsZWQiLCJtYXhsZW5ndGgiLCJmb2N1cyIsImNvbXB1dGVkIiwibWV0aG9kcyIsImdldE1zZyIsImUiLCJzZWxmIiwiZGV0YWlsIiwidmFsdWUiLCIkYXBwbHkiLCJjb25zb2xlIiwibG9nIiwic2VuZE1zZyIsInVybCIsInd4IiwibmF2aWdhdGVUbyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxhQUFLLEVBREcsRUFDQztBQUNUQyxxQkFBYSxFQUZMLEVBRVM7QUFDakJDLGtCQUFVLEtBSEYsRUFHUztBQUNqQkMsbUJBQVcsRUFKSCxFQUlPO0FBQ2ZDLGVBQU8sS0FMQyxDQUtLO0FBTEw7QUFETCxLLFFBVVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxDQURDLEVBQ0U7QUFDUixZQUFJQyxPQUFPLElBQVg7O0FBRUE7QUFDQUEsYUFBS1YsUUFBTCxDQUFjQyxHQUFkLEdBQW9CUSxFQUFFRSxNQUFGLENBQVNDLEtBQTdCO0FBQ0FGLGFBQUtHLE1BQUw7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWU4sRUFBRUUsTUFBRixDQUFTQyxLQUFyQjtBQUNELE9BUk87QUFVUkksYUFWUSxxQkFVRTtBQUNSLFlBQUlOLE9BQU8sSUFBWDtBQUNBLFlBQUlPLHVEQUFKO0FBQ0EsWUFBSWhCLE1BQU1TLEtBQUtWLFFBQUwsQ0FBY0MsR0FBeEI7QUFDQWEsZ0JBQVFDLEdBQVIsQ0FBWWQsR0FBWjtBQUNBaUIsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGLGtEQUFzQ0EsR0FBdEMsYUFBaURoQjtBQURyQyxTQUFkO0FBR0Q7QUFsQk8sSyxRQXFCVm1CLE0sR0FBUyxFOzs7Ozs2QkFFQTtBQUNQLFVBQUlWLE9BQU8sSUFBWDtBQUNEOzs7O0VBM0NnQyxlQUFLVyxJOztrQkFBbkIxQixLIiwiZmlsZSI6InRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55WZ6KiAJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICB0ZXh0YXJlYToge1xuICAgICAgbXNnOiAnJywgLy/ovpPlhaXmoYbnmoTlhoXlrrlcbiAgICAgIHBsYWNlaG9sZGVyOiAnJywgLy/ovpPlhaXmoYbkuLrnqbrml7bljaDkvY3nrKZcbiAgICAgIGRpc2FibGVkOiBmYWxzZSwgLy/mmK/lkKbnpoHnlKhcbiAgICAgIG1heGxlbmd0aDogMTAsIC8v5pyA5aSn6L6T5YWl6ZW/5bqm77yM6K6+572u5Li6IC0xIOeahOaXtuWAmeS4jemZkOWItuacgOWkp+mVv+W6plxuICAgICAgZm9jdXM6IGZhbHNlIC8v6I635Y+W54Sm54K5XG4gICAgfVxuICB9O1xuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBnZXRNc2coZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyDkv53lrZjovpPlhaXmoYbnlZnoqIBcbiAgICAgIHNlbGYudGV4dGFyZWEubXNnID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xuICAgIH0sXG5cbiAgICBzZW5kTXNnKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vcHJpemUvaW5kZXguaHRtbGA7XG4gICAgICBsZXQgbXNnID0gc2VsZi50ZXh0YXJlYS5tc2c7XG4gICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy93ZWIvaGVsbG8/dXJsPSR7dXJsfSZtc2c9JHttc2d9YFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gIH1cbn1cbiJdfQ==