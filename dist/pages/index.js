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
      imgUrlArr: ['https://om83cysj8.qnssl.com/2-1FG013255T53.jpg', 'https://om83cysj8.qnssl.com/i-love-you-virus.jpg', 'https://om83cysj8.qnssl.com/maxresdefault.jpg'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW1nVXJsQXJyIiwiY2FyZEltZ0FyciIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJyb3V0ZXJDYXJkTW9tIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwicm91dGVyQ2FyZDUyMCIsInJvdXRlckNhcmREdyIsInJvdXRlckNhcmRGYXRoZXIiLCJyb3V0ZXJDYXJkTG92ZSIsInJvdXRlckNhcmRDaGlsZCIsImV2ZW50cyIsInNlbGYiLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0w7QUFDQUMsaUJBQVcsdUpBRk47QUFPTDtBQUNBQyxrQkFBWSw4Y0FSUDtBQWdCTDtBQUNBQyxxQkFBZSxJQWpCVjtBQWtCTEMsZ0JBQVUsSUFsQkw7QUFtQkxDLGdCQUFVLElBbkJMO0FBb0JMQyxnQkFBVTtBQXBCTCxLLFFBdUJQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUjtBQUNBQyxtQkFGUSwyQkFFUTtBQUNkQyxXQUFHQyxVQUFILENBQWM7QUFDWkM7QUFEWSxTQUFkO0FBR0QsT0FOTzs7O0FBUVI7QUFDQUMsbUJBVFEsMkJBU1E7QUFDZEgsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDO0FBRFksU0FBZDtBQUdELE9BYk87OztBQWVSO0FBQ0FFLGtCQWhCUSwwQkFnQk87QUFDYkosV0FBR0MsVUFBSCxDQUFjO0FBQ1pDO0FBRFksU0FBZDtBQUdELE9BcEJPOzs7QUFzQlI7QUFDQUcsc0JBdkJRLDhCQXVCVztBQUNqQkwsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDO0FBRFksU0FBZDtBQUdELE9BM0JPOzs7QUE2QlI7QUFDQUksb0JBOUJRLDRCQThCUztBQUNmTixXQUFHQyxVQUFILENBQWM7QUFDWkM7QUFEWSxTQUFkO0FBR0QsT0FsQ087OztBQW9DUjtBQUNBSyxxQkFyQ1EsNkJBcUNVO0FBQ2hCUCxXQUFHQyxVQUFILENBQWM7QUFDWkM7QUFEWSxTQUFkO0FBR0Q7QUF6Q08sSyxRQWdEVk0sTSxHQUFTLEU7Ozs7OzZCQUVBO0FBQ1AsVUFBSUMsT0FBTyxJQUFYOztBQUVBO0FBQ0FULFNBQUdVLGFBQUgsQ0FBaUI7QUFDZkMseUJBQWlCO0FBREYsT0FBakI7QUFHRDs7OztFQXhGZ0MsZUFBS0MsSTs7a0JBQW5CMUIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmspnmvI8nXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIC8vYmFubmVy5Zu+54mHXG4gICAgaW1nVXJsQXJyOiBbXG4gICAgICBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzItMUZHMDEzMjU1VDUzLmpwZ2AsXG4gICAgICBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL2ktbG92ZS15b3UtdmlydXMuanBnYCxcbiAgICAgIGBodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vbWF4cmVzZGVmYXVsdC5qcGdgXG4gICAgXSxcbiAgICAvL+iKguaXpeWNoeeJh+WbvueJh1xuICAgIGNhcmRJbWdBcnI6IFtcbiAgICAgIGBodHRwczovL2dzczIuYmRzdGF0aWMuY29tLy1mbzNkU2FnX3hJNGtoR2twb1dLMUhGNmhoeS9iYWlrZS93JTNENDAwL3NpZ249NzIxZjIwMmIzMDI5MmRmNTk3YzNhZDE1OGMzMDVjZTIvNjYwOWM5M2Q3MGNmM2JjNzc5Y2MyOGU4ZGIwMGJhYTFjYzExMmFlMi5qcGdgLFxuICAgICAgYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8lRTclODglQjYlRTQlQkElQjIlRTglOEElODIxMV9Gb3Rvci5qcGdgLFxuICAgICAgYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8zMzgwOV8yMDE0MDIxMjE3MDY1OTIxNTM3NjAwLmpwZ2AsXG4gICAgICBgaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzEyMUYyTkMtMC5qcGdgLFxuICAgICAgYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS90b29vcGVuX3N5XzE2MjY2MTE4NjU4Ni5qcGdgLFxuICAgICAgYGh0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS83MTI0NDY3OWRhOTA1NGNjNTNlZTk4YmI1NGE4NzJiNjIuanBnYFxuICAgIF0sXG4gICAgLy/ova7mkq3lm77orr7nva5cbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiA1MDAwLFxuICAgIGR1cmF0aW9uOiAxNTAwXG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5q+N5Lqy6IqC77yJXG4gICAgcm91dGVyQ2FyZE1vbSgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvZGV0YWlscy9kZXRhaWxzYFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yINTIw77yJXG4gICAgcm91dGVyQ2FyZDUyMCgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy81MjBgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIg1MjDvvIlcbiAgICByb3V0ZXJDYXJkRHcoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvZHVhbnd1YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI54i25Lqy6IqC77yJXG4gICAgcm91dGVyQ2FyZEZhdGhlcigpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9mYXRoZXJgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjkuIPlpJXvvIlcbiAgICByb3V0ZXJDYXJkTG92ZSgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9pbG92ZXlvdWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOWEv+erpeiKgu+8iVxuICAgIHJvdXRlckNhcmRDaGlsZCgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9jaGlsZGBcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuXG5cbiAgfTtcblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy/mmL7npLrovazlj5HmjInpkq5cbiAgICB3eC5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4iXX0=