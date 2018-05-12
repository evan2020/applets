'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

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
      navigationBarTitleText: '信息'
    }, _this.components = {}, _this.data = {
      useInfo: '',
      loginBtn: true,
      avatar: 'https://om83cysj8.qnssl.com/323.png',
      name: '时光'
    }, _this.computed = {}, _this.methods = {
      // letter() {
      //   console.log('letter');
      //   wx.navigateTo({
      //     url: '/appletsA/pages/text/text'
      //   });
      // },

      // 登录授权
      userInfoHandler: function userInfoHandler(data) {
        var self = this;
        wx.BaaS.handleUserInfo(data).then(function (userinfo) {
          // 设置头像和名称
          self.setData({
            name: userinfo.nickName,
            avatar: userinfo.avatarUrl,
            loginBtn: false
          });
        }, function (res) {
          console.log('失败', res);
        });
      },
      test: function test() {
        console.log('test');
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;

      var userinfo = wx.BaaS.storage.get('userinfo');
      // 设置头像和名称
      self.name = userinfo.nickName || '时光';
      self.avatar = userinfo.avatarUrl || 'https://om83cysj8.qnssl.com/323.png';
      self.loginBtn = userinfo.avatarUrl ? false : true;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VJbmZvIiwibG9naW5CdG4iLCJhdmF0YXIiLCJuYW1lIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidXNlckluZm9IYW5kbGVyIiwic2VsZiIsInd4IiwiQmFhUyIsImhhbmRsZVVzZXJJbmZvIiwidGhlbiIsInNldERhdGEiLCJ1c2VyaW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiY29uc29sZSIsImxvZyIsInJlcyIsInRlc3QiLCJldmVudHMiLCJzdG9yYWdlIiwiZ2V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxnQkFBVSxJQUZMO0FBR0xDLGNBQVEscUNBSEg7QUFJTEMsWUFBTTtBQUpELEssUUFPUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0FDLHFCQVRRLDJCQVNRUCxJQVRSLEVBU2M7QUFDcEIsWUFBSVEsT0FBTyxJQUFYO0FBQ0FDLFdBQUdDLElBQUgsQ0FBUUMsY0FBUixDQUF1QlgsSUFBdkIsRUFBNkJZLElBQTdCLENBQ0Usb0JBQVk7QUFDVjtBQUNBSixlQUFLSyxPQUFMLENBQWE7QUFDWFQsa0JBQU1VLFNBQVNDLFFBREo7QUFFWFosb0JBQVFXLFNBQVNFLFNBRk47QUFHWGQsc0JBQVU7QUFIQyxXQUFiO0FBS0QsU0FSSCxFQVNFLGVBQU87QUFDTGUsa0JBQVFDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCQyxHQUFsQjtBQUNELFNBWEg7QUFhRCxPQXhCTztBQXlCUkMsVUF6QlEsa0JBeUJEO0FBQ0xILGdCQUFRQyxHQUFSLENBQVksTUFBWjtBQUNEO0FBM0JPLEssUUE4QlZHLE0sR0FBUyxFOzs7Ozs2QkFFQSxDQUFFOzs7NkJBQ0Y7QUFDUCxVQUFJYixPQUFPLElBQVg7O0FBRUEsVUFBSU0sV0FBV0wsR0FBR0MsSUFBSCxDQUFRWSxPQUFSLENBQWdCQyxHQUFoQixDQUFvQixVQUFwQixDQUFmO0FBQ0E7QUFDQWYsV0FBS0osSUFBTCxHQUFZVSxTQUFTQyxRQUFULElBQXFCLElBQWpDO0FBQ0FQLFdBQUtMLE1BQUwsR0FBY1csU0FBU0UsU0FBVCxJQUFzQixxQ0FBcEM7QUFDQVIsV0FBS04sUUFBTCxHQUFnQlksU0FBU0UsU0FBVCxHQUFxQixLQUFyQixHQUE2QixJQUE3QztBQUNEOzs7O0VBeERnQyxlQUFLUSxJOztrQkFBbkI1QixLIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5L+h5oGvJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICB1c2VJbmZvOiAnJyxcbiAgICBsb2dpbkJ0bjogdHJ1ZSxcbiAgICBhdmF0YXI6ICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMzIzLnBuZycsXG4gICAgbmFtZTogJ+aXtuWFiSdcbiAgfTtcblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8gbGV0dGVyKCkge1xuICAgIC8vICAgY29uc29sZS5sb2coJ2xldHRlcicpO1xuICAgIC8vICAgd3gubmF2aWdhdGVUbyh7XG4gICAgLy8gICAgIHVybDogJy9hcHBsZXRzQS9wYWdlcy90ZXh0L3RleHQnXG4gICAgLy8gICB9KTtcbiAgICAvLyB9LFxuXG4gICAgLy8g55m75b2V5o6I5p2DXG4gICAgdXNlckluZm9IYW5kbGVyKGRhdGEpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHd4LkJhYVMuaGFuZGxlVXNlckluZm8oZGF0YSkudGhlbihcbiAgICAgICAgdXNlcmluZm8gPT4ge1xuICAgICAgICAgIC8vIOiuvue9ruWktOWDj+WSjOWQjeensFxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBuYW1lOiB1c2VyaW5mby5uaWNrTmFtZSxcbiAgICAgICAgICAgIGF2YXRhcjogdXNlcmluZm8uYXZhdGFyVXJsLFxuICAgICAgICAgICAgbG9naW5CdG46IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+Wksei0pScsIHJlcyk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSxcbiAgICB0ZXN0KCkge1xuICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICB9XG4gIH07XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKCkge31cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGxldCB1c2VyaW5mbyA9IHd4LkJhYVMuc3RvcmFnZS5nZXQoJ3VzZXJpbmZvJyk7XG4gICAgLy8g6K6+572u5aS05YOP5ZKM5ZCN56ewXG4gICAgc2VsZi5uYW1lID0gdXNlcmluZm8ubmlja05hbWUgfHwgJ+aXtuWFiSc7XG4gICAgc2VsZi5hdmF0YXIgPSB1c2VyaW5mby5hdmF0YXJVcmwgfHwgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8zMjMucG5nJztcbiAgICBzZWxmLmxvZ2luQnRuID0gdXNlcmluZm8uYXZhdGFyVXJsID8gZmFsc2UgOiB0cnVlO1xuICB9XG59XG4iXX0=