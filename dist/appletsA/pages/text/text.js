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
    }, _this.computed = {}, _this.methods = {
      onShareAppMessage: function onShareAppMessage(res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: '自定义转发标题',
          path: '/appletsA/pages/text/text?content=这是传递的参数进口量打算离开房间看电视进，口量圣诞节疯狂乱收费宽带缴费快乐十分离开就是了对方阿来得及，撒娇的快乐撒娇的，大家阿拉斯加的卡拉是假的，打瞌睡肯德基卡死了就打开啦，大撒即可来得快垃圾筐，大街上的快乐就打算离开大叔大婶，大撒娇的快乐撒娇的可垃圾的来看撒娇空间的，打手机打卡时间看撒娇的，打手机打卡机的卡拉是经典款垃圾死了肯德基啊，打手机打开撒娇的快乐撒娇了',
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      }

    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
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
    value: function onLoad(options) {
      var self = this;
      wx.showShareMenu({
        withShareTicket: true
      });
      var content = options.content;
      if (content) {
        this.content = content;
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJjb250ZW50IiwidGV4dCIsImxlbiIsInRpbWVyIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJyZXMiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInRpdGxlIiwicGF0aCIsInN1Y2Nlc3MiLCJmYWlsIiwiZXZlbnRzIiwic2VsZiIsInRleHRMZW4iLCJsZW5ndGgiLCJzdHIiLCJzdWJzdHIiLCIkYXBwbHkiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidGV4dFNob3ciLCJvcHRpb25zIiwid3giLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0w7QUFDQUMsZUFBUywwQkFGSjtBQUdMO0FBQ0FDLFlBQU0sRUFKRDtBQUtMO0FBQ0FDLFdBQUssQ0FOQTtBQU9MO0FBQ0FDLGFBQU87QUFSRixLLFFBV1BDLFEsR0FBVyxFLFFBOEJYQyxPLEdBQVU7QUFDUkMseUJBQW1CLDJCQUFTQyxHQUFULEVBQWM7QUFDL0IsWUFBSUEsSUFBSUMsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCO0FBQ0FDLGtCQUFRQyxHQUFSLENBQVlILElBQUlJLE1BQWhCO0FBQ0Q7QUFDRCxlQUFPO0FBQ0xDLGlCQUFPLFNBREY7QUFFTEMsZ0JBQU0sME5BRkQ7QUFHTEMsbUJBQVMsaUJBQVNQLEdBQVQsRUFBYztBQUNyQjtBQUNELFdBTEk7QUFNTFEsZ0JBQU0sY0FBU1IsR0FBVCxFQUFjO0FBQ2xCO0FBQ0Q7QUFSSSxTQUFQO0FBVUQ7O0FBaEJPLEssUUFxQlZTLE0sR0FBUyxFOzs7OzsrQkFqREU7QUFDVCxVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJZixNQUFNZSxLQUFLZixHQUFmO0FBQ0EsVUFBSWdCLFVBQVVELEtBQUtqQixPQUFMLENBQWFtQixNQUEzQjtBQUNBLFVBQUlDLE1BQU1ILEtBQUtqQixPQUFmOztBQUVBb0IsWUFBTUEsSUFBSUMsTUFBSixDQUFXLENBQVgsRUFBY25CLEdBQWQsQ0FBTjtBQUNBZSxXQUFLaEIsSUFBTCxHQUFZbUIsR0FBWjtBQUNBbEI7QUFDQWUsV0FBS2YsR0FBTCxHQUFXQSxHQUFYO0FBQ0FlLFdBQUtLLE1BQUw7O0FBRUEsVUFBSXBCLE1BQU1nQixPQUFWLEVBQW1CO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQUsscUJBQWFOLEtBQUtkLEtBQWxCO0FBQ0Q7O0FBRUQ7QUFDQWMsV0FBS2QsS0FBTCxHQUFhcUIsV0FBVyxZQUFNO0FBQzVCUCxhQUFLUSxRQUFMO0FBQ0QsT0FGWSxFQUVWLEdBRlUsQ0FBYjtBQUdEOzs7MkJBMkJNQyxPLEVBQVM7QUFDZCxVQUFJVCxPQUFPLElBQVg7QUFDQVUsU0FBR0MsYUFBSCxDQUFpQjtBQUNmQyx5QkFBaUI7QUFERixPQUFqQjtBQUdBLFVBQUk3QixVQUFRMEIsUUFBUTFCLE9BQXBCO0FBQ0EsVUFBR0EsT0FBSCxFQUFXO0FBQ1QsYUFBS0EsT0FBTCxHQUFhQSxPQUFiO0FBQ0Q7QUFFRjs7OzZCQUNRO0FBQ1AsVUFBSWlCLE9BQU8sSUFBWDtBQUNBQSxXQUFLUSxRQUFMO0FBRUQ7Ozs7RUFyRmdDLGVBQUtLLEk7O2tCQUFuQm5DLEsiLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmloflrZfpgJDooYzmmL7npLonXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIC8v5paH5a2X55qE5YWo6YOo5YaF5a65XG4gICAgY29udGVudDogJ+i/meaYr+S4gOS4qmRlbW/vvIzmtYvor5XpgJDooYzmmL7npLrmloflrZfvvIjmiZPlrZfmnLrmlYjmnpzvvIknLFxuICAgIC8v6KaB5pi+56S655qE5paH5a2X5YaF5a65XG4gICAgdGV4dDogJycsXG4gICAgLy/liJ3lp4vmloflrZfplb/luqZcbiAgICBsZW46IDEsXG4gICAgLy/lrprml7blmahcbiAgICB0aW1lcjogbnVsbFxuICB9O1xuXG4gIGNvbXB1dGVkID0ge307XG5cbiAgdGV4dFNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBsZW4gPSBzZWxmLmxlbjtcbiAgICBsZXQgdGV4dExlbiA9IHNlbGYuY29udGVudC5sZW5ndGg7XG4gICAgbGV0IHN0ciA9IHNlbGYuY29udGVudDtcblxuICAgIHN0ciA9IHN0ci5zdWJzdHIoMCwgbGVuKTtcbiAgICBzZWxmLnRleHQgPSBzdHI7XG4gICAgbGVuKys7XG4gICAgc2VsZi5sZW4gPSBsZW47XG4gICAgc2VsZi4kYXBwbHkoKTtcblxuICAgIGlmIChsZW4gPiB0ZXh0TGVuKSB7XG4gICAgICAvL+W+queOr+aYvuekulxuICAgICAgLy8gc2VsZi5sZW4gPSAwO1xuXG4gICAgICAvL+a4hemZpOWumuaXtuWZqO+8iOiuqeWGheWuueWPquaYvuekuuS4gOasoe+8iVxuICAgICAgY2xlYXJUaW1lb3V0KHNlbGYudGltZXIpO1xuICAgIH1cblxuICAgIC8vIOiuvue9ruavj+malOWkmuS5heaYvuekuuS4gOS4quWtl++8iOaWh+Wtl+aYvuekuumAn+W6pu+8iVxuICAgIHNlbGYudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNlbGYudGV4dFNob3coKTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgXG5cbiAgbWV0aG9kcyA9IHtcbiAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn6Ieq5a6a5LmJ6L2s5Y+R5qCH6aKYJyxcbiAgICAgICAgcGF0aDogJy9hcHBsZXRzQS9wYWdlcy90ZXh0L3RleHQ/Y29udGVudD3ov5nmmK/kvKDpgJLnmoTlj4LmlbDov5vlj6Pph4/miZPnrpfnprvlvIDmiL/pl7TnnIvnlLXop4bov5vvvIzlj6Pph4/lnKPor57oioLnlq/ni4LkubHmlLbotLnlrr3luKbnvLTotLnlv6vkuZDljYHliIbnprvlvIDlsLHmmK/kuoblr7nmlrnpmL/mnaXlvpflj4rvvIzmkpLlqIfnmoTlv6vkuZDmkpLlqIfnmoTvvIzlpKflrrbpmL/mi4nmlq/liqDnmoTljaHmi4nmmK/lgYfnmoTvvIzmiZPnnoznnaHogq/lvrfln7rljaHmrbvkuoblsLHmiZPlvIDllabvvIzlpKfmkpLljbPlj6/mnaXlvpflv6vlnoPlnL7nrZDvvIzlpKfooZfkuIrnmoTlv6vkuZDlsLHmiZPnrpfnprvlvIDlpKflj5TlpKflqbbvvIzlpKfmkpLlqIfnmoTlv6vkuZDmkpLlqIfnmoTlj6/lnoPlnL7nmoTmnaXnnIvmkpLlqIfnqbrpl7TnmoTvvIzmiZPmiYvmnLrmiZPljaHml7bpl7TnnIvmkpLlqIfnmoTvvIzmiZPmiYvmnLrmiZPljaHmnLrnmoTljaHmi4nmmK/nu4/lhbjmrL7lnoPlnL7mrbvkuobogq/lvrfln7rllYrvvIzmiZPmiYvmnLrmiZPlvIDmkpLlqIfnmoTlv6vkuZDmkpLlqIfkuoYnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgXG4gIH07XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KVxuICAgIGxldCBjb250ZW50PW9wdGlvbnMuY29udGVudDtcbiAgICBpZihjb250ZW50KXtcbiAgICAgIHRoaXMuY29udGVudD1jb250ZW50O1xuICAgIH1cbiAgICBcbiAgfVxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYudGV4dFNob3coKTtcbiAgICBcbiAgfVxufVxuIl19