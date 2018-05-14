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
      navigationBarTitleText: '沙漏'
    }, _this.components = {}, _this.data = {
      //banner图片
      imgUrlArr: ['https://om83cysj8.qnssl.com/15223107438967665.jpg', 'https://om83cysj8.qnssl.com/ChMkJ1bKxYWIckH4AAF86HwJVvYAALHXAP96qIAAX0A162.jpg', 'https://om83cysj8.qnssl.com/1_22vs0__.jpg'],
      //节日卡片图片
      cardImgArr: ['https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D400/sign=721f202b30292df597c3ad158c305ce2/6609c93d70cf3bc779cc28e8db00baa1cc112ae2.jpg', 'https://om83cysj8.qnssl.com/%E7%88%B6%E4%BA%B2%E8%8A%8211_Fotor.jpg', 'https://om83cysj8.qnssl.com/33809_2014021217065921537600.jpg', 'https://om83cysj8.qnssl.com/121F2NC-0.jpg', 'https://om83cysj8.qnssl.com/tooopen_sy_162661186586.jpg', 'https://om83cysj8.qnssl.com/71244679da9054cc53ee98bb54a872b62.jpg'],
      //轮播图设置
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1500
    }, _this.computed = {}, _this.methods = {
      //跳到卡片页面（母亲节）
      routerCardMom: function routerCardMom() {
        wx.navigateTo({
          url: '/pages/details/details'
        });
      },


      //跳到卡片页面（520）
      routerCard520: function routerCard520() {
        wx.navigateTo({
          url: '/appletsA/pages/details/520'
        });
      },


      //跳到卡片页面（520）
      routerCardDw: function routerCardDw() {
        wx.navigateTo({
          url: '/appletsA/pages/details/duanwu'
        });
      },


      //跳到卡片页面（父亲节）
      routerCardFather: function routerCardFather() {
        wx.navigateTo({
          url: '/appletsA/pages/details/father'
        });
      },


      //跳到卡片页面（七夕）
      routerCardLove: function routerCardLove() {
        wx.navigateTo({
          url: '/appletsA/pages/details/iloveyou'
        });
      },


      //跳到卡片页面（儿童节）
      routerCardChild: function routerCardChild() {
        wx.navigateTo({
          url: '/appletsA/pages/details/child'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;

      //显示转发按钮
      wx.showShareMenu({
        withShareTicket: true
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW1nVXJsQXJyIiwiY2FyZEltZ0FyciIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJyb3V0ZXJDYXJkTW9tIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwicm91dGVyQ2FyZDUyMCIsInJvdXRlckNhcmREdyIsInJvdXRlckNhcmRGYXRoZXIiLCJyb3V0ZXJDYXJkTG92ZSIsInJvdXRlckNhcmRDaGlsZCIsImV2ZW50cyIsInNlbGYiLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0w7QUFDQUMsaUJBQVcsb0xBRk47QUFPTDtBQUNBQyxrQkFBWSw4Y0FSUDtBQWdCTDtBQUNBQyxxQkFBZSxJQWpCVjtBQWtCTEMsZ0JBQVUsSUFsQkw7QUFtQkxDLGdCQUFVLElBbkJMO0FBb0JMQyxnQkFBVTtBQXBCTCxLLFFBdUJQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUjtBQUNBQyxtQkFGUSwyQkFFUTtBQUNkQyxXQUFHQyxVQUFILENBQWM7QUFDWkM7QUFEWSxTQUFkO0FBR0QsT0FOTzs7O0FBUVI7QUFDQUMsbUJBVFEsMkJBU1E7QUFDZEgsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDO0FBRFksU0FBZDtBQUdELE9BYk87OztBQWVSO0FBQ0FFLGtCQWhCUSwwQkFnQk87QUFDYkosV0FBR0MsVUFBSCxDQUFjO0FBQ1pDO0FBRFksU0FBZDtBQUdELE9BcEJPOzs7QUFzQlI7QUFDQUcsc0JBdkJRLDhCQXVCVztBQUNqQkwsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDO0FBRFksU0FBZDtBQUdELE9BM0JPOzs7QUE2QlI7QUFDQUksb0JBOUJRLDRCQThCUztBQUNmTixXQUFHQyxVQUFILENBQWM7QUFDWkM7QUFEWSxTQUFkO0FBR0QsT0FsQ087OztBQW9DUjtBQUNBSyxxQkFyQ1EsNkJBcUNVO0FBQ2hCUCxXQUFHQyxVQUFILENBQWM7QUFDWkM7QUFEWSxTQUFkO0FBR0Q7QUF6Q08sSyxRQWdEVk0sTSxHQUFTLEU7Ozs7OzZCQUVBO0FBQ1AsVUFBSUMsT0FBTyxJQUFYOztBQUVBO0FBQ0FULFNBQUdVLGFBQUgsQ0FBaUI7QUFDZkMseUJBQWlCO0FBREYsT0FBakI7QUFHRDs7OztFQXhGZ0MsZUFBS0MsSTs7a0JBQW5CMUIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmspnmvI8nXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIC8vYmFubmVy5Zu+54mHXG4gICAgaW1nVXJsQXJyOiBbXG4gICAgICBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzE1MjIzMTA3NDM4OTY3NjY1LmpwZ2AsXG4gICAgICBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL0NoTWtKMWJLeFlXSWNrSDRBQUY4Nkh3SlZ2WUFBTEhYQVA5NnFJQUFYMEExNjIuanBnYCxcbiAgICAgIGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMV8yMnZzMF9fLmpwZ2BcbiAgICBdLFxuICAgIC8v6IqC5pel5Y2h54mH5Zu+54mHXG4gICAgY2FyZEltZ0FycjogW1xuICAgICAgYGh0dHBzOi8vZ3NzMi5iZHN0YXRpYy5jb20vLWZvM2RTYWdfeEk0a2hHa3BvV0sxSEY2aGh5L2JhaWtlL3clM0Q0MDAvc2lnbj03MjFmMjAyYjMwMjkyZGY1OTdjM2FkMTU4YzMwNWNlMi82NjA5YzkzZDcwY2YzYmM3NzljYzI4ZThkYjAwYmFhMWNjMTEyYWUyLmpwZ2AsXG4gICAgICBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLyVFNyU4OCVCNiVFNCVCQSVCMiVFOCU4QSU4MjExX0ZvdG9yLmpwZ2AsXG4gICAgICBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzMzODA5XzIwMTQwMjEyMTcwNjU5MjE1Mzc2MDAuanBnYCxcbiAgICAgIGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMTIxRjJOQy0wLmpwZ2AsXG4gICAgICBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL3Rvb29wZW5fc3lfMTYyNjYxMTg2NTg2LmpwZ2AsXG4gICAgICBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzcxMjQ0Njc5ZGE5MDU0Y2M1M2VlOThiYjU0YTg3MmI2Mi5qcGdgXG4gICAgXSxcbiAgICAvL+i9ruaSreWbvuiuvue9rlxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgZHVyYXRpb246IDE1MDBcbiAgfTtcblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjmr43kurLoioLvvIlcbiAgICByb3V0ZXJDYXJkTW9tKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy9kZXRhaWxzL2RldGFpbHNgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIg1MjDvvIlcbiAgICByb3V0ZXJDYXJkNTIwKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzLzUyMGBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iDUyMO+8iVxuICAgIHJvdXRlckNhcmREdygpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9kdWFud3VgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjniLbkurLoioLvvIlcbiAgICByb3V0ZXJDYXJkRmF0aGVyKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2ZhdGhlcmBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOS4g+Wkle+8iVxuICAgIHJvdXRlckNhcmRMb3ZlKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2lsb3ZleW91YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5YS/56ul6IqC77yJXG4gICAgcm91dGVyQ2FyZENoaWxkKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2NoaWxkYFxuICAgICAgfSk7XG4gICAgfSxcblxuXG5cblxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvL+aYvuekuui9rOWPkeaMiemSrlxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==