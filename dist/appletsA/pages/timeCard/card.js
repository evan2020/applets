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
        startDate: '',
        timeDate: 'June 19, 2018',
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

    // 获取节日信息

  }, {
    key: 'getDateinfo',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwid2luZG93SGVpZ2h0IiwidGltZWRhdGEiLCJkYXRhVGltZUFyciIsInRpdGxlIiwic3RhcnREYXRlIiwidGltZURhdGUiLCJkYXlOdW0iLCJmb290ZXJUZXh0IiwicGVyY2VudGFnZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsIm5hbWUiLCJzZWxmIiwidGltZSIsIkRhdGUiLCJ0aW1lTm93IiwiZ2V0VGltZSIsIk51bWJlciIsInBhcnNlSW50IiwicGFyc2UiLCJzdGFydERheSIsImxhc3REYXkiLCJpc05hTiIsInRvRml4ZWQiLCJ0YWJsZUlEIiwicmVjb3JkSUQiLCJQcm9kdWN0Iiwid3giLCJCYWFTIiwiVGFibGVPYmplY3QiLCJnZXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJyZXMiLCJ0ZXN0SnNvbiIsImRhdGVUaW1lIiwicHVzaCIsIiRhcHBseSIsImVyciIsIm9wdGlvbnMiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJnZXREYXRlaW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMO0FBQ0FDLHFCQUFlLElBRlY7QUFHTEMsZ0JBQVUsS0FITDtBQUlMQyxnQkFBVSxJQUpMO0FBS0xDLGdCQUFVLElBTEw7QUFNTDtBQUNBQyxvQkFBYyxFQVBUO0FBUUw7QUFDQUMsZ0JBQVUsRUFUTDtBQVVMO0FBQ0FDLG1CQUFhLENB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eSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflgJLorqHml7bljaHniYcnXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIC8v6L2u5pKt5Zu+6K6+572uXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgZHVyYXRpb246IDE1MDAsXG4gICAgLy8g5bGP5bmV6auY5bqmXG4gICAgd2luZG93SGVpZ2h0OiAnJyxcbiAgICAvL+WOn+Wni2pzb27mlbDmja7vvIjml6XmnJ/vvIlcbiAgICB0aW1lZGF0YToge30sXG4gICAgLy8g6L2s5YyW5ZCO55qE5pWw57uE5pWw5o2u77yI5pel5pyf77yJXG4gICAgZGF0YVRpbWVBcnI6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IGBgLFxuICAgICAgICBzdGFydERhdGU6YGAsXG4gICAgICAgIHRpbWVEYXRlOmBKdW5lIDE5LCAyMDE4YCxcbiAgICAgICAgZGF5TnVtOiAwLFxuICAgICAgICBmb290ZXJUZXh0OiBgYCxcbiAgICAgICAgcGVyY2VudGFnZTogMFxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICAvLyDorqHnrpfliankvZnml7bpl7RcbiAgZGF0ZVRpbWUobmFtZSkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCk7XG4gICAgLy8g6I635Y+W5b2T5YmN5pe26Ze05oizXG4gICAgbGV0IHRpbWVOb3cgPSB0aW1lLmdldFRpbWUoKTtcbiAgICAvLyDojrflj5bnq6/ljYjoioLml7bpl7TmiLNcbiAgICBzZWxmLnRpbWVkYXRhW25hbWVdLmRheU51bSA9IE51bWJlci5wYXJzZUludChcbiAgICAgIChEYXRlLnBhcnNlKHNlbGYudGltZWRhdGFbbmFtZV0udGltZURhdGUpIC0gdGltZU5vdykgLyAxMDAwIC8gNjAgLyA2MCAvIDI0XG4gICAgKTtcblxuICAgIC8vIOiOt+WPljbmnIjliJ3lkow35pyI5Yid5pe26Ze05oizXG4gICAgbGV0IHN0YXJ0RGF5ID0gRGF0ZS5wYXJzZShzZWxmLnRpbWVkYXRhW25hbWVdLnN0YXJ0RGF0ZSk7XG4gICAgbGV0IGxhc3REYXkgPSBEYXRlLnBhcnNlKHNlbGYudGltZWRhdGFbbmFtZV0udGltZURhdGUpO1xuICAgIC8vIOiOt+WPluacrOaciOi/m+W6pueZvuWIhuavlFxuICAgIGxldCBwZXJjZW50YWdlID0gKHRpbWVOb3cgLSBzdGFydERheSkgLyAobGFzdERheSAtIHN0YXJ0RGF5KTtcbiAgICBpZiAoIU51bWJlci5pc05hTihwZXJjZW50YWdlKSkge1xuICAgICAgc2VsZi50aW1lZGF0YVtuYW1lXS5wZXJjZW50YWdlID0gKHBlcmNlbnRhZ2UgKiAxMDApLnRvRml4ZWQoMikgKyBgJWA7XG4gICAgfVxuICB9XG5cbiAgLy8g6I635Y+W6IqC5pel5L+h5oGvXG4gIGdldERhdGVpbmZvKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAvLyDojrflj5ZiYW5uZXLlkoxjYXJk5Zu+54mH5pWw5o2uXG4gICAgbGV0IHRhYmxlSUQgPSAzNjU3MTtcbiAgICBsZXQgcmVjb3JkSUQgPSAnNWFmYjJkNGQ2NWMwYWQ2NTM1NGM2ZjYzJztcblxuICAgIGxldCBQcm9kdWN0ID0gbmV3IHd4LkJhYVMuVGFibGVPYmplY3QodGFibGVJRCk7XG5cbiAgICBQcm9kdWN0LmdldChyZWNvcmRJRCkudGhlbihcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UocmVzLmRhdGEudGVzdEpzb24pKTtcbiAgICAgICAgc2VsZi50aW1lZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEudGVzdEpzb24pO1xuICAgICAgICBsZXQgZGF0YVRpbWVBcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBzZWxmLnRpbWVkYXRhKSB7XG4gICAgICAgICAgc2VsZi5kYXRlVGltZShuYW1lKTtcbiAgICAgICAgICBkYXRhVGltZUFyci5wdXNoKHNlbGYudGltZWRhdGFbbmFtZV0pO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuZGF0YVRpbWVBcnIgPSBkYXRhVGltZUFycjtcbiAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7fTtcblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIC8vIOiOt+WPluaJi+acuuS/oeaBr1xuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICBzZWxmLmdldERhdGVpbmZvKCk7XG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgfVxufVxuIl19