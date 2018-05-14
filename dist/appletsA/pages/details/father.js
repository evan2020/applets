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
      navigationBarTitleText: '父亲节'
    }, _this.components = {}, _this.data = {
      windowHeight: '100%' //手机屏幕高度
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var self = this;

      //显示转发
      wx.showShareMenu({
        withShareTicket: true
      });

      // 获取手机信息
      wx.getSystemInfo({
        success: function success(res) {
          console.log(res.model);
          console.log(res.pixelRatio);
          console.log(res.windowWidth);
          console.log(res.windowHeight);
          console.log(res.language);
          console.log(res.version);
          console.log(res.platform);
          self.windowHeight = res.windowHeight;
        }
      });

      // 设置背景音乐
      var backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.title = '父亲';
      backgroundAudioManager.epname = '';
      backgroundAudioManager.singer = '筷子兄弟';
      backgroundAudioManager.coverImgUrl = 'https://om83cysj8.qnssl.com/a9d63448b881e12eab44fdfcdbd1cb7c_Fotor.png';
      backgroundAudioManager.src = 'https://om83cysj8.qnssl.com/at20111229221940.mp3';
    }

    // 当页面显示的时候

  }, {
    key: 'onShow',
    value: function onShow() {
      console.log('show');
      // 继续播放背景音乐
      var backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.play();
    }
  }, {
    key: 'onHide',
    value: function onHide() {
      console.log('hidden');
      var backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.pause();
    }

    // 当页面切换（隐藏）的时候

  }, {
    key: 'onUnload',
    value: function onUnload() {
      console.log('unload');
      // 暂停背景音乐
      var backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.pause();
    }
    // 设置分享卡片

  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      // 卡片内容
      return {
        title: '父亲节快乐',
        path: '/appletsA/pages/details/father',
        // 封面图
        imageUrl: 'https://om83cysj8.qnssl.com/%E7%88%B6%E4%BA%B2%E8%8A%8211_Fotor.jpg',
        success: function success(res) {
          // 转发成功
        },
        fail: function fail(res) {
          // 转发失败
        }
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'appletsA/pages/details/father'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdGhlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIndpbmRvd0hlaWdodCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsIm9wdGlvbnMiLCJzZWxmIiwid3giLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwibW9kZWwiLCJwaXhlbFJhdGlvIiwid2luZG93V2lkdGgiLCJsYW5ndWFnZSIsInZlcnNpb24iLCJwbGF0Zm9ybSIsImJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJnZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwidGl0bGUiLCJlcG5hbWUiLCJzaW5nZXIiLCJjb3ZlckltZ1VybCIsInNyYyIsInBsYXkiLCJwYXVzZSIsImZyb20iLCJ0YXJnZXQiLCJwYXRoIiwiaW1hZ2VVcmwiLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLG9CQUFjLE1BRFQsQ0FDZ0I7QUFEaEIsSyxRQUlQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVMsRTs7Ozs7MkJBRUZDLE8sRUFBUztBQUNkLFVBQUlDLE9BQU8sSUFBWDs7QUFFQTtBQUNBQyxTQUFHQyxhQUFILENBQWlCO0FBQ2ZDLHlCQUFpQjtBQURGLE9BQWpCOztBQUlBO0FBQ0FGLFNBQUdHLGFBQUgsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkMsa0JBQVFDLEdBQVIsQ0FBWUYsSUFBSUcsS0FBaEI7QUFDQUYsa0JBQVFDLEdBQVIsQ0FBWUYsSUFBSUksVUFBaEI7QUFDQUgsa0JBQVFDLEdBQVIsQ0FBWUYsSUFBSUssV0FBaEI7QUFDQUosa0JBQVFDLEdBQVIsQ0FBWUYsSUFBSVgsWUFBaEI7QUFDQVksa0JBQVFDLEdBQVIsQ0FBWUYsSUFBSU0sUUFBaEI7QUFDQUwsa0JBQVFDLEdBQVIsQ0FBWUYsSUFBSU8sT0FBaEI7QUFDQU4sa0JBQVFDLEdBQVIsQ0FBWUYsSUFBSVEsUUFBaEI7QUFDQWQsZUFBS0wsWUFBTCxHQUFvQlcsSUFBSVgsWUFBeEI7QUFDRDtBQVZjLE9BQWpCOztBQWFBO0FBQ0EsVUFBTW9CLHlCQUF5QmQsR0FBR2UseUJBQUgsRUFBL0I7QUFDQUQsNkJBQXVCRSxLQUF2QixHQUErQixJQUEvQjtBQUNBRiw2QkFBdUJHLE1BQXZCLEdBQWdDLEVBQWhDO0FBQ0FILDZCQUF1QkksTUFBdkIsR0FBZ0MsTUFBaEM7QUFDQUosNkJBQXVCSyxXQUF2QixHQUNFLHdFQURGO0FBRUFMLDZCQUF1Qk0sR0FBdkIsR0FDRSxrREFERjtBQUVEOztBQUVEOzs7OzZCQUNTO0FBQ1BkLGNBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDQSxVQUFNTyx5QkFBeUJkLEdBQUdlLHlCQUFILEVBQS9CO0FBQ0FELDZCQUF1Qk8sSUFBdkI7QUFDRDs7OzZCQUNRO0FBQ1BmLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsVUFBTU8seUJBQXlCZCxHQUFHZSx5QkFBSCxFQUEvQjtBQUNBRCw2QkFBdUJRLEtBQXZCO0FBQ0Q7O0FBRUQ7Ozs7K0JBQ1c7QUFDVGhCLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0E7QUFDQSxVQUFNTyx5QkFBeUJkLEdBQUdlLHlCQUFILEVBQS9CO0FBQ0FELDZCQUF1QlEsS0FBdkI7QUFDRDtBQUNEOzs7O3NDQUNrQmpCLEcsRUFBSztBQUNyQixVQUFJQSxJQUFJa0IsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCO0FBQ0FqQixnQkFBUUMsR0FBUixDQUFZRixJQUFJbUIsTUFBaEI7QUFDRDtBQUNEO0FBQ0EsYUFBTztBQUNMUixlQUFPLE9BREY7QUFFTFMsY0FBTSxnQ0FGRDtBQUdMO0FBQ0FDLGtCQUNFLHFFQUxHO0FBTUx0QixpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCO0FBQ0QsU0FSSTtBQVNMc0IsY0FBTSxjQUFTdEIsR0FBVCxFQUFjO0FBQ2xCO0FBQ0Q7QUFYSSxPQUFQO0FBYUQ7Ozs7RUF6RmdDLGVBQUt1QixJOztrQkFBbkJ2QyxLIiwiZmlsZSI6ImZhdGhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfniLbkurLoioInXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIHdpbmRvd0hlaWdodDogJzEwMCUnIC8v5omL5py65bGP5bmV6auY5bqmXG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge307XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvL+aYvuekuui9rOWPkVxuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyDojrflj5bmiYvmnLrkv6Hmga9cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMubW9kZWwpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMucGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy53aW5kb3dXaWR0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy53aW5kb3dIZWlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMubGFuZ3VhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudmVyc2lvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5wbGF0Zm9ybSk7XG4gICAgICAgIHNlbGYud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIOiuvue9ruiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci50aXRsZSA9ICfniLbkurInO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIuZXBuYW1lID0gJyc7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5zaW5nZXIgPSAn56235a2Q5YWE5byfJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLmNvdmVySW1nVXJsID1cbiAgICAgICdodHRwczovL29tODNjeXNqOC5xbnNzbC5jb20vYTlkNjM0NDhiODgxZTEyZWFiNDRmZGZjZGJkMWNiN2NfRm90b3IucG5nJztcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNyYyA9XG4gICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tL2F0MjAxMTEyMjkyMjE5NDAubXAzJztcbiAgfVxuXG4gIC8vIOW9k+mhtemdouaYvuekuueahOaXtuWAmVxuICBvblNob3coKSB7XG4gICAgY29uc29sZS5sb2coJ3Nob3cnKTtcbiAgICAvLyDnu6fnu63mkq3mlL7og4zmma/pn7PkuZBcbiAgICBjb25zdCBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgIGJhY2tncm91bmRBdWRpb01hbmFnZXIucGxheSgpO1xuICB9XG4gIG9uSGlkZSgpIHtcbiAgICBjb25zb2xlLmxvZygnaGlkZGVuJyk7XG4gICAgY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcbiAgICBiYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBhdXNlKCk7XG4gIH1cblxuICAvLyDlvZPpobXpnaLliIfmjaLvvIjpmpDol4/vvInnmoTml7blgJlcbiAgb25VbmxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ3VubG9hZCcpO1xuICAgIC8vIOaaguWBnOiDjOaZr+mfs+S5kFxuICAgIGNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XG4gICAgYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xuICB9XG4gIC8vIOiuvue9ruWIhuS6q+WNoeeJh1xuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpO1xuICAgIH1cbiAgICAvLyDljaHniYflhoXlrrlcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfniLbkurLoioLlv6vkuZAnLFxuICAgICAgcGF0aDogJy9hcHBsZXRzQS9wYWdlcy9kZXRhaWxzL2ZhdGhlcicsXG4gICAgICAvLyDlsIHpnaLlm75cbiAgICAgIGltYWdlVXJsOlxuICAgICAgICAnaHR0cHM6Ly9vbTgzY3lzajgucW5zc2wuY29tLyVFNyU4OCVCNiVFNCVCQSVCMiVFOCU4QSU4MjExX0ZvdG9yLmpwZycsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==