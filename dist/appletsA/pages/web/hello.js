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
      navigationBarTitleText: ''
    }, _this.components = {}, _this.data = {
      url: '',
      msg: '',
      code: '',
      baseUrl: ''
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var self = this;
      console.log(options);

      //显示转发按钮
      wx.showShareMenu({
        withShareTicket: true
      });

      // 对url参数进行base编码（解决小程序与H5参数乱码问题）
      var Base64 = require('./../../../utils/base64.min.js').Base64;

      self.code = options.msg;
      self.msg = Base64.encode(options.msg);
      self.baseUrl = Base64.encode(options.url);

      self.$apply();

      // 设置跳转的url
      self.url = options.url + '?msg=' + self.msg;

      self.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {}

    // 设置分享卡片

  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }

      var url = 'https://shalou.smallzhiyun.com/prize/index.html';
      var code = this.data.code;
      console.log(this.data);
      // 卡片内容
      return {
        title: '',
        path: '/appletsA/pages/web/hello?url=' + url + '&msg=' + code + '&type=share',
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/goodluck.jpg',
        success: function success(res) {
          // 转发成功
        },
        fail: function fail(res) {
          // 转发失败
        }
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/web/hello'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwidXJsIiwibXNnIiwiY29kZSIsImJhc2VVcmwiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJvcHRpb25zIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJCYXNlNjQiLCJyZXF1aXJlIiwiZW5jb2RlIiwiJGFwcGx5IiwicmVzIiwiZnJvbSIsInRhcmdldCIsInRpdGxlIiwicGF0aCIsImltYWdlVXJsIiwic3VjY2VzcyIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsYUFESztBQUVMQyxhQUZLO0FBR0xDLGNBSEs7QUFJTEM7QUFKSyxLLFFBT1BDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7OzsyQkFFRkMsTyxFQUFTO0FBQ2QsVUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWUgsT0FBWjs7QUFFQTtBQUNBSSxTQUFHQyxhQUFILENBQWlCO0FBQ2ZDLHlCQUFpQjtBQURGLE9BQWpCOztBQUlBO0FBQ0EsVUFBSUMsU0FBU0MsUUFBUSw4QkFBUixFQUF3Q0QsTUFBckQ7O0FBRUFOLFdBQUtOLElBQUwsR0FBWUssUUFBUU4sR0FBcEI7QUFDQU8sV0FBS1AsR0FBTCxHQUFXYSxPQUFPRSxNQUFQLENBQWNULFFBQVFOLEdBQXRCLENBQVg7QUFDQU8sV0FBS0wsT0FBTCxHQUFlVyxPQUFPRSxNQUFQLENBQWNULFFBQVFQLEdBQXRCLENBQWY7O0FBRUFRLFdBQUtTLE1BQUw7O0FBRUE7QUFDQVQsV0FBS1IsR0FBTCxHQUFjTyxRQUFRUCxHQUF0QixhQUFpQ1EsS0FBS1AsR0FBdEM7O0FBRUFPLFdBQUtTLE1BQUw7QUFDRDs7OzZCQUNRLENBQUU7O0FBRVg7Ozs7c0NBQ2tCQyxHLEVBQUs7QUFDckIsVUFBSUEsSUFBSUMsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCO0FBQ0FWLGdCQUFRQyxHQUFSLENBQVlRLElBQUlFLE1BQWhCO0FBQ0Q7O0FBRUQsVUFBSXBCLHVEQUFKO0FBQ0EsVUFBSUUsT0FBTyxLQUFLSCxJQUFMLENBQVVHLElBQXJCO0FBQ0FPLGNBQVFDLEdBQVIsQ0FBWSxLQUFLWCxJQUFqQjtBQUNBO0FBQ0EsYUFBTztBQUNMc0IsZUFBTyxFQURGO0FBRUxDLGlEQUF1Q3RCLEdBQXZDLGFBQWtERSxJQUFsRCxnQkFGSztBQUdMO0FBQ0FxQixrQkFBVSwwQ0FKTDtBQUtMQyxpQkFBUyxpQkFBU04sR0FBVCxFQUFjO0FBQ3JCO0FBQ0QsU0FQSTtBQVFMTyxjQUFNLGNBQVNQLEdBQVQsRUFBYztBQUNsQjtBQUNEO0FBVkksT0FBUDtBQVlEOzs7O0VBbkVnQyxlQUFLUSxJOztrQkFBbkIvQixLIiwiZmlsZSI6ImhlbGxvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcnXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIHVybDogYGAsXG4gICAgbXNnOiBgYCxcbiAgICBjb2RlOiBgYCxcbiAgICBiYXNlVXJsOmBgLFxuICB9O1xuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHt9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuXG4gICAgLy/mmL7npLrovazlj5HmjInpkq5cbiAgICB3eC5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8g5a+5dXJs5Y+C5pWw6L+b6KGMYmFzZee8luegge+8iOino+WGs+Wwj+eoi+W6j+S4jkg15Y+C5pWw5Lmx56CB6Zeu6aKY77yJXG4gICAgbGV0IEJhc2U2NCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL2Jhc2U2NC5taW4uanMnKS5CYXNlNjQ7XG5cbiAgICBzZWxmLmNvZGUgPSBvcHRpb25zLm1zZztcbiAgICBzZWxmLm1zZyA9IEJhc2U2NC5lbmNvZGUob3B0aW9ucy5tc2cpO1xuICAgIHNlbGYuYmFzZVVybCA9IEJhc2U2NC5lbmNvZGUob3B0aW9ucy51cmwpO1xuXG4gICAgc2VsZi4kYXBwbHkoKTtcblxuICAgIC8vIOiuvue9rui3s+i9rOeahHVybFxuICAgIHNlbGYudXJsID0gYCR7b3B0aW9ucy51cmx9P21zZz0ke3NlbGYubXNnfWA7XG5cbiAgICBzZWxmLiRhcHBseSgpO1xuICB9XG4gIG9uU2hvdygpIHt9XG5cbiAgLy8g6K6+572u5YiG5Lqr5Y2h54mHXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldCk7XG4gICAgfVxuXG4gICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vcHJpemUvaW5kZXguaHRtbGA7XG4gICAgbGV0IGNvZGUgPSB0aGlzLmRhdGEuY29kZTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xuICAgIC8vIOWNoeeJh+WGheWuuVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBwYXRoOiBgL2FwcGxldHNBL3BhZ2VzL3dlYi9oZWxsbz91cmw9JHt1cmx9Jm1zZz0ke2NvZGV9JnR5cGU9c2hhcmVgLFxuICAgICAgLy8g5bCB6Z2i5Zu+XG4gICAgICBpbWFnZVVybDogJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS9nb29kbHVjay5qcGcnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeaIkOWKn1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HlpLHotKVcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=