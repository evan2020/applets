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
      // letter() {
      //   console.log(`letter`);
      //   wx.navigateTo({
      //     url: `/appletsA/pages/text/text`
      //   });
      // },


      routerToWeb: function routerToWeb() {
        console.log('letter');
        wx.navigateTo({
          url: '/appletsA/pages/web/hello'
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
    value: function onLoad() {
      // 支付示例代码
      // let params = {
      //   totalCost: 0.1,
      //   merchandiseDescription: '深蓝色秋裤'
      // };
      // wx.BaaS.pay(params).then(
      //   res => {},
      //   err => {
      //     console.log(err);
      //   }
      // );
    }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VJbmZvIiwibG9naW5CdG4iLCJhdmF0YXIiLCJuYW1lIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwicm91dGVyVG9XZWIiLCJjb25zb2xlIiwibG9nIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwidXNlckluZm9IYW5kbGVyIiwic2VsZiIsIkJhYVMiLCJoYW5kbGVVc2VySW5mbyIsInRoZW4iLCJzZXREYXRhIiwidXNlcmluZm8iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsInJlcyIsInRlc3QiLCJldmVudHMiLCJzdG9yYWdlIiwiZ2V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEM7QUFETyxLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxpQkFESztBQUVMQyxnQkFBVSxJQUZMO0FBR0xDLG1EQUhLO0FBSUxDO0FBSkssSyxRQU9QQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBQyxpQkFUUSx5QkFTTTtBQUNaQyxnQkFBUUMsR0FBUjtBQUNBQyxXQUFHQyxVQUFILENBQWM7QUFDWkM7QUFEWSxTQUFkO0FBR0QsT0FkTzs7O0FBZ0JSO0FBQ0FDLHFCQWpCUSwyQkFpQlFiLElBakJSLEVBaUJjO0FBQ3BCLFlBQUljLE9BQU8sSUFBWDtBQUNBSixXQUFHSyxJQUFILENBQVFDLGNBQVIsQ0FBdUJoQixJQUF2QixFQUE2QmlCLElBQTdCLENBQ0Usb0JBQVk7QUFDVjtBQUNBSCxlQUFLSSxPQUFMLENBQWE7QUFDWGQsa0JBQU1lLFNBQVNDLFFBREo7QUFFWGpCLG9CQUFRZ0IsU0FBU0UsU0FGTjtBQUdYbkIsc0JBQVU7QUFIQyxXQUFiO0FBS0QsU0FSSCxFQVNFLGVBQU87QUFDTE0sa0JBQVFDLEdBQVIsaUJBQWtCYSxHQUFsQjtBQUNELFNBWEg7QUFhRCxPQWhDTztBQWlDUkMsVUFqQ1Esa0JBaUNEO0FBQ0xmLGdCQUFRQyxHQUFSO0FBQ0Q7QUFuQ08sSyxRQXNDVmUsTSxHQUFTLEU7Ozs7OzZCQUVBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7NkJBQ1E7QUFDUCxVQUFJVixPQUFPLElBQVg7O0FBRUEsVUFBSUssV0FBV1QsR0FBR0ssSUFBSCxDQUFRVSxPQUFSLENBQWdCQyxHQUFoQixZQUFmO0FBQ0E7QUFDQVosV0FBS1YsSUFBTCxHQUFZZSxTQUFTQyxRQUFULGtCQUFaO0FBQ0FOLFdBQUtYLE1BQUwsR0FBY2dCLFNBQVNFLFNBQVQseUNBQWQ7QUFDQVAsV0FBS1osUUFBTCxHQUFnQmlCLFNBQVNFLFNBQVQsR0FBcUIsS0FBckIsR0FBNkIsSUFBN0M7QUFDRDs7OztFQTVFZ0MsZUFBS00sSTs7a0JBQW5CL0IsSyIsImZpbGUiOiJpbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogYOS/oeaBr2BcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgdXNlSW5mbzogYGAsXG4gICAgbG9naW5CdG46IHRydWUsXG4gICAgYXZhdGFyOiBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzMyMy5wbmdgLFxuICAgIG5hbWU6IGDml7blhYlgXG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIC8vIGxldHRlcigpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGBsZXR0ZXJgKTtcbiAgICAvLyAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgIC8vICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvdGV4dC90ZXh0YFxuICAgIC8vICAgfSk7XG4gICAgLy8gfSxcblxuXG4gICAgcm91dGVyVG9XZWIoKSB7XG4gICAgICBjb25zb2xlLmxvZyhgbGV0dGVyYCk7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNBL3BhZ2VzL3dlYi9oZWxsb2BcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyDnmbvlvZXmjojmnYNcbiAgICB1c2VySW5mb0hhbmRsZXIoZGF0YSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgd3guQmFhUy5oYW5kbGVVc2VySW5mbyhkYXRhKS50aGVuKFxuICAgICAgICB1c2VyaW5mbyA9PiB7XG4gICAgICAgICAgLy8g6K6+572u5aS05YOP5ZKM5ZCN56ewXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIG5hbWU6IHVzZXJpbmZvLm5pY2tOYW1lLFxuICAgICAgICAgICAgYXZhdGFyOiB1c2VyaW5mby5hdmF0YXJVcmwsXG4gICAgICAgICAgICBsb2dpbkJ0bjogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhg5aSx6LSlYCwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LFxuICAgIHRlc3QoKSB7XG4gICAgICBjb25zb2xlLmxvZyhgdGVzdGApO1xuICAgIH1cbiAgfTtcblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQoKSB7XG4gICAgLy8g5pSv5LuY56S65L6L5Luj56CBXG4gICAgLy8gbGV0IHBhcmFtcyA9IHtcbiAgICAvLyAgIHRvdGFsQ29zdDogMC4xLFxuICAgIC8vICAgbWVyY2hhbmRpc2VEZXNjcmlwdGlvbjogJ+a3seiTneiJsueni+ijpCdcbiAgICAvLyB9O1xuICAgIC8vIHd4LkJhYVMucGF5KHBhcmFtcykudGhlbihcbiAgICAvLyAgIHJlcyA9PiB7fSxcbiAgICAvLyAgIGVyciA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgLy8gICB9XG4gICAgLy8gKTtcbiAgfVxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IHVzZXJpbmZvID0gd3guQmFhUy5zdG9yYWdlLmdldChgdXNlcmluZm9gKTtcbiAgICAvLyDorr7nva7lpLTlg4/lkozlkI3np7BcbiAgICBzZWxmLm5hbWUgPSB1c2VyaW5mby5uaWNrTmFtZSB8fCBg5pe25YWJYDtcbiAgICBzZWxmLmF2YXRhciA9IHVzZXJpbmZvLmF2YXRhclVybCB8fCBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzMyMy5wbmdgO1xuICAgIHNlbGYubG9naW5CdG4gPSB1c2VyaW5mby5hdmF0YXJVcmwgPyBmYWxzZSA6IHRydWU7XG4gIH1cbn1cbiJdfQ==