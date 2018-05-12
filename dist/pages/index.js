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
      imgUrlArr: ['https://om83cysj8.qnssl.com/15223107438967665.jpg', 'https://om83cysj8.qnssl.com/ChMkJ1bKxYWIckH4AAF86HwJVvYAALHXAP96qIAAX0A162.jpg', 'https://om83cysj8.qnssl.com/1_22vs0__.jpg'],
      cardImgArr: ['https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D400/sign=721f202b30292df597c3ad158c305ce2/6609c93d70cf3bc779cc28e8db00baa1cc112ae2.jpg', 'https://om83cysj8.qnssl.com/%E7%88%B6%E4%BA%B2%E8%8A%8211_Fotor.jpg', 'https://om83cysj8.qnssl.com/33809_2014021217065921537600.jpg', 'https://om83cysj8.qnssl.com/121F2NC-0.jpg', 'https://om83cysj8.qnssl.com/tooopen_sy_162661186586.jpg', 'https://om83cysj8.qnssl.com/71244679da9054cc53ee98bb54a872b62.jpg'],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1500
    }, _this.computed = {}, _this.methods = {
      routerCard: function routerCard() {
        console.log('跳到卡片页面');

        wx.navigateTo({
          url: '/pages/details/details'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      wx.showShareMenu({
        withShareTicket: true
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW1nVXJsQXJyIiwiY2FyZEltZ0FyciIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJyb3V0ZXJDYXJkIiwiY29uc29sZSIsImxvZyIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImV2ZW50cyIsInNlbGYiLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGlCQUFXLENBQ1QsbURBRFMsRUFFVCxnRkFGUyxFQUdULDJDQUhTLENBRE47QUFNTEMsa0JBQVksQ0FDVix3SkFEVSxFQUVWLHFFQUZVLEVBR1YsOERBSFUsRUFJViwyQ0FKVSxFQUtWLHlEQUxVLEVBTVYsbUVBTlUsQ0FOUDtBQWNMQyxxQkFBZSxJQWRWO0FBZUxDLGdCQUFVLElBZkw7QUFnQkxDLGdCQUFVLElBaEJMO0FBaUJMQyxnQkFBVTtBQWpCTCxLLFFBb0JQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0s7QUFDZEMsZ0JBQVFDLEdBQVIsQ0FBWSxRQUFaOztBQUVHQyxXQUFHQyxVQUFILENBQWM7QUFDWkM7QUFEWSxTQUFkO0FBR0Q7QUFQTyxLLFFBVVZDLE0sR0FBUyxFOzs7Ozs2QkFFQTtBQUNWLFVBQUlDLE9BQU8sSUFBWDtBQUNBSixTQUFHSyxhQUFILENBQWlCO0FBQ1pDLHlCQUFpQjtBQURMLE9BQWpCO0FBSUU7Ozs7RUE5Q2dDLGVBQUtDLEk7O2tCQUFuQnZCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5rKZ5ryPJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICBpbWdVcmxBcnI6IFtcbiAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMTUyMjMxMDc0Mzg5Njc2NjUuanBnJyxcbiAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vQ2hNa0oxYkt4WVdJY2tINEFBRjg2SHdKVnZZQUFMSFhBUDk2cUlBQVgwQTE2Mi5qcGcnLFxuICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8xXzIydnMwX18uanBnJ1xuICAgIF0sXG4gICAgY2FyZEltZ0FycjogW1xuICAgICAgJ2h0dHBzOi8vZ3NzMi5iZHN0YXRpYy5jb20vLWZvM2RTYWdfeEk0a2hHa3BvV0sxSEY2aGh5L2JhaWtlL3clM0Q0MDAvc2lnbj03MjFmMjAyYjMwMjkyZGY1OTdjM2FkMTU4YzMwNWNlMi82NjA5YzkzZDcwY2YzYmM3NzljYzI4ZThkYjAwYmFhMWNjMTEyYWUyLmpwZycsXG4gICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLyVFNyU4OCVCNiVFNCVCQSVCMiVFOCU4QSU4MjExX0ZvdG9yLmpwZycsXG4gICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzMzODA5XzIwMTQwMjEyMTcwNjU5MjE1Mzc2MDAuanBnJyxcbiAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMTIxRjJOQy0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL3Rvb29wZW5fc3lfMTYyNjYxMTg2NTg2LmpwZycsXG4gICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLzcxMjQ0Njc5ZGE5MDU0Y2M1M2VlOThiYjU0YTg3MmI2Mi5qcGcnXG4gICAgXSxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiA1MDAwLFxuICAgIGR1cmF0aW9uOiAxNTAwXG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIHJvdXRlckNhcmQoKSB7XG5cdCAgY29uc29sZS5sb2coJ+i3s+WIsOWNoeeJh+mhtemdoicpO1xuXHQgIFxuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy9kZXRhaWxzL2RldGFpbHNgXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKCkge1xuXHRsZXQgc2VsZiA9IHRoaXM7XG5cdHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG4gICAgXG4gIH1cbn1cbiJdfQ==