// import _ from 'lodash';
// // import './style.scss';
// import Print from './print.js';
// function component() {
//     const element = document.createElement('div');
//  // lodash，现在通过一个 script 引入
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');
//     const btn = document.createElement('button');
//     btn.innerHTML = '点击这里，然后查看 console！';
//     btn.onclick = Print.bind(null, 'Hello webpack!'); 
//     element.appendChild(btn);
//     return element;
//   }

//   document.body.appendChild(component());


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

import _ from 'lodash';
import numRef from './ref.json';

export function numToWord(num) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum;
  }, '');
}

export function wordToNum(word) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1);
}