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
      imgUrlArr: [],
      //节日卡片图片
      cardImgArr: [],
      //轮播图设置
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1500
    }, _this.computed = {}, _this.methods = {
      // 轮播图跳转
      routerHello: function routerHello(e) {
        console.log(e);
        var index = e.currentTarget.dataset.index;
        var url = 'https://shalou.smallzhiyun.com/express/index.html';
        if (index == 0) {
          console.log('\u70B9\u51FB\u7B2C\u4E00\u5F20');
        } else if (index == 1) {
          console.log('\u70B9\u51FB\u7B2C\u4E8C\u5F20');
        } else if (index == 2) {
          console.log('\u70B9\u51FB\u7B2C\u4E09\u5F20');
        }
        wx.navigateTo({
          url: '/appletsA/pages/timeCard/card?url=' + url
        });
      },


      //跳到卡片页面（手绘）
      routerCardDrawing: function routerCardDrawing() {
        wx.navigateTo({
          url: '/appletsA/pages/video/drawing'
        });
      },


      //跳到卡片页面（毕业季）
      routerCardVideo: function routerCardVideo() {
        wx.navigateTo({
          url: '/appletsA/pages/video/index'
        });
      },


      //跳到卡片页面（母亲节）
      routerCardMom: function routerCardMom() {
        var router = '/appletsA/pages/details/mather';
        wx.navigateTo({
          url: '/appletsB/pages/text/text?router=' + router
        });
      },


      //跳到卡片页面（520）
      routerCard520: function routerCard520() {
        var router = '/appletsA/pages/details/520';
        wx.navigateTo({
          url: '/appletsB/pages/text/text?router=' + router
        });
      },


      //跳到卡片页面（生日贺卡）
      routerCardBirthday: function routerCardBirthday() {
        var router = '/appletsA/pages/details/birthday';
        wx.navigateTo({
          url: '/appletsB/pages/text/text?router=' + router
        });
      },


      //跳到卡片页面（纪念日）
      routerCardRemember: function routerCardRemember() {
        var router = '/appletsA/pages/details/remember';
        wx.navigateTo({
          url: '/appletsB/pages/text/text?router=' + router
        });
      },


      //跳到卡片页面（端午）
      routerCardDw: function routerCardDw() {
        var router = '/appletsA/pages/details/duanwu';
        wx.navigateTo({
          url: '/appletsB/pages/text/text?router=' + router
        });
      },


      //跳到卡片页面（父亲节）
      routerCardFather: function routerCardFather() {
        var router = '/appletsA/pages/details/father';
        wx.navigateTo({
          url: '/appletsB/pages/text/text?router=' + router
        });
      },


      //跳到卡片页面（七夕）
      routerCardLove: function routerCardLove() {
        var router = '/appletsA/pages/details/iloveyou';
        wx.navigateTo({
          url: '/appletsB/pages/text/text?router=' + router
        });
      },


      //跳到卡片页面（儿童节）
      routerCardChild: function routerCardChild() {
        var router = '/appletsA/pages/details/child';
        wx.navigateTo({
          url: '/appletsB/pages/text/text?router=' + router
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

      // 获取banner和card图片数据
      var tableID = 36571;
      var recordID = '5afb2d4d65c0ad65354c6f63';

      var Product = new wx.BaaS.TableObject(tableID);

      Product.get(recordID).then(function (res) {
        console.log(res);
        self.imgUrlArr = res.data.banner;
        self.cardImgArr = res.data.cardImgArr;
        self.$apply();
      }, function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log('到底了');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW1nVXJsQXJyIiwiY2FyZEltZ0FyciIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJyb3V0ZXJIZWxsbyIsImUiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInVybCIsInd4IiwibmF2aWdhdGVUbyIsInJvdXRlckNhcmREcmF3aW5nIiwicm91dGVyQ2FyZFZpZGVvIiwicm91dGVyQ2FyZE1vbSIsInJvdXRlciIsInJvdXRlckNhcmQ1MjAiLCJyb3V0ZXJDYXJkQmlydGhkYXkiLCJyb3V0ZXJDYXJkUmVtZW1iZXIiLCJyb3V0ZXJDYXJkRHciLCJyb3V0ZXJDYXJkRmF0aGVyIiwicm91dGVyQ2FyZExvdmUiLCJyb3V0ZXJDYXJkQ2hpbGQiLCJldmVudHMiLCJzZWxmIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsInRhYmxlSUQiLCJyZWNvcmRJRCIsIlByb2R1Y3QiLCJCYWFTIiwiVGFibGVPYmplY3QiLCJnZXQiLCJ0aGVuIiwicmVzIiwiYmFubmVyIiwiJGFwcGx5IiwiZXJyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0w7QUFDQUMsaUJBQVcsRUFGTjtBQUdMO0FBQ0FDLGtCQUFZLEVBSlA7QUFLTDtBQUNBQyxxQkFBZSxJQU5WO0FBT0xDLGdCQUFVLElBUEw7QUFRTEMsZ0JBQVUsSUFSTDtBQVNMQyxnQkFBVTtBQVRMLEssUUFZUEMsUSxHQUFXLEUsUUFFWEMs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UixDQUFZZ0MsR0FBWjtBQUNELE9BVEg7QUFXRDs7OzZCQUVRO0FBQ1AsVUFBSWIsT0FBTyxJQUFYO0FBQ0Q7OztvQ0FDZTtBQUNkcEIsY0FBUUMsR0FBUixDQUFZLEtBQVo7QUFDRDs7OztFQXZKZ0MsZUFBS2lDLEk7O2tCQUFuQmpELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5rKZ5ryPJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICAvL2Jhbm5lcuWbvueJh1xuICAgIGltZ1VybEFycjogW10sXG4gICAgLy/oioLml6XljaHniYflm77niYdcbiAgICBjYXJkSW1nQXJyOiBbXSxcbiAgICAvL+i9ruaSreWbvuiuvue9rlxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgZHVyYXRpb246IDE1MDBcbiAgfTtcblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g6L2u5pKt5Zu+6Lez6L2sXG4gICAgcm91dGVySGVsbG8oZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9zaGFsb3Uuc21hbGx6aGl5dW4uY29tL2V4cHJlc3MvaW5kZXguaHRtbGA7XG4gICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhg54K55Ye756ys5LiA5bygYCk7XG4gICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYOeCueWHu+esrOS6jOW8oGApO1xuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDngrnlh7vnrKzkuInlvKBgKTtcbiAgICAgIH1cbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvdGltZUNhcmQvY2FyZD91cmw9JHt1cmx9YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5omL57uY77yJXG4gICAgcm91dGVyQ2FyZERyYXdpbmcoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNBL3BhZ2VzL3ZpZGVvL2RyYXdpbmdgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjmr5XkuJrlraPvvIlcbiAgICByb3V0ZXJDYXJkVmlkZW8oKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNBL3BhZ2VzL3ZpZGVvL2luZGV4YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5q+N5Lqy6IqC77yJXG4gICAgcm91dGVyQ2FyZE1vbSgpIHtcbiAgICAgIGxldCByb3V0ZXIgPSBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvbWF0aGVyYDtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0IvcGFnZXMvdGV4dC90ZXh0P3JvdXRlcj0ke3JvdXRlcn1gXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIg1MjDvvIlcbiAgICByb3V0ZXJDYXJkNTIwKCkge1xuICAgICAgbGV0IHJvdXRlciA9IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy81MjBgO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQi9wYWdlcy90ZXh0L3RleHQ/cm91dGVyPSR7cm91dGVyfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOeUn+aXpei0uuWNoe+8iVxuICAgIHJvdXRlckNhcmRCaXJ0aGRheSgpIHtcbiAgICAgIGxldCByb3V0ZXIgPSBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvYmlydGhkYXlgO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQi9wYWdlcy90ZXh0L3RleHQ/cm91dGVyPSR7cm91dGVyfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOe6quW/teaXpe+8iVxuICAgIHJvdXRlckNhcmRSZW1lbWJlcigpIHtcbiAgICAgIGxldCByb3V0ZXIgPSBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvcmVtZW1iZXJgO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQi9wYWdlcy90ZXh0L3RleHQ/cm91dGVyPSR7cm91dGVyfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOerr+WNiO+8iVxuICAgIHJvdXRlckNhcmREdygpIHtcbiAgICAgIGxldCByb3V0ZXIgPSBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvZHVhbnd1YDtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0IvcGFnZXMvdGV4dC90ZXh0P3JvdXRlcj0ke3JvdXRlcn1gXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjniLbkurLoioLvvIlcbiAgICByb3V0ZXJDYXJkRmF0aGVyKCkge1xuICAgICAgbGV0IHJvdXRlciA9IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9mYXRoZXJgO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQi9wYWdlcy90ZXh0L3RleHQ/cm91dGVyPSR7cm91dGVyfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOS4g+Wkle+8iVxuICAgIHJvdXRlckNhcmRMb3ZlKCkge1xuICAgICAgbGV0IHJvdXRlciA9IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9pbG92ZXlvdWA7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNCL3BhZ2VzL3RleHQvdGV4dD9yb3V0ZXI9JHtyb3V0ZXJ9YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5YS/56ul6IqC77yJXG4gICAgcm91dGVyQ2FyZENoaWxkKCkge1xuICAgICAgbGV0IHJvdXRlciA9IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9jaGlsZGA7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNCL3BhZ2VzL3RleHQvdGV4dD9yb3V0ZXI9JHtyb3V0ZXJ9YFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvL+aYvuekuui9rOWPkeaMiemSrlxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5ZiYW5uZXLlkoxjYXJk5Zu+54mH5pWw5o2uXG4gICAgbGV0IHRhYmxlSUQgPSAzNjU3MTtcbiAgICBsZXQgcmVjb3JkSUQgPSAnNWFmYjJkNGQ2NWMwYWQ2NTM1NGM2ZjYzJztcblxuICAgIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG5cbiAgICBQcm9kdWN0LmdldChyZWNvcmRJRCkudGhlbihcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHNlbGYuaW1nVXJsQXJyID0gcmVzLmRhdGEuYmFubmVyO1xuICAgICAgICBzZWxmLmNhcmRJbWdBcnIgPSByZXMuZGF0YS5jYXJkSW1nQXJyO1xuICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gIH1cbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBjb25zb2xlLmxvZygn5Yiw5bqV5LqGJyk7XG4gIH1cbn1cbiJdfQ==