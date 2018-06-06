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
        // wx.navigateTo({
        //   url: `/appletsA/pages/web/hello?url=${url}`
        // });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW1nVXJsQXJyIiwiY2FyZEltZ0FyciIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJyb3V0ZXJIZWxsbyIsImUiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInVybCIsInJvdXRlckNhcmREcmF3aW5nIiwid3giLCJuYXZpZ2F0ZVRvIiwicm91dGVyQ2FyZFZpZGVvIiwicm91dGVyQ2FyZE1vbSIsInJvdXRlciIsInJvdXRlckNhcmQ1MjAiLCJyb3V0ZXJDYXJkQmlydGhkYXkiLCJyb3V0ZXJDYXJkUmVtZW1iZXIiLCJyb3V0ZXJDYXJkRHciLCJyb3V0ZXJDYXJkRmF0aGVyIiwicm91dGVyQ2FyZExvdmUiLCJyb3V0ZXJDYXJkQ2hpbGQiLCJldmVudHMiLCJzZWxmIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsInRhYmxlSUQiLCJyZWNvcmRJRCIsIlByb2R1Y3QiLCJCYWFTIiwiVGFibGVPYmplY3QiLCJnZXQiLCJ0aGVuIiwicmVzIiwiYmFubmVyIiwiJGFwcGx5IiwiZXJyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0w7QUFDQUMsaUJBQVcsRUFGTjtBQUdMO0FBQ0FDLGtCQUFZLEVBSlA7QUFLTDtBQUNBQyxxQkFBZSxJQU5WO0FBT0xDLGdCQUFVLElBUEw7QUFRTEMsZ0JBQVUsSUFSTDtBQVNMQyxnQkFBVTtBQVRMLEssUUFZUEMsUSxHQUFXLEUsUUFFWEMs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UTtBQUNQLFVBQUliLE9BQU8sSUFBWDtBQUNEOzs7b0NBQ2U7QUFDZHBCLGNBQVFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0Q7Ozs7RUF6SmdDLGVBQUtpQyxJOztrQkFBbkJqRCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aymea8jydcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgLy9iYW5uZXLlm77niYdcbiAgICBpbWdVcmxBcnI6IFtdLFxuICAgIC8v6IqC5pel5Y2h54mH5Zu+54mHXG4gICAgY2FyZEltZ0FycjogW10sXG4gICAgLy/ova7mkq3lm77orr7nva5cbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiA1MDAwLFxuICAgIGR1cmF0aW9uOiAxNTAwXG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIC8vIOi9ruaSreWbvui3s+i9rFxuICAgIHJvdXRlckhlbGxvKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBsZXQgdXJsID0gYGh0dHBzOi8vc2hhbG91LnNtYWxsemhpeXVuLmNvbS9leHByZXNzL2luZGV4Lmh0bWxgO1xuICAgICAgaWYoaW5kZXg9PTApe1xuICAgICAgICBjb25zb2xlLmxvZyhg54K55Ye756ys5LiA5bygYClcbiAgICAgIH1lbHNlIGlmKGluZGV4PT0xKXtcbiAgICAgICAgY29uc29sZS5sb2coYOeCueWHu+esrOS6jOW8oGApXG4gICAgICAgIFxuICAgICAgfWVsc2UgaWYoaW5kZXg9PTIpe1xuICAgICAgICBjb25zb2xlLmxvZyhg54K55Ye756ys5LiJ5bygYClcbiAgICAgICAgXG4gICAgICB9XG4gICAgICAvLyB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIC8vICAgdXJsOiBgL2FwcGxldHNBL3BhZ2VzL3dlYi9oZWxsbz91cmw9JHt1cmx9YFxuICAgICAgLy8gfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5omL57uY77yJXG4gICAgcm91dGVyQ2FyZERyYXdpbmcoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNBL3BhZ2VzL3ZpZGVvL2RyYXdpbmdgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjmr5XkuJrlraPvvIlcbiAgICByb3V0ZXJDYXJkVmlkZW8oKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNBL3BhZ2VzL3ZpZGVvL2luZGV4YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5q+N5Lqy6IqC77yJXG4gICAgcm91dGVyQ2FyZE1vbSgpIHtcbiAgICAgIGxldCByb3V0ZXIgPSBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvbWF0aGVyYDtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0IvcGFnZXMvdGV4dC90ZXh0P3JvdXRlcj0ke3JvdXRlcn1gXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIg1MjDvvIlcbiAgICByb3V0ZXJDYXJkNTIwKCkge1xuICAgICAgbGV0IHJvdXRlciA9IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy81MjBgO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQi9wYWdlcy90ZXh0L3RleHQ/cm91dGVyPSR7cm91dGVyfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOeUn+aXpei0uuWNoe+8iVxuICAgIHJvdXRlckNhcmRCaXJ0aGRheSgpIHtcbiAgICAgIGxldCByb3V0ZXIgPSBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvYmlydGhkYXlgO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQi9wYWdlcy90ZXh0L3RleHQ/cm91dGVyPSR7cm91dGVyfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOe6quW/teaXpe+8iVxuICAgIHJvdXRlckNhcmRSZW1lbWJlcigpIHtcbiAgICAgIGxldCByb3V0ZXIgPSBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvcmVtZW1iZXJgO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQi9wYWdlcy90ZXh0L3RleHQ/cm91dGVyPSR7cm91dGVyfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOerr+WNiO+8iVxuICAgIHJvdXRlckNhcmREdygpIHtcbiAgICAgIGxldCByb3V0ZXIgPSBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvZHVhbnd1YDtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0IvcGFnZXMvdGV4dC90ZXh0P3JvdXRlcj0ke3JvdXRlcn1gXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjniLbkurLoioLvvIlcbiAgICByb3V0ZXJDYXJkRmF0aGVyKCkge1xuICAgICAgbGV0IHJvdXRlciA9IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9mYXRoZXJgO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQi9wYWdlcy90ZXh0L3RleHQ/cm91dGVyPSR7cm91dGVyfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOS4g+Wkle+8iVxuICAgIHJvdXRlckNhcmRMb3ZlKCkge1xuICAgICAgbGV0IHJvdXRlciA9IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9pbG92ZXlvdWA7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNCL3BhZ2VzL3RleHQvdGV4dD9yb3V0ZXI9JHtyb3V0ZXJ9YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5YS/56ul6IqC77yJXG4gICAgcm91dGVyQ2FyZENoaWxkKCkge1xuICAgICAgbGV0IHJvdXRlciA9IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9jaGlsZGA7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNCL3BhZ2VzL3RleHQvdGV4dD9yb3V0ZXI9JHtyb3V0ZXJ9YFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvL+aYvuekuui9rOWPkeaMiemSrlxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5ZiYW5uZXLlkoxjYXJk5Zu+54mH5pWw5o2uXG4gICAgbGV0IHRhYmxlSUQgPSAzNjU3MTtcbiAgICBsZXQgcmVjb3JkSUQgPSAnNWFmYjJkNGQ2NWMwYWQ2NTM1NGM2ZjYzJztcblxuICAgIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG5cbiAgICBQcm9kdWN0LmdldChyZWNvcmRJRCkudGhlbihcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHNlbGYuaW1nVXJsQXJyID0gcmVzLmRhdGEuYmFubmVyO1xuICAgICAgICBzZWxmLmNhcmRJbWdBcnIgPSByZXMuZGF0YS5jYXJkSW1nQXJyO1xuICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gIH1cbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBjb25zb2xlLmxvZygn5Yiw5bqV5LqGJyk7XG4gIH1cbn1cbiJdfQ==