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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW1nVXJsQXJyIiwiY2FyZEltZ0FyciIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJyb3V0ZXJDYXJkTW9tIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwicm91dGVyQ2FyZDUyMCIsInJvdXRlckNhcmREdyIsInJvdXRlckNhcmRGYXRoZXIiLCJyb3V0ZXJDYXJkTG92ZSIsInJvdXRlckNhcmRDaGlsZCIsImV2ZW50cyIsInNlbGYiLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwidGFibGVJRCIsInJlY29yZElEIiwiUHJvZHVjdCIsIkJhYVMiLCJUYWJsZU9iamVjdCIsImdldCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzIiwiYmFubmVyIiwiJGFwcGx5IiwiZXJyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0w7QUFDQUMsaUJBQVcsRUFGTjtBQUdMO0FBQ0FDLGtCQUFZLEVBSlA7QUFLTDtBQUNBQyxxQkFBZSxJQU5WO0FBT0xDLGdCQUFVLElBUEw7QUFRTEMsZ0JBQVUsSUFSTDtBQVNMQyxnQkFBVTtBQVRMLEssUUFZUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1I7QUFDQUMsbUJBRlEsMkJBRVE7QUFDZEMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDO0FBRFksU0FBZDtBQUdELE9BTk87OztBQVFSO0FBQ0FDLG1CQVRRLDJCQVNRO0FBQ2RILFdBQUdDLFVBQUgsQ0FBYztBQUNaQztBQURZLFNBQWQ7QUFHRCxPQWJPOzs7QUFlUjtBQUNBRSxrQkFoQlEsMEJBZ0JPO0FBQ2JKLFdBQUdDLFVBQUgsQ0FBYztBQUNaQztBQURZLFNBQWQ7QUFHRCxPQXBCTzs7O0FBc0JSO0FBQ0FHLHNCQXZCUSw4QkF1Qlc7QUFDakJMLFdBQUdDLFVBQUgsQ0FBYztBQUNaQztBQURZLFNBQWQ7QUFHRCxPQTNCTzs7O0FBNkJSO0FBQ0FJLG9CQTlCUSw0QkE4QlM7QUFDZk4sV0FBR0MsVUFBSCxDQUFjO0FBQ1pDO0FBRFksU0FBZDtBQUdELE9BbENPOzs7QUFvQ1I7QUFDQUsscUJBckNRLDZCQXFDVTtBQUNoQlAsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDO0FBRFksU0FBZDtBQUdEO0FBekNPLEssUUE0Q1ZNLE0sR0FBUyxFOzs7Ozs2QkFFQTtBQUNQLFVBQUlDLE9BQU8sSUFBWDs7QUFFQTtBQUNBVCxTQUFHVSxhQUFILENBQWlCO0FBQ2ZDLHlCQUFpQjtBQURGLE9BQWpCOztBQUlBO0FBQ0EsVUFBSUMsVUFBVSxLQUFkO0FBQ0EsVUFBSUMsV0FBVywwQkFBZjs7QUFFQSxVQUFJQyxVQUFVLElBQUlkLEdBQUdlLElBQUgsQ0FBUUMsV0FBWixDQUF3QkosT0FBeEIsQ0FBZDs7QUFFQUUsY0FBUUcsR0FBUixDQUFZSixRQUFaLEVBQXNCSyxJQUF0QixDQUNFLGVBQU87QUFDTEMsZ0JBQVFDLEdBQVIsQ0FBWUMsR0FBWjtBQUNBWixhQUFLbEIsU0FBTCxHQUFpQjhCLElBQUkvQixJQUFKLENBQVNnQyxNQUExQjtBQUNBYixhQUFLakIsVUFBTCxHQUFrQjZCLElBQUkvQixJQUFKLENBQVNFLFVBQTNCO0FBQ0FpQixhQUFLYyxNQUFMO0FBQ0QsT0FOSCxFQU9FLGVBQU87QUFDTEosZ0JBQVFDLEdBQVIsQ0FBWUksR0FBWjtBQUNELE9BVEg7QUFXRDs7OzZCQUVRO0FBQ1AsVUFBSWYsT0FBTyxJQUFYO0FBR0Q7OztvQ0FDZTtBQUNkVSxjQUFRQyxHQUFSLENBQVksS0FBWjtBQUNEOzs7O0VBcEdnQyxlQUFLSyxJOztrQkFBbkJ2QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aymea8jydcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgLy9iYW5uZXLlm77niYdcbiAgICBpbWdVcmxBcnI6IFtdLFxuICAgIC8v6IqC5pel5Y2h54mH5Zu+54mHXG4gICAgY2FyZEltZ0FycjogW10sXG4gICAgLy/ova7mkq3lm77orr7nva5cbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiA1MDAwLFxuICAgIGR1cmF0aW9uOiAxNTAwXG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5q+N5Lqy6IqC77yJXG4gICAgcm91dGVyQ2FyZE1vbSgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvZGV0YWlscy9kZXRhaWxzYFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yINTIw77yJXG4gICAgcm91dGVyQ2FyZDUyMCgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy81MjBgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIg1MjDvvIlcbiAgICByb3V0ZXJDYXJkRHcoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvZHVhbnd1YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI54i25Lqy6IqC77yJXG4gICAgcm91dGVyQ2FyZEZhdGhlcigpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9mYXRoZXJgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjkuIPlpJXvvIlcbiAgICByb3V0ZXJDYXJkTG92ZSgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9pbG92ZXlvdWBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOWEv+erpeiKgu+8iVxuICAgIHJvdXRlckNhcmRDaGlsZCgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvYXBwbGV0c0EvcGFnZXMvZGV0YWlscy9jaGlsZGBcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy/mmL7npLrovazlj5HmjInpkq5cbiAgICB3eC5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8g6I635Y+WYmFubmVy5ZKMY2FyZOWbvueJh+aVsOaNrlxuICAgIGxldCB0YWJsZUlEID0gMzY1NzE7XG4gICAgbGV0IHJlY29yZElEID0gJzVhZmIyZDRkNjVjMGFkNjUzNTRjNmY2Myc7XG5cbiAgICBsZXQgUHJvZHVjdCA9IG5ldyB3eC5CYWFTLlRhYmxlT2JqZWN0KHRhYmxlSUQpO1xuXG4gICAgUHJvZHVjdC5nZXQocmVjb3JkSUQpLnRoZW4oXG4gICAgICByZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBzZWxmLmltZ1VybEFyciA9IHJlcy5kYXRhLmJhbm5lcjtcbiAgICAgICAgc2VsZi5jYXJkSW1nQXJyID0gcmVzLmRhdGEuY2FyZEltZ0FycjtcbiAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgXG4gIH1cbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBjb25zb2xlLmxvZygn5Yiw5bqV5LqGJyk7XG4gIH1cbn1cbiJdfQ==