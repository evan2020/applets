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
        var url = 'https://shalou.smallzhiyun.com/lottery/lottery.html';
        wx.navigateTo({
          url: '/appletsA/pages/web/hello?url=' + url
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

      // 更新 tableID 为 36571 的数据表中 recordID 为 5afb2d4d65c0ad65354c6f63 的数据项的 cardImgArr 字段
      // let tableID = 36571;
      // let recordID = '5afb2d4d65c0ad65354c6f63';

      // let Product = new wx.BaaS.TableObject(tableID);
      // let product = Product.getWithoutData(recordID);

      // product.set('cardImgArr', [
      //   `https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D400/sign=721f202b30292df597c3ad158c305ce2/6609c93d70cf3bc779cc28e8db00baa1cc112ae2.jpg`,
      //   `https://om83cysj8.qnssl.com/%E7%88%B6%E4%BA%B2%E8%8A%8211_Fotor.jpg`,
      //   `https://om83cysj8.qnssl.com/33809_2014021217065921537600.jpg`,
      //   `https://om83cysj8.qnssl.com/121F2NC-0.jpg`,
      //   `https://om83cysj8.qnssl.com/tooopen_sy_162661186586.jpg`,
      //   `https://om83cysj8.qnssl.com/71244679da9054cc53ee98bb54a872b62.jpg`
      // ]);
      // product.set('imgUrlArr', [
      //   `https://om83cysj8.qnssl.com/2-1FG013255T53.jpg`,
      //   `https://om83cysj8.qnssl.com/i-love-you-virus.jpg`,
      //   `https://om83cysj8.qnssl.com/maxresdefault.jpg`
      // ]);
      // product.update().then(
      //   res => {
      //     console.log(res)
      //   },
      //   err => {
      //     console.log(err)
      //   }
      // );
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VJbmZvIiwibG9naW5CdG4iLCJhdmF0YXIiLCJuYW1lIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwicm91dGVyVG9XZWIiLCJ1cmwiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1c2VySW5mb0hhbmRsZXIiLCJzZWxmIiwiQmFhUyIsImhhbmRsZVVzZXJJbmZvIiwidGhlbiIsInNldERhdGEiLCJ1c2VyaW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiY29uc29sZSIsImxvZyIsInJlcyIsInRlc3QiLCJldmVudHMiLCJzdG9yYWdlIiwiZ2V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEM7QUFETyxLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxpQkFESztBQUVMQyxnQkFBVSxJQUZMO0FBR0xDLG1EQUhLO0FBSUxDO0FBSkssSyxRQU9QQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLGlCQVJRLHlCQVFNO0FBQ1osWUFBSUMsMkRBQUo7QUFDQUMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGLGtEQUFzQ0E7QUFEMUIsU0FBZDtBQUdELE9BYk87OztBQWVSO0FBQ0FHLHFCQWhCUSwyQkFnQlFYLElBaEJSLEVBZ0JjO0FBQ3BCLFlBQUlZLE9BQU8sSUFBWDtBQUNBSCxXQUFHSSxJQUFILENBQVFDLGNBQVIsQ0FBdUJkLElBQXZCLEVBQTZCZSxJQUE3QixDQUNFLG9CQUFZO0FBQ1Y7QUFDQUgsZUFBS0ksT0FBTCxDQUFhO0FBQ1haLGtCQUFNYSxTQUFTQyxRQURKO0FBRVhmLG9CQUFRYyxTQUFTRSxTQUZOO0FBR1hqQixzQkFBVTtBQUhDLFdBQWI7QUFLRCxTQVJILEVBU0UsZUFBTztBQUNMa0Isa0JBQVFDLEdBQVIsaUJBQWtCQyxHQUFsQjtBQUNELFNBWEg7QUFhRCxPQS9CTztBQWdDUkMsVUFoQ1Esa0JBZ0NEO0FBQ0xILGdCQUFRQyxHQUFSO0FBQ0Q7QUFsQ08sSyxRQXFDVkcsTSxHQUFTLEU7Ozs7OzZCQUVBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7NkJBQ1E7QUFDUCxVQUFJWixPQUFPLElBQVg7O0FBRUEsVUFBSUssV0FBV1IsR0FBR0ksSUFBSCxDQUFRWSxPQUFSLENBQWdCQyxHQUFoQixZQUFmO0FBQ0E7QUFDQWQsV0FBS1IsSUFBTCxHQUFZYSxTQUFTQyxRQUFULGtCQUFaO0FBQ0FOLFdBQUtULE1BQUwsR0FBY2MsU0FBU0UsU0FBVCx5Q0FBZDtBQUNBUCxXQUFLVixRQUFMLEdBQWdCZSxTQUFTRSxTQUFULEdBQXFCLEtBQXJCLEdBQTZCLElBQTdDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7O0VBeEdnQyxlQUFLUSxJOztrQkFBbkIvQixLIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBg5L+h5oGvYFxuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICB1c2VJbmZvOiBgYCxcbiAgICBsb2dpbkJ0bjogdHJ1ZSxcbiAgICBhdmF0YXI6IGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMzIzLnBuZ2AsXG4gICAgbmFtZTogYOaXtuWFiWBcbiAgfTtcblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8gbGV0dGVyKCkge1xuICAgIC8vICAgY29uc29sZS5sb2coYGxldHRlcmApO1xuICAgIC8vICAgd3gubmF2aWdhdGVUbyh7XG4gICAgLy8gICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy90ZXh0L3RleHRgXG4gICAgLy8gICB9KTtcbiAgICAvLyB9LFxuXG4gICAgcm91dGVyVG9XZWIoKSB7XG4gICAgICBsZXQgdXJsPWBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vbG90dGVyeS9sb3R0ZXJ5Lmh0bWxgO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy93ZWIvaGVsbG8/dXJsPSR7dXJsfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyDnmbvlvZXmjojmnYNcbiAgICB1c2VySW5mb0hhbmRsZXIoZGF0YSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgd3guQmFhUy5oYW5kbGVVc2VySW5mbyhkYXRhKS50aGVuKFxuICAgICAgICB1c2VyaW5mbyA9PiB7XG4gICAgICAgICAgLy8g6K6+572u5aS05YOP5ZKM5ZCN56ewXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIG5hbWU6IHVzZXJpbmZvLm5pY2tOYW1lLFxuICAgICAgICAgICAgYXZhdGFyOiB1c2VyaW5mby5hdmF0YXJVcmwsXG4gICAgICAgICAgICBsb2dpbkJ0bjogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhg5aSx6LSlYCwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LFxuICAgIHRlc3QoKSB7XG4gICAgICBjb25zb2xlLmxvZyhgdGVzdGApO1xuICAgIH1cbiAgfTtcblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQoKSB7XG4gICAgLy8g5pSv5LuY56S65L6L5Luj56CBXG4gICAgLy8gbGV0IHBhcmFtcyA9IHtcbiAgICAvLyAgIHRvdGFsQ29zdDogMC4xLFxuICAgIC8vICAgbWVyY2hhbmRpc2VEZXNjcmlwdGlvbjogJ+a3seiTneiJsueni+ijpCdcbiAgICAvLyB9O1xuICAgIC8vIHd4LkJhYVMucGF5KHBhcmFtcykudGhlbihcbiAgICAvLyAgIHJlcyA9PiB7fSxcbiAgICAvLyAgIGVyciA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgLy8gICB9XG4gICAgLy8gKTtcbiAgfVxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IHVzZXJpbmZvID0gd3guQmFhUy5zdG9yYWdlLmdldChgdXNlcmluZm9gKTtcbiAgICAvLyDorr7nva7lpLTlg4/lkozlkI3np7BcbiAgICBzZWxmLm5hbWUgPSB1c2VyaW5mby5uaWNrTmFtZSB8fCBg5pe25YWJYDtcbiAgICBzZWxmLmF2YXRhciA9IHVzZXJpbmZvLmF2YXRhclVybCB8fCBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzMyMy5wbmdgO1xuICAgIHNlbGYubG9naW5CdG4gPSB1c2VyaW5mby5hdmF0YXJVcmwgPyBmYWxzZSA6IHRydWU7XG5cbiAgICAvLyDmm7TmlrAgdGFibGVJRCDkuLogMzY1NzEg55qE5pWw5o2u6KGo5LitIHJlY29yZElEIOS4uiA1YWZiMmQ0ZDY1YzBhZDY1MzU0YzZmNjMg55qE5pWw5o2u6aG555qEIGNhcmRJbWdBcnIg5a2X5q61XG4gICAgLy8gbGV0IHRhYmxlSUQgPSAzNjU3MTtcbiAgICAvLyBsZXQgcmVjb3JkSUQgPSAnNWFmYjJkNGQ2NWMwYWQ2NTM1NGM2ZjYzJztcblxuICAgIC8vIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG4gICAgLy8gbGV0IHByb2R1Y3QgPSBQcm9kdWN0LmdldFdpdGhvdXREYXRhKHJlY29yZElEKTtcblxuICAgIC8vIHByb2R1Y3Quc2V0KCdjYXJkSW1nQXJyJywgW1xuICAgIC8vICAgYGh0dHBzOi8vZ3NzMi5iZHN0YXRpYy5jb20vLWZvM2RTYWdfeEk0a2hHa3BvV0sxSEY2aGh5L2JhaWtlL3clM0Q0MDAvc2lnbj03MjFmMjAyYjMwMjkyZGY1OTdjM2FkMTU4YzMwNWNlMi82NjA5YzkzZDcwY2YzYmM3NzljYzI4ZThkYjAwYmFhMWNjMTEyYWUyLmpwZ2AsXG4gICAgLy8gICBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLyVFNyU4OCVCNiVFNCVCQSVCMiVFOCU4QSU4MjExX0ZvdG9yLmpwZ2AsXG4gICAgLy8gICBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzMzODA5XzIwMTQwMjEyMTcwNjU5MjE1Mzc2MDAuanBnYCxcbiAgICAvLyAgIGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMTIxRjJOQy0wLmpwZ2AsXG4gICAgLy8gICBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL3Rvb29wZW5fc3lfMTYyNjYxMTg2NTg2LmpwZ2AsXG4gICAgLy8gICBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzcxMjQ0Njc5ZGE5MDU0Y2M1M2VlOThiYjU0YTg3MmI2Mi5qcGdgXG4gICAgLy8gXSk7XG4gICAgLy8gcHJvZHVjdC5zZXQoJ2ltZ1VybEFycicsIFtcbiAgICAvLyAgIGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMi0xRkcwMTMyNTVUNTMuanBnYCxcbiAgICAvLyAgIGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vaS1sb3ZlLXlvdS12aXJ1cy5qcGdgLFxuICAgIC8vICAgYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS9tYXhyZXNkZWZhdWx0LmpwZ2BcbiAgICAvLyBdKTtcbiAgICAvLyBwcm9kdWN0LnVwZGF0ZSgpLnRoZW4oXG4gICAgLy8gICByZXMgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgLy8gICB9LFxuICAgIC8vICAgZXJyID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIC8vICAgfVxuICAgIC8vICk7XG4gIH1cbn1cbiJdfQ==