'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

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
      navigationBarTitleText: '星座canvas'
    }, _this.components = {}, _this.data = {
      windowHeight: '', //屏幕高度
      windowWidth: '' //屏幕宽度
    }, _this.computed = {}, _this.methods = {
      //跳到卡片页面（手绘）
      routerStars: function routerStars() {
        wx.navigateTo({
          url: '/appletsA/pages/video/drawing'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;

      //显示转发按钮
      wx.showShareMenu({
        withShareTicket: true
      });

      // 获取手机信息
      wx.getSystemInfo({
        success: function success(res) {
          self.windowHeight = res.windowHeight;
          self.windowWidth = res.windowWidth;
        }
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/stars/canvas'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwicm91dGVyU3RhcnMiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzZWxmIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNOQyxzQkFETSxFQUNVO0FBQ2hCQyxxQkFGTSxDQUVTO0FBRlQsSyxRQUtQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUjtBQUNBQyxpQkFGUSx5QkFFTTtBQUNaQyxXQUFHQyxVQUFILENBQWM7QUFDWkM7QUFEWSxTQUFkO0FBR0Q7QUFOTyxLOzs7Ozs2QkFTRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDs7QUFFSDtBQUNHSCxTQUFHSSxhQUFILENBQWlCO0FBQ2ZDLHlCQUFpQjtBQURGLE9BQWpCOztBQUlIO0FBQ0dMLFNBQUdNLGFBQUgsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkwsZUFBS1IsWUFBTCxHQUFvQmEsSUFBSWIsWUFBeEI7QUFDQVEsZUFBS1AsV0FBTCxHQUFtQlksSUFBSVosV0FBdkI7QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs2QkFFUTtBQUNQLFVBQUlPLE9BQU8sSUFBWDtBQUNEOzs7b0NBQ2U7QUFDZE0sY0FBUUMsR0FBUixDQUFZLEtBQVo7QUFDRDs7OztFQTVDZ0MsZUFBS0MsSTs7a0JBQW5CckIsSyIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pif5bqnY2FudmFzJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcblx0ICB3aW5kb3dIZWlnaHQ6YGAsLy/lsY/luZXpq5jluqZcblx0ICB3aW5kb3dXaWR0aDpgYCwvL+Wxj+W5leWuveW6plxuICB9O1xuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvL+i3s+WIsOWNoeeJh+mhtemdou+8iOaJi+e7mO+8iVxuICAgIHJvdXRlclN0YXJzKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9hcHBsZXRzQS9wYWdlcy92aWRlby9kcmF3aW5nYFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cblx0Ly/mmL7npLrovazlj5HmjInpkq5cbiAgICB3eC5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pO1xuXG5cdC8vIOiOt+WPluaJi+acuuS/oeaBr1xuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgICAgc2VsZi53aW5kb3dXaWR0aCA9IHJlcy53aW5kb3dXaWR0aDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gIH1cbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBjb25zb2xlLmxvZygn5Yiw5bqV5LqGJyk7XG4gIH1cbn1cbiJdfQ==