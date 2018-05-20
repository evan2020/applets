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
      navigationBarTitleText: '\u4FE1\u606F'
    }, _this.components = {}, _this.data = {
      useInfo: '',
      loginBtn: true,
      avatar: 'https://om83cysj8.qnssl.com/323.png',
      name: '\u65F6\u5149'
    }, _this.computed = {}, _this.methods = {
      routerToAbout: function routerToAbout() {
        var url = 'https://shalou.smallzhiyun.com/about/about.html';
        wx.navigateTo({
          url: '/appletsA/pages/web/hello?url=' + url
        });
      },
      routerToWeb: function routerToWeb() {
        var url = 'https://shalou.smallzhiyun.com/lottery/lottery.html';
        wx.navigateTo({
          url: '/appletsA/pages/web/hello?url=' + url
        });
      },
      routerToPrize: function routerToPrize() {
        var url = 'https://shalou.smallzhiyun.com/prize/index.html';

        wx.navigateTo({
          url: '/appletsB/pages/text/text?url=' + url
        });
      },


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
          console.log('\u5931\u8D25', res);
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
      self.name = userinfo.nickName || '\u65F6\u5149';
      self.avatar = userinfo.avatarUrl || 'https://om83cysj8.qnssl.com/323.png';
      self.loginBtn = userinfo.avatarUrl ? false : true;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VJbmZvIiwibG9naW5CdG4iLCJhdmF0YXIiLCJuYW1lIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwicm91dGVyVG9BYm91dCIsInVybCIsInd4IiwibmF2aWdhdGVUbyIsInJvdXRlclRvV2ViIiwicm91dGVyVG9Qcml6ZSIsInVzZXJJbmZvSGFuZGxlciIsInNlbGYiLCJCYWFTIiwiaGFuZGxlVXNlckluZm8iLCJ0aGVuIiwic2V0RGF0YSIsInVzZXJpbmZvIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJjb25zb2xlIiwibG9nIiwicmVzIiwidGVzdCIsImV2ZW50cyIsInN0b3JhZ2UiLCJnZXQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQztBQURPLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGlCQURLO0FBRUxDLGdCQUFVLElBRkw7QUFHTEMsbURBSEs7QUFJTEM7QUFKSyxLLFFBT1BDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUVSQyxtQkFGUSwyQkFFUTtBQUNkLFlBQUlDLHVEQUFKO0FBQ0FDLFdBQUdDLFVBQUgsQ0FBYztBQUNaRixrREFBc0NBO0FBRDFCLFNBQWQ7QUFHRCxPQVBPO0FBU1JHLGlCQVRRLHlCQVNNO0FBQ1osWUFBSUgsMkRBQUo7QUFDQUMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGLGtEQUFzQ0E7QUFEMUIsU0FBZDtBQUdELE9BZE87QUFnQlJJLG1CQWhCUSwyQkFnQlE7QUFDZCxZQUFJSix1REFBSjs7QUFFQUMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGLGtEQUFzQ0E7QUFEMUIsU0FBZDtBQUdELE9BdEJPOzs7QUF3QlI7QUFDQUsscUJBekJRLDJCQXlCUWIsSUF6QlIsRUF5QmM7QUFDcEIsWUFBSWMsT0FBTyxJQUFYO0FBQ0FMLFdBQUdNLElBQUgsQ0FBUUMsY0FBUixDQUF1QmhCLElBQXZCLEVBQTZCaUIsSUFBN0IsQ0FDRSxvQkFBWTtBQUNWO0FBQ0FILGVBQUtJLE9BQUwsQ0FBYTtBQUNYZCxrQkFBTWUsU0FBU0MsUUFESjtBQUVYakIsb0JBQVFnQixTQUFTRSxTQUZOO0FBR1huQixzQkFBVTtBQUhDLFdBQWI7QUFLRCxTQVJILEVBU0UsZUFBTztBQUNMb0Isa0JBQVFDLEdBQVIsaUJBQWtCQyxHQUFsQjtBQUNELFNBWEg7QUFhRCxPQXhDTztBQXlDUkMsVUF6Q1Esa0JBeUNEO0FBQ0xILGdCQUFRQyxHQUFSO0FBQ0Q7QUEzQ08sSyxRQThDVkcsTSxHQUFTLEU7Ozs7OzZCQUVBLENBRVI7Ozs2QkFDUTtBQUNQLFVBQUlaLE9BQU8sSUFBWDs7QUFFQSxVQUFJSyxXQUFXVixHQUFHTSxJQUFILENBQVFZLE9BQVIsQ0FBZ0JDLEdBQWhCLFlBQWY7QUFDQTtBQUNBZCxXQUFLVixJQUFMLEdBQVllLFNBQVNDLFFBQVQsa0JBQVo7QUFDQU4sV0FBS1gsTUFBTCxHQUFjZ0IsU0FBU0UsU0FBVCx5Q0FBZDtBQUNBUCxXQUFLWixRQUFMLEdBQWdCaUIsU0FBU0UsU0FBVCxHQUFxQixLQUFyQixHQUE2QixJQUE3QztBQUdEOzs7O0VBNUVnQyxlQUFLUSxJOztrQkFBbkJqQyxLIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBg5L+h5oGvYFxuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICB1c2VJbmZvOiBgYCxcbiAgICBsb2dpbkJ0bjogdHJ1ZSxcbiAgICBhdmF0YXI6IGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMzIzLnBuZ2AsXG4gICAgbmFtZTogYOaXtuWFiWBcbiAgfTtcblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG5cbiAgICByb3V0ZXJUb0Fib3V0KCkge1xuICAgICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vYWJvdXQvYWJvdXQuaHRtbGA7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNBL3BhZ2VzL3dlYi9oZWxsbz91cmw9JHt1cmx9YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHJvdXRlclRvV2ViKCkge1xuICAgICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vbG90dGVyeS9sb3R0ZXJ5Lmh0bWxgO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy93ZWIvaGVsbG8/dXJsPSR7dXJsfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICByb3V0ZXJUb1ByaXplKCkge1xuICAgICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vcHJpemUvaW5kZXguaHRtbGA7XG5cbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0IvcGFnZXMvdGV4dC90ZXh0P3VybD0ke3VybH1gXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8g55m75b2V5o6I5p2DXG4gICAgdXNlckluZm9IYW5kbGVyKGRhdGEpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHd4LkJhYVMuaGFuZGxlVXNlckluZm8oZGF0YSkudGhlbihcbiAgICAgICAgdXNlcmluZm8gPT4ge1xuICAgICAgICAgIC8vIOiuvue9ruWktOWDj+WSjOWQjeensFxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBuYW1lOiB1c2VyaW5mby5uaWNrTmFtZSxcbiAgICAgICAgICAgIGF2YXRhcjogdXNlcmluZm8uYXZhdGFyVXJsLFxuICAgICAgICAgICAgbG9naW5CdG46IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYOWksei0pWAsIHJlcyk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSxcbiAgICB0ZXN0KCkge1xuICAgICAgY29uc29sZS5sb2coYHRlc3RgKTtcbiAgICB9XG4gIH07XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKCkge1xuICAgXG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGxldCB1c2VyaW5mbyA9IHd4LkJhYVMuc3RvcmFnZS5nZXQoYHVzZXJpbmZvYCk7XG4gICAgLy8g6K6+572u5aS05YOP5ZKM5ZCN56ewXG4gICAgc2VsZi5uYW1lID0gdXNlcmluZm8ubmlja05hbWUgfHwgYOaXtuWFiWA7XG4gICAgc2VsZi5hdmF0YXIgPSB1c2VyaW5mby5hdmF0YXJVcmwgfHwgYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8zMjMucG5nYDtcbiAgICBzZWxmLmxvZ2luQnRuID0gdXNlcmluZm8uYXZhdGFyVXJsID8gZmFsc2UgOiB0cnVlO1xuXG4gIFxuICB9XG59XG4iXX0=