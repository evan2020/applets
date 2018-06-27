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


      // 跳转到星座图片页面
      routerConstellation: function routerConstellation() {
        wx.navigateTo({
          url: '/appletsA/pages/stars/index'
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
        var router = '/appletsA/pages/web/hello';
        wx.navigateTo({
          url: '/appletsB/pages/text/text?url=' + url + '&router=' + router
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VJbmZvIiwibG9naW5CdG4iLCJhdmF0YXIiLCJuYW1lIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwicm91dGVyVG9BYm91dCIsInVybCIsInd4IiwibmF2aWdhdGVUbyIsInJvdXRlckNvbnN0ZWxsYXRpb24iLCJyb3V0ZXJUb1dlYiIsInJvdXRlclRvUHJpemUiLCJyb3V0ZXIiLCJ1c2VySW5mb0hhbmRsZXIiLCJzZWxmIiwiQmFhUyIsImhhbmRsZVVzZXJJbmZvIiwidGhlbiIsInNldERhdGEiLCJ1c2VyaW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiY29uc29sZSIsImxvZyIsInJlcyIsInRlc3QiLCJldmVudHMiLCJzdG9yYWdlIiwiZ2V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEM7QUFETyxLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxpQkFESztBQUVMQyxnQkFBVSxJQUZMO0FBR0xDLG1EQUhLO0FBSUxDO0FBSkssSyxRQU9QQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUjtBQUNBQyxtQkFGUSwyQkFFUTtBQUNkLFlBQUlDLHVEQUFKO0FBQ0FDLFdBQUdDLFVBQUgsQ0FBYztBQUNaRixrREFBc0NBO0FBRDFCLFNBQWQ7QUFHRCxPQVBPOzs7QUFTUjtBQUNBRyx5QkFWUSxpQ0FVYTtBQUNuQkYsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGO0FBRFksU0FBZDtBQUdELE9BZE87OztBQWdCUjtBQUNBSSxpQkFqQlEseUJBaUJNO0FBQ1osWUFBSUosMkRBQUo7QUFDQUMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGLGtEQUFzQ0E7QUFEMUIsU0FBZDtBQUdELE9BdEJPOzs7QUF3QlI7QUFDQUssbUJBekJRLDJCQXlCUTtBQUNkLFlBQUlMLHVEQUFKO0FBQ0EsWUFBSU0sb0NBQUo7QUFDQUwsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGLGtEQUFzQ0EsR0FBdEMsZ0JBQW9ETTtBQUR4QyxTQUFkO0FBR0QsT0EvQk87OztBQWlDUjtBQUNBQyxxQkFsQ1EsMkJBa0NRZixJQWxDUixFQWtDYztBQUNwQixZQUFJZ0IsT0FBTyxJQUFYO0FBQ0FQLFdBQUdRLElBQUgsQ0FBUUMsY0FBUixDQUF1QmxCLElBQXZCLEVBQTZCbUIsSUFBN0IsQ0FDRSxvQkFBWTtBQUNWO0FBQ0FILGVBQUtJLE9BQUwsQ0FBYTtBQUNYaEIsa0JBQU1pQixTQUFTQyxRQURKO0FBRVhuQixvQkFBUWtCLFNBQVNFLFNBRk47QUFHWHJCLHNCQUFVO0FBSEMsV0FBYjtBQUtELFNBUkgsRUFTRSxlQUFPO0FBQ0xzQixrQkFBUUMsR0FBUixpQkFBa0JDLEdBQWxCO0FBQ0QsU0FYSDtBQWFELE9BakRPO0FBa0RSQyxVQWxEUSxrQkFrREQ7QUFDTEgsZ0JBQVFDLEdBQVI7QUFDRDtBQXBETyxLLFFBdURWRyxNLEdBQVMsRTs7Ozs7NkJBRUEsQ0FBRTs7OzZCQUNGO0FBQ1AsVUFBSVosT0FBTyxJQUFYOztBQUVBLFVBQUlLLFdBQVdaLEdBQUdRLElBQUgsQ0FBUVksT0FBUixDQUFnQkMsR0FBaEIsWUFBZjtBQUNBO0FBQ0FkLFdBQUtaLElBQUwsR0FBWWlCLFNBQVNDLFFBQVQsa0JBQVo7QUFDQU4sV0FBS2IsTUFBTCxHQUFja0IsU0FBU0UsU0FBVCx5Q0FBZDtBQUNBUCxXQUFLZCxRQUFMLEdBQWdCbUIsU0FBU0UsU0FBVCxHQUFxQixLQUFyQixHQUE2QixJQUE3QztBQUNEOzs7O0VBakZnQyxlQUFLUSxJOztrQkFBbkJuQyxLIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBg5L+h5oGvYFxuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICB1c2VJbmZvOiBgYCxcbiAgICBsb2dpbkJ0bjogdHJ1ZSxcbiAgICBhdmF0YXI6IGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMzIzLnBuZ2AsXG4gICAgbmFtZTogYOaXtuWFiWAsXG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIC8vIOi3s+i9rOWIsOWFs+S6juaIkeS7rOmhtemdolxuICAgIHJvdXRlclRvQWJvdXQoKSB7XG4gICAgICBsZXQgdXJsID0gYGh0dHBzOi8vc2hhbG91LnNtYWxsemhpeXVuLmNvbS9hYm91dC9hYm91dC5odG1sYDtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvd2ViL2hlbGxvP3VybD0ke3VybH1gXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8g6Lez6L2s5Yiw5pif5bqn5Zu+54mH6aG16Z2iXG4gICAgcm91dGVyQ29uc3RlbGxhdGlvbigpe1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9zdGFycy9pbmRleGBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyDot7PovazliLB3ZWLpobXpnaLvvIjlubjov5Dmir3lpZbvvIlcbiAgICByb3V0ZXJUb1dlYigpIHtcbiAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9zaGFsb3Uuc21hbGx6aGl5dW4uY29tL2xvdHRlcnkvbG90dGVyeS5odG1sYDtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvd2ViL2hlbGxvP3VybD0ke3VybH1gXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8g6Lez6L2s57yW6L6R55WZ6KiA6aG16Z2i77yI54K55Ye75Yiu5Yiu5LmQ77yJXG4gICAgcm91dGVyVG9Qcml6ZSgpIHtcbiAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9zaGFsb3Uuc21hbGx6aGl5dW4uY29tL3ByaXplL2luZGV4Lmh0bWxgO1xuICAgICAgbGV0IHJvdXRlciA9IGAvYXBwbGV0c0EvcGFnZXMvd2ViL2hlbGxvYDtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0IvcGFnZXMvdGV4dC90ZXh0P3VybD0ke3VybH0mcm91dGVyPSR7cm91dGVyfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyDnmbvlvZXmjojmnYNcbiAgICB1c2VySW5mb0hhbmRsZXIoZGF0YSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgd3guQmFhUy5oYW5kbGVVc2VySW5mbyhkYXRhKS50aGVuKFxuICAgICAgICB1c2VyaW5mbyA9PiB7XG4gICAgICAgICAgLy8g6K6+572u5aS05YOP5ZKM5ZCN56ewXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIG5hbWU6IHVzZXJpbmZvLm5pY2tOYW1lLFxuICAgICAgICAgICAgYXZhdGFyOiB1c2VyaW5mby5hdmF0YXJVcmwsXG4gICAgICAgICAgICBsb2dpbkJ0bjogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhg5aSx6LSlYCwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LFxuICAgIHRlc3QoKSB7XG4gICAgICBjb25zb2xlLmxvZyhgdGVzdGApO1xuICAgIH1cbiAgfTtcblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQoKSB7fVxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IHVzZXJpbmZvID0gd3guQmFhUy5zdG9yYWdlLmdldChgdXNlcmluZm9gKTtcbiAgICAvLyDorr7nva7lpLTlg4/lkozlkI3np7BcbiAgICBzZWxmLm5hbWUgPSB1c2VyaW5mby5uaWNrTmFtZSB8fCBg5pe25YWJYDtcbiAgICBzZWxmLmF2YXRhciA9IHVzZXJpbmZvLmF2YXRhclVybCB8fCBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzMyMy5wbmdgO1xuICAgIHNlbGYubG9naW5CdG4gPSB1c2VyaW5mby5hdmF0YXJVcmwgPyBmYWxzZSA6IHRydWU7XG4gIH1cbn1cbiJdfQ==