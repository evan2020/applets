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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW1nVXJsQXJyIiwiY2FyZEltZ0FyciIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJyb3V0ZXJIZWxsbyIsImUiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInVybCIsInd4IiwibmF2aWdhdGVUbyIsInJvdXRlckNhcmRNb20iLCJyb3V0ZXJDYXJkNTIwIiwicm91dGVyQ2FyZEJpcnRoZGF5Iiwicm91dGVyQ2FyZFJlbWVtYmVyIiwicm91dGVyQ2FyZER3Iiwicm91dGVyQ2FyZEZhdGhlciIsInJvdXRlckNhcmRMb3ZlIiwicm91dGVyQ2FyZENoaWxkIiwiZXZlbnRzIiwic2VsZiIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJ0YWJsZUlEIiwicmVjb3JkSUQiLCJQcm9kdWN0IiwiQmFhUyIsIlRhYmxlT2JqZWN0IiwiZ2V0IiwidGhlbiIsInJlcyIsImJhbm5lciIsIiRhcHBseSIsImVyciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMO0FBQ0FDLGlCQUFXLEVBRk47QUFHTDtBQUNBQyxrQkFBWSxFQUpQO0FBS0w7QUFDQUMscUJBQWUsSUFOVjtBQU9MQyxnQkFBVSxJQVBMO0FBUUxDLGdCQUFVLElBUkw7QUFTTEMsZ0JBQVU7QUFUTCxLLFFBWVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSO0FBQ0E7QUFDQUMsaUJBSFEsdUJBR0lDLENBSEosRUFHTztBQUNiQyxnQkFBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0EsWUFBSUcsUUFBUUgsRUFBRUksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXBDO0FBQ0EsWUFBSUcseURBQUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxXQUFHQyxVQUFILENBQWM7QUFDWkYsa0RBQXNDQTtBQUQxQixTQUFkO0FBR0QsT0FqQk87OztBQW1CUjtBQUNBRyxtQkFwQlEsMkJBb0JRO0FBQ2RGLFdBQUdDLFVBQUgsQ0FBYztBQUNaRjtBQURZLFNBQWQ7QUFHRCxPQXhCTzs7O0FBMEJSO0FBQ0FJLG1CQTNCUSwyQkEyQlE7QUFDZEgsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGO0FBRFksU0FBZDtBQUdELE9BL0JPOzs7QUFpQ1I7QUFDQUssd0JBbENRLGdDQWtDYTtBQUNuQkosV0FBR0MsVUFBSCxDQUFjO0FBQ1pGO0FBRFksU0FBZDtBQUdELE9BdENPOzs7QUF3Q1I7QUFDQU0sd0JBekNRLGdDQXlDYTtBQUNuQkwsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGO0FBRFksU0FBZDtBQUdELE9BN0NPOzs7QUErQ1I7QUFDQU8sa0JBaERRLDBCQWdETztBQUNiTixXQUFHQyxVQUFILENBQWM7QUFDWkY7QUFEWSxTQUFkO0FBR0QsT0FwRE87OztBQXNEUjtBQUNBUSxzQkF2RFEsOEJBdURXO0FBQ2pCUCxXQUFHQyxVQUFILENBQWM7QUFDWkY7QUFEWSxTQUFkO0FBR0QsT0EzRE87OztBQTZEUjtBQUNBUyxvQkE5RFEsNEJBOERTO0FBQ2ZSLFdBQUdDLFVBQUgsQ0FBYztBQUNaRjtBQURZLFNBQWQ7QUFHRCxPQWxFTzs7O0FBb0VSO0FBQ0FVLHFCQXJFUSw2QkFxRVU7QUFDaEJULFdBQUdDLFVBQUgsQ0FBYztBQUNaRjtBQURZLFNBQWQ7QUFHRDtBQXpFTyxLLFFBNEVWVyxNLEdBQVMsRTs7Ozs7NkJBRUE7QUFDUCxVQUFJQyxPQUFPLElBQVg7O0FBRUE7QUFDQVgsU0FBR1ksYUFBSCxDQUFpQjtBQUNmQyx5QkFBaUI7QUFERixPQUFqQjs7QUFJQTtBQUNBLFVBQUlDLFVBQVUsS0FBZDtBQUNBLFVBQUlDLFdBQVcsMEJBQWY7O0FBRUEsVUFBSUMsVUFBVSxJQUFJaEIsR0FBR2lCLElBQUgsQ0FBUUMsV0FBWixDQUF3QkosT0FBeEIsQ0FBZDs7QUFFQUUsY0FBUUcsR0FBUixDQUFZSixRQUFaLEVBQXNCSyxJQUF0QixDQUNFLGVBQU87QUFDTDFCLGdCQUFRQyxHQUFSLENBQVkwQixHQUFaO0FBQ0FWLGFBQUszQixTQUFMLEdBQWlCcUMsSUFBSXRDLElBQUosQ0FBU3VDLE1BQTFCO0FBQ0FYLGFBQUsxQixVQUFMLEdBQWtCb0MsSUFBSXRDLElBQUosQ0FBU0UsVUFBM0I7QUFDQTBCLGFBQUtZLE1BQUw7QUFDRCxPQU5ILEVBT0UsZUFBTztBQUNMN0IsZ0JBQVFDLEdBQVIsQ0FBWTZCLEdBQVo7QUFDRCxPQVRIO0FBV0Q7Ozs2QkFFUTtBQUNQLFVBQUliLE9BQU8sSUFBWDtBQUNEOzs7b0NBQ2U7QUFDZGpCLGNBQVFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0Q7Ozs7RUFsSWdDLGVBQUs4QixJOztrQkFBbkI5QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aymea8jydcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgLy9iYW5uZXLlm77niYdcbiAgICBpbWdVcmxBcnI6IFtdLFxuICAgIC8v6IqC5pel5Y2h54mH5Zu+54mHXG4gICAgY2FyZEltZ0FycjogW10sXG4gICAgLy/ova7mkq3lm77orr7nva5cbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiA1MDAwLFxuICAgIGR1cmF0aW9uOiAxNTAwXG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIC8vIOi9ruaSreWbvui3s+i9rFxuICAgIC8vYmFubmVyMei3s1xuICAgIHJvdXRlckhlbGxvKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBsZXQgdXJsID0gYGh0dHBzOi8vc2hhbG91LnNtYWxsemhpeXVuLmNvbS9leHByZXNzL2luZGV4Lmh0bWxgO1xuICAgICAgLy8gaWYoaW5kZXg9PTApe1xuICAgICAgLy8gICB1cmw9YGh0dHBzOi8vc2hhbG91LnNtYWxsemhpeXVuLmNvbS9lbW90aW9uYWxQYXJ0aWNsZXMvaW5kZXguaHRtbGA7XG4gICAgICAvLyB9ZWxzZSBpZihpbmRleD09MSl7XG4gICAgICAvLyAgIHVybD1gaHR0cHM6Ly9zaGFsb3Uuc21hbGx6aGl5dW4uY29tL2V4cHJlc3MvaW5kZXguaHRtbGA7XG4gICAgICAvLyB9ZWxzZSBpZihpbmRleD09Mil7XG4gICAgICAvLyAgIHVybD1gaHR0cHM6Ly9zaGFsb3Uuc21hbGx6aGl5dW4uY29tL2xvdHRlcnkvbG90dGVyeS5odG1sYDtcbiAgICAgIC8vIH1cbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvd2ViL2hlbGxvP3VybD0ke3VybH1gXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjmr43kurLoioLvvIlcbiAgICByb3V0ZXJDYXJkTW9tKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy9kZXRhaWxzL2RldGFpbHNgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIg1MjDvvIlcbiAgICByb3V0ZXJDYXJkNTIwKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzLzUyMGBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOeUn+aXpei0uuWNoe+8iVxuICAgIHJvdXRlckNhcmRCaXJ0aGRheSgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9iaXJ0aGRheWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOe6quW/teaXpe+8iVxuICAgIHJvdXRlckNhcmRSZW1lbWJlcigpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9yZW1lbWJlcmBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOerr+WNiO+8iVxuICAgIHJvdXRlckNhcmREdygpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9kdWFud3VgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjniLbkurLoioLvvIlcbiAgICByb3V0ZXJDYXJkRmF0aGVyKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2ZhdGhlcmBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOS4g+Wkle+8iVxuICAgIHJvdXRlckNhcmRMb3ZlKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2lsb3ZleW91YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5YS/56ul6IqC77yJXG4gICAgcm91dGVyQ2FyZENoaWxkKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2NoaWxkYFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvL+aYvuekuui9rOWPkeaMiemSrlxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5ZiYW5uZXLlkoxjYXJk5Zu+54mH5pWw5o2uXG4gICAgbGV0IHRhYmxlSUQgPSAzNjU3MTtcbiAgICBsZXQgcmVjb3JkSUQgPSAnNWFmYjJkNGQ2NWMwYWQ2NTM1NGM2ZjYzJztcblxuICAgIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG5cbiAgICBQcm9kdWN0LmdldChyZWNvcmRJRCkudGhlbihcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHNlbGYuaW1nVXJsQXJyID0gcmVzLmRhdGEuYmFubmVyO1xuICAgICAgICBzZWxmLmNhcmRJbWdBcnIgPSByZXMuZGF0YS5jYXJkSW1nQXJyO1xuICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gIH1cbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBjb25zb2xlLmxvZygn5Yiw5bqV5LqGJyk7XG4gIH1cbn1cbiJdfQ==