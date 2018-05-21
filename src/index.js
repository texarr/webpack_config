import _ from 'lodash';
import './style.css';
import './modules/all';
import Favicon from './images/favicon.ico';
import Konrafal from './images/konrafal2.jpg';

function lodashComponent() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack', 'from', 'index.js'], ' ');
    element.classList.add('hello');

    // Add the image to your existing div
    var myFavicon = new Image();
    myFavicon.src = '/dist/' + Favicon;

    element.appendChild(myFavicon);

    // Add the images as background image
    var konRafalImage = new Image();
    konRafalImage.src = Konrafal;

    // element.appendChild(konRafalImage);

    return element;
}

// lodash component is for learning cases only
document.body.appendChild(lodashComponent());