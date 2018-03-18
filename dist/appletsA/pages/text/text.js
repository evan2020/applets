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
      navigationBarTitleText: '文字逐行显示'
    }, _this.components = {}, _this.data = {
      //文字的全部内容
      content: '这是一个demo，测试逐行显示文字（打字机效果）',
      //要显示的文字内容
      text: '',
      //初始文字长度
      len: 1,
      //定时器
      timer: null
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'textShow',
    value: function textShow() {
      var self = this;
      var len = self.len;
      var textLen = self.content.length;
      var str = self.content;

      str = str.substr(0, len);
      self.text = str;
      len++;
      self.len = len;
      self.$apply();

      if (len > textLen) {

        //循环显示
        // self.len = 0;

        //清除定时器（让内容只显示一次）
        clearTimeout(self.timer);
      }

      // 设置每隔多久显示一个字（文字显示速度）
      self.timer = setTimeout(function () {
        self.textShow();
      }, 300);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      self.textShow();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/text/text'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJjb250ZW50IiwidGV4dCIsImxlbiIsInRpbWVyIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwic2VsZiIsInRleHRMZW4iLCJsZW5ndGgiLCJzdHIiLCJzdWJzdHIiLCIkYXBwbHkiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidGV4dFNob3ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTDtBQUNBQyxlQUFTLDBCQUZKO0FBR0w7QUFDQUMsWUFBTSxFQUpEO0FBS0w7QUFDQUMsV0FBSyxDQU5BO0FBT0w7QUFDQUMsYUFBTztBQVJGLEssUUFXUEMsUSxHQUFXLEUsUUE4QlhDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7OzsrQkE5QkU7QUFDVCxVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJTCxNQUFNSyxLQUFLTCxHQUFmO0FBQ0EsVUFBSU0sVUFBVUQsS0FBS1AsT0FBTCxDQUFhUyxNQUEzQjtBQUNBLFVBQUlDLE1BQU1ILEtBQUtQLE9BQWY7O0FBRUFVLFlBQU1BLElBQUlDLE1BQUosQ0FBVyxDQUFYLEVBQWNULEdBQWQsQ0FBTjtBQUNBSyxXQUFLTixJQUFMLEdBQVlTLEdBQVo7QUFDQVI7QUFDQUssV0FBS0wsR0FBTCxHQUFXQSxHQUFYO0FBQ0FLLFdBQUtLLE1BQUw7O0FBRUEsVUFBSVYsTUFBTU0sT0FBVixFQUFtQjs7QUFFakI7QUFDQTs7QUFFQTtBQUNBSyxxQkFBYU4sS0FBS0osS0FBbEI7QUFFRDs7QUFFRDtBQUNBSSxXQUFLSixLQUFMLEdBQWFXLFdBQVcsWUFBTTtBQUM1QlAsYUFBS1EsUUFBTDtBQUNELE9BRlksRUFFVixHQUZVLENBQWI7QUFHRDs7OzZCQU1RO0FBQ1AsVUFBSVIsT0FBTyxJQUFYO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQUlBLE9BQU8sSUFBWDtBQUNBQSxXQUFLUSxRQUFMO0FBQ0Q7Ozs7RUF6RGdDLGVBQUtDLEk7O2tCQUFuQnJCLEsiLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmloflrZfpgJDooYzmmL7npLonXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIC8v5paH5a2X55qE5YWo6YOo5YaF5a65XG4gICAgY29udGVudDogJ+i/meaYr+S4gOS4qmRlbW/vvIzmtYvor5XpgJDooYzmmL7npLrmloflrZfvvIjmiZPlrZfmnLrmlYjmnpzvvIknLFxuICAgIC8v6KaB5pi+56S655qE5paH5a2X5YaF5a65XG4gICAgdGV4dDogJycsXG4gICAgLy/liJ3lp4vmloflrZfplb/luqZcbiAgICBsZW46IDEsXG4gICAgLy/lrprml7blmahcbiAgICB0aW1lcjogbnVsbFxuICB9O1xuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgdGV4dFNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBsZW4gPSBzZWxmLmxlbjtcbiAgICBsZXQgdGV4dExlbiA9IHNlbGYuY29udGVudC5sZW5ndGg7XG4gICAgbGV0IHN0ciA9IHNlbGYuY29udGVudDtcblxuICAgIHN0ciA9IHN0ci5zdWJzdHIoMCwgbGVuKTtcbiAgICBzZWxmLnRleHQgPSBzdHI7XG4gICAgbGVuKys7XG4gICAgc2VsZi5sZW4gPSBsZW47XG4gICAgc2VsZi4kYXBwbHkoKTtcblxuICAgIGlmIChsZW4gPiB0ZXh0TGVuKSB7XG5cbiAgICAgIC8v5b6q546v5pi+56S6XG4gICAgICAvLyBzZWxmLmxlbiA9IDA7XG5cbiAgICAgIC8v5riF6Zmk5a6a5pe25Zmo77yI6K6p5YaF5a655Y+q5pi+56S65LiA5qyh77yJXG4gICAgICBjbGVhclRpbWVvdXQoc2VsZi50aW1lcik7XG5cbiAgICB9XG5cbiAgICAvLyDorr7nva7mr4/pmpTlpJrkuYXmmL7npLrkuIDkuKrlrZfvvIjmloflrZfmmL7npLrpgJ/luqbvvIlcbiAgICBzZWxmLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZWxmLnRleHRTaG93KCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIG1ldGhvZHMgPSB7fTtcblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi50ZXh0U2hvdygpO1xuICB9XG59XG4iXX0=