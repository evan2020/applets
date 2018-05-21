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
      //banner1跳
      routerHello: function routerHello(e) {
        console.log(e);
        var index = e.currentTarget.dataset.index;
        var url = 'https://shalou.smallzhiyun.com/express/index.html';
        // if(index==0){
        //   url=`https://shalou.smallzhiyun.com/emotionalParticles/index.html`;
        // }else if(index==1){
        //   url=`https://shalou.smallzhiyun.com/express/index.html`;
        // }else if(index==2){
        //   url=`https://shalou.smallzhiyun.com/lottery/lottery.html`;
        // }
        wx.navigateTo({
          url: '/appletsA/pages/web/hello?url=' + url
        });
      },


      //跳到卡片页面（毕业季）
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


      //跳到卡片页面（生日贺卡）
      routerCardBirthday: function routerCardBirthday() {
        wx.navigateTo({
          url: '/appletsA/pages/details/birthday'
        });
      },


      //跳到卡片页面（纪念日）
      routerCardRemember: function routerCardRemember() {
        wx.navigateTo({
          url: '/appletsA/pages/details/remember'
        });
      },


      //跳到卡片页面（端午）
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW1nVXJsQXJyIiwiY2FyZEltZ0FyciIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJyb3V0ZXJIZWxsbyIsImUiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInVybCIsInd4IiwibmF2aWdhdGVUbyIsInJvdXRlckNhcmREcmF3aW5nIiwicm91dGVyQ2FyZFZpZGVvIiwicm91dGVyQ2FyZE1vbSIsInJvdXRlckNhcmQ1MjAiLCJyb3V0ZXJDYXJkQmlydGhkYXkiLCJyb3V0ZXJDYXJkUmVtZW1iZXIiLCJyb3V0ZXJDYXJkRHciLCJyb3V0ZXJDYXJkRmF0aGVyIiwicm91dGVyQ2FyZExvdmUiLCJyb3V0ZXJDYXJkQ2hpbGQiLCJldmVudHMiLCJzZWxmIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsInRhYmxlSUQiLCJyZWNvcmRJRCIsIlByb2R1Y3QiLCJCYWFTIiwiVGFibGVPYmplY3QiLCJnZXQiLCJ0aGVuIiwicmVzIiwiYmFubmVyIiwiJGFwcGx5IiwiZXJyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0w7QUFDQUMsaUJBQVcsRUFGTjtBQUdMO0FBQ0FDLGtCQUFZLEVBSlA7QUFLTDtBQUNBQyxxQkFBZSxJQU5WO0FBT0xDLGdCQUFVLElBUEw7QUFRTEMsZ0JBQVUsSUFSTDtBQVNMQyxnQkFBVTtBQVRMLEssUUFZUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1I7QUFDQTtBQUNBQyxpQkFIUSx1QkFHSUMsQ0FISixFQUdPO0FBQ2JDLGdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQSxZQUFJRyxRQUFRSCxFQUFFSSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBcEM7QUFDQSxZQUFJRyx5REFBSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFdBQUdDLFVBQUgsQ0FBYztBQUNaRixrREFBc0NBO0FBRDFCLFNBQWQ7QUFHRCxPQWpCTzs7O0FBbUJSO0FBQ0FHLHVCQXBCUSwrQkFvQlk7QUFDbEJGLFdBQUdDLFVBQUgsQ0FBYztBQUNaRjtBQURZLFNBQWQ7QUFHRCxPQXhCTzs7O0FBMEJQO0FBQ0RJLHFCQTNCUSw2QkEyQlU7QUFDaEJILFdBQUdDLFVBQUgsQ0FBYztBQUNaRjtBQURZLFNBQWQ7QUFHRCxPQS9CTzs7O0FBaUNSO0FBQ0FLLG1CQWxDUSwyQkFrQ1E7QUFDZEosV0FBR0MsVUFBSCxDQUFjO0FBQ1pGO0FBRFksU0FBZDtBQUdELE9BdENPOzs7QUF3Q1I7QUFDQU0sbUJBekNRLDJCQXlDUTtBQUNkTCxXQUFHQyxVQUFILENBQWM7QUFDWkY7QUFEWSxTQUFkO0FBR0QsT0E3Q087OztBQStDUjtBQUNBTyx3QkFoRFEsZ0NBZ0RhO0FBQ25CTixXQUFHQyxVQUFILENBQWM7QUFDWkY7QUFEWSxTQUFkO0FBR0QsT0FwRE87OztBQXNEUjtBQUNBUSx3QkF2RFEsZ0NBdURhO0FBQ25CUCxXQUFHQyxVQUFILENBQWM7QUFDWkY7QUFEWSxTQUFkO0FBR0QsT0EzRE87OztBQTZEUjtBQUNBUyxrQkE5RFEsMEJBOERPO0FBQ2JSLFdBQUdDLFVBQUgsQ0FBYztBQUNaRjtBQURZLFNBQWQ7QUFHRCxPQWxFTzs7O0FBb0VSO0FBQ0FVLHNCQXJFUSw4QkFxRVc7QUFDakJULFdBQUdDLFVBQUgsQ0FBYztBQUNaRjtBQURZLFNBQWQ7QUFHRCxPQXpFTzs7O0FBMkVSO0FBQ0FXLG9CQTVFUSw0QkE0RVM7QUFDZlYsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGO0FBRFksU0FBZDtBQUdELE9BaEZPOzs7QUFrRlI7QUFDQVkscUJBbkZRLDZCQW1GVTtBQUNoQlgsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGO0FBRFksU0FBZDtBQUdEO0FBdkZPLEssUUEwRlZhLE0sR0FBUyxFOzs7Ozs2QkFFQTtBQUNQLFVBQUlDLE9BQU8sSUFBWDs7QUFFQTtBQUNBYixTQUFHYyxhQUFILENBQWlCO0FBQ2ZDLHlCQUFpQjtBQURGLE9BQWpCOztBQUlBO0FBQ0EsVUFBSUMsVUFBVSxLQUFkO0FBQ0EsVUFBSUMsV0FBVywwQkFBZjs7QUFFQSxVQUFJQyxVQUFVLElBQUlsQixHQUFHbUIsSUFBSCxDQUFRQyxXQUFaLENBQXdCSixPQUF4QixDQUFkOztBQUVBRSxjQUFRRyxHQUFSLENBQVlKLFFBQVosRUFBc0JLLElBQXRCLENBQ0UsZUFBTztBQUNMNUIsZ0JBQVFDLEdBQVIsQ0FBWTRCLEdBQVo7QUFDQVYsYUFBSzdCLFNBQUwsR0FBaUJ1QyxJQUFJeEMsSUFBSixDQUFTeUMsTUFBMUI7QUFDQVgsYUFBSzVCLFVBQUwsR0FBa0JzQyxJQUFJeEMsSUFBSixDQUFTRSxVQUEzQjtBQUNBNEIsYUFBS1ksTUFBTDtBQUNELE9BTkgsRUFPRSxlQUFPO0FBQ0wvQixnQkFBUUMsR0FBUixDQUFZK0IsR0FBWjtBQUNELE9BVEg7QUFXRDs7OzZCQUVRO0FBQ1AsVUFBSWIsT0FBTyxJQUFYO0FBQ0Q7OztvQ0FDZTtBQUNkbkIsY0FBUUMsR0FBUixDQUFZLEtBQVo7QUFDRDs7OztFQWhKZ0MsZUFBS2dDLEk7O2tCQUFuQmhELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5rKZ5ryPJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICAvL2Jhbm5lcuWbvueJh1xuICAgIGltZ1VybEFycjogW10sXG4gICAgLy/oioLml6XljaHniYflm77niYdcbiAgICBjYXJkSW1nQXJyOiBbXSxcbiAgICAvL+i9ruaSreWbvuiuvue9rlxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgZHVyYXRpb246IDE1MDBcbiAgfTtcblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g6L2u5pKt5Zu+6Lez6L2sXG4gICAgLy9iYW5uZXIx6LezXG4gICAgcm91dGVySGVsbG8oZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9zaGFsb3Uuc21hbGx6aGl5dW4uY29tL2V4cHJlc3MvaW5kZXguaHRtbGA7XG4gICAgICAvLyBpZihpbmRleD09MCl7XG4gICAgICAvLyAgIHVybD1gaHR0cHM6Ly9zaGFsb3Uuc21hbGx6aGl5dW4uY29tL2Vtb3Rpb25hbFBhcnRpY2xlcy9pbmRleC5odG1sYDtcbiAgICAgIC8vIH1lbHNlIGlmKGluZGV4PT0xKXtcbiAgICAgIC8vICAgdXJsPWBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vZXhwcmVzcy9pbmRleC5odG1sYDtcbiAgICAgIC8vIH1lbHNlIGlmKGluZGV4PT0yKXtcbiAgICAgIC8vICAgdXJsPWBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vbG90dGVyeS9sb3R0ZXJ5Lmh0bWxgO1xuICAgICAgLy8gfVxuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy93ZWIvaGVsbG8/dXJsPSR7dXJsfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOavleS4muWto++8iVxuICAgIHJvdXRlckNhcmREcmF3aW5nKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy92aWRlby9kcmF3aW5nYFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOavleS4muWto++8iVxuICAgIHJvdXRlckNhcmRWaWRlbygpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvdmlkZW8vaW5kZXhgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjmr43kurLoioLvvIlcbiAgICByb3V0ZXJDYXJkTW9tKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy9kZXRhaWxzL2RldGFpbHNgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIg1MjDvvIlcbiAgICByb3V0ZXJDYXJkNTIwKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzLzUyMGBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOeUn+aXpei0uuWNoe+8iVxuICAgIHJvdXRlckNhcmRCaXJ0aGRheSgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9iaXJ0aGRheWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOe6quW/teaXpe+8iVxuICAgIHJvdXRlckNhcmRSZW1lbWJlcigpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9yZW1lbWJlcmBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOerr+WNiO+8iVxuICAgIHJvdXRlckNhcmREdygpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9kdWFud3VgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjniLbkurLoioLvvIlcbiAgICByb3V0ZXJDYXJkRmF0aGVyKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2ZhdGhlcmBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOS4g+Wkle+8iVxuICAgIHJvdXRlckNhcmRMb3ZlKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2lsb3ZleW91YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5YS/56ul6IqC77yJXG4gICAgcm91dGVyQ2FyZENoaWxkKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2NoaWxkYFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvL+aYvuekuui9rOWPkeaMiemSrlxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5ZiYW5uZXLlkoxjYXJk5Zu+54mH5pWw5o2uXG4gICAgbGV0IHRhYmxlSUQgPSAzNjU3MTtcbiAgICBsZXQgcmVjb3JkSUQgPSAnNWFmYjJkNGQ2NWMwYWQ2NTM1NGM2ZjYzJztcblxuICAgIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG5cbiAgICBQcm9kdWN0LmdldChyZWNvcmRJRCkudGhlbihcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHNlbGYuaW1nVXJsQXJyID0gcmVzLmRhdGEuYmFubmVyO1xuICAgICAgICBzZWxmLmNhcmRJbWdBcnIgPSByZXMuZGF0YS5jYXJkSW1nQXJyO1xuICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gIH1cbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBjb25zb2xlLmxvZygn5Yiw5bqV5LqGJyk7XG4gIH1cbn1cbiJdfQ==