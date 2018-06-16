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
        console.log(JSON.parse(res.data.testJson));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW1nVXJsQXJyIiwiY2FyZEltZ0FyciIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJyb3V0ZXJIZWxsbyIsImUiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInVybCIsInd4IiwibmF2aWdhdGVUbyIsInJvdXRlckNhcmREcmF3aW5nIiwicm91dGVyQ2FyZFZpZGVvIiwicm91dGVyQ2FyZE1vbSIsInJvdXRlciIsInJvdXRlckNhcmQ1MjAiLCJyb3V0ZXJDYXJkQmlydGhkYXkiLCJyb3V0ZXJDYXJkUmVtZW1iZXIiLCJyb3V0ZXJDYXJkRHciLCJyb3V0ZXJDYXJkRmF0aGVyIiwicm91dGVyQ2FyZExvdmUiLCJyb3V0ZXJDYXJkQ2hpbGQiLCJldmVudHMiLCJzZWxmIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsInRhYmxlSUQiLCJyZWNvcmRJRCIsIlByb2R1Y3QiLCJCYWFTIiwiVGFibGVPYmplY3QiLCJnZXQiLCJ0aGVuIiwicmVzIiwiYmFubmVyIiwiSlNPTiIsInBhcnNlIiwidGVzdEpzb24iLCIkYXBwbHkiLCJlcnIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTDtBQUNBQyxpQkFBVyxFQUZOO0FBR0w7QUFDQUMsa0JBQVksRUFKUDtBQUtMO0FBQ0FDLHFCQUFlLElBTlY7QUFPTEMsZ0JBQVUsSUFQTDtBQVFMQyxnQkFBVSxJQVJMO0FBU0xDLGdCQUFVO0FB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QyxLQUFMLENBQVdILElBQUl6QyxJQUFKLENBQVM2QyxRQUFwQixDQUFaO0FBQ0FkLGFBQUtlLE1BQUw7QUFDRCxPQVBILEVBUUUsZUFBTztBQUNMbkMsZ0JBQVFDLEdBQVIsQ0FBWW1DLEdBQVo7QUFDRCxPQVZIO0FBWUQ7Ozs2QkFFUTtBQUNQLFVBQUloQixPQUFPLElBQVg7QUFDRDs7O29DQUNlO0FBQ2RwQixjQUFRQyxHQUFSLENBQVksS0FBWjtBQUNEOzs7O0VBeEpnQyxlQUFLb0MsSTs7a0JBQW5CcEQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmspnmvI8nXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIC8vYmFubmVy5Zu+54mHXG4gICAgaW1nVXJsQXJyOiBbXSxcbiAgICAvL+iKguaXpeWNoeeJh+WbvueJh1xuICAgIGNhcmRJbWdBcnI6IFtdLFxuICAgIC8v6L2u5pKt5Zu+6K6+572uXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogNTAwMCxcbiAgICBkdXJhdGlvbjogMTUwMFxuICB9O1xuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDova7mkq3lm77ot7PovaxcbiAgICByb3V0ZXJIZWxsbyhlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vZXhwcmVzcy9pbmRleC5odG1sYDtcbiAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDngrnlh7vnrKzkuIDlvKBgKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhg54K55Ye756ys5LqM5bygYCk7XG4gICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYOeCueWHu+esrOS4ieW8oGApO1xuICAgICAgfVxuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy90aW1lQ2FyZC9jYXJkP3VybD0ke3VybH1gXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjmiYvnu5jvvIlcbiAgICByb3V0ZXJDYXJkRHJhd2luZygpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvdmlkZW8vZHJhd2luZ2BcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOavleS4muWto++8iVxuICAgIHJvdXRlckNhcmRWaWRlbygpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvdmlkZW8vaW5kZXhgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjmr43kurLoioLvvIlcbiAgICByb3V0ZXJDYXJkTW9tKCkge1xuICAgICAgbGV0IHJvdXRlciA9IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9tYXRoZXJgO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQi9wYWdlcy90ZXh0L3RleHQ/cm91dGVyPSR7cm91dGVyfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iDUyMO+8iVxuICAgIHJvdXRlckNhcmQ1MjAoKSB7XG4gICAgICBsZXQgcm91dGVyID0gYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzLzUyMGA7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNCL3BhZ2VzL3RleHQvdGV4dD9yb3V0ZXI9JHtyb3V0ZXJ9YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI55Sf5pel6LS65Y2h77yJXG4gICAgcm91dGVyQ2FyZEJpcnRoZGF5KCkge1xuICAgICAgbGV0IHJvdXRlciA9IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9iaXJ0aGRheWA7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNCL3BhZ2VzL3RleHQvdGV4dD9yb3V0ZXI9JHtyb3V0ZXJ9YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI57qq5b+15pel77yJXG4gICAgcm91dGVyQ2FyZFJlbWVtYmVyKCkge1xuICAgICAgbGV0IHJvdXRlciA9IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9yZW1lbWJlcmA7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNCL3BhZ2VzL3RleHQvdGV4dD9yb3V0ZXI9JHtyb3V0ZXJ9YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI56uv5Y2I77yJXG4gICAgcm91dGVyQ2FyZER3KCkge1xuICAgICAgbGV0IHJvdXRlciA9IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9kdWFud3VgO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQi9wYWdlcy90ZXh0L3RleHQ/cm91dGVyPSR7cm91dGVyfWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOeItuS6suiKgu+8iVxuICAgIHJvdXRlckNhcmRGYXRoZXIoKSB7XG4gICAgICBsZXQgcm91dGVyID0gYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2ZhdGhlcmA7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNCL3BhZ2VzL3RleHQvdGV4dD9yb3V0ZXI9JHtyb3V0ZXJ9YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5LiD5aSV77yJXG4gICAgcm91dGVyQ2FyZExvdmUoKSB7XG4gICAgICBsZXQgcm91dGVyID0gYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2lsb3ZleW91YDtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0IvcGFnZXMvdGV4dC90ZXh0P3JvdXRlcj0ke3JvdXRlcn1gXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjlhL/nq6XoioLvvIlcbiAgICByb3V0ZXJDYXJkQ2hpbGQoKSB7XG4gICAgICBsZXQgcm91dGVyID0gYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2NoaWxkYDtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0IvcGFnZXMvdGV4dC90ZXh0P3JvdXRlcj0ke3JvdXRlcn1gXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIC8v5pi+56S66L2s5Y+R5oyJ6ZKuXG4gICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIOiOt+WPlmJhbm5lcuWSjGNhcmTlm77niYfmlbDmja5cbiAgICBsZXQgdGFibGVJRCA9IDM2NTcxO1xuICAgIGxldCByZWNvcmRJRCA9ICc1YWZiMmQ0ZDY1YzBhZDY1MzU0YzZmNjMnO1xuXG4gICAgbGV0IFByb2R1Y3QgPSBuZXcgd3guQmFhUy5UYWJsZU9iamVjdCh0YWJsZUlEKTtcblxuICAgIFByb2R1Y3QuZ2V0KHJlY29yZElEKS50aGVuKFxuICAgICAgcmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgc2VsZi5pbWdVcmxBcnIgPSByZXMuZGF0YS5iYW5uZXI7XG4gICAgICAgIHNlbGYuY2FyZEltZ0FyciA9IHJlcy5kYXRhLmNhcmRJbWdBcnI7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UocmVzLmRhdGEudGVzdEpzb24pKTtcbiAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICB9XG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgY29uc29sZS5sb2coJ+WIsOW6leS6hicpO1xuICB9XG59XG4iXX0=