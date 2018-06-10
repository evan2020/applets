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
      navigationBarTitleText: '倒计时卡片'
    }, _this.components = {}, _this.data = {
      //轮播图设置
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1500,
      // 屏幕高度
      windowHeight: '',
      // 端午节倒计时
      dayNum_duanwu: 0,
      // 父亲节倒计时
      dayNum_father: 0,
      //6月末倒计时
      dayNum_last: 0,
      // 本月进度
      percentage: 0
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'dateTime',
    value: function dateTime() {
      console.log('\u83B7\u53D6\u65F6\u95F4');
      var self = this;
      var time = new Date();
      // 获取当前时间戳
      var timeNow = time.getTime();
      console.log(timeNow);
      // 获取端午节时间戳
      var duanwu = Date.parse('June 18, 2018');
      console.log(duanwu);
      // 获取间隔天数
      var dayNum_duanwu = (duanwu - timeNow) / 1000 / 60 / 60 / 24;
      console.log(Number.parseInt(dayNum_duanwu));
      // 获取父亲节时间戳
      var father = Date.parse('June 19, 2018');
      console.log(father);
      // 获取间隔天数
      var dayNum_father = (father - timeNow) / 1000 / 60 / 60 / 24;
      console.log(Number.parseInt(dayNum_father));
      // 获取6月初和7月初时间戳
      var startDay = Date.parse('June 1, 2018');
      console.log(startDay);
      var lastDay = Date.parse('July 1, 2018');
      console.log(lastDay);
      // 获取间隔天数
      var dayNum_last = (lastDay - timeNow) / 1000 / 60 / 60 / 24;
      console.log(Number.parseInt(dayNum_last));
      // 获取本月进度百分比
      var percentage = (timeNow - startDay) / (lastDay - startDay);
      console.log((percentage * 100).toFixed(2));
      // 赋值
      self.dayNum_duanwu = Number.parseInt(dayNum_duanwu);
      self.dayNum_father = Number.parseInt(dayNum_father);
      self.dayNum_last = Number.parseInt(dayNum_last);
      self.percentage = (percentage * 100).toFixed(2);
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var self = this;

      // 获取手机信息
      wx.getSystemInfo({
        success: function success(res) {
          self.windowHeight = res.windowHeight;
        }
      });

      wx.showShareMenu({
        withShareTicket: true
      });

      self.dateTime();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/timeCard/card'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwid2luZG93SGVpZ2h0IiwiZGF5TnVtX2R1YW53dSIsImRheU51bV9mYXRoZXIiLCJkYXlOdW1fbGFzdCIsInBlcmNlbnRhZ2UiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJjb25zb2xlIiwibG9nIiwic2VsZiIsInRpbWUiLCJEYXRlIiwidGltZU5vdyIsImdldFRpbWUiLCJkdWFud3UiLCJwYXJzZSIsIk51bWJlciIsInBhcnNlSW50IiwiZmF0aGVyIiwic3RhcnREYXkiLCJsYXN0RGF5IiwidG9GaXhlZCIsIm9wdGlvbnMiLCJ3eCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsImRhdGVUaW1lIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0w7QUFDQUMscUJBQWUsSUFGVjtBQUdMQyxnQkFBVSxLQUhMO0FBSUxDLGdCQUFVLElBSkw7QUFLTEMsZ0JBQVUsSUFMTDtBQU1MO0FBQ0FDLG9CQUFjLEVBUFQ7QUFRTDtBQUNBQyxxQkFBZSxDQVRWO0FBVUw7QUFDQUMscUJBQWUsQ0FYVjtBQVlMO0FBQ0FDLG1CQUFhLENBYlI7QUFjTDtBQUNBQyxrQkFBWTtBQWZQLEssUUF1RFBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7OzsrQkF6Q0U7QUFDVEMsY0FBUUMsR0FBUjtBQUNBLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFVBQUlDLE9BQU8sSUFBSUMsSUFBSixFQUFYO0FBQ0E7QUFDQSxVQUFJQyxVQUFVRixLQUFLRyxPQUFMLEVBQWQ7QUFDQU4sY0FBUUMsR0FBUixDQUFZSSxPQUFaO0FBQ0E7QUFDQSxVQUFJRSxTQUFTSCxLQUFLSSxLQUFMLENBQVcsZUFBWCxDQUFiO0FBQ0FSLGNBQVFDLEdBQVIsQ0FBWU0sTUFBWjtBQUNBO0FBQ0EsVUFBSWQsZ0JBQWdCLENBQUNjLFNBQVNGLE9BQVYsSUFBcUIsSUFBckIsR0FBNEIsRUFBNUIsR0FBaUMsRUFBakMsR0FBc0MsRUFBMUQ7QUFDQUwsY0FBUUMsR0FBUixDQUFZUSxPQUFPQyxRQUFQLENBQWdCakIsYUFBaEIsQ0FBWjtBQUNBO0FBQ0EsVUFBSWtCLFNBQVNQLEtBQUtJLEtBQUwsQ0FBVyxlQUFYLENBQWI7QUFDQVIsY0FBUUMsR0FBUixDQUFZVSxNQUFaO0FBQ0E7QUFDQSxVQUFJakIsZ0JBQWdCLENBQUNpQixTQUFTTixPQUFWLElBQXFCLElBQXJCLEdBQTRCLEVBQTVCLEdBQWlDLEVBQWpDLEdBQXNDLEVBQTFEO0FBQ0FMLGNBQVFDLEdBQVIsQ0FBWVEsT0FBT0MsUUFBUCxDQUFnQmhCLGFBQWhCLENBQVo7QUFDQTtBQUNBLFVBQUlrQixXQUFXUixLQUFLSSxLQUFMLENBQVcsY0FBWCxDQUFmO0FBQ0FSLGNBQVFDLEdBQVIsQ0FBWVcsUUFBWjtBQUNBLFVBQUlDLFVBQVVULEtBQUtJLEtBQUwsQ0FBVyxjQUFYLENBQWQ7QUFDQVIsY0FBUUMsR0FBUixDQUFZWSxPQUFaO0FBQ0E7QUFDQSxVQUFJbEIsY0FBYyxDQUFDa0IsVUFBVVIsT0FBWCxJQUFzQixJQUF0QixHQUE2QixFQUE3QixHQUFrQyxFQUFsQyxHQUF1QyxFQUF6RDtBQUNBTCxjQUFRQyxHQUFSLENBQVlRLE9BQU9DLFFBQVAsQ0FBZ0JmLFdBQWhCLENBQVo7QUFDQTtBQUNBLFVBQUlDLGFBQWEsQ0FBQ1MsVUFBVU8sUUFBWCxLQUF3QkMsVUFBVUQsUUFBbEMsQ0FBakI7QUFDQVosY0FBUUMsR0FBUixDQUFZLENBQUNMLGFBQWEsR0FBZCxFQUFtQmtCLE9BQW5CLENBQTJCLENBQTNCLENBQVo7QUFDQTtBQUNBWixXQUFLVCxhQUFMLEdBQXFCZ0IsT0FBT0MsUUFBUCxDQUFnQmpCLGFBQWhCLENBQXJCO0FBQ0FTLFdBQUtSLGFBQUwsR0FBcUJlLE9BQU9DLFFBQVAsQ0FBZ0JoQixhQUFoQixDQUFyQjtBQUNBUSxXQUFLUCxXQUFMLEdBQW1CYyxPQUFPQyxRQUFQLENBQWdCZixXQUFoQixDQUFuQjtBQUNBTyxXQUFLTixVQUFMLEdBQWtCLENBQUNBLGFBQWEsR0FBZCxFQUFtQmtCLE9BQW5CLENBQTJCLENBQTNCLENBQWxCO0FBQ0Q7OzsyQkFRTUMsTyxFQUFTO0FBQ2QsVUFBSWIsT0FBTyxJQUFYOztBQUVBO0FBQ0FjLFNBQUdDLGFBQUgsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmpCLGVBQUtWLFlBQUwsR0FBb0IyQixJQUFJM0IsWUFBeEI7QUFDRDtBQUhjLE9BQWpCOztBQU1Bd0IsU0FBR0ksYUFBSCxDQUFpQjtBQUNmQyx5QkFBaUI7QUFERixPQUFqQjs7QUFJQW5CLFdBQUtvQixRQUFMO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQUlwQixPQUFPLElBQVg7QUFDRDs7OztFQXJGZ0MsZUFBS3FCLEk7O2tCQUFuQnhDLEsiLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflgJLorqHml7bljaHniYcnXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIC8v6L2u5pKt5Zu+6K6+572uXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgZHVyYXRpb246IDE1MDAsXG4gICAgLy8g5bGP5bmV6auY5bqmXG4gICAgd2luZG93SGVpZ2h0OiAnJyxcbiAgICAvLyDnq6/ljYjoioLlgJLorqHml7ZcbiAgICBkYXlOdW1fZHVhbnd1OiAwLFxuICAgIC8vIOeItuS6suiKguWAkuiuoeaXtlxuICAgIGRheU51bV9mYXRoZXI6IDAsXG4gICAgLy825pyI5pyr5YCS6K6h5pe2XG4gICAgZGF5TnVtX2xhc3Q6IDAsXG4gICAgLy8g5pys5pyI6L+b5bqmXG4gICAgcGVyY2VudGFnZTogMFxuICB9O1xuXG4gIGRhdGVUaW1lKCkge1xuICAgIGNvbnNvbGUubG9nKGDojrflj5bml7bpl7RgKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIC8vIOiOt+WPluW9k+WJjeaXtumXtOaIs1xuICAgIGxldCB0aW1lTm93ID0gdGltZS5nZXRUaW1lKCk7XG4gICAgY29uc29sZS5sb2codGltZU5vdyk7XG4gICAgLy8g6I635Y+W56uv5Y2I6IqC5pe26Ze05oizXG4gICAgbGV0IGR1YW53dSA9IERhdGUucGFyc2UoJ0p1bmUgMTgsIDIwMTgnKTtcbiAgICBjb25zb2xlLmxvZyhkdWFud3UpO1xuICAgIC8vIOiOt+WPlumXtOmalOWkqeaVsFxuICAgIGxldCBkYXlOdW1fZHVhbnd1ID0gKGR1YW53dSAtIHRpbWVOb3cpIC8gMTAwMCAvIDYwIC8gNjAgLyAyNDtcbiAgICBjb25zb2xlLmxvZyhOdW1iZXIucGFyc2VJbnQoZGF5TnVtX2R1YW53dSkpO1xuICAgIC8vIOiOt+WPlueItuS6suiKguaXtumXtOaIs1xuICAgIGxldCBmYXRoZXIgPSBEYXRlLnBhcnNlKCdKdW5lIDE5LCAyMDE4Jyk7XG4gICAgY29uc29sZS5sb2coZmF0aGVyKTtcbiAgICAvLyDojrflj5bpl7TpmpTlpKnmlbBcbiAgICBsZXQgZGF5TnVtX2ZhdGhlciA9IChmYXRoZXIgLSB0aW1lTm93KSAvIDEwMDAgLyA2MCAvIDYwIC8gMjQ7XG4gICAgY29uc29sZS5sb2coTnVtYmVyLnBhcnNlSW50KGRheU51bV9mYXRoZXIpKTtcbiAgICAvLyDojrflj5Y25pyI5Yid5ZKMN+aciOWIneaXtumXtOaIs1xuICAgIGxldCBzdGFydERheSA9IERhdGUucGFyc2UoJ0p1bmUgMSwgMjAxOCcpO1xuICAgIGNvbnNvbGUubG9nKHN0YXJ0RGF5KTtcbiAgICBsZXQgbGFzdERheSA9IERhdGUucGFyc2UoJ0p1bHkgMSwgMjAxOCcpO1xuICAgIGNvbnNvbGUubG9nKGxhc3REYXkpO1xuICAgIC8vIOiOt+WPlumXtOmalOWkqeaVsFxuICAgIGxldCBkYXlOdW1fbGFzdCA9IChsYXN0RGF5IC0gdGltZU5vdykgLyAxMDAwIC8gNjAgLyA2MCAvIDI0O1xuICAgIGNvbnNvbGUubG9nKE51bWJlci5wYXJzZUludChkYXlOdW1fbGFzdCkpO1xuICAgIC8vIOiOt+WPluacrOaciOi/m+W6pueZvuWIhuavlFxuICAgIGxldCBwZXJjZW50YWdlID0gKHRpbWVOb3cgLSBzdGFydERheSkgLyAobGFzdERheSAtIHN0YXJ0RGF5KTtcbiAgICBjb25zb2xlLmxvZygocGVyY2VudGFnZSAqIDEwMCkudG9GaXhlZCgyKSk7XG4gICAgLy8g6LWL5YC8XG4gICAgc2VsZi5kYXlOdW1fZHVhbnd1ID0gTnVtYmVyLnBhcnNlSW50KGRheU51bV9kdWFud3UpO1xuICAgIHNlbGYuZGF5TnVtX2ZhdGhlciA9IE51bWJlci5wYXJzZUludChkYXlOdW1fZmF0aGVyKTtcbiAgICBzZWxmLmRheU51bV9sYXN0ID0gTnVtYmVyLnBhcnNlSW50KGRheU51bV9sYXN0KTtcbiAgICBzZWxmLnBlcmNlbnRhZ2UgPSAocGVyY2VudGFnZSAqIDEwMCkudG9GaXhlZCgyKTtcbiAgfVxuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHt9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8g6I635Y+W5omL5py65L+h5oGvXG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi53aW5kb3dIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KTtcblxuICAgIHNlbGYuZGF0ZVRpbWUoKTtcbiAgfVxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICB9XG59XG4iXX0=