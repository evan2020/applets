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
      navigationBarTitleText: '星座物语'
    }, _this.components = {}, _this.data = {}, _this.computed = {}, _this.methods = {
      //跳到星座canvas页面
      routerStars: function routerStars() {
        wx.navigateTo({
          url: '/appletsA/pages/stars/canvas'
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/stars/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwicm91dGVyU3RhcnMiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJldmVudHMiLCJzZWxmIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU8sRSxRQUVQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUjtBQUNBQyxpQkFGUSx5QkFFTTtBQUNaQyxXQUFHQyxVQUFILENBQWM7QUFDWkM7QUFEWSxTQUFkO0FBR0Q7QUFOTyxLLFFBU1ZDLE0sR0FBUyxFOzs7Ozs2QkFFQTtBQUNQLFVBQUlDLE9BQU8sSUFBWDs7QUFFQTtBQUNBSixTQUFHSyxhQUFILENBQWlCO0FBQ2ZDLHlCQUFpQjtBQURGLE9BQWpCO0FBR0Q7Ozs2QkFFUTtBQUNQLFVBQUlGLE9BQU8sSUFBWDtBQUNEOzs7b0NBQ2U7QUFDZEcsY0FBUUMsR0FBUixDQUFZLEtBQVo7QUFDRDs7OztFQW5DZ0MsZUFBS0MsSTs7a0JBQW5CakIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmmJ/luqfnianor60nXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge307XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIC8v6Lez5Yiw5pif5bqnY2FudmFz6aG16Z2iXG4gICAgcm91dGVyU3RhcnMoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL2FwcGxldHNBL3BhZ2VzL3N0YXJzL2NhbnZhc2BcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy/mmL7npLrovazlj5HmjInpkq5cbiAgICB3eC5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgfVxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGNvbnNvbGUubG9nKCfliLDlupXkuoYnKTtcbiAgfVxufVxuIl19