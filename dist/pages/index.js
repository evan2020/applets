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
        var type = 'CardDw';
        wx.navigateTo({
          url: '/appletsB/pages/text/text?type=' + type
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW1nVXJsQXJyIiwiY2FyZEltZ0FyciIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJyb3V0ZXJIZWxsbyIsImUiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInVybCIsInd4IiwibmF2aWdhdGVUbyIsInJvdXRlckNhcmREcmF3aW5nIiwicm91dGVyQ2FyZFZpZGVvIiwicm91dGVyQ2FyZE1vbSIsInJvdXRlckNhcmQ1MjAiLCJyb3V0ZXJDYXJkQmlydGhkYXkiLCJyb3V0ZXJDYXJkUmVtZW1iZXIiLCJyb3V0ZXJDYXJkRHciLCJ0eXBlIiwicm91dGVyQ2FyZEZhdGhlciIsInJvdXRlckNhcmRMb3ZlIiwicm91dGVyQ2FyZENoaWxkIiwiZXZlbnRzIiwic2VsZiIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJ0YWJsZUlEIiwicmVjb3JkSUQiLCJQcm9kdWN0IiwiQmFhUyIsIlRhYmxlT2JqZWN0IiwiZ2V0IiwidGhlbiIsInJlcyIsImJhbm5lciIsIiRhcHBseSIsImVyciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMO0FBQ0FDLGlCQUFXLEVBRk47QUFHTDtBQUNBQyxrQkFBWSxFQUpQO0FBS0w7QUFDQUMscUJBQWUsSUFOVjtBQU9MQyxnQkFBVSxJQVBMO0FBUUxDLGdCQUFVLElBUkw7QUFTTEMsZ0JBQVU7QUFUTCxLLFFBWVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSO0FBQ0E7QUFDQUMsaUJBSFEsdUJBR0lDLENBSEosRUFHTztBQUNiQyxnQkFBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0EsWUFBSUcsUUFBUUgsRUFBRUksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXBDO0FBQ0EsWUFBSUcseURBQUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxXQUFHQyxVQUFILENBQWM7QUFDWkYsa0RBQXNDQTtBQUQxQixTQUFkO0FBR0QsT0FqQk87OztBQW1CUjtBQUNBRyx1QkFwQlEsK0JBb0JZO0FBQ2xCRixXQUFHQyxVQUFILENBQWM7QUFDWkY7QUFEWSxTQUFkO0FBR0QsT0F4Qk87OztBQTBCUDtBQUNESSxxQkEzQlEsNkJBMkJVO0FBQ2hCSCxXQUFHQyxVQUFILENBQWM7QUFDWkY7QUFEWSxTQUFkO0FBR0QsT0EvQk87OztBQWlDUjtBQUNBSyxtQkFsQ1EsMkJBa0NRO0FBQ2RKLFdBQUdDLFVBQUgsQ0FBYztBQUNaRjtBQURZLFNBQWQ7QUFHRCxPQXRDTzs7O0FBd0NSO0FBQ0FNLG1CQXpDUSwyQkF5Q1E7QUFDZEwsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGO0FBRFksU0FBZDtBQUdELE9BN0NPOzs7QUErQ1I7QUFDQU8sd0JBaERRLGdDQWdEYTtBQUNuQk4sV0FBR0MsVUFBSCxDQUFjO0FBQ1pGO0FBRFksU0FBZDtBQUdELE9BcERPOzs7QUFzRFI7QUFDQVEsd0JBdkRRLGdDQXVEYTtBQUNuQlAsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGO0FBRFksU0FBZDtBQUdELE9BM0RPOzs7QUE2RFI7QUFDQVMsa0JBOURRLDBCQThETztBQUNiLFlBQUlDLGVBQUo7QUFDQVQsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGLG1EQUF1Q1U7QUFEM0IsU0FBZDtBQUdELE9BbkVPOzs7QUFxRVI7QUFDQUMsc0JBdEVRLDhCQXNFVztBQUNqQlYsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGO0FBRFksU0FBZDtBQUdELE9BMUVPOzs7QUE0RVI7QUFDQVksb0JBN0VRLDRCQTZFUztBQUNmWCxXQUFHQyxVQUFILENBQWM7QUFDWkY7QUFEWSxTQUFkO0FBR0QsT0FqRk87OztBQW1GUjtBQUNBYSxxQkFwRlEsNkJBb0ZVO0FBQ2hCWixXQUFHQyxVQUFILENBQWM7QUFDWkY7QUFEWSxTQUFkO0FBR0Q7QUF4Rk8sSyxRQTJGVmMsTSxHQUFTLEU7Ozs7OzZCQUVBO0FBQ1AsVUFBSUMsT0FBTyxJQUFYOztBQUVBO0FBQ0FkLFNBQUdlLGFBQUgsQ0FBaUI7QUFDZkMseUJBQWlCO0FBREYsT0FBakI7O0FBSUE7QUFDQSxVQUFJQyxVQUFVLEtBQWQ7QUFDQSxVQUFJQyxXQUFXLDBCQUFmOztBQUVBLFVBQUlDLFVBQVUsSUFBSW5CLEdBQUdvQixJQUFILENBQVFDLFdBQVosQ0FBd0JKLE9BQXhCLENBQWQ7O0FBRUFFLGNBQVFHLEdBQVIsQ0FBWUosUUFBWixFQUFzQkssSUFBdEIsQ0FDRSxlQUFPO0FBQ0w3QixnQkFBUUMsR0FBUixDQUFZNkIsR0FBWjtBQUNBVixhQUFLOUIsU0FBTCxHQUFpQndDLElBQUl6QyxJQUFKLENBQVMwQyxNQUExQjtBQUNBWCxhQUFLN0IsVUFBTCxHQUFrQnVDLElBQUl6QyxJQUFKLENBQVNFLFVBQTNCO0FBQ0E2QixhQUFLWSxNQUFMO0FBQ0QsT0FOSCxFQU9FLGVBQU87QUFDTGhDLGdCQUFRQyxHQUFSLENBQVlnQyxHQUFaO0FBQ0QsT0FUSDtBQVdEOzs7NkJBRVE7QUFDUCxVQUFJYixPQUFPLElBQVg7QUFDRDs7O29DQUNlO0FBQ2RwQixjQUFRQyxHQUFSLENBQVksS0FBWjtBQUNEOzs7O0VBakpnQyxlQUFLaUMsSTs7a0JBQW5CakQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmspnmvI8nXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIC8vYmFubmVy5Zu+54mHXG4gICAgaW1nVXJsQXJyOiBbXSxcbiAgICAvL+iKguaXpeWNoeeJh+WbvueJh1xuICAgIGNhcmRJbWdBcnI6IFtdLFxuICAgIC8v6L2u5pKt5Zu+6K6+572uXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogNTAwMCxcbiAgICBkdXJhdGlvbjogMTUwMFxuICB9O1xuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDova7mkq3lm77ot7PovaxcbiAgICAvL2Jhbm5lcjHot7NcbiAgICByb3V0ZXJIZWxsbyhlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgbGV0IHVybCA9IGBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vZXhwcmVzcy9pbmRleC5odG1sYDtcbiAgICAgIC8vIGlmKGluZGV4PT0wKXtcbiAgICAgIC8vICAgdXJsPWBodHRwczovL3NoYWxvdS5zbWFsbHpoaXl1bi5jb20vZW1vdGlvbmFsUGFydGljbGVzL2luZGV4Lmh0bWxgO1xuICAgICAgLy8gfWVsc2UgaWYoaW5kZXg9PTEpe1xuICAgICAgLy8gICB1cmw9YGh0dHBzOi8vc2hhbG91LnNtYWxsemhpeXVuLmNvbS9leHByZXNzL2luZGV4Lmh0bWxgO1xuICAgICAgLy8gfWVsc2UgaWYoaW5kZXg9PTIpe1xuICAgICAgLy8gICB1cmw9YGh0dHBzOi8vc2hhbG91LnNtYWxsemhpeXVuLmNvbS9sb3R0ZXJ5L2xvdHRlcnkuaHRtbGA7XG4gICAgICAvLyB9XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNBL3BhZ2VzL3dlYi9oZWxsbz91cmw9JHt1cmx9YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5omL57uY77yJXG4gICAgcm91dGVyQ2FyZERyYXdpbmcoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNBL3BhZ2VzL3ZpZGVvL2RyYXdpbmdgXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5q+V5Lia5a2j77yJXG4gICAgcm91dGVyQ2FyZFZpZGVvKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy92aWRlby9pbmRleGBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOavjeS6suiKgu+8iVxuICAgIHJvdXRlckNhcmRNb20oKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL3BhZ2VzL2RldGFpbHMvZGV0YWlsc2BcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iDUyMO+8iVxuICAgIHJvdXRlckNhcmQ1MjAoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNBL3BhZ2VzL2RldGFpbHMvNTIwYFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI55Sf5pel6LS65Y2h77yJXG4gICAgcm91dGVyQ2FyZEJpcnRoZGF5KCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2JpcnRoZGF5YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI57qq5b+15pel77yJXG4gICAgcm91dGVyQ2FyZFJlbWVtYmVyKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL3JlbWVtYmVyYFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI56uv5Y2I77yJXG4gICAgcm91dGVyQ2FyZER3KCkge1xuICAgICAgbGV0IHR5cGU9YENhcmREd2A7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNCL3BhZ2VzL3RleHQvdGV4dD90eXBlPSR7dHlwZX1gXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy/ot7PliLDljaHniYfpobXpnaLvvIjniLbkurLoioLvvIlcbiAgICByb3V0ZXJDYXJkRmF0aGVyKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2ZhdGhlcmBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOS4g+Wkle+8iVxuICAgIHJvdXRlckNhcmRMb3ZlKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2lsb3ZleW91YFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v6Lez5Yiw5Y2h54mH6aG16Z2i77yI5YS/56ul6IqC77yJXG4gICAgcm91dGVyQ2FyZENoaWxkKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2NoaWxkYFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvL+aYvuekuui9rOWPkeaMiemSrlxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5ZiYW5uZXLlkoxjYXJk5Zu+54mH5pWw5o2uXG4gICAgbGV0IHRhYmxlSUQgPSAzNjU3MTtcbiAgICBsZXQgcmVjb3JkSUQgPSAnNWFmYjJkNGQ2NWMwYWQ2NTM1NGM2ZjYzJztcblxuICAgIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG5cbiAgICBQcm9kdWN0LmdldChyZWNvcmRJRCkudGhlbihcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHNlbGYuaW1nVXJsQXJyID0gcmVzLmRhdGEuYmFubmVyO1xuICAgICAgICBzZWxmLmNhcmRJbWdBcnIgPSByZXMuZGF0YS5jYXJkSW1nQXJyO1xuICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gIH1cbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBjb25zb2xlLmxvZygn5Yiw5bqV5LqGJyk7XG4gIH1cbn1cbiJdfQ==