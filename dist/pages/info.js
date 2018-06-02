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
      // 跳转到关于我们页面
      routerToAbout: function routerToAbout() {
        var url = 'https://shalou.smallzhiyun.com/about/about.html';
        wx.navigateTo({
          url: '/appletsA/pages/web/hello?url=' + url
        });
      },


      // 跳转到web页面（幸运抽奖）
      routerToWeb: function routerToWeb() {
        var url = 'https://shalou.smallzhiyun.com/lottery/lottery.html';
        wx.navigateTo({
          url: '/appletsA/pages/web/hello?url=' + url
        });
      },


      // 跳转编辑留言页面（点击刮刮乐）
      routerToPrize: function routerToPrize() {
        var url = 'https://shalou.smallzhiyun.com/prize/index.html';
        var type = 'prize';
        wx.navigateTo({
          url: '/appletsB/pages/text/text?url=' + url + '&type=' + type
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VJbmZvIiwibG9naW5CdG4iLCJhdmF0YXIiLCJuYW1lIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwicm91dGVyVG9BYm91dCIsInVybCIsInd4IiwibmF2aWdhdGVUbyIsInJvdXRlclRvV2ViIiwicm91dGVyVG9Qcml6ZSIsInR5cGUiLCJ1c2VySW5mb0hhbmRsZXIiLCJzZWxmIiwiQmFhUyIsImhhbmRsZVVzZXJJbmZvIiwidGhlbiIsInNldERhdGEiLCJ1c2VyaW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiY29uc29sZSIsImxvZyIsInJlcyIsInRlc3QiLCJldmVudHMiLCJzdG9yYWdlIiwiZ2V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEM7QUFETyxLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxpQkFESztBQUVMQyxnQkFBVSxJQUZMO0FBR0xDLG1EQUhLO0FBSUxDO0FBSkssSyxRQU9QQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUjtBQUNBQyxtQkFGUSwyQkFFUTtBQUNkLFlBQUlDLHVEQUFKO0FBQ0FDLFdBQUdDLFVBQUgsQ0FBYztBQUNaRixrREFBc0NBO0FBRDFCLFNBQWQ7QUFHRCxPQVBPOzs7QUFTUjtBQUNBRyxpQkFWUSx5QkFVTTtBQUNaLFlBQUlILDJEQUFKO0FBQ0FDLFdBQUdDLFVBQUgsQ0FBYztBQUNaRixrREFBc0NBO0FBRDFCLFNBQWQ7QUFHRCxPQWZPOzs7QUFpQlI7QUFDQUksbUJBbEJRLDJCQWtCUTtBQUNkLFlBQUlKLHVEQUFKO0FBQ0EsWUFBSUssY0FBSjtBQUNBSixXQUFHQyxVQUFILENBQWM7QUFDWkYsa0RBQXNDQSxHQUF0QyxjQUFrREs7QUFEdEMsU0FBZDtBQUdELE9BeEJPOzs7QUEwQlI7QUFDQUMscUJBM0JRLDJCQTJCUWQsSUEzQlIsRUEyQmM7QUFDcEIsWUFBSWUsT0FBTyxJQUFYO0FBQ0FOLFdBQUdPLElBQUgsQ0FBUUMsY0FBUixDQUF1QmpCLElBQXZCLEVBQTZCa0IsSUFBN0IsQ0FDRSxvQkFBWTtBQUNWO0FBQ0FILGVBQUtJLE9BQUwsQ0FBYTtBQUNYZixrQkFBTWdCLFNBQVNDLFFBREo7QUFFWGxCLG9CQUFRaUIsU0FBU0UsU0FGTjtBQUdYcEIsc0JBQVU7QUFIQyxXQUFiO0FBS0QsU0FSSCxFQVNFLGVBQU87QUFDTHFCLGtCQUFRQyxHQUFSLGlCQUFrQkMsR0FBbEI7QUFDRCxTQVhIO0FBYUQsT0ExQ087QUEyQ1JDLFVBM0NRLGtCQTJDRDtBQUNMSCxnQkFBUUMsR0FBUjtBQUNEO0FBN0NPLEssUUFnRFZHLE0sR0FBUyxFOzs7Ozs2QkFFQSxDQUFFOzs7NkJBQ0Y7QUFDUCxVQUFJWixPQUFPLElBQVg7O0FBRUEsVUFBSUssV0FBV1gsR0FBR08sSUFBSCxDQUFRWSxPQUFSLENBQWdCQyxHQUFoQixZQUFmO0FBQ0E7QUFDQWQsV0FBS1gsSUFBTCxHQUFZZ0IsU0FBU0MsUUFBVCxrQkFBWjtBQUNBTixXQUFLWixNQUFMLEdBQWNpQixTQUFTRSxTQUFULHlDQUFkO0FBQ0FQLFdBQUtiLFFBQUwsR0FBZ0JrQixTQUFTRSxTQUFULEdBQXFCLEtBQXJCLEdBQTZCLElBQTdDO0FBQ0Q7Ozs7RUExRWdDLGVBQUtRLEk7O2tCQUFuQmxDLEsiLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IGDkv6Hmga9gXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIHVzZUluZm86IGBgLFxuICAgIGxvZ2luQnRuOiB0cnVlLFxuICAgIGF2YXRhcjogYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8zMjMucG5nYCxcbiAgICBuYW1lOiBg5pe25YWJYFxuICB9O1xuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDot7PovazliLDlhbPkuo7miJHku6zpobXpnaJcbiAgICByb3V0ZXJUb0Fib3V0KCkge1xuICAgICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vYWJvdXQvYWJvdXQuaHRtbGA7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNBL3BhZ2VzL3dlYi9oZWxsbz91cmw9JHt1cmx9YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIOi3s+i9rOWIsHdlYumhtemdou+8iOW5uOi/kOaKveWllu+8iVxuICAgIHJvdXRlclRvV2ViKCkge1xuICAgICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vbG90dGVyeS9sb3R0ZXJ5Lmh0bWxgO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy93ZWIvaGVsbG8/dXJsPSR7dXJsfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyDot7PovaznvJbovpHnlZnoqIDpobXpnaLvvIjngrnlh7vliK7liK7kuZDvvIlcbiAgICByb3V0ZXJUb1ByaXplKCkge1xuICAgICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vcHJpemUvaW5kZXguaHRtbGA7XG4gICAgICBsZXQgdHlwZT1gcHJpemVgXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNCL3BhZ2VzL3RleHQvdGV4dD91cmw9JHt1cmx9JnR5cGU9JHt0eXBlfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyDnmbvlvZXmjojmnYNcbiAgICB1c2VySW5mb0hhbmRsZXIoZGF0YSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgd3guQmFhUy5oYW5kbGVVc2VySW5mbyhkYXRhKS50aGVuKFxuICAgICAgICB1c2VyaW5mbyA9PiB7XG4gICAgICAgICAgLy8g6K6+572u5aS05YOP5ZKM5ZCN56ewXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIG5hbWU6IHVzZXJpbmZvLm5pY2tOYW1lLFxuICAgICAgICAgICAgYXZhdGFyOiB1c2VyaW5mby5hdmF0YXJVcmwsXG4gICAgICAgICAgICBsb2dpbkJ0bjogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhg5aSx6LSlYCwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LFxuICAgIHRlc3QoKSB7XG4gICAgICBjb25zb2xlLmxvZyhgdGVzdGApO1xuICAgIH1cbiAgfTtcblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQoKSB7fVxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IHVzZXJpbmZvID0gd3guQmFhUy5zdG9yYWdlLmdldChgdXNlcmluZm9gKTtcbiAgICAvLyDorr7nva7lpLTlg4/lkozlkI3np7BcbiAgICBzZWxmLm5hbWUgPSB1c2VyaW5mby5uaWNrTmFtZSB8fCBg5pe25YWJYDtcbiAgICBzZWxmLmF2YXRhciA9IHVzZXJpbmZvLmF2YXRhclVybCB8fCBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzMyMy5wbmdgO1xuICAgIHNlbGYubG9naW5CdG4gPSB1c2VyaW5mby5hdmF0YXJVcmwgPyBmYWxzZSA6IHRydWU7XG4gIH1cbn1cbiJdfQ==