'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var zanSwitch = function (_wepy$component) {
  _inherits(zanSwitch, _wepy$component);

  function zanSwitch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanSwitch.__proto__ || Object.getPrototypeOf(zanSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      items: Object,
      name: {
        type: String,
        default: ''
      },
      activeColor: {
        type: String,
        default: '#ff4444'
      },
      checkedValue: Number,
      componentId: String
    }, _this.data = {}, _this.methods = {
      handleZanSelectChange: function handleZanSelectChange(e) {
        var value = e.detail.value;
        console.info('[zan:Select:change]', value, e);
        this.$emit('zanSelectChange', value);
      }
    }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanSwitch;
}(_wepy2.default.component);

exports.default = zanSwitch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi1zZWxlY3QuanMiXSwibmFtZXMiOlsiemFuU3dpdGNoIiwicHJvcHMiLCJpdGVtcyIsIk9iamVjdCIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImFjdGl2ZUNvbG9yIiwiY2hlY2tlZFZhbHVlIiwiTnVtYmVyIiwiY29tcG9uZW50SWQiLCJkYXRhIiwibWV0aG9kcyIsImhhbmRsZVphblNlbGVjdENoYW5nZSIsImUiLCJ2YWx1ZSIsImRldGFpbCIsImNvbnNvbGUiLCJpbmZvIiwiJGVtaXQiLCJjb21wdXRlZCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU9DLE1BREQ7QUFFTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTO0FBRkwsT0FGQTtBQU1OQyxtQkFBYTtBQUNYSCxjQUFNQyxNQURLO0FBRVhDLGlCQUFTO0FBRkUsT0FOUDtBQVVORSxvQkFBY0MsTUFWUjtBQVdOQyxtQkFBYUw7QUFYUCxLLFFBYVJNLEksR0FBTyxFLFFBQ1BDLE8sR0FBVTtBQUNSQywyQkFEUSxpQ0FDY0MsQ0FEZCxFQUNpQjtBQUN2QixZQUFJQyxRQUFRRCxFQUFFRSxNQUFGLENBQVNELEtBQXJCO0FBQ0FFLGdCQUFRQyxJQUFSLENBQWEscUJBQWIsRUFBb0NILEtBQXBDLEVBQTJDRCxDQUEzQztBQUNBLGFBQUtLLEtBQUwsQ0FBVyxpQkFBWCxFQUE4QkosS0FBOUI7QUFDRDtBQUxPLEssUUFPVkssUSxHQUFXLEU7Ozs7RUF0QjBCLGVBQUtDLFM7O2tCQUF2QnRCLFMiLCJmaWxlIjoiemFuLXNlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgemFuU3dpdGNoIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBpdGVtczogT2JqZWN0LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBhY3RpdmVDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyNmZjQ0NDQnXG4gICAgfSxcbiAgICBjaGVja2VkVmFsdWU6IE51bWJlcixcbiAgICBjb21wb25lbnRJZDogU3RyaW5nXG4gIH1cbiAgZGF0YSA9IHt9XG4gIG1ldGhvZHMgPSB7XG4gICAgaGFuZGxlWmFuU2VsZWN0Q2hhbmdlKGUpIHtcbiAgICAgIGxldCB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICBjb25zb2xlLmluZm8oJ1t6YW46U2VsZWN0OmNoYW5nZV0nLCB2YWx1ZSwgZSlcbiAgICAgIHRoaXMuJGVtaXQoJ3phblNlbGVjdENoYW5nZScsIHZhbHVlKVxuICAgIH1cbiAgfVxuICBjb21wdXRlZCA9IHt9XG59XG4iXX0=