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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW1nVXJsQXJyIiwiY2FyZEltZ0FyciIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJyb3V0ZXJIZWxsbyIsImUiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInVybCIsInd4IiwibmF2aWdhdGVUbyIsInJvdXRlckNhcmRNb20iLCJyb3V0ZXJDYXJkNTIwIiwicm91dGVyQ2FyZER3Iiwicm91dGVyQ2FyZEZhdGhlciIsInJvdXRlckNhcmRMb3ZlIiwicm91dGVyQ2FyZENoaWxkIiwiZXZlbnRzIiwic2VsZiIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJ0YWJsZUlEIiwicmVjb3JkSUQiLCJQcm9kdWN0IiwiQmFhUyIsIlRhYmxlT2JqZWN0IiwiZ2V0IiwidGhlbiIsInJlcyIsImJhbm5lciIsIiRhcHBseSIsImVyciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMO0FBQ0FDLGlCQUFXLEVBRk47QUFHTDtBQUNBQyxrQkFBWSxFQUpQO0FBS0w7QUFDQUMscUJBQWUsSUFOVjtBQU9MQyxnQkFBVSxJQVBMO0FBUUxDLGdCQUFVLElBUkw7QUFTTEMsZ0JBQVU7QUFUTCxLLFFBWVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTs7QUFFUjtBQUNBO0FBQ0FDLGlCQUpRLHVCQUlJQyxDQUpKLEVBSU87QUFDYkMsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBLFlBQUlHLFFBQU1ILEVBQUVJLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixLQUFsQztBQUNBLFlBQUlHLHlEQUFKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGLGtEQUFzQ0E7QUFEMUIsU0FBZDtBQUdELE9BbEJPOzs7QUFzQlI7QUFDQUcsbUJBdkJRLDJCQXVCUTtBQUNkRixXQUFHQyxVQUFILENBQWM7QUFDWkY7QUFEWSxTQUFkO0FBR0QsT0EzQk87OztBQTZCUjtBQUNBSSxtQkE5QlEsMkJBOEJRO0FBQ2RILFdBQUdDLFVBQUgsQ0FBYztBQUNaRjtBQURZLFNBQWQ7QUFHRCxPQWxDTzs7O0FBb0NSO0FBQ0FLLGtCQXJDUSwwQkFxQ087QUFDYkosV0FBR0MsVUFBSCxDQUFjO0FBQ1pGO0FBRFksU0FBZDtBQUdELE9BekNPOzs7QUEyQ1I7QUFDQU0sc0JBNUNRLDhCQTRDVztBQUNqQkwsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGO0FBRFksU0FBZDtBQUdELE9BaERPOzs7QUFrRFI7QUFDQU8sb0JBbkRRLDRCQW1EUztBQUNmTixXQUFHQyxVQUFILENBQWM7QUFDWkY7QUFEWSxTQUFkO0FBR0QsT0F2RE87OztBQXlEUjtBQUNBUSxxQkExRFEsNkJBMERVO0FBQ2hCUCxXQUFHQyxVQUFILENBQWM7QUFDWkY7QUFEWSxTQUFkO0FBR0Q7QUE5RE8sSyxRQWlFVlMsTSxHQUFTLEU7Ozs7OzZCQUVBO0FBQ1AsVUFBSUMsT0FBTyxJQUFYOztBQUVBO0FBQ0FULFNBQUdVLGFBQUgsQ0FBaUI7QUFDZkMseUJBQWlCO0FBREYsT0FBakI7O0FBSUE7QUFDQSxVQUFJQyxVQUFVLEtBQWQ7QUFDQSxVQUFJQyxXQUFXLDBCQUFmOztBQUVBLFVBQUlDLFVBQVUsSUFBSWQsR0FBR2UsSUFBSCxDQUFRQyxXQUFaLENBQXdCSixPQUF4QixDQUFkOztBQUVBRSxjQUFRRyxHQUFSLENBQVlKLFFBQVosRUFBc0JLLElBQXRCLENBQ0UsZUFBTztBQUNMeEIsZ0JBQVFDLEdBQVIsQ0FBWXdCLEdBQVo7QUFDQVYsYUFBS3pCLFNBQUwsR0FBaUJtQyxJQUFJcEMsSUFBSixDQUFTcUMsTUFBMUI7QUFDQVgsYUFBS3hCLFVBQUwsR0FBa0JrQyxJQUFJcEMsSUFBSixDQUFTRSxVQUEzQjtBQUNBd0IsYUFBS1ksTUFBTDtBQUNELE9BTkgsRUFPRSxlQUFPO0FBQ0wzQixnQkFBUUMsR0FBUixDQUFZMkIsR0FBWjtBQUNELE9BVEg7QUFXRDs7OzZCQUVRO0FBQ1AsVUFBSWIsT0FBTyxJQUFYO0FBR0Q7OztvQ0FDZTtBQUNkZixjQUFRQyxHQUFSLENBQVksS0FBWjtBQUNEOzs7O0VBekhnQyxlQUFLNEIsSTs7a0JBQW5CNUMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmspnmvI8nXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIC8vYmFubmVy5Zu+54mHXG4gICAgaW1nVXJsQXJyOiBbXSxcbiAgICAvL+iKguaXpeWNoeeJh+WbvueJh1xuICAgIGNhcmRJbWdBcnI6IFtdLFxuICAgIC8v6L2u5pKt5Zu+6K6+572uXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogNTAwMCxcbiAgICBkdXJhdGlvbjogMTUwMFxuICB9O1xuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcblxuICAgIC8vIOi9ruaSreWbvui3s+i9rFxuICAgIC8vYmFubmVyMei3s1xuICAgIHJvdXRlckhlbGxvKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgbGV0IGluZGV4PWUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgbGV0IHVybD1gaHR0cHM6Ly9zaGFsb3Uuc21hbGx6aGl5dW4uY29tL2V4cHJlc3MvaW5kZXguaHRtbGA7XG4gICAgICAvLyBpZihpbmRleD09MCl7XG4gICAgICAvLyAgIHVybD1gaHR0cHM6Ly9zaGFsb3Uuc21hbGx6aGl5dW4uY29tL2Vtb3Rpb25hbFBhcnRpY2xlcy9pbmRleC5odG1sYDtcbiAgICAgIC8vIH1lbHNlIGlmKGluZGV4PT0xKXtcbiAgICAgIC8vICAgdXJsPWBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vZXhwcmVzcy9pbmRleC5odG1sYDtcbiAgICAgIC8vIH1lbHNlIGlmKGluZGV4PT0yKXtcbiAgICAgIC8vICAgdXJsPWBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vbG90dGVyeS9sb3R0ZXJ5Lmh0bWxgO1xuICAgICAgLy8gfVxuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy93ZWIvaGVsbG8/dXJsPSR7dXJsfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjmr43kurLoioLvvIlcbiAgICByb3V0ZXJDYXJkTW9tKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy9kZXRhaWxzL2RldGFpbHNgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIg1MjDvvIlcbiAgICByb3V0ZXJDYXJkNTIwKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzLzUyMGBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iDUyMO+8iVxuICAgIHJvdXRlckNhcmREdygpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9kdWFud3VgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjniLbkurLoioLvvIlcbiAgICByb3V0ZXJDYXJkRmF0aGVyKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2ZhdGhlcmBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOS4g+Wkle+8iVxuICAgIHJvdXRlckNhcmRMb3ZlKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2lsb3ZleW91YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5YS/56ul6IqC77yJXG4gICAgcm91dGVyQ2FyZENoaWxkKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2NoaWxkYFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvL+aYvuekuui9rOWPkeaMiemSrlxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5ZiYW5uZXLlkoxjYXJk5Zu+54mH5pWw5o2uXG4gICAgbGV0IHRhYmxlSUQgPSAzNjU3MTtcbiAgICBsZXQgcmVjb3JkSUQgPSAnNWFmYjJkNGQ2NWMwYWQ2NTM1NGM2ZjYzJztcblxuICAgIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG5cbiAgICBQcm9kdWN0LmdldChyZWNvcmRJRCkudGhlbihcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHNlbGYuaW1nVXJsQXJyID0gcmVzLmRhdGEuYmFubmVyO1xuICAgICAgICBzZWxmLmNhcmRJbWdBcnIgPSByZXMuZGF0YS5jYXJkSW1nQXJyO1xuICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBcbiAgfVxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGNvbnNvbGUubG9nKCfliLDlupXkuoYnKTtcbiAgfVxufVxuIl19