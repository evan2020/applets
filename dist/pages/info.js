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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VJbmZvIiwibG9naW5CdG4iLCJhdmF0YXIiLCJuYW1lIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidXNlckluZm9IYW5kbGVyIiwic2VsZiIsInd4IiwiQmFhUyIsImhhbmRsZVVzZXJJbmZvIiwidGhlbiIsInNldERhdGEiLCJ1c2VyaW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiY29uc29sZSIsImxvZyIsInJlcyIsInRlc3QiLCJldmVudHMiLCJzdG9yYWdlIiwiZ2V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEM7QUFETyxLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxpQkFESztBQUVMQyxnQkFBVSxJQUZMO0FBR0xDLG1EQUhLO0FBSUxDO0FBSkssSyxRQU9QQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQUMscUJBVFEsMkJBU1FQLElBVFIsRUFTYztBQUNwQixZQUFJUSxPQUFPLElBQVg7QUFDQUMsV0FBR0MsSUFBSCxDQUFRQyxjQUFSLENBQXVCWCxJQUF2QixFQUE2QlksSUFBN0IsQ0FDRSxvQkFBWTtBQUNWO0FBQ0FKLGVBQUtLLE9BQUwsQ0FBYTtBQUNYVCxrQkFBTVUsU0FBU0MsUUFESjtBQUVYWixvQkFBUVcsU0FBU0UsU0FGTjtBQUdYZCxzQkFBVTtBQUhDLFdBQWI7QUFLRCxTQVJILEVBU0UsZUFBTztBQUNMZSxrQkFBUUMsR0FBUixpQkFBa0JDLEdBQWxCO0FBQ0QsU0FYSDtBQWFELE9BeEJPO0FBeUJSQyxVQXpCUSxrQkF5QkQ7QUFDTEgsZ0JBQVFDLEdBQVI7QUFDRDtBQTNCTyxLLFFBOEJWRyxNLEdBQVMsRTs7Ozs7NkJBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQUliLE9BQU8sSUFBWDs7QUFFQSxVQUFJTSxXQUFXTCxHQUFHQyxJQUFILENBQVFZLE9BQVIsQ0FBZ0JDLEdBQWhCLFlBQWY7QUFDQTtBQUNBZixXQUFLSixJQUFMLEdBQVlVLFNBQVNDLFFBQVQsa0JBQVo7QUFDQVAsV0FBS0wsTUFBTCxHQUFjVyxTQUFTRSxTQUFULHlDQUFkO0FBQ0FSLFdBQUtOLFFBQUwsR0FBZ0JZLFNBQVNFLFNBQVQsR0FBcUIsS0FBckIsR0FBNkIsSUFBN0M7QUFDRDs7OztFQXBFZ0MsZUFBS1EsSTs7a0JBQW5CNUIsSyIsImZpbGUiOiJpbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogYOS/oeaBr2BcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgdXNlSW5mbzogYGAsXG4gICAgbG9naW5CdG46IHRydWUsXG4gICAgYXZhdGFyOiBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzMyMy5wbmdgLFxuICAgIG5hbWU6IGDml7blhYlgXG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIC8vIGxldHRlcigpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGBsZXR0ZXJgKTtcbiAgICAvLyAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgIC8vICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvdGV4dC90ZXh0YFxuICAgIC8vICAgfSk7XG4gICAgLy8gfSxcblxuICAgIC8vIOeZu+W9leaOiOadg1xuICAgIHVzZXJJbmZvSGFuZGxlcihkYXRhKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICB3eC5CYWFTLmhhbmRsZVVzZXJJbmZvKGRhdGEpLnRoZW4oXG4gICAgICAgIHVzZXJpbmZvID0+IHtcbiAgICAgICAgICAvLyDorr7nva7lpLTlg4/lkozlkI3np7BcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgbmFtZTogdXNlcmluZm8ubmlja05hbWUsXG4gICAgICAgICAgICBhdmF0YXI6IHVzZXJpbmZvLmF2YXRhclVybCxcbiAgICAgICAgICAgIGxvZ2luQnRuOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICByZXMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGDlpLHotKVgLCByZXMpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0sXG4gICAgdGVzdCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGB0ZXN0YCk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICAvLyDmlK/ku5jnpLrkvovku6PnoIFcbiAgICAvLyBsZXQgcGFyYW1zID0ge1xuICAgIC8vICAgdG90YWxDb3N0OiAwLjEsXG4gICAgLy8gICBtZXJjaGFuZGlzZURlc2NyaXB0aW9uOiAn5rex6JOd6Imy56eL6KOkJ1xuICAgIC8vIH07XG4gICAgLy8gd3guQmFhUy5wYXkocGFyYW1zKS50aGVuKFxuICAgIC8vICAgcmVzID0+IHt9LFxuICAgIC8vICAgZXJyID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBsZXQgdXNlcmluZm8gPSB3eC5CYWFTLnN0b3JhZ2UuZ2V0KGB1c2VyaW5mb2ApO1xuICAgIC8vIOiuvue9ruWktOWDj+WSjOWQjeensFxuICAgIHNlbGYubmFtZSA9IHVzZXJpbmZvLm5pY2tOYW1lIHx8IGDml7blhYlgO1xuICAgIHNlbGYuYXZhdGFyID0gdXNlcmluZm8uYXZhdGFyVXJsIHx8IGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMzIzLnBuZ2A7XG4gICAgc2VsZi5sb2dpbkJ0biA9IHVzZXJpbmZvLmF2YXRhclVybCA/IGZhbHNlIDogdHJ1ZTtcbiAgfVxufVxuIl19