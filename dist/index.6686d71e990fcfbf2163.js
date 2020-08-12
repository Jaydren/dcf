(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "dSPy":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return print; });
function print(text) {
    console.log(text);
  }

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "dSPy");

// import './style.scss';

function component() {
    const element = document.createElement('div');
 // lodash，现在通过一个 script 引入
    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    const btn = document.createElement('button');
    btn.innerHTML = '点击这里，然后查看 console！';
    btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(null, 'Hello webpack!'); 
    element.appendChild(btn);
    return element;
  }

  document.body.appendChild(component());


// function getComponent() {
//    return import( /* webpackChunkName: "lodash" */ 'lodash').then(({
//       default: _
//    }) => {
//       const element = document.createElement('div');

//       element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//       return element;

//    }).catch(error => 'An error occurred while loading the component');
// }
// getComponent().then(component => {
//    document.body.appendChild(component);
// })

/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEc7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQXVCO0FBQ3ZCO0FBQytCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2Q0FBQztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaURBQUssOEI7QUFDdkI7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUksQyIsImZpbGUiOiJpbmRleC42Njg2ZDcxZTk5MGZjZmJmMjE2My5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50KHRleHQpIHtcclxuICAgIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gIH0iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG4vLyBpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBQcmludCBmcm9tICcuL3ByaW50LmpzJztcclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gLy8gbG9kYXNo77yM546w5Zyo6YCa6L+H5LiA5LiqIHNjcmlwdCDlvJXlhaVcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWxsbycpO1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidG4uaW5uZXJIVE1MID0gJ+eCueWHu+i/memHjO+8jOeEtuWQjuafpeeciyBjb25zb2xl77yBJztcclxuICAgIGJ0bi5vbmNsaWNrID0gUHJpbnQuYmluZChudWxsLCAnSGVsbG8gd2VicGFjayEnKTsgXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcclxuLy8gICAgcmV0dXJuIGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJsb2Rhc2hcIiAqLyAnbG9kYXNoJykudGhlbigoe1xyXG4vLyAgICAgICBkZWZhdWx0OiBfXHJcbi8vICAgIH0pID0+IHtcclxuLy8gICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuLy8gICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XHJcblxyXG4vLyAgICAgICByZXR1cm4gZWxlbWVudDtcclxuXHJcbi8vICAgIH0pLmNhdGNoKGVycm9yID0+ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2FkaW5nIHRoZSBjb21wb25lbnQnKTtcclxuLy8gfVxyXG4vLyBnZXRDb21wb25lbnQoKS50aGVuKGNvbXBvbmVudCA9PiB7XHJcbi8vICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcclxuLy8gfSkiXSwic291cmNlUm9vdCI6IiJ9