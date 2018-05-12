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
      imgUrls: ['https://om83cysj8.qnssl.com/15223107438967665.jpg', 'https://om83cysj8.qnssl.com/ChMkJ1bKxYWIckH4AAF86HwJVvYAALHXAP96qIAAX0A162.jpg', 'https://om83cysj8.qnssl.com/1_22vs0__.jpg'],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1500
    }, _this.computed = {}, _this.methods = {
      routerCard: function routerCard() {
        console.log('跳到卡片页面');
        wx.navigateTo({
          url: '/pages/details/details'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW1nVXJscyIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJyb3V0ZXJDYXJkIiwiY29uc29sZSIsImxvZyIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImV2ZW50cyIsInNlbGYiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsZUFBUyxDQUNQLG1EQURPLEVBRVAsZ0ZBRk8sRUFHUCwyQ0FITyxDQURKO0FBTUxDLHFCQUFlLElBTlY7QUFPTEMsZ0JBQVUsSUFQTDtBQVFMQyxnQkFBVSxJQVJMO0FBU0xDLGdCQUFVO0FBVEwsSyxRQVlQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0s7QUFDWEMsZ0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FDLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdEO0FBTk8sSyxRQVNWQyxNLEdBQVMsRTs7Ozs7NkJBRUE7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDRDs7OztFQWpDZ0MsZUFBS0MsSTs7a0JBQW5CcEIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmspnmvI8nXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIGltZ1VybHM6IFtcbiAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vMTUyMjMxMDc0Mzg5Njc2NjUuanBnJyxcbiAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vQ2hNa0oxYkt4WVdJY2tINEFBRjg2SHdKVnZZQUFMSFhBUDk2cUlBQVgwQTE2Mi5qcGcnLFxuICAgICAgJ2h0dHBzOi8vb204M2N5c2o4LnFuc3NsLmNvbS8xXzIydnMwX18uanBnJ1xuICAgIF0sXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogNTAwMCxcbiAgICBkdXJhdGlvbjogMTUwMFxuICB9O1xuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICByb3V0ZXJDYXJkKCkge1xuICAgICAgY29uc29sZS5sb2coJ+i3s+WIsOWNoeeJh+mhtemdoicpO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9kZXRhaWxzL2RldGFpbHMnXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgfVxufVxuIl19