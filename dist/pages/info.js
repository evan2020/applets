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
      routerToPrize: function routerToPrize() {
        var url = 'https://shalou.smallzhiyun.com/prize/index.html';
        // wx.navigateTo({
        //   url: `/appletsA/pages/web/hello?url=${url}`
        // });

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VJbmZvIiwibG9naW5CdG4iLCJhdmF0YXIiLCJuYW1lIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwicm91dGVyVG9XZWIiLCJ1cmwiLCJ3eCIsIm5hdmlnYXRlVG8iLCJyb3V0ZXJUb1ByaXplIiwidXNlckluZm9IYW5kbGVyIiwic2VsZiIsIkJhYVMiLCJoYW5kbGVVc2VySW5mbyIsInRoZW4iLCJzZXREYXRhIiwidXNlcmluZm8iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJ0ZXN0IiwiZXZlbnRzIiwic3RvcmFnZSIsImdldCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDO0FBRE8sSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsaUJBREs7QUFFTEMsZ0JBQVUsSUFGTDtBQUdMQyxtREFISztBQUlMQztBQUpLLEssUUFPUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxpQkFSUSx5QkFRTTtBQUNaLFlBQUlDLDJEQUFKO0FBQ0FDLFdBQUdDLFVBQUgsQ0FBYztBQUNaRixrREFBc0NBO0FBRDFCLFNBQWQ7QUFHRCxPQWJPO0FBZVJHLG1CQWZRLDJCQWVRO0FBQ2QsWUFBSUgsdURBQUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLFdBQUdDLFVBQUgsQ0FBYztBQUNaRixrREFBc0NBO0FBRDFCLFNBQWQ7QUFHRCxPQXhCTzs7O0FBMEJSO0FBQ0FJLHFCQTNCUSwyQkEyQlFaLElBM0JSLEVBMkJjO0FBQ3BCLFlBQUlhLE9BQU8sSUFBWDtBQUNBSixXQUFHSyxJQUFILENBQVFDLGNBQVIsQ0FBdUJmLElBQXZCLEVBQTZCZ0IsSUFBN0IsQ0FDRSxvQkFBWTtBQUNWO0FBQ0FILGVBQUtJLE9BQUwsQ0FBYTtBQUNYYixrQkFBTWMsU0FBU0MsUUFESjtBQUVYaEIsb0JBQVFlLFNBQVNFLFNBRk47QUFHWGxCLHNCQUFVO0FBSEMsV0FBYjtBQUtELFNBUkgsRUFTRSxlQUFPO0FBQ0xtQixrQkFBUUMsR0FBUixpQkFBa0JDLEdBQWxCO0FBQ0QsU0FYSDtBQWFELE9BMUNPO0FBMkNSQyxVQTNDUSxrQkEyQ0Q7QUFDTEgsZ0JBQVFDLEdBQVI7QUFDRDtBQTdDTyxLLFFBZ0RWRyxNLEdBQVMsRTs7Ozs7NkJBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQUlaLE9BQU8sSUFBWDs7QUFFQSxVQUFJSyxXQUFXVCxHQUFHSyxJQUFILENBQVFZLE9BQVIsQ0FBZ0JDLEdBQWhCLFlBQWY7QUFDQTtBQUNBZCxXQUFLVCxJQUFMLEdBQVljLFNBQVNDLFFBQVQsa0JBQVo7QUFDQU4sV0FBS1YsTUFBTCxHQUFjZSxTQUFTRSxTQUFULHlDQUFkO0FBQ0FQLFdBQUtYLFFBQUwsR0FBZ0JnQixTQUFTRSxTQUFULEdBQXFCLEtBQXJCLEdBQTZCLElBQTdDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7O0VBbkhnQyxlQUFLUSxJOztrQkFBbkJoQyxLIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBg5L+h5oGvYFxuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICB1c2VJbmZvOiBgYCxcbiAgICBsb2dpbkJ0bjogdHJ1ZSxcbiAgICBhdmF0YXI6IGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMzIzLnBuZ2AsXG4gICAgbmFtZTogYOaXtuWFiWBcbiAgfTtcblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8gbGV0dGVyKCkge1xuICAgIC8vICAgY29uc29sZS5sb2coYGxldHRlcmApO1xuICAgIC8vICAgd3gubmF2aWdhdGVUbyh7XG4gICAgLy8gICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy90ZXh0L3RleHRgXG4gICAgLy8gICB9KTtcbiAgICAvLyB9LFxuXG4gICAgcm91dGVyVG9XZWIoKSB7XG4gICAgICBsZXQgdXJsPWBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vbG90dGVyeS9sb3R0ZXJ5Lmh0bWxgO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy93ZWIvaGVsbG8/dXJsPSR7dXJsfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICByb3V0ZXJUb1ByaXplKCkge1xuICAgICAgbGV0IHVybD1gaHR0cHM6Ly9zaGFsb3Uuc21hbGx6aGl5dW4uY29tL3ByaXplL2luZGV4Lmh0bWxgO1xuICAgICAgLy8gd3gubmF2aWdhdGVUbyh7XG4gICAgICAvLyAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy93ZWIvaGVsbG8/dXJsPSR7dXJsfWBcbiAgICAgIC8vIH0pO1xuXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNCL3BhZ2VzL3RleHQvdGV4dD91cmw9JHt1cmx9YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIOeZu+W9leaOiOadg1xuICAgIHVzZXJJbmZvSGFuZGxlcihkYXRhKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICB3eC5CYWFTLmhhbmRsZVVzZXJJbmZvKGRhdGEpLnRoZW4oXG4gICAgICAgIHVzZXJpbmZvID0+IHtcbiAgICAgICAgICAvLyDorr7nva7lpLTlg4/lkozlkI3np7BcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgbmFtZTogdXNlcmluZm8ubmlja05hbWUsXG4gICAgICAgICAgICBhdmF0YXI6IHVzZXJpbmZvLmF2YXRhclVybCxcbiAgICAgICAgICAgIGxvZ2luQnRuOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICByZXMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGDlpLHotKVgLCByZXMpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0sXG4gICAgdGVzdCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGB0ZXN0YCk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICAvLyDmlK/ku5jnpLrkvovku6PnoIFcbiAgICAvLyBsZXQgcGFyYW1zID0ge1xuICAgIC8vICAgdG90YWxDb3N0OiAwLjEsXG4gICAgLy8gICBtZXJjaGFuZGlzZURlc2NyaXB0aW9uOiAn5rex6JOd6Imy56eL6KOkJ1xuICAgIC8vIH07XG4gICAgLy8gd3guQmFhUy5wYXkocGFyYW1zKS50aGVuKFxuICAgIC8vICAgcmVzID0+IHt9LFxuICAgIC8vICAgZXJyID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBsZXQgdXNlcmluZm8gPSB3eC5CYWFTLnN0b3JhZ2UuZ2V0KGB1c2VyaW5mb2ApO1xuICAgIC8vIOiuvue9ruWktOWDj+WSjOWQjeensFxuICAgIHNlbGYubmFtZSA9IHVzZXJpbmZvLm5pY2tOYW1lIHx8IGDml7blhYlgO1xuICAgIHNlbGYuYXZhdGFyID0gdXNlcmluZm8uYXZhdGFyVXJsIHx8IGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMzIzLnBuZ2A7XG4gICAgc2VsZi5sb2dpbkJ0biA9IHVzZXJpbmZvLmF2YXRhclVybCA/IGZhbHNlIDogdHJ1ZTtcblxuICAgIC8vIOabtOaWsCB0YWJsZUlEIOS4uiAzNjU3MSDnmoTmlbDmja7ooajkuK0gcmVjb3JkSUQg5Li6IDVhZmIyZDRkNjVjMGFkNjUzNTRjNmY2MyDnmoTmlbDmja7pobnnmoQgY2FyZEltZ0FyciDlrZfmrrVcbiAgICAvLyBsZXQgdGFibGVJRCA9IDM2NTcxO1xuICAgIC8vIGxldCByZWNvcmRJRCA9ICc1YWZiMmQ0ZDY1YzBhZDY1MzU0YzZmNjMnO1xuXG4gICAgLy8gbGV0IFByb2R1Y3QgPSBuZXcgd3guQmFhUy5UYWJsZU9iamVjdCh0YWJsZUlEKTtcbiAgICAvLyBsZXQgcHJvZHVjdCA9IFByb2R1Y3QuZ2V0V2l0aG91dERhdGEocmVjb3JkSUQpO1xuXG4gICAgLy8gcHJvZHVjdC5zZXQoJ2NhcmRJbWdBcnInLCBbXG4gICAgLy8gICBgaHR0cHM6Ly9nc3MyLmJkc3RhdGljLmNvbS8tZm8zZFNhZ194STRraEdrcG9XSzFIRjZoaHkvYmFpa2UvdyUzRDQwMC9zaWduPTcyMWYyMDJiMzAyOTJkZjU5N2MzYWQxNThjMzA1Y2UyLzY2MDljOTNkNzBjZjNiYzc3OWNjMjhlOGRiMDBiYWExY2MxMTJhZTIuanBnYCxcbiAgICAvLyAgIGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vJUU3JTg4JUI2JUU0JUJBJUIyJUU4JThBJTgyMTFfRm90b3IuanBnYCxcbiAgICAvLyAgIGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMzM4MDlfMjAxNDAyMTIxNzA2NTkyMTUzNzYwMC5qcGdgLFxuICAgIC8vICAgYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8xMjFGMk5DLTAuanBnYCxcbiAgICAvLyAgIGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vdG9vb3Blbl9zeV8xNjI2NjExODY1ODYuanBnYCxcbiAgICAvLyAgIGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vNzEyNDQ2NzlkYTkwNTRjYzUzZWU5OGJiNTRhODcyYjYyLmpwZ2BcbiAgICAvLyBdKTtcbiAgICAvLyBwcm9kdWN0LnNldCgnaW1nVXJsQXJyJywgW1xuICAgIC8vICAgYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8yLTFGRzAxMzI1NVQ1My5qcGdgLFxuICAgIC8vICAgYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS9pLWxvdmUteW91LXZpcnVzLmpwZ2AsXG4gICAgLy8gICBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL21heHJlc2RlZmF1bHQuanBnYFxuICAgIC8vIF0pO1xuICAgIC8vIHByb2R1Y3QudXBkYXRlKCkudGhlbihcbiAgICAvLyAgIHJlcyA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAvLyAgIH0sXG4gICAgLy8gICBlcnIgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgLy8gICB9XG4gICAgLy8gKTtcbiAgfVxufVxuIl19