import _ from 'lodash';
import './style.css';
import './modules/all';
import Favicon from './images/favicon.ico';

function lodashComponent() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack', 'from', 'index.js'], ' ');
    element.classList.add('hello');

    // Add the image to your existing div
    var myFavicon = new Image();
    myFavicon.src = './dist/' + Favicon;

    element.appendChild(myFavicon);

    return element;
}

// lodash component is for learning cases only
document.body.appendChild(lodashComponent());