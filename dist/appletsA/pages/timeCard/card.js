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
      //原始json数据（日期）
      timedata: {},
      // 转化后的数组数据（日期）
      dataTimeArr: [{
        title: '',
        dayNum: 0,
        footerText: '',
        percentage: 0
      }]
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'dateTime',


    // 计算剩余时间
    value: function dateTime(name) {
      var self = this;
      var time = new Date();
      // 获取当前时间戳
      var timeNow = time.getTime();
      // 获取端午节时间戳
      self.timedata[name].dayNum = Number.parseInt((Date.parse(self.timedata[name].timeDate) - timeNow) / 1000 / 60 / 60 / 24);

      // 获取6月初和7月初时间戳
      var startDay = Date.parse(self.timedata[name].startDate);
      var lastDay = Date.parse(self.timedata[name].timeDate);
      // 获取本月进度百分比
      var percentage = (timeNow - startDay) / (lastDay - startDay);
      if (!Number.isNaN(percentage)) {
        self.timedata[name].percentage = (percentage * 100).toFixed(2) + '%';
      }
    }
  }, {
    key: 'getDateinfo',


    // 获取节日信息
    value: function getDateinfo() {
      var self = this;
      // 获取banner和card图片数据
      var tableID = 36571;
      var recordID = '5afb2d4d65c0ad65354c6f63';

      var Product = new wx.BaaS.TableObject(tableID);

      Product.get(recordID).then(function (res) {
        console.log(JSON.parse(res.data.testJson));
        self.timedata = JSON.parse(res.data.testJson);
        var dataTimeArr = [];
        for (var name in self.timedata) {
          self.dateTime(name);
          dataTimeArr.push(self.timedata[name]);
        }
        self.dataTimeArr = dataTimeArr;
        self.$apply();
      }, function (err) {
        console.log(err);
      });
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

      self.getDateinfo();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwid2luZG93SGVpZ2h0IiwidGltZWRhdGEiLCJkYXRhVGltZUFyciIsInRpdGxlIiwiZGF5TnVtIiwiZm9vdGVyVGV4dCIsInBlcmNlbnRhZ2UiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJuYW1lIiwic2VsZiIsInRpbWUiLCJEYXRlIiwidGltZU5vdyIsImdldFRpbWUiLCJOdW1iZXIiLCJwYXJzZUludCIsInBhcnNlIiwidGltZURhdGUiLCJzdGFydERheSIsInN0YXJ0RGF0ZSIsImxhc3REYXkiLCJpc05hTiIsInRvRml4ZWQiLCJ0YWJsZUlEIiwicmVjb3JkSUQiLCJQcm9kdWN0Iiwid3giLCJCYWFTIiwiVGFibGVPYmplY3QiLCJnZXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJyZXMiLCJ0ZXN0SnNvbiIsImRhdGVUaW1lIiwicHVzaCIsIiRhcHBseSIsImVyciIsIm9wdGlvbnMiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJnZXREYXRlaW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMO0FBQ0FDLHFCQUFlLElBRlY7QUFHTEMsZ0JBQVUsS0FITDtBQUlMQyxnQkFBVSxJQUpMO0FBS0xDLGdCQUFVLElBTEw7QUFNTDtBQUNBQyxvQkFBYyxFQVBUO0FBUUw7QUFDQUMsZ0JBQVUsRUFUTDtBQVVMO0FBQ0FDLG1CQUFhLENBQ1g7QUFDRUMsaUJBREY7QUFFRUMsZ0JBQU8sQ0FGVDtBQUdFQyxzQkFIRjtBQUlFQyxvQkFBVztBQUpiLE9BRFc7QUFYUixLLFFBcUVQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVMsRTs7Ozs7OztBQXBEVDs2QkFDU0MsSSxFQUFNO0FBQ2IsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSUMsT0FBTyxJQUFJQyxJQUFKLEVBQVg7QUFDQTtBQUNBLFVBQUlDLFVBQVVGLEtBQUtHLE9BQUwsRUFBZDtBQUNBO0FBQ0FKLFdBQUtWLFFBQUwsQ0FBY1MsSUFBZCxFQUFvQk4sTUFBcEIsR0FBNkJZLE9BQU9DLFFBQVAsQ0FDM0IsQ0FBQ0osS0FBS0ssS0FBTCxDQUFXUCxLQUFLVixRQUFMLENBQWNTLElBQWQsRUFBb0JTLFFBQS9CLElBQTJDTCxPQUE1QyxJQUF1RCxJQUF2RCxHQUE4RCxFQUE5RCxHQUFtRSxFQUFuRSxHQUF3RSxFQUQ3QyxDQUE3Qjs7QUFJQTtBQUNBLFVBQUlNLFdBQVdQLEtBQUtLLEtBQUwsQ0FBV1AsS0FBS1YsUUFBTCxDQUFjUyxJQUFkLEVBQW9CVyxTQUEvQixDQUFmO0FBQ0EsVUFBSUMsVUFBVVQsS0FBS0ssS0FBTCxDQUFXUCxLQUFLVixRQUFMLENBQWNTLElBQWQsRUFBb0JTLFFBQS9CLENBQWQ7QUFDQTtBQUNBLFVBQUliLGFBQWEsQ0FBQ1EsVUFBVU0sUUFBWCxLQUF3QkUsVUFBVUYsUUFBbEMsQ0FBakI7QUFDQSxVQUFJLENBQUNKLE9BQU9PLEtBQVAsQ0FBYWpCLFVBQWIsQ0FBTCxFQUErQjtBQUM3QkssYUFBS1YsUUFBTCxDQUFjUyxJQUFkLEVBQW9CSixVQUFwQixHQUFpQyxDQUFDQSxhQUFhLEdBQWQsRUFBbUJrQixPQUFuQixDQUEyQixDQUEzQixPQUFqQztBQUNEO0FBQ0Y7Ozs7O0FBRUQ7a0NBQ2E7QUFDWCxVQUFJYixPQUFLLElBQVQ7QUFDQTtBQUNBLFVBQUljLFVBQVUsS0FBZDtBQUNBLFVBQUlDLFdBQVcsMEJBQWY7O0FBRUEsVUFBSUMsVUFBVSxJQUFJQyxHQUFHQyxJQUFILENBQVFDLFdBQVosQ0FBd0JMLE9BQXhCLENBQWQ7O0FBRUFFLGNBQVFJLEdBQVIsQ0FBWUwsUUFBWixFQUFzQk0sSUFBdEIsQ0FDRSxlQUFPO0FBQ0xDLGdCQUFRQyxHQUFSLENBQVlDLEtBQUtqQixLQUFMLENBQVdrQixJQUFJekMsSUFBSixDQUFTMEMsUUFBcEIsQ0FBWjtBQUNBMUIsYUFBS1YsUUFBTCxHQUFnQmtDLEtBQUtqQixLQUFMLENBQVdrQixJQUFJekMsSUFBSixDQUFTMEMsUUFBcEIsQ0FBaEI7QUFDQSxZQUFJbkMsY0FBYyxFQUFsQjtBQUNBLGFBQUssSUFBSVEsSUFBVCxJQUFpQkMsS0FBS1YsUUFBdEIsRUFBZ0M7QUFDOUJVLGVBQUsyQixRQUFMLENBQWM1QixJQUFkO0FBQ0FSLHNCQUFZcUMsSUFBWixDQUFpQjVCLEtBQUtWLFFBQUwsQ0FBY1MsSUFBZCxDQUFqQjtBQUNEO0FBQ0RDLGFBQUtULFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0FTLGFBQUs2QixNQUFMO0FBQ0QsT0FYSCxFQVlFLGVBQU87QUFDTFAsZ0JBQVFDLEdBQVIsQ0FBWU8sR0FBWjtBQUNELE9BZEg7QUFnQkQ7OzsyQkFRTUMsTyxFQUFTO0FBQ2QsVUFBSS9CLE9BQU8sSUFBWDs7QUFFQTtBQUNBaUIsU0FBR2UsYUFBSCxDQUFpQjtBQUNmQyxpQkFBUyxpQkFBU1IsR0FBVCxFQUFjO0FBQ3JCekIsZUFBS1gsWUFBTCxHQUFvQm9DLElBQUlwQyxZQUF4QjtBQUNEO0FBSGMsT0FBakI7O0FBTUE0QixTQUFHaUIsYUFBSCxDQUFpQjtBQUNmQyx5QkFBaUI7QUFERixPQUFqQjs7QUFJQW5DLFdBQUtvQyxXQUFMO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQUlwQyxPQUFPLElBQVg7QUFDRDs7OztFQW5HZ0MsZUFBS3FDLEk7O2tCQUFuQnpELEsiLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflgJLorqHml7bljaHniYcnXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIC8v6L2u5pKt5Zu+6K6+572uXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgZHVyYXRpb246IDE1MDAsXG4gICAgLy8g5bGP5bmV6auY5bqmXG4gICAgd2luZG93SGVpZ2h0OiAnJyxcbiAgICAvL+WOn+Wni2pzb27mlbDmja7vvIjml6XmnJ/vvIlcbiAgICB0aW1lZGF0YToge30sXG4gICAgLy8g6L2s5YyW5ZCO55qE5pWw57uE5pWw5o2u77yI5pel5pyf77yJXG4gICAgZGF0YVRpbWVBcnI6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6YGAsXG4gICAgICAgIGRheU51bTowLFxuICAgICAgICBmb290ZXJUZXh0OmBgLFxuICAgICAgICBwZXJjZW50YWdlOjAsXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIC8vIOiuoeeul+WJqeS9meaXtumXtFxuICBkYXRlVGltZShuYW1lKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCB0aW1lID0gbmV3IERhdGUoKTtcbiAgICAvLyDojrflj5blvZPliY3ml7bpl7TmiLNcbiAgICBsZXQgdGltZU5vdyA9IHRpbWUuZ2V0VGltZSgpO1xuICAgIC8vIOiOt+WPluerr+WNiOiKguaXtumXtOaIs1xuICAgIHNlbGYudGltZWRhdGFbbmFtZV0uZGF5TnVtID0gTnVtYmVyLnBhcnNlSW50KFxuICAgICAgKERhdGUucGFyc2Uoc2VsZi50aW1lZGF0YVtuYW1lXS50aW1lRGF0ZSkgLSB0aW1lTm93KSAvIDEwMDAgLyA2MCAvIDYwIC8gMjRcbiAgICApO1xuXG4gICAgLy8g6I635Y+WNuaciOWIneWSjDfmnIjliJ3ml7bpl7TmiLNcbiAgICBsZXQgc3RhcnREYXkgPSBEYXRlLnBhcnNlKHNlbGYudGltZWRhdGFbbmFtZV0uc3RhcnREYXRlKTtcbiAgICBsZXQgbGFzdERheSA9IERhdGUucGFyc2Uoc2VsZi50aW1lZGF0YVtuYW1lXS50aW1lRGF0ZSk7XG4gICAgLy8g6I635Y+W5pys5pyI6L+b5bqm55m+5YiG5q+UXG4gICAgbGV0IHBlcmNlbnRhZ2UgPSAodGltZU5vdyAtIHN0YXJ0RGF5KSAvIChsYXN0RGF5IC0gc3RhcnREYXkpO1xuICAgIGlmICghTnVtYmVyLmlzTmFOKHBlcmNlbnRhZ2UpKSB7XG4gICAgICBzZWxmLnRpbWVkYXRhW25hbWVdLnBlcmNlbnRhZ2UgPSAocGVyY2VudGFnZSAqIDEwMCkudG9GaXhlZCgyKSArIGAlYDtcbiAgICB9XG4gIH07XG5cbiAgLy8g6I635Y+W6IqC5pel5L+h5oGvXG4gIGdldERhdGVpbmZvKCl7XG4gICAgbGV0IHNlbGY9dGhpcztcbiAgICAvLyDojrflj5ZiYW5uZXLlkoxjYXJk5Zu+54mH5pWw5o2uXG4gICAgbGV0IHRhYmxlSUQgPSAzNjU3MTtcbiAgICBsZXQgcmVjb3JkSUQgPSAnNWFmYjJkNGQ2NWMwYWQ2NTM1NGM2ZjYzJztcblxuICAgIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG5cbiAgICBQcm9kdWN0LmdldChyZWNvcmRJRCkudGhlbihcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UocmVzLmRhdGEudGVzdEpzb24pKTtcbiAgICAgICAgc2VsZi50aW1lZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEudGVzdEpzb24pO1xuICAgICAgICBsZXQgZGF0YVRpbWVBcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBzZWxmLnRpbWVkYXRhKSB7XG4gICAgICAgICAgc2VsZi5kYXRlVGltZShuYW1lKTtcbiAgICAgICAgICBkYXRhVGltZUFyci5wdXNoKHNlbGYudGltZWRhdGFbbmFtZV0pO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuZGF0YVRpbWVBcnIgPSBkYXRhVGltZUFycjtcbiAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7fTtcblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIC8vIOiOt+WPluaJi+acuuS/oeaBr1xuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICBzZWxmLmdldERhdGVpbmZvKCk7XG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgfVxufVxuIl19