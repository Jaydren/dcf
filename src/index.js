import _ from 'lodash';
import './style.scss';
import printMe from './print.js';
function component() {
    const element = document.createElement('div');

 // lodash，现在通过一个 script 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const btn = document.createElement('button');
    btn.innerHTML = '点击这里，然后查看 console！';
    btn.onclick = printMe; element.appendChild(btn);
    return element;
  }
  
  document.body.appendChild(component());

  
 if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }